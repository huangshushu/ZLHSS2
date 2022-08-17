/* 
 * 领取每日星星
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        qm.sendAcceptDecline("#b#h ##k. 每天登陆都可以在这里领取300星星哟,是否现在就要领取");
    } else if (status == 1) {
        if (qm.canHold(4001839, 300)) {
            qm.gainItem(4001839, 300);
            qm.forceStartQuest();
            qm.forceCompleteQuest();
        }
        qm.dispose();
    }
}
function end(mode, type, selection) {
    qm.dispose();
}
