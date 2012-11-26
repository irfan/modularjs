var modules = modules || {};

modules.notify = function () {
    
    var name = 'notify',
        config = this.modules[name],
        count = 0,
        options,
        notifies = [],
        markup,
        timeout,
        autoclose = config.autoclose || false,
        target = document.getElementById(config.target),
        sibling = target.children[0];
    

    this.init = function(args){
        options = args || options || config;
        
        markup = document.createElement('div');
        count += 1;
        
        markup.innerHTML = options.content;
        markup.id = name + '_' + count;
        markup.className = 'hidden pageNotify ' + options.type;
        
        notifies.push(markup);
        return this;
    };
    
    this.list = function(){
      return notifies;
    };
    
    this.update = function(args) {
        
        options = args || options || config;
        
        markup.innerHTML = options.content;
        markup.id = name + '_' + count;
        markup.className = 'pageNotify ' + options.type;
        
        return this;
    };
    
    this.show = function(args){
        
        options = args || options || config;
        
        if(typeof args === 'object') {
          this.update(args);
        }
        
        target.insertBefore(markup, sibling);

        markup.className = markup.className.replace(/\bhidden\b/,'').trim();
        
        if (typeof autoclose === 'number') {
            
            timeout = setTimeout(function(){
              clearTimeout(timeout);
              timeout = undefined;
              
              if (markup.parentNode !== null) {
                  markup.parentNode.removeChild(markup);
              }

            }, autoclose);
        }

        return this;
    };
    
    this.handle = function(element, event){
        console.log(element, event);
        return this;
    };

};

