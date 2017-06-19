const mymod = require('./mod.js')
const sum = require('./strSum.js')
module.exports = function main() {
    let args = arguments;
    return sum(args[0]);
};