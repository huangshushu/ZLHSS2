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
			text = ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n";		
			text += "             "+小烟花+"#r欢迎来到神秘蛋兑换金币#k"+小烟花+"\r\n";
			text += ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n\r\n";
			text += "    #b本系统是方便玩家背包金币达到上限后用来储存金币\r\n\r\n";
			text += " #r背包金币上限为21亿,兑换前请检测金币数量,否则后果自负!\r\n\r\n";
			text += "      #d需要储存身上金币的玩家请到杂货店购买神秘蛋\r\n\r\n";
            text += "           #L12##r"+小烟花+"#v4170016##z4170016#兑换1亿金币"+小烟花+"#l\r\n"//3

            cm.sendSimple(text);
		} else if (cm.getInventory(4).isFull()||cm.getInventory(2).isFull()){
            cm.sendOk("#b请保证其他/消耗的空间！否则无法领取.");
            cm.dispose();
			return;
		} else if (selection == 12){
			if (cm.haveItem(4170016,1)){
				cm.gainItem(4170016,-1);
				cm.gainMeso(100000000);
				cm.sendOk("游戏币已兑换成功!");
				cm.dispose();
			}else {
				cm.sendOk("您没有#v4170016#,不能进行操作！");
				cm.dispose();
			}
        } else if (selection == 1) { 
        cm.openNpc(9000041, 2);
        } else if (selection == 2) {  
        cm.openNpc(9000041, 3);
        } else if (selection == 3) { 
		if (cm.getPlayer().getCSPoints(1) >= 1000) {
	    cm.gainNX(-1000);
		cm.gainItem(4000463,1);
		cm.sendOk("恭喜你兑换成功了一个#v4000463#");
		cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]成功兑换国庆币1个！");
        cm.dispose();
		 } else {
        cm.sendOk("你的点券不足1000点。");
        cm.dispose();
		}
        } else if (selection == 4) {
        if (cm.haveItem(4000463,5)&&cm.getBossLog("zjdh")<=100) {
		cm.gainItem(4000463,-5);
	    cm.gainNX(+5000);
		cm.sendOk("恭喜你成功兑换了5000点");
		cm.setBossLog("zjdh");
		cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]成功兑换5000点券！");
        cm.dispose();
		 } else {
        cm.sendOk("你的没有#v4000463#或者今天已经达到兑换上限！");
        cm.dispose();
				}
        } else if (selection == 5) {
        if (cm.getPlayer().getCSPoints(1) >= 100000) {
		cm.gainNX(-100000);
		cm.gainItem(4000463,100);
		cm.sendOk("恭喜你成功兑换了#v4000463#");
		cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]成功兑换国庆币100个！");
        cm.dispose();
		 } else {
        cm.sendOk("你的点券不足10000点");
        cm.dispose();
				}
        } else if (selection == 6) {
        if (cm.haveItem(4000463, 10)) {
		cm.gainNX(+9500);
		cm.gainItem(4000463,-10);
		cm.sendOk("恭喜你成功兑换了9500点券");
		cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]成功兑换9500点券！");
        cm.dispose();
		 } else {
        cm.sendOk("你的#v4000463#不足10个");
        cm.dispose();			
				}
		} else if (selection == 7) {
        cm.openNpc(9000041,5);
        } else if (selection == 8) {
        if (cm.haveItem(4310143, 1)) {
		cm.gainItem(4310143,-1);
	    //cm.gainItem(4000463, 1);
		cm.gainNX(1000);
		cm.sendOk("恭喜你成功兑换了1000点券");
        cm.dispose();
		 } else {
        cm.sendOk("你的没有1个#v4310143#");
        cm.dispose();
				}
		} else if (selection == 9) {
        if (cm.getBeans() >= 500) {//判断豆豆
        cm.gainBeans(-500);//扣除豆豆
	    cm.gainItem(4110010, 10);
		cm.sendOk("恭喜你成功兑换了#v4110010#");
		cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]成功兑换10张豆豆票");
        cm.dispose();
		 } else {
        cm.sendOk("你没有足够的豆豆");
        cm.dispose();
		        }
        } else if (selection == 10) {
        if (cm.getPlayer().getCSPoints(1) >= 10000) {
		cm.gainNX(-10000);
		cm.gainItem(4000463,10);
		cm.sendOk("恭喜你成功兑换了#v4000463#");
		cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]成功兑换国庆币10个！");
        cm.dispose();
		 } else {
        cm.sendOk("你的#v4310014#不足15个");
        cm.dispose();
		        }
		} else if (selection == 11) { //活动币兑换口子
			if (cm.haveItem(4310080, 10)) {
	            cm.gainItem(4310080, -10);
				//cm.gainDY(1000);
				cm.removeAll(4310080);
				cm.gainItem(4310150,1,3);
				//cm.gainMeso(1000);//金币
				cm.sendOk("领取活动奖品成功！");
				cm.dispose();
			}else{
				cm.sendOk("你没有该叶子*10，无法领取奖品！");
				cm.dispose();
			     }
		}
	}
}