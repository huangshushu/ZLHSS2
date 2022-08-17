/*
 蜗牛冒险岛(079)游戏服务端
 */
function start() {
	var 类型 = 12;
    var 地图 = cm.getMapId();
	var 角色 = cm.getPlayer().id;
    var 传送点 = cm.判断传送点x(角色, 类型);
    var 落脚点 = cm.判断传送点y(角色, 类型);
	cm.设置传送点y(角色,类型,0);
}













