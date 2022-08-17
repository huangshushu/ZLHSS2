var status = 0;
var itemSet = new Array(//力量
	1, 2);
	var rand = Math.floor(Math.random() * itemSet.length);
var myDate = new Date();
myDate.getHours();       //获取当前小时数(0-23)
myDate.getMinutes();     //获取当前分钟数(0-59)


function start() {
	if (cm.getParty() != null) { //判断组队
                cm.sendOk("组队状态下，无法入场。");
                cm.dispose();
	/*} else if (cm.getPlayerCount(980000501) != 0) {
		cm.sendOk("当前频道有人，暂时无法进入。");
		cm.dispose();
	} else if (cm.getPlayerCount(980000600) != 0) {
		cm.sendOk("当前频道有人，暂时无法进入。");
		cm.dispose();*/
	}else{
    status = -1;
    action(1, 0, 0);
}
}
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
		cm.dispose();
		return;
    }
    if (mode == 1)
		status++;
	else
		status--;
    if (status == 0) {
           /* if ((myDate.getHours() != 12 || myDate.getMinutes() > 10) && (myDate.getHours() != 21 || myDate.getMinutes() > 10)) {
            cm.sendOk("每日 #b12点#k 和 #b21点#k 的前 #r10分钟#k ，都可以前往“#b#m993000500##k”击杀“#d火焰狼#k”获得宝藏。\r\n\r\n当前的时间为 [ #r"+myDate.getHours()+" : "+myDate.getMinutes()+"#k ]，活动暂未开启。");
			cm.dispose();
			} else {*/
				cm.sendYesNo("#r#e国庆纪念币专用搬砖地图\r\n\r\n2张地图随机传送(2自动刷怪)\r\n\r\n只掉落国庆纪念币");
			//}
        } else if (status == 1) {
                var eim = cm.getEIMbyEvenName("BanZhuan"+(itemSet[rand])+"");
			if (eim == null) {
				var em = cm.getEventManager("BanZhuan"+(itemSet[rand])+"");
				em.startInstance(cm.getPlayer(), cm.getPlayer().getName());
				cm.sendOk("随机传送至#b#m"+cm.getPlayer().getMapId()+"##k，祝您狩猎愉快~");
				cm.dispose();
			} else {
				cm.sendOk("当前随机地图已有玩家，请重新随机加入。");
				cm.dispose();
				}
			}
		}
				
				
				
				
