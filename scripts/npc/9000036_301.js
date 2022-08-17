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
		//cm.setmoneyb(9999999)
        var selStr = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
		selStr += "          #r欢迎来到月月冒险岛第二阶段累计赞助物品奖励#k\r\n";
		selStr += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
        selStr += "    #b\t累计额度：#r"+cm.getzb()+"             #b赞助积分：#r"+cm.getmoneyb()+"#k\r\n\r\n";
        selStr += "   #r#L0#"+小烟花+"8100档奖励"+小烟花+"#l       #r#L1#"+小烟花+"8200档奖励"+小烟花+"#l\r\n\r\n";
		selStr += "   #r#L2#"+小烟花+"8500档奖励"+小烟花+"#l       #r#L3#"+小烟花+"9000档奖励"+小烟花+"#l\r\n\r\n";
		selStr += "   #r#L4#"+小烟花+"10000档奖励"+小烟花+"#l      #r#L5#"+小烟花+"12000档奖励"+小烟花+"#l\r\n\r\n";
		selStr += "   #r#L6#"+小烟花+"13000档奖励"+小烟花+"#l      #r#L7#"+小烟花+"15000档奖励"+小烟花+"#l\r\n\r\n";
		selStr += "   #r#L8#"+小烟花+"16000档奖励"+小烟花+"#l";//  #r#L9#"+小烟花+"15000档奖励"+小烟花+"#l\r\n\r\n
		 selStr += "   #r#L10#"+小烟花+"25000档奖励"+小烟花+"#l    #r#L11#"+小烟花+"无效档奖励"+小烟花+"#l\r\n\r\n";
		//selStr += "   #r#L12#"+小烟花+"30000档奖励"+小烟花+"#l\r\n\r\n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9000036,2011);
            break;
		case 1:
            cm.dispose();
            cm.openNpc(9000036,2012);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9000036,2013);
            break;
		case 3:
            cm.dispose();
            cm.openNpc(9000036,2014);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9000036,2015);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9000036,2016);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9000036,2017);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9000036,2018);
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9000036,2019);
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9000036,110);
            break;
		case 10:
            cm.dispose();
            cm.openNpc(9000036,111);
			break;
		}
    }
}
