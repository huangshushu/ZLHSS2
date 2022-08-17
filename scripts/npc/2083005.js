/*
	Keroben - Leafre Cave of life - Entrance
*/

var morph;
var status = -1;
var queststate = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	
	
	if (status == 0) {
		if (cm.haveItem(4031454)) {
			 cm.gainItem(4031454, -1);
			 cm.gainItem(4031455, 1);
			 cm.safeDispose();
			return;	
		}
		
		if(cm.getQuestStatus(6169) == 1){
			cm.sendYesNo("骚年，听说你在寻找#v4031461#，我这里刚好有一些存货，当然我不能免费给你，需要你用#r1000万金币#k购买，要进行这笔交易么？");
			queststate = 1;
		}
		
	} else if (status == 1) {
		if(queststate == 1 && cm.getQuestStatus(6169) == 1){
			if (cm.getInventory(4).isFull(0)) {
				cm.sendOk("请保证你的背包有足够的空间！");
				cm.safeDispose();
				return;
			}else if(cm.haveItem(4031461, 1)){
				cm.sendOk("你已经有#v4031461#了啊！");
				cm.safeDispose();
				return;
			}else if(cm.判断金币() < 10000000){
				cm.sendOk("你钱不够啊，你在拿我开玩笑么？");
				cm.safeDispose();
				return;
			}else{
				cm.收金币(10000000);
				cm.gainItem(4031461,1);
				cm.sendOk("喏~东西给你了，自己去背包里看吧！")
				cm.dispose();
			}
			
			
		}
	} else {
		cm.safeDispose();
		return;
	}
	
	
	
}