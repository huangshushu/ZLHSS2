var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";
var 红色 = "#fEffect/CharacterEff/1114000/2/0#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var status = 0;
var fstype = 0;


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} 
	else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;

		if (status == 0) {

			var textz = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";		
				textz += "            #r欢迎来到月月冒险岛强化混沌强化#k\r\n";
				textz += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				textz += "     #b将需强化的装备放在装备栏第1格（#r时装不可强化#b）\r\n\r\n";
				textz += "    #b成功率60%，成功时会扣除1次升级次数，失败不扣除#k\r\n\r\n";
				textz += "             #r强化失败会退还30%消耗的水晶#k\r\n";
				textz += " #b#L0#"+小烟花+"选择#v4005000#*10，#v2049116#*1提升力量4～5，攻击3"+小烟花+"#l\r\n\r\n";
				textz += " #b#L1#"+小烟花+"选择#v4005001#*10，#v2049116#*1提升智力4～5，魔力3"+小烟花+"#l\r\n\r\n";
				textz += " #b#L2#"+小烟花+"选择#v4005002#*10，#v2049116#*1提升敏捷4～5，攻击3"+小烟花+"#l\r\n\r\n";
				textz += " #b#L3#"+小烟花+"选择#v4005003#*10，#v2049116#*1提升运气4～5，攻击3"+小烟花+"#l\r\n\r\n";
				textz += " #b#L4#"+小烟花+"选择#v4005004#*10，#v2049116#*1提升四维4～5，攻魔3"+小烟花+"#l\r\n";

			cm.sendSimple (textz);  

		} else if (status == 1) {

            if (selection == 0) { //力量
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("#r抱歉，你背包的装备栏第1格没有物品，请重新确认！");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r抱歉，时装不能进行该类强化！");
                    cm.dispose();
                } else {
					fstype = 0;
					cm.sendNext("#b你选择的是提升力量4～5，攻击3\r\n\r\n#r注意确认，强化错误请自行负责！");
				}
            }


            if (selection == 1) { //智慧
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("#r抱歉，你背包的装备栏第1格没有物品，请重新确认！");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r抱歉，时装不能进行该类强化！");
                    cm.dispose();
                } else {
					fstype = 1;
					cm.sendNext("#b你选择的是提升智力4～5，魔力3\r\n\r\n#r注意确认，强化错误请自行负责！");
				}
            }

            if (selection == 2) { //敏捷
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("#r抱歉，你背包的装备栏第1格没有物品，请重新确认！");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r抱歉，时装不能进行该类强化！");
                    cm.dispose();
                } else {
					fstype = 2;
					cm.sendNext("#b你选择的是提升敏捷4～5，攻击3\r\n\r\n#r注意确认，强化错误请自行负责！");
				}
            }

            if (selection == 3) { //运气
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("#r抱歉，你背包的装备栏第1格没有物品，请重新确认！");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r抱歉，时装不能进行该类强化！");
                    cm.dispose();
                } else {
					fstype = 3;
					cm.sendNext("#b你选择的是提升运气4～5，攻击3\r\n\r\n#r注意确认，强化错误请自行负责！");
				}
            }

            if (selection == 4) { //四维
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("#r抱歉，你背包的装备栏第1格没有物品，请重新确认！");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r抱歉，时装不能进行该类强化！");
                    cm.dispose();
                } else {
					fstype = 4;
					cm.sendNext("#b你选择的是提升四维4～5，攻魔3\r\n\r\n#r注意确认，强化错误请自行负责！");
				}
            }

		} else if (status == 2) {
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var item = cm.getInventory(1).getItem(1);
			if (fstype == 0) {
				if (!cm.haveItem(4005000,10) || !cm.haveItem(2049116,1))  {
                    cm.sendOk("#r你的背包内没有足够的#v4005000#或是#v2049116#，请仔细确认！");
                    cm.dispose();
				} else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("#r你的装备已经没有升级次数了，请前去提升升级次数，否则无法进行强化！");
                    cm.dispose();
				} else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r抱歉，时装不能进行该类强化！");
                    cm.dispose();
				} else {
					var chance = Math.floor(Math.random() * 3);
					var tisheng = Math.floor(Math.random() * 1 + 4);
						if (chance >= 2) {
							var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
							var statup = new java.util.ArrayList();
							item.setStr(item.getStr() + tisheng);
							item.setWatk(item.getWatk() + 3);
							item.setUpgradeSlots((item.getUpgradeSlots() - 1));
							item.setLevel(item.getLevel() + 1);
							cm.gainItem(4005000,-10);
							cm.gainItem(2049116,-1);
							cm.sendOk("#r恭喜你，强化成功，战斗力又获得了提升！");
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"强化混沌强化" + " : " + " 恭喜" + cm.getPlayer().getName() + "在强化混沌强化中，成功提升了装备力量" + tisheng + "，攻击3，大家祝贺他/她吧！",true).getBytes());
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						} else {
							cm.gainItem(4005000,-10);
							cm.gainItem(4005000,3);
							cm.gainItem(2049116,-1);
							cm.sendOk("#b很遗憾，强化失败，作为补偿返还#v4005000#*3！");	
						}
					cm.dispose();
				}
			} else if (fstype == 1) {
				if (!cm.haveItem(4005001,10) || !cm.haveItem(2049116,1))  {
                    cm.sendOk("#r你的背包内没有足够的#v4005001#或是#v2049116#，请仔细确认！");
                    cm.dispose();
				} else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("#r你的装备已经没有升级次数了，请前去提升升级次数，否则无法进行强化！");
                    cm.dispose();
				} else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r抱歉，时装不能进行该类强化！");
                    cm.dispose();
				} else {
					var chance = Math.floor(Math.random() * 3);
					var tisheng = Math.floor(Math.random() * 1 + 4);
						if (chance >= 2) {
							var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
							var statup = new java.util.ArrayList();
							item.setInt(item.getInt() + tisheng);
							item.setMatk(item.getMatk() + 3);
							item.setUpgradeSlots((item.getUpgradeSlots() - 1));
							item.setLevel(item.getLevel() + 1);
							cm.gainItem(4005001,-10);
							cm.gainItem(2049116,-1);
							cm.sendOk("#r恭喜你，强化成功，战斗力又获得了提升！");
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"强化混沌强化" + " : " + " 恭喜" + cm.getPlayer().getName() + "在强化混沌强化中，成功提升了装备智力" + tisheng + "，魔力3，大家祝贺他/她吧！",true).getBytes());
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						} else {
							cm.gainItem(4005001,-10);
							cm.gainItem(4005001,3);
							cm.gainItem(2049116,-1);
							cm.sendOk("#b很遗憾，强化失败，作为补偿返还#v4005001#*3！");	
						}
					cm.dispose();
				}
			} else if (fstype == 2) {
				if (!cm.haveItem(4005002,10) || !cm.haveItem(2049116,1))  {
                    cm.sendOk("#r你的背包内没有足够的#v4005002#或是#v2049116#，请仔细确认！");
                    cm.dispose();
				} else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("#r你的装备已经没有升级次数了，请前去提升升级次数，否则无法进行强化！");
                    cm.dispose();
				} else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r抱歉，时装不能进行该类强化！");
                    cm.dispose();
				} else {
					var chance = Math.floor(Math.random() * 3);
					var tisheng = Math.floor(Math.random() * 1 + 4);
						if (chance >= 2) {
							var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
							var statup = new java.util.ArrayList();
							item.setDex(item.getDex() + tisheng);
							item.setWatk(item.getWatk() + 3);
							item.setUpgradeSlots((item.getUpgradeSlots() - 1));
							item.setLevel(item.getLevel() + 1);
							cm.gainItem(4005002,-10);
							cm.gainItem(2049116,-1);
							cm.sendOk("#r恭喜你，强化成功，战斗力又获得了提升！");
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"强化混沌强化" + " : " + " 恭喜" + cm.getPlayer().getName() + "在强化混沌强化中，成功提升了装备敏捷" + tisheng + "，攻击3，大家祝贺他/她吧！",true).getBytes());
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						} else {
							cm.gainItem(4005002,-10);
							cm.gainItem(4005002,3);
							cm.gainItem(2049116,-1);
							cm.sendOk("#b很遗憾，强化失败，作为补偿返还#v4005002#*3！");	
						}
					cm.dispose();
				}
			} else if (fstype == 3) {
				if (!cm.haveItem(4005003,10) || !cm.haveItem(2049116,1))  {
                    cm.sendOk("#r你的背包内没有足够的#v4005003#或是#v2049116#，请仔细确认！");
                    cm.dispose();
				} else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("#r你的装备已经没有升级次数了，请前去提升升级次数，否则无法进行强化！");
                    cm.dispose();
				} else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r抱歉，时装不能进行该类强化！");
                    cm.dispose();
				} else {
					var chance = Math.floor(Math.random() * 3);
					var tisheng = Math.floor(Math.random() * 1 + 4);
						if (chance >= 2) {
							var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
							var statup = new java.util.ArrayList();
							item.setLuk(item.getLuk() + tisheng);
							item.setWatk(item.getWatk() + 3);
							item.setUpgradeSlots((item.getUpgradeSlots() - 1));
							item.setLevel(item.getLevel() + 1);
							cm.gainItem(4005003,-10);
							cm.gainItem(2049116,-1);
							cm.sendOk("#r恭喜你，强化成功，战斗力又获得了提升！");
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"强化混沌强化" + " : " + " 恭喜" + cm.getPlayer().getName() + "在强化混沌强化中，成功提升了装备运气" + tisheng + "，攻击3，大家祝贺他/她吧！",true).getBytes());
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						} else {
							cm.gainItem(4005003,-10);
							cm.gainItem(4005003,3);
							cm.gainItem(2049116,-1);
							cm.sendOk("#b很遗憾，强化失败，作为补偿返还#v4005003#*3！");	
						}
					cm.dispose();
				}
			} else if (fstype == 4) {
				if (!cm.haveItem(4005004,10) || !cm.haveItem(2049116,1))  {
                    cm.sendOk("#r你的背包内没有足够的#v4005004#或是#v2049116#，请仔细确认！");
                    cm.dispose();
				} else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("#r你的装备已经没有升级次数了，请前去提升升级次数，否则无法进行强化！");
                    cm.dispose();
				} else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r抱歉，时装不能进行该类强化！");
                    cm.dispose();
				} else {
					var chance = Math.floor(Math.random() * 3);
					var tisheng = Math.floor(Math.random() * 1 + 4);
						if (chance >= 2) {
							var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
							var statup = new java.util.ArrayList();
							item.setStr(item.getStr() + tisheng);
							item.setDex(item.getDex() + tisheng);
							item.setInt(item.getInt() + tisheng);
							item.setLuk(item.getLuk() + tisheng);
							item.setWatk(item.getWatk() + 3);
							item.setMatk(item.getMatk() + 3);
							item.setUpgradeSlots((item.getUpgradeSlots() - 1));
							item.setLevel(item.getLevel() + 1);
							cm.gainItem(4005004,-10);
							cm.gainItem(2049116,-1);
							cm.sendOk("#r恭喜你，强化成功，战斗力又获得了提升！");
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"强化混沌强化" + " : " + " 恭喜" + cm.getPlayer().getName() + "在强化混沌强化中，成功提升了装备四维" + tisheng + "，攻魔3，大家祝贺他/她吧！",true).getBytes());
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						} else {
							cm.gainItem(4005004,-10);
							cm.gainItem(4005004,3);
							cm.gainItem(2049116,-1);
							cm.sendOk("#b很遗憾，强化失败，作为补偿返还#v4005004#*3！");	
						}
					cm.dispose();
				}
			}										
		}
	}
}
