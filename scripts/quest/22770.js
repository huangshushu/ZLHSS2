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
        qm.sendAcceptDecline("#b#h ##k. 你来了,.现在想要对数据进行更新吗?(#r进行2转#k)");
    } else if (status == 1) {
        qm.changeJob(14210);
        qm.gainItem(1353201, 1);
        qm.forceStartQuest();
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
function end(mode, type, selection) {
    qm.dispose();
}
