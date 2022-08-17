/*
*   制作：dgms
*   唯一qq:2310492726
*   功能：充值中心
*   时间：2017年1月7日
*/
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    //cm.playerMessage(5,"mode:" + mode + " type:" + type + " selection:" + selection);
    if (mode <= 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    } if (status == 0) {
        var personInfo = "#d#e【元宝信息】#k\r\n";
        personInfo += "#k您当前#b在线时间：#r" + cm.getOnlineTime() + "#k 分钟\r\n";
        //personInfo += "#k您当前#b在线积分：#r"+cm.getGamePoints() + "#k 点\r\n";
        //personInfo += "#k您当前#b组队积分：#r" + cm.getPlayerPoints() + " #k点\r\n";
        personInfo += "#k您当前#b累计充值：#r"+cm.getTotalRMB() + " #k元\r\n";
        personInfo += "#k您当前#b元宝：#r" + cm.getRMB() + " #k元\r\n";
        //personInfo += "#k您当前#b游戏币：#r"+cm.getMeso() + " #k\r\n";
        //personInfo += "#k您当前#b存款：#r"+cm.getMoney() + " #k亿\r\n";
        personInfo += "#k您当前#b点卷：#r" + cm.getPlayer().getCSPoints(1) + " #k点\r\n";
        personInfo += "#k您当前#b抵用券：#r" + cm.getPlayer().getCSPoints(2) + " #k点\r\n";
        //personInfo += "#k您当前#b活跃度：#r" + cm.getActivity() + " #k点\r\n";
        //personInfo += "#n#k更多信息请在拍卖中查看！\r\n";
        //personInfo += "#k您当前#b活力值：#r"+cm.getPlayerEnergy() + " #k点\r\n";
        text = "充值中心"
        text += "\r\n#L0##b#e 充值礼包 #l  #L1##b#e 元宝兑换 #l"
        text += "\r\n#L2##b#e 理财系统 #l  #L3##b#e 中介系统 #l"
        cm.sendNext(text);
        cm.getNpcNotice(1540111, personInfo, 6);
    } else if (status == 1) {
        if (selection == 0) {
            cm.dispose();
            cm.openNpc(1530635, 2006);
        } else if (selection == 1) {
            cm.dispose();
            cm.openNpc(9300011, 1);
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(1530635, 996);
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(9300011, 1);
        } else {
            cm.dispose();
        }
    }
}