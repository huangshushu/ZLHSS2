function start() {
    var pm = cm.getEventInstance();
	var name =pm.getName();
	var eim = cm.getEventManager(name+"");
	var PD = eim.getProperty("state");
	var BOSS = eim.getProperty("leader");
	if (cm.getMap().getAllMonstersThreadsafe().size() == 0){
		if(!cm.isLeader()){
						cm.sendOk("请让队长跟我说话");
						cm.dispose();
						return;
					}
	if (PD == "1"&&BOSS =="true") {
		cm.givePartyItems(4310143, Math.floor(Math.random()*2));
		cm.givePartyItems(4310036, Math.floor(Math.random()*20));
		cm.givePartyItems(4310014, Math.floor(Math.random()*1)+1);
		cm.givePartyItems(5062002, Math.floor(Math.random()*5)+5);
		cm.givePartyItems(5062500, Math.floor(Math.random()*5)+5);
		cm.givePartyExp(270000);
		var allPlayers = cm.getMap().getCharacters();//取得当前地图上面的所有玩家
					 allPlayers = allPlayers.iterator();
					 var B = Math.floor((Math.random()*30)+30);
				while (allPlayers.hasNext()) {//循环每一个玩家
					var player = allPlayers.next();
					player.gainPlayerPoints(B);
					player.setEventCount("乱入得黑币");
				}
		cm.partyMessage(5,"获得积分："+B+"点");
		cm.worldSpouseMessage(0x20,"『乱入副本』" + ":" + "恭喜玩家 " + cm.getChar().getName() + " 带队通关乱入副本获得超大量奖励！");
		cm.warpParty(910340700,0);
		cm.dispose();
	}else if (PD == "1"){
		cm.givePartyItems(4310143, Math.floor(Math.random()*1));
		cm.givePartyItems(4310036, Math.floor(Math.random()*10));
		cm.givePartyItems(5062002, Math.floor(Math.random()*5)+1);
		cm.givePartyItems(5062500, Math.floor(Math.random()*5)+1);
		//cm.givePartyItems(4310014, 1);
		cm.givePartyExp(170000);
		var allPlayers = cm.getMap().getCharacters();//取得当前地图上面的所有玩家
					 allPlayers = allPlayers.iterator();
					 var B = Math.floor((Math.random()*20)+10);
				while (allPlayers.hasNext()) {//循环每一个玩家
					var player = allPlayers.next();
					player.gainPlayerPoints(B);
					player.setEventCount("乱入得黑币");
				}
		cm.partyMessage(5,"获得积分："+B+"点");
		cm.warpParty(910340700,0);
		cm.worldSpouseMessage(0x20,"『乱入副本』" + ":" + "恭喜玩家 " + cm.getChar().getName() + " 带队通关乱入副本获得大量奖励！");
	}else{
		cm.sendOk("对不起，任务没开启！");
		cm.dispose();
	}
	}else{
		cm.sendOk("请清理当前地图的所有怪物再和我对话！");
		cm.dispose();
	}
	cm.dispose();
}