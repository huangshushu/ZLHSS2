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
		var a1 = "#L2#" + 正方箭头 + "#b制作全属性10攻魔10#r#v1112758#\r\n需要#v4031456#*200、100万冒险币\r\n\r\n";
	    var a2 = "#L3#" + 正方箭头 + "#b升级全属性20攻魔20#r#v1112759#\r\n需要#v4031456#*500、#v1112758#*1、5百万冒险币\r\n\r\n";
	    var a3 = "#L4#" + 正方箭头 + "#b升级全属性30攻魔30#r#v1112760#\r\n需要#v4031456#*800、#v1112759#*1、1千万冒险币\r\n\r\n";
	    var a4 = "#L5#" + 正方箭头 + "#b升级全属性50攻魔50#r#v1113170#\r\n需要#v4031456#*1500、#v1112760#*1、3千万冒险币\r\n\r\n";

       // var a7 = "#L7#" + 正方箭头 + "#e#b兑换#v1113076#的强化卷#v2041132# 需要200个#v4031456#制作\r\n";
       
            cm.sendSimple("这里是副本戒指、升级哟，请选择：\r\n" + a1 + ""+a2+""+a3+""+a4+"");
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法合成.");
                        cm.dispose();
          

	    } else if (selection == 2) {
		if (cm.haveItem(4031456,200)&&cm.getMeso()>=1000000) {
			cm.gainItem(4031456, -200);
			cm.gainMeso(-1000000);
			cm.gainItem(1112758,10,10,10,10,50,50,10,10,10,10,10,10,10,10);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"外星人之戒升级公告" + " : " + cm.getPlayer().getName() +"玩家成功升级外星人之戒1级。O(∩_∩)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "副本之戒公告" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功 升级 副本之戒！"));
			
			cm.sendOk("#z1112758#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 3) {
		if (cm.haveItem(1112758,1)&&cm.haveItem(4031456,500)&&cm.getMeso()>=5000000) {
			cm.gainItem(1112758, -1);
			cm.gainItem(4031456, -500);
			cm.gainMeso(-5000000);
			cm.gainItem(1112759,20,20,20,20,100,100,20,20,10,10,10,10,10,10);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"外星人之戒升级公告" + " : " + cm.getPlayer().getName() +"玩家成功升级外星人之戒2级。O(∩_∩)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "副本之戒公告" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功 升级 副本之戒！"));
			
			cm.sendOk("#z1112759#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 4) {
		if (cm.haveItem(1112759,1)&&cm.haveItem(4031456,800)&&cm.getMeso()>=10000000) {
			cm.gainItem(1112759, -1);
			cm.gainItem(4031456, -800);
			cm.gainMeso(-10000000);
			cm.gainItem(1112760,30,30,30,30,150,150,30,30,10,10,10,10,10,10);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"外星人之戒升级公告" + " : " + cm.getPlayer().getName() +"玩家成功升级外星人之戒3级。O(∩_∩)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "副本之戒公告" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功 升级 副本之戒！"));
			
			cm.sendOk("#z1112760#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 5) {
		if (cm.haveItem(1112760,1)&&cm.haveItem(4031456,1500)&&cm.getMeso()>=30000000) {
			cm.gainItem(1112760, -1);
			cm.gainItem(4031456, -1500);
			cm.gainMeso(-30000000);
			cm.gainItem(1113170,50,50,50,50,200,200,50,50,10,10,10,10,10,10);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"外星人之戒升级公告" + " : " + cm.getPlayer().getName() +"玩家成功升级外星人之戒4级。O(∩_∩)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "副本之戒公告" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功 升级 副本之戒！"));
			
			
		    cm.sendOk("#z1113170#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
			}
			    } else if (selection == 6) {
		if (cm.haveItem(1113071,1)&&cm.haveItem(4031456,500)&&cm.getMeso()>=50000000) {
			cm.gainItem(1113071, -1);
			cm.gainItem(4031456, -500);
			cm.gainMeso(-50000000);
			cm.gainItem(1113076,50,50,50,50,300,300,50,50,10,10,10,10,10,10);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"外星人之戒升级公告" + " : " + cm.getPlayer().getName() +"玩家成功升级外星人之戒终极碎片。O(∩_∩)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "副本之戒公告" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功 升级 副本之戒！"));
			
			cm.sendOk("#z1113076#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
			}
			    } else if (selection == 1) {
		if (cm.haveItem(4031456,100)&&cm.getMeso()>=1000000) {
			cm.gainItem(4031456, -100);
			cm.gainMeso(-1000000);
			cm.gainItem(1112405,5,5,5,5,50,50,5,5,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "副本之戒制作公告" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功 制作 副本之戒！"));
			cm.sendOk("#z1112405#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
			}	
			    } else if (selection == 7) {
		if (cm.haveItem(4031456,200)&&cm.getMeso()>=500000) {
			cm.gainItem(4031456, -200);
			cm.gainMeso(-500000);
			cm.gainItem(2041132,1);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"外星人之戒升级公告" + " : " + cm.getPlayer().getName() +"玩家成功升级外星人之戒终极碎片。O(∩_∩)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "副本之戒公告" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功 兑换 副本之戒强化卷轴 奖励！"));
			
			cm.sendOk("#z3992017#已经制作好了，去试一下吧");
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
