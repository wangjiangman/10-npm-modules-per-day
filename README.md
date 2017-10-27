# 10-npm-modules-per-day
Inspired by [迷茫的你学习Node.js最好的方法](https://cnodejs.org/topic/59c75a3dd7cbefc511964688), wrote by i5ting.

## day001
- [cookie-parser](https://github.com/expressjs/cookie-parser)   将req.cookies转换为由键值对组成的对象
- [method-override](https://www.npmjs.com/package/method-override)  使得在客户端不支持的情况下，在Node server端使用HTTP动词成为可能。例如浏览器Form只能产生Get和Post请求，若后台API为PUT或者DELETE,且无法改变，此时可以通过method-override来改变这个请求的方式。
- [body-parser](https://github.com/expressjs/body-parser)  解析传入的请求主体，仅在req.body属性下可用
- [type-is](https://github.com/jshttp/type-is)  传送请求体的Content-Type
- [morgan](https://github.com/expressjs/morgan)  http请求打印中间件
- [finalhandler](https://github.com/pillarjs/finalhandler)  作为响应http请求的最后一步被调用
- [serve-static](https://github.com/expressjs/serve-static)  express.static基于此实现，负责托管应用内的静态资源
- [compression](https://github.com/expressjs/compression)  压缩中间件
- [serve-favicon](https://github.com/expressjs/compression)  favicon在server端处理插件，避免用户代理不加选择的请求导致错误log打印
- [serve-index](https://github.com/expressjs/compression)  提供包含给定路径的目录列表的页面。一般与serve-static一起用。

## day002
- [express-session](https://github.com/expressjs/session) 使用给定的选项创建会话
- [vhost](https://github.com/expressjs/vhost) 在请求的传入主机匹配主机名时切换请求以处理