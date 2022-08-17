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
	text += "#d合成-- #r★幸运勋章★需要以下物品：\r\n#v1142177##d#z1142177# * 1个\r\n#v4011008##d#z4011008# * 3个\r\n#v4251202##d#z4251202# * 3个\r\n#v4001266##d#z4001266# * 10个\r\n#v4000463##d#z4000463# * 10个\r\n#v4001083##d#z4001083# * 1个\r\n#v4001084##d#z4001084# * 1个\r\n#v4000175##d#z4000175# * 1个\r\n#v4000235##d#z4000235# * 1个\r\n#v4000243##d#z4000243# * 1个\r\n#v4001085##d#z4001085# * 1个\r\n#v4001094##d#z4001094# * 1个\r\n\r\n#v4031891#5000万~\r\n"
	text += "\r\n#L1##d我收集了以上物品。确定制作勋章";//七天
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.haveItem(1142177,1)){
		cm.sendOk("请清理你的背包，至少空出2个位置！");
            cm.dispose();
        } else if(cm.haveItem(4251202,3) && cm.haveItem(1142177,1) && cm.haveItem(4011008,3)&& cm.haveItem(4000463,10)  && cm.haveItem(4001266,10)&& cm.haveItem(4001083,1) && cm.haveItem(4001084,1) && cm.haveItem(4001085,1) && cm.haveItem(4000243,1) && cm.haveItem(4000235,1) && cm.haveItem(4000175,1) && cm.haveItem(4001094,1) && cm.getMeso() > 50000000){
				
				cm.gainItem(1142177, -1);
				cm.gainItem(4011008, -3);
				cm.gainItem(4251202, -3);
				cm.gainItem(4000235, -10);
				cm.gainItem(4001266, -10);
				cm.gainItem(4000463, -10);
				cm.gainMeso(-50000000);
				cm.gainItem(4001083, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4000175, -1);
				cm.gainItem(4000243, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(4001094, -1);
				
cm.gainItem(1142573,100,100,100,100,500,500,70,70,30,30,30,30,30,30);
            cm.sendOk("换购成功！");
            cm.dispose();
cm.喇叭(3,"成功制作冒险岛奖杯勋章，恭喜！！");
			}else{
            cm.sendOk("无法制作，材料不足\r\n");
            cm.dispose();
			}
		}
    }
}




