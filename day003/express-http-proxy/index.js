var proxy = require('express-http-proxy');
var app = require('express')();
 
app.use('/proxy', proxy('www.baidu.com'));
app.listen(3000);
