 const http = require('http');
http.createServer((req, res) =>{
res.writeHead(200,{'Content-Type': 'text/html'});
res.end('<script>alert("hello world")</script>')

}).listen(8080);
