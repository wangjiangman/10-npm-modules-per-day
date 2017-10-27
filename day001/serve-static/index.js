var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')
var path = require('path');

// Serve up public/ftp folder
var serve = serveStatic(path.join(__dirname, 'public'), {'index': [ 'index.htm','index.html']})

// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(8080);
