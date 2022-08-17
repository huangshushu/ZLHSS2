
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
	    var a2 = "#L2#" + 正方箭头 + "#r#z1122022##l\r\n\r\n"+圆形+"300个#v4001126#和100万冒险币制作\r\n";
	    var a3 = "#L3#" + 正方箭头 + "#r#z1122137##l\r\n\r\n"+圆形+"800个#v4001126#+500万冒险币+#v1122022#制作\r\n";
	    var a4 = "#L4#" + 正方箭头 + "#r#z1122142##l\r\n\r\n"+圆形+"1500个#v4001126#+2000万冒险币+#v1122137#+20个#v4005002#制作\r\n";
	    var a5 = "#L5#" + 正方箭头 + "#r#z1122038##l\r\n\r\n"+圆形+"3000个#v4001126#+5000万冒险币+#v1122142#+30个#v4005002#制作\r\n";
	 

            cm.sendSimple("#d又一个勇士，一个厉害的勇士，就该有属于自己的装备，我可以帮你制作#r装备#d只要你有材料!!!\r\n点券余额数: #r" + cm.getChar().getNX() + "\r\n"+a2+""+a3+""+a4+""+a5+"");

	    } else if (selection == 2) {
		if (cm.haveItem(4001126, 300)&&cm.getMeso()>=1000000) {
			cm.gainItem(4001126, -300);
			cm.gainMeso(-1000000);
			cm.gainItem(1122022, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"冒险之心公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了冒险之心。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1122022#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return;
		}
	    } else if (selection == 3) {//套装
		if (cm.haveItem(4001126, 800)&&cm.getMeso()>=5000000&&cm.haveItem(1122022, 1)) {
			cm.gainItem(4001126, -800);
			cm.gainMeso(-5000000);
			cm.gainItem(1122022, -1);
			cm.gainItem(1122137, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"冒险之心公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了封印的冒险之心。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1122137#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return;
		}
	    } else if (selection == 4) {//手套
		if (cm.haveItem(4001126, 1500)&&cm.getMeso()>=20000000&&cm.haveItem(1122137, 1)&&cm.haveItem(4005002, 20)) {
			cm.gainItem(4001126, -1500);
			cm.gainMeso(-20000000);
			cm.gainItem(1122137, -1);
			cm.gainItem(4005003, -20);
			cm.gainItem(1122142, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"冒险之心公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了苏醒的冒险之心。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1122142#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return;
		}
	    } else if (selection == 5) {//鞋子>
		if (cm.haveItem(4001126, 3000)&&cm.getMeso()>=50000000&&cm.haveItem(1122142, 1)&&cm.haveItem(4005002, 30)) {
			cm.gainItem(4001126, -3000);
			cm.gainMeso(-50000000);
			cm.gainItem(1122142, -1);
			cm.gainItem(4005002, -30);
			cm.gainItem(1122038,0,0,0,0,0,0,50,0,0,0,0,0,0,0);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"冒险之心公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了觉醒的冒险之心。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1122038#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return;
		}
    }
}
}

