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
	text += "#d合成-- #r★  #v1113096#★需要以下物品： 《110六维》\r\n#v4000313##d#z4000313# * 100个\r\n#v4001126##d#z4001126# * 888个\r\n#v1112540##d#z1112540# * 1个\r\n#v4000019##d#z4000019# * 500个\r\n#v4000000##d#z4000000# * 400个\r\n#v4000016##d#z4000016# * 300个\r\n~\r\n"
	text += "\r\n#L1##d我收集了以上物品。确定制作本服专属戒指！ ";//七天
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1112540,1)){
			cm.sendOk("请清理你的背包，至少空出2个位置！");
            cm.dispose()
        } else if(cm.haveItem(4000313,100) && cm.haveItem(4001126,888) && cm.haveItem(4000019,500)&& cm.haveItem(4000016,300)&& cm.haveItem(4000000,400)&& cm.haveItem(1112540,1)){
				cm.gainItem(4000313, -100);
				cm.gainItem(4000019, -500);
				cm.gainItem(4000016, -300);
				cm.gainItem(4000000, -400);
				cm.gainItem(4001126, -888);
				cm.gainItem(1112540, -1);			
				cm.给属性装备(1113096,0,0,110,110,110,110,200,200,110,110,0,0,0,0,0,0,0);
				cm.sendOk("换购成功！");
				cm.dispose();
				cm.worldMessage(6, "玩家：[" + cm.getPlayer().getName() + "]成功制作★本服专属戒指★，恭喜！！");
			}else{
            cm.sendOk("无法制作，你的材料不足，请检查你的材料");
            cm.dispose();
			}
		}
    }
}




