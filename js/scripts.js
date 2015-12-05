 
$(function(){
			    
			    $("[data-bg-speed]").each(function() {
				    var self = $(this);
					var speed = $(this).attr("data-bg-speed");
					
					$(this).css({
						transition : 'all '+speed+'ms linear'
					});
		       		
		       		var x = 0;
					setInterval(function(){
						x-=1;
						self.css('background-position', '0px '+ x +'%');
			    	}, speed);
				});
			});
			
			$(window).scroll(function () {
			    var scrollTop = $(window).scrollTop();
			    var height = $(window).height();
			    var total = (((height) - scrollTop) / height)
			    //console.log(total);
			    $('.home-cover_text').css({
			        'opacity': total
			    });
			    $('#hero').css({
			        'height': height - scrollTop
			    });
			});
			
jQuery(function ($) {
    $('.logo').hover(function () {
        $('body').addClass('is-menu');
     });
})
jQuery(function ($) {
    $('.aside-overlay').hover( function () {
        $('body').removeClass('is-menu');
     });
})