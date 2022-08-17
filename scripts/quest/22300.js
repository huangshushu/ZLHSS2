/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
//TEMPORARY QUEST NOW SKIPPING
//this quest is HEROS ECHO LEVEL 200
function start(mode, type, selection) {
	qm.teachSkill(20011005, 1, 1);
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.teachSkill(20011005, 1, 1);
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}