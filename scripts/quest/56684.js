/* 
 * 领取每日痕迹
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
        qm.sendAcceptDecline("#b#h ##k.你好，本任务暂时关闭了，强行使用会扣除你5个星星哦！");
    } else if (status == 1) {
        if (qm.canHold(4001839, 5)) {
            qm.gainItem(4001839, -5);
            qm.forceStartQuest();
            qm.forceCompleteQuest();
        }
        qm.dispose();
    }
}
function end(mode, type, selection) {
    qm.dispose();
}
