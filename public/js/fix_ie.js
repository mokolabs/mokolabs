/* RESTORE LINK BEHAVIOR ON MAIN NAVIGATION */

var web = {
	'#web' : function(element){
		element.onclick = function(){
			window.open('/web/','_self');
		}
	}
};

var photo = {
	'#photo' : function(element){
		element.onclick = function(){
			window.open('/photo/','_self');
		}
	}
};

var film = {
	'#film' : function(element){
		element.onclick = function(){
			window.open('/film/','_self');
		}
	}
};
	
Behaviour.register(web);
Behaviour.register(photo);
Behaviour.register(film);


/* RESTORE TRANSPARENCY ON PNGs */

function correctPNG()
// correctly handle PNG transparency in Win IE 5.5 & 6.
// http://homepage.ntlworld.com/bobosola/
{
   var arVersion = navigator.appVersion.split("MSIE")
   var version = parseFloat(arVersion[1])
   if ((version >= 5.5) && (document.body.filters)) 
   {
      for(var i=0; i<document.images.length; i++)
      {
         var img = document.images[i]
         var imgName = img.src.toUpperCase()
         if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
         {
            var imgID = (img.id) ? "id='" + img.id + "' " : ""
            var imgClass = (img.className) ? "class='" + img.className + "' " : ""
            var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
            var imgStyle = "display:inline-block;" + img.style.cssText 
            if (img.align == "left") imgStyle = "float:left;" + imgStyle
            if (img.align == "right") imgStyle = "float:right;" + imgStyle
            if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
            var strNewHTML = "<span " + imgID + imgClass + imgTitle
            + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
            + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
            + "(src=\'" + img.src + "\', sizingMethod='crop');\"></span>" 
            img.outerHTML = strNewHTML
            i = i-1
         }
      }
   }    
}

correctPNG();
