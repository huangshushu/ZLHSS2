/*
 * 功能：家族对抗  进入大门脚本
 * Telegram : Meguel_chms
 */

function enter(pi) {
	var em = pi.getEventManager("GuildQuest");
	var eim = pi.getEventInstance();
	if (em == null || eim == null) {
		pi.warp(101030104);
	} else {
		if ("true".equals(eim.getProperty("canEnter"))) {
			pi.warp(990000100, 0);
			pi.NpcMessage("#e<家族对抗战公告>#n\n\n请调查灭亡的古代王国圣瑞尼亚的遗迹，寻找有关#e#r鲁比安#k#n的线索。\n\n1.在通往圣瑞尼亚的门打开之前，如果没有#r6名#k以上的家族成员进入遗迹发掘现场的话，家族对抗战就会被取消。\n2. 在家族对抗战进行过程中，参加对抗战的家族成员减少至#r6名#k以下时，家族对抗战自动终止。",9040011);
		} else {
			pi.dropMessage(5, "现在还不能进入。");
		}
	}
}
