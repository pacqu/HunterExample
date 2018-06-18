var Twit = require('twit');
var config = require('./config');
var configgenius = require('./config-genius');
setInterval(function(){
  var T = new Twit(config)
  var Genius = require("genius-api");
  var genius= new Genius(configgenius);
  T.get('statuses/mentions_timeline', {screen_name: 'spiritlyricbot' }, function (err,data,response) {
    while (err !== undefined){
      setTimeout(function(){
        T.get('statuses/mentions_timeline', {screen_name: 'spiritlyricbot' }, function (errWait,dataWait,responseWait) {
          data = dataWait;
          err = errWait;
          response = responseWait;
        });
      },
      100000);
    }
    data.forEach(function(mention){
      parseMention(mention,T,genius);
    });
  });
},5000);
function parseMention(mention,T,genius){
  console.log(mention);
}
