
var status;
			
function start() {
	if (cm.getBossLog("fb") > 1) {
	    cm.sendOk("每天挑战2次");
		cm.dispose();
	} else if (cm.getMeso()<=20000000) {
		cm.sendOk("金币不足2千万。");
		cm.dispose();
    } else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("请让你的队长和我说话~");
            cm.dispose();
	} else if (cm.getLevel() < 200) { // Not Party Leader
            cm.sendOk("需要200~");
            cm.dispose();		
	} else if (cm.getPlayerCount(108010301) > 0 && cm.getBossLog('挑战暴力熊1') < 2|| cm.getPlayerCount(108010301) > 0) {
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
			if (prop.equals("0") || prop == null) {
				em.startInstance(cm.getParty(),cm.getMap());
				cm.gainMeso(-20000000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"FFN武器BOSS挑战" + " : " + cm.getPlayer().getName() +"FFN武器BOSS挑战,伟大的勇士,祝您好运！！！",true).getBytes());
				//em.startInstance
				cm.setBossLog("fb");
				cm.dispose();
				
			}else{
				cm.sendSimple("其他队伍已经在里面了,请尝试换频道或者等其他队伍完成。");
				cm.dispose();
			}
		}
}