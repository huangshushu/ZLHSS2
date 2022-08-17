/*各种戒指*/
var status = 0;
var choice;
var itemxh = new Array("1112134", "1112136", "1112144", "1112141", "1112145", "1112146", "1112148", "1112149", "1112152", "1112153", "1112159", "1112157", "1112165", "1112164", "1112161", "1112162", "1112171", "1112172", "1112174", "1112175", "1112176", "1112177", "1112178", "1112179", "1112190", "1112258", "1112259", "1112267", "1112273", "1112274", "1112275", "1112276", "1112277", "1112283", "1112284", "1112285", "1112286", "1112287", "1112288", "1112289", "1112290", "1112265", "1112264", "1112151", "1112263", "1112291");
var itemxhcost = new Array("50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "80000", "80000");

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
