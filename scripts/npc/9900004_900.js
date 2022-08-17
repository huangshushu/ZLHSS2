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
        var selStr = "\r\t                 #r"+ 小烟花 +"飞升终极技能学习"+ 小烟花 +"\r\n#l";
		selStr += "                   #L111##b终极技能介绍#l   \r\n\r\n";
		selStr += "                  #L222##b进阶技能书随机回收#l   \r\n\r\n";
        selStr += "#k       #L1#英雄技能#l    #L2#圣骑技能#l    #L3#黑骑技能#l\r\n\r\n";
		selStr += "       #L4#火毒技能#l    #L5#冰雷技能#l    #L6#主教技能#l\r\n\r\n";
		selStr += "             #L7#弓箭技能#l    #L8#弩箭技能#l\r\n\r\n";
		selStr += "             #L9#隐士技能#l    #L10#侠盗技能#l\r\n\r\n";
		selStr += "             #L11#队长技能#l    #L12#船长技能#l\r\n\r\n";
		selStr += "                    #L13#战神技能#l\r\n  ";
		
		//selStr += "      #r#L22##v1402196#FFN武器传承#l   #r#L8##v1052669#毕业衣服传承#l\r\n    ";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
		case 1:
            cm.dispose();
			cm.openNpc(9900004,11112);//英雄
            break;
        case 2:
		    cm.dispose();
			cm.openNpc(9900004,11122);//圣骑
            break;
        case 3:
            cm.dispose();
			cm.openNpc(9900004,11132);//黑骑
            break;
        case 4:
            cm.dispose();
			cm.openNpc(9900004,11212);//火毒
            break;
		case 5:
            cm.dispose();
			cm.openNpc(9900004,11222);//冰雷
            break;
		case 6:
            cm.dispose();
			cm.openNpc(9900004,11232);//主教
            break;
		case 7:
            cm.dispose();
			cm.openNpc(9900004,11312);//弓箭
            break;
		case 8:
            cm.dispose();
			cm.openNpc(9900004,11322);//弩箭
            break;
		case 9:
            cm.dispose();
			cm.openNpc(9900004,11412);//标飞
            break;
		case 10:
            cm.dispose();
			cm.openNpc(9900004,11422);//侠盗
            break;
		case 11:
            cm.dispose();
			cm.openNpc(9900004,11512);//队长
            break;
		case 12:
            cm.dispose();
			cm.openNpc(9900004,11522);//海盗
            break;
		case 13:
            cm.dispose();
			cm.openNpc(9900004,21112);//战神
            break;
			case 111:   
			 var text = "";
				text += "\t             #v2022075##r终极技能介绍#v2022075#\r\n";
				text += "\t    "+ 小烟花 +"#b每个职业必须修仙3次后才能学习"+ 小烟花 +"\r\n\r\n";
				text += "  #k英雄技能 #s11111004##l  #k圣骑技能 #s11001002##l  #k黑骑技能 #s11001003##l\r\n";
				text += "#k———————————————————————————\r\n";
			    //text += "#k———————————————————————————\r\n";
				text += "  #k火毒技能 #s12001003##l  #k冰雷技能 #s12111006##l  #k主教技能 #s12101006##l\r\n";
				text += "#k———————————————————————————\r\n";
				//text += "#k———————————————————————————\r\n";
				text += "          #k神射技能 #s13111002##l  #k箭神技能 #s13111001##l\r\n";
				text += "#k———————————————————————————\r\n";
				//text += "#k———————————————————————————\r\n";
				text += "          #k隐士技能 #s14111005##l  #k侠盗技能 #s14001002##l\r\n";
				text += "#k———————————————————————————\r\n";
				//text += "#k———————————————————————————\r\n";
				text += "          #k队长技能 #s15111007##l  #k船长技能 #s5221004##l\r\n";
				text += "#k———————————————————————————\r\n";
				text += "                  #k战神技能 #s21120005##l\r\n";
				text += "#k———————————————————————————\r\n";
				
				cm.sendSimple(text)
				cm.dispose();
            break;
								case 222:
            cm.dispose();
            cm.openNpc(9310074,55);
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
