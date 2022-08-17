function start() {
status = -1;

action(1, 0, 0);
}
function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
                
   cm.sendOk("感谢使用.");
   cm.dispose();
   return;                    
                }
                if (mode == 1) {
   status++;
  }
  else {
   status--;
  }
          if (status == 0) {
	var tex2 = "";	
	var text = "";
	for(i = 0; i < 10; i++){
		text += "";
	}		
			text += "\t\t\t\t#e#b  合成透明披风需要以下材料#k	#n\r\n"
            text += "#b\t#v4310081#x5 #v4031997#x5 #l\r\n"//3
            text += "#L1##r合成装备#v1102039#全属+3#l\r\n\r\n"//3
           cm.sendSimple(text);
		 } else if(cm.getPlayer().getGMLevel() >= 100 && !cm.判断背包装备栏().isFull()){
				cm.给属性装备(1102039, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0);
				cm.sendOk("恭喜你制作成功!");
				cm.dispose();
				cm.worldMessage(6, "玩家：[" + cm.getPlayer().getName() + "]成功制作透明披风，恭喜！！");
		}else if (selection == 1) {
			 if (cm.haveItem(4310081,5) && cm.haveItem(4031997,5) && !cm.判断背包装备栏().isFull()){
			 cm.gainItem(4310081,-5);
			 cm.gainItem(4031997,-5);
			 cm.给属性装备(1102039, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0);
			 cm.sendOk("恭喜你制作成功!");
              cm.dispose();
			cm.worldMessage(6, "玩家：[" + cm.getPlayer().getName() + "]成功制作透明披风，恭喜！！");
	}else{
            cm.sendOk("材料不足或背包已经满了\r\n");
            cm.dispose();
			}
		}
    }
}





 