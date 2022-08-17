/* 黄色礼物盒特殊兑换 */

var status = -1;
var itemId = 4031505; //黄色礼物盒 - 装有圣诞节礼物的黄色的礼物盒
var itemList = Array(
Array(2049116, 1), //强化混沌卷轴
Array(5064000, 1), //防爆卷轴
Array(5064100, 1), //保护卷轴
Array(5064300, 1), //卷轴防护卷轴
Array(2511041, 1), //旭日腰带制作配方	130级
Array(2511058, 1), //旭日吊坠制作配方	130级
Array(2511080, 1), //旭日戒指制作配方	130级
Array(2511102, 1), //旭日耳环制作配方	130级
Array(2511113, 1), //无双耳环制作配方	130级
Array(2511114, 1), //无双吊坠制作配方	130级
Array(1202000, 1), //冰冻僵尸-图腾
Array(1202001, 1), //火焰僵尸-图腾
Array(1202002, 1), //中毒僵尸-图腾
Array(1202003, 1), //触电僵尸-图腾
Array(1402063, 1), //樱花伞
Array(1442039, 1), //冻冻鱼
Array(1092022, 1), //调色板盾牌
Array(1322051, 1), //七夕
Array(1402044, 1), //南瓜灯笼
Array(1432039, 1), //钓鱼竿
Array(1332053, 1), //野外烧烤串
Array(1432037, 1), //枫叶大将旗
Array(1302061, 1), //蔓藤鞭子
Array(1432046, 1), //圣诞树手杖
Array(1302087, 1), //火炬
Array(1402029, 1), //鬼刺狼牙棒
Array(1372033, 1), //圣贤短杖
Array(1332032, 1), //圣诞树
Array(1432013, 1), //南瓜枪
Array(1422011, 1), //酒瓶
Array(1302128, 1), //火柴
Array(1302129, 1), //叉子
Array(1302035, 1), //枫叶旗
Array(1302058, 1), //冒险岛伞
Array(1302067, 1), //枫叶庆典旗
Array(1302080, 1), //七彩霓虹灯泡
Array(1432015, 1), //红色滑雪板
Array(1432016, 1), //橙色滑雪板
Array(1432017, 1), //绿色滑雪板
Array(1432018, 1), //蓝色滑雪板
Array(1003011, 1), //月饼帽（新）
Array(1422030, 1), //粉红海豹抱枕
Array(1422031, 1), //蓝色海豹抱枕
Array(1302024, 1), //废报纸卷
Array(1302037, 1)  //小号
);
var selectedItem = -1;
var selectedCost = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "请选择您要兑换的道具：\r\n";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + "#k 个#v" + itemId + "##l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("您是否兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 个#v" + itemId + "##l？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedItem <= 0 || selectedCost <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.haveItem(itemId, selectedCost)) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "黄色礼物盒", 3);
            if (gachaponItem != -1) {
                cm.gainItem(itemId, -selectedCost);
                cm.sendOk("恭喜您成功兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("兑换奖励失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有这么多物品。\r\n\r\n兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 个#v" + itemId + "##l。");
        }
        cm.dispose();
    }
}
