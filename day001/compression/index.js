var express = require('express');
var compression = require('compression');
var path = require('path');

var app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'public'), {index: ['index.htm']}));

app.listen(8080);
