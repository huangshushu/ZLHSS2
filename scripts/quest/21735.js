/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.removeAll(4032323);
	qm.gainItem(4032323, 1);
	qm.forceStartQuest();//开始任务
	qm.sendNextS("#p1002104#说自从受到#o9300346#的攻击之后，就动员一切力量在金银岛上找到了封印石。他说留在自己身上太危险，应该把它保管在岛上。#b#m140000000##k应该比较安全，快把#b封印石交给#p1201000#吧#k", 3);
	qm.dispose();
}

function end(mode, type, selection) {
	qm.teachSkill(21100005, qm.getPlayer().getSkillLevel(21100005), 10);   // Combo Ability 
	qm.forceCompleteQuest();//完成任务
	qm.sendNextS("好好的解读#b连环吸血#k技能吧！", 3);
	qm.dispose();
}