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
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n";
			text += "\t          "+ 小烟花 +"#r星火武器卷自选箱"+ 小烟花 +"\r\n";
			text += ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n\r\n";
			text += "#r领取前请检查背包消耗栏是否有2格以上空位,否则后果自负!#k#n\r\n"
			text += "#L1##b"+ 小烟花 +"领取一张#v2613000##z2613000#"+ 小烟花 +"#l\r\n\r\n"
			text += "#L2##b"+ 小烟花 +"领取一张#v2613001##z2613001#"+ 小烟花 +"#l\r\n\r\n"
			text += "#L3##b"+ 小烟花 +"领取一张#v2612010##z2612010#"+ 小烟花 +"#l\r\n\r\n"
            cm.sendSimple(text);
		} else if (cm.getInventory(4).isFull()||cm.getInventory(2).isFull()){
            cm.sendOk("#b请保证其他/消耗的空间！否则无法领取.");
            cm.dispose();
			return;
		} else if (selection == 1){
			if (cm.haveItem(2028083,1)){
				cm.gainItem(2613000,1);
				cm.gainItem(2028083,-1);
				cm.sendOk("已经放入您的背包,请查看!");
				cm.dispose();
			}else {
				cm.sendOk("您的自选箱子数量不足！");
				cm.dispose();
			}
		} else if (selection == 2){
			if (cm.haveItem(2028083,1)){
				cm.gainItem(2613001,1);
				cm.gainItem(2028083,-1);
				cm.sendOk("已经放入您的背包,请查看!");
				cm.dispose();
			}else {
				cm.sendOk("您的自选箱子数量不足！");
				cm.dispose();
			}
		} else if (selection == 3){
			if (cm.haveItem(2028083,1)){
				cm.gainItem(2612010,1);
				cm.gainItem(2028083,-1);
				cm.sendOk("已经放入您的背包,请查看!");
				cm.dispose();
			}else {
				cm.sendOk("您的自选箱子数量不足！");
				cm.dispose();
			}
        } 
	}
}