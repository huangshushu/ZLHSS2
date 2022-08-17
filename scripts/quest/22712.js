/* 
 * Kinesis Job Change
 Made by Ken
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        qm.sendAcceptDecline("#b#h ##k. 你来了,.现在想要对数据进行更新吗?(#r进行1转#k)");
    } else if (status == 1) {
        qm.changeJob(14200);
        qm.gainItem(1353200, 1);
        qm.forceStartQuest();
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
function end(mode, type, selection) {
    qm.dispose();
}
