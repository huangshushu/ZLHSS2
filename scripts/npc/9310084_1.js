
var status = 0;
var job;
var DJ="10";//扣除的点券
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
			cm.sendNext("欢迎来到#r" + cm.getChannelServer().getServerName() + "\r\n\在我这里可以使用物品强化装备!\r\n#e#r随机增加可强化一次仅需#v4251302##z4251302# #b1#r 个+500W金币\r\n\r\n#b强化次数#r+1#k\r\n");
		} else if (status == 1) {
						var cc = cm.getInventory(1).getItem(1);
			if(cc!= null ){
			 cm.sendYesNo("你要强化的装备为:\r\n\r\n#v"+cc.getItemId()+"#\r\n\r\n#r#e确定要开始强化吗?");
			} else{
			cm.sendOk("#b第一格子无东西！#k");	
			cm.dispose();
			} 
			
		} else if (status == 2) {
		       if (!cm.haveItem(4251302, 1) || cm.getMeso() <= 5000000)  {
		            cm.sendOk("#v4251302#或金币不足500万!");
				    cm.dispose();
          } else if (cm.getBossLog("qianghua1") == 1){//每天一次
                cm.sendOk("你今天已经强化过了,请明天在来吧!");
                cm.dispose();
} else if (cm.getInventory(1).getItem(1) == null)  {
		            cm.sendOk("请把要强化的装备放在第一格才能进行.");
				    cm.dispose();
} else if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
		            cm.sendOk("限时装备不能进行强化.");
				    cm.dispose();
			
		} else {
			
var statup = new java.util.ArrayList();
var sj = Math.floor(Math.random()*2);
		 cm.gainItem(4251302,-1);
		 cm.gainMeso(-5000000);//扣除多少金币
		 
		 if(sj ==1){
                    var itemId1 = cm.getInventory(1).getItem(1).getItemId();
		 var item = cm.getInventory(1).getItem(1).copy();
		 var ii = MapleItemInformationProvider.getInstance();
					var type =  ii.getInventoryType(itemId1);
item.setUpgradeSlots(item.getUpgradeSlots()+1);
item.setLocked(1);
		 
		 MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
		 MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
                cm.setBossLog('qianghua1');
				cm.sendOk("#r#e强化成功,祝您游戏愉快!#k \r\n装备升级次数+1\r\n当前强化次数#g"+item.getUpgradeSlots());
//cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "在自由市场-强化NPC-强化成功！大家一起恭喜他（她）吧！！！",item, true).getBytes());
				cm.laba(cm.getPlayer().getName() + "『强化公告』" + " : " + "在拍卖-强化成功！大家一起恭喜他（她）吧！",9);
				cm.dispose();
				 }else {
				cm.setBossLog('qianghua1');
				cm.sendOk("#r#e强化失败！,祝您游戏愉快!#k装备并未有任何变化!");	 
				cm.laba(cm.getPlayer().getName() + "『强化公告』" + " : " + "在拍卖-强化失败！大家一起为他（她）祈祷吧！",9);
				cm.dispose();
				 }

		}
		}
	}
}	
