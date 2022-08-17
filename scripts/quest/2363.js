/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
function end(mode, type, selection) {
	    qm.forceCompleteQuest();
	if (qm.getJob() == 400) {
	    qm.changeJob(430);
	   // qm.resetStats(4, 25, 4, 4);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(2, 4);
	    qm.expandInventory(3, 4);
	    qm.expandInventory(4, 4);
	    qm.gainItem(1342000, 1);
	    qm.sendNext("你现在是一个双刀.");
	}
	qm.dispose();
}

function start(mode, type, selection) {
    qm.dispose();
}
