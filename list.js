'use strict';

let fs = require('fs');

fs.readdir('./lib', function (err, files) {
  if (err)
    throw err;
    
  console.log(files);
});

console.log('reading files...');