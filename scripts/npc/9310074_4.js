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
			var a0 = "               #L0##r"+小烟花+"时装融合说明"+小烟花+"#l\r\n\r\n";
			var a1 = "               #L1##b"+小烟花+"进行时装融合"+小烟花+"#l\r\n\r\n";
			var a2 = "              #L2##b"+小烟花+"时装附魔币融合"+小烟花+"#l\r\n";			
            cm.sendSimple(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n              #r欢迎来到月月冒险岛时装融合#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#r注意：请将要融合的时装放在装备栏第1，2格，否则无法进行\r\n\r\n"+a0+""+a1+""+a2+"");

        } 
		else if (status == 1) {		
			if (selection == 0) {
				var textz = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
					textz += "            #r欢迎来到月月冒险岛时装融合说明#k\r\n";
					textz += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
					textz += " #b本服时装共分5个级别：#r无级，R级，SR级，SSR级，UR级\r\n\r\n";
					textz += "#b商城购买时装为#r无级#b，#r2件无级#b可融合#r1件R级#b，以此类推\r\n\r\n";
					textz += "      #b融合有一定的成功率，#r融合级别越高成功率越低\r\n\r\n";
					textz += "    #b融合成功时，时装级别提升，并获得#r对应级别的属性\r\n\r\n";
					textz += "#b融合失败则只消耗第2件时装，并获得#r对应级别的时装附魔币\r\n\r\n";
					textz += " #b收集一定数量附魔币，可将#r1件有属性时装#b升级到#r对应级别\r\n\r\n";
					textz += "   #b融合级别     成功率     时装属性      失败时获得\r\n";
					textz += " #r无属性融合R级   70%    增加四维15     #v4310036##k\r\n";
					textz += " #rR级融合SR级     50%    增加四维30      #v4310038##k\r\n";
					textz += " #rSR级融合SSR级   30%    增加四维50     #v4310027##k\r\n";
					textz += " #rSSR级融合UR级   15%    增加四维88，攻魔50      #v4310108##k\r\n";
				cm.sendOk(textz);
				cm.dispose();
				return
			} 
			else if (selection == 1) {
				var bb = cm.getInventory(1).getItem(1);
				var cc = cm.getInventory(1).getItem(2);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var statup = new java.util.ArrayList();
				if (bb == null || cc == null) {
					cm.sendOk("#r抱歉，你背包的装备栏第1或第2格没有时装，请重新确认！");
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
				else if (!ii.isCash(bb.getItemId())==true || !ii.isCash(cc.getItemId())==true) {
					cm.sendOk("#r抱歉，你背包装备栏第1或第2格的物品并不是时装，请重新确认！");
					cm.dispose();
				}
				else {
					ronghe  = 1;
					var textz = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
					textz += "              #r欢迎来到月月冒险岛时装融合#k\r\n";
					textz += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
					textz += "   #b不同融合级别#r成功率及#r消耗点卷数量#b不同，请注意确认\r\n\r\n";
					textz += "   #b融合级别     成功率     时装属性      每次消耗点卷\r\n";
					textz += " #r无级融合R级   70%    四维15，攻魔0       4000#k\r\n";
					textz += " #rR级融合SR级     50%    四维30，攻魔0       8000#k\r\n";
					textz += " #rSR级融合SSR级   30%    四维50，攻魔0       12000#k\r\n";
					textz += " #rSSR级融合UR级   15%    四维88，攻魔50       16000#k\r\n\r\n";
					textz += "                 #b你是否确定要进行融合#k\r\n";
					cm.sendYesNo(textz);
				}
			}
			else if (selection == 2){
				cm.openNpc(9310074,41);	
			}
        }
		else if (status == 2) {
			if (ronghe == 1) {
				var aa = cm.getInventory(1).getItem(2).getItemId();
				var dd = cm.getInventory(1).getItem(1).getItemId();
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() == snew0 && cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(2).getOwner() == snew0){//检查时装级别
					if(cm.getPlayer().getCSPoints(1)>=4000) {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var a=item.getItemId();
						cm.gainNX(-4000);
						if(rand>=7){
							cm.gainItem(aa,-1);
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
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "时装融合" + " : " + "恭喜"+ cm.getChar().getName() +"成功将2件无属性时装融合成了1件"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"时装，他/她的战斗力获得大幅提升！"));
							cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b融合提升至#r"+snew1+"！");
							cm.dispose();
						}
						else{
							cm.gainItem(aa,-1);
							cm.gainItem(4310036,1);
							cm.sendOk("#b很遗憾，本次融合失败，第2件时装将会被消耗！");
							cm.dispose();
						}
					}
					else {
						cm.sendOk("#b你没有足够的点卷进行时装融合，请仔细确认！");
						cm.dispose();
					}
				}
				else if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() == snew1 && cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(2).getOwner() == snew1){//检查时装级别
					if(cm.getPlayer().getCSPoints(1)>=8000) {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var a=item.getItemId();
						cm.gainNX(-8000);
						if(rand>=11){
							cm.gainItem(aa,-1);
							cm.gainItem(dd,-1);
							item.setOwner(snew2);
							item.setStr(item.getStr()*1+15);
							item.setDex(item.getDex()*1+15);
							item.setInt(item.getInt()*1+15);
							item.setLuk(item.getLuk()*1+15);
							item.setMatk(item.getMatk()*1+0);
							item.setWatk(item.getWatk()*1+0);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "时装融合" + " : " + "恭喜"+ cm.getChar().getName() +"成功将2件R级时装融合成了1件"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"时装，他/她的战斗力获得大幅提升！"));
							cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b融合提升至#r"+snew2+"！");
							cm.dispose();
						}
						else{
							cm.gainItem(aa,-1);
							cm.gainItem(4310038,1);
							cm.sendOk("#b很遗憾，本次融合失败，第2件时装将会被消耗！");
							cm.dispose();
						}
					}
					else {
						cm.sendOk("#b你没有足够的点卷进行时装融合，请仔细确认！");
						cm.dispose();
					}
				}
				else if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() == snew2 && cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(2).getOwner() == snew2){//检查时装级别
					if(cm.getPlayer().getCSPoints(1)>=12000) {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var a=item.getItemId();
						cm.gainNX(-12000);
						if(rand>=16){
							cm.gainItem(aa,-1);
							cm.gainItem(dd,-1);
							item.setOwner(snew3);
							item.setStr(item.getStr()*1+20);
							item.setDex(item.getDex()*1+20);
							item.setInt(item.getInt()*1+20);
							item.setLuk(item.getLuk()*1+20);
							item.setMatk(item.getMatk()*1+0);
							item.setWatk(item.getWatk()*1+0);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "时装融合" + " : " + "恭喜"+ cm.getChar().getName() +"成功将2件SR级时装融合成了1件"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"时装，他/她的战斗力获得大幅提升！"));
							cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b融合提升至#r"+snew3+"！");
							cm.dispose();
						}
						else{
							cm.gainItem(aa,-1);
							cm.gainItem(4310027,1);
							cm.sendOk("#b很遗憾，本次融合失败，第2件时装将会被消耗！");
							cm.dispose();
						}
					}
					else {
						cm.sendOk("#b你没有足够的点卷进行时装融合，请仔细确认！");
						cm.dispose();
					}
				}
				else if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() == snew3 && cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(2).getOwner() == snew3){//检查时装级别
					if(cm.getPlayer().getCSPoints(1)>=16000) {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var a=item.getItemId();
						cm.gainNX(-16000);
						if(rand>=19){
							cm.gainItem(aa,-1);
							cm.gainItem(dd,-1);
							item.setOwner(snew4);
							item.setStr(item.getStr()*1+38);
							item.setDex(item.getDex()*1+38);
							item.setInt(item.getInt()*1+38);
							item.setLuk(item.getLuk()*1+38);
							item.setMatk(item.getMatk()*1+50);
							item.setWatk(item.getWatk()*1+50);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "时装融合" + " : " + "恭喜"+ cm.getChar().getName() +"成功将2件SSR级时装融合成了1件"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"时装，他/她的战斗力获得大幅提升！"));
							cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b融合提升至#r"+snew4+"！");
							cm.dispose();
						}
						else{
							cm.gainItem(aa,-1);
							cm.gainItem(4310108,1);
							cm.sendOk("#b很遗憾，本次融合失败，第2件时装将会被消耗！");
							cm.dispose();
						}
					}
					else {
						cm.sendOk("#b你没有足够的点卷进行时装融合，请仔细确认！");
						cm.dispose();
					}
				}
				else if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() == snew4 && cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(2).getOwner() == snew4){//检查时装级别					
					cm.sendOk("#b你的时装已经达到最高的UR级别，不能再进行融合了！");
					cm.dispose();
				}
				else {
					cm.sendOk("#b你的2件时装级别不一样，不能进行融合，请确保2件时装为同个级别！");
					cm.dispose();
				}
			}
		}
    }
}