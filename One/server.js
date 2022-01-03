console.log('Hello World!')
//console.log(global);

// Get OS Details
const os = require('os');
//call math.js
const math = require('./math')


console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log(os.hostname())

console.log(__dirname);
console.log(__filename);


console.log(math.add(3,4));
