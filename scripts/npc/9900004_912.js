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
    if (cm.getLevel() <= 7) {
			cm.openNpc(9900004,1);
    }else if (status == 0) {
		var selStr = ""+大黄星+""+大黄星+""+大黄星+""+大黄星+""+大黄星+""+大黄星+""+大黄星+""+大黄星+""+大黄星+""+大黄星+""+大黄星+""+大黄星+""+大黄星+""+大黄星+""+大黄星+""+大黄星+"#k\r\n";
    
		
	    selStr += " #L1#"+桃花+"#r赞助星球兑换#l \r\n\n\r\n";//#L8100#"+桃花+"#rBOSS重返#l #L0#"+桃花+"#r赞助武器兑换#l
		
		selStr += " #L4#"+桃花+"#r赞助130武器兑换#l      ";//#L3#"+桃花+"#r赞助FFN防具兑换#l
        
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.openNpc(9201081,0);
            cm.dispose();
            break;
		case 1:
            cm.dispose();
            cm.openNpc(9900004,911);
            break;
					case 110002:
            cm.dispose();
            //cm.openNpc(9900004,290555);
            break;
								case 1110002:
            cm.dispose();
            cm.openNpc(9900004,1110002);
            break;
					case 800:
            cm.dispose();
            cm.openNpc(9900004,12011);
            break;
								case 30010:
            cm.dispose();
            cm.openNpc(9900004,30010);
            break;
								case 100055:
            cm.dispose();
            cm.openNpc(9900004,100055);
            break;
			            break;
					case 8001:
            cm.dispose();
            cm.openNpc(9900004,8001);
            break;
        case 2:
		cm.warp(200000301,1)
            cm.dispose();
            break;
	    case 1502:
            cm.dispose();
            cm.openNpc(9900004,4844);
            break;
								case 152202:
            cm.dispose();
            cm.openNpc(9900004,19999);
            break;
				    case 10086:
            cm.dispose();
            cm.openNpc(9900004,1086);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9900004,913);
	    //cm.openShop(7);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9900004,914);
            break;
			        case 8100:
            cm.dispose();
            cm.warp(701000200);
            break;
		     case 81100:
            cm.dispose();
            cm.openNpc(9900004,81100);
            break;
        case 5:
            cm.dispose();
			//cm.openNpc(9201081);
            cm.openNpc(9900004,912);
            break;
	    case 1201:
            cm.dispose();
            cm.openNpc(9900004,1201);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900004,9);
            break;
		case 1701:
            cm.dispose();
            cm.openNpc(9900004,1701);
            break;
        case 7:
            cm.dispose();
			cm.openNpc(9201123);
			//cm.warp(229000000);;
			//cm.openNpc(2090104);
			//cm.openNpc(9010010);
            //cm.openNpc(9900004,8);
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9250022,103);
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9000041,0);
            break;
        case 10:
            cm.dispose();
            cm.openNpc(9310060,0);
            break;
        case 11:
            cm.dispose();
            cm.openNpc(9900001,1);
            break;
		case 14:
            cm.dispose();
            cm.openWeb("http://wpa.qq.com/msgrd?V=1&Uin=1342041396&Site");
			break;
	    case 12:
            cm.dispose();
            cm.openNpc(9000041,4);
			 break;
		case 13:
            cm.dispose();
			cm.openNpc(9250027,0);
			 break;
		case 15:
            cm.dispose();
            cm.openNpc(2020000,0);
            break;
		case 16:
            cm.dispose();
            cm.openNpc(9030100,0);
            break;
        case 17:
            cm.dispose();
            cm.openNpc(9050003,0);
            break;
	    case 77:
            cm.dispose();
            cm.openNpc(9040004,0);
            break;
	    case 78:
            cm.dispose();
            cm.openNpc(9900004,9999);
            break;
		case 18:
            cm.dispose();
            cm.openNpc(9050000,0);
            break;
	    case 99:
            cm.dispose();
            cm.openNpc(9250010,0);
            break;
	    case 20:
            cm.dispose();
            cm.openNpc(9050001,0);
            break;
	    case 1601:
            cm.dispose();
            cm.openNpc(9900004,1601);
            break;
	    case 19:
            cm.dispose();
			cm.openNpc(9900004,8);
            //cm.openNpc(1092090,0);
            break;
			 case 199:
            cm.dispose();
            cm.openNpc(9900004,1314);
            break;
		}
    }
}
