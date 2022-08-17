/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (status == -1) {
		qm.sendNext("诅咒对我这样做了吗？ 这必定是一场噩梦.");
		qm.forceCompleteQuest();
		status++;
	} else {
		qm.ShowWZEffect("Effect/Direction5.img/mersedesQuest/Scene2");
		qm.showWZEffect("Effect/OnUserEff.img/questEffect/mercedes/q24040");
		qm.forceCompleteQuest(29952);
		qm.gainItem(1142336,1);
		qm.dispose();
	}
}
function end(mode, type, selection) {
	if (status == -1) {
		qm.sendNext("诅咒对我这样做了吗？ 这必定是一场噩梦.");
		qm.forceCompleteQuest();
		status++;
	} else {
		qm.ShowWZEffect("Effect/Direction5.img/mersedesQuest/Scene2");
		qm.showWZEffect("Effect/OnUserEff.img/questEffect/mercedes/q24040");
		qm.forceCompleteQuest(29952);
		qm.gainItem(1142336,1);
		qm.dispose();
	}
}
