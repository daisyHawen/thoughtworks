const mymod = require('./mod.js')
const Student = require('./student.js') //es5
const es6class = require('./es6class.js') //es6
    // const myMath = require('./find.js')
const pos = require('./shop');
module.exports = function main() {
    let args = arguments;
    /*----quiz4---*/
    // let Tom = new Student('Tom', '21', '2');
    // let mike = new es6class.Student('mike', '18', '5');
    // console.log(Tom.introduce());
    // return Tom.introduce()

    /*--quiz5--*/
    /*
    let result = myMath([6, 9, 15, -2, 92, 11])
    console.log("o) 最小值 = " + result.min + "\n" + "o) 最大值 = " + result.max + "\n" + "o) 元素数量 = " + result.length + "\n" + "o) 平均值 = " + result.average);
    */
    var order = [
        'ITEM000000',
        'ITEM000000',
        'ITEM000000',
        'ITEM000000',
        'ITEM000000',
        'ITEM000001',
        'ITEM000001',
        'ITEM000004'
    ]
    var output = pos(order);
    console.log(output)
};