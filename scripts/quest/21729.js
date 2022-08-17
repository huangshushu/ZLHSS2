/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//开始任务
	qm.sendNextS("#p1061019#说虽然不知道暗号，但是看到过人偶师在#p1061006#上写的字，不知道是不是暗号。去#b#p1061006##k找到暗号后，告诉#b#p1002104##k。", 3);
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();//完成任务
	qm.dispose();
}