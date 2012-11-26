/*
 * Modular JS 0.1b
 * Author Irfan Durmus
 * irfandurmus@gmail.com
 * http://github.com/irfan/modularjs
 *
 */
/*jslint browser: true, white: true,*/
/*global app,Modularjs,console*/

(function (win, Modularjs) {
    
    'use strict';
    
    Modularjs = Modularjs || function () {};
    
	var document = win.document,
		
        // call when loaded.config event fired
        configLoaded = function () {
            app.loadComponents();
        },
        
        activate = function (app, addon, type) {
            app.activated[type].push(addon);
            app.fireEvent({
	            type: 'loaded.' + addon,
	            name: [type, addon]
	        });
        };
        
		//document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
		
	Modularjs.prototype = {
		
		// set constructor
		constructor: Modularjs,
		
		// the modules and modules will push into the array after base installed
		activated: {base: [], modules:[], components:[], pages:[]},
		
		// @addon : addon name like ajax client or module name like modelbox or starRating
		// @type : components || modules || config
		install: function (addon, data) {
		    
			if (!addon || !data || this[addon]) {
				return this;
			}
			
			var element = document.createElement('script'),
				path = '/src/config.js',
				that = this,
				type = data.type;
			
			if (addon !== 'config') {
				path = this.config.paths[type] + addon + '.js';
			}
			
			element.id = path + 'js';
			element.type = 'text/javascript';
			
			// if browser ie bind to the onreadystatechange event that fire our special event
		    if (element.readyState) {
		        element.onreadystatechange = function () {
		            if (element.readyState === 'complete' || element.readyState === 'loaded') {
		                element.onreadystatechange = null;
		                activate(that);
		            }
		        };
		    }
		    // if browser NOT ie bind to the onload event that fire our special event
		    else {
		        element.onload = function () {
		            element.onload = null;
		            activate(that);
		        };
		    }
			
			// finally set the url
			element.src = path;
			
			// push the element to the dom and invoke it.
			document.getElementsByTagName('head')[0].appendChild(element);
			
			return this;
			
		},
		
		// @addon should be addon name
		destroy: function (addon) {
			addon = addon + 'js';
			
			this.remove(addon);
			this[addon] = null;
			
			return this;
		},
		
		// @addon should be id of the element, e.x. effectsjs, htmljs
		remove: function (addon) {
			var element = document.getElementById(addon);
			if (element.length) {
				document.getElementsByName('head')[0].removeChild(element);
			}
			return this;
		},
		
		
		// loaders
		loadConfig: function () {
			
			if (!this.config) {
				this.install('config', {type: 'base'});
				
			}
			
			return this;
		},
		
		loadModules: function () {
			var m = this.config.modules,
				i,
				l = m.length;
			
			for (i=0; i < l; i += 1) {
				this.install(m[i], {type: 'modules'});
			}
			
			// trigger an event like {type:ModularJS.modules.ready}
			
			return this;
		},
		
		loadComponents: function () {
			var c = this.config.components,
				i,
				l = c.length;
			
			for ( i = 0 ; i < l; i += 1) {
				this.install(c[i], {type: 'components'});
			}
			
			return this;
		},
		
		loadPageScripts: function () {
			
			// var pageScriptList = document.getElementsByTagName('body')[0].dataset.modularjs;
			// pageScriptList = pageScriptList.split(' ');
			
			return this;
		},
		
		
		
		listeners : {},
		
		addListener: function (event, method) {
            
			if (typeof event !== 'string' || typeof method !== 'function') {
				return;
			}
			
			var listeners = this.listeners;
			
			listeners[event] = listeners[event] || [];
			
			listeners[event].push(method);
			console.log('- ' + event + ' added to listener list ', event);
		},
		
		fireEvent: function (event) {
		    
		    var listeners = this.listeners,
				type = event.type,
				l,
				i;
            listeners[type] = listeners[type] || [];
            
			l = listeners[type].length;
			
			if (l) {
				for ( i = 0; i < l; i += 1) {
					listeners[type][i].call(this, event);
				}
			}
			
			console.log('- ' + event.type + ' fired!', event);
		},
		
		removeListener: function (event, method) {
			
			if (typeof event !== 'object' || typeof method !== 'function') {
				return;
			}
			
			var listeners = app.listeners,
			    i,
			    list = listeners[event.type],
			    l = list.length;
			
			if (!listeners[event.type]) {
				return;
			}
			
			for ( i = 0 ; i < l; i += 1) {
			    
			    if (list[i] === method) {
		            delete list[i];
		            list.splice(i, 1);
		            
		            return;
		        }
			}
			
		},
        
		init: function () {
		    this.activated.base.push('base');
		    this.addListener("loaded.config", configLoaded);
		    // this.addListener('componentsLoaded', componentsLoaded);
		    // this.addListener('modulesLoaded', modulesLoaded);
			this.loadConfig();
		}
		
	};
	
	win.app = new Modularjs();
	win.app.init();
}(window, app));
