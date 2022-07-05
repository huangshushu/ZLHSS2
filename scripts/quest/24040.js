var status = -1;

function start(mode, type, selection) {
	if (status == -1) {
		qm.sendNext("诅咒对我有影响吗？这一定是一场噩梦。");
		qm.forceCompleteQuest();
		status++;
	} else {
		//qm.ShowWZEffect("Effect/Direction5.img/mersedesQuest/Scene2");
		//qm.showWZEffect("Effect/OnUserEff.img/questEffect/mercedes/q24040");
		qm.forceCompleteQuest(29952);
		qm.gainItem(1142336,1);
		qm.dispose();
	}
}
function end(mode, type, selection) {
	if (status == -1) {
		qm.sendNext("诅咒对我有影响吗？这一定是一场噩梦。");
		qm.forceCompleteQuest();
		status++;
	} else {
		//qm.ShowWZEffect("Effect/Direction5.img/mersedesQuest/Scene2");
		//qm.showWZEffect("Effect/OnUserEff.img/questEffect/mercedes/q24040");
		qm.forceCompleteQuest(29952);
		qm.gainItem(1142336,1);
		qm.dispose();
	}
}
