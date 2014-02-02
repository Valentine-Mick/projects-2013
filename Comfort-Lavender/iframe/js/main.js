function run(){

var FB_ID;
window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : '353773181390007',                        // App ID from the app dashboard
      channelUrl : 'https://www.thenicheguys.com/clients/comfort/lavender/channel.php', // Channel file for x-domain comms
      status     : true,                                 // Check Facebook Login status
      xfbml      : true,						 // Look for social plugins on the page
      oauth		 : true                                 
    });

    // Additional initialization code such as adding Event Listeners goes here

 FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // connected
	getSendInfo("false");
  } else if (response.status === 'not_authorized') {
  	//not logged into the app
    $('#comfortText').html("<h1>Good</h1>You've found a bottle! Now connect through Facebook to save</br>your bottle.");
  	$('#comfortScore').html("<img src='https://www.thenicheguys.com/clients/comfort/lavender/iframe/images/logo.png' style='position: relative; top: 12px; left: 2px;'>");
  	$('#LikeTab').hide();
  	$('.fb-like').hide();
  	$('#comfortLogin').show();
    $('#comfortLogin').click(function(){login();});
  } else {
  	//not logged into facebook
  	$('#comfortText').html("<h1>Good</h1>You've found a bottle! Now login with Facebook to save your bottle.");
  	$('#comfortScore').html("<img src='https://www.thenicheguys.com/clients/comfort/lavender/iframe/images/logo.png' style='position: relative; top: 12px; left: 2px;'>");
  	$('#LikeTab').hide();
  	$('.fb-like').hide();
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
            getSendInfo("false");
            $('#comfortLogin').hide();
            $('#LikeTab').show();
            $('.fb-like').show();
            
        } else {
            // cancelled
            alert("Please login to continue.");
        }
    }, {scope: 'email, publish_actions'});
};


