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
	text += "#d合成-- #r★热爱冒险岛勋章★需要以下物品：\r\n#v4000017##d#z4000017# * 50个\r\n#v4002003##d#z4002003# * 5个\r\n#v1142358##d#z1142358# * 1个\r\n#v4001266##d#z4001266# * 2个\r\n#v4000019##d#z4000019# * 200个\r\n#v4000000##d#z4000000# * 200个\r\n#v4000016##d#z4000016# * 200个\r\n#v4000040##d#z4000040# * 2个\r\n#v4000176##d#z4000176# * 2个\r\n~\r\n"
	text += "\r\n#L1##d我收集了以上物品。确定热爱冒险岛勋章";//七天
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1142101,1)){
			cm.sendOk("请清理你的背包，至少空出2个位置！");
            cm.dispose();
        } else if(cm.haveItem(4000017,50) && cm.haveItem(1142358,1)&& cm.haveItem(4002003,1) && cm.haveItem(4000019,200)&& cm.haveItem(4001266,2) && cm.haveItem(4000000,200) && cm.haveItem(4000016,200) && cm.haveItem(4000040,2) && cm.haveItem(4000176,2)){
				cm.gainItem(4000017, -50);
				cm.gainItem(4002003, -5);
				cm.gainItem(1142358, -1);
				cm.gainItem(4000040, -2);
	     		cm.gainItem(4001266, -2);
				cm.gainItem(4000000, -200);
				cm.gainItem(4000019, -200);
				cm.gainItem(4000016, -200);
				cm.gainItem(4000176, -2);
cm.gainItem(1142101,10,10,10,10,50,50,5,5,10,10,10,10,10,10);
            cm.sendOk("换购成功！");
            cm.dispose();
cm.喇叭(3,"成功制作热爱冒险岛勋章，恭喜！！");
			}else{
            cm.sendOk("无法制作，或许你#v4000017#不足2个\r\n#v1142358#不足1个\r\n#v4000040#不足2个\r\n#v4000176#不足2个\r\n");
            cm.dispose();
			}
		}
    }
}




