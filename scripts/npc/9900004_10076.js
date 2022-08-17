function start() {
status = -1;

action(1, 0, 0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	}else {
		if (status >= 0 && mode == 0) {
		   cm.sendOk("感谢使用.");
		   cm.dispose();
		   return;                    
		}
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
        if (status == 0) {
			var tex2 = "";	
			var text = "";
			for(i = 0; i < 10; i++){
				text += "";
			}		
			text += "\t\t\t\t#e#b  制作成长戒指需要以下材料#k	#n\r\n"
            text += "#b\t #v4021009#x20 #v4011007#x20 #l\r\n"//3
			text += "#b\t 金币:#r 150000000 #b点券:#r 20000  #b抵用券:#r 20000 \r\n"//3
            text += "#L1##r制作装备#i1113219:##l\r\n\r\n"//3
            cm.sendSimple(text);
		}else if (selection == 1) {
			if(cm.haveItem(1113219, 1, true, true)){
				cm.sendOk("只能拥有一个#v1113219#");
				cm.dispose();
			}else if(cm.getPlayer().getGMLevel() >= 100 && !cm.判断背包装备栏().isFull()){
				cm.gainItem(1113219, 1, true);
				cm.sendOk("恭喜你制作成功!");
				cm.dispose();
				cm.worldMessage(6, "玩家：[" + cm.getPlayer().getName() + "]成功制作成长戒指，恭喜！！");
			}else if(cm.haveItem(4021009,20) && cm.haveItem(4011007,20) && cm.getNX(1) >= 20000 && cm.getNX(2) >= 20000 && cm.getMeso() >= 150000000 && !cm.判断背包装备栏().isFull()){
				cm.gainItem(4021009,-20);
				cm.gainItem(4011007,-20);
				cm.收点券(20000);
				cm.收抵用券(20000);
				cm.收金币(150000000);
				cm.gainItem(1113219, 1 , true);
				cm.sendOk("恭喜你制作成功!");
				cm.dispose();
				cm.worldMessage(6, "玩家：[" + cm.getPlayer().getName() + "]成功制作成长戒指，恭喜！！");
			}else{
			//if (cm.haveItem(1113219,1)) {
				cm.sendOk("材料不足或者背包已经满了\r\n");
				cm.dispose();
			}
		}
    }
}





 