
/*var status = 0;
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
		var a5 = "#L5##b重置#r#v1132164##v1132165##v1132166##v1132167##v1132168#攻魔20-40，需500万#l\r\n\r\n";
		var a0 = "#L0##b制作#r#v1132164##z1132164##k（全属性50攻魔25）#l\r\n\r\n                     #r需要材料如下\r\n\r\n#v4000313#*150  #v4031227#*15   #v4002002#*20   #v4011007#*2   #v4031138#2500万\r\n";
		var a1 = "#L1##b制作#r#v1132165##z1132165##k（全属性50攻魔25）#l\r\n\r\n                     #r需要材料如下\r\n\r\n#v4000313#*150  #v4031227#*15   #v4002002#*20   #v4011007#*2   #v4031138#2500万\r\n";
		var a2 = "#L2##b制作#r#v1132166##z1132166##k（全属性50攻魔25）#l\r\n\r\n                     #r需要材料如下\r\n\r\n#v4000313#*150  #v4031227#*15   #v4002002#*20   #v4011007#*2   #v4031138#2500万\r\n";
		var a3 = "#L3##b制作#r#v1132167##z1132167##k（全属性50攻魔25）#l\r\n\r\n                     #r需要材料如下\r\n\r\n#v4000313#*150  #v4031227#*15   #v4002002#*20   #v4011007#*2   #v4031138#2500万\r\n";
		var a4 = "#L4##b制作#r#v1132168##z1132168##k（全属性50攻魔25）#l\r\n\r\n                     #r需要材料如下\r\n\r\n#v4000313#*150  #v4031227#*15   #v4002002#*20   #v4011007#*2   #v4031138#2500万\r\n";

	    
            cm.sendSimple(""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n\t        "+ 小烟花 +"#r欢迎来到赫里希安系列制作"+ 小烟花 +"\r\n"+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n"+a5+""+a0+""+a1+""+a2+""+a3+""+a4+"");

        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法合成.");
                        cm.dispose();
          

	    } else if (selection == 0) {
		if (cm.haveItem(4000313,150)&&cm.haveItem(4031227,15)&&cm.haveItem(4002002,20)&&cm.haveItem(4011007,2)&& cm.getMeso() >=25000000) {
			cm.gainItem(4000313,-150);
			cm.gainItem(4031227,-15);
			cm.gainItem(4002002,-20);
			cm.gainItem(4011007,-2);
			cm.gainMeso(-25000000);
			cm.gainItem(1132164,50,50,50,50,0,0,25,25,28,28,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"赫里希安系列制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了赫里希安精锐战士腰带，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
	    } else if (selection == 1) {
		if (cm.haveItem(4000313,150)&&cm.haveItem(4031227,15)&&cm.haveItem(4002002,20)&&cm.haveItem(4011007,2)&& cm.getMeso() >=25000000) {
			cm.gainItem(4000313,-150);
			cm.gainItem(4031227,-15);
			cm.gainItem(4002002,-20);
			cm.gainItem(4011007,-2);
			cm.gainMeso(-25000000);
			cm.gainItem(1132165,50,50,50,50,0,0,25,25,28,28,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"赫里希安系列制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了赫里希安精锐魔法师腰带，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 2) {
		if (cm.haveItem(4000313,150)&&cm.haveItem(4031227,15)&&cm.haveItem(4002002,20)&&cm.haveItem(4011007,2)&& cm.getMeso() >=25000000) {
			cm.gainItem(4000313,-150);
			cm.gainItem(4031227,-15);
			cm.gainItem(4002002,-20);
			cm.gainItem(4011007,-2);
			cm.gainMeso(-25000000);
			cm.gainItem(1132166,50,50,50,50,0,0,25,25,28,28,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"赫里希安系列制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了赫里希安精锐弓箭手腰带，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 3) {
		if (cm.haveItem(4000313,150)&&cm.haveItem(4031227,15)&&cm.haveItem(4002002,20)&&cm.haveItem(4011007,2)&& cm.getMeso() >=25000000) {
			cm.gainItem(4000313,-150);
			cm.gainItem(4031227,-15);
			cm.gainItem(4002002,-20);
			cm.gainItem(4011007,-2);
			cm.gainMeso(-25000000);
			cm.gainItem(1132167,50,50,50,50,0,0,25,25,28,28,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"赫里希安系列制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了赫里希安精锐飞侠腰带，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 4) {
		if (cm.haveItem(4000313,150)&&cm.haveItem(4031227,15)&&cm.haveItem(4002002,20)&&cm.haveItem(4011007,2)&& cm.getMeso() >=25000000) {
			cm.gainItem(4000313,-150);
			cm.gainItem(4031227,-15);
			cm.gainItem(4002002,-20);
			cm.gainItem(4011007,-2);
			cm.gainMeso(-25000000);
			cm.gainItem(1132168,50,50,50,50,0,0,25,25,28,28,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"赫里希安系列制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了赫里希安精锐海盗腰带，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 5) {
			var a6 = "#L6##b重置#r#v1132164##z1132164##k攻魔20-40#l\r\n\r\n";
			var a7 = "#L7##b重置#r#v1132165##z1132165##k攻魔20-40#l\r\n\r\n";
			var a8 = "#L8##b重置#r#v1132166##z1132166##k攻魔20-40#l\r\n\r\n";
			var a9 = "#L9##b重置#r#v1132167##z1132167##k攻魔20-40#l\r\n\r\n";
			var a10 = "#L10##b重置#r#v1132168##z1132168##k攻魔20-40#l\r\n\r\n";

	    
            cm.sendSimple(""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n\t          "+ 小烟花 +"#r欢迎来到赫里希安系列重置"+ 小烟花 +"\r\n"+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n"+a6+""+a7+""+a8+""+a9+""+a10+"");
		}
	}else if (status == 2) {
		if (selection == 6) {
			if (cm.haveItem(1132164,1)&&cm.getMeso()>=5000000) {
				var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(1132164, -1);
				cm.gainMeso(-5000000);
				cm.gainItem(1132164,50,50,50,50,0,0,r,r,28,28,0,0,0,0);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"赫里希安系列重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了赫里希安精锐战士腰带，大家恭喜他/她",true).getBytes());
				cm.sendOk("#z1132164#已经重置好了，去试一下吧");
				cm.dispose();
				return;
			} else {
				cm.sendOk("你的材料不足!!!");
				cm.dispose();
				return
			}
        }else if (selection == 7) {
			if (cm.haveItem(1132165,1)&&cm.getMeso()>=5000000) {
				var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(1132165, -1);
				cm.gainMeso(-5000000);
				cm.gainItem(1132165,50,50,50,50,0,0,r,r,28,28,0,0,0,0);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"赫里希安系列重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了赫里希安精锐魔法师腰带，大家恭喜他/她",true).getBytes());
				cm.sendOk("#z1132165#已经重置好了，去试一下吧");
				cm.dispose();
				return;
			} else {
				cm.sendOk("你的材料不足!!!");
				cm.dispose();
				return
			}
        }else if (selection == 8) {
			if (cm.haveItem(1132166,1)&&cm.getMeso()>=5000000) {
				var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(1132166, -1);
				cm.gainMeso(-5000000);
				cm.gainItem(1132166,50,50,50,50,0,0,r,r,28,28,0,0,0,0);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"赫里希安系列重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了赫里希安精锐弓箭手腰带，大家恭喜他/她",true).getBytes());
				cm.sendOk("#z1132166#已经重置好了，去试一下吧");
				cm.dispose();
				return;
			} else {
				cm.sendOk("你的材料不足!!!");
				cm.dispose();
				return
			}
        }else if (selection == 9) {
			if (cm.haveItem(1132167,1)&&cm.getMeso()>=5000000) {
				var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(1132167, -1);
				cm.gainMeso(-5000000);
				cm.gainItem(1132167,50,50,50,50,0,0,r,r,28,28,0,0,0,0);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"赫里希安系列重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了赫里希安精锐飞侠腰带，大家恭喜他/她",true).getBytes());
				cm.sendOk("#z1132167#已经重置好了，去试一下吧");
				cm.dispose();
				return;
			} else {
				cm.sendOk("你的材料不足!!!");
				cm.dispose();
				return
			}
        }else if (selection == 10) {
			if (cm.haveItem(1132168,1)&&cm.getMeso()>=5000000) {
				var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(1132168, -1);
				cm.gainMeso(-5000000);
				cm.gainItem(1132168,50,50,50,50,0,0,r,r,28,28,0,0,0,0);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"赫里希安系列重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了赫里希安精锐海盗腰带，大家恭喜他/她",true).getBytes());
				cm.sendOk("#z1132168#已经重置好了，去试一下吧");
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