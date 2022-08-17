/* Cygnus revamp
 Noblesse tutorial
 Kimu
 Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
    status++;
    if (status == 0) {
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("做得好。這很簡單吧？對騎士團而言體力管理是必備的。有很多累人的任務呢。 那麼，就要繼續進行下一個訓練嗎？");
        } else if (status == 1) {
            qm.warp(130030105);
            qm.forceStartQuest();
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}
