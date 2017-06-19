const mymod = require('./mod.js')
const Student = require('./student.js') //es5
const es6class = require('./es6class.js') //es6
const myMath = require('./find.js')
module.exports = function main() {
    let args = arguments;
    /*----quiz4---*/
    // let Tom = new Student('Tom', '21', '2');
    // let mike = new es6class.Student('mike', '18', '5');
    // console.log(Tom.introduce());
    // return Tom.introduce()

    /*--quiz5--*/
    let result = myMath(args[0])
    console.log("最小值＝" + result.min);
    console.log("最大值＝" + result.max);
    console.log("平均数量＝" + result.length);
    console.log("平均值＝" + result.average);

};