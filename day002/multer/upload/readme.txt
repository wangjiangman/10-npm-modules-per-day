
admin_oc@sunvalley.com.cn

sunvalley@2017#


IE>=11  Safari>=10.1


Nodejs���⼰���������

1 Error: getaddrinfo ENOTFOUND http://xx.dd.com

   �����������node.js��ʹ��http����https���������ʱ��host��Ҫ��http://����https://,ֱ��дxx.yy.com���ɡ�

2 Error: write EPROTO 101057795:error:140770FC:SSL routines:SSL23_GET_SERVER_HELLO:unknown protocol:openssl\ssl\s23_clnt.c:782

   ���������ʹ��https��ʱ���Ĭ�϶˿���443����������ö˿ڵ�ʱ�����ó���80�ᱨ�˴��󡣸ĳ�443����server�����https�Ķ˿ڼ��ɡ�

3 error:140773F2:SSL routines:SSL23_GET_SERVER_HELLO:sslv3 alert unexpected message:s23_clnt.c:658:*

   ��������� https clientʹ�õ�ssl version��server�˲���ƥ�䣬��options�����options = { secureProtocol: 'SSLv3_method' }���ɡ�

4 NodeJS & SSL - ��bad password read��

   ��������� Adding a passphrase field to the credentials solves the problem.

   var credentials = {
    	key: fs.readFileSync('XXX.key', 'utf8'),
   	cert: fs.readFileSync('XXX.crt', 'utf8'),
    	passphrase: 'XXXX'
   }
   var httpsServer = https.createServer(credentials, app);


��������119.29.6.156

��ӡ����ͨ������� ping 10.30.2.14 -t

