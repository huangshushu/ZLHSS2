/* ===========================================================
			注释 itemQuantity()
	脚本类型: 		NPC
	所在地图:		
	脚本名字:		
=============================================================
本脚本源自网上流传，仅为技术交流之用。如侵权。请联系我们，我们将在第一时间删除。
*/

var a = 0;

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if (a == -1){
				cm.dispose();
			}else if (a == 0) {
					cm.sendSimple("#e#r我是老麦副本传送员，请确保你足够强大！！！奖励十分丰富。\r\n副本要求：组队中必须有5个人，其中必须有一个是主教\r\n\r\n#L0#我要前往#l\r\n\r\n#L1#算了不敢去#l");
	}//status
else if (a == 1) {
if (selection == 0) {




if (cm.getParty() == null) { // No Party
                    cm.sendOk("请你开启一个组队");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("请叫队长跟我说话.");
                    cm.dispose();
                    return;
                } else if (cm.getMap(401060100).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("已经有人在挑战此副本，相信很快就会结束的！！！（没人能打败老麦的！）.");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if ((party.size() < 3) && cm.getPlayer().getName() != "王尼玛" && cm.getPlayer().getName() != "xuxuxuxu") {
                        cm.sendOk("#r对不起,为了保证你的安全，请确保你队伍里有4个人.");
                        cm.dispose();
                        return;
                    }

var party = cm.getParty().getMembers().iterator();
            var next = false;
	var jianceditu = true;
            while (party.hasNext()) {
                var cPlayer = party.next();
                if (cPlayer.getJobId() != 232 || cm.getJobId() != 232) {
                    next = true;
                }
}
var party2 = cm.getParty().getMembers().iterator();
            while (party2.hasNext()) {
                var bPlayer = party2.next();
                if (bPlayer.getMapid() != cm.getMapId() || bPlayer.getChannel() != cm.getChannelNumber() ) {
                    jianceditu = false;
                }
}
if (jianceditu == false) {
cm.sendOk("#r请确保你的队友都与你在同一地图.");
                        cm.dispose();
                        return;


}
if (next == false) {
cm.sendOk("#r对不起,为了保证你的安全，请确保你队伍里至少一名牧师.");
                        cm.dispose();
                        return;
}
                    var em = cm.getEventManager("yfgdsd");//测试品克缤
                    if (em == null) {
                        cm.sendOk("此副本出错啦,请联系管管修复吧.");
                        cm.dispose();
                        return;
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null) {
                            cm.sendOk("已经有人在挑战此副本，相信很快就会结束的！！！（没人能打败老麦的！）");
                            cm.dispose();
                            return;
                        }
                    }
                    
                           //cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "『送死去了』" + " : " + "敢死队队长" + cm.getChar().getName() + "带领着一帮敢死队去老麦那送死了！！！"));
                            em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                       
                }
                cm.dispose();
                return;





} else if (selection == 1) {
cm.sendOk("#e#r等你足够强大在来吧");
cm.dispose();
}



}//
}
}