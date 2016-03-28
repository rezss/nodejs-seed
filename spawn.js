'use strict';

let spawn = require('child_process').spawn;

let cp = spawn('node', ['always talking']);

cp.stdout.on('data', function (data) {
  console.log(`STDOUT: ${data.toString()}`);
});

cp.on('close', function () {
  console.log('child process has ended');
  process.exit();
});

setTimeout(function () {
  cp.stdin.write('stop');
}, 4000);