//D豆豆屋出口

/*function start() {
	
    var 地图 = cm.getMapId();
    var 传送点 = cm.getBossRank("记录传送点2", 2);
    var 落脚点 = cm.getBossRank("记录落脚点2", 2);
	cm.warp(传送点, 落脚点);
    cm.setBossRankCount("记录传送点2", -传送点);
    cm.setBossRankCount("记录落脚点2", -落脚点);
}*/

function start() {
	var 类型 = 999;
    var 地图 = cm.getPlayer().getMapId();
	var 角色 = cm.getPlayer().id;
    var 传送点 = cm.判断传送点x(角色, 类型);
    var 落脚点 = cm.判断传送点y(角色, 类型);
	if(传送点 > 0){
		cm.warp(传送点, 落脚点);
	}else{
		cm.warp(100000000, 0);
	}
	cm.设置传送点x(角色,类型,0);
	cm.设置传送点y(角色,类型,0);
}