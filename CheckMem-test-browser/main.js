var angular = require('angular');
require('./index.css');
var modalMemory = require('./component/modal-memory/modal-memory.js');
var app = angular.module('baseMap',[modalMemory.name]);