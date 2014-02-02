console.log('running');

var FB_ID;
var first;
var last;
var email;
var accessToken;
var replay = "false";
var loveSent;
var defaultText = "Keep looking for new clues on our facebook page to find more bottles!";

window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : '353773181390007',                        // App ID from the app dashboard
      frictionlessRequests : true,                       // App ID from the app dashboard
      channelUrl : 'https://www.thenicheguys.com/clients/comfort/lavender/channel.php', // Channel file for x-domain comms
      status     : true,                                 // Check Facebook Login status
      xfbml      : true,						 // Look for social plugins on the page
      oauth		 : true                                 
    });

    // Additional initialization code such as adding Event Listeners goes here
    
    
 FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // connected
    //click on profile
    $('#install-comfort-hunt').show().click(function(){
    	var nwin = safari.application.openBrowserWindow();
    	nwin.activeTab.url = "https://www.facebook.com/ComfortZoneSouthAfrica/app_190322544333196";
    
    });
	
	getSendInfo();
  
  } else if (response.status === 'not_authorized') {
  
  	//not logged into the app
  	$('#score').html("0");
  
  	//click on profile
  	$('#install-comfort-hunt').show().click(function(){
    	var nwin = safari.application.openBrowserWindow();
    	nwin.activeTab.url = "https://www.facebook.com/ComfortZoneSouthAfrica/app_190322544333196";
    	
  	});
  } else {
  	//not logged into facebook
   $('#connect').show().click(function(){
   		var nwin = safari.application.openBrowserWindow();
  		nwin.activeTab.url = "http://www.facebook.com";
   });
   $('#install-comfort-hunt').hide();
  }
 });
 
   

};

  // Load the SDK asynchronously
  
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   
   function login() {
    FB.login(function(response) {
        if (response.authResponse) {
            // connected
            $('#connect').hide();
            $('#install-comfort-hunt').show();
            showButtons();
            getSendInfo();   
        } else {
            // cancelled
        }
    }, {scope: 'email, publish_actions'});
};


function getSendInfo(){

FB.api('/me', {fields: "picture,id,first_name,last_name, name, email"}, function(response) {
   	FB_ID = response.id;
	first = response.first_name;
	last = response.last_name;
	email = response.email;
    accessToken = response.accessToken;

		$.ajax({ url: 'https://www.thenicheguys.com/clients/comfort/lavender/database/setHome.php',
         data: { FB_ID: FB_ID, first: first, last: last, email: email },
         type: 'post',
         success: function(output) {	
                      var userData = jQuery.parseJSON(output);
                      $('#score').html(userData.count) 
                  }
		});

	});
};