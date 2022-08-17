//进入豆豆屋
function start() {
    var 类型 = 999;
    var 地图 = cm.getPlayer().getMapId();
	var 角色 = cm.getPlayer().id;
    var 传送点 = cm.判断传送点x(角色, 类型);
    var 落脚点 = cm.判断传送点y(角色, 类型);
    if (地图 == 104000000) {
        传送(地图,14);
    } else if (地图 == 100000000) {
        传送(地图,11);
    } else if (地图 == 102000000) {
        传送(地图,28);
    } else if (地图 == 103000000) {
        传送(地图,22);
    } else if (地图 == 200000000) {
        传送(地图,7);
    } else if (地图 == 220000000) {
        传送(地图,10);
    } else if (地图 == 240000000) {
        传送(地图,3);
    } else if (地图 == 701000000) {
        传送(地图,6);
	} else if (地图 == 250000000) {
        传送(地图,12);
    } else {
        cm.sendOk("传送点出错，联系GM解决");

    }
    cm.dispose();
}

function 传送( a, b) {
	var 类型 = 999;
    var 地图 = 地图;
	var 角色 = cm.getPlayer().id;
	cm.warp(809030000, 3);
	cm.设置传送点x(角色,类型,a);
	cm.设置传送点y(角色,类型,b);
}