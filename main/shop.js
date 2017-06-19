/*收银机（POS）系统，这台收银机会在结算时根据客户的购物车（Cart）中的商品（Item）进行结算和打印购物清单 */
const goods = [{
    id: 0,
    name: "可口可乐",
    unit: '瓶',
    price: 3
}, {
    id: 1,
    name: "雪碧",
    unit: '瓶',
    price: 3
}, {
    id: 4,
    name: "电池",
    unit: '个',
    price: 2
}];

function getInfo(id) {
    var output = {};
    for (let i = 0; i < goods.length; i++) {
        if (goods[i].id == id) {
            output = goods[i];
            output.num = 1; //设置每个商品的数量为1
            break;
        }
    }
    return output;
}

function printOrder(items) {
    var newItems = mergeItem(items);
    var total = 0;
    let output = "***<没钱赚商店>购物清单***\n";
    for (let i = 0; i < newItems.length; i++) {
        var money = newItems[i].price * newItems[i].num
        total += money;
        output += "名称: " + newItems[i].name + "，数量：" + newItems[i].num + newItems[i].unit + " ，单价：" + newItems[i].price.toFixed(2) + "(元)，小计：" + money + '(元)' + "\n";
    }
    output += "----------------------\n";
    output += "总计：" + total.toFixed(2) + "(元)\n";
    output += "**********************";
    return output;
}
//合并商品
function mergeItem(items) {
    /*合并重复的商品*/
    for (let i = 0; i < items.length; i++) {
        let curItem = items[i];
        for (let j = i; j < items.length; j++) {
            if (items[j].id == curItem.id) {
                items[i].num += 1;
                items.splice(j, 1); //删除这个元素
            }
        }
    }
    return items;
}
module.exports = function POS(orderArr) {
    let items = [];
    let customer = {};
    for (let i = 0; i < orderArr.length; i++) {
        let id = parseInt(orderArr[i].substring(4));
        let item = getInfo(id);
        items.push(item);
    }
    return printOrder(items);
}