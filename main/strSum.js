/*字符串格式的数字求和*/
module.exports = function(str) {
    const arr = str.split("");
    let sum = 0;
    for (let i = 00; i < arr.length; i++) {
        sum += parseInt(arr[i])
    }
    return sum;
}