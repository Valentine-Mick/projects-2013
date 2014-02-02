$(function() {
            $(window).scroll(function(){
				var scrollTop = $(window).scrollTop();
				if(scrollTop + $(window).height() >= $(document).height() - 15)
					$('#footer').stop().animate({'opacity':'1'},400);
				else	
					$('#footer').stop().animate({'opacity':'0'},400);
			});
			
			$('#footer').hover(
				function (e) {
					var scrollTop = $(window).scrollTop();
					if(scrollTop != 400){
						$('#footer').stop().animate({'opacity':'1'},400);
					}
				},
				function (e) {
					var scrollTop = $(window).scrollTop();
					if(scrollTop != 400){
						$('#footer').stop().animate({'opacity':'0'},400);
					}
				}
			);
        });