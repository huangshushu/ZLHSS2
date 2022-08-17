importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.tools);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE); //获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE); //获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1"; // 物品ID,数量
var x2;
var x3;
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 礼包物品 = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#"; //红桃心
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#"; //红色右箭头
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#"; //蓝色右箭头
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#"; //选择道具
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 红色箭头 = "#fEffect/CharacterEff/1112908/0/1#"; //彩光3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#"; //爱心
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 粉爱心 = "#fItem/Etc/0427/04270005/Icon8/1#"; //
var 菊花 = "#fUI/PredictHarmony/card/19#"; //卡片效果菊花
var 笑 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/0#"; //笑脸
var 金枫叶 = "#fMap/MapHelper/weather/maple/2#";
var 红枫叶 = "#fMap/MapHelper/weather/maple/1#";
var 巫女 = "#fMap/MapHelper/weather/witch/0#"; //巫女
var 气球 = "#fMap/MapHelper/weather/balloon/4#"; //气球
var 射箭 = "#fMap/MapHelper/weather/LoveEffect2/4/0#"; //射箭
var 玫瑰 = "#fMap/MapHelper/weather/rose/0#"; //玫瑰花
var 烟花 = "#fMap/MapHelper/weather/squib/squib1/3#"; //烟花

var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#"; //
var 小粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/5#"; //
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#"; //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#"; //
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#"; //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#"; //
var tz = "#fEffect/CharacterEff/1082565/4/0#"; //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#"; //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#"; //蓝兔子
var 邪恶小兔 = ""; //邪恶小兔 【小】
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#"; //邪恶小兔 【大】
var 花草 = "#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 = "#fEffect/SetEff/208/effect/walk2/3#";
var 小花 = "#fMap/MapHelper/weather/birthday/2#";
var 桃花 = "#fMap/MapHelper/weather/rose/4#";
var 银杏叶 = "#fMap/MapHelper/weather/maple/3#";
var 小烟花 = "#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 = "#fMap/MapHelper/weather/witch/3#";


var 是否开放 = false;
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
			if(!是否开放){
				cm.sendOk("未开放");
				cm.dispose();
				return;
			}

            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
	    
            text += "#e#r" + 星星 + "这里可以领取麦格纳斯挑战奖励" + 星星 + ".\r\n"//3     
            text += "#d" + 小烟花 + "退出地图或违规操作箱子将会消失" + 小烟花 + "\r\n"//3
            text += "#L1##d" + 小烟花 + "前往领取奖品地图" + 小烟花 + "\r\n"//3
			
            cm.sendSimple(text);
}
        


else if (selection == 1) {
	 cm.warpParty(401060301);
	 cm.gainItem(2022615,-1);
	 cm.全服喇叭(6,"『麦格纳斯』" + " : " + "[" + cm.getChar().getName() + "] 进入奖励地图!");
                cm.结束对话();

	
        }  
    }
}


