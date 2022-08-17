var a = 0;
var b = 0;
var text;
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var selects;
var ii = Packages.server.MapleItemInformationProvider.getInstance();
var buynum = 0;
var 数值1 = 3000;
var 金币 = 1000000;
var itemlist = Array(
	Array(1113162, 1113185),
	Array(1113185, 1112794)
	
	
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
			text += "              #r欢迎来到月月冒险岛装备神铸#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
			text += "\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "           #r#L"+i+"#选择神铸#v"+itemlist[i][0]+"#"+蓝色箭头+""+蓝色箭头+"#v"+itemlist[i][1]+"##l\r\n\r\n";
				if (i != 0 && (i+1) % 99 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			if (selection == 0) {
				b = 1;
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				text += "              #r欢迎来到月月冒险岛装备神铸#k\r\n";
				text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				text += "      #b请将#v1113162#放在装备栏#r第1格#b，#v1113185#放在#r第2格\r\n\r\n";
			    text += "#b需要材料：#v4310057#*150，#v4310143#*150，#v4001241#*20，#v4001242#*20\r\n          #v4000435#*15，#v4021010#*15，金币*1.5E\r\n";
				text += "                  #r确定是否要进行神铸\r\n";
				cm.sendYesNo(text);
			}
			else if (selection == 1) {
				b = 2;
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				text += "              #r欢迎来到月月冒险岛装备神铸#k\r\n";
				text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				text += "      #b请将#v1113185#放在装备栏#r第1格#b，#v1112794#放在#r第2格\r\n\r\n";
			    text += "#b需要材料：#v4310057#*200，#v4310143#*200，#v4001241#*30，#v4001242#*30\r\n          #v4000435#*20，#v4021010#*20，金币*2E\r\n";
				text += "                  #r确定是否要进行神铸\r\n";
				cm.sendYesNo(text);
			}
			else if (selection == 2) {
				b = 3;
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				text += "              #r欢迎来到月月冒险岛装备神铸#k\r\n";
				text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				text += "      #b请将#v1132247#放在装备栏#r第1格#b，#v1132246#放在#r第2格\r\n\r\n";
				text += "  #b需要材料#v4000272#*400，#v4000082#*60，#v4310057#*175，#v4001129#*175\r\n\r\n";
				text += "          #v4250802#*15，#v4011007#*3，#v4011008#*3，金币*2E\r\n\r\n";
				text += "                  #r确定是否要进行神铸\r\n";
				cm.sendYesNo(text);
			}
		} else if (a == 2) {
			if (b == 1) {
				if (cm.getInventory(1).getItem(1) == null || cm.getInventory(1).getItem(2) == null)  {
		            cm.sendOk("#b请将神铸所需的装备放置在装备栏的#r第1、2格#b！");
				    cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getItemId() != 1113162 || cm.getInventory(1).getItem(2).getItemId() != 1113185)  {
		            cm.sendOk("#r第1、2格装备#r不符合要求，请仔细确认！");
				    cm.dispose();
				} else {
					var ItemID = cm.getInventory(1).getItem(1).getItemId();
					var text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
						text += "              #r欢迎来到月月冒险岛装备神铸#k\r\n";
						text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
						text += "#b本次神铸将为你的武器：#r#v"+ItemID+"##z"+ItemID+"#提升以下属性\r\n\r\n";
						text += "  #b装备力量值：#r40点 #b装备敏捷值：#r40点 #b装备攻击力：#r60点\r\n\r\n";
						text += "  #r注意：#b装备栏请至少保留#r2格#b以上的空间，#r否则后果自负！\r\n\r\n";
						text += " 			     #r最终确认是否进行神铸#l";
					cm.sendYesNo(text);
				}
			}
			else if (b == 2) {
				if (cm.getInventory(1).getItem(1) == null || cm.getInventory(1).getItem(2) == null)  {
		            cm.sendOk("#b请将神铸所需的装备放置在装备栏的#r第1、2格#b！");
				    cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getItemId() != 1113185 || cm.getInventory(1).getItem(2).getItemId() != 1112794)  {
		            cm.sendOk("#r第1、2格装备#r不符合要求，请仔细确认！");
				    cm.dispose();
				} else {
					var ItemID = cm.getInventory(1).getItem(1).getItemId();
					var text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
						text += "              #r欢迎来到月月冒险岛装备神铸#k\r\n";
						text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
						text += "#b本次神铸将为你的武器：#r#v"+ItemID+"##z"+ItemID+"#提升以下属性\r\n\r\n";
						text += "  #b装备力量值：#r50点 #b装备敏捷值：#r50点 #b装备攻击力：#r80点\r\n\r\n";
						text += "  #r注意：#b装备栏请至少保留#r2格#b以上的空间，#r否则后果自负！\r\n\r\n";
						text += " 			     #r最终确认是否进行神铸#l";
					cm.sendYesNo(text);
				}
			}
			else if (b == 3) {
				if (cm.getInventory(1).getItem(1) == null || cm.getInventory(1).getItem(2) == null)  {
		            cm.sendOk("#b请将神铸所需的装备放置在装备栏的#r第1、2格#b！");
				    cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getItemId() != 1132247 || cm.getInventory(1).getItem(2).getItemId() != 1132246)  {
		            cm.sendOk("#r第1、2格装备#r不符合要求，请仔细确认！");
				    cm.dispose();
				} else {
					var ItemID = cm.getInventory(1).getItem(1).getItemId();
					var text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
						text += "              #r欢迎来到月月冒险岛装备神铸#k\r\n";
						text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
						text += "#b本次神铸将为你的武器：#r#v"+ItemID+"##z"+ItemID+"#提升以下属性\r\n\r\n";
						text += "  #b装备力量值：#r60点 #b装备敏捷值：#r60点 #b装备攻击力：#r100点\r\n\r\n";
						text += "  #r注意：#b装备栏请至少保留#r2格#b以上的空间，#r否则后果自负！\r\n\r\n";
						text += " 			     #r最终确认是否进行神铸#l";
					cm.sendYesNo(text);
				}
			}
        } else if (a == 3) {
			if (b == 1) {
				var ItemID = cm.getInventory(1).getItem(1).getItemId();
				var ItemID1 = cm.getInventory(1).getItem(2).getItemId();	
				var 力量 = cm.getInventory(1).getItem(1).getStr();		
				var 敏捷 = cm.getInventory(1).getItem(1).getDex();	
				var 智力 = cm.getInventory(1).getItem(1).getInt();	
				var 运气 = cm.getInventory(1).getItem(1).getLuk();	
				var 物攻 = cm.getInventory(1).getItem(1).getWatk();
				var 魔攻 = cm.getInventory(1).getItem(1).getMatk();
				var 已砸次数 = cm.getInventory(1).getItem(1).getLevel();
				var 可砸次数 = cm.getInventory(1).getItem(1).getUpgradeSlots();	
				var 星级 = cm.getInventory(1).getItem(1).getOwner();	
				if (cm.haveItem(4310057,150) && cm.haveItem(4310143,150) && cm.haveItem(4001241,20) && cm.haveItem(4001242,20) && cm.haveItem(4000435,15) && cm.haveItem(4021010,15) && cm.getMeso() >= 150000000) {
					cm.gainItem(4310057,-150);
					cm.gainItem(4310143,-150);
					cm.gainItem(4001241,-20);
					cm.gainItem(4001242,-20);
					cm.gainItem(4000435,-15);
					cm.gainItem(4021010,-15);
					cm.gainMeso(-150000000);
					cm.gainItem(ItemID1, -1);
					cm.gainItem(ItemID, -1);
                    var equip = ii.randomizeStats(ii.getEquipById(ItemID1)).copy();
					var type=ii.getEquipById(ItemID1);	
					equip.setPosition(1);						
					equip.setStr(力量+40);
					equip.setDex(敏捷+40);
					equip.setWatk(物攻+60);
					equip.setLevel(已砸次数);
					equip.setUpgradeSlots(可砸次数);
					//equip.setOwner(星级);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),equip,false,false);
		 		    cm.sendOk("#b恭喜你，装备神铸成功，战斗力又得到了进一步提升！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"装备神铸" + " : 恭喜" + cm.getPlayer().getName() +"成功将进阶扎头神铸成法弗纳战士头盔，头盔属性获得大幅提升，大家祝贺他/她！",true).getBytes());
		 		    cm.dispose();
				} else {
					cm.sendOk("#b很抱歉，你的材料不足，请仔细确认！");
					cm.dispose();
				}
            }
			else if (b == 2) {
				var ItemID = cm.getInventory(1).getItem(1).getItemId();
				var ItemID1 = cm.getInventory(1).getItem(2).getItemId();	
				var 力量 = cm.getInventory(1).getItem(1).getStr();		
				var 敏捷 = cm.getInventory(1).getItem(1).getDex();	
				var 智力 = cm.getInventory(1).getItem(1).getInt();	
				var 运气 = cm.getInventory(1).getItem(1).getLuk();	
				var 物攻 = cm.getInventory(1).getItem(1).getWatk();
				var 魔攻 = cm.getInventory(1).getItem(1).getMatk();
				var 已砸次数 = cm.getInventory(1).getItem(1).getLevel();
				var 可砸次数 = cm.getInventory(1).getItem(1).getUpgradeSlots();	
				var 星级 = cm.getInventory(1).getItem(1).getOwner();	
				if (cm.haveItem(4310057,200) && cm.haveItem(4310143,200) && cm.haveItem(4001241,30) && cm.haveItem(4001242,30) && cm.haveItem(4000435,20) && cm.haveItem(4021010,20) && cm.getMeso() >= 200000000) {
					cm.gainItem(4310057,-200);
					cm.gainItem(4310143,-200);
					cm.gainItem(4001241,-30);
					cm.gainItem(4001242,-30);
					cm.gainItem(4000435,-20);
					cm.gainItem(4021010,-20);
					cm.gainMeso(-200000000);
					cm.gainItem(ItemID1, -1);
					cm.gainItem(ItemID, -1);
                    var equip = ii.randomizeStats(ii.getEquipById(ItemID1)).copy();
					var type=ii.getEquipById(ItemID1);	
					equip.setPosition(1);						
					equip.setStr(力量+50);
					equip.setDex(敏捷+50);
					equip.setWatk(物攻+80);
					equip.setLevel(已砸次数);
					equip.setUpgradeSlots(可砸次数);
					//equip.setOwner(星级);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),equip,false,false);
		 		    cm.sendOk("#b恭喜你，装备神铸成功，战斗力又得到了进一步提升！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"装备神铸" + " : 恭喜" + cm.getPlayer().getName() +"成功将法弗纳战士头盔神铸成漩涡帽，漩涡帽子属性获得大幅提升，大家祝贺他/她！",true).getBytes());
		 		    cm.dispose();
				} else {
					cm.sendOk("#b很抱歉，你的材料不足，请仔细确认！");
					cm.dispose();
				}
            }
			else if (b == 3) {
				var ItemID = cm.getInventory(1).getItem(1).getItemId();
				var ItemID1 = cm.getInventory(1).getItem(2).getItemId();	
				var 力量 = cm.getInventory(1).getItem(1).getStr();		
				var 敏捷 = cm.getInventory(1).getItem(1).getDex();	
				var 智力 = cm.getInventory(1).getItem(1).getInt();	
				var 运气 = cm.getInventory(1).getItem(1).getLuk();	
				var 物攻 = cm.getInventory(1).getItem(1).getWatk();
				var 魔攻 = cm.getInventory(1).getItem(1).getMatk();
				var 已砸次数 = cm.getInventory(1).getItem(1).getLevel();
				var 可砸次数 = cm.getInventory(1).getItem(1).getUpgradeSlots();	
				var 星级 = cm.getInventory(1).getItem(1).getOwner();	
				if (cm.haveItem(4000272,400) && cm.haveItem(4000082,60) && cm.haveItem(4310057,175) && cm.haveItem(4001129,175) && cm.haveItem(4250802,15) && cm.haveItem(4011007,3) && cm.haveItem(4011008,3) && cm.getMeso() >= 200000000) {
					cm.gainItem(4000272,-400);
					cm.gainItem(4000082,-60);
					cm.gainItem(4310057,-175);
					cm.gainItem(4001129,-175);
					cm.gainItem(4250802,-15);
					cm.gainItem(4011007,-3);
					cm.gainItem(4011008,-3);
					cm.gainMeso(-200000000);
					cm.gainItem(ItemID1, -1);
					cm.gainItem(ItemID, -1);
                    var equip = ii.randomizeStats(ii.getEquipById(ItemID1)).copy();
					var type=ii.getEquipById(ItemID1);	
					equip.setPosition(1);						
					equip.setStr(力量+60);
					equip.setDex(敏捷+60);
					equip.setWatk(物攻+100);
					equip.setLevel(已砸次数);
					equip.setUpgradeSlots(可砸次数);
					//equip.setOwner(星级);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),equip,false,false);
		 		    cm.sendOk("#b恭喜你，装备神铸成功，战斗力又得到了进一步提升！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"装备神铸" + " : 恭喜" + cm.getPlayer().getName() +"成功将漩涡帽神铸成埃苏莱布斯头盔，头盔属性获得大幅提升，大家祝贺他/她！",true).getBytes());
		 		    cm.dispose();
				} else {
					cm.sendOk("#b很抱歉，你的材料不足，请仔细确认！");
					cm.dispose();
				}
            }
        }
    }
}