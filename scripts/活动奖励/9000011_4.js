/*
 ZEVMS冒险岛(079)游戏服务端
 OX答题比赛
 */
function action() {
	var 等级 = cm.getPlayer().getLevel();
	cm.给物品(4006000, cm.随机数(20));
	cm.给点券(10000);
	cm.给经验(等级*8000);
	cm.给个人每日("每日答题");
	cm.对话结束();
}