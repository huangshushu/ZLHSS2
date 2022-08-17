function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (cm.getMonsterCount(240080500) <= 0 && cm.getMapId() == 240080500) {
            if (status == 0) {
                cm.sendPlayerToNpc("等等,好像还有人?!");
            } else if (status == 1) {
                cm.sendPlayerToNpc("御龙魔那个家伙还活着呀!");
            } else if (status == 2) {
                cm.sendYesNo("你想离开这里么?");
            } else if (status == 3) {
                cm.warp(240080000,0);
                var maple = Math.floor(Math.random() * 10) + 20;
                if (!cm.canHold(2049601, 2)) {
                 cm.sendOk("请清理其他空间!");
                 cm.dispose();
                 return;
                 }
				 //cm.gainItem(2049607, 2);
				 
				 
					/*var playerInfo = cm.sql_Select("select * from teamrank where player=?", cm.getName());
					if(playerInfo.length==0){
						cm.sql_Insert("INSERT INTO teamrank (player,count,rewardType) VALUES ('"+cm.getName()+"',0,0)");
					}else{
						var nowCount = playerInfo[0].count;
						cm.sql_Update("update teamrank set count=? where player = ?", (nowCount+1), cm.getName());
					}*/
					
					
                if (cm.getEventCount("Dragonica") < 20) {
	                cm.gainItem(4310224, 1);//组队密友纪念币
	                cm.gainVCraftCore(30);//核心碎片
	                cm.gainMeso(6000000);
		        cm.setBossLog("御龙魔组队副本");
			cm.setEventCount("Dragonica");
			cm.setBossLog("组队副本积分",1);
			cm.worldSpouseMessage(0x17, "[组队-御龙魔副本] 玩家 " + cm.getChar().getName() + "今日已通关 " + cm.getBossLog("御龙魔组队副本") + " 次。");
                } else {
        cm.playerMessage(-5, "当天帐号在此副本已经额外获得20次奖励,次数已经用完。");
                cm.warp(240080000,0);
    }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
    }
}