function getSendInfo(replayBool){

FB.api('/me', function(response) {
   	FB_ID = response.id;
	var first = response.first_name;
	var last = response.last_name;
	var email = response.email;
	var timeStamp = new Date().getTime();
	var ajaxUrl = 'https://www.thenicheguys.com/clients/comfort/lavender/database/set.php';
	
	timeStamp /= 1000;
	timeStamp /= 60;
	first = JSON.stringify(first).replace(/[^a-z0-9\s]/gi, '');
	last = JSON.stringify(last).replace(/[^a-z0-9\s]/gi, '');
	
	$.ajax({ url: ajaxUrl,
         data: { FB_ID: FB_ID, first: first, last: last, email: email, timeStamp: timeStamp, replay: replayBool},
         type: 'post',
         success: function(output) {	
                      var date = new Date();
                      date = date/1000/60; //minutes
                      localStorage.setItem('comfortTime', date);
                      //top.localStorage.setItem('bottleFound', 1);
                      	switch (output){
    //--1                  
                      	case "1":
                      		$('#comfortScore').html(output);
                      		$('#comfortText').html("<h1>Well done!</h1>Find just four more bottles to be entered into winning a second honeymoon.");
                      		break;
     //--2                    	
                      	case "2":
                      		$('#comfortScore').html(output);
                      		$('#comfortText').html("<h1>Great!</h1>You've found another bottle! Remember to follow our Facebook page for more clues.");
                      		break;
     //--3                 	
                      	case "3":
                      		$('#comfortScore').html(output);
                      		$('#comfortText').html("<h1>Awesome!</h1>Two more bottles and you'll earn another entry into winning a second honeymoon!");
                      		break;
     //--4                 	
                      	case "4":
                      		$('#comfortScore').html(output);
                      		$('#comfortText').html("<h1>Well done!</h1>You are one bottle away from entering again <br />to win a second honeymoon.");
                      		break;
     //--5                 	
                      	case "5":
                      		$('#comfortScore').html(output);
                      		$('#comfortText').html("<h1>Congratulations!</h1>You're already entered into winning a second honeymoon! Play again to increase your chances.");
                      		
                      		var message = "I've just found my 5th bottle of Comfort! Hope I win the second honeymoon in the Seychelles!";
                      		var name = "Show Your Love with Lavender";
                      		var description = "Comfort is giving away 2 tickets for a holiday in the Seychelles. Enter now!";
                      		var link = "http://www.comfortsoftener.co.za/start.php";
                      		var picture = "https://www.thenicheguys.com/clients/comfort/lavender/images/achievement_5.png";
                      		var caption = " ";
                      		
                      		var params = {};
							params['message'] = message;
							params['name'] = name;
							params['description'] = description;
							params['link'] = link;
							params['picture'] = picture;
							params['caption'] = caption;
							
							FB.api('/me/feed', 'post', params, function(response) {
  								if (!response || response.error) {
    								
  								} else {
    							//once posted
  								}
							});
                      		
                      		break;
     //--5 - first round
     //--  but no win                 	
                      	case "6":
                      		$('#comfortScore').html("5");
                      		$('#comfortText').html("<h1>Congratulations!</h1>You've been entered into winning a second honeymoon! Play again to increase your chances.");
                      		
                      		var message = "I've just found my 5th bottle of Comfort! Hope I win the second honeymoon in the Seychelles!";
                      		var name = "Show Your Love with Lavender";
                      		var description = "Comfort is giving away 2 tickets for a holiday in the Seychelles. Enter now!";
                      		var link = "http://www.comfortsoftener.co.za/start.php";
                      		var picture = "https://www.thenicheguys.com/clients/comfort/lavender/images/achievement_5.png";
                      		var caption = " ";
                      		
                      		var params = {};
							params['message'] = message;
							params['name'] = name;
							params['description'] = description;
							params['link'] = link;
							params['picture'] = picture;
							params['caption'] = caption;
							FB.api('/me/feed', 'post', params, function(response) {
  								if (!response || response.error) {
  								} else {
    							//once posted
  								}
							});
                      		break;
   //-------------
   //First bottle                   	
                      	case "win1":
                      		$('#comfortScore').html("1");
                      		$('#comfortText').html("<h1>Great!</h1>That was easy - just four more bottles to go!");
                      	
                      		var message = "Yay! I’m one step closer to winning a holiday to the Seychelles. Enter too by clicking here.";
                      		var name = "Show Your Love with Lavender";
                      		var description = "Comfort is giving away 2 tickets for a holiday in the Seychelles. Enter now!";
                      		var link = "http://www.comfortsoftener.co.za/start.php";
                      		var picture = "https://www.thenicheguys.com/clients/comfort/lavender/images/achievement_1.png";
                      		var caption = " ";
                      		
                      		var params = {};
							params['message'] = message;
							params['name'] = name;
							params['description'] = description;
							params['link'] = link;
							params['picture'] = picture;
							params['caption'] = caption;
							FB.api('/me/feed', 'post', params, function(response) {
  								if (!response || response.error) {
  								} else {
    							//once posted
  								}
							});
                      		break;
   //Second Bottle	
                      	case "win2":
                      		$('#comfortScore').html("2");
                      		$('#comfortText').html("<h1>Well done!</h1>Only three more bottles <br /> to go!");
                      		break;
                      		
   //Third Bottle
                      	case "win3":
                      		$('#comfortScore').html("3");
                      		$('#comfortText').html("<h1>Congratulations!</h1><a href='https://www.thenicheguys.com/clients/comfort/lavender/prizes/Voucher_May_comfort.pdf' target='_blank' style='color: #8a408d; text-decoration: none;'>You've just won a Netflorist voucher!</br> Click here to redeem your voucher.");
                      		
                      		var message = "I just won a Netflorist voucher and I am halfway to winning a holiday to the Seychelles. Click here to join in on the fun.";
                      		var name = "Show Your Love with Lavender";
                      		var description = "Comfort is giving away 2 tickets for a holiday in the Seychelles. Enter now!";
                      		var link = "http://www.comfortsoftener.co.za/start.php";
                      		var picture = "https://www.thenicheguys.com/clients/comfort/lavender/images/achievement_3.png";
                      		var caption = " ";
                      		
                      		var params = {};
							params['message'] = message;
							params['name'] = name;
							params['description'] = description;
							params['link'] = link;
							params['picture'] = picture;
							params['caption'] = caption;
							
							FB.api('/me/feed', 'post', params, function(response) {
  								if (!response || response.error) {
    								//no post
    								
  								} else {
    							//posted
  								}
							});
                      		break;
                      		
  //Fourth Bottle
                      	case "win4":
                      		$('#comfortScore').html("4");
                      		$('#comfortText').html("<h1>Well done!</h1>You are one bottle away from an entry for a second honeymoon!");
                      		break;
  //Fifth Bottle
                      	case "movie":
                      		$('#comfortScore').html("5");
                      		$('#comfortText').html("<h1>Congratulations!</h1>You've won a Ster-Kinekor movie ticket and an entry into winning a second honeymoon!");
                      		var change=0;
                      		setInterval(function(){
	                      		if(change==0){
		                      		$('#comfortText').html("<h1>Congratulations!</h1>Visit 'Your Profile' to redeem your voucher.");
		                      		change=1;
	                      		}else{
	                      			$('#comfortText').html("<h1>Congratulations!</h1>You've won a Ster-Kinekor movie ticket and an entry into winning a second honeymoon!");
		                      		change=0;
	                      		}
	                      		
                      		}, 6000);
                      		
                      		
                      		$('#LikeTab').hide();
                      		$('.fb-like').css({"margin": "15px 0 0 128px"});
                      		
                      		var message = "I've just won a movie ticket with Comfort and I've been entered into winning a second honeymoon! :)";
                      		var name = "Show Your Love with Lavender";
                      		var description = "Comfort is giving away 2 tickets for a holiday in the Seychelles. Enter now!";
                      		var link = "http://www.comfortsoftener.co.za/start.php";
                      		var picture = "https://www.thenicheguys.com/clients/comfort/lavender/images/achievement_5.png";
                      		var caption = " ";
                      		
                      		var params = {};
							params['message'] = message;
							params['name'] = name;
							params['description'] = description;
							params['link'] = link;
							params['picture'] = picture;
							params['caption'] = caption;
							
							FB.api('/me/feed', 'post', params, function(response) {
  								if (!response || response.error) {
    								
  								} else {
    							//once posted
  								}
							});
                      		break;
                      	
                      	case "books":
                      		$('#comfortScore').html("5");
                      		$('#comfortText').html("<h1>Congratulations!</h1>You've won an Exclusive Books voucher and an entry into winning a second honeymoon!");
                      		var change=0;
                      		setInterval(function(){
	                      		if(change==0){
		                      		$('#comfortText').html("<h1>Congratulations!</h1>Visit 'Your Profile' to redeem your voucher.");
		                      		change=1;
	                      		}else{
	                      			$('#comfortText').html("<h1>Congratulations!</h1>You've won an Exclusive Books voucher and an entry into winning a second honeymoon!");
		                      		change=0;
	                      		}
	                      		
                      		}, 6000);
                      		
                      		$('#LikeTab').hide();
                      		$('.fb-like').css({"margin": "15px 0 0 128px"});
                      		
                      		var message = "I've just won an Exclusive Books voucher with Comfort and I've been entered into winning a second honeymoon! :)";
                      		var name = "Show Your Love with Lavender";
                      		var description = "Comfort is giving away 2 tickets for a holiday in the Seychelles. Enter now!";
                      		var link = "http://www.comfortsoftener.co.za/start.php";
                      		var picture = "https://www.thenicheguys.com/clients/comfort/lavender/images/achievement_5.png";
                      		var caption = " ";
                      		
                      		var params = {};
							params['message'] = message;
							params['name'] = name;
							params['description'] = description;
							params['link'] = link;
							params['picture'] = picture;
							params['caption'] = caption;
							
							FB.api('/me/feed', 'post', params, function(response) {
  								if (!response || response.error) {
    								
  								} else {
    							//once posted
  								}
							});
                      		break;
  //Need Replay
                      	case "finished":
                      		$('#comfortScore').html("<img src='https://www.thenicheguys.com/clients/comfort/lavender/iframe/images/logo.png' style='position: relative; top: 12px; left: 2px;'>");
                      		$('#comfortText').html("<h1></h1>You are already entered, play again to increase your chances of winning!");
                      		//$('#comfortText').html("<h1>Congratulations!</h1>You've already collected 5 bottles and are in the running to WIN <br />with Comfort.");
                      		finished();
                      		break;
                  
                      	default:
                      		console.log(output);
                      		$('#comfortText').html("<h1></h1>Unfortunately there has been an error. Please inbox us on www.facebook.com/ComfortZoneSouthAfrica.");
                      };
                      

                  },
         
         error: function(xhr, ajaxOptions, thrownError){
	         		getSendInfo("false");
	         	}
         
         });

	});
};

