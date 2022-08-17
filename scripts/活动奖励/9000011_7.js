/*
 ZEVMS冒险岛(079)游戏服务端
 吃鸡其他奖励
 */
function action() {
	var 存活人数 = cm.冒险求生存活人数();
	switch (存活人数) {
		//还剩下一个的
		case 1:
		case 2:
		case 3:
		case 4:
			cm.给物品(4032226,5);
			break;
		default:	
			cm.给物品(4032226,1);
			break;
	}
	cm.说明文字(" 非常遗憾的你出局了。");
    cm.对话结束();
}