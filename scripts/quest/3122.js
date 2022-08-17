/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNext("去Rex，但不要把你的手放在印章上。 得到它了？ 你可以通过冰谷二的入口进入冰峡谷.");
    	qm.forceStartQuest(3122, "0");
	qm.dispose();
}

function end(mode, type, selection) {
	qm.sendNext("谢谢.");
	qm.forceCompleteQuest();
	qm.dispose();
}