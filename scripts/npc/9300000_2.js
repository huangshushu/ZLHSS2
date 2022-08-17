
var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 忠告 = "#k温馨提示：任何非法程序和外挂封号处理.封杀侥幸心理.";
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
		var a1 = "#L1#" + 正方箭头 + "#b兑换#d#v1402210##z1402210##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
	    var a2 = "#L2#" + 正方箭头 + "#b兑换#d#v1302289##z1302289##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
	    var a3 = "#L3#" + 正方箭头 + "#b兑换#d#v1312165##z1312165##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
	    var a4 = "#L4#" + 正方箭头 + "#b兑换#d#v1322215##z1322215##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a5 = "#L5#" + 正方箭头 + "#b兑换#d#v1332238##z1332238##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a6 = "#L6#" + 正方箭头 + "#b兑换#d#v1372188##z1372188##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a7 = "#L7#" + 正方箭头 + "#b兑换#d#v1382222##z1382222##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a8 = "#L8#" + 正方箭头 + "#b兑换#d#v1412147##z1412147##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a9 = "#L9#" + 正方箭头 + "#b兑换#d#v1422152##z1422152##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a10 = "#L10#" + 正方箭头 + "#b兑换#d#v1432178##z1432178##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a11 = "#L11#" + 正方箭头 + "#b兑换#d#v1442234##z1442234##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a12 = "#L12#" + 正方箭头 + "#b兑换#d#v1452216##z1452216##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a13 = "#L13#" + 正方箭头 + "#b兑换#d#v1462204##z1462204##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a14 = "#L14#" + 正方箭头 + "#b兑换#d#v1472226##z1472226##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a15 = "#L15#" + 正方箭头 + "#b兑换#d#v1482179##z1482179##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a16 = "#L16#" + 正方箭头 + "#b兑换#d#v1492190##z1492190##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a17 = "#L17#" + 正方箭头 + "#b兑换#d#v1102612##z1102612##l\r\n\r\n需要#rRED币#k#v4310088#10个哦！\r\n";
		var a18 = "#L18#" + 正方箭头 + "#b兑换#d#v2640010##z2640010##l\r\n\r\n需要#rRED币#k#v4310088#80个哦！\r\n";
		var a19 = "#L19#" + 正方箭头 + "#b兑换#d#v2640011##z2640011##l\r\n\r\n需要#rRED币#k#v4310088#80个哦！\r\n";
		var a20 = "#L20#" + 正方箭头 + "#b将#d#v2640011#和#v2640010#免费互相换置#l\r\n";
		//var a21 = "#L21#" + 正方箭头 + "#b兑换#d#v4310059##z4310059##l\r\n\r\n需要#rRED币#k#v4310088#1个哦！\r\n";
		/*var a22 = "#L22#" + 正方箭头 + "#b兑换#d#v2040403##z2040403##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a23 = "#L23#" + 正方箭头 + "#b兑换#d#v2040710##z2040710##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a24 = "#L24#" + 正方箭头 + "#b兑换#d#v2040711##z2040711##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a25 = "#L25#" + 正方箭头 + "#b兑换#d#v2040709##z2040709##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a26 = "#L26#" + 正方箭头 + "#b兑换#d#v2040603##z2040603##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a27 = "#L27#" + 正方箭头 + "#b兑换#d#v2040006##z2040006##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a28 = "#L28#" + 正方箭头 + "#b兑换#d#v2040007##z2040007##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a29 = "#L29#" + 正方箭头 + "#b兑换#d#v2040303##z2040303##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a30 = "#L30#" + 正方箭头 + "#b兑换#d#v2041025##z2041025##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a31 = "#L31#" + 正方箭头 + "#b兑换#d#v2041024##z2041024##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";
		var a32 = "#L32#" + 正方箭头 + "#b兑换#d#v2040807##z2040807##l\r\n\r\n需要#rRED币#k#v4310088#20个哦！\r\n";*/

	    

         cm.sendSimple("骚年，这里是RED特别商店，请问你要用#v4310088#兑换什么RED武器呢？\r\n"+a18+""+a19+""+a20+""+a1+""+a2+""+a3+""+a4+""+a5+""+a6+""+a7+""+a8+""+a9+""+a10+""+a11+""+a12+""+a13+""+a14+""+a15+""+a16+""+a17+"");//
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
                        cm.dispose();

	    } else if (selection == 1) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1402210, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 2) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1302289, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 3) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1312165, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1312165#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 4) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1322215, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1322215#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 5) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1332238, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1332238#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 6) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1372188, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1372188#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 7) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1382222, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1382222#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 8) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1412147, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1412147#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 9) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1422152, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1422152#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 10) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1432178, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1432178#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 11) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1442234, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1442234#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 12) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1452216, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1452216#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 13) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1462204, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1462204#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 14) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1472226, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1472226#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 15) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1482179, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1482179#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 16) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1492190, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1492190#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 17) {
		if (cm.haveItem(4310088,10)) {
			cm.gainItem(4310088, -10);
			cm.gainItem(1102612, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z1102612#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 18) {
		if (cm.haveItem(4310088,40)) {
			cm.gainItem(4310088, -40);
			cm.gainItem(2640010, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED卷轴一个！！！",true).getBytes());
			cm.sendOk("#z2640010#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 19) {
		if (cm.haveItem(4310088,40)) {
			cm.gainItem(4310088, -40);
			cm.gainItem(2640011, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED卷轴一个！！！",true).getBytes());
			cm.sendOk("#z2640011#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 20) {
		if (cm.haveItem(2640011,1)) {
			cm.gainItem(2640011, -1);
			cm.gainItem(2640010, +1);
			cm.sendOk("互换成功");
			cm.dispose();
			return;
		}else if (cm.haveItem(2640010,1)){
			cm.gainItem(2640011, 1);
			cm.gainItem(2640010, -1);
			cm.sendOk("互换成功");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 21) {
		if (cm.haveItem(4310088,1)) {
			cm.gainItem(4310088, -1);
			cm.gainItem(4310059, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了必成币一个！！！",true).getBytes());
			cm.sendOk("兑换成功！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 22) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040403, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z2040403#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 23) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040710, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z2040710#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 24) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040711, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z2040711#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 25) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040709, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z2040709#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 26) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040603, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z2040603#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 27) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040006, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z2040006#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 28) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1113072, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z2040007#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 29) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040303, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z2040303#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 30) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2041025, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z2041025#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 31) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2041024, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z2041024#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
	    } else if (selection == 32) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040807, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED武器兑换" + " : " + cm.getPlayer().getName() +"玩家成功兑换了RED武器一个！！！",true).getBytes());
			cm.sendOk("#z2040807#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你确定有足够的RED币吗？");
			cm.dispose();
			return
		}
            }
        }
    }
}
