'use strict';

let http = require('http');

let server = http.createServer((req, res)=> {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTML Respnse</title>
      </head>
      <body>
        <h1>Serving HTML Text</h1>
        <p>${req.url}</p>
        <p>${req.method}</p>
      </body>
    </html>
  `);
});

server.listen(3000);

console.log('server listening on port 3000');