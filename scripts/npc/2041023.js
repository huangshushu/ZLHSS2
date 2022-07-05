function start() {
    if (cm.getQuestStatus(6225) == 1 || cm.getQuestStatus(6315) == 1) {
	var ret = checkJob();
	if (ret == -1) {
            cm.sendOk("你貌似没有组队。");
	} else if (ret == 0) {
            cm.sendOk("你的队伍人数必须两个人。");
	} else if (ret == 1) {
            cm.sendOk("你的队伍里有一个职业不符合，无法进入另一个世界。");
	} else if (ret == 2) {
            cm.sendOk("你的队伍里有一个等级不符合，无法进入另一个世界。");
	} else {
	    var dd = cm.getEventManager("ElementThanatos");
	    if (dd != null) {
		dd.startInstance(cm.getParty(), cm.getMap());
	    } else {
                cm.sendOk("未知的错误。");
	    }
	}
    } else {
        cm.sendOk("你看起来似乎没有足够准备。");
    }
    cm.dispose();
}

function checkJob() {
    var party = cm.getParty();

    if (party == null) {
	return -1;
    }
    if (party.getMembers().size() != 2) {
	return 0;
    }
    var it = party.getMembers().iterator();

    while (it.hasNext()) {
	var cPlayer = it.next();

	if (cPlayer.getJobId() == 212 || cPlayer.getJobId() == 222 || cPlayer.getJobId() == 900) {
	    if (cPlayer.getLevel() < 120) {
		return 2;
	    }
	} else {
	    return 1;
	}
    }
    return 3;
}
