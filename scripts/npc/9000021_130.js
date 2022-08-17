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
	text += "#d合成-- #r★形象大使勋章★需要以下物品：\r\n#v1142109##d#z1142109# * 1个\r\n#v4001266##d#z4001266# * 8个\r\n#v4000463##d#z4000463# * 5个\r\n#v4021003##d#z4021003# * 30个\r\n#v4021004##d#z4021004# * 30个\r\n#v4021005##d#z4021005# * 30个\r\n#v4021007##d#z4021007# * 30个\r\n#v4031891#1000W\r\n~\r\n"
	text += "\r\n#L1##d我收集了以上物品。确定形象大使勋章";//七天
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.haveItem(1142109,1)){
		cm.sendOk("请清理你的背包，至少空出2个位置！");
            cm.dispose();
        } else if(cm.haveItem(4021003,30) && cm.haveItem(1142109,1) && cm.haveItem(4021007,30)  && cm.haveItem(4001266,8) && cm.haveItem(4021004,30) && cm.haveItem(4021005,30) && cm.haveItem(4000463,5) && cm.getMeso() > 10000000){
				cm.gainItem(1142109, -1);
				cm.gainItem(4001266, -8);
				cm.gainItem(4000463, -5);
				cm.gainItem(4021003, -30);
				cm.gainItem(4021004, -30);
				cm.gainItem(4021005, -30);
				cm.gainItem(4021007, -30);
				cm.gainMeso(-10000000);
cm.gainItem(1142178,40,40,40,40,200,200,30,30,20,20,20,20,20,20);
            cm.sendOk("换购成功！");
            cm.dispose();
cm.喇叭(3,"成功制作形象大使勋章，恭喜！！");
			}else{
            cm.sendOk("无法制作，或许你#v4021000#不足10个\r\n#v1142109#不足1个\r\n#v4021002#不足10个\r\n#v4021004#不足10个\r\n");
            cm.dispose();
			}
		}
    }
}




