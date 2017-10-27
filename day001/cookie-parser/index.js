var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
	console.log('Cookie', req.cookies);
	// Cookie { Cho: 'Kim', Greet: 'Hello' }
	res.send('hello');
});

app.listen(8080);

// send get to http://127.0.0.1:8080 
// with two cookies "Cho=Kim;Greet=Hello"
