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
        var selStr = "\r\t           "+ 小烟花 +"欢迎来到一阶装备传承中心"+ 小烟花 +"\r\n";

        selStr += "#r#L0#选择135级布莱克缤武器属性传承至150级法弗纳武器#l#k\r\n\r\n";
		selStr += "#r#L1#选择#v1042244##v1062158#2013运动会传承至150级鲁塔比斯防具#l#k\r\n\r\n";
		selStr += "#r#L2#选择#v1032223##v1122267##v1132246#最高级贝勒德系列饰品传承#l#k\r\n\r\n";
		selStr += "#r#L3#选择#v1070042#全职业男女无限光子鞋传承#l#k\r\n\r\n";  
		selStr += "#r#L4#选择#v1012545##v1022226##v1102506##v1082489##v1032219#其它装备传承#l#k\r\n\r\n"; 
		selStr += "#r#L5#选择#v1113028##v1112597##v1113056##v1112794##v1112688##v1113039#一阶戒指传承#l#k\r\n\r\n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
			cm.openNpc(9900004,1141);
            break;
		case 1:
            cm.dispose();
			cm.openNpc(9900004,1142);
            break;
		case 2:
            cm.dispose();
			cm.openNpc(9900004,1143);
            break;
		case 3:
            cm.dispose();
			cm.openNpc(9900004,1144);
            break;
		case 4:
            cm.dispose();
			cm.openNpc(9900004,1145);
            break;
		case 5:
            cm.dispose();
			cm.openNpc(9900004,1146);
            break;
}
	}
    }
}