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
      appId      : '353773181390007', 
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
    showButtons();
    accessToken = response.authResponse.accessToken;
	getSendInfo();
  } else if (response.status === 'not_authorized') {
  	//not logged into the app
  	$('#connect').show().click(function(){login();});
  } else {
  	//not logged into facebook
   $('#connect').show().click(function(){login();});
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
	
	$('#name').html(response.name);
	$('#picture').html("<img src='" + response.picture.data.url + "' width='80px'>");

		$.ajax({ url: 'https://www.thenicheguys.com/clients/comfort/lavender/database/setHome.php',
         data: { FB_ID: FB_ID, first: first, last: last, email: email },
         type: 'post',
         success: function(output) {	
                      $('#score').html(output)
                      var score = parseInt($('#score').html());
                      if(score == 5){
                      		limit();
                      		};
                       //get entries
                      $.ajax({ url: 'https://www.thenicheguys.com/clients/comfort/lavender/database/entries.php',
	                      data: { FB_ID: FB_ID},
	                      type: 'post',
	                      success: function(output) {
		                      $('#entries').html("<span>Prize entries: " + output + "</span>");
		                      if(parseInt(output) < 2){
			                    	defaultText = "You have " + output + " entry to WIN a second honeymoon with Comfort. Play again to increase your chances."
		                      }else{
		                      		defaultText = "You have " + output + " entries to WIN a second honeymoon with Comfort. Play again to increase your chances."
		                      }//if-else plural
		                      
		                      document.getElementById('para').innerHTML = defaultText;
	                      
	                      }//success
	                      
	                  });//ajax   
                  }
		});

	});
};


function showButtons(){
	$('#facebook').show();
	$('#twitter').show();
	$('#leftcopy').show();	


//hover over buttons
var sendLove = document.getElementById('facebook');
var tweetBottle = document.getElementById('twitter');
var send = document.getElementById('email');

sendLove.onmouseover = function(){
	document.getElementById('header').innerHTML = "Show your love with Lavender";
	document.getElementById('para').innerHTML = "Give a friend a bottle.";
};

sendLove.onmouseout = function(){
	document.getElementById('header').innerHTML = "WELL DONE!";
	document.getElementById('para').innerHTML = defaultText;
};

tweetBottle.onmouseover = function(){
	document.getElementById('header').innerHTML = "Tweet for a bottle";
	document.getElementById('para').innerHTML = " ";
};

tweetBottle.onmouseout = function(){
	document.getElementById('header').innerHTML = "WELL DONE!";
	document.getElementById('para').innerHTML = defaultText;
};



};

function postToFriend(response){	
        returnArray.push(response);
	
	var friend = response;
        // calling the API ...
        var obj = {
          method: 'feed',
          link: 'https://thenicheguys.com/clients/comfort/lavender/index.html#',
          picture: 'https://www.thenicheguys.com/clients/comfort/lavender/images/lavender.png',
          name: 'Show Your Love With Lavender',
          caption: ' ',
          description: 'You could win a second honeymoon with Comfort. Click here to play. PS: I have given you a headstart.',
          display: 'iframe',
          to: response
        };

        function callback(response) {
         setScores(friend);
        }

        FB.ui(obj, callback);



};


function setScores(friend){
		FB.api('/me', function(response) {
   	var FB_ID = response.id;
	var first = response.first_name;
	var last = response.last_name;
	var email = response.email;
	$.ajax({ url: 'https://www.thenicheguys.com/clients/comfort/lavender/database/sendLove.php',
         data: { FB_ID: FB_ID, first: first, last: last, email: email, friend: friend},
         type: 'post',
         success: function(output) {
         				
                  }//ajax response
		});//ajax
});//fb.api
}//set scores


function limit(){
	
	$('#twitter').css({
		"opacity": "0.4",
		"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
		"filter": "alpha(opacity=50)"
	});
	$('#replay').show();
	$('#replay').click(function(){
		unlimit();
		$.ajax({ url: 'https://www.thenicheguys.com/clients/comfort/lavender/database/replay.php',
         data: { FB_ID: FB_ID},
         type: 'post',
         success: function(output) {	
                  	$('#score').html("0")
                  }//ajax response
		});//ajax
		
});//twitter click
	$('#twitter').attr("href", "#").attr("target", "");
	
	
}

function unlimit(){
	localStorage.removeItem('comfortQuit');
	$('#replay').hide();
	$('#twitter').css({
		"opacity": "1",
		"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
		"filter": "alpha(opacity=100)"
	});
	$('#twitter').attr("href", "https://twitter.com/intent/tweet?url=http://bit.ly/87fg&text=Fingers%20crossed!%20Hope%20I%20win%20a%20second%20honeymoon%20with%20Comfort.&hashtags=LavenderBloom").attr("target", "_blank");
	defaultText = "Keep looking for new clues on our facebook page to find more bottles!";
	document.getElementById('para').innerHTML = defaultText;
}

















