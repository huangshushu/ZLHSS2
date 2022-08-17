
var status = 0;

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
		if (status == 0) {
			cm.sendNext("欢迎来到#r" + cm.getChannelServer().getServerName() + "\r\n\在我这里可以使用物品强化装备!\r\n#e#r60%增加可强化一次，需要#v3992025#300个\n\r\n#b强化次数#r+1,#b请将需要强化的装备放在#r第一格!\r\nPS：强化后不能交易#k\r\nPS:每人每天只能使用 10 次该功能\r\n");
		} else if (status == 1) {
			var cc = cm.getInventory(1).getItem(1);
			if (cm.haveItem(3992025,500)){
			} else {
				cm.sendOk("你没有#v3992025#，不能强化！");
				cm.dispose();
				}
				
			if(cc!= null ){
				cm.sendYesNo("你要强化的装备为:\r\n\r\n#v"+cc.getItemId()+"#\r\n\r\n#r#e确定要开始强化吗?");
			} else {
				cm.sendOk("#b第一格子无东西！#k");	
				cm.dispose();
			} 
		} else if (status == 2) {
		  if (cm.getBossLog("qianghua1") == 10){
				cm.sendOk("你今天已经强化过10次了,请明天在来吧!");
				cm.dispose();
			} else if (cm.getInventory(1).getItem(1) == null)  {
				cm.sendOk("请把要强化的装备放在第一格才能进行.");
				cm.dispose();
			} else if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("限时装备不能进行强化.");
				cm.dispose();
			} else {
				var statup = new java.util.ArrayList();
				var sj = Math.floor(Math.random()*20)+1;
				cm.gainItem(3992025,-500);//cm.gainNX(-5000);//扣除点卷
				if(sj >=10){
					var itemId1 = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type =  ii.getInventoryType(itemId1);
					item.setUpgradeSlots(item.getUpgradeSlots()+1);
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
					cm.setBossLog('qianghua1');
					cm.sendOk("#r#e强化成功,祝您游戏愉快!#k \r\n装备升级次数+1\r\n当前强化次数#g"+item.getUpgradeSlots());
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场-饮水机-强化成功！大家祝贺他(她)吧！",true).getBytes()); //
					//cm.laba(cm.getPlayer().getName() + "『强化公告』" + " : " + "在自由相框-强化成功！大家一起恭喜他（她）吧！",9);
					cm.dispose();
				}else {
					cm.setBossLog('qianghua1');
					cm.sendOk("#r#e强化失败！,祝您游戏愉快!#k装备并未有任何变化!");	 
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『强化公告』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]在自由市场-饮水机-强化失败！大家一起安慰他(她)吧！",true).getBytes());
					//cm.laba(cm.getPlayer().getName() + "『强化公告』" + " : " + "在自由相框-强化失败！大家一起安慰他（她）吧！",9);
					cm.dispose();
				}
			}
		}
	}
}	