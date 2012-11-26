/*
 * Modular JS 0.1b
 * Author Irfan Durmus
 * irfandurmus@gmail.com
 * http://github.com/irfan/modularjs
 */

'use strict';

var app = app || {};

app.config = {
	paths: {
		application: '/application.js',
		base: '/src/',
		components: '/src/components/',
		modules: '/src/modules/',
		pages: '/src/pages/',
		templates: '/src/tpl/'
	},
	components: [
		// 'ajax', 'client', 'css', 'effects', 'events', 'dom', 
		'debug' ],
	modules: [
		'starRating', 'modelBox' ],
	pages: {
		mainpage: ['page', 'spesific', 'js']
	}
};
