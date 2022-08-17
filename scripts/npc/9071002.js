var status = 0;
var yaoshi = 5;

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
        cm.sendSimple("#r#e<我是怪物公园商人>#n\r\n#k进入怪物公园必须到我这里来买票哦！~.\r\n#b#L1#免费领取#v4001516#豹纹卷。("+yaoshi+"个)\r\n#L2#点卷购买#v4001516#x1豹纹卷。(500点卷)")
    } else if (status == 1) {
        switch (selection) {
        case 1:
		    if(cm.getBossLog("豹纹卷") < yaoshi)
		    {
		    cm.gainItem(4001516,1);
		    cm.setBossLog("豹纹卷");
		    }else{
			cm.sendOk("每天只能免费领取#v4001516#豹纹卷："+yaoshi+"次。");
                    cm.dispose();
			}
            break;
        case 2:
		    if(cm.getPlayer().getCSPoints(1) >= 500 && cm.getBossLog("豹纹卷1")<5)
		    {
		    cm.setBossLog("豹纹卷1");
		    cm.gainItem(4001516,1);
		    cm.gainNX( -500);
			cm.sendOk("恭喜你购买成功，获得#v4001516#1个豹纹卷，快去挑战吧！");
		    }else{
			cm.sendOk("请确认是否足够500点卷。\r\n且每日购买次数不能超过5次!");
                    cm.dispose();
}
            break;
        }
        cm.dispose();
    }
}
