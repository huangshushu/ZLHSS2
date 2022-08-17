var MapleInventoryManipulator = Java.type('server.MapleInventoryManipulator');
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var status = 0;
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var job;

var Equitype = [
    1112961
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
			cm.sendNext(""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n             #r欢迎来到快乐怪物戒指强化中心\r\n"+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n\r\n                        #v1112961##k#l\r\n            #d强化成功率:#r100%  属性幅度:#r+2~+5#k\r\n     #b强化消耗:#v3992014##r*1           #b每天上限 #r[20] #k次#l\r\n\r\n");
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
				} else if (cm.haveItem(1112961,1)) {
				cm.sendYesNo(""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n#d#e强化材料剩余:[#c3992014#]颗 今日已强化：["+cm.getPlayer().getBossLog('klgw2') +"]次\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n你要强化的装备为:\r\n\r\n#v" + cc.getItemId() + " \r\n\r\n#b#e需要强化材料：#r 1 颗#k\r\n\r\n#r#e确定要开始强化吗?");
			//} else {
				//cm.sendOk("商城物品暂不支持." );
				//status = -1;
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
			if (!cm.haveItem(3992014,1)) {
				cm.sendOk("#b对不起,您强化材料数量不足:#r[1]颗！#k\r\n\t   #b当前所拥有#v3992014#:#r [#c3992014#] 颗!#l");
				status = -1;
			} else if (cm.getBossLog("klgw2") >= 20) {
				//cm.setBossLog("klgw1");
				cm.sendOk("你今天已经20次强化过了,请明天在来吧!");
				status = -1;
			} else if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("请把要强化的装备放在第一格才能进行.");
				status = -1;
			} else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("限时装备不能进行强化.");
				status = -1;
			} else {
				var statup = new java.util.ArrayList();
				var sj =  Math.floor(Math.random() * 1);//1/3的成功概率 
				cm.gainItem(3992014,-1);
				//cm.gainMeso(-2000000);
				
				if (sj == 0) {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var 力量随机=Math.floor(Math.random()*3+2);
                    var 敏捷随机=Math.floor(Math.random()*3+2);
                    var 运气随机=Math.floor(Math.random()*3+2);
                    var 智力随机=Math.floor(Math.random()*3+2);
				    var 物攻随机=Math.floor(Math.random()*3+2);
                    var 魔攻随机=Math.floor(Math.random()*3+2);
					var 大箭头 = "#fUI/Basic/icon/arrow#"; // → 大箭头
					item.setWatk(item.getWatk()*1+物攻随机);
				    item.setMatk(item.getMatk()*1+魔攻随机);
				    item.setStr(item.getStr()*1+力量随机);
				    item.setDex(item.getDex()*1+敏捷随机);
				    item.setInt(item.getInt()*1+运气随机);
				    item.setLuk(item.getLuk()*1+智力随机);
					//item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.setBossLog('klgw2');
					cm.sendOk("#r#e强化成功,祝您游戏愉快!#k \r\n     力量： " + 大箭头 + "#r + [" + 力量随机 + "]#k\r\n     敏捷： " + 大箭头 + "#r + [" + 敏捷随机 + "]#k\r\n     运气： " + 大箭头 + "#r + [" + 运气随机 + "]#k\r\n     智力： " + 大箭头 + "#r + [" + 智力随机 + "]#k\r\n     攻击： " + 大箭头 + "#r + [" + 物攻随机 + "]#k\r\n     魔攻： " + 大箭头 + "#r + [" + 魔攻随机 + "]#k\r\n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"限时活动戒指强化" + " : " + cm.getPlayer().getName() +"玩家成功强化了限时活动戒指，提升了" + 力量随机 + "点力量，" + 敏捷随机 + "点敏捷，" + 智力随机 + "点智力，" + 运气随机 + "点运气，" + 物攻随机 + "点攻击，" + 魔攻随机 + "点魔力",true).getBytes());
					status = -1;
				} else {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var 力量随机=Math.floor(Math.random()*3+2);
                    var 敏捷随机=Math.floor(Math.random()*3+2);
                    var 运气随机=Math.floor(Math.random()*3+2);
                    var 智力随机=Math.floor(Math.random()*3+2);
				    var 物攻随机=Math.floor(Math.random()*3+2);
                    var 魔攻随机=Math.floor(Math.random()*3+2);
					var 大箭头 = "#fUI/Basic/icon/arrow#"; // → 大箭头
					item.setWatk(item.getWatk()*1+物攻随机);
				    item.setMatk(item.getMatk()*1+魔攻随机);
				    item.setStr(item.getStr()*1+力量随机);
				    item.setDex(item.getDex()*1+敏捷随机);
				    item.setInt(item.getInt()*1+运气随机);
				    item.setLuk(item.getLuk()*1+智力随机);
					//item.setDex(item.getDex()*1+lvsj);
					//item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.setBossLog('klgw2');
					cm.sendOk("#r#e强化成功,祝您游戏愉快!#k \r\n     力量： " + 大箭头 + "#r + [" + 力量随机 + "]#k\r\n     敏捷： " + 大箭头 + "#r + [" + 敏捷随机 + "]#k\r\n     运气： " + 大箭头 + "#r + [" + 运气随机 + "]#k\r\n     智力： " + 大箭头 + "#r + [" + 智力随机 + "]#k\r\n     攻击： " + 大箭头 + "#r + [" + 物攻随机 + "]#k\r\n     魔攻： " + 大箭头 + "#r + [" + 魔攻随机 + "]#k\r\n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"限时活动戒指强化" + " : " + cm.getPlayer().getName() +"玩家成功强化了限时活动戒指，提升了" + 力量随机 + "点力量，" + 敏捷随机 + "点敏捷，" + 智力随机 + "点智力，" + 运气随机 + "点运气，" + 物攻随机 + "点攻击，" + 魔攻随机 + "点魔力",true).getBytes());
			
					status = -1;
				}
			}
		}
	}
}	