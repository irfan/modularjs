var isConfigReady = setInterval(function(){

	if (app.config) {
		clearInterval(isConfigReady);
	}

}, 1);



// wait for "html parsing complete" to initialize components, modules and page scripts.
// Why we are using DOMContentLoaded event instead of onreadystatechange?
// it is simple, all components loading asynchronously, we dont need to wait images, css files 
// JavaScript will become available while other contents loading.
// Then we dont block user's browser ever even some content (images, css, flash or other thing) in lag.

DOMContentLoaded = function(event){
	var isConfigReady = setInterval(function(){
		
		if (app.config) {
			clearInterval(isConfigReady);
			
			// TODO: throw an event like this:
			// {
			// 	type: 'ModularJS.ready',
			// 	namespace: 'ModularJS'
			// }
			// handle above event and initialize other things. 
			
			// after applied the above approach delete the following lines
			app.loadModules()
			   .loadPageScripts();
		}
		
	}, 1);
	
	DOMContentLoaded = undefined;
},

configLoaded = function(event){
	// this method will trigger when ModularJS.configReady event occur.
	app.loadComponents();
	this.fire({
	    type: 'configLoaded'
	});
	
},

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
document.readyState



document.addEventListener('readystatechange', function(e){
	console.log(e, document.readyState);
});
// document.onreadystatechange = function(e){
// 	console.log(e, document.readyState);
// }


bind, 
DOMContentLoaded
DOMLoaded = function(){
	
	if (!document.addEventListener) {
		bind = document.attachEvent;
		return this;
	}
	
	bind = document.addEventListener;
	
	return this;
},

DOMReady = function(){
	
};
