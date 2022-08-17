/*各种戒指*/
var status = 0;
var choice;
var itemxh = new Array("1103027", "1103028", "1103039", "1103040", "1103034", "1103019", "1103020", "1103043", "1103045", "1102995", "1102998", "1102999", "1103000", "1103001", "1103003", "1103007", "1102258", "1102969", "1102970", "1102971", "1102973", "1102974", "1102975", "1102976", "1102978", "1102981", "1102983", "1102985", "1102990", "1102991", "1102984", "1102986", "1103004");
var itemxhcost = new Array("50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000");

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
