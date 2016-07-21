(function($){
				$.fn.efecto=function()
				{
				var zoom=100;
						$(".galeria div li  img").each(function(){
					$(this).load(function(){
					
					var difx=($(this).width()-340)/2;
					var dify=($(this).height()-340)/2;
					$(this).css("margin-left",-difx);
					$(this).css("margin-top",-dify);
					$(this).attr("origw", $(this).width());
					$(this).attr("origh", $(this).height());
					$(this).attr("mw",difx);
					$(this).attr("mh",dify);
				});
				$(this).hover(
				function(){
						var w=Number($(this).attr("origw"))+zoom;
						var mw=zoom/2;
						$(this).dequeue();
						$(this).animate({"width":w,"margin-left":"+=-"+mw, "margin-top":"+=-"+mw},100,"backout");
						},
					function(){
							var mw=Number($(this).attr("mw"));
							var mh=Number($(this).attr("mh"));
							var w=Number($(this).attr("origw"));
							$(this).dequeue();
							$(this).animate({"width":w, "margin-left":-mw, "margin-top":-mh},100,"backout");
							});
					});
					
		}
	})(jQuery)	
	