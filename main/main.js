const mymod = require('./mod.js')
module.exports = function main() {
    console.log("Debug Info");
    mymod(9, 4);
    mymod(9, 3);
    return 'Hello World!';
};