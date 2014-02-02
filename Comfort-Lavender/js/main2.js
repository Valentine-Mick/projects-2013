var FB_ID;
var first;
var last;
var email;
var accessToken;
var replay = "false";
var loveSent;
var defaultText = "Keep looking for new clues on our facebook </br> page to find more bottles!";
var browser = jQuery.browser;
var tweetCount;
var tweetAlert = 0;

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
  	$('#overlay').show();
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
    first = JSON.stringify(first).replace(/[^a-z0-9\s]/gi, '');
	last = JSON.stringify(last).replace(/[^a-z0-9\s]/gi, '');
	
	$('#name').html(response.name);
	$('#picture').html("<img src='" + response.picture.data.url + "' width='80px'>");

		$.ajax({ url: 'https://www.thenicheguys.com/clients/comfort/lavender/database/setHome.php',
         data: { FB_ID: FB_ID, first: first, last: last, email: email },
         type: 'post',
         success: function(output) {	
                      
                      var userData = jQuery.parseJSON(output);
                      tweetCount = userData.tweets;
                      $('#score').html(userData.count);
                      var score = parseInt($('#score').html());
                      
                      /*if(tweetCount >= 40){
	                      $('#twitter').css({
		                      "opacity": "0.4",
		                      "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
		                      "filter": "alpha(opacity=50)"
		                     });
		                     $('#twitter').attr("href", "#").attr("target", "");
                      }*/
                      
                      if(userData.total == 0){
	                      var entries = 0;
                      }else{
                  	  	var entries = Math.floor(userData.total/5);
	                  }
                      $('#entries').html("Prize entries*: " + entries);
                      
                      if(score == 5){
	                      limit();
	                  
	                      if(parseInt(userData.total) < 2){
		                    	defaultText = "You have " + entries + " entry to WIN a second honeymoon with Comfort. Play again to increase your chances."
	                      }else{
	                      		defaultText = "You have " + entries + " entries to WIN a second honeymoon with Comfort. Play again to increase your chances."
	                      }//if-else plural
	                      
	                      document.getElementById('para').innerHTML = defaultText;
	                  
	                  }else{
		                  defaultText = "Keep looking for new clues on our facebook </br> page to find more bottles!";
		              }
		              
		              var allowPrizes = 0;
		              var allowClues = 0;
		              
		              if(userData.win >= 1){
			               $('#prizes').show();
		              }
		              
		              if(userData.prize == 1){
			              $('#movie').show();
		              }else if(userData.prize == 2){
			              $('#books').show();
		              }
		              
		           if(browser.mozilla != true){   
		              $('#prizeHit').click(function(){
		              		$('#prizes').css({"z-index": "3"});
		              		$('#clues').css({"z-index": "2"});
			              $('#prizes').animate({
				              left: "37px"
			              }, 500);
			              $('#clues').animate({
			              	left: "319px"
			              }, 500);
		              });
		           
		          
		              $('#prizes').bind('mouseleave', function(){
			              $('#prizes').animate({
				              left: "319px"
			              }, 500);
			              
		              });
		              
		              
		              $('#clueHit').click(function(){
			              $('#prizes').css({"z-index": "2"});
			              $('#clues').css({"z-index": "3"});
			              $('#clues').animate({
				              left: "31px"
			              }, 500);
			              $('#prizes').animate({
					              left: "319px"
				          }, 500);
			              
		              });
		              $('#clues').mouseleave(function(){
			              $('#clues').animate({
				              left: "319px"
			              }, 500);
			              
		              });
		            }//if not mozilla
		            else{
			            $('#prizeHit').click(function(){
			            $('#prizes').css({"z-index": "3"});
		              		$('#clues').css({"z-index": "2"});
			              $('#prizes').css({
				              "left": "37px"
			              });
			              $('#prizes button').css({
				              "left": "37px"
			              });
			              
			              $('#clues').css({
			              	"left": "319px"
			              });
		              });
		              
		              $('#prizes').bind('mouseleave', function(){
			              $('#prizes').css({
				              "left": "319px"
			              });
			              $('#prizes button').css({
				              "left": "319px"
			              });
		              });
		              
		              $('#clueHit').click(function(){
			              $('#prizes').css({"z-index": "2"});
			              $('#clues').css({"z-index": "3"});
			              $('#clues').css({
				              "left": "31px"
			              });
			              $('#prizes').css({
					              "left": "319px"
				          });
		              });

		              $('#clues').mouseleave(function(){
			              $('#clues').css({
				              "left": "319px"
			              });
		              });
		              
		            }//end else

                  
                  }//sucess
		});//ajax

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

var isIE = /*@cc_on!@*/false;
if(isIE){
	$('#twitter').click(function(){
		setTimeout(function(){
			$('#score').html(parseInt($('#score').html())+1);
	        if(parseInt($('#score').html()) == 5){
		        limit();
	        }
	        //send to database
	        $.ajax({ url: 'https://www.thenicheguys.com/clients/comfort/lavender/database/tweet.php',
	         data: { FB_ID: FB_ID, first: first, last: last, email: email, replay: replay },
	         type: 'post',
	         success: function(output) {
	                  }                  
			})
		}, 9000);

	});
	
}else{
twttr.events.bind('tweet', function(event) {
		//add one to score
		$('#score').html(parseInt($('#score').html())+1);
        if(parseInt($('#score').html()) == 5){
	        limit();
        }
        //send to database
        $.ajax({ url: 'https://www.thenicheguys.com/clients/comfort/lavender/database/tweet.php',
         data: { FB_ID: FB_ID, first: first, last: last, email: email, replay: replay },
         type: 'post',
         success: function(output) {
                  }                  
		});//ajax
    });//tweet event

  };//if IE
}//show buttons

function postToFriend(response){	
        returnArray.push(response);
	
	var friend = response;
        // calling the API ...
        var obj = {
          method: 'feed',
          link: 'http://www.comfortsoftener.co.za/start',
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


var comfortQuit = localStorage.getItem('comfortQuit');
if(!comfortQuit){
	//still playing
}else{
	//quit
	$('#replay').hide();
	$('#play').show();
	$('#twitter').css({
		"opacity": "0.4",
		"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
		"filter": "alpha(opacity=50)"
	});
	$('#twitter').attr("href", "#").attr("target", "");
}

$('#play').click(function(){
	$('#play').hide();
	$('#twitter').css({
		"opacity": "1",
		"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
		"filter": "alpha(opacity=100)"
	});
	$('#twitter').attr("href", "https://twitter.com/intent/tweet?url=http://bit.ly/87fg&text=Fingers%20crossed!%20Hope%20I%20win%20a%20second%20honeymoon%20with%20Comfort.&hashtags=LavenderBloom").attr("target", "_blank");

	localStorage.removeItem('comfortQuit');
});

function quit(){
	localStorage.setItem('comfortQuit', 1);
	$('#play').show();
	$('#twitter').css({
		"opacity": "0.4",
		"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
		"filter": "alpha(opacity=50)"
	});
	$('#twitter').attr("href", "#").attr("target", "");
}

//high tweets



/*function tweet(){
	if(tweetCount >= 80 && tweetAlert == 0){
      alert("Please be patient while our system ensures all " + tweetCount + " tweets are authentic");
      $('#twitter').css({
		"opacity": "0.4",
		"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
		"filter": "alpha(opacity=50)"
	});
	$('#twitter').attr("href", "#").attr("target", "");
      tweetAlert = 1;
  }
};
*/










