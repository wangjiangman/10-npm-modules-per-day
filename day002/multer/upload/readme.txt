
admin_oc@sunvalley.com.cn

sunvalley@2017#


IE>=11  Safari>=10.1


Nodejs问题及解决方法：

1 Error: getaddrinfo ENOTFOUND http://xx.dd.com

   解决方法：在node.js中使用http或者https发送请求的时候host不要带http://或者https://,直接写xx.yy.com即可。

2 Error: write EPROTO 101057795:error:140770FC:SSL routines:SSL23_GET_SERVER_HELLO:unknown protocol:openssl\ssl\s23_clnt.c:782

   解决方法：使用https的时候的默认端口是443，如果在设置端口的时候设置成了80会报此错误。改成443或者server定义的https的端口即可。

3 error:140773F2:SSL routines:SSL23_GET_SERVER_HELLO:sslv3 alert unexpected message:s23_clnt.c:658:*

   解决方法： https client使用的ssl version和server端不能匹配，在options里添加options = { secureProtocol: 'SSLv3_method' }即可。

4 NodeJS & SSL - “bad password read”

   解决方法： Adding a passphrase field to the credentials solves the problem.

   var credentials = {
    	key: fs.readFileSync('XXX.key', 'utf8'),
   	cert: fs.readFileSync('XXX.crt', 'utf8'),
    	passphrase: 'XXXX'
   }
   var httpsServer = https.createServer(credentials, app);


服务器：119.29.6.156

打印机不通的情况： ping 10.30.2.14 -t

