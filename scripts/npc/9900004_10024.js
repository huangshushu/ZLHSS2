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
			text += "\t\t\t\t#e#b  合成矿石戒指需要以下材料#k	#n\r\n"
            text += "#b\t #v4021009#x10 #v4011007#x10 #l\r\n"//3
            text += "#L1##r合成装备#v1114226#全属+4#l\r\n\r\n"//3
            cm.sendSimple(text);
		}else if (selection == 1) {
			if(cm.haveItem(1114226, 1, true, true)){
				cm.sendOk("只能拥有一个#v1114226#");
				cm.dispose();
			}else if(cm.getPlayer().getGMLevel() >= 100 && !cm.判断背包装备栏().isFull()){
				cm.给属性装备(1114226, 0, 0, 4, 4, 4, 4, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0);
				cm.sendOk("恭喜你制作成功!");
				cm.dispose();
				cm.worldMessage(6, "玩家：[" + cm.getPlayer().getName() + "]成功制作矿石戒指，恭喜！！");
			}else if(cm.haveItem(4021009,10) && cm.haveItem(4011007,10) && !cm.判断背包装备栏().isFull()){
				cm.gainItem(4021009,-10);
				cm.gainItem(4011007,-10);
				cm.给属性装备(1114226, 0, 0, 4, 4, 4, 4, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0);
				cm.sendOk("恭喜你制作成功!");
				cm.dispose();
				cm.worldMessage(6, "玩家：[" + cm.getPlayer().getName() + "]成功制作矿石戒指，恭喜！！");
			}else{
			//if (cm.haveItem(1114226,1)) {
				cm.sendOk("材料不足或背包已经满了\r\n");
				cm.dispose();
			}
		}
    }
}





 