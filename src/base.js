/*
 * Modular JS 0.1b
 * Author Irfan Durmus
 * irfandurmus@gmail.com
 * http://github.com/irfan/modularjs
 *
 */
/*jslint browser: true, white: true,*/
/*global app,Modularjs,console*/



(function(){
    console.log(this.prototype);
}());


var Modularjs = Modularjs || function(){};

Modularjs.prototype = {
    
    constructor: {},
    
    init: function(){
        console.log(this);
    },
    
    config: function(){
        return this;
    }
    
}

this.Modularjs = new Modularjs().init();