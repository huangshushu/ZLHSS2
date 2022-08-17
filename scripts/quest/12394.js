/* 内在能力入门，第一种内在能力 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("你好，#b#h0##k。这么快就达到30级啦！达到#b30级#k之后，可以获得特殊的力量#b内在能力#k。我现在就能为你解放那种力量");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendPrev("好了～！我已经为你解放了新的力量——内在能力。请通过角色属性窗确认一下～！");
	qm.showCompleteQuestEffect();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
