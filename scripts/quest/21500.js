/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNext("哈哈..来 #b#m140000000##k. 我想给你一些东西...");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.sendNext("我终于承认你是我的主人。 请，采取这种技能。 这是英雄的回声.");
	qm.teachSkill(20001005,1,0);
	qm.forceCompleteQuest();
	qm.dispose();
}