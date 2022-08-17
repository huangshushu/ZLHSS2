var status = 0;
var yaoshi = 2;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple("#r#e<心树守护者>#n\r\n#k通往无尽绯红贝勒德需要的钥匙.\r\n#b#L1#免费领取#v4033982#心树钥匙。("+yaoshi+"个)\r\n#L2#点卷购买#v4033982#x4心树钥匙。(3000点卷)")
    } else if (status == 1) {
        switch (selection) {
        case 1:
		    if(cm.getBossLog("心树钥匙") < yaoshi)
		    {
		    cm.gainItem(4033982,1);
		    cm.setBossLog("心树钥匙");
		    }else{
			cm.sendOk("每天只能免费领取#v4033982#心树钥匙："+yaoshi+"次。");
                    cm.dispose();
			}
            break;
        case 2:
		    if(cm.getPlayer().getCSPoints(1) >= 3000 && cm.getBossLog("心树钥匙1")<3)
		    {
		    cm.setBossLog("心树钥匙1");
		    cm.gainItem(4033982,4);
		    cm.gainNX( -3000);
			cm.sendOk("恭喜你购买成功，获得#v4033982#4个心树钥匙，快去挑战BOSS吧！");
		    }else{
			cm.sendOk("请确认是否足够3000点卷。\r\n且每日购买钥匙次数不能超过3次!");
                    cm.dispose();
}
            break;
        }
        cm.dispose();
    }
}
