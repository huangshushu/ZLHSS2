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
				selStr += "              #r欢迎来到月月冒险岛强化必成系统#k\r\n";
				selStr += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				//selStr += "               #r#L16#"+小烟花+"装备神铸说明"+小烟花+"#k\r\n\r\n";
				selStr += "           #r#L0#"+小烟花+"10星必成#v4310009##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1302297#"+蓝色箭头+""+蓝色箭头+"#v1302333#
				selStr += "           #r#L1#"+小烟花+"15星必成#v4001255##v4310010##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1003976#"+蓝色箭头+""+蓝色箭头+"#v1004422#
				selStr += "           #r#L2#"+小烟花+"25星必成#v4310148##l#k\r\n";//"+蓝色箭头+""+蓝色箭头+"#v1012438#
			

			cm.sendSimple(selStr);
		} else if (status == 1) {
			switch (selection) {
				case 0:
					cm.dispose();
					cm.openNpc(9310072,111);
					break;
				case 1:
					cm.dispose();
					cm.openNpc(9310072,112);
					break;
				case 2:
					cm.dispose();
					cm.openNpc(9310072,113);
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
						selStr += "            #r欢迎来到月月冒险岛装备神铸说明#k\r\n";
						selStr += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
						selStr += "           #b收集指定物品可将装备神铸成后一件\r\n\r\n";
						selStr += "       #r装备神铸只能按箭头顺序进行，不可跳跃进行\r\n\r\n";
						selStr += "#b装备神铸将保留#r后者的装备形象#b，继承#r前者的强化次数和星级\r\n\r\n";
						selStr += "        #b装备神铸后，装备将会获得#r额外的属性提升\r\n\r\n";
						selStr += "            #b装备神铸会消耗掉后一件装备材料\r\n\r\n";
					cm.sendOk(selStr);
					cm.dispose();
			}
		}
    }
}