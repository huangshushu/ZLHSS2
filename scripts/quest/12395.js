/* 变得更强劲的力量，第二种内在能力 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("你好，#b#h0##k。这么快就达到50级啦！通过这段时间的冒险，你积累了不少经验，可以获得#b第二种内在能力#k了。我现在就为你解放第二种力量。");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendPrev("好了～！我已经为你解放了更强的力量——第二种内在能力。请通过角色属性窗确认一下～！");
	qm.showCompleteQuestEffect();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
