'use strict';

let waitTime = 3000;
let currentTime = 0;
let waitInterveral = 10;
let percentWaited = 0;

function writeWaitingPercent(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting... ${p}%`);
}

console.log('wait for it');

let interval = setInterval(function () {
  currentTime += waitInterveral;
  
  percentWaited = Math.floor((currentTime / waitTime) * 100);
  writeWaitingPercent(percentWaited);
  
  // console.log(`waiting ${currentTime / 1000} seconds...`);
}, waitInterveral)

setTimeout(function () {
  clearInterval(interval);
  writeWaitingPercent(100);
  console.log('\ndone');
}, waitTime);

process.stdout.write('\n\n');
writeWaitingPercent(percentWaited);