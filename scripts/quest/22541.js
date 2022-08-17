/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
//this quest is WHERES BOOK
function start(mode, type, selection) {
	qm.sendNext("去谈话伊卡洛斯在字距市.");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(500);
	qm.forceCompleteQuest();
	qm.dispose();
}