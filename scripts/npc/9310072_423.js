var MapleInventoryManipulator = Java.type('server.MapleInventoryManipulator');
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var status = 0;
var job;

var Equitype = [
    1402014,
    1402037,
	1402180,
	1402185,
	1412126,
    1422129,
	1432158,
	1442209,
	1452196,
	1462184,
	1472205,
	1482159,
	1492170,
	1402214,
	1422156,
	1432182,
	1452220,
	1462208,
	1472230,
	1482183,
	1492194,
	1402196,
	1412135,
	1422140,
	1432167,
	1442223,
	1452205,
	1462193,
	1472214,
	1482168,
	1492179,
	1402220,
	1412152,
	1422158,
	1432187,
	1442242,
	1452226,
	1462213,
	1472235,
	1482189,
	1492199,
	1402251,
	1412177,
	1422184,
	1432214,
	1442268,
	1452252,
	1462239,
	1472261,
	1482216,
	1492231
];

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} 
	else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		
		if (status == 0) {
			cm.sendNext(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n            #r欢迎来到月月冒险岛星火武器强化#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n       #r100%#b成功，提升属性：#r四维6～8，攻击力9～12#k\r\n\r\n#b      每次强化消耗：#v2612010##z2612010#*1\r\n");
		} 
		else if (status == 1) {
			var cc = cm.getInventory(1).getItem(1);
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
		    var item = cm.getInventory(1).getItem(1);
			var statup = new java.util.ArrayList();
			if (cc == null) {
				cm.sendOk("#r抱歉，你背包的装备栏第1格没有装备，请重新确认！");
			} else if (!cc.getItemId() == 1902000 || !cc.getItemId() == 1902005) {
			} else if (!ii.isCash(item.getItemId())==true) {
				var bur = 0;
				for (var i = 0; i < Equitype.length; i++) {
					if (item.getItemId() == Equitype[i]){
						bur =1;
					} 
				}
				if (bur == 0) {
					cm.sendOk("#r抱歉，你背包装备栏第1格的装备不符合要求，请重新确认！" );
					cm.dispose();
				}
				else if (bur == 1) {
					cm.sendYesNo(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n            #r欢迎来到月月冒险岛星火武器强化#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n                #b背包内卷轴剩余#r#v2612010#*#c2612010#\r\n\r\n              #b你确定要强化的武器为：#v" + cc.getItemId() + " \r\n\r\n");
				}
			} else {
				cm.sendOk("#r抱歉，时装不能进行该类强化！" );
				cm.dispose();
			}	
		}
		else if (status == 2) {
			if (cm.haveItem(2612010,1) == false) {
				cm.sendOk("#b抱歉，你拥有的#v2612010##r#z2612010##b数量不足！");
				status = -1;
			} else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                cm.sendOk("#r抱歉，你的武器的升级次数已经用完，请去提升次数！");
                status = -1;
			} else if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("#r抱歉，你背包的装备栏第1格没有装备，请重新确认！");
				status = -1;
			} else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("#r抱歉，有时间限制的装备不能进行强化！");
				status = -1;
			} else {
				var statup = new java.util.ArrayList();
				cm.gainItem(2612010,-1);
				var id = cm.getInventory(1).getItem(1).getItemId();
				var item = cm.getInventory(1).getItem(1).copy();
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(id);
				var 四维随机=Math.floor(Math.random()*2+6);
                var 物攻随机=Math.floor(Math.random()*3+9);
				var 大箭头 = "#fUI/Basic/icon/arrow#";
				item.setWatk(item.getWatk()*1+物攻随机);
				item.setMatk(item.getMatk()*1+0);
				item.setStr(item.getStr()*1+四维随机);
				item.setDex(item.getDex()*1+四维随机);
				item.setInt(item.getInt()*1+四维随机);
				item.setLuk(item.getLuk()*1+四维随机);
				item.setUpgradeSlots((item.getUpgradeSlots() - 1));
				item.setLevel( item.getLevel() + 1);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.sendOk("#r恭喜你，强化成功，为武器提升了四维"+四维随机+"，攻击"+物攻随机+"！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"星火武器强化" + " : 恭喜" + cm.getPlayer().getName() +"使用星火双手武器攻击卷成功为武器提升了四维"+四维随机+"，攻击"+物攻随机+"，大家祝贺他/她！",true).getBytes());
				status = -1;
			}
		}
	}
}	