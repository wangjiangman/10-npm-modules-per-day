var mime = require('mime'); // 8kb
var mimeLite = require('mime/lite'); // 2.5kb
var mimeDb = require('mime-db');

var extension = mime.getExtension('application/javascript');
// 'js'

var type = mime.getType('js');
// 'application/javascript'

mimeLite.getType('txt');
// 'text/plain'

mimeDb['application/javascript'].extensions;
// ['js', 'mjs']
