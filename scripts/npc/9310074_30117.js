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
	Array(1402014, 1402014)	
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
				text += "        #r#L"+i+"#选择神铸#v"+itemlist[i][0]+"#（消耗白板#v"+itemlist[i][1]+"#*1）#l\r\n\r\n";
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
				text += " #b请将已强化的#v1402014#放在#r第1格#b，未强化的#v1402014#放在#r第2格\r\n\r\n";
				text += "  #b需要材料#v4000272#*150，#v4000082#*30，#v4310057#*100，#v4001129#*100\r\n\r\n";
				text += "          #v4250802#*10，#v4011007#*2，#v4011008#*2，金币*1.5E\r\n\r\n";
				text += "                  #r确定是否要进行神铸\r\n";
				cm.sendYesNo(text);
			}
		} else if (a == 2) {
			if (b == 1) {
				if (cm.getInventory(1).getItem(1) == null || cm.getInventory(1).getItem(2) == null)  {
		            cm.sendOk("#b请将神铸所需的装备放置在装备栏的#r第1、2格#b！");
				    cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getItemId() != 1402014 || cm.getInventory(1).getItem(2).getItemId() != 1402014)  {
		            cm.sendOk("#r第1、2格装备#r不符合要求，请仔细确认！");
				    cm.dispose();
				} else {
					var ItemID = cm.getInventory(1).getItem(1).getItemId();
					var text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
						text += "              #r欢迎来到月月冒险岛装备神铸#k\r\n";
						text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
						text += "    #b本次神铸将为你的武器：#r#v"+ItemID+"##z"+ItemID+"#提升以下属性\r\n\r\n";
						text += "  #b装备力量值：#r30点 #b装备敏捷值：#r30点 #b装备攻击力：#r45点\r\n\r\n";
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
				if (cm.haveItem(4000272,150) && cm.haveItem(4000082,30) && cm.haveItem(4310057,100) && cm.haveItem(4001129,100) && cm.haveItem(4250802,10) && cm.haveItem(4011007,2) && cm.haveItem(4011008,2) && cm.getMeso() >= 150000000) {
					cm.gainItem(4000272,-150);
					cm.gainItem(4000082,-30);
					cm.gainItem(4310057,-100);
					cm.gainItem(4001129,-100);
					cm.gainItem(4250802,-10);
					cm.gainItem(4011007,-2);
					cm.gainItem(4011008,-2);
					cm.gainMeso(-150000000);
					cm.gainItem(ItemID1, -1);
					cm.gainItem(ItemID, -1);
                    var equip = ii.randomizeStats(ii.getEquipById(ItemID)).copy();
					var type=ii.getEquipById(ItemID);	
					equip.setPosition(1);						
					equip.setStr(力量+30);
					equip.setDex(敏捷+30);
					equip.setWatk(物攻+45);
					equip.setLevel(已砸次数);
					equip.setUpgradeSlots(可砸次数);
					equip.setOwner(星级);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),equip,false,false);
		 		    cm.sendOk("#b恭喜你，装备神铸成功，战斗力又得到了进一步提升！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"装备神铸" + " : 恭喜" + cm.getPlayer().getName() +"成功神铸了温度计，武器属性获得大幅提升，大家祝贺他/她！",true).getBytes());
		 		    cm.dispose();
				} else {
					cm.sendOk("#b很抱歉，你的材料不足，请仔细确认！");
					cm.dispose();
				}
            }
        }
    }
}