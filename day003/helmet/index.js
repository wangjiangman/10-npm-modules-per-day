const join = require('join-io');
const http = require('http');
const express = require('express');
var helmet = require('helmet')

const app = express();
app.use(helmet.noCache());
app.use(express.static(__dirname));

app.listen(3000);
