var status = 0;
var yaoshi = 10;

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
        cm.sendSimple("#r#e<哈比斯钥匙商人>#n\r\n#k通往鲁塔比斯巨大树根内部需要的钥匙.\r\n#b#L1#免费领取#v4033611#古树钥匙。("+yaoshi+"次)");//\r\n#L2#点卷购买#v4033611#古树钥匙。(15000点卷)
    } else if (status == 1) {
        switch (selection) {
        case 1:
		    if(cm.getPQLog("古树钥匙") < yaoshi)
		    {
		    cm.gainItem(4033611,1);
		    cm.setPQLog("古树钥匙");
		    }else{
			cm.sendOk("每天只能免费领取#v4033611#古树钥匙："+yaoshi+"次。");
                    cm.dispose();
			}
            break;
        case 2:
		    if(cm.getPlayer().getCSPoints(1) >= 15000 && cm.getPQLog("古树钥匙")<7)
		    {
		    cm.setPQLog("古树钥匙");
		    cm.gainItem(4033611,1);
		    cm.gainNX( -15000);
		    }else{
			cm.sendOk("请确认是否足够15000点卷。\r\n且每日购买钥匙次数不能超过5次!");
                    cm.dispose();
}
            break;
        }
        cm.dispose();
    }
}
