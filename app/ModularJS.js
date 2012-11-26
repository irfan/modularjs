// Main Application
var ModularJS = ModularJS || function() {
    
    // workaround 
    var that = this,

        // store all modules instances here
        instances = {},
        
        // list all installed modules
        getModules = function() {
            return that.modules;
        },
        
        // get page list
        getPages = function() {
            return that.pages;
        },
        
        // get the page name
        getPage = function() {
            return document.getElementsByTagName('body')[0].id || false;
        };

    
    // show all installed modules
    that.getInstances = function() {
        return instances;
    };
    
    // return a module instance
    that.get = function(module){
        
        if (instances[module] !== undefined) {
            return instances[module];
        }
        
        if (typeof window.modules[module] !== 'function') {
            return false;
        }
        
        instances[module] = new that[module]();
        
        return instances[module];
    };
    
    // initialize ModularJS
    that.init = function() {
        
        var pages = getPages() || [],
            page = getPage() || '',
            pageModules = pages[page] || [],
            i,
            l = pageModules.length || 0,
            configInstance = new Config();
        
        for(i = 0; i < l; i += 1){
            
            if(instances[pageModules[i]] === undefined && typeof modules[pageModules[i]] === 'function' ){
                modules[pageModules[i]].prototype = configInstance;
                (typeof modules[pageModules[i]] === 'function') ? instances[pageModules[i]] = new modules[pageModules[i]]() : false;
                instances[pageModules[i]].prototype = window.app;
                instances[pageModules[i]].init();
            }

        }
        return that;
    };
    
    // destroy a module
    that.destroy = function(module) {
        
        if (instances[module] !== undefined) {
            instances[module] == null;
            delete instances[module];
        }

    }
    
};

// put Config's instance to application's prototype
ModularJS.prototype = new Config();


