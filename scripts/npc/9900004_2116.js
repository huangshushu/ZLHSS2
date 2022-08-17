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

            cm.sendOk("感谢你的光临！");
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
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t#e#r  10000累计充值技能 #k	#n\r\n\r\n"
            text += "#b\t#s9001006##d 超大范围 无效耗 (领取后换线生效键码8)#l\r\n"//3
            text += "#L1##r确定领取大礼包就点我吧！#l\r\n\r\n"//3
            cm.sendSimple(text);
      } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
		   if (cm.getzb()>=9999 && cm.getPlayer()){
			//	cm.getPlayer().setOneTimeLog("10000元累计技能礼包");
				cm.getPlayer().changeKeybinding(9,1,9001006);
				//cm.getPlayer().changeKeybinding(10,1,9001006);
			//	cm.teachSkill(9001006,1,1);
				cm.sendOk("无限神枪#s9001006#领取成功，#b请换【频道】后查看【键码8】");
			//	cm.gainMeso(2000000);
			//	cm.gainNX(5000);
				
	     	cm.sendOk("领取成功！");
			cm.全服黄色喇叭("[累计充值] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了10000元累充技能礼包。")
			cm.getPlayer().setOneTimeLog('10000元累计技能礼包');
            cm.dispose();
			}else{
            cm.sendOk("#r你的赞助余额不足");
            cm.dispose();
			}
		}
    }
}