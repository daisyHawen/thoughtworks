//计算数组的最小值、最大值、序列中的元素个数，平均值
module.exports = function(arr) {
    var min = 0;
    var max = 0;
    var len = arr.length;
    var sum = 0;
    for (let i = 0; i < len; i++) {
        //min
        if (arr[i] < min) {
            min = arr[i]
        }
        //max
        if (arr[i] > max) {
            max = arr[i]
        }
        sum += arr[i];
    }
    var average = (sum / len).toFixed(2);
    return {
        "min": min,
        "max": max,
        "length": len,
        "average": average
    }
}