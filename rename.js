'use strict';

let fs = require('fs');
fs.renameSync('./lib/project-config.js', './lib/config.json');

console.log('config json renamed');

fs.rename('./lib/readme.md', './notes.md', err => {if (err) console.log(err); else console.log('readme file renamed'); });