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
	text += "#d#k每日任务1\r\n#r★奖励1000W游戏币★需要收集以下物品:\r\n#v4000019##d#z4000019# * 30个\r\n#v4000000##d#z4000000# * 30个\r\n#v4000016##d#z4000016# * 30个\r\n"
	text += "\r\n#L1##d我收集了以上物品,领取奖励!";//七天
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                if(cm.getPlayer().getBossLog('task1') > 0)
{
cm.sendOk("你已经领取过1次奖励");
cm.dispose();

}else if(cm.haveItem(4000019,30) && cm.haveItem(4000000,30) && cm.haveItem(4000016,30)){
				cm.gainItem(4000019,-30);
				cm.gainItem(4000000,-30);
				cm.gainItem(4000016,-30);
                                cm.gainMeso(+10000000);
cm.getPlayer().setBossLog('task1');
            cm.sendOk("领取成功！");
            cm.dispose();
            
cm.喇叭(3, "玩家：[" + cm.getPlayer().getName() + "]完成第 1 阶段每日任务！");
			}else{
            cm.sendOk("你还没有达到任务完成条件\r\n");
            cm.dispose();
			}
		}
    }
}




