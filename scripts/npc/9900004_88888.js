function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += " \t\t\t#e#d欢迎来到#r回收系统#k#n\r\n"

            text += "\t\t\t#e#d当前在线时间：" + cm.getGamePoints() + "分钟#k#n\r\n\r\n"
                 
			 				   
            text += " #b#L3##b矿石回收#l #b#L344##r随机奖励#l #b#L33##b装备回收#l #b#L34##r装备回收2#l \r\n"            //#L10#充值礼包#l #L12#人物效果#l
			//text += " #l\r\n"//#L11#属性点装#l  #L10#稀有飞镖#l
			
		//	text += " #L3#每日跑商#l\r\n\r\n"
			//text += " #L4#升级奖励#l\r\n\r\n"
			//text += " #L6#每日答题#l\r\n\r\n"

        //    text += " #L5#领取签到奖励#l \r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 1009);
			
			} else if (selection == 33) {
            cm.openNpc(9900004, 8888888);
			
		} else if (selection == 34) {
            cm.openNpc(9900004, 88888888);	
			
			} else if (selection == 344) {
            cm.openNpc(2010000, 0);	
			
		} else if (selection == 11) {
            cm.openNpc(9900004, 1011);	

		} else if (selection == 12) {
            cm.openNpc(9900004, 1012);

		} else if (selection == 13) {
            cm.openNpc(9900004, 1013);

		} else if (selection == 14) {
            cm.openNpc(9900004, 1023);		

        } else if (selection == 2) {
            if (cm.getBossLog("vipqiandao") == 0 && cm.haveItem(3700148, 1)) {//获取玩家签到状态
                cm.setBossLog('vipqiandao');//设置签到次数
                cm.getPlayer().gainqiandao(1);
                cm.sendOk("恭喜签到成功！");
				cm.gainDY(300)
                cm.喇叭(1, "[每日签到]：" + cm.getPlayer().getName() + "，今日已成功签到！抵用+300.当前总签到天数为：" + cm.getPlayer().getqiandao() + "天.");
                cm.dispose();
            } else {
                cm.sendOk("您今日已签到过了！");
                cm.dispose();
            }
            // cm.openNpc(9900004, 1112);

        } else if (selection == 3) {
            cm.openNpc(9900004, 888888);

        } else if (selection == 4) {
            cm.openNpc(9900004, 1114);

        } else if (selection == 5) {
            cm.openNpc(9900004, 1112);
			
        } else if (selection == 6) {
            cm.openNpc(9900004, 1113);
        }
    }
}
