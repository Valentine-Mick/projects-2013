
/*---------------------------------------

    THIS IS THE MAIN FILE WHICH LOADS ON EVERY PAGE

---------------------------------------*/





//Json - Dont delete
if(typeof JSON!=="object"){JSON={}}(function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];if(a&&typeof a==="object"&&typeof a.toJSON==="function"){a=a.toJSON(e)}if(typeof rep==="function"){a=rep.call(t,e,a)}switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a){return"null"}gap+=indent;u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1){u[n]=str(n,a)||"null"}i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]";gap=o;return i}if(rep&&typeof rep==="object"){s=rep.length;for(n=0;n<s;n+=1){if(typeof rep[n]==="string"){r=rep[n];i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}else{for(r in a){if(Object.prototype.hasOwnProperty.call(a,r)){i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}";gap=o;return i}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;if(typeof JSON.stringify!=="function"){JSON.stringify=function(e,t,n){var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1){indent+=" "}}else if(typeof n==="string"){indent=n}rep=t;if(t&&typeof t!=="function"&&(typeof t!=="object"||typeof t.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":e})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i==="object"){for(n in i){if(Object.prototype.hasOwnProperty.call(i,n)){r=walk(i,n);if(r!==undefined){i[n]=r}else{delete i[n]}}}}return reviver.call(e,t,i)}var j;text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})()




//ie version
var Browser = {
	Version: function() {
		var version = 999; // we assume a sane browser
		if (navigator.appVersion.indexOf("MSIE") != -1)
		// bah, IE again, lets downgrade version number
		version = parseFloat(navigator.appVersion.split("MSIE")[1]);
		return version;
	}
}





var css = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(css);
css.setAttribute('type', 'text/css');
css.id = 'testing';

//Css pulsating heart.
var styles = ".pulse{width:250px;-webkit-animation-name:'pulse_animation';-webkit-animation-duration:4000ms;-webkit-transform-origin:70% 70%;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:linear;-moz-animation-name:'pulse_animation';-moz-animation-duration:4000ms;-moz-transform-origin:70% 70%;-moz-animation-iteration-count:infinite;-moz-animation-timing-function:linear;animation-name:pulse_animation;animation-duration:4000ms;transform-origin:70% 70%;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes pulse_animation{0%{transform:scale(1)}30%{transform:scale(1)}40%{transform:scale(1.08)}50%{transform:scale(1)}60%{transform:scale(1)}70%{transform:scale(1.05)}80%{transform:scale(1)}100%{transform:scale(1)}}@-moz-keyframes pulse_animation{0%{-moz-transform:scale(1)}30%{-moz-transform:scale(1)}40%{-moz-transform:scale(1.08)}50%{-moz-transform:scale(1)}60%{-moz-transform:scale(1)}70%{-moz-transform:scale(1.05)}80%{-moz-transform:scale(1)}100%{-moz-transform:scale(1)}}@-webkit-keyframes pulse_animation{0%{-webkit-transform:scale(1)}30%{-webkit-transform:scale(1)}40%{-webkit-transform:scale(1.08)}50%{-webkit-transform:scale(1)}60%{-webkit-transform:scale(1)}70%{-webkit-transform:scale(1.05)}80%{-webkit-transform:scale(1)}100%{-webkit-transform:scale(1)}}";
if (css.styleSheet) css.styleSheet.cssText = styles;
else css.appendChild(document.createTextNode(styles));



var currentSite = document.URL;
var timerCheck = 0;
var documentCheck = 0;
var localTime;
var timerSupport = 0;



//load in iframe
function checkDocument(){
var stopBug1 = 0;



//First we load in a file which checks when you last found a bottle. The time is stored in local store on the niche domain.
this._iframe = null;
if (!this._iframe){																		
            if (window.postMessage && window.localStorage){	
                this._iframe = document.createElement("iframe");	
                this._iframe.setAttribute("src", "https://www.thenicheguys.com/clients/comfort/lavender/app/checkTime.html"); 								
                this._iframe.style.cssText = "position:absolute;width:1px;height:1px;left:-9999px;";	
                document.body.appendChild(this._iframe);												
                if (window.addEventListener){	
                    window.addEventListener("message", handleMessage, false);
                } else if (this._iframe.attachEvent){
                    window.attachEvent("onmessage", handleMessage);
                }
            } else {
                timerSupport = 1;
                begin();
            };
};

function handleMessage(event){
	if(event.origin == 'https://www.thenicheguys.com' && stopBug1 == 0){
		var parsed = JSON.parse(event.data);
		localTime = parsed.time;
		var localQuit = parsed.quit;
		if(!localQuit){
			stopBug1 ++;
			begin();
		}else{
			stopBug1 ++;
		}
    };
};
};





//Websites that they appear on
var validSites = new Array();
validSites[0] = "http://www.google.co.za";
validSites[1] = "https://www.google.co.za";
validSites[2] = "https://www.facebook.com/login.php?api_key"; //to ignore facebook login popups
validSites[3] = "http://www.facebook.com";
validSites[4] = "https://www.facebook.com";
validSites[5] = "http://www.youtube.com/watch?v=EhSzLzLNe14";
validSites[6] = "http://www.women24.com/wellness/love-your-body";
validSites[7] = "http://all4women.co.za/lifestyle-and-entertainment/travel/romance-and-memories-the-perfect-getaway.html";
validSites[8] = "http://www.cosmopolitan.co.za/bodysoul/MindHealth/three-ways-to-max-out-every-day-pg1";
validSites[9] = "http://www.expressoshow.com/entertainment/book-club.html";
validSites[10] = "http://za.yahoo.com";
validSites[11] = "http://pinterest.com/comfortzonesout";
validSites[13] = "http://en.wikipedia.org/wiki/Comfort_fabric_softener";
validSites[13] = "http://en.wikipedia.org/wiki/Comfort_(fabric_softener)";
validSites[14] = "http://www.woolworths.co.za/Home/Food-Household/cat100018.cat?gclid=CMLywbPcnLcCFeXItAodNzoAzA";
validSites[14] = "http://www.woolworths.co.za";
validSites[15] = "http://www.virginactive.co.za";
validSites[16] = "http://www.bidorbuy.co.za";
validSites[17] = "http://www.clicks.co.za";
validSites[18] = "http://www.flightcentre.co.za";
validSites[19] = "http://www.mozilla.org/en-US/firefox/new";
validSites[20] = "http://www.apple.com/za/safari";
validSites[21] = "http://www.topbilling.com";
validSites[22] = "http://www.jamieoliver.com";
validSites[23] = "http://memoirs4mymunchkins.wordpress.com";
validSites[24] = "https://www.huggies.co.za";
validSites[25] = "http://www.privateproperty.co.za";
validSites[26] = "http://www.sundayworld.co.za";
validSites[27] = "http://www.picknpay.co.za";
validSites[28] = "http://www.omoauto.co.za";
validSites[29] = "http://www.parent24.com";
validSites[30] = "http://www.thefreedictionary.com/lavender";
validSites[31] = "http://www.etsy.com";
validSites[32] = "http://www.magnumicecream.com";
validSites[33] = "http://www.zando.co.za";
validSites[34] = "http://www.huffingtonpost.com";
validSites[35] = "http://www.sterkinekor.com";
validSites[36] = "http://www.netflorist.co.za";
validSites[37] = "http://www.spar.co.za";
validSites[38] = "http://www.lifebuoy.com";
validSites[39] = "http://www.dstv.com";
validSites[40] = "http://www.fancy.com";
validSites[41] = "http://www.livingandloving.co.za";
validSites[42] = "http://www.oprahmag.co.za";
validSites[43] = "http://www.fairlady.com";
validSites[44] = "http://www.seychelles.travel";
validSites[45] = "http://www.timeout.com";
validSites[46] = "http://www.dailymail.co.uk";
validSites[47] = "http://www.5rooms.com";
validSites[48] = "http://www.glodina.co.za";
validSites[49] = "http://babycity.co.za";
validSites[50] = "http://www.elle.co.za";
validSites[51] = "http://www.theprettyblog.com";
validSites[52] = "http://www.southafricantvads.com";
validSites[53] = "http://friendinfashion.blogspot.com";
validSites[54] = "http://magazine.fourseasons.com";

//sites for customization
var customSites = new Array();
customSites[0] = "http://www.google";
customSites[1] = "https://www.google";
customSites[2] = "http://www.facebook.com/pages/Niche-Platform/242809622479013?id=242809622479013&sk=app_190322544333196"; //start playing button on profile pre app installation 
customSites[3] = "https://www.facebook.com/pages/Niche-Platform/242809622479013?id=242809622479013&sk=app_190322544333196"; //start playing button on profile pre app installation 
customSites[4] = "https://www.facebook.com/login.php?api_key"; //to ignore facebook login popups
customSites[5] = "http://www.facebook.com";
customSites[6] = "https://www.facebook.com";
customSites[7] = "http://www.women24.com";


//sites for special bottle
var specialSites = new Array();
specialSites[0] = "http://www.google";
specialSites[1] = "https://www.google";
specialSites[2] = "http://www.amazon.com";
specialSites[3] = "http://www.gumtree.co.za/";







//--------------------------------------------------------
//check sites valid
//--------------------------------------------------------

//check customize
function checkCustomize(){
	var matchedIndex = -1;
	for (var i = 0; i < customSites.length; i++) {
   		 if (!currentSite.indexOf(customSites[i])) {
       		 matchedIndex = i;
       	 break;
   		 }
	};
	if(matchedIndex > -1){
		
		customizeSites(matchedIndex);
	}
};





//check site
function checkSite(){
	var matchedIndex = -1;
	for (var i = 0; i < validSites.length; i++) {
   		 if (!currentSite.indexOf(validSites[i])) {
       		 matchedIndex = i;
       	 break;
   		 }
	};
	if(matchedIndex > -1){
		setTimeout(function(){hideBottle(matchedIndex)}, 3000);
		

	}
	else{
	documentCheck ++;
	timerCheck += 1;
	};
};





//check special
function checkSpecial(){
	var matchedIndex = -1;
	for (var i = 0; i < specialSites.length; i++) {
   		 if (!currentSite.indexOf(specialSites[i])) {
       		 matchedIndex = i;
       	 break;
   		 }
	};
	if(matchedIndex > -1){
		hideSpecial(matchedIndex);
	}else{
		documentCheck ++;
		timerCheck += 1;
	}
};






//----------------------------------------------------------
//check local storage
//----------------------------------------------------------
//BEGIN
function begin(){
checkCustomize();

var value = (localStorage.getItem('bottleFound'));
if (!value) {
	checkSite();
}
    else{
    documentCheck ++;
    //checkSite();//--dev only
	console.log("ignoring bottle");
}


var special = (localStorage.getItem('specialBottle'));
if (!special && documentCheck == 1) {
	
	checkSpecial();
}
    else{
    documentCheck ++;
	console.log("ignoring special");
}


if(timerCheck >=2 && documentCheck == 2 && timerSupport == 0){
	checkTime();
}else{
	console.log('ignoring timer');
	//checkTime();//--dev only
}

};


//--------------------------------------------------------
//customize sites
//--------------------------------------------------------
function customizeSites(site){
	
	switch (site){
		
		case 0:
			document.getElementById('gbx3').style.backgroundColor = "rgb(132, 44, 175)";
			break;
		
		case 1:
			document.getElementById('gbx3').style.backgroundColor = "rgb(132, 44, 175)";
			break;
		
					
		case 2:
			
			break;	
			
		case 3:
			break;		
			
		case 4:
			//ignore facebook login popup;
			break;
		
		case 5:
			var bluBar = document.getElementById('blueBar');
			blueBar.style.backgroundColor = '#7c5098'; 
			blueBar.style.borderBottom = '1px solid #5b257d';	//top bar
			document.getElementsByClassName('navLink')[0].style.color = "#f6e7f6";	//link in bar ie: name
			document.getElementsByClassName('navLink')[1].style.color = "#f6e7f6";
			document.getElementsByClassName('navLink')[2].style.color = "#f6e7f6";
			document.getElementsByClassName('navLink')[3].style.color = "#f6e7f6";
			document.getElementById('blueBar').style.backgroundColor = "#a9589d";
			document.getElementById('blueBar').style.borderBottom = "1px solid #5b257d";
			//icons
			if(Browser.Version() > 10){
			
			
			/*
				try{
					Code that could break.
				}catch(e){};
			*/
			try{
				var jewel1 = document.getElementsByClassName('jewelButton')[0];
				var jewel2 = document.getElementsByClassName('jewelButton')[1];
				var jewel3 = document.getElementsByClassName('jewelButton')[2];
				
				jewel1.style.backgroundImage = "url('https://www.thenicheguys.com/clients/comfort/lavender/app/img/fblinks.png')";
				jewel1.style.backgroundSize = "104px 429px";
				jewel1.style.backgroundPosition = "-46px -50px";
				
				jewel2.style.backgroundImage = "url('https://www.thenicheguys.com/clients/comfort/lavender/app/img/fblinks.png')";
				jewel2.style.backgroundSize = "104px 429px";
				jewel2.style.backgroundPosition = "-75px -185px";
				
				jewel3.style.backgroundImage = "url('https://www.thenicheguys.com/clients/comfort/lavender/app/img/fblinks.png')";
				jewel3.style.backgroundSize = "104px 429px";
				jewel3.style.backgroundPosition = "0px -185px";
				
				var css = '.fbJewel a.jewelButton:active, .fbJewel a.jewelButton:focus, .fbJewel a.jewelButton:hover { background-color: #b366a8; } #pageLogo a:hover, #pageLogo a:focus, #pageLogo a:active { background-color: #b366a8;} #pageNav .navLink:hover, #pageNav .navLink:focus, #pageNav .navLink:active { background-color: #b366a8; }',
				head = document.getElementsByTagName('head')[0],
				style = document.createElement('style');

				style.type = 'text/css';
				if (style.styleSheet){
					style.styleSheet.cssText = css;
				} else {
					style.appendChild(document.createTextNode(css));
				}

				head.appendChild(style);
			}catch(e){ };
			try{
				document.getElementById('blueBar').style.backgroundImage = "url('https://www.thenicheguys.com/clients/comfort/lavender/app/img/bar.png')";
			}catch(e){}
			}
			break;
		
		case 6:
			try{
			document.getElementById('blueBar').style.backgroundColor = "#a9589d";
			document.getElementById('blueBar').style.borderBottom = "1px solid #5b257d";
			document.getElementsByClassName('navLink')[0].style.color = "#f6e7f6";	//link in bar ie: name
			document.getElementsByClassName('navLink')[1].style.color = "#f6e7f6";
			document.getElementsByClassName('navLink')[2].style.color = "#f6e7f6";
			document.getElementsByClassName('navLink')[3].style.color = "#f6e7f6";
			}catch(e){};
			//icons
			if(Browser.Version() > 10){
			try{
				var jewel1 = document.getElementsByClassName('jewelButton')[0];
				var jewel2 = document.getElementsByClassName('jewelButton')[1];
				var jewel3 = document.getElementsByClassName('jewelButton')[2];
				
				jewel1.style.backgroundImage = "url('https://www.thenicheguys.com/clients/comfort/lavender/app/img/fblinks.png')";
				jewel1.style.backgroundSize = "104px 429px";
				jewel1.style.backgroundPosition = "-46px -50px";
				
				jewel2.style.backgroundImage = "url('https://www.thenicheguys.com/clients/comfort/lavender/app/img/fblinks.png')";
				jewel2.style.backgroundSize = "104px 429px";
				jewel2.style.backgroundPosition = "-75px -185px";
				
				jewel3.style.backgroundImage = "url('https://www.thenicheguys.com/clients/comfort/lavender/app/img/fblinks.png')";
				jewel3.style.backgroundSize = "104px 429px";
				jewel3.style.backgroundPosition = "0px -185px";
				
				var css = '.fbJewel a.jewelButton:active, .fbJewel a.jewelButton:focus, .fbJewel a.jewelButton:hover { background-color: #b366a8; } #pageLogo a:hover, #pageLogo a:focus, #pageLogo a:active { background-color: #b366a8;} #pageNav .navLink:hover, #pageNav .navLink:focus, #pageNav .navLink:active { background-color: #b366a8; }',
				head = document.getElementsByTagName('head')[0],
				style = document.createElement('style');

				style.type = 'text/css';
				if (style.styleSheet){
					style.styleSheet.cssText = css;
				} else {
					style.appendChild(document.createTextNode(css));
				}

				head.appendChild(style);
			}catch(e){ };
			try{
				document.getElementById('blueBar').style.backgroundImage = "url('https://www.thenicheguys.com/clients/comfort/lavender/app/img/bar.png')";
			}catch(e){}
			}
			
			try{		
			//hide facebook and add floating container
			if (document.getElementById('login_form')[0] && Browser.Version() > 8){
				var body = document.getElementsByTagName('body')[0];
				var oldHtml = body.innerHTML;
				body.innerHTML = "<div id='overlayComfort'><div id='loginContainer'></div></div>" + oldHtml;
				
				//css overlay
				var overlayComfort = document.getElementById('overlayComfort');
				overlayComfort.style.cssText = "z-index: 1000; position: absolute; width: 100%; height: 100%; background-image: url('https://www.thenicheguys.com/clients/comfort/lavender/app/img/comfortBG.jpg'); background-repeat: no-repeat; background-size: cover; -webkit-background-size: cover; moz-background-size: cover; background-position: center center;";
								
				//css login container
				var loginContainer = document.getElementById('loginContainer');
				loginContainer.style.cssText = "position: relative; z-index: 3; margin: 0 auto; top: 50%; width: 395px; padding: 20px 20px 20px 20px; background-color: rgba(80,60,150,.4); border-radius: 4px; box-shadow: 0px 2px 4px rgba(0, 0, 0, .4);";
										
				//move login form into container
				var oldHtml2 = loginContainer.innerHTML;
				var loginForm = document.getElementById('login_form');
		
				loginContainer.innerHTML = "<div style='width: 170px; height: 36px;'><img style='width: 100%' src='https://www.thenicheguys.com/clients/comfort/lavender/app/img/fb-logo.png'></div>" + oldHtml2;
				loginContainer.appendChild(loginForm);
				
				document.getElementById('email').focus();
				
				//space between logo and form
				loginForm.style.marginTop = "10px";
				
				//changing font colours
				document.getElementsByTagName('label')[0].style.color = "#ffffff";
				document.getElementsByTagName('label')[1].style.color = "#ffffff";
				document.getElementsByTagName('label')[2].style.color = "#ffffff";
				document.getElementsByTagName('label')[3].style.color = "#ffffff";
				document.getElementsByTagName('a')[0].style.color = "#ffffff";
				
			};	
			}catch(e){}
			break;
		
		case 7:
			document.getElementsByClassName('personalisationContainer')[0].style.backgroundColor = "rgb(174, 71, 179)";
			break;	
			
			
		
		default:
			break;
	}
}







//--------------------------------------------------------
//hide bottles
//--------------------------------------------------------


function hideBottle(site){
	
	var bottle = document.createElement('a');
	
//hide bottles on sites specific	
	switch (site){
		
	case 0:
		//----------
		//google.co.za
		//----------	
		bottle.style.left = "38%";
		bottle.style.top = "98px";
		bottle.style.marginLeft = "-307px";
		document.body.appendChild(bottle);
		break;
		
		
	case 1:
		//----------
		//Google.co.za https
		//----------
		bottle.style.left = "38%";
		bottle.style.top = "98px";
		bottle.style.marginLeft = "-307px";
		document.body.appendChild(bottle);
		break;
		
		
	case 2://ignore facebook login popup;
		break;
		
		
	case 3:
		break;
		
	case 4:
		break;
		
	case 5:
		//----------
		//youtube
		//---------
		setTimeout(function(){
				bottle.style.left = "0";
				bottle.style.top = "500px";
				document.body.appendChild(bottle);
			}, 19000);
		break;
		
	case 6:
		bottle.style.left = "78%";
		bottle.style.top = "38px";
		document.body.appendChild(bottle);
		break;
	
	case 7:
		bottle.style.left = "11%";
		bottle.style.top = "240px";
		document.body.appendChild(bottle);
		break;
		
	case 8:
		bottle.style.left = "0%";
		bottle.style.top = "255px";
		document.body.appendChild(bottle);
		break;
	
	case 9:
		bottle.style.left = "30%";
		bottle.style.top = "113px";
		document.body.appendChild(bottle);
		break;
		
	case 10:
		bottle.style.left = "53%";
		bottle.style.top = "65px";
		document.body.appendChild(bottle);
		break;
	
	case 11:
		bottle.style.left = "52%";
		bottle.style.top = "42px";
		document.body.appendChild(bottle);
		break;
	
	case 12:
		break;
		
	case 13:
		bottle.style.left = "65%";
		bottle.style.top = "190px";
		bottle.style.marginLeft = "-280px";
		document.body.appendChild(bottle);
		break;
		
	case 14:
		bottle.style.left = "35%";
		bottle.style.top = "330px";
		bottle.style.marginLeft = "-280px";
		document.body.appendChild(bottle);
		break;
		
	case 15:
		bottle.style.left = "70%";
		bottle.style.top = "330px";
		bottle.style.marginLeft = "-280px";
		document.body.appendChild(bottle);
		break;	
		
	case 16:
		bottle.style.left = "30%";
		bottle.style.top = "230px";
		bottle.style.marginLeft = "-280px";
		document.body.appendChild(bottle);
		break;
		
	case 17:
		bottle.style.left = "70%";
		bottle.style.top = "20px";
		bottle.style.marginLeft = "-280px";
		document.body.appendChild(bottle);
		break;
		
	case 18:
		bottle.style.left = "70%";
		bottle.style.top = "20px";
		bottle.style.marginLeft = "-280px";
		document.body.appendChild(bottle);
		
	case 19:
		bottle.style.left = "30%";
		bottle.style.top = "20px";
		bottle.style.marginLeft = "-280px";
		document.body.appendChild(bottle);	
		break;	
		
	case 20:
		bottle.style.left = "50%";
		bottle.style.top = "20px";
		bottle.style.marginLeft = "-280px";
		document.body.appendChild(bottle);	
		break;
	
	case 21:
		bottle.style.left = "87%";
		bottle.style.top = "125px";
		bottle.style.marginLeft = "-280px";
		document.body.appendChild(bottle);	
		break;
		
	case 22:
		bottle.style.left = "87%";
		bottle.style.top = "125px";
		bottle.style.marginLeft = "-280px";
		document.body.appendChild(bottle);	
		break;
	
	case 23:
		bottle.style.left = "50%";
		bottle.style.top = "148px";
		bottle.style.marginLeft = "-550px";
		document.body.appendChild(bottle);	
		break;
	
	case 24:
		bottle.style.left = "50%";
		bottle.style.top = "371px";
		bottle.style.marginLeft = "-120px";
		document.body.appendChild(bottle);	
		break;
	
	case 25:
		bottle.style.left = "50%";
		bottle.style.top = "371px";
		bottle.style.marginLeft = "-120px";
		document.body.appendChild(bottle);	
		break;
	
	case 26:
		bottle.style.left = "50%";
		bottle.style.top = "371px";
		bottle.style.marginLeft = "-120px";
		document.body.appendChild(bottle);	
		break;
	
	case 27:
		bottle.style.left = "50%";
		bottle.style.top = "371px";
		bottle.style.marginLeft = "-120px";
		document.body.appendChild(bottle);	
		break;
	
	case 28:
		bottle.style.left = "50%";
		bottle.style.top = "371px";
		bottle.style.marginLeft = "-120px";
		document.body.appendChild(bottle);	
		break;
	
	case 29:
		bottle.style.left = "50%";
		bottle.style.top = "371px";
		bottle.style.marginLeft = "-120px";
		document.body.appendChild(bottle);	
		break;
	
	case 30:
		bottle.style.left = "50%";
		bottle.style.top = "371px";
		bottle.style.marginLeft = "-120px";
		document.body.appendChild(bottle);	
		break;
	
	case 31:
		bottle.style.left = "50%";
		bottle.style.top = "371px";
		bottle.style.marginLeft = "-120px";
		document.body.appendChild(bottle);	
		break;
		
	case 32:
		bottle.style.left = "50%";
		bottle.style.top = "371px";
		bottle.style.marginLeft = "-120px";
		document.body.appendChild(bottle);	
		break;
		
	case 33:
		bottle.style.left = "50%";
		bottle.style.top = "371px";
		bottle.style.marginLeft = "-120px";
		document.body.appendChild(bottle);	
		break;
	
	case 34:
		bottle.style.left = "10%";
		bottle.style.top = "371px";
		document.body.appendChild(bottle);	
		break;	
		
	case 35:
		bottle.style.left = "80%";
		bottle.style.top = "371px";
		document.body.appendChild(bottle);	
		break;
		
	case 36:
		bottle.style.left = "30%";
		bottle.style.top = "371px";
		document.body.appendChild(bottle);	
		break;
		
	case 37:
		bottle.style.left = "80%";
		bottle.style.top = "171px";
		document.body.appendChild(bottle);	
		break;
		
	case 38:
		bottle.style.left = "10%";
		bottle.style.top = "171px";
		document.body.appendChild(bottle);	
		break;
		
	case 39:
		bottle.style.left = "90%";
		bottle.style.top = "71px";
		document.body.appendChild(bottle);	
		break;
		
	case 40:
		bottle.style.left = "0%";
		bottle.style.top = "71px";
		document.body.appendChild(bottle);	
		break;
		
	case 41:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;
	
	case 42:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;
		
	case 43:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;
	
	case 44:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;	
		
	case 45:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;	
		
	case 46:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;
	
	case 47:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;
	
	case 48:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;
	
	case 49:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;
	
	case 50:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;
		
	case 51:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;
	
	case 52:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;
	
	case 53:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;	
		
	case 54:
		bottle.style.left = "50%";
		bottle.style.top = "52px";
		bottle.style.marginLeft = "-182px";
		document.body.appendChild(bottle);	
		break;			
		 
	default:
		break;
	};


	bottle.id = 'target';
	bottle.onclick = function(){makeClickable();};
	bottle.setAttribute('title', 'Lavender');
	bottle.setAttribute('class', 'lavenderButton');
	bottle.style.position = "absolute";
	bottle.style.zIndex = "9999999";
	bottle.style.cursor = "pointer";
	
//Code for the bottle if you want to add links, or ids, or anything.	
	bottle.innerHTML = "<div class='button pulse lavenderBottleImg'><img width='100%' src='https://www.thenicheguys.com/clients/comfort/lavender/app/img/lavander.png' class='indicator'></div>";

};






//hide specials
function hideSpecial(site){
	
	var bottle = document.createElement('a');
	
	switch (site){
		
		case 0:
			if(document.getElementById('gbqfq').value == "lavender bloom"){
				bottle.style.left = "1060px";
				bottle.style.top = "-6px";
				document.body.appendChild(bottle);
			}	
			break;
		
		case 1:
			if(document.getElementById('gbqfq').value == "lavender bloom"){
				bottle.style.left = "1060px";
				bottle.style.top = "-6px";
				document.body.appendChild(bottle);
			}
			break;
		
		case 2:
			if(document.getElementById('twotabsearchtextbox').value == "flowers"){
				bottle.style.left = "38%";
				bottle.style.top = "98px";
				document.body.appendChild(bottle);
			}
			break;
			
		case 3:
			if(document.getElementById('autoComp').value == "flowers"){
				bottle.style.left = "38%";
				bottle.style.top = "98px";
				document.body.appendChild(bottle);
			}
			break;
			
		
		default:
			break;
	};
	
	
	bottle.id = 'target';
	bottle.onclick = function(){
		makeClickable();
		localStorage.setItem('specialBottle', 1);
	};
	bottle.setAttribute('title', 'Lavender');
	bottle.setAttribute('class', 'lavenderButton');
	bottle.style.position = "absolute";
	bottle.style.zIndex = "999";
	bottle.style.cursor = "pointer";
	bottle.innerHTML = "<div class='button pulse lavenderBottleImg'><img width='100%' src='https://www.thenicheguys.com/clients/comfort/lavender/app/img/lavander.png' class='indicator'></div>";
};



	






//--------------------------------------------------------
//Bottle clicked
//--------------------------------------------------------

function makeClickable(){
	
			//store value that bottle has been clicked (localstorage)
			localStorage.setItem('bottleFound', 1);
	  		
	  		//position of popup
	  		var leftPos = 40;
	  		var topPos = 30;
	  		
	  		//Add iframe
	  		var iframe = document.createElement('div');
			iframe.setAttribute('id', 'overLay');
			iframe.innerHTML = "<a id='closeBut'><img src='https://www.thenicheguys.com/clients/comfort/lavender/app/img/close.png'></a><iframe id='bottleCollected' src='https://www.thenicheguys.com/clients/comfort/lavender/iframe/index.php' scrolling='no' frameborder='0' border='0' cellspacing='0' allowTransparency='true'></iframe>";
			
			//timer to allow the closing of the iframe. Some people would click to open it, and mistakenly close it instantly. This just makes it so that you cant close it until 5 seconds have past.
			setTimeout(function(){iframe.onclick = function(){removeIframe();}}, 5000)
			
			document.body.insertBefore(iframe, document.body.childNodes[0]);
			
			//iFrame css
			iframe.style.zIndex = "9999998";
			var bottleCollected = document.getElementById('bottleCollected');
			bottleCollected.style.cssText = "position: absolute; width: 477px; height: 423px; overflow: hidden; border-style: none; z-index: 9999999; background: transparent;)";
			bottleCollected.style.left = leftPos + "%";
			bottleCollected.style.top = topPos + "%";
			
			//close button css
			var closeBut = document.getElementById('closeBut');
			closeBut.style.cssText = "position: absolute; width: 32px; height: 32px; cursor: pointer; z-index: 999999999; margin-left:457px;";
			closeBut.style.left = "40%";
			closeBut.style.top = "30%";
			closeBut.onclick = function(){removeIframe();};
			
			//overlay css (when clicked - removes iframe)
			var overLay = document.getElementById('overLay');
			overLay.style.cssText = "width: 100%; height: 100%; position: absolute; z-index: 999998; background-image: url('https://www.thenicheguys.com/clients/comfort/lavender/iframe/images/transparent.png')";
			
			//removes bottle for iFrame
			removeBottle();
		

}







//------------------------------------------------------
//Remove Bottles and such
//------------------------------------------------------
function removeBottle(){
	//remove bottle
	var element = document.getElementById('target');
	element.parentNode.removeChild(element);
};



function removeIframe(){
	
	//remove iframe
	var element = document.getElementById('bottleCollected');
	element.parentNode.removeChild(element);
	
	//remove overlay
	var element2 = document.getElementById('overLay');
	element2.parentNode.removeChild(element2);
};






//------------------------------------------------------
//Timers
//------------------------------------------------------


function checkTime(){

	
    var current = new Date();
    var diff = (current/1000/60) - localTime;
    console.log("last: " + localTime);
    console.log("current: " + current);
    console.log("difference: " + diff);
    if(diff >= 720 && localTime)//12 hours
    {
    	var random = Math.floor((Math.random()*10)+1);
    	if(random == 4 || random == 5)
    		randomHideBottle();
    };

//---------------------------
function randomHideBottle(){
		var bottle = document.createElement('a');
		
	//Position for random bottle	
		bottle.style.left = "100px";
		bottle.style.top = "200px";
		document.body.appendChild(bottle);
		bottle.id = 'target';
		bottle.onclick = function(){makeClickable();};
		bottle.setAttribute('title', 'Lavender');
		bottle.setAttribute('class', 'lavenderButton');
		bottle.style.position = "absolute";
		bottle.style.zIndex = "9999999";
		bottle.style.cursor = "pointer";
		bottle.innerHTML = "<div class='pulse lavenderBottleImg'><img width='100%' src='https://www.thenicheguys.com/clients/comfort/lavender/app/img/lavander.png' class='indicator'></div>";

};
};



//starting document
checkDocument();


//var domain = window.location.host;
//String(domain);
//if(domain != "www.thenicheguys.com"){
//	var xmlhttp;
//	xmlhttp=new XMLHttpRequest();
//	xmlhttp.open("POST","https://www.thenicheguys.com/clients/comfort/lavender/database/track.php", true);
//	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//	xmlhttp.send("domain=" + domain);
//}





