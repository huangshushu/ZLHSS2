
var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
v1ar 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
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
		
	    var a2 = "#L2#" + 正方箭头 + "#b重置#r#v1072743##z1072743#攻魔20-40 需要600万冒险币制作\r\n";
	    var a3 = "#L3#" + 正方箭头 + "#b重置#r#v1072744##z1072744#攻魔20-40 需要600万冒险币制作\r\n";
	    var a4 = "#L4#" + 正方箭头 + "#b重置#r#v1072745##z1072745#攻魔20-40 需要600万冒险币制作\r\n";
	    var a5 = "#L5#" + 正方箭头 + "#b重置#r#v1072746##z1072746#攻魔20-40 需要600万冒险币制作\r\n";
        var a6 = "#L6#" + 正方箭头 + "#b重置#r#v1072747##z1072747#攻魔20-40 需要600万冒险币制作\r\n";
            cm.sendSimple("这里是腰带重置哟，请选择：\r\n"+a2+""+a3+""+a4+""+a5+""+a6+"");
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法合成.");
                        cm.dispose();
          

	    } else if (selection == 1) {
		if (cm.haveItem(1132036,1)&&cm.haveItem(4031227,10)&&cm.haveItem(4002002,10)&&cm.getMeso()>=5000000) {
			cm.gainItem(4000313, -50);
			cm.gainItem(4031227, -10);
			cm.gainItem(4002002, -10);
			cm.gainMeso(-1000000);
			cm.gainItem(1132036,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"腰带制作" + " : " + cm.getPlayer().getName() +"玩家成功重置了暴君腰带材料。O(∩_∩)O哈哈~",true).getBytes());
			cm.sendOk("#z1132036#已经重置好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 2) {
		if (cm.haveItem(1072743,1)&&cm.getMeso()>=6000000) {
			var r = Math.ceil(Math.random() * 20+20);
			cm.gainItem(1072743, -1);
			cm.gainMeso(-6000000);
			cm.gainItem(1072743,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"腰带重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了暴君腰带。O(∩_∩)O哈哈~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "鞋子重置" + " : " + "恭喜『" + cm.getChar().getName() + "玩家成功重置了暴君鞋子。O(∩_∩)O哈哈~"));
           
			cm.sendOk("#z1072743#已经重置好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 3) {
		if (cm.haveItem(1072744,1)&&cm.getMeso()>=6000000) {
			var r = Math.ceil(Math.random() * 20+20);
			cm.gainItem(1072744, -1);
			cm.gainMeso(-6000000);
			cm.gainItem(1072744,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"腰带重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了暴君腰带。O(∩_∩)O哈哈~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "鞋子重置" + " : " + "恭喜『" + cm.getChar().getName() + "玩家成功重置了暴君鞋子。O(∩_∩)O哈哈~"));
           
			cm.sendOk("#z1072744#已经重置好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 4) {
		if (cm.haveItem(1072745,1)&&cm.getMeso()>=6000000) {
			var r = Math.ceil(Math.random() * 20+20);
			cm.gainItem(1072745, -1);
			cm.gainMeso(-6000000);
			cm.gainItem(1072745,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"腰带重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了暴君腰带。O(∩_∩)O哈哈~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "鞋子重置" + " : " + "恭喜『" + cm.getChar().getName() + "玩家成功重置了暴君鞋子。O(∩_∩)O哈哈~"));
           
			cm.sendOk("#z1072745#已经重置好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
				}
				} else if (selection == 5) {
		if (cm.haveItem(1072746,1)&&cm.getMeso()>=6000000) {
			var r = Math.ceil(Math.random() * 20+20);
			cm.gainItem(1072746, -1);
			cm.gainMeso(-6000000);
			cm.gainItem(1072746,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"腰带重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了暴君腰带。O(∩_∩)O哈哈~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "鞋子重置" + " : " + "恭喜『" + cm.getChar().getName() + "玩家成功重置了暴君鞋子。O(∩_∩)O哈哈~"));
           
			cm.sendOk("#z1072746#已经重置好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
				}
				} else if (selection == 6) {
		if (cm.haveItem(1072747,1)&&cm.getMeso()>=6000000) {
			var r = Math.ceil(Math.random() * 20+20);
			cm.gainItem(1072747, -1);
			cm.gainMeso(-6000000);
			cm.gainItem(1072747,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"腰带重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了暴君腰带。O(∩_∩)O哈哈~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "鞋子重置" + " : " + "恭喜『" + cm.getChar().getName() + "玩家成功重置了暴君鞋子。O(∩_∩)O哈哈~"));
           
			cm.sendOk("#z1072747#已经重置好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
				}
            }
        }
    }
}