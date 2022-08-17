
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
	1332274,
	1382235,
	1382199,
	1382037,
	1382049,
	1382050,
	1382051,
	1382052,
	1382226,
	1382208,
	1382231,
	1382259,
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
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
		if (status == 0) {
			cm.sendNext("#r您现在所选择的是#d[135级PB武器]+[150级FFN武器]#k#l\r\n#d[宿命卷轴]#b成功率:#r100%#k\r\n#b全属性攻魔:#r +5~+10 #k\r\n#b强化消耗:#v2046913##r*1#k\r\n#d次数限制:上限 #r[35] #k次#l\r\n#bPS：#d由于宿命卷轴的魔化产生了不可描述的变异,该强化系统强化成功,会扣除强化次数!\r\n");
		} else if (status == 1) {

			var cc = cm.getInventory(1).getItem(1);
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
		    var item = cm.getInventory(1).getItem(1);
			var statup = new java.util.ArrayList();
		//	var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
			if (cc == null) {
				cm.sendOk("#b第一格子无东西！#k");
				status = -1;
			} else if (!cc.getItemId() == 1902000 || !cc.getItemId() == 1902005) {
				} else if (!ii.isCash(item.getItemId())==true) {
				cm.sendYesNo(""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n#d#e剩余#v2046913#:[#c2046913#]张 今日已强化：["+cm.getPlayer().getBossLog('勋章2') +"]次\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n你要强化的装备为:\r\n\r\n#v" + cc.getItemId() + " \r\n\r\n#b#e需要#v2046913#：#r 1 张#k\r\n#r#e确定要开始强化吗?");
			} else {
				cm.sendOk("商城物品暂不支持." );
				status = -1;
			}
			var bur = 0
            for (var i = 0; i < Equitype.length; i++) {
                if ( item.getItemId() == Equitype[i]){
                	bur = 1
            	}
			} 
			if ( bur == 0 ){
				cm.sendOk("第一个物品不符合要求." );
				status = -1;
			}
		} else if (status == 2) {
			if (!cm.haveItem(2046913,1)) {
				cm.sendOk("#b对不起,您强化道具数量不足:#r[1]张！#k\r\n\t   #b当前所拥有#v2046913#:#r [#c2046913#] 张!#l");
				status = -1;
			} else if (cm.getBossLog("勋章2") >= 100) {
				cm.setBossLog("勋章2");
				cm.sendOk("你今天已经10次强化过了,请明天在来吧!");
				status = -1;
			} else if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("请把要强化的装备放在第一格才能进行.");
				status = -1;
			} else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("限时装备不能进行强化.");
				status = -1;
		    } else if(cm.getInventory(1).getItem(1).getLevel() > 34) {
				cm.sendOk("已达到最高上限，无法强化。");
				cm.dispose();
			} else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("升级次数没了，无法强化!");
                    cm.dispose();
			
			} else {
				var statup = new java.util.ArrayList();
				var sj =  Math.floor(Math.random() * 2);//1/3的成功概率 
				cm.gainItem(2046913,-1);
				cm.gainMeso(-1000000);
				
				if (sj == 0) {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var 力量随机=Math.floor(Math.random()*6)+5;
                    var 敏捷随机=Math.floor(Math.random()*6)+5;
                    var 运气随机=Math.floor(Math.random()*6)+5;
                    var 智力随机=Math.floor(Math.random()*6)+5;
				    var 物攻随机=Math.floor(Math.random()*6)+5;
                    var 魔攻随机=Math.floor(Math.random()*6)+5;
					var 大箭头 = "#fUI/Basic/icon/arrow#"; // → 大箭头
					item.setWatk(item.getWatk()*1+物攻随机);
				    item.setMatk(item.getMatk()*1+魔攻随机);
				    item.setStr(item.getStr()*1+力量随机);
				    item.setDex(item.getDex()*1+敏捷随机);
				    item.setLuk(item.getLuk()*1+运气随机);
				    item.setInt(item.getInt()*1+智力随机);
					//item.setDex(item.getDex()*1+lvsj);
					item.setUpgradeSlots(item.getUpgradeSlots()-1);
				    item.setLevel( item.getLevel() + 1);
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.setBossLog('勋章1');
					cm.sendOk("#r#e强化成功,祝您游戏愉快!#k \r\n     力量： " + 大箭头 + "#r + [" + 力量随机 + "]#k\r\n     敏捷： " + 大箭头 + "#r + [" + 敏捷随机 + "]#k\r\n     运气： " + 大箭头 + "#r + [" + 运气随机 + "]#k\r\n     智力： " + 大箭头 + "#r + [" + 智力随机 + "]#k\r\n     攻击： " + 大箭头 + "#r + [" + 物攻随机 + "]#k\r\n     魔攻： " + 大箭头 + "#r + [" + 魔攻随机 + "]#k\r\n");
					//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勋章潜能公告" + " : " + cm.getPlayer().getName() +"玩家成功开启勋章潜能。O(∩_∩)O~",true).getBytes());
			        //Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "宿命武器卷轴公告" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功 使用了宿命武器卷轴 130级武器属性提升。O(∩_∩)O~！"));
				
					//m.getC().getChannelServer().getWorldInterface().broadcastMessage(null,MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "在自由市场-强化NPC-强化成功！大家一起恭喜他（她）吧！！！",item, true).getBytes());
				//cm.laba(cm.getPlayer().getName() + "『强化公告』" + " : " + "在拍卖-强化成功！大家一起恭喜他（她）吧！", 9);
					status = -1;
				} else {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var 力量随机=Math.floor(Math.random()*6)+5;
                    var 敏捷随机=Math.floor(Math.random()*6)+5;
                    var 运气随机=Math.floor(Math.random()*6)+5;
                    var 智力随机=Math.floor(Math.random()*6)+5;
				    var 物攻随机=Math.floor(Math.random()*6)+5;
                    var 魔攻随机=Math.floor(Math.random()*6)+5;
					var 大箭头 = "#fUI/Basic/icon/arrow#"; // → 大箭头
					item.setWatk(item.getWatk()*1+物攻随机);
				    item.setMatk(item.getMatk()*1+魔攻随机);
				    item.setStr(item.getStr()*1+力量随机);
				    item.setDex(item.getDex()*1+敏捷随机);
				    item.setLuk(item.getLuk()*1+运气随机);
				    item.setInt(item.getInt()*1+智力随机);
					//item.setDex(item.getDex()*1+lvsj);
					item.setUpgradeSlots(item.getUpgradeSlots()-1);
				    item.setLevel( item.getLevel() + 1);
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.setBossLog('勋章1');
					cm.sendOk("#r#e强化成功,祝您游戏愉快!#k \r\n     力量： " + 大箭头 + "#r + [" + 力量随机 + "]#k\r\n     敏捷： " + 大箭头 + "#r + [" + 敏捷随机 + "]#k\r\n     运气： " + 大箭头 + "#r + [" + 运气随机 + "]#k\r\n     智力： " + 大箭头 + "#r + [" + 智力随机 + "]#k\r\n     攻击： " + 大箭头 + "#r + [" + 物攻随机 + "]#k\r\n     魔攻： " + 大箭头 + "#r + [" + 魔攻随机 + "]#k\r\n");
					//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勋章潜能失败公告" + " : " + cm.getPlayer().getName() +"玩家勋章潜能失败。O(∩_∩)O~",true).getBytes());
		            //Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "宿命武器卷轴公告" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功 使用了宿命武器卷轴 130级武器属性提升。O(∩_∩)O~！"));

					status = -1;
				}
			}
		}
	}
}	