'use strict';

let readline = require('readline');
let realPerson = { name: '', sayings: [] };
let fs = require('fs');

let rl = readline.createInterface(process.stdin, process.stdout);
rl.question('what is the name of a real person? ', function(answer) {
  realPerson.name = answer;

  rl.setPrompt(`What would ${realPerson.name} say? `);
  rl.prompt();

  let stream = fs.createWriteStream(`${realPerson.name}' + '.md`);
  stream.write(`${realPerson.name}\n===========\n\n`);

  rl.on('line', function(saying) {

    if (saying.toLowerCase().trim() === 'exit') {
      stream.close();
      rl.close();
    } else {
      realPerson.sayings.push(saying.trim());
      stream.write(`* ${saying.trim()}\n`);

      rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
      rl.prompt();
    }
  });
});

rl.on('close', function() {
  console.log('%s is a real person that says %j', realPerson.name, realPerson.sayings);
  process.exit();
});