'use strict';

let Person = require('./lib/Person');

let ben = new Person('Ben Franklin');
let george = new Person('George Washington');

ben.on('speak', function (said) {
  console.log(`${this.name}: ${said}`);
});

george.on('speak', function (said) {
  console.log(`${this.name}: ${said}`);
});

ben.emit('speak', 'you may delay, but time will not.');
george.emit('speak', 'its fat better to be alone than in bad company.');