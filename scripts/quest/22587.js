/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
//this quest is SECRET ORGANIZATION SUSPICION
function start(mode, type, selection) {
	qm.sendNext("请再次跟我说话。我希望你能打败 100 #o9001030# and #o9001029#, 但只有某些. 请再次跟我来 去某些地方.");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.dispose();
}