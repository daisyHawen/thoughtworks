const mymod = require('./mod.js')
module.exports = function main() {
    let args = arguments;
    return mymod(args[0], args[1]);
};