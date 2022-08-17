
var status = 0;
var job;

var Equitype = [
    1112949
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
			cm.sendNext("#r您现在所选择的是#d[时装戒指进化]装备放第一格#v1112949##k#l\r\n#b进化成功率:#r100%#k\r\n#b全属性:+30  #k\r\n#b进化消耗:#v4310060##r*1#k\r\n#bPS：#r进化次数100次，量力而行！\r\n");
		} else if (status == 1) {

			var cc = cm.getInventory(1).getItem(1);
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
		    var item = cm.getInventory(1).getItem(1);
			var statup = new java.util.ArrayList();
		//	var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
			if (cc == null) {
				cm.sendOk("#b第一格子无东西！#k");
				status = -1;
			} else if (!cc.getItemId() == 1112949 || !cc.getItemId() == 1112949) {
				} else if (!ii.isCash(item.getItemId())==false) {
				cm.sendYesNo(""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n#d#e剩余#v4310060#:[#c4310060#]个 已进化：["+cm.getPlayer().getBossLog('时装戒指1',1) +"]次\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n你要进化的装备为:\r\n\r\n#v" + cc.getItemId() + " \r\n\r\n#b#e需要#v4310060#：#r 1 个#k\r\n#r#e确定要开始进化吗?");
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
			if (!cm.haveItem(4310060,1)) {
				cm.sendOk("#b对不起,您进化道具数量不足:#r[1]个！#k\r\n\t   #b当前所拥有#v4310060#:#r [#c4310060#] 个!#l");
				status = -1;
			
			} else if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("请把要进化的装备放在第一格才能进行.");
				status = -1;
			} else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("限时装备不能进行进化.");
				status = -1;
		    } else if(cm.getInventory(1).getItem(1).getLevel() > 99) {
				cm.sendOk("已达到最高上限100次，无法进化。");
				cm.dispose();
			
			
			} else {
				var statup = new java.util.ArrayList();
				var sj =  Math.floor(Math.random() * 2);//1/3的成功概率 
				cm.gainItem(4310060,-1);
				
				if (sj == 0) {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var 力量随机=30
                    var 敏捷随机=30
                    var 运气随机=30
                    var 智力随机=30
				    //var 物攻随机=0
                    var 魔攻随机=50
					var 大箭头 = "#fUI/Basic/icon/arrow#"; // → 大箭头
					item.setWatk(item.getWatk()*1+0);
				    item.setMatk(item.getMatk()*1+50);
				    item.setStr(item.getStr()*1+30);
				    item.setDex(item.getDex()*1+30);
				    item.setInt(item.getInt()*1+30);
				    item.setLuk(item.getLuk()*1+30);
				    item.setLevel( item.getLevel() + 1);
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					
					cm.getPlayer().setBossLog("时装戒指1",1,1);
					cm.sendOk("#r#e进化成功,祝您游戏愉快!#k \r\n     力量： " + 大箭头 + "#r + [" + 力量随机 + "]#k\r\n     敏捷： " + 大箭头 + "#r + [" + 敏捷随机 + "]#k\r\n     运气： " + 大箭头 + "#r + [" + 运气随机 + "]#k\r\n     智力： " + 大箭头 + "#r + [" + 智力随机 + "]#k\r\n     ");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "时装戒指进化" + " : " + "恭喜" + cm.getChar().getName() + "成功将时装戒指进化至第["+cm.getPlayer().getBossLog('时装戒指1',1) +"]阶，战斗力又提升了一个档次！"));
					//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勋章潜能公告" + " : " + cm.getPlayer().getName() +"玩家成功开启勋章潜能。O(∩_∩)O~",true).getBytes());
			        //Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "宿命武器卷轴公告" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功 使用了宿命武器卷轴 130级武器属性提升。O(∩_∩)O~！"));
				
					//m.getC().getChannelServer().getWorldInterface().broadcastMessage(null,MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "在自由市场-进化NPC-进化成功！大家一起恭喜他（她）吧！！！",item, true).getBytes());
				//cm.laba(cm.getPlayer().getName() + "『进化公告』" + " : " + "在拍卖-进化成功！大家一起恭喜他（她）吧！", 9);
					status = -1;
				} else {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var 力量随机=30
                    var 敏捷随机=30
                    var 运气随机=30
                    var 智力随机=30
				    //var 物攻随机=0
                    var 魔攻随机=50
					var 大箭头 = "#fUI/Basic/icon/arrow#"; // → 大箭头
					item.setWatk(item.getWatk()*1+0);
				    item.setMatk(item.getMatk()*1+50);
				    item.setStr(item.getStr()*1+30);
				    item.setDex(item.getDex()*1+30);
				    item.setLuk(item.getLuk()*1+30);
				    item.setInt(item.getInt()*1+30);
				    item.setLevel( item.getLevel() + 1);
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.getPlayer().setBossLog("时装戒指1",1,1);
					cm.sendOk("#r#e进化成功,祝您游戏愉快!#k \r\n     力量： " + 大箭头 + "#r + [" + 力量随机 + "]#k\r\n     敏捷： " + 大箭头 + "#r + [" + 敏捷随机 + "]#k\r\n     运气： " + 大箭头 + "#r + [" + 运气随机 + "]#k\r\n     智力： " + 大箭头 + "#r + [" + 智力随机 + "]#k\r\n     ");
					//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勋章潜能失败公告" + " : " + cm.getPlayer().getName() +"玩家勋章潜能失败。O(∩_∩)O~",true).getBytes());
		            //Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "宿命武器卷轴公告" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功 使用了宿命武器卷轴 130级武器属性提升。O(∩_∩)O~！"));

					status = -1;
				}
			}
		}
	}
}	