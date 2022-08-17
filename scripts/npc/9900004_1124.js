var a = 0;
var text;
var selects; //记录玩家的选项
var ii = Packages.server.MapleItemInformationProvider.getInstance();
var buynum = 0;
var 数值1 = 3000;
var 金币 = 1000000;
var itemlist = Array(
	Array(1112663, 1113070, "升级“点状”升级次数。"),
	Array(1112667, 1112748, "升级“点状”升级次数。"),
	Array(1113149, 1112597, "升级“点状”升级次数。")
	//Array(1113089, 1112683, "升级“点状”升级次数。"),
	//Array(1113149, 1112673, "升级“点状”升级次数。")
    //Array(1003112, 1003893, "升级“点状”升级次数。"),//强化升级次数道具
	//Array(1122076, 1122256, "提高血量/蓝量上限。"),//强化升级次数道具
	//Array(1032101, 1032191, "随机皇家发型/脸型"),//强化升级次数道具
	//Array(1012319, 1012173, "选择皇家发型/脸型"),//强化升级次数道具
	//Array(1042231, 1042244, "增加装备强化次数"),//强化升级次数道具	
	//Array(1062148, 1062158, "增加装备强化次数"),//强化升级次数道具
	//Array(1022144, 1022149, "增加装备强化次数"),//强化升级次数道具
	//Array(1072743, 1072672, "增加装备强化次数"),//强化升级次数道具
	//Array(1072744, 1072672, "增加装备强化次数"),
	//Array(1072745, 1072672, "增加装备强化次数"),
	//Array(1072746, 1072672, "增加装备强化次数"),
	//Array(1072747, 1072672, "增加装备强化次数"),
	//Array(1082543, 1082438, "增加装备强化次数"),//强化升级次数道具
	//Array(1082544, 1082438, "增加装备强化次数"),
	//Array(1082545, 1082438, "增加装备强化次数"),
	//Array(1082546, 1082438, "增加装备强化次数"),
	//Array(1082547, 1082438, "增加装备强化次数"),
	//Array(1102481, 1102467, "增加装备强化次数"),//强化升级次数道具
	//Array(1102482, 1102467, "增加装备强化次数"),
	//Array(1102483, 1102467, "增加装备强化次数"),
	//Array(1102484, 1102467, "增加装备强化次数"),
	//Array(1102485, 1102467, "增加装备强化次数"),
	//Array(1132174, 1132161, "增加装备强化次数"),//强化升级次数道具
	//Array(1132175, 1132161, "增加装备强化次数"),
	//Array(1132176, 1132161, "增加装备强化次数"),
	//Array(1132177, 1132161, "增加装备强化次数"),
	//Array(1132178, 1132161, "增加装备强化次数"),
	//Array(1312184, 1312142, "增加装备强化次数"),//强化升级次数道具
	//Array(1302314, 1302070, "增加装备强化次数"),//强化升级次数道具
	//Array(1322235, 1322100, "增加装备强化次数"),
	//Array(1332259, 1332214, "增加装备强化次数"),
	//Array(1402235, 1402185, "增加装备强化次数"),
	//Array(1412163, 1412126, "增加装备强化次数"),
	//Array(1422170, 1422129, "增加装备强化次数"),
	//Array(1432199, 1432158, "增加装备强化次数"),
	//Array(1442253, 1442209, "增加装备强化次数"),
	//Array(1452237, 1452196, "增加装备强化次数"),
	//Array(1462224, 1462184, "增加装备强化次数"),
	//Array(1472246, 1472205, "增加装备强化次数"),
	//Array(1482201, 1482159, "增加装备强化次数"),
	//Array(1492211, 1492170, "增加装备强化次数"),
	//Array(1372206, 1382199, "增加装备强化次数"),
	//Array(1382037, 1382199, "增加装备强化次数"),
	//Array(1382049, 1382199, "增加装备强化次数"),
	//Array(1382051, 1382199, "增加装备强化次数"),
	//Array(1382050, 1382199, "增加装备强化次数"),
	//Array(1382052, 1382199, "增加装备强化次数")
	
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
			text = "#r请将初阶装备升至满星并砸满至最高次数，进行属性增幅至5后再进行传承，否则属性低后果自负！#l\r\n\r\n#b装备传承需要3个锂和2亿游戏币#l\r\n\r\n#d请选择你要继承的装备#l\r\n";
			text += "\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "#r#L" + i + "#将#v"+itemlist[i][0]+"#的属性继承到#d#v"+itemlist[i][1]+"##k#l\r\n\r\n";
				if (i != 0 && (i+1) % 99 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
				if (cm.getInventory(1).getItem(1) == null || cm.getInventory(1).getItem(2) == null)  {
		            cm.sendOk("请将你所要转移的装备放置在装备栏的第一、二格。");
				    cm.dispose();
	} else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId()) == true && cm.isCash(cm.getInventory(1).getItem(2).getItemId()) == true)  {
		            cm.sendOk("点装无法进行转移。");
				    cm.dispose();
	} else if (cm.getInventory(1).getItem(1).getItemId() != itemlist[selection][0] || cm.getInventory(1).getItem(2).getItemId() != itemlist[selection][1])  {
		            cm.sendOk("第一二格装备不匹配，请确认");
				    cm.dispose();
	}else {
var ItemID = cm.getInventory(1).getItem(1).getItemId();
		var ItemID1 = cm.getInventory(1).getItem(2).getItemId();
		var 力量 = cm.getInventory(1).getItem(1).getStr();		
		var 敏捷 = cm.getInventory(1).getItem(1).getDex();	
		var 智力 = cm.getInventory(1).getItem(1).getInt();	
		var 运气 = cm.getInventory(1).getItem(1).getLuk();	
		var 物攻 = cm.getInventory(1).getItem(1).getWatk();
		var 魔攻 = cm.getInventory(1).getItem(1).getMatk();
		var text =  "属性转移装备：#b#v"+ItemID+"##z"+ItemID+"##k  →  #b#v"+ItemID1+"##z"+ItemID1+"##k\r\n\r\n";
			text += " #e- 转移装备力量值：#n#r"+力量+"#k 点。\r\n\r\n";
			text += " #e- 转移装备力量值：#n#r"+敏捷+"#k 点。\r\n\r\n";
			text += " #e- 转移装备力量值：#n#r"+智力+"#k 点。\r\n\r\n";
			text += " #e- 转移装备力量值：#n#r"+运气+"#k 点。\r\n\r\n";
			text += " #e- 转移装备物攻值：#n#r"+物攻+"#k 点。\r\n\r\n";
			text += " #e- 转移装备魔攻值：#n#r"+魔攻+"#k 点。\r\n\r\n";
			text += " #e- 注意：#r“装备栏”至少保留 2格 以上的空位，否则后果自负！\r\n\r\n";
			text += " 							#d#e#L0#确认转移属性#l#k";
		    cm.sendSimple(text);
			}
			
        } else if (a == 2) {
			var ItemID = cm.getInventory(1).getItem(1).getItemId();
		var ItemID1 = cm.getInventory(1).getItem(2).getItemId();
		var 强化次数 = cm.getInventory(1).getItem(1).getLevel();	
		var 力量 = cm.getInventory(1).getItem(1).getStr();		
		var 敏捷 = cm.getInventory(1).getItem(1).getDex();	
		var 智力 = cm.getInventory(1).getItem(1).getInt();	
		var 运气 = cm.getInventory(1).getItem(1).getLuk();	
		var 物攻 = cm.getInventory(1).getItem(1).getWatk();
		var 魔攻 = cm.getInventory(1).getItem(1).getMatk();
		var 升级次数 = cm.getInventory(1).getItem(1).getUpgradeSlots();	
           if (selection == 0&&cm.haveItem(4011008,3)&& cm.getMeso() >=200000000) {	//帽子
					cm.gainItem(4011008,-3);
					cm.gainMeso(-200000000);
                    var equip = ii.randomizeStats(ii.getEquipById(ItemID1)).copy();
					var type=ii.getEquipById(ItemID1);	
					equip.setPosition(1);						
					equip.setStr(力量);
					equip.setDex(敏捷);
					equip.setInt(智力);
					equip.setLuk(运气);	
					equip.setWatk(物攻);	
					equip.setMatk(魔攻);					
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), equip,false,false);
					cm.gainItem(ItemID1, -1);
					cm.gainItem(ItemID, -1);
		 		    cm.sendOk("属性转移成功~");
		 		    cm.dispose();
				} else {
					cm.sendOk("你的材料不足!!!");
					cm.dispose();
				}
            }
        }
    }//mode