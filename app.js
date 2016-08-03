var express = require('express');
var app = express();
var path = require('path');
var APP_PATH = '/src';

app.use('/', express.static(path.join(__dirname, APP_PATH)));
var server = app.listen(3001, function() {
  var port = server.address().port;
  var host = server.address().adress;
  console.log('Listening to %s:%s', host, port);
});
