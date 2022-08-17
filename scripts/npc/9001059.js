var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
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
		if (cm.getPlayer().getMapId() == 993000500) {
			cm.sendNext("我们成功了！成功击败了火焰狼！啊哈哈哈！这么多财宝都是我们的了！");
		} else if (cm.getPlayer().getMapId() == 993000600){
			cm.sendOk("感谢你为击败火焰狼作出的贡献，送你回到射手村吧。");
		} else {
			cm.sendYesNo("#e<限时副本>#n\r\n\r\n你想和我还有其他冒险家们一起去挑战#r火焰狼#k吗？击败可获得大量奖励！");
		}
    } else if (status == 1) {
		if (cm.getPlayer().getMapId() == 993000500) {
			//if (cm.canHold(2049116,15) && cm.canHold(2049618,15) && cm.canHold(4001551,2) && cm.canHold(4310282,2) && cm.canHold(2048747,5) ){
			if (cm.getEventCount("火焰狼") < 2){
				cm.gainItem(2049116,10);//完美化混沌卷轴
				cm.gainItem(2049618,10);//完美还原卷轴
				cm.gainItem(5062024,10);//闪炫魔方
				cm.gainItem(4001551,2);//海盗王的金币1000万金币
				cm.gainItem(4310282,10);//冒险岛纪念币
				cm.gainItem(2048747,1);//永远的涅槃火焰
				cm.setEventCount("火焰狼");
cm.worldSpouseMessage(0x17,"[世界BOSS-火焰狼] 恭喜玩家 "+ cm.getChar().getName() +" 在火焰狼活动中获得大量奖励。");
				cm.warp(993000600);
		    }else{
cm.worldSpouseMessage(0x17,"【检测BUG公告】 恭喜玩家 "+ cm.getChar().getName() +" 利用BUG牟利，看到此提示的玩家即可举报这个傻逼！");
cm.worldSpouseMessage(0x17,"【检测BUG公告】 恭喜玩家 "+ cm.getChar().getName() +" 利用BUG牟利，看到此提示的玩家即可举报这个傻逼！");
cm.worldSpouseMessage(0x17,"【检测BUG公告】 恭喜玩家 "+ cm.getChar().getName() +" 利用BUG牟利，看到此提示的玩家即可举报这个傻逼！");
cm.worldSpouseMessage(0x17,"【检测BUG公告】 恭喜玩家 "+ cm.getChar().getName() +" 利用BUG牟利，看到此提示的玩家即可举报这个傻逼！");
cm.worldSpouseMessage(0x17,"【检测BUG公告】 恭喜玩家 "+ cm.getChar().getName() +" 利用BUG牟利，看到此提示的玩家即可举报这个傻逼！");
				cm.sendOk("你号没了，弟弟玩意。")

			}
		} else if (cm.getPlayer().getMapId() == 993000600) {
			cm.warp(100000000);
		} else {
			var eim = cm.getEIMbyEvenName("FlameWolf");
			if (eim == null) {
				var em = cm.getEventManager("FlameWolf");
				em.startInstance(cm.getPlayer());
				cm.sendOk("先静静等待一会，火焰狼马上就要回来了！");
			} else {
				eim.registerPlayer(cm.getPlayer());
				cm.sendOk("先静静等待一会，火焰狼马上就要回来了！");
			}
		}
	cm.dispose();
	}
}