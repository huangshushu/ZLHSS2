
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
var maxenter = [3, 1];
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
var 彩虹 ="#fEffect/ItemEff/1071085/effect/walk1/2#";
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
var PQname = ["BossMagnus_EASY",  "BossMagnus_HARD"];



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
        }
        else {
            status--;
        }
        if (status == 0) 

{


            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
		            text += ""+ cm.getChar().getName() +"你好,当前时间是#b" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒. \r\n#k#r此NPC每日整点#k才可以进入,整点后2分钟内可以进入~#r如果期间有人进入地图会重置怪物血量\r\n\r\n" ;	
		 					text += "#L2##d" + 小烟花 + "进入地图" + 小烟花 + "\r\n\r\n"//3
		 
              cm.sendSimple(text);
}
	else if (status == 1) {
 if (cm.getMin() >2 && !cm.getPlayer().isGM()) {

cm.sendOk("时间还没到.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.dispose();
 }else if (selection == 2) {
    cm.openNpc(9000059,0)
 }
	}
	}
}