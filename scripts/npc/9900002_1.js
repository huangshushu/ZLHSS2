var status = -1;
var victim;

function start() {
	var level = cm.getPlayerStat("LVL");
    if (!cm.haveItem(5220006) || level < 100) {
		cm.playerMessage(5, "你没有黑龙入场券或者是你的等级尚未达到100");
		cm.dispose();
    } else {
		if (cm.getMonsterCount(910000020) <= 0) { // Fant. Map

            cm.changeMusic("Bgm06/FinalFight");
			cm.spawnMonster(8810026, 650, -215);//spawnMonster(8810026, 650, -215);
			cm.gainItem(5220006,-1);
			cm.mapMessage("黑龙在21洞被召唤的力量召唤出来了");
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS公告" + " : " + cm.getPlayer().getName() +"  在市场21洞召唤了恐怖龙王，大家欢呼！！！",true).getBytes());
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
