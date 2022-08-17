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
	text += "哈哈，我就是本服的觉醒商人八德乐，我有复古的觉醒方法可以帮助你把#v1002357##r★扎昆头盔★#k完成一次#b神级觉醒#k\r\n需要以下物品：（已经完成过神级觉醒的扎头无效！）\r\n#v1002357# * 1个\r\n#v4440000##d#z4440000# * 10个\r\n#v4441000##d#z4441000# * 10个\r\n#v4442000##d#z4442000# * 10个\r\n#v4310022##d#z4310022# * 200个\r\n#v4443000##d#z4443000# * 10个\r\n#v2140002##d金币 * 1亿\r\n~\r\n"
	text += "\r\n#L1##b我收集了以上物品。确定开始觉醒装备";
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(cm.haveItem(4310022,200) && cm.haveItem(4440000,10) && cm.haveItem(4441000,10) && cm.haveItem(4442000,10)  && cm.haveItem(4443000,10) && cm.haveItem(1002357,1)){
				cm.gainItem(4441000, -10);
				cm.gainItem(4440000, -10);
				cm.gainItem(4442000, -10);
				cm.gainItem(4443000, -10);
				cm.gainItem(4310022, -200);
                                cm.gainMeso(-100000000);
				cm.gainItem(1002357, -1);
                     //cm.gainItem(1002357,60,60,60,60,200,200,10,10,0,0,0,0,0,0);
             cm.给属性装备(1002357, 10, 0, 60, 60, 60, 60, 200, 200, 10, 10,0, 0, 0, 0, 20, 20, 0);
            cm.sendOk("觉醒成功，威力突破天际！");
            cm.dispose();
//cm.喇叭(3, "玩家：[" + cm.getPlayer().getName() + "]★扎昆头盔★神级觉醒成功，威力突破天际，恭喜！！");
cm.全服黄色喇叭("[神级觉醒] : 恭喜玩家 "+cm.getPlayer().getName()+" ★扎昆头盔★神级觉醒成功，威力突破天际，恭喜！！")
 
			}else{
            cm.sendOk("无法制作，或许你的材料不足，请核对材料后再试！\r\n");
            cm.dispose();
			}
		}
    }
}




