var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.sendOk("感谢支持#r大王冒险岛#k我们有独立开发的技术以及最前线的保障。谢谢各位支持！");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    }
    else if (status == 0) {
        var selStr = "红尘看破，你是否需要改变一下自己？\r\n\r\n";
        selStr += "#r注意事项：\r\n更换完毕性别后请下线重新上游戏！#k\r\n";
		if(cm.getPlayer().getGender() == 0){
	    selStr += "#b#L0#我要变性！(变女神)\r\n";
		}else{
        selStr += "#L1#我要变性！(变男神)\r\n";
		}
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
			if(cm.haveItem(5150038) == true){
				cm.gainItem(5150038, -1);
                cm.getPlayer().setGender(1);
				cm.getPlayer().equipChanged();
				cm.getPlayer().fakeRelog();
				cm.即时存档();
                cm.sendOk("变性成功！.")
                cm.dispose();
			}else{
                cm.sendOk("嗯，看来你没有皇家美容卡.")
                cm.dispose();
				}
			break;
            case 1:
			if(cm.haveItem(5150038) == true){
				cm.gainItem(5150038, -1);
                cm.getPlayer().setGender(0);
				cm.getPlayer().equipChanged();
				cm.getPlayer().fakeRelog();
				cm.即时存档();
                cm.sendOk("变性成功！.")
                cm.dispose();
		    }else{
                cm.sendOk("嗯，看来你没有皇家美容卡.")
                cm.dispose();
				}
			break;
        }
    }
}
