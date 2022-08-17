
var status = -1;

function start() {
 	if (cm.getBossLog("HEILONG") > 2){
	    cm.sendOk("每天最多只可挑战3次！");
		cm.dispose();
	} else if (cm.haveItem(5220006,1) == false) {
		cm.sendOk("你的背包内没有门票！");
		cm.dispose();
   } else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("请组队后，由队长和我申请入场！");
            cm.dispose();
   } else if (cm.getLevel() < 120) { // Not Party Leader
            cm.sendOk("需要120级才可入场挑战！");
            cm.dispose();
} else if (cm.getPlayerCount(240060200) > 0 || cm.getPlayerCount(240060200) > 0) {
        cm.sendNext("当前频道有人正在挑战，稍后再试！");
        cm.dispose();
    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var it = party.iterator();
		var noOkList = [];
		while (it.hasNext()) {
			var cPlayer = it.next();
			var cc = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if(cc.getBossLog("HEILONG") > 1){
				noOkList.push(cc.getName());
			}
		}
		
		if (noOkList.length > 0) {
			var say = "";
			say += "#b队伍中，下列玩家已无可挑战次数：#r\r\n";
			for(var i = 0;i<noOkList.length;i++){
				say += noOkList[i]+"\r\n";
			}
			cm.sendOk(say);
			cm.dispose();
			return;
		}
		
        action(1, 0, 0);
    }
}

function action(mode, type, selection) {
    var em = cm.getEventManager("Dunas");
    if (em == null) {
        cm.sendOk("发生未知错误,请稍后再试....");
    } else {
        var prop = em.getProperty("state");
        if (cm.getMeso() > 15000000) {
            em.startInstance(cm.getParty(), cm.getMap());
			//cm.刷新状态();
            cm.gainItem(5220006,-1);
			cm.setBossLog("HEILONG");
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暗黑龙王" + " : " + "『" + cm.getChar().getName() + "』带领他/她的远征队向暗黑龙王发起了挑战，祝他们好运！"));
									
            cm.dispose();
        } else {
            cm.sendSimple("其他队伍已经在里面了,请尝试换频道或者等其他队伍完成。");
            cm.dispose();
        }
    }
}
