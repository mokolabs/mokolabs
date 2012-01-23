require './server'
require 'rack-rewrite'

use Rack::Rewrite do
  r301 %r{.*}, 'http://mokolabs.com$&', :if => Proc.new {|rack_env|
    rack_env['SERVER_NAME'] != 'mokolabs.com'
  }
end

run Sinatra::Application
