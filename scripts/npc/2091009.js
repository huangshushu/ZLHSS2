/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 function action(mode, type, selection) {
	map = cm.getPlayer().getMap();
	if (!cm.isQuestActive(21747)) {
	cm.sendOk("你没有接受相关任务，无法进入!");	
	cm.dispose();
	} else if (!cm.getPlayerCount(925040100) <= 0 ) {//判断地图是否有人。判断任务
	cm.sendOk("里面有人，请稍后!");
	cm.dispose();
	} else {
	cm.getMap(925040100).resetFully();//地图刷新
	cm.warp(925040100, 0);
	cm.getPlayer().startMapTimeLimitTask(600, map);
	cm.dispose();
}}