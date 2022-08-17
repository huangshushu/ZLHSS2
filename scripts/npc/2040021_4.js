
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
		
	    var a2 = "#L2#" + 正方箭头 + "#b重置#r#v1102828##z1102828# 属性50 攻魔50\r\n\r\n需要1000万冒险币制作\r\n";
	    
            cm.sendSimple("这里是寻宝披风重置哟，请选择：\r\n"+a2+"");
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法合成.");
                        cm.dispose();
          

	   
			    } else if (selection == 2) {
		if (cm.haveItem(1102828,1)&&cm.getMeso()>=10000000) {
			
			cm.gainItem(1102828, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1102828,50,50,50,50,0,0,50,50,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"腰带重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了暴君腰带。O(∩_∩)O哈哈~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "寻宝披风重置" + " : " + "恭喜『" + cm.getChar().getName() + "玩家成功重置恢复了寻宝披风。O(∩_∩)O哈哈~"));
           
			cm.sendOk("#z1102828#已经重置好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 3) {
		if (cm.haveItem(1082544,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+10);
			cm.gainItem(1082544, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1082544,r,r,r,r,0,0,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"腰带重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了暴君腰带。O(∩_∩)O哈哈~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君手套重置" + " : " + "恭喜『" + cm.getChar().getName() + "玩家成功重置了暴君手套。O(∩_∩)O哈哈~"));
           
			cm.sendOk("#z1082544#已经重置好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 4) {
		if (cm.haveItem(1082545,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+10);
			cm.gainItem(1082545, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1082545,r,r,r,r,0,0,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"腰带重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了暴君腰带。O(∩_∩)O哈哈~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君手套重置" + " : " + "恭喜『" + cm.getChar().getName() + "玩家成功重置了暴君手套。O(∩_∩)O哈哈~"));
           
			cm.sendOk("#z1082546#已经重置好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
				}
				} else if (selection == 5) {
		if (cm.haveItem(1082546,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+10);
			cm.gainItem(1082546, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1082546,r,r,r,r,0,0,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"腰带重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了暴君腰带。O(∩_∩)O哈哈~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君手套重置" + " : " + "恭喜『" + cm.getChar().getName() + "玩家成功重置了暴君手套。O(∩_∩)O哈哈~"));
           
			cm.sendOk("#z1082547#已经重置好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
				}
				} else if (selection == 6) {
		if (cm.haveItem(1082547,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+10);
			cm.gainItem(1082547, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1082547,r,r,r,r,0,0,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"腰带重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了暴君腰带。O(∩_∩)O哈哈~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君手套重置" + " : " + "恭喜『" + cm.getChar().getName() + "玩家成功重置了暴君手套。O(∩_∩)O哈哈~"));
           
			cm.sendOk("#z1082548#已经重置好了，去试一下吧");
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