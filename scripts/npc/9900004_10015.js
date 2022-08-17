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
			text += "\t\t\t\t#e#b  合成宝石戒指需要以下材料#k	#n\r\n"
            text += "#b\t#v4005000#x5 #v4005001#x5 #v4005002#x5 #v4005003#x5#l\r\n"//3
            text += "#L1##r合成装备#v1113090#全属+5#l\r\n\r\n"//3
           cm.sendSimple(text);
		  } else if (selection == 1) {
			  if(cm.getPlayer().getGMLevel() >= 100){
				cm.gainItem(4005000,5);
				cm.gainItem(4005001,5);
				cm.gainItem(4005002,5);
				cm.gainItem(4005003,5);
			  }
			  if (cm.haveItem(4005000,5) && cm.haveItem(4005001,5) && cm.haveItem(4005003,5)&& cm.haveItem(4005002,5) && !cm.判断背包装备栏().isFull()){
			 cm.gainItem(4005000,-5);
			 cm.gainItem(4005001,-5);
			 cm.gainItem(4005002,-5);
			 cm.gainItem(4005003,-5);
			 cm.给属性装备(1113090, 0, 0, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0);
			 cm.sendOk("恭喜你制作成功!");
             cm.dispose();
			cm.worldMessage(6, "玩家：[" + cm.getPlayer().getName() + "]成功制作高贵宝石戒指，恭喜！！");
	}else{
            cm.sendOk("材料不足或背包已经满了\r\n");
            cm.dispose();
			}
		}
    }
}





 