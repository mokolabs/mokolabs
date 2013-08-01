require 'sinatra'

set :environment, :production
set :public_folder, File.expand_path('public', File.dirname(__FILE__))
enable :static

before do
  redirect request.url.sub(/www\./, ''), 301 if request.host =~ /^www/
end

get "/" do
  response.headers['Cache-Control'] = 'public, max-age=300'
  File.read(File.join(settings.public_folder, "/index.html"))
end

get "/feed/atom", :provides => ['atom'] do
  redirect "/feed/atom.xml", 301
end

get "/feed/atom.xml", :provides => ['atom'] do
  response.headers['Cache-Control'] = 'public, max-age=300'
  File.read(File.join(settings.public_folder, "/feed/atom.xml"))
end

get "/*" do
  response.headers['Cache-Control'] = 'public, max-age=300'
  File.read(File.join(settings.public_folder, params[:splat][0] + "/index.html"))
end

get "/:page?/" do
  response.headers['Cache-Control'] = 'public, max-age=300'
  File.read(File.join(settings.public_folder, params[:page] + "/index.html"))
end