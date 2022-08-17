/*各种戒指*/
var status = 0;
var choice;
var itemxh = new Array("1080008", "1082703", "1081014", "1081013", "1080009", "1082693", "1082713", "1082657", "1082704", "1082705", "1082721", "1082714", "1082520", "1082618", "1082631", "1082657", "1082684", "1082689", "1082692", "1082690", "1082694", "1082715", "1082716", "1082717", "1082718", "1082719", "1082700", "1082702", "1082548", "1082493");
var itemxhcost = new Array("50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000");

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            choices = "\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的点装";
            for (var i = 0; i < itemxh.length; i++) {
                choices += "\r\n#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#　#d需要#r" + itemxhcost[i] + "#d点卷#k#l";
            }
            cm.sendSimpleS("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#" + choices, 2);
        } else if (status == 1) {
            cm.sendGetNumber("你选择的商品为#v" + itemxh[selection] + "#售价为：" + itemxhcost[selection] + "点卷/张\r\n请输入你购买的数量", 1, 1, cm.getPlayer().getCSPoints(1));
            choice = selection;
        } else if (status == 2) {
            fee = selection;
            money = fee * itemxhcost[choice];
            if (fee < 0) {
                cm.sendOk("不能输入0.或者你没有足够的点卷支付你要买的数量.!");
                cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) < money) {
                cm.sendOk("购买失败，你没有" + money + "点卷");
                cm.dispose();
            } else {
                cm.gainNX(-money);
                cm.gainItem(itemxh[choice], fee);
                cm.sendOk("恭喜，购买成功。");
                cm.dispose();
            }
        }
    }
}
