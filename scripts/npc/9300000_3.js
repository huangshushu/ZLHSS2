var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 小烟花2 = "#fUI/Basic/BtHide3/mouseOver/0#";
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
var 小烟花2 = "#fEffect/CharacterEff/1112960/3/0#";  //小烟花2 【小】
var 小烟花22 = "#fEffect/CharacterEff/1112960/3/1#";  //小烟花2 【大】
var 花草 ="#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 ="#fEffect/SetEff/208/effect/walk2/3#";
var 小花 ="#fMap/MapHelper/weather/birthday/2#";
var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花2 ="#fMap/MapHelper/weather/squib/squib4/1#";
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
		var a1 = "#L1#" + 大水滴 + "#r【30-69级】打卡#l" +大水滴+ " \r\n\r\n需要100个#v4000000#和50个#v4000016#和1张#v4002000#和1张#v4002001#进行制作\r\n";
        var a2 = "#L2#" + 大水滴 + "#r【70-119级】打卡#l" +大水滴+ " \r\n\r\n需要200个#v4000000#和100个#v4000016#和2张#v4002000#和2张#v4002001#和2张#v4002002#进行制作\r\n";
        var a3 = "#L3#" + 大水滴 + "#r【120-200级】打卡#l" +大水滴+ " \r\n\r\n需要300个#v4000000#和150个#v4000016#和3张#v4002000#和3张#v4002001#和3张#v4002002#和1张#v4002003#进行制作\r\n";
	    

            cm.sendSimple("#e#d施主：#k 请选择合适自身等级打卡！：获得材料 点卷 游戏币 雪花币 影子团币 \r\n" + a1 + ""+a2+""+a3+"");
        } else if (status == 1) {
		if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
			cm.sendOk("#b请保证每个栏位至少有空格,否则无法领取.");
			cm.dispose();
			return;
	    } else if (selection == 1) {
		if (cm.haveItem(4000000,100)&&cm.haveItem(4000016,50)&&cm.haveItem(4002000,1)&&cm.haveItem(4002001,1)&&cm.getLevel()<70&&cm.getBossLog("打卡奖励")==0) {
			if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
			cm.sendOk("#b请保证每个栏位有足够空间,否则无法领取.");
			cm.dispose();
			return;
	    }
			cm.gainItem(4000000, -100);
			cm.gainItem(4000016, -50);
			cm.gainItem(4002000, -1);
			cm.gainItem(4002001, -1);
			cm.gainNX(1000);
			cm.gainMeso(1000000);//给金币
			//cm.gainItem(5050000,1,3);//复活
			//cm.gainItem(2340000,1);//祝福
			//cm.gainItem(2049100,1);//混沌
			cm.gainItem(4310014,5);//爱心喇叭
			cm.gainItem(5150040,1);//皇家
			cm.gainItem(4000487,100);//皇家
			cm.gainItem(4001266,1);//劳动勋章
			cm.gainItem(5041000,1);//高级瞬移之石
			cm.gainItem(2370000,1);
					//cm.getPlayer().modifyCSPoints(2,200);
			cm.setBossLog("打卡奖励");
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"[打卡奖励]" + " : " + " [" + cm.getPlayer().getName() + "]成功领取了丰厚的30-69打卡奖励！",true).getBytes());
            cm.sendOk("恭喜你获得了打卡奖励。");
			cm.dispose();
		} else {
			cm.sendOk("材料或者金币不足!或者今天已经兑换过1次请确认！");
			cm.dispose();
		}
			    } else if (selection == 2) {
		if (cm.haveItem(4000000,200)&&cm.haveItem(4000016,100)&&cm.haveItem(4002000,2)&&cm.haveItem(4002001,2)&&cm.haveItem(4002002,2)&&cm.getLevel()>=70&&cm.getLevel()<120&&cm.getBossLog("打卡奖励")==0) {
			if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull(4) && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
			cm.sendOk("#b请保证每个栏位有足够空间,否则无法领取.");
			cm.dispose();
			return;
	    }
			cm.gainItem(4000000, -200);
			cm.gainItem(4000016, -100);
			cm.gainItem(4002000, -2);
			cm.gainItem(4002001, -2);
			cm.gainItem(4002002, -2);
			cm.gainNX(3000);
			cm.gainMeso(2000000);//给金币
			//cm.gainItem(2340000,1);//祝福
			//cm.gainItem(2049100,1);//混沌
			cm.gainItem(4310014,15);//爱心喇叭
			cm.gainItem(4310059,1);//皇家
			cm.gainItem(4001266,1);//劳动勋章
			cm.gainItem(2300000,100);//特殊药水
			cm.gainItem(2370000,1);
			cm.gainItem(2370004,15);
			cm.gainItem(4000487,50);//皇家
			cm.gainItem(2370005,20);
			cm.gainItem(5040000,2);//高级瞬移之石
			//cm.getPlayer().modifyCSPoints(2,500);
			cm.setBossLog("打卡奖励");
			 Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"[打卡奖励]" + " : " + " [" + cm.getPlayer().getName() + "]成功领取了丰厚的70-119打卡奖励！",true).getBytes());
        	cm.sendOk("恭喜你获得了打卡奖励#。");
			cm.dispose();
		} else {
			cm.sendOk("材料或者金币不足!或者今天已经兑换过1次请确认！");
			cm.dispose();
		}
			    } else if (selection == 3) {
		if (cm.haveItem(4000000,300)&&cm.haveItem(4000016,200)&&cm.haveItem(4002000,3)&&cm.haveItem(4002001,3)&&cm.haveItem(4002002,3)&&cm.haveItem(4002003,3)&&cm.getLevel()>119&&cm.getBossLog("打卡奖励")==0) {
			if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull(4) && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
			cm.sendOk("#b请保证每个栏位有足够空间,否则无法领取.");
			cm.dispose();
			return;
	    }
			cm.gainItem(4000000, -300);
			cm.gainItem(4000016, -200);
			cm.gainItem(4002000, -3);
			cm.gainItem(4002001, -3);
			cm.gainItem(4002002, -3);
			cm.gainItem(4002003, -3);
			cm.gainNX(5000);
			cm.gainMeso(5000000);//给金币
			cm.gainItem(2340000,1);//祝福
			cm.gainItem(2049100,1);//混沌
			cm.gainItem(4310014,20);//爱心喇叭
			cm.gainItem(4310059,3);//皇家
			cm.gainItem(4001266,1);//劳动勋章
			cm.gainItem(2300000,80);//特殊药水
			cm.gainItem(5041000,3);//高级瞬移之石
			cm.gainItem(2370003,10);
			cm.gainItem(2370004,15);
			cm.gainItem(4000487,150);//皇家
			cm.gainItem(2370005,20);
			cm.gainItem(5350000,1);
			//cm.getPlayer().modifyCSPoints(2,800);
			cm.setBossLog("打卡奖励");
			 Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"[打卡奖励]" + " : " + " [" + cm.getPlayer().getName() + "]成功领取了丰厚的120-200打卡奖励！",true).getBytes());
        	cm.sendOk("恭喜你获得了打卡奖励#。");
			cm.dispose();
		} else {
			cm.sendOk("材料或者金币不足!或者今天已经兑换过1次请确认！");
			cm.dispose();
		}
			    } else if (selection == 4) {
		if (cm.haveItem(4002000,80)&&cm.haveItem(4002002,80)&&cm.haveItem(1113074,1)&&cm.haveItem(4002001,80)&&cm.haveItem(4000244,100)&&cm.haveItem(4000245,100)&&cm.haveItem(4000463,10)&&cm.getMeso()>=50000000) {
			cm.gainItem(4002000, -80);
			cm.gainItem(4002001, -80);
			cm.gainItem(4002002, -80);
			cm.gainItem(4000244, -100);
			cm.gainItem(4000245, -100);
			cm.gainItem(4000463, -10);
			cm.gainItem(1113074, -1);
			cm.gainMeso(-50000000);
			cm.gainItem(1113075, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"戒指制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了最高级贝勒德戒指。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1113075#已经制作好了，去试一下吧");
			cm.dispose();
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
				}
            }
        }
    }
}
