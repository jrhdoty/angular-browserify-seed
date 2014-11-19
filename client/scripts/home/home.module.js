'use strict';
//include angular
var angular = require('angular');

//declare new module
angular.module('app.home', [])

//register any other angular objects with require statements
.controller('HomeController', require('./home.controller'));

