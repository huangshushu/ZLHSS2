
var status = -1;
var text;
var diff;
var sel;
var time;
var aaa ="#fEffect/CharacterEff/1112949/4/0#";
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒

// 每个礼包所需的在线时长
var condition = new Array(30, 60, 120, 360, 540, 720, 800, 1100);
var reward = new Array(// 礼包编号、道具id、数量
					// 30
					Array(1, 2000005, 200), //超级药水
					Array(1, 5062000, 5),    // 神奇魔方
					Array(1, 4033248, 20),    // 神奇魔方
					Array(1, 2431738, 10),   //抵用券五百商品券
					// 60
					Array(2, 2450062, 1),   //双倍经验
					Array(2, 4001713, 100),          // 定居金十万
					Array(2, 2000005, 200), //超级药水
					Array(2, 5062000, 5),   // 神奇魔方
					Array(2, 5062002, 5),    // 高级神奇魔方
					Array(2, 4001713, 1),          // 定居金十万
					Array(2, 2450062, 1),   //双倍经验
					Array(2, 2435552, 1),   //抵用券一千商品券
					
					// 120
                    Array(3, 2048702, 1),    // 130级涅槃火焰
					Array(3, 5062002, 5),    // 高级神奇魔方
					Array(3, 5150040, 3),    // 高级神奇魔方
					Array(3, 5152053, 3),    // 高级神奇魔方
					Array(3, 4001839, 5),    // 高级神奇魔方
                    Array(3, 4002003, 10), //lushuilingyoupiao
                                        
					
                    Array(3, 5064000, 3), //防爆卷轴
                    Array(3, 2340000, 3), //zhufu
					Array(3, 2431739, 7), //抵用券1000

					// 360
                    Array(4, 2048707, 1),    // 140级涅槃火焰
					Array(4, 5062002, 10),    // 高级神奇魔方
					Array(4, 4001839, 10),    // 高级神奇魔方
					Array(4, 2300001, 50),    // 高级神奇魔方
                    Array(4, 4034012, 1), //防爆卷轴
                    Array(4, 5064000, 5), //防爆卷轴
                    Array(4, 2340000, 5), //祝福
    				        
					Array(4, 4002003, 10), //绿水领邮票
					Array(4,4031224, 1),
                                        
                                        // 600
                    Array(5, 2048708, 1),     //150级涅槃火焰 
					Array(5, 4032226, 8),    // 黄金猪猪
					Array(5, 5062002, 5),    // 高级神奇魔方
					Array(5, 5062009, 5),   //超级神奇魔方
					Array(5, 4001839, 15),    // 高级神奇魔方
					Array(5, 2300001, 50),    // 高级神奇魔方
					Array(5, 5062024, 10),    // 高级神奇魔方
					Array(5, 5152098, 5),    // 高级神奇魔方
					Array(5, 5150139, 5),    // 高级神奇魔方
					Array(5, 2049600, 2),    // 高级神奇魔方
					Array(5, 4033248, 50),    // 高级神奇魔方
                    Array(5, 4002003, 20), //绿水领
                    Array(5, 2340000, 5), //祝福
					
					Array(5, 2431739, 20), //抵用券1000

                                        // 720
                    Array(6, 2048725, 1),     //160级涅槃火焰
					Array(6, 5062010, 10),    // 终极神奇魔方
					Array(6, 4032226, 12),    // 黄金猪猪
					Array(6, 5062009, 10),   //超级神奇魔方
                    Array(6, 5062503, 5),   //附加记忆魔方
					Array(6, 5062024, 10),    // 高级神奇魔方
					Array(6, 2300001, 50),    // 高级神奇魔方
                    Array(6, 4033248, 50), //防爆卷轴
                    Array(6, 2049600, 2), //防爆卷轴
                                        Array(6, 5062500, 5), //大师附加神奇魔方
                                        Array(6, 5064000, 5), //防爆卷轴
                                        Array(6, 2340000, 5), //祝福
										Array(6, 4002002, 3),//蓝蜗牛邮票
    				        Array(6, 2049750, 1), // 特殊潜能附加卷轴 80%
    				        Array(6, 2028175, 2), // 宿命正义卷轴箱
					Array(6, 4002003, 20), //绿水领

                                        // 800
                    Array(7, 2048716, 1),     //强大的涅槃火焰
					Array(7, 5062010, 10),    // 终极神奇魔方
					Array(7, 4032226, 15),    // 黄金猪猪
					Array(7, 5062009, 10),   //超级神奇魔方
					Array(7, 2300001, 150),   //超级神奇魔方
                                        Array(7, 5062500, 5), //大师附加神奇魔方
										Array(7, 4002002, 1),//蓝蜗牛邮票
                                        Array(7, 5062503, 5),   //附加记忆魔方
										Array(7, 5062024, 1),   //闪炫魔方
                                        Array(7, 5064000, 5), //防爆卷轴
                                        Array(7, 2340000, 5), //祝福
    				        Array(7, 2049750, 1), // 特殊潜能附加卷轴 80%
    				        Array(7, 2028175, 2), // 宿命正义卷轴箱
					Array(7, 4002003, 50), //绿水领

                                        // 900
                    //Array(10, 2430683, 1),     //情人节 卷轴箱子
                    //Array(10, 2048717, 1),     //永远的涅槃火焰
					//Array(10, 5062010, 10),    // 终极神奇魔方
					//Array(10, 5062009, 5),   //超级神奇魔方
					//Array(10, 5062024, 15),    // 高级神奇魔方
                    //Array(10, 4033248, 50), //防爆卷轴
                    //                    Array(10, 5062500, 10), //大师附加神奇魔方
                    //                    Array(10, 5064000, 10), //防爆卷轴
					//					Array(10, 4002002, 1),//蓝蜗牛邮票
                    //                    Array(10, 2340000, 10), //祝福
					//Array(8, 2049402, 2),       //特殊潜能附加卷轴 100%
    				//        Array(10, 2028175, 4), // 宿命正义卷轴箱
    				//        Array(10, 4000463, 3),      // 国庆币
					//Array(10, 2431739, 5), 

                                        // 1200
                    //Array(9, 2430683, 2),     //情人节 卷轴箱子
                    //Array(9, 2048717, 1),     //永远的涅槃火焰
					//Array(9, 5062010, 10),    // 终极神奇魔方
					//Array(9, 5062009, 10),   //超级神奇魔方
					//Array(9, 5062024, 3),   //超级神奇魔方
					//Array(9, 2300001, 120),   //超级神奇魔方
                    //                    Array(9, 5062500, 15), //大师附加神奇魔方
                    //                    Array(9, 5064000, 15), //防爆卷轴
                    //                    Array(9, 5750000, 2), //防爆卷轴
					//					Array(9, 4002002, 2),//蓝蜗牛邮票
                    //                    Array(9, 2340000, 15), //祝福
					//Array(8, 2049402, 2),       //特殊潜能附加卷轴 100%
    				        Array(9, 2028175, 6), // 宿命正义卷轴箱
    				        Array(9, 4000463, 5),      // 国庆币
    				        Array(9, 4033248, 50),      // 国庆币
					Array(9, 2431739, 10), 
                                        // 1320
                    //Array(8, 2430683, 2),     //情人节 卷轴箱子
                    //Array(8, 2048717, 1),     //永远的涅槃火焰
					//Array(8, 5062010, 20),    // 终极神奇魔方
					//Array(8, 5062009, 20),   //超级神奇魔方
					//Array(8, 5062024, 20),   //超级神奇魔方
					//Array(8, 2300001, 100),   //超级神奇魔方
					//Array(8, 2022530, 1),   //超级神奇魔方
                    //Array(8, 2614001, 5), //防爆卷轴
                    //                    Array(8, 5062500, 15), //大师附加神奇魔方
                    //                    Array(8, 5064000, 15), //防爆卷轴
					//					Array(8, 4002002, 2),//蓝蜗牛邮票
                    //                    Array(8, 2340000, 15), //祝福
					//Array(8, 2049402, 2),       //特殊潜能附加卷轴 100%
    				//        Array(8, 2028175, 6), // 宿命正义卷轴箱
    				//        Array(8, 5750000, 8),      // 国庆币
    				//        Array(8, 3994075, 1),      // 国庆币
    				//        Array(8, 4033248, 100),      // 国庆币
    				//        Array(8, 2435552, 1),      // 国庆币
					Array(8, 2431739, 5) 					
			);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0)
	{
		cm.dispose();
		return;
	}
	if (mode == 1)
	{
		status++;
	} else {
		status--;
	}

	var time = cm.getOnlineTime();
	var curlevel = -1;

	if (status == 0) {
		text = "#e#d您今天在" + cm.getServerName() + "世界时长为： #r" + time + "#k #d分钟#n#k\r\n#e#d提示#n#k：#e#r23 ： 50#n #b至#r #e00 ： 10#n #b时无法领取在线奖励。#k\r\n#b请在 #e#r23：50#n#b 分前领取当天未领取的奖励。以免造成损失。服务中心内还有免费点券可以领哦~#k\r\n\r\n";
		for (var i = 1; i <= condition.length; i++) {
			text += "#b#L" + i + "#"+aaa+" 领取在线" + condition[i-1] + "分钟奖励";
			if (cm.getEventCount("在线礼包" + i) > 0) {
				text += "(已领取)";
				curlevel = curlevel == -1 ? i : curlevel;
			}
			text += "#l\r\n";
		}
		text += "#k";
		cm.sendSimpleN(text, 716, 2400010);
	} else if (status == 1) {
		// 23:50 ~ 23: 59 前一天不领取的时间  00:00 ~ 00:10 第二天不领取的时间  
		if ((hour == 23 && (minute >= 50 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 10))){
			cm.sendOk("#d服务器当前时间： #r" + hour +" 时 " + minute + " 分 " + second + " 秒#k\r\n\r\n#e#d提示#n#k：#r23 ： 50 #b至#r 00 ： 10 #b时无法领取在线奖励。#k");
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
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (time < condition[sel-1]) {
			cm.sendOk("在线时间不足，无法领取。");
			cm.dispose();
			return;
		}
		var rewardlist = new Array();
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == sel) {
				if (reward[i][3] == null || reward[i][3] == '')
					reward[i][3]=0;
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
		cm.setEventCount("在线礼包" + sel);
		cm.playerMessage(1, "领取成功！");
		cm.worldMessage("『在线时间奖励』" + " : " + "玩家 " + cm.getChar().getName() + " 领取了在线 " + condition[sel-1] + " 分钟奖励。");
		cm.dispose();
	}
}