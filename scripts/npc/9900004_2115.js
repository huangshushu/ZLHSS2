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
			text += "\t#e#r  5000累计充值技能 #k	#n\r\n\r\n"
            text += "#b\t#s4111002##d 影分身#s4121007# 强化版 15段 三连环光击破       #r注：领取后请勿使用拍卖中的技能全满  否则会变为普通技能 (领取后换线生效键码7)#l\r\n"//3
            text += "#L1##r确定领取大礼包就点我吧！#l\r\n\r\n"//3
            cm.sendSimple(text);
      } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
		   if (cm.getzb()>=4999 && cm.getPlayer()){
				cm.getPlayer().changeKeybinding(9,1,4111002);
				cm.getPlayer().changeKeybinding(10,1,4121007);
				cm.teachSkill(4121007,31,31);
				cm.sendOk("影分身#s4111002#三连环光击破#s4121007#领取成功，#b请换【频道】后查看【键码8，9】");
			//	cm.gainMeso(2000000);
			//	cm.gainNX(5000);
				
		cm.sendOk("领取成功！");
			cm.全服黄色喇叭("[累计充值] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了5000元累充技能礼包。")
			cm.getPlayer().setOneTimeLog('chongzhi22');
            cm.dispose();
			}else{
            cm.sendOk("#r你的赞助余额不足");
            cm.dispose();
			}
		}
    }
}