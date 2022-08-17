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
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } 
	else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			var selStr = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				selStr += "              #r欢迎来到冒险岛装备制作#k\r\n";
				selStr += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				selStr += "#r#L0#"+小烟花+"#v1302070#布莱克缤武器#l  #L1#"+小烟花+"#v1003112#进阶扎昆头盔#l\r\n";
				selStr += "#b#L2#"+小烟花+"#v1012173#恐怖鬼娃的伤口#l #L3#"+小烟花+"#v1022232#布莱克缤瞳印#l\r\n";
				selStr += "#r#L4#"+小烟花+"#v1122076#进阶黑龙项链#l   #L5#"+小烟花+"#v1052929#冒险岛寻宝套装#l\r\n";
				selStr += "#b#L6#"+小烟花+"#v1102828#冒险岛寻宝披风#l #L7#"+小烟花+"#v1082647#冒险岛寻宝手套#l\r\n";
				selStr += "#r#L8#"+小烟花+"#v1073057#冒险岛寻宝鞋子#l #L9#"+小烟花+"#v1032186#灿烂阿尔泰耳环#l\r\n";
				selStr += "#b#L16#"+小烟花+"#v1132287#冒险岛寻宝腰带#l  #L17#"+小烟花+"#v1092109#外星人之盾#l\r\n";
				selStr += "#r#L10#"+小烟花+"#v1142358##v1142210##v1142574#制作#l  #L11#"+小烟花+"#v1113170#副本黑暗戒指#l\r\n";
				selStr += "#b#L12#"+小烟花+"#v1113089#伊帕娅之戒指#l  #L13#"+小烟花+"#v1113084#黑龙传说指环#l\r\n";
				selStr += "#r#L14#"+小烟花+"#v1112738#外星人之戒指#l  #L15#"+小烟花+"#v1113162#环游世界戒指#l\r\n";
				cm.sendSimple(selStr);
		} 
		else if (status == 1) {
			switch (selection) {
				case 0:
					cm.dispose();
					cm.openNpc(9310074,201);
					break;
				case 1:
					cm.dispose();
					cm.openNpc(9310074,202);
					break;
				case 2:
					cm.dispose();
					cm.openNpc(9310074,203);
					break;
				case 3:
					cm.dispose();
					cm.openNpc(9310074,204);
					break;
				case 4:
					cm.dispose();
					cm.openNpc(9310074,205);
					break;
				case 5:
					cm.dispose();
					cm.openNpc(9310074,206);
					break;
				case 6:
					cm.dispose();
					cm.openNpc(9310074,207);
					break;
				case 7:
					cm.dispose();
					cm.openNpc(9310074,208);
					break;
				case 8:
					cm.dispose();
					cm.openNpc(9310074,209);
					break;
				case 9:
					cm.dispose();
					cm.openNpc(9310074,210);
					break;
				case 10:
					cm.dispose();
					cm.openNpc(9310074,211);
					break;
				case 11:
					cm.dispose();
					cm.openNpc(9310074,212);
					break;
				case 12:
					cm.dispose();
					cm.openNpc(9310074,213);
					break;
				case 13:
					cm.dispose();
					cm.openNpc(9310074,214);
					break;
				case 14:
					cm.dispose();
					cm.openNpc(9310074,215);
					break;
				case 15:
					cm.dispose();
					cm.openNpc(9310074,216);
					break;
				case 16:
					cm.dispose();
					cm.openNpc(9310074,217);
					break;
				case 17:
					cm.dispose();
					cm.openNpc(9310074,218);
					break;	
			}
		}
    }
}