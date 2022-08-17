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
	text += "#d合成-- #r★3000HP血衣★需要以下物品：\r\n#v4000017##d#z4000017# * 100个\r\n#v4000005##d#z4000005# * 300个\r\n#v4000021##d#z4000021# * 400个\r\n#v4000010##d#z4000010# * 400个\r\n~\r\n"
	text += "\r\n#L1##d我收集了以上物品。确定制作3000HP血衣";//七天
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1012412,1)){
			cm.sendOk("请清理你的背包，至少空出2个位置！");
            cm.dispose();
        } else if(cm.haveItem(4000017,100) && cm.haveItem(4000005,300) && cm.haveItem(4000021,400) && cm.haveItem(4000010,400)){
				cm.gainItem(4000017, -100);
				cm.gainItem(4000005, -300);
				cm.gainItem(4000021, -400);
				cm.gainItem(4000010, -400);
//cm.gainItem(1012412,0,0,0,0,1000,1000,0,0,0,0,0,0,0,0);
cm.给属性装备(1012412, 0, 0, 0, 0, 0, 0, 3000, 3000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.sendOk("换购成功！");
            cm.dispose();
cm.worldMessage(6, "玩家：[" + cm.getPlayer().getName() + "]成功制作3000HP血衣，恭喜！！");
			}else{
            cm.sendOk("无法制作，或许你#v4000017#不足100个\r\n#v4000005#不足300个\r\n#v4000021#不足400个\r\n#v4000010#不足400个\r\n");
            cm.dispose();
			}
		}
    }
}




