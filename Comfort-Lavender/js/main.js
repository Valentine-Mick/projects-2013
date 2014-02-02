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
	getSendInfo();
  } else if (response.status === 'not_authorized') {
  	//not logged into the app
   login();
  } else {
  	//not logged into facebook
  	$('#comfortLogin').show();
    $('#comfortLogin').click(function(){login();});
  }
 });
 
   

};

  // Load the SDK asynchronously
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   
   function login() {
    FB.login(function(response) {
        if (response.authResponse) {
            // connected
            getSendInfo();
            $('#comfortLogin').hide();
            
        } else {
            // cancelled
        }
    });
};


function getSendInfo(){

FB.api('/me', function(response) {
   	var FB_ID = response.id;
	var first = response.first_name;
	var last = response.last_name;
	var email = response.email;
		$.ajax({ url: 'https://thenicheguys.com/clients/comfort/lavender/database/setHome.php',
         data: { FB_ID: FB_ID, first: first, last: last, email: email},
         type: 'post',
         dataType: 'json',
         success: function(output) {	
                      $('#score').html(output)

                  }
		});

	});
};


function postToWall(){
	FB.ui(
  {
    method: 'feed',
    name: 'Facebook Dialogs',
    link: 'http://developers.facebook.com/docs/reference/dialogs/',
    picture: 'http://fbrell.com/f8.jpg',
    caption: 'Reference Documentation',
    description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
  },
  function(response) {
    if (response && response.post_id) {
      alert('Post was published.');
    } else {
      alert('Post was not published.');
     
    }
  }
);	
};


//hover over buttons
var sendLove = document.getElementById('sendLove');
var tweetBottle = document.getElementById('tweetBottle');
var send = document.getElementById('send');

sendLove.onmouseover = function(){
	document.getElementById('header').innerHTML = "Send Some Love";
	document.getElementById('para').innerHTML = "Share your love with a friend by giving them one of your bottles.<br /><br />";
};

sendLove.onmouseout = function(){
	document.getElementById('header').innerHTML = "WELL DONE!";
	document.getElementById('para').innerHTML = "Keep looking for new clues on our facebook page to find more bottles!<br /><br />Good luck!"
};

tweetBottle.onmouseover = function(){
	document.getElementById('header').innerHTML = "Tweet for a Bottle!";
	document.getElementById('para').innerHTML = "Want a quick extra bottle?<br />Tweet for us and we'll give you one!";
};

tweetBottle.onmouseout = function(){
	document.getElementById('header').innerHTML = "WELL DONE!";
	document.getElementById('para').innerHTML = "Keep looking for new clues on our facebook page to find more bottles!<br /><br />Good luck!"
};

send.onmouseover = function(){
	document.getElementById('header').innerHTML = "The Extra Button";
	document.getElementById('para').innerHTML = "Not sure what this button does? <br />Neither do I!";
};

send.onmouseout = function(){
	document.getElementById('header').innerHTML = "WELL DONE!";
	document.getElementById('para').innerHTML = "Keep looking for new clues on our facebook page to find more bottles!<br /><br />Good luck!"
};

//click buttons
$('#sendLove').click(function(){
	//post to friends wall
	postToFriend();
});

var friend;

function postToFriend(){	
	//send app request

	var friend_id = response.to[0].toString();
	friend = friend_id;
	var body = 'Reading Connect JS documentation';
	
        // calling the API ...
        var obj = {
          method: 'feed',
          link: 'https://thenicheguys.com/clients/comfort/lavender/index.html#',
          picture: 'http://fbrell.com/f8.jpg',
          name: 'I just sent you some love!',
          caption: 'Caption reference',
          description: 'Testing!',
          display: 'async',
          to: ''
        };

        function callback(response) {
         setScores();
        }

        FB.ui(obj, callback);



};


function setScores(){
		FB.api('/me', function(response) {
   	var FB_ID = response.id;
	var first = response.first_name;
	var last = response.last_name;
	var email = response.email;
	
	$.ajax({ url: 'https://thenicheguys.com/clients/comfort/lavender/database/sendLove.php',
         data: { FB_ID: FB_ID, first: first, last: last, email: email, friend: friend},
         type: 'post',
         success: function(output) {	
                      //alert("you minus one. Friend pluses one. THIS POP-UP WILL NOT EXIST");

                  }
		});
});

}
		

//tweetBottle
$('#tweetBottle').click(function(){
	var link = 'https://twitter.com/intent/tweet?url=http://bit.ly/87fg&text=Click here to experience new Comfort Lavender Bloom and you could be going on your second honeymoon.&hashtags=LavenderBloom,';	
	NewWindow(link,'template_window','600','250','no');
	return false;
});

var win=null;
function NewWindow(mypage,myname,w,h,scroll){

	LeftPosition=(screen.width)?(screen.width-w)/2:100;
	TopPosition=(screen.height)?(screen.height-h)/2:100;

	settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
	win=window.open(mypage,myname,settings);
};
