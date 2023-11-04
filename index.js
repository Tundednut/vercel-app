 const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html>
          <html>
          <head>
          </head>
          <body>
          <button onclick="run()">RUN</button>
          <script>
          const run = ()=> alert("hello world");
          </script>
          </body>
          </html>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
