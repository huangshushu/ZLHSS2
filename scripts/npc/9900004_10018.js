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
			text += "\t\t\t\t#e#b  合成枫叶戒指需要以下材料#k	#n\r\n"
            text += "#b\t#v4031456#x50 #v4001126#x50#l\r\n"//3
            text += "#L1##r合成装备#v1112444#全属+3#l\r\n\r\n"//3
           cm.sendSimple(text);
		  } else if (selection == 1) {
			  if(cm.getPlayer().getGMLevel() >= 100){
				cm.gainItem(4031456,50);
				cm.gainItem(4001126,50);
			  }
			  if (cm.haveItem(4031456,50) && cm.haveItem(4001126,50) && !cm.判断背包装备栏().isFull()){
			 cm.gainItem(4031456,-50);
			 cm.gainItem(4001126,-50);
			 cm.给属性装备(1112444, 1, 0, 3, 3, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0);
			 cm.sendOk("恭喜你制作成功!");
              cm.dispose();
			cm.worldMessage(6, "玩家：[" + cm.getPlayer().getName() + "]成功制作枫叶戒指，恭喜！！");
	}else{
            cm.sendOk("材料不足或背包已经满了\r\n");
            cm.dispose();
			}
		}
    }
}





 