'use strict';

let fs = require('fs');

// fs.renameSync('./assets/logs', './logs');

fs.readdirSync('./logs').forEach(fileName => {
  fs.unlinkSync('./logs/' + fileName);
});

fs.rmdir('./assets', err => { if (err) throw err; console.log('dir removed'); });
fs.rmdir('./logs', err => { if (err) throw err; console.log('dir removed'); });
