/* 内在能力的圆满，第三种内在能力 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("你好，#b#h0##k。这么快就达到70级啦！通过这段时间的冒险，你积累了不少经验，终于可以获得最后的#b第三种内在能力#k了。我现在就为你解放最后一种力量。");
    } else if (status == 1) {
        qm.forceCompleteQuest(); //发送完成任务的封包
        qm.sendPrev("好了～！我已经为你解放了最后的内在能力——第三种内在能力。请通过角色属性窗确认一下～！");
	qm.showCompleteQuestEffect(); //发送完成任务的效果
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
