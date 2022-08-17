/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (qm.getPlayer().getLevel() >= 10) {
	    qm.getPlayer().gainSP((qm.getPlayer().getLevel()-10)*3);//转职给技能点
	    }
    qm.forceStartQuest();
	    qm.gainItem(1482014, 1);
	    qm.gainItem(1142066, 1);
		//qm.resetStats(4, 4, 4, 4);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(1500);
    qm.forceCompleteQuest();
    qm.dispose();
}

function end(mode, type, selection) {
	if (qm.getPlayer().getLevel() >= 10) {
	    qm.getPlayer().gainSP((qm.getPlayer().getLevel()-10)*3);//转职给技能点
	    }
    qm.forceStartQuest();
	    qm.gainItem(1482014, 1);
	    qm.gainItem(1142066, 1);
		//qm.resetStats(4, 4, 4, 4);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(1500);
    qm.forceCompleteQuest();
    qm.dispose();
}