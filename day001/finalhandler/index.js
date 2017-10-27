var finalhandler = require('finalhandler')
var fs = require('fs')
var http = require('http')
var path = require('path');
 
var server = http.createServer(function (req, res) {
  var done = finalhandler(req, res, {onerror: logerror})
 
  fs.readFile(path.join(__dirname, 'index.html'), function (err, buf) {
    if (err) return done(err)
    res.setHeader('Content-Type', 'text/html')
    res.end(buf)
  })
})
 
server.listen(8080);
 
function logerror (err) {
  console.error(err.stack || err.toString());
}
