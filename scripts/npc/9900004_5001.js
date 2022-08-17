var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow/Minigame/Common/mark#";
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";
var 闹钟图标 = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var 小粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //蓝兔子
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#";  //邪恶小兔 【大】
var 花草 ="#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 ="#fEffect/SetEff/208/effect/walk2/3#";
var 小花 ="#fMap/MapHelper/weather/birthday/2#";
var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
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

			var text = "#r \t\t\t\t" +  小黄星  + ""+ cm.getServerName() + "" +  小黄星  + "\r\n";
				text += "#e#d本服为完美仿官 经验2倍  金币1倍  爆率2倍\r\n";
				text += "#r新人礼包每个角色只能领取1次，无法重复领取\r\n";
				text += "#k点击下一步领取新手礼包!!!\r\n";
				text += "#k更多精彩,敬请期待!\r\n\r\n";
			cm.sendSimple(text);
		cm.sendNextS(text, 1);



		} else if (status == 1) {

			 if(cm.getPlayerStat("LVL") < 256 && cm.getPlayer().getOneTimeLoga("新手驾到") == 0){
			cm.getPlayer().setOneTimeLoga('新手驾到');			
			cm.gainItem(2022452, 15);//精灵雇佣
			cm.gainItem(2022522, 1);//精灵雇佣
			cm.gainItem(2022670, -1);//精灵雇佣
			cm.gainItem(1332066,1);//新手刮胡刀时间单位/小时
			cm.给属性装备(1142358, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);//新手勋章我最可爱
			cm.给属性装备(1002720, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);//圣诞帽子
			cm.给属性装备(1072278, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);//圣诞帽子
			cm.给属性装备(1051131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);//圣诞帽子
			cm.给属性装备(1050119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);//圣诞帽子
            cm.gainItem(5150040, 3);//给予- 射手村美发店高级会员卡 - 在射手村美发店可以用一次的会员卡.可以把发型变换到愿意的样子
            cm.gainItem(5152001, 3);//给予- 射手村整形手术高级会员卡 - 在射手村整形手术医院可以用一次的会员卡.可以把脸变换到想要的样子.
			cm.gainMeso(500000);
			cm.gainNX(5000);//给予点卷3000点
			cm.gainDY(5000);//给予抵用卷66666点               
			cm.sendOk("领取成功！");
			cm.全服黄色喇叭("[新人礼包] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了大众冒险岛新人大礼包！")
			//cm.worldMessage(6,"[新人礼包] : 恭喜玩家：["+cm.getName()+"]领取新人大礼包！");
		//	cm.喇叭(1,"[新人礼包] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了新人大礼包。");
			cm.全服公告( "[大众新人] : 热烈欢迎新人 " + cm.getChar().getName() + " 加入了大众冒险岛.大家快来欢迎啊!");

            cm.dispose();
				
		} else {
            cm.sendOk("您已领取过新手礼包了或者您的等级超过30级不属于新手了。");
            cm.dispose();



            }
        }

}
