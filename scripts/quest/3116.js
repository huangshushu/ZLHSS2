/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNext("请来看我，我在雪域-长老公馆.");
    	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.dispose();
}