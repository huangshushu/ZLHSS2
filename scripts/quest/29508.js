/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.dispose();
}
function end(mode, type, selection) {
	if (qm.getPlayer().getMarriageId() > 0 && qm.getPlayer().getGuildId() > 0 && qm.getPlayer().getJunior1() > 0 && qm.canHold(1142081,1)) {
		qm.sendNext("哇. 给你!");
		qm.forceCompleteQuest();
		qm.gainItem(1142081,1);
	} else {
		qm.sendNext("我不认为你适合的要求。 参加婚礼，家庭和公会.");
	}
	qm.dispose();
}
