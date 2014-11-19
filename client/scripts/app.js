'use strict';

//require angular
var angular = require('angular');


//main app module
var app = require('angular').module('demoApp', ['app.home', 'app.about'])


//require submodules
require('./home');  //app.home module
require('./about'); //app.about module