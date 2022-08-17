/* 
 * Job Change
 * Made by Kent
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        qm.changeJob(2217);
        qm.forceStartQuest();
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
function end(mode, type, selection) {
    qm.dispose();
}
