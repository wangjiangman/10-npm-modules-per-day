var express = require('express');
var logger = require('morgan');
var fs = require('fs');
var path = require('path');

var app = express();

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
app.use(logger('dev', {stream: accessLogStream}));

app.get('/', (req, res) => {  
  res.end('hello');
});

app.listen(8080);
