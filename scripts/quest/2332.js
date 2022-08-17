/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.getMap().killAllMonsters(true);
	qm.spawnMonster(3300008,1);
	qm.sendNext("请，消除了蘑菇大臣!!!");
	qm.forceStartQuest(2333);
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
		qm.gainItem(4032386,1);
		qm.forceCompleteQuest();
		qm.dispose();
}
	