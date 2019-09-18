alert("初始化加载");

var addStyle = function(cssText) {
	var head = document.querySelector('head');
	var style = document.createElement('style');
	style.setAttribute('type', 'text/css');
	style.textContent = cssText;
	head.appendChild(style);
};
var addStyleForUrl = function(cssUrl) {
	var head = document.querySelector('head');
	var style = document.createElement('style');
	style.setAttribute('type', 'text/css');
	style.href=cssUrl;
	head.appendChild(style);
};
var addScript = function(jsText) {
	var head = document.querySelector('head');
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.textContent = jsText;
	head.appendChild(script);
};
var addScriptForUrl = function(jsUrl) {
	var head = document.querySelector('head');
	var script = document.createElement('script');
	script.type="text/javascript";
	script.src=jsUrl;
	head.appendChild(script);
};