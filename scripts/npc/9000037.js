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
	text += "\r\n#L1#消耗100W召唤小偷乌鸦#l\r\n"
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
            if(cm.getPlayer().getMeso() > 1000000){
				cm.gainMeso(-1000000);
	 cm.spawnMobOnMap(9001013,1,2227,3,140020300);
//cm.worldMessage(6, "玩家：[" + cm.getPlayer().getName() + "]成功制作3000HP血衣，恭喜！！");
			}else{
            cm.sendOk("金币不足，无法召唤.\r\n");
            cm.dispose();
			}
		}
    }
}




