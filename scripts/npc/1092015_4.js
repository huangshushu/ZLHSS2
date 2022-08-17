var status = 0;
var slot = Array();
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("欢迎来到#r" + cm.getChannelServer().getServerName() + "\r\n\在我这里可以使用特殊卷轴对装备进行强化!\r\n#e#r\r\n#b将会消耗强化次数#r1次,#b请将需要强化的装备放在#r第一格!\r\n注意：强化后产生的效由卷轴决定！#k\r\n");
		} else if (status == 1){
			var cc = cm.getInventory(1).getItem(1).getItemId();
        text = "#e 请选择要使用的卷轴 #n   当前第一格物品为：#v"+cc+"#\r\n\r\n#b";
		text += "\r\n#L1##v2640010##z2640010##b";
		text += "\r\n#L2##v2640011##z2640011##b";
		text += "\r\n\r\n#L3##v2615001##z2615001##b";
		//text += "\r\n#L4##v2640011##z2640011##b";
        cm.sendSimple(text);
		} else if (status == 2) {
			if (cm.getInventory(1).getItem(1) == null)  {
				cm.sendOk("请把要强化的装备放在第一格才能进行.");
				cm.dispose();
				return;
			}
			if (selection == 1){//单
				if(cm.haveItem(2640010)){
					cm.sendSimple("是否使用祝福卷轴？\r\n#L11##r是#k#l\t\t#L12#否#l");
				}else {
					cm.sendOk("请确认背包中是否有#v2640010##z2640010#");
					cm.dispose();
				}
			}else if (selection == 2){//双
				if(cm.haveItem(2640011)){
					cm.sendSimple("是否使用祝福卷轴？\r\n#L21##r是#k#l\t\t#L22#否#l");
				}else {
					cm.sendOk("请确认背包中是否有#v2640011##z2640011#");
					cm.dispose();
				}
			}else if (selection == 3){//贝勒
				if(cm.haveItem(2615001)){
					cm.sendSimple("是否使用祝福卷轴？\r\n#L31##r是#k#l\t\t#L32#否#l");
				}else {
					cm.sendOk("请确认背包中是否有#v2615001##z2615001#");
					cm.dispose();
				}
			} else {
				cm.dispose();
			}
		} else if (status == 3) {
			if(selection == 11){
				var cc = cm.getInventory(1).getItem(1).getItemId();
				if(cc==1302289||cc==1312165||cc==1322215||cc==1332238||cc==1372188||cc==1382222||cc==1472226||cc==1482179||cc==1492190){
					status = 3;
					cm.sendYesNo("你要强化的装备为:\r\n\r\n#v"+cc+"#\r\n\r\n#r#e确定要开始强化吗?");
				} else {
					cm.sendOk("#b该卷轴不可用于该装备的强化！#k");	
					cm.dispose();
				}
			}else if(selection == 12) {
				var cc = cm.getInventory(1).getItem(1).getItemId();
				if(cc==1302289||cc==1312165||cc==1322215||cc==1332238||cc==1372188||cc==1382222||cc==1472226||cc==1482179||cc==1492190){
					status = 4;
					cm.sendYesNo("你要强化的装备为:\r\n\r\n#v"+cc+"#\r\n\r\n#r#e确定要开始强化吗?");
				} else {
					cm.sendOk("#b该卷轴不可用于该装备的强化！#k");	
					cm.dispose();
				}
			}else if(selection == 21) {
				var cc = cm.getInventory(1).getItem(1).getItemId();
				if(cc==1402210||cc==1412147||cc==1422152||cc==1432178||cc==1442234||cc==1452216||cc==1462204){
					status = 5;
					cm.sendYesNo("你要强化的装备为:\r\n\r\n#v"+cc+"#\r\n\r\n#r#e确定要开始强化吗?");
				} else {
					cm.sendOk("#b该卷轴不可用于该装备的强化！#k");	
					cm.dispose();
				}
			}else if (selection == 22){
				var cc = cm.getInventory(1).getItem(1).getItemId();
				if(cc==1402210||cc==1412147||cc==1422152||cc==1432178||cc==1442234||cc==1452216||cc==1462204){
					status = 6;
					cm.sendYesNo("你要强化的装备为:\r\n\r\n#v"+cc+"#\r\n\r\n#r#e确定要开始强化吗?");
				} else {
					cm.sendOk("#b该卷轴不可用于该装备的强化！#k");	
					cm.dispose();
				}
			}else if (selection == 31){
				var cc = cm.getInventory(1).getItem(1).getItemId();
				if(cc==1032222||cc==1032223||cc==1113074||cc==1113075||cc==1122266||cc==1122267||cc==1132245||cc==1132246){
					status = 7;
					cm.sendYesNo("你要强化的装备为:\r\n\r\n#v"+cc+"#\r\n\r\n#r#e确定要开始强化吗?");
				} else {
					cm.sendOk("#b该卷轴不可用于该装备的强化！#k");	
					cm.dispose();
				}
			}else if (selection == 32){
				var cc = cm.getInventory(1).getItem(1).getItemId();
				if(cc==1032222||cc==1032223||cc==1113074||cc==1113075||cc==1122266||cc==1122267||cc==1132245||cc==1132246){
					status = 8;
					cm.sendYesNo("你要强化的装备为:\r\n\r\n#v"+cc+"#\r\n\r\n#r#e确定要开始强化吗?");
				} else {
					cm.sendOk("#b该卷轴不可用于该装备的强化！#k");	
					cm.dispose();
				}
			}else {
				cm.dispose();
			}			
		} else if (status == 4){//用祝福
			if(!cm.haveItem(2340000)){
				cm.sendOk("祝福卷轴不足！");
				cm.dispose();
				return;
				}
			var item = cm.getInventory(1).getItem(1).copy();
			if (item.getUpgradeSlots() <= 0){
				cm.sendOk("您选择的装备剩余强化次数不足！");
				cm.dispose();
				return;
			}
		    if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("限时装备不能使用强化卷轴.");
				cm.dispose();
				return;
			} else {
				var statup = new java.util.ArrayList();
				var sj = Math.floor(Math.random()*3);
				var itemId1 = cm.getInventory(1).getItem(1).getItemId();
				var item = cm.getInventory(1).getItem(1).copy();
				var ii = MapleItemInformationProvider.getInstance();
				var type =  ii.getInventoryType(itemId1);
				if(sj !=0){
					cm.gainItem(2640010,-1);
					cm.gainItem(2340000,-1);
					item.setUpgradeSlots(item.getUpgradeSlots()-1);
					item.setLevel(item.getLevel()+1);
					item.setStr(item.getStr()+3);
					item.setDex(item.getDex()+3);
					item.setInt(item.getInt()+3);
					item.setLuk(item.getLuk()+3);
					item.setWatk(item.getWatk()+8);
					item.setMatk(item.getMatk()+8);
					MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
					MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场饮水机使用卷轴强化成功！",true).getBytes()); //喇叭  
					//cm.laba(cm.getPlayer().getName() + "『强化公告』" + " : " + "在自由相框使用卷轴强化成功！",9);
					cm.dispose();
					cm.getPlayer().fakeRelog();
				}else {
					cm.gainItem(2640010,-1);
					cm.gainItem(2340000,-1);
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场饮水机使用卷轴强化失败！",true).getBytes()); //喇叭  
					cm.dispose();
				}
			}
		} else if (status == 5) {//不用祝福
			var item = cm.getInventory(1).getItem(1).copy();
			if (item.getUpgradeSlots() <= 0){
				cm.sendOk("您选择的装备剩余强化次数不足！");
				cm.dispose();
				return;
			}
		    if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("限时装备不能使用强化卷轴.");
				cm.dispose();
				return;
			} else {
				var statup = new java.util.ArrayList();
				var sj = Math.floor(Math.random()*3);
				var itemId1 = cm.getInventory(1).getItem(1).getItemId();
				var item = cm.getInventory(1).getItem(1).copy();
				var ii = MapleItemInformationProvider.getInstance();
				var type =  ii.getInventoryType(itemId1);
				if(sj !=0){
					cm.gainItem(2640010,-1);
					//cm.gainItem(2340000,-1);
					item.setUpgradeSlots(item.getUpgradeSlots()-1);
					item.setLevel(item.getLevel()+1);
					item.setStr(item.getStr()+3);
					item.setDex(item.getDex()+3);
					item.setInt(item.getInt()+3);
					item.setLuk(item.getLuk()+3);
					item.setWatk(item.getWatk()+8);
					item.setMatk(item.getMatk()+8);
					MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
					MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场饮水机使用卷轴强化成功！",true).getBytes()); //喇叭  
					cm.dispose();
					cm.getPlayer().fakeRelog();
				}else {
					cm.gainItem(2640010,-1);
					item.setUpgradeSlots(item.getUpgradeSlots()-1);
					//cm.gainItem(2340000,-1);
					MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
					MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场饮水机使用卷轴强化失败！",true).getBytes()); //喇叭  
					cm.dispose();
				}
			}
		} else if (status == 6) {//用祝福
			var item = cm.getInventory(1).getItem(1).copy();
			if (item.getUpgradeSlots() <= 0){
				cm.sendOk("您选择的装备剩余强化次数不足！");
				cm.dispose();
				return;
			}
		    if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("限时装备不能使用强化卷轴.");
				cm.dispose();
				return;
			} else {
				var statup = new java.util.ArrayList();
				var sj = Math.floor(Math.random()*3);
				var itemId1 = cm.getInventory(1).getItem(1).getItemId();
				var item = cm.getInventory(1).getItem(1).copy();
				var ii = MapleItemInformationProvider.getInstance();
				var type =  ii.getInventoryType(itemId1);
				if(sj !=0){
					cm.gainItem(2640011,-1);
					cm.gainItem(2340000,-1);
					item.setUpgradeSlots(item.getUpgradeSlots()-1);
					item.setLevel(item.getLevel()+1);
					item.setStr(item.getStr()+3);
					item.setDex(item.getDex()+3);
					item.setInt(item.getInt()+3);
					item.setLuk(item.getLuk()+3);
					item.setWatk(item.getWatk()+8);
					item.setMatk(item.getMatk()+8);
					MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
					MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场饮水机使用卷轴强化成功！",true).getBytes()); //喇叭  
					cm.dispose();
					cm.getPlayer().fakeRelog();
				}else {
					cm.gainItem(2640011,-1);
					//item.setUpgradeSlots(item.getUpgradeSlots()-1);
					cm.gainItem(2340000,-1);
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场饮水机使用卷轴强化失败！",true).getBytes()); //喇叭  
					cm.dispose();
				}
			}
		} else if (status == 7) {//不用祝福
			var item = cm.getInventory(1).getItem(1).copy();
			if (item.getUpgradeSlots() <= 0){
				cm.sendOk("您选择的装备剩余强化次数不足！");
				cm.dispose();
				return;
			}
		    if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("限时装备不能使用强化卷轴.");
				cm.dispose();
				return;
			} else {
				var statup = new java.util.ArrayList();
				var sj = Math.floor(Math.random()*3);
				var itemId1 = cm.getInventory(1).getItem(1).getItemId();
				var item = cm.getInventory(1).getItem(1).copy();
				var ii = MapleItemInformationProvider.getInstance();
				var type =  ii.getInventoryType(itemId1);
				if(sj !=0){
					cm.gainItem(2640011,-1);
					//cm.gainItem(2340000,-1);
					item.setUpgradeSlots(item.getUpgradeSlots()-1);
					item.setLevel(item.getLevel()+1);
					item.setStr(item.getStr()+3);
					item.setDex(item.getDex()+3);
					item.setInt(item.getInt()+3);
					item.setLuk(item.getLuk()+3);
					item.setWatk(item.getWatk()+8);
					item.setMatk(item.getMatk()+8);
					MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
					MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场饮水机使用卷轴强化成功！",true).getBytes()); //喇叭  
					cm.dispose();
					cm.getPlayer().fakeRelog();
				}else {
					cm.gainItem(2640011,-1);
					item.setUpgradeSlots(item.getUpgradeSlots()-1);
					//cm.gainItem(2340000,-1);
					MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
					MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场饮水机使用卷轴强化失败！",true).getBytes()); //喇叭  
					cm.dispose();
				}
			}
		} else if (status == 8) {//不用祝福
			var item = cm.getInventory(1).getItem(1).copy();
			if (item.getUpgradeSlots() <= 0){
				cm.sendOk("您选择的装备剩余强化次数不足！");
				cm.dispose();
				return;
			}
		    if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("限时装备不能使用强化卷轴.");
				cm.dispose();
				return;
			} else {
				var statup = new java.util.ArrayList();
				var sj = Math.floor(Math.random()*4);
				var itemId1 = cm.getInventory(1).getItem(1).getItemId();
				var item = cm.getInventory(1).getItem(1).copy();
				var ii = MapleItemInformationProvider.getInstance();
				var type =  ii.getInventoryType(itemId1);
				if(sj >=2){
					cm.gainItem(2615001,-1);
					//cm.gainItem(2340000,-1);
					item.setUpgradeSlots(item.getUpgradeSlots()-1);
					item.setLevel(item.getLevel()+1);
					item.setStr(item.getStr()+3);
					item.setDex(item.getDex()+3);
					item.setInt(item.getInt()+3);
					item.setLuk(item.getLuk()+3);
					item.setWatk(item.getWatk()+4);
					item.setMatk(item.getMatk()+4);
					MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
					MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场饮水机使用卷轴强化成功！",true).getBytes()); //喇叭  
					cm.dispose();
					cm.getPlayer().fakeRelog();
				}else {
					cm.gainItem(2615001,-1);
					item.setUpgradeSlots(item.getUpgradeSlots()-1);
					//cm.gainItem(2340000,-1);
					MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
					MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场饮水机使用卷轴强化失败！",true).getBytes()); //喇叭  
					cm.dispose();
				}
			}
		}else if (status == 8) {//不用祝福
			var item = cm.getInventory(1).getItem(1).copy();
			if (item.getUpgradeSlots() <= 0){
				cm.sendOk("您选择的装备剩余强化次数不足！");
				cm.dispose();
				return;
			}
		    if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("限时装备不能使用强化卷轴.");
				cm.dispose();
				return;
			} else {
				var statup = new java.util.ArrayList();
				var sj = Math.floor(Math.random()*4);
				var itemId1 = cm.getInventory(1).getItem(1).getItemId();
				var item = cm.getInventory(1).getItem(1).copy();
				var ii = MapleItemInformationProvider.getInstance();
				var type =  ii.getInventoryType(itemId1);
				if(sj >= 2){
					cm.gainItem(2615001,-1);
					cm.gainItem(2340000,-1);
					item.setUpgradeSlots(item.getUpgradeSlots()-1);
					item.setLevel(item.getLevel()+1);
					item.setStr(item.getStr()+3);
					item.setDex(item.getDex()+3);
					item.setInt(item.getInt()+3);
					item.setLuk(item.getLuk()+3);
					item.setWatk(item.getWatk()+4);
					item.setMatk(item.getMatk()+4);
					MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
					MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场饮水机使用卷轴强化成功！",true).getBytes()); //喇叭  
					cm.dispose();
					cm.getPlayer().fakeRelog();
				}else {
					cm.gainItem(2615001,-1);
					//item.setUpgradeSlots(item.getUpgradeSlots()-1);
					cm.gainItem(2340000,-1);
					MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
					MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场饮水机使用卷轴强化失败！",true).getBytes()); //喇叭  
					cm.dispose();
				}
			}
		}
	}
}	