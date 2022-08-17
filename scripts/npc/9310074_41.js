var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 忠告 = "#k温馨提示：任何非法程序和外挂封号处理.封杀侥幸心理.";
var ronghe = 0;
var snew0="";
var snew1="R级";
var snew2="SR级";
var snew3="SSR级";
var snew4="UR级";
var rand=Math.floor(Math.random()*20);
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
			var a0 = "#L0##b"+小烟花+"#v4310036##r*20#b融合#rR级"+小烟花+"#l   #L1##b"+小烟花+"#v4310038##r*20#b融合#rSR级"+小烟花+"#l\r\n\r\n";
			var a1 = "#L2##b"+小烟花+"#v4310027##r*20#b融合#rSSR级"+小烟花+"#l #L3##b"+小烟花+"#v4310108##r*20#b融合#rUR级"+小烟花+"#l\r\n";		
            cm.sendSimple(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n           #r欢迎来到月月冒险岛时装附魔币融合#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n  #r注意：请将要融合的无属性时装放在第1格，成功率100%\r\n\r\n"+a0+""+a1+"");

        } 
		else if (status == 1) {		
			if (selection == 0) {
				var bb = cm.getInventory(1).getItem(1);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var statup = new java.util.ArrayList();
				if (bb == null) {
					cm.sendOk("#r抱歉，你背包的装备栏第1格没有时装，请重新确认！");
					cm.dispose();
				}
				else if (cm.getInventory(1).isFull()){
					cm.sendOk("#b请确保你的背包装备栏空间大于1格，否则无法进行融合！");
					cm.dispose();
				}
				else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
					cm.sendOk("#r抱歉，有时间限制的装备不能进行强化！");
					cm.dispose();
				}
				else if (!ii.isCash(bb.getItemId())==true) {
					cm.sendOk("#r抱歉，你背包装备栏第1格的物品并不是时装，请重新确认！");
					cm.dispose();
				}
				else {
					ronghe  = 1;
					var textz = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
					textz += "              #r欢迎来到月月冒险岛时装融合#k\r\n";
					textz += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
					textz += "        #b你是否确定要使用#v4310036##r*20#b融合1件#rR级时装#k\r\n";
					cm.sendYesNo(textz);
				}
			} 
			else if (selection == 1) {
				var bb = cm.getInventory(1).getItem(1);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var statup = new java.util.ArrayList();
				if (bb == null) {
					cm.sendOk("#r抱歉，你背包的装备栏第1格没有时装，请重新确认！");
					cm.dispose();
				}
				else if (cm.getInventory(1).isFull()){
					cm.sendOk("#b请确保你的背包装备栏空间大于1格，否则无法进行融合！");
					cm.dispose();
				}
				else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
					cm.sendOk("#r抱歉，有时间限制的装备不能进行强化！");
					cm.dispose();
				}
				else if (!ii.isCash(bb.getItemId())==true) {
					cm.sendOk("#r抱歉，你背包装备栏第1格的物品并不是时装，请重新确认！");
					cm.dispose();
				}
				else {
					ronghe  = 2;
					var textz = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
					textz += "              #r欢迎来到月月冒险岛时装融合#k\r\n";
					textz += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
					textz += "        #b你是否确定要使用#v4310038##r*20#b融合1件#rSR级时装#k\r\n";
					cm.sendYesNo(textz);
				}
			}
			else if (selection == 2){
				var bb = cm.getInventory(1).getItem(1);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var statup = new java.util.ArrayList();
				if (bb == null) {
					cm.sendOk("#r抱歉，你背包的装备栏第1格没有时装，请重新确认！");
					cm.dispose();
				}
				else if (cm.getInventory(1).isFull()){
					cm.sendOk("#b请确保你的背包装备栏空间大于1格，否则无法进行融合！");
					cm.dispose();
				}
				else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
					cm.sendOk("#r抱歉，有时间限制的装备不能进行强化！");
					cm.dispose();
				}
				else if (!ii.isCash(bb.getItemId())==true) {
					cm.sendOk("#r抱歉，你背包装备栏第1格的物品并不是时装，请重新确认！");
					cm.dispose();
				}
				else {
					ronghe  = 3;
					var textz = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
					textz += "              #r欢迎来到月月冒险岛时装融合#k\r\n";
					textz += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
					textz += "        #b你是否确定要使用#v4310027##r*20#b融合1件#rSSR级时装#k\r\n";
					cm.sendYesNo(textz);
				}	
			}
			else if (selection == 3){
				var bb = cm.getInventory(1).getItem(1);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var statup = new java.util.ArrayList();
				if (bb == null) {
					cm.sendOk("#r抱歉，你背包的装备栏第1格没有时装，请重新确认！");
					cm.dispose();
				}
				else if (cm.getInventory(1).isFull()){
					cm.sendOk("#b请确保你的背包装备栏空间大于1格，否则无法进行融合！");
					cm.dispose();
				}
				else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
					cm.sendOk("#r抱歉，有时间限制的装备不能进行强化！");
					cm.dispose();
				}
				else if (!ii.isCash(bb.getItemId())==true) {
					cm.sendOk("#r抱歉，你背包装备栏第1格的物品并不是时装，请重新确认！");
					cm.dispose();
				}
				else {
					ronghe  = 4;
					var textz = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
					textz += "              #r欢迎来到月月冒险岛时装融合#k\r\n";
					textz += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
					textz += "        #b你是否确定要使用#v4310108##r*20#b融合1件#rUR级时装#k\r\n";
					cm.sendYesNo(textz);
				}	
			}
        }
		else if (status == 2) {
			if (ronghe == 1) {
				var dd = cm.getInventory(1).getItem(1).getItemId();
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() == snew0){//检查时装级别
					if(cm.haveItem(4310036, 20)) {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var a=item.getItemId();
						cm.gainItem(4310036, -20);
						cm.gainItem(dd,-1);
						item.setOwner(snew1);
						item.setStr(item.getStr()*1+15);
						item.setDex(item.getDex()*1+15);
						item.setInt(item.getInt()*1+15);
						item.setLuk(item.getLuk()*1+15);
						item.setMatk(item.getMatk()*1+0);
						item.setWatk(item.getWatk()*1+0);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "时装附魔币融合" + " : " + "恭喜"+ cm.getChar().getName() +"成功使用R时装附魔币*20融合出了1件"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"时装，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b融合提升至#r"+snew1+"！");
						cm.dispose();
					}
					else{
						cm.sendOk("#b很遗憾，你背包内没有足够的#v4310036#，请确认！");
						cm.dispose();
					}
				}
				else {
					cm.sendOk("#b你背包装备栏第一格的时装不是无属性时装，请仔细确认！");
					cm.dispose();
				}
			}
			else if (ronghe == 2) {
				var dd = cm.getInventory(1).getItem(1).getItemId();
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() == snew0){//检查时装级别
					if(cm.haveItem(4310038, 20)) {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var a=item.getItemId();
						cm.gainItem(4310038, -20);
						cm.gainItem(dd,-1);
						item.setOwner(snew2);
						item.setStr(item.getStr()*1+30);
						item.setDex(item.getDex()*1+30);
						item.setInt(item.getInt()*1+30);
						item.setLuk(item.getLuk()*1+30);
						item.setMatk(item.getMatk()*1+0);
						item.setWatk(item.getWatk()*1+0);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "时装附魔币融合" + " : " + "恭喜"+ cm.getChar().getName() +"成功使用SR时装附魔币*20融合出了1件"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"时装，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b融合提升至#r"+snew2+"！");
						cm.dispose();
					}
					else{
						cm.sendOk("#b很遗憾，你背包内没有足够的#v4310038#，请确认！");
						cm.dispose();
					}
				}
				else {
					cm.sendOk("#b你背包装备栏第一格的时装不是无级别时装，请仔细确认！");
					cm.dispose();
				}
			}
			else if (ronghe == 3) {
				var dd = cm.getInventory(1).getItem(1).getItemId();
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() == snew0){//检查时装级别
					if(cm.haveItem(4310027, 20)) {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var a=item.getItemId();
						cm.gainItem(4310027, -20);
						cm.gainItem(dd,-1);
						item.setOwner(snew3);
						item.setStr(item.getStr()*1+50);
						item.setDex(item.getDex()*1+50);
						item.setInt(item.getInt()*1+50);
						item.setLuk(item.getLuk()*1+50);
						item.setMatk(item.getMatk()*1+0);
						item.setWatk(item.getWatk()*1+0);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "时装附魔币融合" + " : " + "恭喜"+ cm.getChar().getName() +"成功使用SSR时装附魔币*20融合出了1件"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"时装，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b融合提升至#r"+snew3+"！");
						cm.dispose();
					}
					else{
						cm.sendOk("#b很遗憾，你背包内没有足够的#v4310027#，请确认！");
						cm.dispose();
					}
				}
				else {
					cm.sendOk("#b你背包装备栏第一格的时装不是无属性时装，请仔细确认！");
					cm.dispose();
				}
			}
			else if (ronghe == 4) {
				var dd = cm.getInventory(1).getItem(1).getItemId();
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() == snew0){//检查时装级别
					if(cm.haveItem(4310108, 20)) {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var a=item.getItemId();
						cm.gainItem(4310108, -20);
						cm.gainItem(dd,-1);
						item.setOwner(snew4);
						item.setStr(item.getStr()*1+88);
						item.setDex(item.getDex()*1+88);
				     	item.setInt(item.getInt()*1+88);
						item.setLuk(item.getLuk()*1+88);
						item.setMatk(item.getMatk()*1+50);
						item.setWatk(item.getWatk()*1+50);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "时装附魔币融合" + " : " + "恭喜"+ cm.getChar().getName() +"成功使用UR时装附魔币*20融合出了1件"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"时装，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b融合提升至#r"+snew4+"！");
						cm.dispose();
					}
					else{
						cm.sendOk("#b很遗憾，你背包内没有足够的#v4310108#，请确认！");
						cm.dispose();
					}
				}
				else {
					cm.sendOk("#b你背包装备栏第一格的时装不是无属性时装，请仔细确认！");
					cm.dispose();
				}
			}
		}
    }
}