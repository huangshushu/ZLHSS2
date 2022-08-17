var status = 0;
var yaoshi = 3;

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
        cm.sendSimple("#r#e<哈比斯钥匙商人>#n\r\n#k通往鲁塔比斯巨大树根内部需要的钥匙.\r\n#b#L1#免费领取#v4033611#古树钥匙。("+yaoshi+"个)\r\n#L2##v4000653#50个兑换#v4033611#1把古树钥匙。")
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
		    if(cm.haveItem(4000653,50) && cm.getPQLog("古树钥匙")<12)
		    {
		    cm.setPQLog("古树钥匙");
		    cm.gainItem(4033611,1);
		    cm.gainItem(4000653, -50);
			cm.sendOk("恭喜你购买成功，获得#v4033611#1个古树钥匙，快去挑战BOSS吧！");
		    }else{
			cm.sendOk("请确认是否足够的材料。\r\n且每日购买钥匙次数不能超过12次!");
                    cm.dispose();
}
            break;
        }
        cm.dispose();
    }
}
