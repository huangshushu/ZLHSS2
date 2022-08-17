/* Cygnus revamp
	Noblesse tutorial
	Tiny Bird
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        qm.sendNext("(嗶哩哩哩…嗶嗶…)");
    } else if (status == 1) {
        qm.sendNextPrevS("嗯？這鳥是從哪裡忽然跑出來的？");
    } else if (status == 2) {
        qm.sendNext("(嗶哩哩。嗶嗶， 嗶哩哩哩…)");
    } else if (status == 3) {
        qm.sendNextPrevS("難道我有聽得懂小鳥說話的能力嗎？！好像在叫我跟著他走…等待真是無聊，在奇加回來前稍微跟去看看吧？");
    } else if (status == 4) {
        qm.forceStartQuest();
	qm.forceCompleteQuest();
        qm.removeNpc(130030105, 1102113);
        qm.warp(130030104);
        qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}