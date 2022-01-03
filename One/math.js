const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

//combine all defs into one 
module.exports = {add, subtract, multiply, divide}


// You can export individual exports
exports.add = (a,b) => a+b;
exports.subtract = (a,b) => a-b;
exports.multiply = (a,b) => a*b;
exports.divide = (a,b) => a/b;

