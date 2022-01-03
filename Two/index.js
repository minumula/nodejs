const fs = require ('fs');
const path = require('path');

// Hard code the path of the file
//fs.readFile('./files/starter.txt', 'utf8', (err, data) => {

// Use the path to join the directory path and the file name
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {

    if (err) throw err;
    console.log(data);
})

// console.log below will execute first before the readFile data. Async data
console.log('Hello....');

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you too', (err) => {
    if (err) throw err;
    console.log('Write complete');
})

fs.appendFile(path.join(__dirname, 'files', 'append.txt'), 'Appended Text \n', (err) => {
    if (err) throw err;
    console.log('Append complete');
})


process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})
