var status = 0;
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";

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
			cm.sendNext(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n            #r欢迎来到幻想冒险岛升级次数提升#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n消耗完装备自带升级次数后，可消耗#v3992025#提升一次升级次数\r\n    #e#r每次提升需要#v3992025#200个，60%提升可升级次数+1\r\n\r\n       #b请将需要提升次数的装备放在背包第一格！\r\n\r\n           #r注意:每个装备最多升级35次 \r\n          每人每天只能使用100次该功能\r\n");
		} else if (status == 1) {
			var cc = cm.getInventory(1).getItem(1);
			if (cm.haveItem(3992025,200)){
			} else {
				cm.sendOk("#r你背包内没有足够的#v3992025#，请仔细确认！");
				cm.dispose();
				}
		    
				
			if(cc!= null ){
				cm.sendYesNo(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n            #r欢迎来到幻想冒险岛升级次数提升#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n            #b需要提升升级次数的装备为：#v"+cc.getItemId()+"#\r\n\r\n              #r确定要提升它的升级次数吗？");
			} else {
				cm.sendOk("#b你背包的装备栏第1格子没有装备，请仔细确认！");	
				cm.dispose();
			} 
		} else if (status == 2) {
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var item = cm.getInventory(1).getItem(1);
			var cishu = cm.getInventory(1).getItem(1).getUpgradeSlots() + cm.getInventory(1).getItem(1).getLevel();
			if (cm.getBossLog("qianghua1") == 5000){
				cm.sendOk("#b你今天已经使用该功能#r100次#b，请等明天重置次数！");
				cm.dispose();
				
			} else if (cm.getInventory(1).getItem(1) == null)  {
				cm.sendOk("#b你背包的装备栏第1格子没有装备，请仔细确认！");
				cm.dispose();
				
			} else if (ii.isCash(item.getItemId()) == true) {
                cm.sendOk("#r抱歉，时装不能进行升级次数提升！");
                cm.dispose();
				
            } else if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("#b有时限的装备不能使用该功能！");
				cm.dispose();
				
			} else if(cishu >= 35) {
				cm.sendOk("#b装备的升级次数上限已达到#r35次#b，请仔细确认！");
				cm.dispose();
				
			} else {
				var statup = new java.util.ArrayList();
				var sj = Math.floor(Math.random()*10);
				cm.gainItem(3992025,-200);
				if(sj >=3){
					var itemId1 = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type =  ii.getInventoryType(itemId1);
					item.setUpgradeSlots(item.getUpgradeSlots()+1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1,false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
					cm.setBossLog('qianghua1');
					cm.sendOk("#b恭喜你，提升成功，装备可升级次数#r+1\r\n\r\n#b当前可升级次数：#r"+item.getUpgradeSlots()+"");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"装备升级次数提升" + " : " + " 恭喜" + cm.getPlayer().getName() + "成功为装备提升了1次可升级次数，大家祝贺他/她吧！",true).getBytes());
					//cm.dispose();
					status = -1;
				}else {
					cm.setBossLog('qianghua1');
					cm.sendOk("#b很遗憾，提升失败，装备并未有任何变化，请再接再厉！");	 
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"装备升级次数提升" + " : " + " 很遗憾，" + cm.getPlayer().getName() + "未能给装备提升可升级次数，请再接再厉！",true).getBytes());
					status = -1;
					//cm.dispose();
				}
			}
		}
	}
}	