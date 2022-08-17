/*
 脚本：拍卖主菜单
 */
//时间引用
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
//素材引用
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

var 抽奖系列 = "时装帽子";
status = -1;


function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("不想使用吗？…百宝箱里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！\r\n\r\n");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		 
            var   text = "#r使用2500点券就可以随机获得百宝箱里的礼物，快行动吧！\r\n#e#d" + 小烟花 + "任何建议，请联系管理，谢谢！" + 小烟花 + "#n#k\r\n\r\n";
        text += "#L1#" + 小烟花 +  "使用2500点券抽#r1#k次#l#L10"+"#" + 小烟花 + "使用25000点券抽#r10#k次\r\n\r\n";
        text += "#L101##r" + 星星 + "想看百宝箱里有什么东西吗" + 星星 + "#l\r\n\r\n";
        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 102) {
            cm.dispose();
            cm.openNpc(9310022, 102);
        }else if(selection == 106){
			cm.dispose();
			cm.openNpc(9900001, "百宝券抽奖");
			//cm.openNpc(9310022,103 );
			return;
		}else if(selection == 104){
			cm.dispose();
			cm.openNpc(9310022, "装备积分兑换");
			return;
		}else if(selection == 105){
			cm.dispose();
			cm.openNpc(9310022, 104);
			return;
		}
		else if (selection == 101) {
            var textItem = ""
            // for (var i = 0; i < itemList.length; i++) {
                // textItem += "#i" + itemList[i][0] + ":#"
            // }
			var rewardIDs = cm.读取奖品ID(抽奖系列);
			var chances = cm.读取奖品概率(抽奖系列);
			for(var i = 0; i < rewardIDs.size(); i++){
				textItem += "#i" + rewardIDs.get(i) + ":# ";
			}
			textItem += "\r\n";
            cm.sendOk("使用2500点券随机获得以下道具，快行动吧！\r\n#e#r任何建议，请联系管理，谢谢！#n#k\r\n" + textItem);
            status = -1;
            //cm.safeDispose();
        } else if (selection > 0 && selection <= 10) {
			//cm.getPlayer().getCSPoints(1) < 500
           if  (cm.getPlayer().getNX() < 2500 ){
                cm.sendOk("点券不足！");
                cm.dispose();
                return;
            }
			
			var message = "你获得了:\r\n";
			for(var i = 1;  i <= selection; i++){
				if  (cm.getPlayer().getNX() < 2500 ){
						cm.sendOk("点券不足！");
						cm.dispose();
						return;
				}
				var itemid = cm.抽奖(抽奖系列, "帽子百宝箱");
				var 数量 = 1;
				if (itemid != -1) {
					cm.gainItem(itemid, 数量);
					cm.gainNX(-2500);
					message += cm.显示物品(itemid) + "\r\n";
					cm.getPlayer().dropMessage("你获得了 " + cm.读取奖品名称(抽奖系列, itemid) + "");
				} else {
					cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					cm.dispose();
					break;
				}
			}
			cm.sendOk(message);
			cm.dispose();
			
        }

    }
}

