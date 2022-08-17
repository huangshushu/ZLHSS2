var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 爱心1 = "#fEffect/CharacterEff/1032063/0/0#";
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
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
        var selStr = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n              #r欢迎来到月月冒险岛羽化飞升#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
			selStr += "               #L0##b"+小烟花+"羽化飞升说明"+小烟花+"#l\r\n\r\n";
			selStr += "               #L1##r"+小烟花+"我要羽化飞升"+小烟花+"#l\r\n\r\n";
			selStr += "               #L2##b"+小烟花+"羽化飞升奖励"+小烟花+"#l\r\n\r\n";
			selStr += "               #L3##r"+小烟花+"羽化飞升技能"+小烟花+"#l\r\n\r\n";
			selStr += "               #L4##b"+小烟花+"羽化飞升属性"+小烟花+"#l\r\n\r\n";
			cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
		case 0:
            cm.dispose();
			cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n                 #r欢迎来到羽化飞升说明#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n #b玩家达到250级时，可花费#r#v4000463#*25+#v4031138#*2E#b进行羽化飞升\r\n\r\n   #r羽化飞升后玩家从250级"+蓝色箭头+""+蓝色箭头+"200级，其他属性保持不变\r\n\r\n       #b每次羽化飞升后，升级依然可获得升级属性点\r\n\r\n   #r羽化飞升达到相应次数后，可领取额外的羽化飞升奖励\r\n");
            break;
        case 1:
            cm.dispose();
			cm.openNpc(9310073,41);
            break;
		case 2:
            cm.dispose();
			cm.openNpc(9310073,42);
            break;
			case 3:
            cm.dispose();
			cm.openNpc(9310073,43);
            break;
			case 4:
            cm.dispose();
			cm.openNpc(9310073,44);
            break;
}
	}
    }
}