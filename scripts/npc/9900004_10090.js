importClass(Packages.tools.MaplePacketCreator);


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
			text += "\t\t\t\t#e#b  合成勋章需要以下材料#k	#n\r\n"
            text += "#b\t\t #v1142803#x1\t\t#v1142742#x1\t\t#b#v1142789#x1 #l\r\n"//3
			text += "#b\t 金币:#r 300000000 #b点券:#r 60000  #b抵用券:#r 30000 \r\n"//3
            text += "#L1##r制作装备#v1142788##l\r\n\r\n"//3
            cm.sendSimple(text);
		}else if (selection == 1) {
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(cm.haveItem(1142788, 1, true, true)){
				cm.sendOk("只能拥有一个#v1142788#");
				cm.dispose();
			}else if(dmID!=1142789){
				cm.sendOk("把#v1142789#放在第一格!");		
				cm.dispose();
			}else if(cm.getPlayer().getGMLevel() >= 100 && !cm.判断背包装备栏().isFull()){
				// var item = cm.给属性装备(1142788, 0, 0, 40, 40, 40, 40, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0);
				cm.给属性装备(1142788, 0, 0, 40, 40, 40, 40, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0);
				cm.sendOk("管理员，恭喜你制作成功!");
				item = cm.getInventory(1).getItem(1).copy();
				//cm.全服道具公告("【日出东方勋章】", "玩家 [" + cm.getPlayer().getName() + "] 成功合成了超强属性勋章，恭喜！！", item);
				cm.dispose();
			}else if(cm.haveItem(1142803,1) && cm.haveItem(1142742,1) && cm.getNX(1) >= 60000 && cm.getNX(2) >= 30000 && cm.getMeso() >= 300000000 && !cm.判断背包装备栏().isFull()){
				cm.gainItem(1142803,-1);
				cm.gainItem(1142742,-1);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				cm.getC().sendPacket(MaplePacketCreator.getShowItemGain(1142789, -1, true));
				cm.收点券(60000);
				cm.收抵用券(30000);
				cm.收金币(300000000);
				// var item = cm.给属性装备(1142788, 0, 0, 40, 40, 40, 40, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0);
				cm.给属性装备(1142788, 0, 0, 40, 40, 40, 40, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0);
				cm.sendOk("恭喜你制作成功!");
				item = cm.getInventory(1).getItem(1).copy();
				//cm.全服道具公告("【日出东方勋章】", "玩家 [" + cm.getPlayer().getName() + "] 成功合成了超强属性勋章，恭喜！！", item);
				cm.dispose();
			}else{
			//if (cm.haveItem(1113219,1)) {
				cm.sendOk("材料不足或者背包已经满了\r\n");
				cm.dispose();
			}
		}
    }
}





 