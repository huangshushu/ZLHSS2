/*
 蜗牛冒险岛(079)游戏服务端
 脚本：嘉年华
 */
function start() {
    var 类型 = 4;
    var 地图 = cm.getMapId();
	var 角色 = cm.getPlayer().id;
    var 传送点 = cm.判断传送点x(角色, 类型);
    var 落脚点 = cm.判断传送点y(角色, 类型);
    if (地图 == 980000000) {
        if(传送点<=0){
			cm.warp(100000000,0);
			cm.sendOk("传送点出错，默认为你回到射手村，已经为你重新配置该传送点。");
		}else{
			cm.warp(传送点, 落脚点);
		}
		cm.设置传送点x(角色,类型,0);
		cm.设置传送点y(角色,类型,0);
    } else {
        //废弃都市
        if (地图 == 103000000) {
            传送(地图,12);
            //玩具城
        } else if (地图 == 220000000) {
            传送(地图,17);
            //天空之城
        } else if (地图 == 200000000) {
            传送(地图,0);
        } else {
            cm.warp(103000000, 12);
            cm.sendOk("传送点出错，默认为你回到射手村，已经为你重新配置该传送点。");
        }
    }
    cm.dispose();
}

function 传送( a, b) {
	var 类型 = 4;
    var 地图 = cm.getMapId();
	var 角色 = cm.getPlayer().id;
	cm.warp(980000000, 4);
	cm.设置传送点x(角色,类型,a);
	cm.设置传送点y(角色,类型,b);
}