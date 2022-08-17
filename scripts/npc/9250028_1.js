
var status;
			
function start() {
	if (cm.getBossLog("挑战副本2") > 1){
	    cm.sendOk("每天挑战2次 需要190级~");
		cm.dispose();
	} else if (cm.getMeso()<=15000000) {
		cm.sendOk("金币不足1千5百万。");
		cm.dispose();
   } else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("请让你的队长和我说话~");
            cm.dispose();
   } else if (cm.getLevel() < 190) { // Not Party Leader
            cm.sendOk("每天挑战2次 需要190级~");
            cm.dispose();
	} else if (cm.getPlayerCount(108010101) > 0 && cm.getBossLog('挑战暴力熊2') < 2|| cm.getPlayerCount(108010101) > 0) {
        cm.sendNext("当前副本有人正在挑战，稍后再试");
        cm.dispose();
	}else{
    status = -1;
    action(1, 0, 0);
}}

function action(mode, type, selection) {
		var em = cm.getEventManager("XuejinglingQP");
		if (em == null) {
			cm.sendOk("发生未知错误,请稍后再试....");
		}else{
			var prop = em.getProperty("state");
			if (cm.getMeso() > 10000000) {
				em.startInstance(cm.getParty(),cm.getMap());
				cm.gainMeso(-15000000);
				cm.givePartyBossLog("挑战副本2");
				//em.startInstance
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"FFN武器双BOSS挑战" + " : " + cm.getPlayer().getName() +"FFN武器双BOSS挑战,伟大的勇士,祝您好运！！！",true).getBytes());
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "风暴系列装备" + " : " + "恭喜『" + cm.getChar().getName() + "』挑战风暴系列装备BOSS,伟大的勇士,祝您好运！"));
				
				cm.dispose();
			}else{
				cm.sendSimple("其他队伍已经在里面了,请尝试换频道或者等其他队伍完成。");
				cm.dispose();
			}
		}
}