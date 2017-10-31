const join = require('join-io');
const http = require('http');
const express = require('express');
var helmet = require('helmet')

const app = express();
app.use(helmet.noCache());

const server = http.createServer(app);

const port = 3000;
const ip = '127.0.0.1';

app.use(join({
    dir: __dirname,
    prefix: '/join',    /* default */
}));

app.use(express.static(__dirname));

server.listen(port, ip);
