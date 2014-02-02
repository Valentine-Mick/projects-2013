
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Show your love with Lavender</title>
        <meta name="description" content="Find The Freshness">


        <link rel="stylesheet" href="css/normalize.css">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script type="text/javascript" id="mainJS" src="https://www.thenicheguys.com/clients/comfort/lavender/iframe/js/main.js" ></script>
        
        <style>
/* ------------------------------------------- */
/* -------------- RESET - START -------------- */
/* ------------------------------------------- */        
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
       
/* ------------------------------------------- */
/* ----------------RESET - END --------------- */
/* ------------------------------------------- */
        	
        @font-face {
				font-family: barmeno;
				src: url('https://www.thenicheguys.com/clients/comfort/lavender/css/Barmeno.ttf');
				font-weight: bold;
		}
		
    	#content{
    		padding: 25px 0 0 12px;
        	width: 477px;
        	height: 413px;
        	background-image: url('https://www.thenicheguys.com/clients/comfort/lavender/iframe/images/mum.png');
        	z-index:100;
        	background-repeat: no-repeat;      	
    	}
    	
    	#comfortScore{
    		width: 106px;
    		height: 82px;
    		float: left;
    		display: block;
    		margin: 100px 0 0 18px;
    		font-size: 82px;
    		line-height: 82px;
    		font-weight: bold;
    		font-family: barmeno;
    		color: #8a408d;
    		text-align: center;
    		letter-spacing: -7px;
    		padding: 5px 0 0 0;
    	}
    	
     	#comfortText{
    		font-family: barmeno;
    		font-size: 12px;
    		line-height: 13px;
    		text-align: center;
    		width: 123px;
    		padding-top: 8px;
    		/* padding-right: 5px; */ 
    		height: 70px;
    		float: left;
    		display: block;
    		margin: 112px 175px 0 12px;
    		color: #8a408d;
    	}
    	        	
    	#comfortLoad{
    		width: 87px;
    		height: 23px;
    		position: absolute;
    		left: 44px;
    		top: 160px;
    	}
    	
    	h1{
    		font-size: 20px;
    		margin: 0px 0px 6px 0px;
    	}
    	
    	#LikeTab{
        	width: 238px;
        	height: 35px;
        	display: block;
        	float: left;
        	margin: 26px 111px 0 70px;
        	padding: 18px 17px 0 55px;
        	font-family: barmeno;
    		font-size: 14px;
    		color: #8b3e88;
    		background-image: url('images/liketab3.png');
    		background-repeat: no-repeat;
    	}
    	.fb-like{
        	margin: 0px 0 0 128px;
    	}
    	.butts{
        	display: none;
        	float: left;
    		margin: 25px 0 0 15px;
    	}
    	
    	#profile{
        	background-color: transparent;
        	position: fixed;
        	width: 123px;
        	left: 169px;
        	top: 97px;
        	height: 29px;
    	}
    	
    	#comfortLogin{
	    	width: 177px; 
	    	height: 24px; 
	    	margin: 20px 0 0 100px; 
	    	float: left; 
	    	background-image: url('https://www.thenicheguys.com/clients/comfort/lavender/iframe/images/login-button.png');
    	}
    	
    	
    	/*Firefox only*/
    	@-moz-document url-prefix() {
    		#comfortScore{
    			font-family: barmeno;
    			line-height: 0.5;
    		}
    		#comfortText{
    			font-family: barmeno;
    			padding-top: 0px;
    		}
    		h1{
    			font-size: 18px;
    		}
    		#comfortLogin{
	    		margin: 25px 0px 0px -20px;	
	    	}
    	}
        
        /*IE 10*/
        @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
	        #comfortScore{
	        	line-height: 0.8;
	        }
	        #comfortText{
	        	margin: 108px 175px 0 12px;
	        }
   		}
        	
 
 
 /*-------------------------------*/
/*-------------BUTTON-------------*/
.button, a.button {
	border: 1px solid #777;
	border-color: rgba(0,0,0,0.2);
	border-bottom-color: #333;
	border-bottom-color: rgba(0,0,0,0.4);
	color: #fff;
	-moz-box-shadow: inset 0 0.08em 0 rgba(255,255,255,0.4), inset 0 0 0.1em rgba(255,255,255,0.9);
	-webkit-box-shadow: inset 0 0.08em 0 rgba(255,255,255,0.4), inset 0 0 0.1em rgba(255,255,255,0.9);
	box-shadow: inset 0 0.08em 0 rgba(255,255,255,0.4), inset 0 0 0.1em rgba(255,255,255,0.9);
	cursor: pointer;
	display: inline-block;
	font: bold 100%/2.1 "Lucida Grande", Tahoma, sans-serif;
	padding: 0 .5em;
	text-align: center;
	text-decoration: none;
	text-shadow: 0 1px 0 rgba(0,0,0,0.5);
	white-space: nowrap;
	
	-moz-user-select: none;
	-webkit-user-select: none;
	user-select: none;
	
	position: relative;
	
	-moz-border-radius: .3em;
	-webkit-border-radius: .3em;
	border-radius: .3em;
	
	width: 100%;
}

