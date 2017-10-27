var express = require('express')
var typeis = require('type-is')

var app = express()

app.use(function bodyParser(req, res, next) {
  // 每种类型可以是：
  // 一个扩展名称，如json。 如果匹配，将返回此名称。
  // 一个mime类型，如application/json。
  // 具有通配符的MIME类型，例如*/*或*/json或application/*。 如果匹配，将返回完整的MIME类型。
  // 一个后缀，如+ json。 这可以与诸如*/vnd + json或application/*+json的通配符组合。 如果匹配，将返回完整的MIME类型。
  // 如果没有类型匹配或内容类型无效，则返回false。
  // 如果请求没有正文，将返回null。
  console.log(typeis(req, ['json'])); // json
  console.log(typeis(req, ['application/json'])); // application/json
  console.log(typeis(req, ['application/*']));  // application/json
  console.log(typeis(req, ['application/*+json'])); // false
  
  if (!typeis.hasBody(req)) {
    return next()
  }

  switch (typeis(req, ['urlencoded', 'json', 'multipart', 'html'])) {
    case 'urlencoded':
      // parse urlencoded body
      throw new Error('implement urlencoded body parsing')
    case 'json':
      // parse json body 
      throw new Error('implement json body parsing')
    case 'multipart':
      // parse multipart body 
      throw new Error('implement multipart body parsing')
    default:
      // 415 error code 
      res.statusCode = 415
      res.end('451 error!');
      break
  }
});

app.listen(8080);
