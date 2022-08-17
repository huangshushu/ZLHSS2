/*
	Machine Apparatus - Origin of Clocktower(220080001)
*/

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
		cm.sendOk("#L2##b快捷商店\r\n#L1##b我要离开\r\n")
		//cm.sendYesNo("嘟...嘟...你想要离开吗？？");
    } else if (status == 1) {
		if(selection==2){
			 cm.对话结束();
                cm.打开商店(94);
				return
		}
		if(selection==0){
			if(cm.haveItem(4031179,1)==false){
				cm.sendOk("你没有D片不要骗我")
				cm.dispose();
				return
			}
			if(cm.判断地图指定怪物数量(8500000)>0 || cm.判断地图指定怪物数量(8500001)>0 || cm.判断地图指定怪物数量(8500002)>0){
				cm.sendOk("已经召唤了呢")
				cm.dispose();
				return
			}
			cm.gainItem(4031179,-1)
			cm.当前地图召唤怪物(8500000,1,-410,-386);
			cm.dispose();
			return
		}
		if(selection==1){
			cm.warp(220080000);
			if (cm.getPlayerCount(220080001) == 0) {
				cm.getMap(220080000).resetReactors();
			}
		cm.dispose();
		}
    } else {
	cm.dispose();
	}
}
