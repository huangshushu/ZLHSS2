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
        var selStr = ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n";		
			selStr += "           "+小烟花+"#r欢迎来到月月冒险岛万能兑换#k"+小烟花+"\r\n";
			selStr += ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n\r\n";
			selStr += "     点券：#r"+cm.getPlayer().getCSPoints(1)+"#d\t抵用券：#r"+cm.getPlayer().getCSPoints(2)+"#d\t充值余额:#r"+cm.getmoneyb()+"#k\r\n\r\n#e#d             【当前时间"+hour+":"+minute+":"+second+"】#k\r\n";
			selStr += "   #r#L0#"+ 小烟花 +"点卷类兑换#l#k         #r#L1#"+ 小烟花 +"经验类兑换#l#k\r\n\r\n";
			//selStr += "   #r#L0#"+ 小烟花 +"国庆币点卷兑换#l#k #r#L1#"+ 小烟花 +"材料金币兑换#l\r\n\r\n";
			//selStr += "   #L3#"+ 小烟花 +"枫叶点卷兑换#l#k   #r#L4#"+ 小烟花 +"抽奖星球坐骑兑换#l#k \r\n\r\n";
			selStr += "   #d#L2#"+ 小烟花 +"金币类兑换#l#k         #d#L3#"+ 小烟花 +"道具类兑换#l#k\r\n\r\n";
			//selStr += "   #r#L20#"+ 小烟花 +"抵用卷点卷兑换#l #r#L21#"+ 小烟花 +"属性水晶兑换黑暗水晶#l#k \r\n";
			//selStr += "   #L9#"+ 小烟花 +"怪物卡兑换经验#l #L10#"+ 小烟花 +"怪物材料兑换经验#l\r\n\r\n";
			//selStr += "   #L15#"+ 桃花 +" 材料兑换#l#k #L11# 箱子兑换#l ";
			selStr += "               #b#L4#"+ 小烟花 +"血量兑换#l#k\r\n"; 
			//selStr += "   #b#L14# 各种兑换#l #b#L2# 血量兑换#l #b#L18# 满技能兑换任务#l #k ";
			cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9000041,110);
            break;
		case 1:
            cm.dispose();
            cm.openNpc(9000041,111);
            break;
        case 2:
            cm.dispose();
			cm.openNpc(9000041,112);
            break;
		case 30:
            cm.dispose();
            cm.openNpc(9900004,4844);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9000041,113);
            break;
        case 4:
            cm.dispose();
			cm.openNpc(9900001,1);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900004,6);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900004,9);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900004,8);
            break;
        case 8:
            cm.dispose();
           cm.openShop(6);
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9310071,50);
            break;
        case 10:
            cm.dispose();
            cm.openNpc(9300001,0);
            break;
        case 11:
            cm.dispose();
            cm.openNpc(9000017,2);
            break;
		case 14:
            cm.dispose();
            cm.openNpc(9330042,0);
			break;
	    case 12:
            cm.dispose();
            cm.openNpc(9900004,20);
			 break;
		case 13:
            cm.dispose();
            cm.openWeb("http://www.shikongmxd.top/");
			 break;
		case 15:
            cm.dispose();
            cm.openNpc(2020000,0);
            break;
		case 16:
            cm.dispose();
            cm.openNpc(9310054,0);
            break;
        case 17:
            cm.dispose();
            cm.openNpc(9000036,0);
            break;
		case 18:
            cm.dispose();
            cm.openNpc(9201124,0);
            break;
		case 20:
            cm.dispose();
            cm.openNpc(9900004,1234);
            break;
		case 21:
            cm.dispose();
            cm.openNpc(9900004,1235);
            break;
		}
    }
}