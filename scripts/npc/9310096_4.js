var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
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
		var a0 = "       #L0#"+ 小烟花 +"#r制作#r#v1012171#100级#z1012171#"+ 小烟花 +"#l\r\n\r\n                     #b需要材料如下#l\r\n        90级#v1012170#*1、#v4031456#*500、#v4001266#*15、#v4001129#*50#l\r\n#v4000487#*2000、#v4251402#*20、#v4021009#*3、#v4310014#*200、#v4031138#2500万\r\n";
		var a1 = "       #L1#"+ 小烟花 +"#r制作#r#v1012173#150级#z1012173#"+ 小烟花 +"#l\r\n\r\n                     #b需要材料如下#l\r\n      100级#v1012171#*1、#v4031456#*1000、#v4001266#*20、#v4001129#*100#l\r\n#v4000487#*5000、#v4251402#*50、#v4021009#*5、#v4310014#*400、#v4031138#5000万\r\n";
//		var a2 = "#L2#" + 正方箭头 + "#b制作外星碎片耳环#r#v1032191##z1032191##l\r\n\r\n需要#v1032142#*1、#v4001129#*200、#v4002000#*25、#v4002001#*25、#v4002002#*25、#v4002003#*25、#v4000125#*500、#v4000313#*500、#v4011008#*4、1500万游戏币来制作\r\n";

	    
            cm.sendSimple(""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n           "+ 小烟花 +"#r欢迎来到恐怖鬼娃的伤口制作"+ 小烟花 +"\r\n"+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n"+a0+""+a1+"");
			//cm.sendOk("暂未开放！");
			//cm.dispose();
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法合成.");
                        cm.dispose();
          

	    } else if (selection == 0) {
		if (cm.haveItem(1012170,1)&&cm.haveItem(4031456,500)&&cm.haveItem(4001266,15)&&cm.haveItem(4001129,50)&&cm.haveItem(4000487,2000)&&cm.haveItem(4251402,20)&&cm.haveItem(4021009,3)&&cm.haveItem(4310014,200)&& cm.getMeso() >=25000000) {
			cm.gainItem(1012170,-1);
			cm.gainItem(4031456,-500);
			cm.gainItem(4001266,-15);
			cm.gainItem(4001129,-50);
			cm.gainItem(4000487,-2000);
			cm.gainItem(4251402,-20);
			cm.gainItem(4021009,-3);
			cm.gainItem(4310014,-200);
			cm.gainMeso(-25000000);
			cm.gainItem(1012171,1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"恐怖鬼娃制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了100级恐怖鬼娃的伤口。O(∩_∩)O哈哈~",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
	    } else if (selection == 1) {
		if (cm.haveItem(1012171,1)&&cm.haveItem(4031456,1000)&&cm.haveItem(4001266,20)&&cm.haveItem(4001129,100)&&cm.haveItem(4000487,5000)&&cm.haveItem(4251402,50)&&cm.haveItem(4021009,5)&&cm.haveItem(4310014,400)&& cm.getMeso() >=50000000) {
			cm.gainItem(1012171,-1);
			cm.gainItem(4031456,-1000);
			cm.gainItem(4001266,-20);
			cm.gainItem(4001129,-100);
			cm.gainItem(4000487,-5000);
			cm.gainItem(4251402,-50);
			cm.gainItem(4021009,-5);
			cm.gainItem(4310014,-400);
			cm.gainMeso(-50000000);
			cm.gainItem(1012173,1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"恐怖鬼娃制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了150级恐怖鬼娃的伤口。O(∩_∩)O哈哈~",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 2) {
		if (cm.haveItem(1032142,1)&&cm.haveItem(4001129,200)&&cm.haveItem(4002000,25)&&cm.haveItem(4002001,25)&&cm.haveItem(4002002,25)&&cm.haveItem(4002003,25)&&cm.haveItem(4000125,500)&&cm.haveItem(4000313,500)&&cm.haveItem(4011008,4)&& cm.getMeso() >=15000000) {
			cm.gainItem(1032142,-1);
			cm.gainItem(4001129,-200);
			cm.gainItem(4002000,-25);
			cm.gainItem(4002001,-25);
			cm.gainItem(4002002,-25);
			cm.gainItem(4002003,-25);
			cm.gainItem(4000125,-500);
			cm.gainItem(4000313,-500);
			cm.gainItem(4011008,-4);
			cm.gainMeso(-15000000);
			cm.gainItem(1032191,1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"传承装备制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了外星碎片耳环。O(∩_∩)O哈哈~",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 3) {
		if (cm.haveItem(4031196,20)&&cm.haveItem(4002000,80)&&cm.haveItem(4002002,40)&&cm.haveItem(4002003,40)&&cm.haveItem(1132244,1)&&cm.haveItem(4002001,80)&&cm.haveItem(4001083,1)&&cm.haveItem(4000463,20)&&cm.getMeso()>=30000000) {
			cm.gainItem(4031196, -20);
			cm.gainItem(4002000, -80);
			cm.gainItem(4002001, -80);
			cm.gainItem(4002002, -40);
			cm.gainItem(4002003, -40);
			cm.gainItem(4001083, -1);
			cm.gainItem(4000463, -20);
			cm.gainItem(1132244, -1);
			cm.gainMeso(-30000000);
			cm.gainItem(1132245, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"装备制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了恐怖鬼娃的伤口1。O(∩_∩)O哈哈~",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 4) {
		if (cm.haveItem(4031196,40)&&cm.haveItem(4002000,160)&&cm.haveItem(4002002,80)&&cm.haveItem(4002003,80)&&cm.haveItem(4031456,200)&&cm.haveItem(1132245,1)&&cm.haveItem(4002001,160)&&cm.haveItem(4001083,1)&&cm.haveItem(4001084,1)&&cm.haveItem(4001085,1)&&cm.haveItem(4000463,30)&&cm.getMeso()>=50000000) {
			cm.gainItem(4031196, -40);
			cm.gainItem(4002000, -160);
			cm.gainItem(4002001, -160);
			cm.gainItem(4002002, -80);
			cm.gainItem(4002003, -80);
			cm.gainItem(4031456, -200);
			cm.gainItem(4001083, -1);
			cm.gainItem(4001084, -1);
			cm.gainItem(4001085, -1);
			cm.gainItem(4000463, -30);
			cm.gainItem(1132245, -1);
			cm.gainMeso(-50000000);
			cm.gainItem(1132246, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"装备制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了恐怖鬼娃的伤口1。O(∩_∩)O哈哈~",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
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