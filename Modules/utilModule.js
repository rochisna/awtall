const util = require('util');
const formattedString = util.format('Hello, %s!', 'world');
console.log(formattedString); 
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
readFile('example.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
const obj = { name: 'Shruthi', age: 20, isActive: true };
console.log(util.inspect(obj, { showHidden: false, depth: null }));
 

     
