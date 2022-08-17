/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：礼包设置文件
 */
function action() {
    cm.setBossRankCount9("自由币",10);
	cm.说明文字("恭喜你获取 #r自由币#k x 10 。");
	cm.getPlayer().dropMessage(5,"自由币 + 10");
	cm.dispose();
}