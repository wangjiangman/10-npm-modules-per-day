var express = require('express')
var morgan = require('morgan')
 
var app = express()
 
app.use(morgan('dev')) 
// API: morgan(format, options) 
// 预定义的format字符串有：tiny、combined、dev、common、short等
// options: immediate skip(过滤掉某些打印) stream(数据打印流)

app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(8080);

// 发送get请求到http://localhost:8080

// morgan('combined') 打印：
// ::1 - - [27/Oct/2017:02:46:53 +0000] "GET / HTTP/1.1" 200 13 "-" "PostmanRuntime/6.3.2"

// morgan('dev') 打印：
// GET / 200 0.753 ms - 13