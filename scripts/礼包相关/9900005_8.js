/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：礼包设置文件
 */
function action() {
    cm.setBossRankCount9("重置卡",1);
	cm.说明文字("恭喜你获取 #r重置卡#k x 1 。");
	cm.getPlayer().dropMessage(5,"重置卡 + 1");
	cm.dispose();
}