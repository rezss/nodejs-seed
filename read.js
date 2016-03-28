'use strict';

let fs = require('fs');

fs.readFile('./lib/Person.js', 'UTF-8', function(err, content) {
  if (err)
    console.log(err);
    
  console.log(content);
});

fs.readdir('./lib', function (err, files) {
  files.forEach((path, fileName) => { 
    let file = path.join(__dirname, 'lib', fileName); 
    let status = fs.statSync(file);
    if (stats.isFile()) {
      fs.readFile(file, 'UTF-8', (err, content) => console.log(content));
    } 
  });
});