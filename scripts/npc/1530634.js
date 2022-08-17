/*
 *   商店-金币商店
 *   by:Abang
 */
var itemlist = [
    [2615031, 10 * 10000 * 10000],   //X饰品攻击力
    [2615032, 10 * 10000 * 10000],   //X饰品魔力
    [2616061, 10 * 10000 * 10000],   //X防具攻击力,
    [2616062, 10 * 10000 * 10000]   //X防具魔力
   // [4021007, 10 * 10000 * 10000],   //钻石
];

var selects; //记录玩家的选项
var buyNum = 0;


var tz17 = "#fEffect/CharacterEff/1112949/2/0#";  //花样音符

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {


    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == -1)
            cm.dispose();
        else if (status == 0) {
            selects = selection;
            text = "#e#r#h0#,啊哈哈，感受一下叶叶岛主基情满满的爱吧.每个物品每次最多可买100个，单次最多只能消费88亿哦.#n\r\n\r\n#b";
            text += "" + tz17 + "" + tz17 + "" + tz17 + "" + tz17 + "" + tz17 + "" + tz17 + "" + tz17 + "\r\n"
            var x = 0;

            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "# #i" + itemlist[i] + "# #b#z" + itemlist[i] + "#   #r" + itemlist[i][1] + "金币 \r\n";
                if (i != 0 && (i + 1) % 5 == 0) {
                    text += "\r\n";
                }
            }
            text += "\r\n" + tz17 + "" + tz17 + "" + tz17 + "" + tz17 + "" + tz17 + "" + tz17 + "" + tz17 + ""
            cm.sendSimple(text);
        } else if (status == 1) {
            selects = selection;
            cm.sendGetNumber("请输入你请你输入想要购买的数量,单次购买上限100个,各别物品注意背包格子够不够不然买不到扣钱\r\n\r\n#r - 1个需要 " + itemlist[selects][1] + "金币", 0, 0, 100);
        } else if (status == 2) {
            buyNum = selection;
            if( buyNum * itemlist[selects][1]>88 * 10000 * 10000){
                cm.sendOk("需要的金币超过88E！重来");
                cm.dispose();
            }else {
                cm.sendNext("你想购买" + buyNum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buyNum * itemlist[selects][1]) + "金币。");
            }
        } else if (status == 3) {
            if (cm.getMeso() >= buyNum * itemlist[selects][1]) {
                cm.gainMeso( -buyNum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buyNum);
                cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的金币。");
                cm.dispose();
            }
        }

    }
}
