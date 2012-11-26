/*
 * Modular JS 0.1b
 * Author Irfan Durmus
 * irfandurmus@gmail.com
 * http://github.com/irfan/modularjs
 */

"use strict";

(function(){
    
    var app = app || {};

    app.debug = function(){
        this.name = 'debug';
    }

    app.debug.prototype = {
        constructor: app.debug,

        firstMethod: function(){
            alert(this.name);
        },

        init: function(){
            this.firstMethod();
        }
    }
    
    
})(window, app);
