# 10-npm-modules-per-day
Inspired by [迷茫的你学习Node.js最好的方法](https://cnodejs.org/topic/59c75a3dd7cbefc511964688), wrote by i5ting.

## day001
- [cookie-parser](https://github.com/expressjs/cookie-parser)   将req.cookies转换为由键值对组成的对象
- [method-override](https://www.npmjs.com/package/method-override)  使得在客户端不支持的情况下，在Node server端使用HTTP动词成为可能。例如浏览器Form只能产生Get和Post请求，若后台API为PUT或者DELETE,且无法改变，此时可以通过method-override来改变这个请求的方式。
- [body-parser](https://github.com/expressjs/body-parser)  解析传入的请求主体，仅在req.body属性下可用
- [type-is](https://github.com/jshttp/type-is)  传送请求体的Content-Type
- [morgan](https://github.com/expressjs/morgan)  http请求日志打印中间件
- [finalhandler](https://github.com/pillarjs/finalhandler)  作为响应http请求的最后一步被调用
- [serve-static](https://github.com/expressjs/serve-static)  express.static基于此实现，负责托管应用内的静态资源
- [compression](https://github.com/expressjs/compression)  压缩中间件
- [serve-favicon](https://github.com/expressjs/compression)  favicon在server端处理插件，避免用户代理不加选择的请求导致错误log打印
- [serve-index](https://github.com/expressjs/compression)  提供包含给定路径的目录列表的页面。一般与serve-static一起用。

## day002
- [parseurl](https://github.com/pillarjs/parseurl) 与Nodejs核心库中的url.parse解析结果一样，不同的是parseurl会缓存相同url的解析结果
- [express-session](https://github.com/expressjs/session) 使用给定的选项创ssession存储，服务端session存储属于内存存储，会产生内存泄露，因此不适用于生产环境，仅适用于开发和测试环境。
- [vhost](https://github.com/expressjs/vhost) 使用node.js配置多个域名，更常用的做法是使用nginx做反向代理
- [uuid](https://github.com/broofa/node-uuid) uuid(Universally Unique IDentifier)全局唯一标识符。uuid.v1()基于时间戳生成；uuid.v4()随机生成
- [mime](https://github.com/broofa/node-uuid) 全面且小巧的mime模块。根据扩展名获取mime类型(getType)，根据mime类型获取扩展名(getExtension)。
- [mime-db](https://github.com/jshttp/mime-db) 根据mime类型获取扩展名等信息，仅由一个json文件组成不包含任何逻辑。
- [multer](https://github.com/expressjs/multer) 文件上传中间件。用于处理 multipart/form-data 类型的表单数据。
- [cookie-session](https://github.com/expressjs/cookie-session) 简单的基于cookie会话中间件。将session数据存在客户端的cookie中，express-session只会讲session的标识符存在客户端cookie中。
- [csurf](https://github.com/expressjs/csurf) Node.js CSRF(Cross-site request forgery跨站点请求伪造)保护
- [errorhandler](https://github.com/expressjs/errorhandler) 仅适用于开发环境

## day003
- [connect-image-optimus]()
- [connect-timeout]()
- [cluster]()
- [express-simple-cdn]() 将 CDN 用于静态资产，具有多主机支持（例如:cdn1.host.com、cdn2.host.com）
- [express-slash]() 适用于对末尾斜杠有很严格要求的人员
- [express-stormpath]() 实现用户存储、认证、授权、SSO 和数据安全性
- [express-uncapitalize]() 用于将包含大写字母的 HTTP 请求转换为标准的小写形式。
- [express-http-proxy]() 解决跨域问题
- [join-io]() 一个模块，用于实时联接文件以减少请求数目。
- [helmet]() 用于通过设置各种 HTTP 头来帮助保护应用程序。

## day004
- [express-jwt]()
