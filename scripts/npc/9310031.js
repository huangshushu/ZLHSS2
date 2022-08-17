 /*  脚本定制

  QQ:346452946 */



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
//var tz = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉

function start() {
    status = -1;
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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
            cm.dispose();
        }  
    else if (status == 0) {
        //var selStr = " ┏━━━━【#e#r目前最新更新2016 12 21#n#k】━━━━┓\r\t   亲爱的[#b#e#h ##n#k],欢迎来到服务中心\r\n";
	   // var selStr = ""+爱心+""+爱心+""+爱心+""+爱心+""+爱心+""+爱心+""+爱心+""+爱心+""+爱心+""+爱心+""+爱心+""+爱心+""+爱心+""+爱心+""+爱心+""+爱心+"#k\r\n";
		selStr = "               #d 这里是突破破功极限npc \r\n";
                selStr += "#d   当前已追加破功伤害：#e#r" + cm.获得破功() + "万#k#n #k#n #l\r\n\r\n";
		selStr += "#d#L1#需要1个#v4001129# 突破多1万破功伤害 #l\r\n\r\n";
		selStr += "#d#L2#需要1个#v4001129# 突破多10万破功伤害 #l\r\n\r\n";
		//selStr += "#d#L2#需要500个#v4310028# 合成1W破功石头 #l\r\n";

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.haveItem(4001129,1)){
				//cm.gainItem(4001254,-1);//10W
				cm.gainItem(4001129,-1);//1W
				cm.获得破功();
				cm.添加破功(1);
				cm.sendOk("恭喜突破成功");
                 cm.sendYesNo("【破攻系统】["+cm.getName()+"]提升了1级破功等级!");
				cm.dispose();
			}else {
				cm.sendOk("您没有十破功石，我不能帮您破功。");
				cm.dispose();
				break;
			}
	case 2:
            if (cm.haveItem(4001254,1)){
				cm.gainItem(4001254,-1);//10W
				//cm.gainItem(4001129,1);//1W
				cm.获得破功();
				cm.添加破功(10);
				cm.sendOk("恭喜突破成功");
                 cm.sendYesNo("【破攻系统】["+cm.getName()+"]提升了1级破功等级!");
				cm.dispose();
			}else {
				cm.sendOk("您没有十破功石，我不能帮您破功。");
				cm.dispose();
				break;
		    }
		}
    }
}
