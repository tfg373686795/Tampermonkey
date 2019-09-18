var addStyle = function(cssText) {
	var head = document.querySelector('head');
	var style = document.createElement('style');
	style.setAttribute('type', 'text/css');
	style.textContent = cssText;
	head.appendChild(style);
	console.log("css文本加载成功");
};
var addStyleForUrl = function(cssUrl) {
	var head = document.querySelector('head');
	var fileref = document.createElement('link');
    fileref.setAttribute("rel","stylesheet");
    fileref.setAttribute("type","text/css");
    fileref.setAttribute("href",cssUrl);
	head.appendChild(fileref);
	console.log("css加载成功：" + cssUrl);
};
var addScript = function(jsText) {
	var head = document.querySelector('head');
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.textContent = jsText;
	head.appendChild(script);
			console.log("js文本加载成功");
};
var addScriptForUrl = function(jsUrl) {
	var head = document.querySelector('head');
	var script = document.createElement('script');
	script.type="text/javascript";
	script.src=jsUrl;
	head.appendChild(script);
	console.log("js加载成功：" + jsUrl);
};