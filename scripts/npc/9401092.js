
var status = -1;
var text;
var sel;
var time = "parseInt(cm.getOnlineTime())";
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒

// 每个礼包所需的在线时长
var condition = new Array(240,480,720,960,1200);
var nowTime = 0;
var reward = new Array(// 礼包编号、道具id、数量

	Array(1, 2048731, 1),//	涅槃火焰150级1个，
	Array(1, 4001839, 100),//	星星100个，
	Array(1, 4001550, 2),// 海盗王的金币100W 2个
	Array(1, 4310242, 1),// 冬日城堡币

	Array(13,2438084,2),//	每日红包2个
	Array(13,4031997,10),//	蘑菇币10个
	Array(13,2614063,8),//	500万极限突破石50%
	Array(13,2430683,50)// 情人节卷轴箱子

			);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var time = parseInt(cm.getOnlineTime());
    var curlevel = -1;

    if (status == 0) {
        text = "#e#d您今天在冒险岛世界时长为： #r" + parseInt(cm.getOnlineTime()) + "#k #d分钟#n#k\r\n#e#d提示#n#k：#e#r23 ： 50#n #b至#r #e00 ： 10#n #b时无法领取在线奖励。#k\r\n#b请在 #e#r23：50#n#b 分前领取当天未领取的奖励。以免造成损失。#k\r\n\r\n\r\n";
        for (var i = 1; i <= condition.length; i++) {
            text += "#b#L" + i + "#" + aaa + " 领取在线" + condition[i - 1] + "分钟奖励";
            if (cm.getEventCount("在线礼包" + i) > 0) {
                text += "(已领取)";
                curlevel = curlevel == -1 ? i : curlevel;
            }
            text += "#l\r\n";
        }
        text += "#k";
        cm.sendSimple(text);
    } else if (status == 1) {
        // 23:50 ~ 23: 59 前一天不领取的时间  00:00 ~ 00:10 第二天不领取的时间  
        if ((hour == 23 && (minute >= 50 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 10))) {
            cm.sendOk("#d服务器当前时间： #r" + hour + " 时 " + minute + " 分 " + second + " 秒#k\r\n\r\n#e#d提示#n#k：#r23 ： 50 #b至#r 00 ： 10 #b时无法领取在线奖励。#k");
            cm.dispose();
            return;
        }
        if (cm.getEventCount("在线礼包" + selection) > 0) {
            cm.sendOk("这个礼包您已经领取过了");
            cm.dispose();
            return;
        }
        sel = selection;
        text = "\t\t\t\t#e#r- 在线 " + condition[selection - 1] + " 分钟奖励 -#k#n\r\n\r\n";
        for (var i = 0; i < reward.length; i++) {
            if (reward[i][0] == selection) {
                text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
            }
        }
		
			switch (condition[selection - 1])
			{
				case 60:
					nowTime =60;
					text +="\t\t\t\t#r点券奖励:#e3000";
					break;
				case 90:
					nowTime=90;
					text +="\t\t\t\t#r点券奖励:#e6000";
					break;
				case 120:
					nowTime=120;
					text +="\t\t\t\t#r点券奖励:#e12000";
					break;
				case 180:
					nowTime=180;
					text +="\t\t\t\t#r点券奖励:#e20000";
					break;
				case 240:
					nowTime=240;
					text +="\t\t\t\t#r点券奖励:#e30000";
					break;
				case 300:
					nowTime=300;
					text +="\t\t\t\t#r点券奖励:#e40000";
					break;
				case 420:
					nowTime=420;
					text +="\t\t\t\t#r点券奖励:#e50000";
					break;
				case 530:
					nowTime=530;
					text +="\t\t\t\t#r点券奖励:#e60000";
					break;
				case 630:
					nowTime=630;
					text +="\t\t\t\t#r点卷奖励:#e70000";
					break;
				case 690:
					nowTime=690;
					text +="\t\t\t\t#r点卷奖励:#e80000";
					break;
				case 750:
					nowTime=750;
					text +="\t\t\t\t#r点卷奖励:#e90000";
					break;
				case 810:
					nowTime=810;
					text +="\t\t\t\t#r点卷奖励:#e100000";
					break;	
				case 880:
					nowTime=880;
					text +="\t\t\t\t#r元宝奖励:#e10";
					break;
		
			}
        cm.sendYesNo(text);
    } else if (status == 2) {
        if (time < condition[sel - 1]) {
            cm.sendOk("在线时间不足，无法领取。");
            cm.dispose();
            return;
        }
        var rewardlist = new Array();
        for (var i = 0; i < reward.length; i++) {
            if (reward[i][0] == sel) {
                if (reward[i][3] == null || reward[i][3] == '')
                    reward[i][3] = 0;
                rewardlist.push(new Array(reward[i][1], reward[i][2], reward[i][3]));
            }
        }
        if (!cm.canHoldSlots(rewardlist.length)) {
            cm.sendOk("包裹空间不足，请确保包裹每个栏位有至少 " + rewardlist.length + " 格空间");
            cm.dispose();
            return;
        }
        for (var i = 0; i < rewardlist.length; i++) {
            if (rewardlist[i][2] != 0) {
                //有期限道具
                cm.gainItemPeriod(rewardlist[i][0], rewardlist[i][1], rewardlist[i][2]);
                //java.lang.System.out.println("有");
            } else {
                //无期限道具
                cm.gainItem(rewardlist[i][0], rewardlist[i][1]);
            }
        }
		switch (nowTime)
		{
				case 60:
					cm.gainNX(1,1000);
					break;
				case 90:
					cm.gainNX(1,3000);
					break;
				case 120:
					cm.gainNX(1,6000);
					break;
				case 180:
					cm.gainNX(1,8000);
					break;
				case 240:
					cm.gainNX(1,10000);
					break;
				case 300:
					cm.gainNX(1,12000);
					break;
				case 420:
					cm.gainNX(1,15000);
					break;
				case 530:
					cm.gainNX(1,20000);
					break;
				case 630:
					cm.gainNX(1,20000);
					break;
				case 690:
					cm.gainNX(1,20000);
					break;
				case 750:
					cm.gainNX(1,20000);
					break;
                case 810:
					cm.gainNX(1,20000);
					break;
				case 880:
					cm.setRMB(cm.getRMB() + 10);
					break;
		
		
		}
        cm.setEventCount("在线礼包" + sel);
        cm.playerMessage(1, "领取成功！");
		if (sel == 4) {
		cm.setEventCount("登陆",1);
		}
        cm.dispose();
    }
}
