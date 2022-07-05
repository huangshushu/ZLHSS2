var status = -1;

function action(mode, type, selection) {
	if (mode == 0 && status == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendSimple("我好饿~好像吃月秒捣的年糕。呜呜呜~~~\r\n#L0#我带来10个月妙的年糕#v4001101##l\r\n#L1#我要用30个月妙的年糕兑换#v1002798##l#k");
	} else if (status == 1) {
		
		if (selection == 0) {
			if (!cm.isLeader()) {
				cm.sendNext("只有队长给的我才要吃");
		                cm.dispose();
			} else {
				if (cm.haveItem(4001101,10)) {
					cm.removeAll(4001101);
					cm.showEffect(true, "quest/party/clear");
					cm.playSound(true, "Party1/Clear");
					cm.endPartyQuest(1200);
					var eim = cm.getEventInstance();
					var 通关时间 = 10*60000;
					if(eim==null){
						var 消耗时间 = 999999999;
					}else{
						var 消耗时间 = (通关时间 - eim.getTimeLeft())/1000;
					}
					if(eim!=null){
					cm.worldMessage(2, "[副本-月妙] : 恭喜 " + cm.getPlayer().getName() + " 带领队伍完成月妙副本，消耗时间 "+formatSeconds(消耗时间)+"。");
					}
					cm.warpParty(910010300);
		                        cm.dispose();
				} else {
					cm.sendNext("呜呜 我要吃拉");
		                        cm.dispose();
				}
			}
		} else if (selection == 1) {
	if (cm.haveItem(1002798,1)) {
	    cm.sendOk("你已经有了#v1002798#");
	} else if (!cm.canHold(1002798,1)) {
	    cm.sendOk("你已经有了#v1002798#");
	} else if (cm.haveItem(4001101,30)) {
	    cm.gainItem(4001101,-30); //should handle automatically for "have"
	    cm.gainItem(1002798,1);
	} else {
	    cm.sendOk("你需要30个月妙的年糕");
	}
		cm.dispose();
	}
	}
}

function formatSeconds(value) {
    var theTime = parseInt(value);
    var theTime1 = 0;
    var theTime2 = 0;
    if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
        }
    }
    var result = "" + parseInt(theTime) + " 秒 ";
    if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + " 分 " + result;
    }
    if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + " : " + result;
    }
    return result;
} 