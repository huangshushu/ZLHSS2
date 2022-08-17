
var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 忠告 = "#k温馨提示：任何非法程序、外挂封号处理.封杀侥幸心理.";
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
		var a1 = "#L1#" + 正方箭头 + "#b升级全属性40攻魔10#r#v1142515##v1142515##l\r\n\r\n需要20个#z4000463#、2000万冒险币制作\r\n";
	    var a2 = "#L2#" + 正方箭头 + "#b升级全属性50攻魔15#r#v1142480##v1142480##l\r\n\r\n需要30个#z4000463#、3000万冒险币制作\r\n";
	    var a3 = "#L3#" + 正方箭头 + "#b升级全属性70攻魔30#r#v1142349##v1142349##l\r\n\r\n需要40个#z4000463#、5000万冒险币制作\r\n";
	    var a4 = "#L4#" + 正方箭头 + "#b升级全属性100攻魔50#r#v1142498##v1142498##l\r\n\r\n需要50个#z4000463#、7000万冒险币制作\r\n";
	    var a5 = "#L5#" + 正方箭头 + "#b升级全属性150攻魔80#r#v1142541##v1142541##l\r\n\r\n需要60个#z4000463#、1亿冒险币制作\r\n";
	    

            cm.sendSimple("这里是王座勋章#v1142210#、升级哟，请选择：\r\n" + a1 + ""+a2+""+a3+""+a4+""+a5+"");
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法合成.");
                        cm.dispose();
          

	    } else if (selection == 1) {
		if (cm.haveItem(1142210,1)&&cm.haveItem(4000463,20)&&cm.getMeso()>=10000000) {
			cm.gainItem(1142210, -1);
			cm.gainItem(4000463, -20);
			cm.gainMeso(-20000000);
			cm.gainItem(1142515,40,40,40,40,100,40,10,10,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"礼包勋章制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了引领风暴的人。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1142515#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 2) {
		if (cm.haveItem(1142515,1)&&cm.haveItem(4000463,30)&&cm.getMeso()>=30000000) {
			cm.gainItem(1142515, -1);
			cm.gainItem(4000463, -30);
			cm.gainMeso(-30000000);
			cm.gainItem(1142480,50,50,50,50,200,200,15,15,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"礼包勋章制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了到达极意的人。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1142210#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 3) {
		if (cm.haveItem(1142480,1)&&cm.haveItem(4000463,40)&&cm.getMeso()>=50000000) {
			cm.gainItem(1142480, -1);
			cm.gainItem(4000463, -40);
			cm.gainMeso(-50000000);
			cm.gainItem(1142349,70,70,70,70,300,300,30,30,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"礼包勋章制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了传说主人。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1142210#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 4) {
		if (cm.haveItem(1142349,1)&&cm.haveItem(4000463,50)&&cm.getMeso()>=70000000) {
			cm.gainItem(1142349, -1);
			cm.gainItem(4000463, -50);
			cm.gainMeso(-70000000);
			cm.gainItem(1142498,100,100,100,100,400,400,50,50,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"礼包勋章制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了战场之星。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1142210#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
			}
			    } else if (selection == 5) {
		if (cm.haveItem(1142498,1)&&cm.haveItem(4000463,60)&&cm.getMeso()>=100000000) {
			cm.gainItem(1142498, -1);
			cm.gainItem(4000463, -60);
			cm.gainMeso(-100000000);
			cm.gainItem(1142541,150,150,150,150,500,500,80,80,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"礼包勋章制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了最强勋章。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1142541#已经制作好了，去试一下吧");
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
