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
        var 
		selStr = "       "+大黄星+""+小烟花 +"欢迎来到副本中心"+小烟花 +""+大黄星+"\r\n\r\n";
        //selStr += "        点券：#r"+cm.getPlayer().getCSPoints(1)+"#d\t抵用券：#r"+cm.getPlayer().getCSPoints(2)+"#d\t充值积分:#r"+cm.getmoneyb()+"#k\r\n#e#d             【当前时间"+hour+":"+minute+":"+second+"#k】\r\n";
        //selStr += "   #L78# 周卡奖励#l #r#L2# 每日签到#l\r\n\r\n";
        //selStr += "   #L4# 每日奖励#l#k #r#L6# 游戏宝库#l #r#L7# 积分抽奖#l\r\n\r\n";
        selStr += "#L1# "+小花+"初级副本#l #r#L2# 中级副本#l #L3# 神级副本#l  \r\n\r\n";
		//selStr += "#b#L77# "+小花+"跑商任务#l #L76# 家族任务#l #L7##r 随机任务#l#L1521# 每日任务#l\r\n\r\n";//
		//selStr += "   #r#L78# 30级打卡#l #L79# 70级打卡#l #r#L80# 120级打卡#l\r\n\r\n";
		//selStr += "   #b#L14# 充值网站#l#k #r#L13# 官方网站#l ";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
		    cm.dispose();
            cm.openNpc(9900004,10);
            //cm.dispose();
            break;
		case 1:
            cm.dispose();
            cm.openNpc(9300000,6004);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9300000,6005);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9300000,6006);	    
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9900004,4);
            break;
			        case 1521:
            cm.dispose();
            cm.openNpc(9900004,1521);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900004,6);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900004,7);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900004,6005);
            break;
			        case 151:
            cm.dispose();
            cm.openNpc(9300000,3);
            break;
		    case 1511:
            cm.dispose();
            cm.openNpc(9300000,1511);
            break;
        case 8:
            cm.dispose();
           cm.openShop(6);
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9310071,0);
            break;
        case 10:
            cm.dispose();
            cm.openNpc(9310060,0);
            break;
        case 11:
            cm.dispose();
            cm.openNpc(9000017,2);
            break;
		case 14:
            cm.dispose();
            cm.openWeb("http://wpa.qq.com/msgrd?v=3&uin=450411012&site=qq&menu=yes");
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
            cm.openNpc(9900004,8000);
            break;
		case 76:
            cm.dispose();
            cm.openNpc(9310072,99);
            break;
        case 77:
            cm.dispose();
            cm.openNpc(9010009);
            break;
	    case 78:
            cm.dispose();
            cm.openNpc(9900004,9999);
            break;
	    case 79:
            cm.dispose();
            cm.openNpc(9900004,9998);
            break;
	    case 80:
            cm.dispose();
            cm.openNpc(9900004,9997);
            break;
		}
    }
}
