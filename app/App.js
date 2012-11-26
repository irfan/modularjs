// Application integration 

(function(win, doc){
    
    win.app = new ModularJS();
    win.app.init();
    
    win.addEventListener('click', function(e){
        var element = e.target,
            modules = element.className.split(' '),
            l = modules.length,
            i,
            temp;
        
        for (i=0; i < l; i += 1) {
            temp = app.modules[modules[i]];
            if (typeof temp === 'object') {
                app.get(modules[i]).handle(element, e);
            }
        };

    });
    
})(window, document);