function finished(){
	$('.butts').show();
	$('#LikeTab').hide();
	
	//play again click
	$('#replay').click(function(){
		$('.butts').hide();
		$('#comfortText').html("");
		$('#comfortScore').html("<img id='comfortLoad' src='https://www.thenicheguys.com/clients/comfort/lavender/iframe/images/comfortLoad.gif'>");
		$('.fb-like').css({"margin": "15px 0 0 128px"});
		//send data
		$.ajax({ url: 'https://www.thenicheguys.com/clients/comfort/lavender/database/replay.php',
         data: { FB_ID: FB_ID},
         type: 'post',
         success: function(output) {	
                  	getSendInfo();
                  }//ajax response
		});//ajax    
		});
		
		$('#quit').click(function(){
			localStorage.setItem('comfortQuit', 1);
			$('.butts').hide();
			$('#comfortText').html("<h1>Good Luck!</h1>Follow Comfort Zone on Facebook where we'll announce the winners. You can replay by visiting our page anytime.");
			$('#comfortScore').html("<img src='https://www.thenicheguys.com/clients/comfort/lavender/iframe/images/logo.png' style='position: relative; top: 12px; left: 2px;'>");
			$('.fb-like').css({"margin": "15px 0 0 128px"});
			 
		});

};


function postToWall(message, name, description, link, picture, caption){
	FB.ui(
  {
    method: 'feed',
    name: name,
    link: link,
    picture: picture,
    caption: caption,
    description: description
  },
  function(response) {
    if (response && response.post_id) {
      //alert('Post was published.');
    } else {
      //alert('Post was not published.');
    }
  }
);	
};

function quitit(){
	localStorage.setItem('comfortQuit', 1);
	$('#comfortText').html("<h1 style='font-size: 17px; margin: -5px 0px 6px 0px;'>Good Luck!</h1>Follow us on Facebook where we'll announce the winners. You can replay by visiting </br>our page anytime.");
	$('#comfortText').css({"font-size": "12px", "padding-top": "3px"});
	$('#comfortScore').html("<img src='https://www.thenicheguys.com/clients/comfort/lavender/iframe/images/logo.png' style='position: relative; top: 12px; left: 2px;'>");
	$('.fb-like').css({"margin": "15px 0 0 128px"});
};

};
var url = (window.location != window.parent.location) ? document.referrer: document.location;
if(url != "https://www.thenicheguys.com/clients/comfort/lavender/iframe/index.php"){
	run();
};