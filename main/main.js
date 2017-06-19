const mymod = require('./mod.js')
const Student = require('./student.js') //es5
const es6class = require('./es6class.js') //es6

module.exports = function main() {
    let args = arguments;
    let Tom = new Student('Tom', '21', '2');
    let mike = new es6class.Student('mike', '18', '5');
    console.log(Tom.introduce());
    return Tom.introduce()
};