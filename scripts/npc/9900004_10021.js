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
			text += "\t\t\t\t#e#b  合成邮票戒指需要以下材料#k	#n\r\n"
            text += "#b\t#v4002000#x10 #v4002001#x10 #v4002002#x10 #v4002003#x10 #v4031559#x10#l\r\n"//3
            text += "#L1##r合成装备#v1114303#全属+3#l\r\n\r\n"//3
           cm.sendSimple(text);
		  } else if (selection == 1) {
			  if(cm.getPlayer().getGMLevel() >= 100){
				cm.gainItem(4002000,10);
			   cm.gainItem(4002001,10);
			   cm.gainItem(4002002,10);
			    cm.gainItem(4002003,10);
			     cm.gainItem(4031559,10);
			  }
			  if (cm.haveItem(4002000,10) && cm.haveItem(4002001,10)&& cm.haveItem(4002002,10)&& cm.haveItem(4002003,10)&& cm.haveItem(4031559,10) && !cm.判断背包装备栏().isFull()){
			 cm.gainItem(4002000,-10);
			  cm.gainItem(4002001,-10);
			   cm.gainItem(4002002,-10);
			    cm.gainItem(4002003,-10);
			     cm.gainItem(4031559,-10);
			 cm.给属性装备(1114303, 1, 0, 3, 3, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0);
			 cm.sendOk("恭喜你制作成功!");
              cm.dispose();
			cm.worldMessage(6, "玩家：[" + cm.getPlayer().getName() + "]成功制作邮票戒指，恭喜！！");
	}else{
            cm.sendOk("材料不足或背包已经满了\r\n");
            cm.dispose();
			}
		}
    }
}





 