.button:before {
	content: "";
	border-right: 0.075em solid rgba(0,0,0,0.1);
	float: left;
	font: 120%/1.65 zocial;
	font-style: normal;
	font-weight: normal;
	margin: 0 0.5em 0 0;
	padding: 0 0.5em;
	text-align: center;
	text-decoration: none;
	text-transform: none;
	
	-moz-box-shadow: 0.075em 0 0 rgba(255,255,255,0.25);
	-webkit-box-shadow: 0.075em 0 0 rgba(255,255,255,0.25);
	box-shadow: 0.075em 0 0 rgba(255,255,255,0.25);
	
	-moz-font-smoothing: antialiased;
	-webkit-font-smoothing: antialiased;
	font-smoothing: antialiased;
}

/* Gradients */

.button {
	background-image: -moz-linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.05) 49%, rgba(0,0,0,.05) 51%, rgba(0,0,0,.1));
	background-image: -ms-linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.05) 49%, rgba(0,0,0,.05) 51%, rgba(0,0,0,.1));
	background-image: -o-linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.05) 49%, rgba(0,0,0,.05) 51%, rgba(0,0,0,.1));
	background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.1)), color-stop(49%, rgba(255,255,255,.05)), color-stop(51%, rgba(0,0,0,.05)), to(rgba(0,0,0,.1)));
	background-image: -webkit-linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.05) 49%, rgba(0,0,0,.05) 51%, rgba(0,0,0,.1));
	background-image: linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.05) 49%, rgba(0,0,0,.05) 51%, rgba(0,0,0,.1));
}

.button:hover, .button:focus {
	background-image: -moz-linear-gradient(rgba(255,255,255,.15) 49%, rgba(0,0,0,.1) 51%, rgba(0,0,0,.15));
	background-image: -ms-linear-gradient(rgba(255,255,255,.15) 49%, rgba(0,0,0,.1) 51%, rgba(0,0,0,.15));
	background-image: -o-linear-gradient(rgba(255,255,255,.15) 49%, rgba(0,0,0,.1) 51%, rgba(0,0,0,.15));
	background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.15)), color-stop(49%, rgba(255,255,255,.15)), color-stop(51%, rgba(0,0,0,.1)), to(rgba(0,0,0,.15)));
	background-image: -webkit-linear-gradient(rgba(255,255,255,.15) 49%, rgba(0,0,0,.1) 51%, rgba(0,0,0,.15));
	background-image: linear-gradient(rgba(255,255,255,.15) 49%, rgba(0,0,0,.1) 51%, rgba(0,0,0,.15));
}

.button:active {
	background-image: -moz-linear-gradient(bottom, rgba(255,255,255,.1), rgba(255,255,255,0) 30%, transparent 50%, rgba(0,0,0,.1));
	background-image: -ms-linear-gradient(bottom, rgba(255,255,255,.1), rgba(255,255,255,0) 30%, transparent 50%, rgba(0,0,0,.1));
	background-image: -o-linear-gradient(bottom, rgba(255,255,255,.1), rgba(255,255,255,0) 30%, transparent 50%, rgba(0,0,0,.1));
	background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.1)), color-stop(30%, rgba(255,255,255,0)), color-stop(50%, transparent), to(rgba(0,0,0,.1)));
	background-image: -webkit-linear-gradient(bottom, rgba(255,255,255,.1), rgba(255,255,255,0) 30%, transparent 50%, rgba(0,0,0,.1));
	background-image: linear-gradient(bottom, rgba(255,255,255,.1), rgba(255,255,255,0) 30%, transparent 50%, rgba(0,0,0,.1));
}
.install {
	background-color: rgb(115, 67, 160);
	margin: 8px 4px;
}	
</style>

<!--[if IE 9]>
<style>
	#comfortScore{
	     line-height: 0.8;
	}
	#comfortText{
	     margin: 108px 175px 0 12px;
	}
</style>
<![endif]-->

    </head>
    <body style="background-image: url('https://www.thenicheguys.com/clients/comfort/lavender/iframe/images/transparent.png'); background: transparent;">
        <div id="content">
        	
			<div id="comfortScore">
					<img id="comfortLoad" src="https://www.thenicheguys.com/clients/comfort/lavender/iframe/images/comfortLoad.gif">
			</div>
			
			<div id="comfortText">
				<h1>Please Wait</h1>Loading..</br></br>
			</div>
			
			<div id="replay" style="max-width: 142px" class="butts" alt="Replay Game" title="Replay Game">
				<button class="button install" id="install-comfort-hunt">Play Again</button>
			</div>
			<div id="quit" style="max-width: 158px" class="butts" alt="Replay Game" title="Replay Game">
				<button class="button install" id="install-comfort-hunt">Stop Playing</button>
			</div>
			
			<a id="littlequit" onclick="quitit()" style="cursor: pointer; color: rgb(137, 51, 177); font-size: 11px; position: fixed; left: 57%; top: 71%; font-family: barmeno; text-decoration: underline;">
				<img src="https://www.thenicheguys.com/clients/comfort/lavender/iframe/images/removegame.jpg">
			</a>
			
			<div id="LikeTab">
				<span>LIKE the Comfort page for clues!</span>
			</div>
			
			<a id="profile" href="https://www.facebook.com/ComfortZoneSouthAfrica/app_190322544333196" target="_blank" alt="Your Profile" title="Your Profile">
			</a>
			
			<a id="comfortLogin" style="display: none;" href="#"><div style=""></div></a>
			
			<div class="fb-like" data-href="https://www.facebook.com/ComfortZoneSouthAfrica" data-send="false" data-layout="button_count" data-width="80" data-show-faces="false"></div>
			
       </div>
    </body>
   <div id='fb-root'></div>
   <script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=249217251891473";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
   


</html>
