var Twit = require('twit');
var config = require('./config');
var configgenius = require('./config-genius');
  var T = new Twit(config)
  var Genius = require("genius-api");
  var genius= new Genius(configgenius);
