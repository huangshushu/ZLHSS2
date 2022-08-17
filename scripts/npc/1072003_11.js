
var status = -1;

function start() {
 	if (cm.getBossLog("挑战副本44") > 2){
	    cm.sendOk("#r该副本每天最多只可挑战2次！");
		cm.dispose();
	} else if (cm.getPlayer().getCSPoints(1)<30000) {
		cm.sendOk("#r你拥有的点卷不足30000，无法入场！");
		cm.dispose();
	} else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("#r请组队后，让你的队长和我对话！");
            cm.dispose();
	} else if (cm.getLevel() < 200) { // Not Party Leader
            cm.sendOk("#r需要等级达到200级以上才可入场！");
            cm.dispose();
	} else if (cm.getPlayerCount(108010501) > 0 && cm.getBossLog('挑战暴力熊45') < 3|| cm.getPlayerCount(108010501) > 0) {
        cm.sendNext("#r当前副本有人正在挑战，稍后再试！");
        cm.dispose();
    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var it = party.iterator();
		var noOkList = [];
		while (it.hasNext()) {
			var cPlayer = it.next();
			var cc = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if(cc.getBossLog("挑战副本45") > 1){
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
    var em = cm.getEventManager("huodong7");
    if (em == null) {
        cm.sendOk("发生未知错误,请稍后再试....");
    } else {
        var prop = em.getProperty("state");
        if (cm.getMeso() > 20000000) {
            em.startInstance(cm.getParty(),cm.getMap());
				cm.刷新状态();
				cm.gainNX(-30000);
				cm.setBossLog("挑战副本45");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "进阶BOSS" + " : " + "恭喜『" + cm.getChar().getName() + "』带领他的队伍挑战斯乌，伟大的勇士，祝您好运！"));
										
            cm.dispose();
        } else {
            cm.sendSimple("其他队伍已经在里面了,请尝试换频道或者等其他队伍完成。");
            cm.dispose();
        }
    }
}
