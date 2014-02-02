window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});

var currentpage = "home";
var currentzIndex;

var AppRouter = Backbone.Router.extend({
		routes: {
			"products": "products",
			"hygiene": "hygiene",
			"contact": "contact",
			"home": "home",
			"about": "about"
		}
})

	//Initiate router 

	var app_router = new AppRouter;
	
	app_router.on('route:products', function(){pagination('products')});
	app_router.on('route:hygiene', function(){pagination('hygiene')});
	app_router.on('route:contact', function(){pagination('contact')});
	app_router.on('route:home', function(){pagination('home')});
	app_router.on('route:about', function(){pagination('about')});
	
	//initiates back & forward browser nav 
	Backbone.history.start();



function pagination(page){
	
	
	if(page != "home"){
	
		currentzIndex = parseInt($('#' + currentpage).css("z-index"));
		$('#' + currentpage).css({"z-index": currentzIndex - 1});
		$('#' + page).css({"z-index": currentzIndex});
		injectContent(page);
		
	//if going home
	}else if(page == "home" && currentpage != 'home'){
		$("#" + currentpage).fadeOut();
		currentpage = page;
	}
}




function injectContent(page){
	
	//insert images into html
	$('#' + page + ' img').each(function(){
		$(this).attr("src", $(this).attr("data-original"));
		$(this).removeAttr("data-original");
	});
	
	//slidedown content
	$('#' + page).slideDown(function(){
		
		if(page == 'contact'){
			$('.main_form-before').addClass('main_form').removeClass('main_form-before');
		}
		if(currentpage != "home"){
			$("#" + currentpage).hide();
		}
		currentpage = page;
		
	});//end slide
}



