/*各种戒指*/
var status = 0;
var choice;
var itemxh = new Array("1040192", "1040193", "1040195", "1040196", "1040197", "1041194", "1041195", "1041197", "1041198", "1042029", "1042030", "1042060", "1042119", "1042118", "1042108", "1042146", "1042142", "1042156", "1042173", "1042168", "1042161", "1042178", "1042194", "1042203", "1042198", "1042199", "1042176", "1042241", "1042238", "1042242", "1042329", "1042330", "1042333", "1042334", "1042335", "1042336", "1042337", "1042338", "1042339", "1042342", "1042345", "1042346", "1042354", "1042355", "1042356", "1042357", "1042358", "1042360", "1042361", "1042368", "1042369", "1042362", "1042363", "1042343");
var itemxhcost = new Array("50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "50000", "80000");

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
