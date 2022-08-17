var status = 0;

var myDate = new Date();
myDate.getHours();       //获取当前小时数(0-23)
myDate.getMinutes();     //获取当前分钟数(0-59)


function start() {
	if (cm.getPlayer().getClient().getChannel() != 1) { //判断组队
              cm.sendOk("此副本暂不开放！尽请期待");
			cm.dispose();
			return;
	} else if (cm.haveItem(4001351,1) == false) {
		cm.sendOk("此副本暂不开放！尽请期待");
			cm.dispose();
			return;
		//cm.sendOk("只有拥有“#b#v4001351##z4001351##k”的勇士，才有资格挑战“#d火焰狼#k”。\r\n\r\n		可通过“#r新手中心 - 杂货商店#k”购买。");
		//cm.dispose();
	}else{
		cm.sendOk("此副本暂不开放！尽请期待");
			cm.dispose();
			return;
    //status = -1;
    //action(1, 0, 0);
}
}
function action(mode, type, selection) {
	cm.sendOk("此副本暂不开放！尽请期待");
			cm.dispose();
			return;
    if (status == 0 && mode == 0) {
		cm.dispose();
		return;
    }
    if (mode == 1)
		status++;
	else
		status--;
    if (status == 0) {
            if ((myDate.getHours() != 12 || myDate.getMinutes() > 20) && (myDate.getHours() != 21 || myDate.getMinutes() > 20)) {
            cm.sendOk("每日 #b15点#k 和 #b21点#k 的后 #r20分钟#k ，都可以前往“#b#m993000500##k”击杀“#d火焰狼#k”获得宝藏。\r\n\r\n当前的时间为 [ #r"+myDate.getHours()+" : "+myDate.getMinutes()+"#k ]，活动暂未开启。");
			cm.dispose();
			} else {
				cm.sendYesNo("宝藏的大门已开启，是否要前往挑战？");
			}
        } else if (status == 1) {
                var eim = cm.getEIMbyEvenName("CareFirewolf");
			if (eim == null) {
				var em = cm.getEventManager("FlameWolf");
				em.startInstance(cm.getPlayer());
				cm.gainItem(4001351,-1);
				cm.sendOk("火焰狼即将出现，请大家做好准备。");
				cm.dispose();
			} else {
				cm.gainItem(4001351,-1);
				eim.registerPlayer(cm.getPlayer());
				cm.sendOk("火焰狼即将出现，请大家做好准备。");
				cm.dispose();
			}
				}
				}
				
				
				
				
