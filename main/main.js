const mymod = require('./mod.js')
const klass = require('./klass.js') //es5
const es6class = require('./es6class.js') //es6

module.exports = function main() {
    let args = arguments;
    let jack = new klass.Student('jack', '18', '5');
    let mike = new es6class.Student('mike', '18', '5');
    console.log(mike.introduce());
    return jack.introduce()
};