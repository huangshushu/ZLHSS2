/* 绿色礼物盒特殊兑换 */

var status = -1;
var itemId = 4031506; //绿色礼物盒 - 装有圣诞节礼物的绿色的礼物盒
var itemList = Array(
Array(2614014, 6), //龙背刃
//Array(1402014, 1), //温度计
Array(1092049, 1), //热情剑盾
Array(1022097, 1), //龙眼镜 - 含有龙的力量的眼镜。
Array(1152054, 1), //完成的护肩
Array(1202004, 1), //诅咒僵尸-图腾
Array(2511118, 1), //烈日吊坠制作配方	130级
Array(2511119, 1), //烈日戒指制作配方	130级
Array(2511120, 1), //烈日腰带制作配方	130级
Array(2511121, 1), //烈日耳环制作配方	130级
Array(2511122, 1), //烈日脸饰制作配方	130级
Array(2511123, 2), //白天使的祝福制作配方	90级
Array(2511112, 2), //希纳斯的钻石戒指制作配方	140级
//Array(2040807, 1), //手套攻击诅咒卷轴 - 成功率100%，物理攻击力+3
Array(2043003, 1), //单手剑攻击必成卷 - 为单手剑增加攻击力属性。\n成功率：100%，物理攻击力+5，力量+3，物理防御力+10
Array(2043103, 1), //单手斧攻击必成卷 - 为单手斧增加攻击力属性。\n成功率：100%，物理攻击力+5，力量+3，物理防御力+10
Array(2043203, 1), //单手钝器攻击必成卷 - 为单手钝器增加攻击力属性。\n成功率：100%，物理攻击力+5，力量+3，物理防御力+10
//Array(2043303, 1), //短剑攻击必成卷 - 为短剑增加攻击力属性。\n成功率：100%，物理攻击力+5，运气+3，物理防御力+10
//Array(2043703, 1), //短杖攻击必成卷 - 为短杖增加魔力属性。\n成功率：100%，魔法攻击力+5，智力+3，魔法防御力+10
//Array(2043803, 1), //长杖攻击必成卷 - 为长杖增加魔力属性。\n成功率：100%，魔法攻击力+5，智力+3，魔法防御力+10
//Array(2044003, 1), //双手剑攻击必成卷 - 为双手剑增加攻击力属性。\n成功率：100%，物理攻击力+5，力量+3，物理防御力+10
Array(2044019, 1), //双手剑魔力必成卷 - 成功率:100%, 魔法攻击力+5, 智力+3,魔法防御力+1 
Array(2044203, 1), //双手钝器攻击必成卷 - 为双手钝器增加攻击力属性。\n成功率：100%，物理攻击力+5，力量+3，物理防御力+10
//Array(2044303, 1), //枪攻击必成卷 - 为枪增加攻击力属性。\n成功率：100%，物理攻击力+5，力量+3，物理防御力+10
Array(2044403, 1), //矛攻击必成卷 - 为矛增加攻击力属性。\n成功率：100%，物理攻击力+5，力量+3，物理防御力+10
//Array(2044503, 1), //弓攻击必成卷 - 为弓增加攻击力属性。\n成功率：100%，物理攻击力+5，命中值+40，敏捷+1
Array(2044603, 1), //弩攻击必成卷 - 为弩增加攻击力属性。\n成功率：100%，物理攻击力+5，命中值+40，敏捷+1
//Array(2044703, 1), //拳套攻击必成卷 - 为拳套增加攻击力属性。\n成功率：100%，物理攻击力+5，命中值+40，运气+1
Array(2044815, 1), //指节攻击必成卷 - 成功率:100%, 物理攻击力+5, 力量+3, 物理防御力+1 
//Array(2044908, 1), //短枪攻击必成卷 - 成功率:100%, 物理攻击力+5, 命中值+60, 敏捷+1 
//Array(2040303, 1), //耳环智力必成卷 - 为耳饰增加智力属性。\n成功率：100%，魔法攻击力+5，智力+3，魔法防御力+10
Array(2040506, 1), //全身盔甲敏捷必成卷 - 为全身盔甲增加敏捷属性。\n成功率：100%，敏捷+5，命中值+45，移动速度+1
Array(2040710, 1) //鞋子跳跃必成卷 - 成功率:100%, 跳跃力+5, 敏捷+3,移动速度+1 
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
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "绿色礼物盒", 3);
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
