 //------- header window -------//
			new navMenu( document.getElementById( 'nav-menu' ) );
			
			$(window).on('load resize', function(){
				$('.header').height($(this).height() - 60);
			});
			
//------ text specialities blocks -------//			
			$(document).ready(function(){  
			    $(".grid li span").hover(function () {
			       // $(this).next().css({"visibility" : "visible"});   
			        $("figcaption").css({"display" : "inline-block"});
			    },function () {
			        //$(this).next().css({"visibility" : "hidden"}); 
			        $("figcaption").css({"display" : "none"}); 
			    });
			});
			
			
//------- percent bars -------//			
			
			// Returns true if the specified element has been scrolled into the viewport.
		function isElementInViewport(elem) {
		    var $elem = $(elem);
		
		    // Get the scroll position of the page.
		    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
		    var viewportTop = $(scrollElem).scrollTop();
		    var viewportBottom = viewportTop + $(window).height();
		
		    // Get the position of the element on the page.
		    var elemTop = Math.round( $elem.offset().top );
		    var elemBottom = elemTop + $elem.height();
		
		    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
		}
		
		// Check if it's time to start the animation.
		function checkAnimation() {
		    var $elem = $('.bar .level90 , .level80 , .level70 , .level60');
		
		    // If the animation has already been started
		    if ($elem.hasClass('start')) return;
		
		    if (isElementInViewport($elem)) {
		        // Start the animation
		        $elem.addClass('start');
		    }
		}
		
		// Capture scroll events
		$(window).scroll(function(){
		    checkAnimation();
		});