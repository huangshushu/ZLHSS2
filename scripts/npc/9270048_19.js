var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 忠告 = "#k温馨提示：任何非法程序和外挂封号处理.封杀侥幸心理.";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
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
		var a1 = "#L1#"+小烟花+"#b#v4310025#*500兑换#d#v1052460##l  #L10#"+小烟花+"#b#v4310025#*500兑换#d#v1122197##l\r\n\r\n";
	    var a2 = "#L3#"+小烟花+"#b#v4310025#*60兑换#d#v4005000#*10#l#L4#"+小烟花+"#b#v4310025#*60兑换#d#v4005001#*10#l\r\n\r\n";
		var a10 = "#L5#"+小烟花+"#b#v4310025#*60兑换#d#v4005002#*10#l#L6#"+小烟花+"#b#v4310025#*60兑换#d#v4005003#*10#l\r\n\r\n";
	    var a3 = "#L7#"+小烟花+"#b#v4310025#*100兑换#d#v4005004#*10#l#L8#"+小烟花+"#b#v4310025#*100兑换#d#v2049100#*1#l\r\n\r\n";
	    var a4 = "#L9#"+小烟花+"#v4310025#*200#b兑换#d#v3992025#*100#l\r\n\r\n";

	    

         cm.sendSimple(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\t     "+ 小烟花 +"#r欢迎来到勇闯禁地纪念币兑换中心"+ 小烟花 +"\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n" + a1 + ""+a2+""+a10+""+a3+""+a4+"");//"+a6+""+a7+""+a8+""+a9+""+a10+""+a11+""+a12+""+a13+""+a14+""+a15+""+a16+"
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
                        cm.dispose();

	    } else if (selection == 1) {
		if (cm.haveItem(4310025,500)) {
			cm.gainItem(4310025, -500);
			cm.gainItem(1052460, 1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勇闯禁地纪念币兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了外星人之套装！！！",true).getBytes());
			cm.sendOk("恭喜你，已经兑换成功！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的勇闯禁地纪念币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 2) {
		if (cm.haveItem(4310025,500)) {
			cm.gainItem(4310025, -500);
			cm.gainItem(1112738, 1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勇闯禁地纪念币兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了外星人之戒指！！！",true).getBytes());
			cm.sendOk("恭喜你，已经兑换成功！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的勇闯禁地纪念币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 3) {
		if (cm.haveItem(4310025,60)) {
			cm.gainItem(4310025, -60);
			cm.gainItem(4005000, +10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勇闯禁地纪念币兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了10个力量水晶！！！",true).getBytes());
			cm.sendOk("恭喜你，已经兑换成功！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的勇闯禁地纪念币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 4) {
		if (cm.haveItem(4310025,60)) {
			cm.gainItem(4310025, -60);
			cm.gainItem(4005001, +10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勇闯禁地纪念币兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了10个智慧水晶！！！",true).getBytes());
			cm.sendOk("恭喜你，已经兑换成功！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的勇闯禁地纪念币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 5) {
		if (cm.haveItem(4310025,60)) {
			cm.gainItem(4310025, -60);
			cm.gainItem(4005002, +10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勇闯禁地纪念币兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了10个敏捷水晶！！！",true).getBytes());
			cm.sendOk("恭喜你，已经兑换成功！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的勇闯禁地纪念币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 6) {
		if (cm.haveItem(4310025,60)) {
			cm.gainItem(4310025, -60);
			cm.gainItem(4005003, +10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勇闯禁地纪念币兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了10个幸运水晶！！！",true).getBytes());
			cm.sendOk("恭喜你，已经兑换成功！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的勇闯禁地纪念币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 7) {
		if (cm.haveItem(4310025,100)) {
			cm.gainItem(4310025, -100);
			cm.gainItem(4005004, +10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勇闯禁地纪念币兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了10个黑暗水晶！！！",true).getBytes());
			cm.sendOk("恭喜你，已经兑换成功！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的勇闯禁地纪念币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 8) {
		if (cm.haveItem(4310025,100)) {
			cm.gainItem(4310025, -100);
			cm.gainItem(2049100, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勇闯禁地纪念币兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了1个混沌卷轴！！！",true).getBytes());
			cm.sendOk("恭喜你，已经兑换成功！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的勇闯禁地纪念币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 9) {
		if (cm.haveItem(4310025,200)) {
			cm.gainItem(4310025, -200);
			cm.gainItem(3992025, +100);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勇闯禁地纪念币兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了100个圣诞大星！！！",true).getBytes());
			cm.sendOk("恭喜你，已经兑换成功！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的勇闯禁地纪念币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 10) {
		if (cm.haveItem(4310025,500)) {
			cm.gainItem(4310025,-500);
			cm.gainItem(1122197,1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勇闯禁地纪念币兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了外星人之吊坠！！！",true).getBytes());
			cm.sendOk("恭喜你，已经兑换成功！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的勇闯禁地纪念币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 11) {
		if (cm.haveItem(4310025,500)) {
			cm.gainItem(4310025, -500);
			cm.gainItem(1122197, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z1122197#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 12) {
		if (cm.haveItem(4310025,500)) {
			cm.gainItem(4310025, -500);
			cm.gainItem(1032142, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z1032142#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 13) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(1462204, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2044403#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 14) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(1472226, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2043703#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 15) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(1482179, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2044703#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 16) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(1492190, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2044603#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 17) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2044019, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2044019#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 18) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040903, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2040903#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 19) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040806, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2040806#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 2000) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040507, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2040507#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 21) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040506, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2040506#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 22) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040403, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2040403#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 23) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040710, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2040710#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 24) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040711, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2040711#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 25) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040709, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2040709#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 26) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040603, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2040603#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 27) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040006, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2040006#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 28) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(1113072, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2040007#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 29) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040303, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2040303#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 30) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2041025, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2041025#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 31) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2041024, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2041024#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 32) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040807, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"特别商店" + " : " + cm.getPlayer().getName() +"玩家成功兑换了一个外星人装备！！！",true).getBytes());
			cm.sendOk("#z2040807#购买成功，去试一下吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的外星人金币吗？");
			cm.dispose();
			return
		}
            }
        }
    }
}
