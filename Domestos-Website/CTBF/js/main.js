$(window).load(function(){

	
	//setup slider
	$('#slider').flexslider({
		animation: "fade"
	});
	
	
	
	//check window size
	function windowSize(){
		windowHeight = window.innerHeight;
		halfWindowHeight = windowHeight / 2;
		$('.container').css({"height": window.innerHeight + "px"});
		checkPage();
	}
	var windowHeight;
	var halfWindowHeight;
	windowSize();
	
	
	
	var page;
	
	
	//check what page to move to
	function checkPage(){
		var scroll = $('body').scrollTop();
		
		switch(scroll){
			case 0:
				page = 0;
				break;
			case (windowHeight):
				page = 1;
				break;
			case (windowHeight*2):
				page = 2;
				break;
			case (windowHeight*3):
				page = 3;
				break;
			default:
				//if scroll less than half
				if(scroll < windowHeight / 2){
					page = 0;
				//between half and page2.5
				}else if(windowHeight/2 < scroll && scroll < (windowHeight + halfWindowHeight)){
					page = 1;
				//between page2.5 and 3.5
				}else if((windowHeight + halfWindowHeight) < scroll && scroll < (windowHeight + windowHeight + halfWindowHeight)){
					page = 2;
				//between page3.5 and 4.4 - (4.5 for resize security instead of just 4)
				}else if((windowHeight + windowHeight + windowHeight + halfWindowHeight) < scroll && scroll < (windowHeight + windowHeight + halfWindowHeight)){
					page = 3;
				}
				break;
		}
		scrollToPage();
	}
	
	
	
	
	//move to page
	function scrollToPage(){
		console.log($('.level-' + (page + 1) + ' article'));
		$('.level-' + (page + 1) + ' article').fadeOut();
		
		$('body').animate({
	        scrollTop: windowHeight * page
	    }, 800, function(){
		   	
		   	switch(page){
			   	case 0:
	       			$('.light').removeClass('light');
		   			$('.level-1 div').addClass('light');
		   			break;
		   		case 1:
	       			$('.light').removeClass('light');
		   			$('.level-2 div').addClass('light');
		   			break;
		   		case 2:
	       			$('.light').removeClass('light');
		   			$('.level-3 div').addClass('light');
		   			break;
		   		case 3:
	       			$('.light').removeClass('light');
		   			$('.level-4 div').addClass('light');
		   			break;
		   		default:
		   			break;
		   	}
		   	allowScroll = true;
		   	
	    });
	}
	
	
	
	
	//when buttons clicked
    $(".level-1").click(function() {
	    page = 0;
	    scrollToPage();
	});
	$(".level-2").click(function() {
		page = 1;
	    scrollToPage();
	});
	$(".level-3").click(function() {
		page = 2;
	   scrollToPage();
	});
	$(".level-4").click(function() {
		page = 3;
	    scrollToPage();
	});
	
	
	//when buttons hover
	$('.blue-buttons ul li a div').hover(function(){
		$(this).parent().parent().find('span').fadeIn(200);
	}, function(){
		$(this).parent().parent().find('span').fadeOut(200);
	})
	
	
	
	
	
	//Check Scroll Direction
	var	allowScroll = true;
		
	$('body').mousewheel(function(event, delta) {
			if(allowScroll == true){
				if(delta < 0 && page < 3){
					allowScroll = false;
			        page++;
			        scrollToPage();
		        }else if(delta > 0 && page > 0){
		        	allowScroll = false;
			        page--;
			        scrollToPage();
		        }
			}
	      	
    });
    
    //when scroll release
	/*$(window).scroll(function() {
	    clearTimeout($.data(this, 'scrollTimer'));
	    $.data(this, 'scrollTimer', setTimeout(function() {
	        
	    }, 250));
	});*/
	
	
	
	
	
	//arrow keys
	document.onkeydown = checkKey;

	function checkKey(e) {
	
	    e = e || window.event;
		
	    if (e.keyCode == '38' && allowScroll == true) {
	    	allowScroll = false;
	    	//arrow up
	        page--;
	        scrollToPage();
	    }
	    else if (e.keyCode == '40'  && allowScroll == true) {
	    	allowScroll = false;
	        // down arrow
	        page++;
	        scrollToPage();
	    }
	}
	
	
	
	
	
	//on resize
	$( window ).resize(function() {
		clearTimeout($.data(this, 'resizeTimer'));
	    $.data(this, 'resizeTimer', setTimeout(function() {
	        windowSize();
	    }, 250));
	});
	
    
    
    
    
});















































/*
var level = 0;
var page1 = false,
	page2 = false,
	page3 = false,
	page4 = false;
	
	
$(function () {
    $.srSmoothscroll();
});


(function($) {
    'use strict';

    $.srSmoothscroll = function(options) {
    
    var windowheight = window.innerHeight;
    var height = windowheight + "px";
    
    var self = $.extend({
        step: windowheight,//px scroll amount
        speed: 800//speed of it
    }, options || {});
    
    // private fields & init
    var win = $(window),
        doc = $(document),
        top = 0,
        step = self.step,
        speed = self.speed,
        viewport = window.innerHeight,
        body = $.browser.webkit ? $('body') : $('html'),
        wheel = false;
	
	$('.container').css({"height": height});
	
    // events
    $('body').mousewheel(function(event, delta) {
	    if(wheel == false){
	        wheel = true;
	
	        if (delta < 0) // down
	        {
	            top = (top+viewport) >= doc.height() ? top : top+=step;
	            }
	        else // up
	            top = top <= 0 ? 0 : top-=step;
	
	        body.stop().animate({scrollTop: top}, speed, function () {
	           changePage();
	           setTimeout(function(){
		           wheel = false;
	           }, 500)
		            
			   
	        });
	     }

        return false;
    });

    win.on('resize', function (e) {
        viewport = window.innerHeight;
        step = window.innerHeight;
        $('.container').css({"height": window.innerHeight + "px"});
    })
    .on('scroll', function (e) {
        if (!wheel)
            top = win.scrollTop();
    });
    };
    
    
    var butSpeed = 800;
    //Scroll to buttons
    $(".level-1").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#level-1").offset().top
	    }, butSpeed, function(){
		    changePage();
	    });
	});
	$(".level-2").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#level-2").offset().top
	    }, butSpeed, function(){
		    changePage();
	    });
	});
	$(".level-3").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#level-3").offset().top
	    }, butSpeed, function(){
		    changePage();
	    });
	});
	$(".level-4").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#level-4").offset().top
	    }, butSpeed, function(){
		    changePage();
	    });
	});
	
	
	
	
	
	function changePage(){
		switch($(window).scrollTop()){
	       case 0:
	       		$('.light').removeClass('light');
	       		$('.level-1').addClass('light');
	       		break;
	       	case (window.innerHeight):
	       		$('.light').removeClass('light');
	       		$('.level-2').addClass('light');
	       		break;
	       	case (window.innerHeight * 2):
	       		$('.light').removeClass('light');
	       		$('.level-3').addClass('light');
	       		break;
	       	case (window.innerHeight * 3):
	       		$('.light').removeClass('light');
	       		$('.level-4').addClass('light');
	       		break;
	       	default:
	       		break;
	   }
	
	}
	
	window.onload = function(){
		changePage();
		$('#slider').flexslider({
			animation: "fade"
		});
	};
	
})(jQuery)

*/

































