/*各种骑宠*/
var status = 0;
var choice;
var itemxh = new Array("2432309", "2432582", "2432653", "2430050", "2430291", "2430293", "2430295", "2430297", "2430299", "2430301", "2430303", "2430305", "2430307", "2430309", "2430311", "2430313", "2430315", "2430317", "2430319", "2430321", "2430323", "2430325", "2430327", "2430329", "2430331", "2430333", "2430335", "2430337", "2430339", "2430341", "2430343", "2430346", "2430348", "2430350", "2430352", "2430354", "2430356", "2430358", "2430360", "2430362", "2430536", "2431473", "2431390", "2432311", "2434517");
var itemxhcost = new Array("10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000");

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
            choices = "\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的骑宠";
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
