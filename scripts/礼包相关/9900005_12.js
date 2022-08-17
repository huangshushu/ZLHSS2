var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow/Minigame/Common/mark#";
var sl1 = 0;//兑换数量

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
          if (status == 0) {

			var text = "#h0# 欢迎来到" + cm.getServerName() + "#k,先大概了解一下本服特色\r\n\r\n";
				text += "#e#d本服为完美仿官 经验2倍  金币2倍  爆率2倍\r\n";
				text += "#b开放全职业创建,完美修复技能。\r\n";
				text += "主菜单在拍卖按钮福利中心中可以领取福利\r\n";
				text += "#r新人礼包每个角色只能领取1次，无法重复领取\r\n";
				text += "\r\n\r\n#n更多精彩,敬请期待!";
			cm.sendSimple(text);
		cm.sendNextS(text, 1);



		} else if (status == 1) {
			cm.sendNext("为帮助您能顺利成长,我们准备了新手礼包给您:" + "\r\n\r\n\r\n#v2000005##z2000005# × 10\r\n#v1332066##z1332066# × 1\r\n#v1142358##z1142358# × 1\r\n#v5152001##z5152001# × 3\r\n#v5150040##z5150040# × 3\r\n#v1002720# #z1002720# × 1\r\n#v1051131# #z1051131# × 1\r\n#v1050119# #z1050119# × 1\r\n#v1072278# #z1072278# × 1\r\n\r\n以及 5000点卷 抵用卷5000点，金币50万");
		} else if (status == 2) {

		if (cm.getOneTimeLog("新手驾到") < 1 && cm.getPlayerStat("LVL") < 30) {
			cm.setOneTimeLog("新手驾到");	
			cm.gainItem(2000005, 10);//超级药水
			cm.gainItem(1002720, 1);//圣诞帽子
			cm.gainItem(1050119, 1);//圣诞男套装
			cm.gainItem(1051131, 1);//圣诞女套装			
			cm.gainItem(1072278, 1);//圣诞鞋子
			//cm.gainItem(5000066, 1);//宠物
			
			//cm.gainItem(1052081, 1);//青苹果套装
			//cm.gainItem(1002562, 1);//青苹果帽子
			//cm.gainItem(1072181, 1);//风凉拖鞋
		    // cm.给属性装备(1332066,10,10,10,10,0,0,30,30,0,0,0,0,0,0,72);//新手刮胡刀
			//cm.gainItem(1052550,10,10,10,10,0,0,10,10,0,0,0,0,0,0,72); //海豹上衣
			//cm.gainItem(1003713,10,10,10,10,0,0,10,10,0,0,0,0,0,0,72); //海豹手套
			//cm.gainItem(1142617,10,10,10,10,0,0,10,10,0,0,0,0,0,0,72); //海豹帽子
			//cm.给属性装备(1142358,1,1,1,1,10,10,1,1,0,0,0,0,0,0); //新手勋章我最可爱
			cm.给属性装备(1332066, 1, 0, 20, 20, 20, 20, 50, 50, 30, 30,0, 0, 0, 0, 0, 0, 24);//新手刮胡刀时间单位/小时
			cm.给属性装备(1142358, 1, 0, 1, 1, 1, 1, 50, 50, 1, 1,0, 0, 0, 0, 0, 0, 0);//新手勋章我最可爱
			//cm.给属性装备(1142099, 1, 0, 20, 20, 20, 20, 500, 500, 35, 35,0, 0, 0, 0, 40, 40, 24);//时间单位/小时
			//cm.给属性装备(1142101, 1, 0, 20, 20, 20, 20, 500, 500, 15, 15,0, 0, 0, 0, 40, 40, 0);
            cm.gainItem(5150040, 3);//给予- 射手村美发店高级会员卡 - 在射手村美发店可以用一次的会员卡.可以把发型变换到愿意的样子
            cm.gainItem(5152001, 3);//给予- 射手村整形手术高级会员卡 - 在射手村整形手术医院可以用一次的会员卡.可以把脸变换到想要的样子.
			//cm.gainItem(5211047,1,3); //双倍经验
			//cm.gainItem(5211060,1,2); //三倍经验
			//cm.gainItem(5360014,1,3); //双倍爆率
			cm.gainMeso(500000);
			cm.gainNX(5000);//给予点卷3000点
			cm.gainDY(5000);//给予抵用卷66666点               
			cm.sendOk("领取成功！");
			cm.全服黄色喇叭("[新人礼包] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了初一冒险岛新人大礼包。")
			//cm.worldMessage(6,"[新人礼包] : 恭喜玩家：["+cm.getName()+"]领取新人大礼包！");
		//	cm.喇叭(1,"[新人礼包] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了新人大礼包。");
			//cm.worldSpouseMessage(0x10, "[梦幻之星] : 恭喜 " + cm.getChar().getName() + " 成功加入了梦幻之星阵营.大家快来加入吧!");

            cm.dispose();
				
		} else {
            cm.sendOk("您已领取过新手礼包了或者您的等级超过30级不属于新手了。");
            cm.dispose();



            }
        }

}
