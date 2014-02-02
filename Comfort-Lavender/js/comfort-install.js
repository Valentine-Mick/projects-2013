window.onload = function () {
  var d = document;
  var w = window;
  var nav = navigator;

  var button = d.getElementById('install-comfort-hunt');
  var url = 'https://chrome.google.com/webstore/detail/ebdopcpinaenjmppohcjlfelamaikekk';
  
  
  button.onclick = function(){
  console.log('BUTTON CLICKED');
  chrome.webstore.install(url, onSuccess, onFail);
  chrome.webstore.install(undefined, undefined, function(err) {console.log('inline install failed: ' + err)})
  };
  
  function onSuccess(){
  console.log('SUCCESS');
  };

	function onFail(){
  console.log('FAIL');
  };
  
};