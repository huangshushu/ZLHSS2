
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
		//var a1 = "#L1#" + 正方箭头 + "#b制作全属性30攻魔30#r#v1142574##l\r\n\r\n需要1个#z4140103#、100万冒险币制作\r\n";
	    var a2 = "#L2#" + 正方箭头 + "#b升级全属性40攻魔40#r#v1142574##l\r\n\r\n需要10个#z4000463#、3000万冒险币制作\r\n";
	    var a3 = "#L3#" + 正方箭头 + "#b升级全属性50攻魔50#r#v1142574##l\r\n\r\n需要30个#z4000463#、5000万冒险币制作\r\n";
	    var a4 = "#L4#" + 正方箭头 + "#b升级全属性100攻魔70#r#v1142574##l\r\n\r\n需要50个#z4000463#、7000万冒险币制作\r\n";
	    //var a5 = "#L5#" + 正方箭头 + "";
	    

            cm.sendSimple("这里是王座勋章、升级哟，请选择：\r\n"+a2+""+a3+""+a4+"");
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法合成.");
                        cm.dispose();
          

	    } else if (selection == 1) {
		if (cm.haveItem(4140103,1)&&cm.getMeso()>=10) {
			cm.getPlayer().setBossLog("勋章1",1,1)
			cm.gainNX(+50000);
			cm.gainDY(+100000);
			cm.gainItem(4140103, -1);
			//cm.gainItem(3700050, 1);
			//cm.gainMeso(-1000000);
			cm.gainItem(1142574,30,30,30,30,100,100,30,30,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"礼包勋章制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了女生勋章。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1142574#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 2) {
		if (cm.haveItem(1142574,1)&&cm.haveItem(4000463,10)&&cm.getMeso()>=30000000) {
			cm.getPlayer().setBossLog("勋章2",1,1)
			cm.gainItem(1142574, -1);
			//cm.gainItem(3700050, -1);
			//cm.gainItem(3700051, 1);
		    cm.gainItem(4000463, -10);
			cm.gainMeso(-30000000);
			cm.gainItem(1142574,40,40,40,40,200,200,40,40,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"礼包勋章制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了女生勋章。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1142574#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 3) {
		if (cm.haveItem(1142574,1)&&cm.getPlayer().getBossLog("勋章2",1) == 1&&cm.haveItem(4000463,30)&&cm.getMeso()>=50000000) {
			cm.getPlayer().setBossLog("勋章3",1,1)
			cm.gainItem(1142574, -1);
			//cm.gainItem(3700051, -1);
			//cm.gainItem(3700052, 1);
			cm.gainItem(4000463, -30);
			cm.gainMeso(-50000000);
			cm.gainItem(1142574,50,50,50,50,300,300,50,50,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"礼包勋章制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了女生勋章。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1142210#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 4) {
		if (cm.haveItem(1142574,1)&&cm.getPlayer().getBossLog("勋章3",1) == 1&&cm.haveItem(4000463,50)&&cm.getMeso()>=70000000) {
			cm.getPlayer().setBossLog("勋章4",1,1)
			cm.gainItem(1142574, -1);
			cm.gainItem(3700052, -1);
			cm.gainItem(3700053, 1);
			cm.gainItem(4000463, -50);
			cm.gainMeso(-70000000);
			cm.gainItem(1142574,100,100,100,100,400,400,70,70,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"礼包勋章制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了女生勋章。O(∩_∩)O~",true).getBytes());
			cm.sendOk("#z1142210#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
			}
			    } else if (selection == 5) {
		if (cm.haveItem(1142574,1)&&cm.haveItem(4000463,60)&&cm.getPlayer().getBossLog("勋章3",1) == 1&&cm.getMeso()>=100000000) {
			cm.getPlayer().setBossLog("勋章5",1,1)
			cm.gainItem(1142574, -1);
			
			
			cm.gainItem(4000463, -60);
			cm.gainMeso(-100000000);
			cm.gainItem(1142574,150,150,150,150,500,500,80,80,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"礼包勋章制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了女生勋章。O(∩_∩)O~",true).getBytes());
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
