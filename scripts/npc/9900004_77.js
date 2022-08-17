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
			text += "\t\t\t\t#e#b  初一冒险岛10000元赞助礼包 #k	#n\r\n"
            text += "#b\t#v2022336# 自选创世毕业武器#k  #l\r\n"//3
			text += "#b\t#v1912338# 全属+#r100  #l\r\n"//3
            text += "#b\t#v1902338# 全属+#r100  #l\r\n"//3
			text += "#b\t#v1113211# 全属+#r150  #l\r\n"//3
			text += "#b\t#v1032205# 全属+#r150  #l\r\n"//3
			text += "#b\t#v2022466# 暴君防具自选 x4#l\r\n"//3
			text += "#b\t#v2022465#[必成卷自选] x150#l\r\n"//3
			text += "#b\t#v5570000# [无限升级] x50 #l\r\n"//3
            text += "#b\t#v4000463# 国庆币 x1500#l\r\n"//3
          //  text += "#b\t\额外赠送金币#r 200W  #l\r\n\r\n"//3
            text += "#L1##r确定领取大礼包就点我吧！#l\r\n\r\n"//3
            cm.sendSimple(text);
     } else if (selection == 1) {
		 if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
			//1
			//2
			//3
			//4
			//5
		    if(cm.getzb()>=10000 && cm.getPlayer().getOneTimeLog("10000元累计赞助礼包") == 0){
				//cm.getPlayer().setOneTimeLog("20000元累计赞助礼包");
				cm.给属性装备(1032205, 0, 0, 150, 150, 150, 150, 0, 0, 150, 150, 150, 150, 150, 150, 150, 150);//V2勋章
				cm.给属性装备(1912338, 0, 0, 100, 100, 100, 100, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100);//V2勋章
				cm.给属性装备(1902338, 0, 0, 100, 100, 100, 100, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100);//V2勋章
				cm.给属性装备(1113211, 0, 0, 150, 150, 150, 150, 0, 0, 150, 150, 150, 150, 150, 150, 150, 150);//V2勋章
				cm.gainItem(2022336, 1);//祝福
			//	cm.gainItem(1132215, 1);//祝福
				//cm.gainItem(1113211, 1);//祝福
				cm.gainItem(4000463,1500);
				cm.gainItem(2022466,4);//精灵吊坠
				cm.gainItem(2022465,150);//混沌
				cm.gainItem(5570000,50);//混沌
				cm.sendOk("领取成功！");
			cm.全服黄色喇叭("[充值] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了10000元累充礼包。")
			cm.getPlayer().setOneTimeLog('20000元累计赞助礼包');
            cm.dispose();
			}else{
            cm.sendOk("#r只能领取一次，或者你的赞助余额不足");
            cm.dispose();
			}
		}
    }
}
   