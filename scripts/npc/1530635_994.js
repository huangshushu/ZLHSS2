var status = -1;
var text;
var selicon = "#fUI/Gateway/WorldSelect/icon/0#";

function StoreFactory(name, items) {
    var obj = new Object();
    obj.name = name;
    obj.items = items;

    obj.getItemID = function (index) {
        return this.items[index][0];
    };
    obj.getItemQuantity = function (index) {
        return this.items[index][1];
    }
    obj.getItemPrice = function (index) {
        return this.items[index][2];
    }
    return obj;
}

var allitems = [
    StoreFactory("商城商品", [
        //道具ID,数量,价格
        [5390018, 1, 1000],
        [5390019, 1, 1000],
        [5390030, 1, 1000],
        [5390031, 1, 1000],
        [5420001, 1, 1000],
        [5063100, 1, 1000],
    ]),
    StoreFactory("稀有点装", [
        [1242016, 1, 1000],
        [1242017, 1, 1000],
        [1242018, 1, 1000],
        [1242019, 1, 1000],
        [1242020, 1, 1000],
    ]),
    StoreFactory("各类椅子", [
        [3010062, 1, 1000],
        [3010063, 1, 1000],
        [3010064, 1, 1000],
        [3010065, 1, 1000],
        [3010066, 1, 1000],
    ]),
    StoreFactory("各类皮肤", [
        [5420001, 1, 1000],
        [5420001, 1, 1000],
        [5420001, 1, 1000],
        [5420001, 1, 1000],
    ]),
    StoreFactory("神奇骑宠", [
        [5420001, 1, 1000],
        [5420001, 1, 1000],
        [5420001, 1, 1000],
        [5420001, 1, 1000],
    ]),
]

var allitems2 = [
    StoreFactory("#fUI/CashShop.img/CSEffect/new/0#商城喇叭", [
        [5420001, 1, 1000],
        [5420001, 1, 1000],
    ]),
    StoreFactory("#fUI/CashShop.img/CSEffect/time/0#法弗纳武器", [
        [1242017, 1, 1000],
        [1242018, 1, 1000],
    ]),
]

function getItems(selection) {
    return selection < 1000 ? allitems : allitems2;
}

var seltype = 0;
var selitem = 0;
var buycount = 0;
var item = null;

function start() {
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.sendOk("欢迎下次光临")
        cm.dispose()
        return
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            text = "您好,欢迎来到" + cm.getServerName() + ",我是各种商城物品贩卖商\r\n \t#fUI/CashShop/CashItem/0# 点券:#r" + cm.getNX(1) + "#k\t\t抵用券:#r" + cm.getNX(2) + "#k\r\n#d";

            allitems.forEach(function (value, index, array) {
                text += "" + " #L" + index + "#" + selicon + " 购买" + value.name;
                for (var j = 0; j < Math.floor(Math.min(4, value.items.length)); j++) {
                    text += "#i" + value.getItemID(j) + "#";
                }
                text += "#l\r\n\r\n";
            })
            text += "#r";
            allitems2.forEach(function (value, index, array) {
                text += "\t#L" + (1000 + index) + "#" + value.name + "#l" + (index % 2 == 1 ? "\r\n" : "\t");
            })
            cm.sendOk(text);
        } else if (status == 1) {
            seltype = selection;
            text = "请选择要购买的商品:\r\n";
            var selarray = getItems(seltype)[seltype];
            for (var key in selarray.items) {
                text += "#L" + key + "##i" + selarray.getItemID(key) + "#";
            }
            cm.sendOk(text);
        } else if (status == 2) {
            selitem = selection;
            cm.sendGetNumber("请输入要购买的次数:", 1, 1, 1000);
        } else if (status == 3) {
            buycount = selection;
            item = getItems(seltype)[seltype];
            cm.sendYesNo("请确认一下购买信息:\r\n\r\n#i" + item.getItemID(selitem) + "##z" + item.getItemID(selitem) + "# " + item.getItemQuantity(selitem) + "个  单价:" + item.getItemPrice(selitem) + "\r\n\r\n确定购买#fs20#" + buycount + "#fs#次吗?");
        } else if (status == 4) {
            var innumber = buycount;
            buycount *= item.getItemQuantity(selitem);
            buyprice = buycount * item.getItemPrice(selitem)
            if (buyprice > cm.getNX(1)) {
                text = "您的点券不足" + buyprice + ",无法购买.";
            } else if (!cm.canHold(item.getItemID(selitem), buycount)) {
                text = "您的包裹空间不足,无法购买";
            } else {
                cm.gainNX(1, -buyprice);
                for (var i = 0; i < innumber; i++) {
                    cm.gainItem(item.getItemID(selitem), item.getItemQuantity(selitem));
                }
                text = "购买成功,本次共消费" + buyprice + "点券, 欢迎您下次光临";
            }
            cm.sendOk(text);
            cm.dispose();
        }
    }
}