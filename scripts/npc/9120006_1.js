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
        var selStr = "\r\t       "+ 小烟花 +"亲爱的欢迎来到本岛最大的装备重置中心"+ 小烟花 +"\r\n";
        //selStr += "             #r#L30##v1142358##v1142210##v1142840#勋章制作#l#k\r\n\r\n";
		selStr += "   #r#L1#布莱克武器#v1302070#重置#l    #r#L2#进阶扎头#v1003112#重置#l#k \r\n";
        selStr += "   #r#L3#寻宝套装#v1052929#重置#l       #r#L4#寻宝披风#v1102828#重置#l#k\r\n";
		selStr += "   #r#L5#寻宝手套#v1082647#重置#l      #r#L6#寻宝鞋子#v1073057#重置#l#k\r\n";
		selStr += "   #r#L7#寻宝腰带#v1132287#重置#l      #r#L8#鬼娃的伤口#v1012173#重置#l#k\r\n";
		selStr += "   #r#L9#布莱克印#v1022232#重置#l       #r#L10#阿尔泰耳环#v1032186#重置#l#k \r\n";
		//selStr += "    #r#L24##v1082543#暴君手套#l#k       #r#L1##v1102481#暴君披风#l#k  \r\n ";//#r#L22##v1402196#FFN武器传承#l#k 
		//selStr += "    #r#L21##v1022144#品克缤瞳印#l#k      #r#L22##v1102039#时装翅膀#l#k \r\n ";
		//selStr += "    #r#L31##v1122017#精灵吊坠#l#k       #r#L32##v2510000#时装合成#l#k ";
		//selStr += "      #r#L22##v1402196#FFN武器传承#l   #r#L8##v1052669#毕业衣服传承#l\r\n    ";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.openNpc(9310060,1);
            //cm.dispose();
            break;
		case 1:
            cm.dispose();
			cm.openNpc(2040021,1);
            break;
        case 2:
		    cm.dispose();
			cm.openNpc(2040021,2);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(2040021,3);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(2040021,4);
            break;
		case 5:
            cm.dispose();
            cm.openNpc(2040021,5);
            break;
		case 6:
            cm.dispose();
            cm.openNpc(2040021,6);
            break;
		case 7:
            cm.dispose();
            cm.openNpc(2040021,7);
            break;
		case 8:
            cm.dispose();
            cm.openNpc(2040021,8);
            break;
		case 9:
            cm.dispose();
            cm.openNpc(2040021,9);
            break;
		case 10:
            cm.dispose();
            cm.openNpc(2040021,10);
            break;
		case 11:
            cm.dispose();
            cm.openNpc(9000008,0);
            break;
					case 20:
            cm.dispose();
            cm.openNpc(9310060,2);
            break;
								case 21:
            cm.dispose();
            cm.openNpc(9310102,0);
            break;
							case 22:
            cm.dispose();
			cm.openNpc(2110000,0);
            //cm.openNpc(9201123,0);
            break;
							case 23:
            cm.dispose();
            cm.openNpc(9270025,0);
            break;
							case 24:
            cm.dispose();
            cm.openNpc(2080000,0);
            break;
							case 26:
            cm.dispose();
            cm.openNpc(9120054,10);
            break;
							case 27:
            cm.dispose();
            cm.openNpc(1093000,1);
            break;
							case 28:
            cm.dispose();
            cm.openNpc(9310074,0);
            break;
							case 29:
            cm.dispose();
            cm.openNpc(9120006,0);
            break;
							case 30:
            cm.dispose();
            cm.openNpc(9050010,0);
            break;
							case 31:
            cm.dispose();
            cm.openNpc(9120054,0);
            break;
							case 32:
            cm.dispose();
            cm.openNpc(9120054,1000);
            break;
}
	}
    }
}
