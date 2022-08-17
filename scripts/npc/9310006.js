/*
	公安C - 上海滩 - 通道 (701010323)
**/

function start() {
	if(cm.getBossLog("蜈蚣") >= 20){
		cm.sendOk("今日蜈蚣次数已达到20次！");
		cm.dispose();
		return;
	}
    if (cm.getParty() == null) { // No Party
	cm.sendOk("请组队再来找我");
    } else if (!cm.isLeader()) { // Not Party Leader
	cm.sendOk("请叫你的队长来找我!");
    } else {
	var party = cm.getParty().getMembers();
	var mapId = cm.getMapId();
	var next = true;
	var levelValid = 0;
	var inMap = 0;

	var it = party.iterator();
	while (it.hasNext()) {
	    var cPlayer = it.next();
	    if ((cPlayer.getLevel() >= 25 && cPlayer.getLevel() <= 200) || cPlayer.getJobId() == 900) {
		levelValid += 1;
	    } else {
		next = false;
	    }
	    if (cPlayer.getMapid() == mapId) {
		inMap += (cPlayer.getJobId() == 900 ? 1 : 1);
	    }
	}
	if (party.size() > 4 || inMap < 1) {
	    next = false;
	}
	if (next) {
	    var em = cm.getEventManager("WuGongPQ");
	    if (em == null) {
		cm.sendOk("发生未知错误,请稍后再试....");
	    } else {
		var prop = em.getProperty("state");
		if (prop.equals("0") || prop == null) {
			cm.setBossLog("蜈蚣");
		    em.startInstance(cm.getParty(),cm.getMap());
	            cm.dispose();
		    return;
		} else {
		    cm.sendOk("里面已经有人在挑战...");
		}
	    }
	} else {
	    cm.sendOk("错误，不能进入，原因：\r\n1.等级尚未达到 #r25#k 或者已经超过 #r200#k\r\n2.队伍人数超过 #r4#k 人或者有队友不在地图中。\r\n");
	}
    }
    cm.dispose();
}

function action(mode, type, selection) {
}