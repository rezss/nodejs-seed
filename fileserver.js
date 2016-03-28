'use strict';

let http = require('http');
let fs = require('fs');
let path = require('path');

http.createServer((req, res) => {
  console.log(`${req.method} rquest for ${req.url}`);
  
  if (req.url === '/') {
    fs.readFile('./public/index.html', 'UTF-8', (err, content) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  } else if (req.url.match(/.css$/)) {
    let cssPath = path.join(__dirname, 'public', req.url);
    let fileStream = fs.createReadStream(cssPath, 'UTF-8');
    
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fileStream.pipe(res);
  } else if (req.url.match(/.png$/)) {
    let imgPath = path.join(__dirname, 'public', req.url);
    let imgStream = fs.createReadStream(imgPath);
    
    res.writeHead(200, { 'Content-Type': 'image/png' });
    imgStream.pipe(res);    
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 File not Found');
  }
}).listen(3000);

console.log('File Server is Running on Port 3000');