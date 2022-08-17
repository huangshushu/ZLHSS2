function start () {
    if (cm.getMap().getAllMonster().size() == 0) {
        cm.gainItem(4310020, Math.random() * 20 + 10);
        if (cm.getParty() != null && cm.getParty().getMembers().size() < 2) {
            cm.playerMessage(-5, "单人无法获得奖励。");
        } else if (cm.getParty() != null) {
               
            cm.GainSpecial(3);
            if (cm.getEventCount("MonsterPark") < 100) {
                cm.setEventCount("MonsterPark");
				 cm.gainItem(4310020, cm.getLevel() / 10);
			    cm.gainExp(cm.getParty().getMembers().size()*1000000000)
				cm.gainExp(cm.getParty().getMembers().size()*1000000000)
				cm.gainExp(cm.getParty().getMembers().size()*1000000000)
				cm.gainExp(cm.getParty().getMembers().size()*1000000000)
				cm.gainExp(cm.getParty().getMembers().size()*1000000000)
				cm.gainExp(cm.getParty().getMembers().size()*1000000000)
				cm.gainPlayerPoints(3);

            cm.playerMessage(-5, "根据当前等级，额外获得" + parseInt(cm.getLevel() / 10) + "个 怪物公园纪念币。");
		    cm.worldSpouseMessage(0x2A, "恭喜 " + cm.getChar().getName() + " 和他的队员完成了怪物公园副本，增加 playerPoints ×3！！");
                       
                cm.EventGainNX();
                cm.gainNX(1000);
            } else {
                cm.playerMessage(-5, "怪物公园每天每个帐号只能获得10次点奖励,您次数已经用完。");
            }
        }
        cm.warp(951000000, 0);
    } else {
        cm.playerMessage(-1, "必须消灭区域内的所有怪物才能移动到下一回合。");
        cm.playerMessage(5, "必须消灭区域内的所有怪物才能移动到下一回合。");
    }
}











































