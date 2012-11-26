/*
 * Modular JS 0.1b
 * Author Irfan Durmus
 * irfandurmus@gmail.com
 * http://github.com/irfan/modularjs
 */

"use strict";

var app = app || {};

app.component = {
    this.name = 'component'
};

app.component.prototype = {
    constructor: app.component,
    
    firstMethod: function(){
        document.write(this.name);
    },
    
    init: function(){
        this.firstMethod();
    }
}

app.component = new app.component();