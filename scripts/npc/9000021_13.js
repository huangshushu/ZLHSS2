var MapleInventoryManipulator = Java.type('server.MapleInventoryManipulator');
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var status = 0;
var job;

var Equitype = [
    1032101
    
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
			cm.sendNext("#r您现在所选择的是#d[毒物耳环碎片强化]#v1032101##k#l\r\n#d[毒物耳环碎片强化]#b强化成功率:#r100%#k\r\n#b属性幅度:#r-2~+4#k\r\n#b强化消耗:#v4001198##r*1#k\r\n#d次数限制:每天上限 #r[10] #k次#l\r\n#bPS：#d由于星之力的魔化产生了不可描述的变异,所以该强化系统无论强化成功或失败,均不会扣除强化次数!\r\n");
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
				cm.sendYesNo(""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n#d#e邮票剩余:[#c4001198#]颗 今日已强化：["+cm.getPlayer().getBossLog('耳环') +"]次\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n你要强化的装备为:\r\n\r\n#v" + cc.getItemId() + " \r\n\r\n#b#e需要邮票：#r 1 张#k\r\n#r#e确定要开始强化吗?");
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
			if (!cm.haveItem(4001198,1)&&cm.getMeso()>=500000) {
				cm.sendOk("#b对不起,邮票数量不足:#r[1]颗！#k\r\n\t   #b当前所拥有#v4001198#:#r [#c4001198#] 颗!#l");
				status = -1;
			} else if (cm.getBossLog("耳环") >= 10) {
				cm.setBossLog("耳环");
				cm.sendOk("你今天已经10次强化过了,请明天在来吧!");
				status = -1;
			} else if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("请把要强化的装备放在第一格才能进行.");
				status = -1;
			} else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("限时装备不能进行强化.");
				status = -1;
			} else {
				var statup = new java.util.ArrayList();
				var sj =  Math.floor(Math.random() * 2);//1/3的成功概率 
				cm.gainItem(4001198,-1);
				cm.gainMeso(-500000);
				
				if (sj == 0) {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var 力量随机=Math.floor(Math.random()*4);
                    var 敏捷随机=Math.floor(Math.random()*4);
                    var 运气随机=Math.floor(Math.random()*4);
                    var 智力随机=Math.floor(Math.random()*4);
				    var 物攻随机=Math.floor(Math.random()*4);
                    var 魔攻随机=Math.floor(Math.random()*4);
					var 大箭头 = "#fUI/Basic/icon/arrow#"; // → 大箭头
					item.setWatk(item.getWatk()*1+物攻随机);
				    item.setMatk(item.getMatk()*1+魔攻随机);
				    item.setStr(item.getStr()*1+力量随机);
				    item.setDex(item.getDex()*1+敏捷随机);
				    item.setInt(item.getInt()*1+运气随机);
				    item.setLuk(item.getLuk()*1+智力随机);
					//item.setDex(item.getDex()*1+lvsj);
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.setBossLog('耳环');
					cm.sendOk("#r#e强化成功,祝您游戏愉快!#k \r\n     力量： " + 大箭头 + "#r + [" + 力量随机 + "]#k\r\n     敏捷： " + 大箭头 + "#r + [" + 敏捷随机 + "]#k\r\n     运气： " + 大箭头 + "#r + [" + 运气随机 + "]#k\r\n     智力： " + 大箭头 + "#r + [" + 智力随机 + "]#k\r\n     攻击： " + 大箭头 + "#r + [" + 物攻随机 + "]#k\r\n     魔攻： " + 大箭头 + "#r + [" + 魔攻随机 + "]#k\r\n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"毒物耳环碎片公告" + " : " + cm.getPlayer().getName() +"玩家成功 升级毒物耳环 属性提升。O(∩_∩)O~",true).getBytes());
			
					//m.getC().getChannelServer().getWorldInterface().broadcastMessage(null,MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "在自由市场-强化NPC-强化成功！大家一起恭喜他（她）吧！！！",item, true).getBytes());
				//cm.laba(cm.getPlayer().getName() + "『强化公告』" + " : " + "在拍卖-强化成功！大家一起恭喜他（她）吧！", 9);
					status = -1;
				} else {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var 力量随机=Math.floor(Math.random()*2);
                    var 敏捷随机=Math.floor(Math.random()*2);
                    var 运气随机=Math.floor(Math.random()*2);
                    var 智力随机=Math.floor(Math.random()*2);
				    var 物攻随机=Math.floor(Math.random()*2);
                    var 魔攻随机=Math.floor(Math.random()*2);
					var 大箭头 = "#fUI/Basic/icon/arrow#"; // → 大箭头
					item.setWatk(item.getWatk()*1-物攻随机);
				    item.setMatk(item.getMatk()*1-魔攻随机);
				    item.setStr(item.getStr()*1-力量随机);
				    item.setDex(item.getDex()*1-敏捷随机);
				    item.setInt(item.getInt()*1-运气随机);
				    item.setLuk(item.getLuk()*1-智力随机);
					//item.setDex(item.getDex()*1+lvsj);
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.setBossLog('耳环');
					cm.sendOk("#r#e很遗憾,强化失败!#k \r\n     力量： " + 大箭头 + "#r - [" + 力量随机 + "]#k\r\n     敏捷： " + 大箭头 + "#r - [" + 敏捷随机 + "]#k\r\n     运气： " + 大箭头 + "#r - [" + 运气随机 + "]#k\r\n     智力： " + 大箭头 + "#r - [" + 智力随机 + "]#k\r\n     攻击： " + 大箭头 + "#r - [" + 物攻随机 + "]#k\r\n     魔攻： " + 大箭头 + "#r - [" + 魔攻随机 + "]#k\r\n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"毒物耳环碎片公告" + " : " + cm.getPlayer().getName() +"玩家失败 升级毒物耳环 属性减少。O(∩_∩)O~",true).getBytes());
			
					status = -1;
				}
			}
		}
	}
}	