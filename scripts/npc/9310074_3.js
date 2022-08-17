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
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
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
			var selStr = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				selStr += "              #r欢迎来到月月冒险岛装备神铸#k\r\n";
				selStr += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				selStr += "               #r#L16#"+小烟花+"装备神铸说明"+小烟花+"#k\r\n\r\n";
				selStr += "#r#L0#"+小烟花+"武器神铸#v1302070#"+蓝色箭头+""+蓝色箭头+"#v1302275#"+蓝色箭头+""+蓝色箭头+"#v1302297##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1302333#
				selStr += "#r#L1#"+小烟花+"帽子神铸#v1003112#"+蓝色箭头+""+蓝色箭头+"#v1003797#/"+蓝色箭头+""+蓝色箭头+"#v1003976##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1004422#
				selStr += "#r#L2#"+小烟花+"脸饰神铸#v1012173#"+蓝色箭头+""+蓝色箭头+"#v1012319#"+蓝色箭头+""+蓝色箭头+"#v1012438##l#k\r\n";
				selStr += "#r#L3#"+小烟花+"眼饰神铸#v1022232#"+蓝色箭头+""+蓝色箭头+"#v1022226#"+蓝色箭头+""+蓝色箭头+"#v1022211##l#k\r\n";//
				selStr += "#r#L4#"+小烟花+"耳环神铸#v1032186#"+蓝色箭头+""+蓝色箭头+"#v1032191#"+蓝色箭头+""+蓝色箭头+"#v1032224#"+蓝色箭头+""+蓝色箭头+"#v1032223##l#k\r\n";//
				selStr += "#r#L5#"+小烟花+"披风神铸#v1102828#"+蓝色箭头+""+蓝色箭头+"#v1102481#"+蓝色箭头+""+蓝色箭头+"#v1102623##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1102775#
				selStr += "#r#L6#"+小烟花+"衣服神铸#v1052929#"+蓝色箭头+""+蓝色箭头+"#v1052314#"+蓝色箭头+""+蓝色箭头+"#v1052669##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1052882#
				selStr += "#r#L7#"+小烟花+"项链神铸#v1122076#"+蓝色箭头+""+蓝色箭头+"#v1122256#"+蓝色箭头+""+蓝色箭头+"#v1122269#"+蓝色箭头+""+蓝色箭头+"#v1122267##l#k\r\n";//
				selStr += "#r#L8#"+小烟花+"手套神铸#v1082647#"+蓝色箭头+""+蓝色箭头+"#v1082543#"+蓝色箭头+""+蓝色箭头+"#v1082556##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1082636#
				selStr += "#r#L9#"+小烟花+"腰带神铸#v1132287#"+蓝色箭头+""+蓝色箭头+"#v1132174#"+蓝色箭头+""+蓝色箭头+"#v1132247#"+蓝色箭头+""+蓝色箭头+"#v1132246##l#k\r\n";//
				selStr += "#r#L10#"+小烟花+"鞋子神铸#v1073057#"+蓝色箭头+""+蓝色箭头+"#v1072743#"+蓝色箭头+""+蓝色箭头+"#v1072874##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1073030#
				//selStr += "#r#L11#"+小烟花+"戒指神铸#v1113055#"+蓝色箭头+""+蓝色箭头+"#v1112688##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1113070#
				//selStr += "#r#L12#"+小烟花+"戒指神铸#v1113089#"+蓝色箭头+""+蓝色箭头+"#v1113149##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1113056#
				//selStr += "#r#L13#"+小烟花+"戒指神铸#v1112738#"+蓝色箭头+""+蓝色箭头+"#v1113038##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1113075#
				//selStr += "#r#L14#"+小烟花+"戒指神铸#v1113084#"+蓝色箭头+""+蓝色箭头+"#v1113016##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1112597#
				//selStr += "#r#L15#"+小烟花+"戒指神铸#v1113162#"+蓝色箭头+""+蓝色箭头+"#v1113185##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1112794#
			cm.sendSimple(selStr);
		} else if (status == 1) {
			switch (selection) {
				case 0:
					cm.dispose();
					cm.openNpc(9310074,301);
					break;
				case 1:
					cm.dispose();
					cm.openNpc(9310074,3020);
					break;
				case 2:
					cm.dispose();
					cm.openNpc(9310074,3030);
					break;
				case 3:
					cm.dispose();
					cm.openNpc(9310074,3040);
					break;
				case 4:
					cm.dispose();
					cm.openNpc(9310074,3050);
					break;
				case 5:
					cm.dispose();
					cm.openNpc(9310074,3060);
					break;
				case 6:
					cm.dispose();
					cm.openNpc(9310074,3070);
					break;
				case 7:
					cm.dispose();
					cm.openNpc(9310074,3080);
					break;
				case 8:
					cm.dispose();
					cm.openNpc(9310074,3090);
					break;
				case 9:
					cm.dispose();
					cm.openNpc(9310074,3100);
					break;
				case 10:
					cm.dispose();
					cm.openNpc(9310074,3200);//鞋子
					break;
				case 11:
					cm.dispose();
					cm.openNpc(9310074,3300);//巨匠戒指
					break;
				case 12:
					cm.dispose();
					cm.openNpc(9310074,3400);//蜘蛛戒指
					break;
				case 13:
					cm.dispose();
					cm.openNpc(9310074,3500);//外星戒指
					break;
				case 14:
					cm.dispose();
					cm.openNpc(9310074,3600);//黑龙戒指
					break;
				case 15:
					cm.dispose();
					cm.openNpc(9310074,3700);//环球戒指
					break;
				case 16:
					var selStr = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
						selStr += "            #r欢迎来到如七七险岛装备神铸说明#k\r\n";
						selStr += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
						selStr += "           #b收集指定物品可将装备神铸成后一件\r\n\r\n";
						selStr += "       #r装备神铸只能按箭头顺序进行，不可跳跃进行\r\n\r\n";
						selStr += "#b装备神铸将保留#r后者的装备形象#b，继承#r前者的强化次数\r\n\r\n";
						selStr += "           #b装备神铸后，装备#r可再次星之力强化\r\n\r\n";
						selStr += "           #b装备神铸会消耗掉前一件装备材料\r\n\r\n";
					cm.sendOk(selStr);
					cm.dispose();
			}
		}
    }
}