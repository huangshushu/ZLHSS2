var status = -1;
var victim;

function start() {
	var level = cm.getPlayerStat("LVL");
    if (!cm.haveItem(4001017) || level < 50) {
		cm.playerMessage(5, "你没有火焰之眼或者是你的等级尚未达到50");
		cm.dispose();
    } else {
		if (cm.getMonsterCount(910000020) <= 0) { // Fant. Map

            cm.changeMusic("Bgm06/FinalFight");
			cm.getMap().spawnZakum(650, -215);
			cm.gainItem(4001017,-1);
			cm.mapMessage("扎昆在20洞被火焰之眼的力量召唤出来了");
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS公告" + " : " + cm.getPlayer().getName() +"  在市场20洞召唤了恐怖扎昆，大家欢呼！！！",true).getBytes());
			cm.dispose();
		/*	var q = cm.getEventManager("ZakumBattle");
			if (q == null) {
				cm.sendOk("找不到脚本,请联系GM");
				cm.dispose();
			} else {
				q.startInstance(cm.getParty(), cm.getMap());
			}
			cm.warpParty(280030000, "sp");*/
			
		} else {
			cm.playerMessage(5, "你他妈到底要召唤几只？");
			cm.dispose();
			/*if (cm.getMap(280030000).getSpeedRunStart() == 0 && (cm.getMonsterCount(280030000) <= 0 || cm.getMap(280030000).isDisconnected(cm.getPlayer().getId()))) {
				cm.warp(280030000, "sp");
				cm.dispose();
			} else{
				cm.warp(280030000, 0);
			}*/
		}
		cm.dispose();
    }
}

function action(mode, type, selection) {
    switch (status) {
	case 1:
	    if (mode == 1) {
			cm.warp(211042300, 0);
	    }
	    cm.dispose();
	    break;
    }
}
