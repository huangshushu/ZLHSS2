var MapleInventoryManipulator = Java.type('server.MapleInventoryManipulator');
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var status = 0;
var job;

var Equitype = [
    1302070,
    1312142,
	1322100,
	1332214,
	1332242,
	1302275,
	1312153,
	1322203,
	1332225,
	1302297,
	1312173,
	1322223,
	1332247,
	1302333,
	1312199,
	1322250,
	1332274	
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
			cm.sendNext(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n            #r欢迎来到月月冒险岛星火武器强化#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n       #r100%#b成功，提升属性：#r四维6～8，攻击力9～12#k\r\n\r\n#b      每次强化消耗：#v2613000##z2613000#*1\r\n");
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
					cm.sendYesNo(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n            #r欢迎来到月月冒险岛星火武器强化#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n                #b背包内卷轴剩余#r#v2613000#*#c2613000#\r\n\r\n              #b你确定要强化的武器为：#v" + cc.getItemId() + " \r\n\r\n");
				}
			} else {
				cm.sendOk("#r抱歉，时装不能进行该类强化！" );
				cm.dispose();
			}	
		}
		else if (status == 2) {
			if (cm.haveItem(2613000,1) == false) {
				cm.sendOk("#b抱歉，你拥有的#v2613000##r#z2613000##b数量不足！");
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
				cm.gainItem(2613000,-1);
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
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"星火武器强化" + " : 恭喜" + cm.getPlayer().getName() +"使用星火单手武器攻击卷成功为武器提升了四维"+四维随机+"，攻击"+物攻随机+"，大家祝贺他/她！",true).getBytes());
				status = -1;
			}
		}
	}
}	