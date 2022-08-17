//通关年糕数量
var 通关数量 = 10;
var 通关经验 = 1500;
var 次数限制 = 10;
var 奖励预览 = [

	
];

var status = -1;

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.对话结束();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendSimple("我是这里的老虎，你给我我想要的，我就给你奖励，谁给我好吃的，我就会记住谁。#r队员无法获得总通关次数#k#b\r\n#L0##v4001101# x " + 通关数量 + " 通关#l\r\n#L1##v4001101# x 20 换 #v1002798##l#k\r\n#L3##b选择离开#l");
    } else if (status == 1) {
        if (selection == 0) {
            if (!cm.isLeader()) {
                cm.sendNext("只有队长给的我才要吃");
                cm.对话结束();
            } else {
                if (cm.haveItem(4001101, 通关数量)) {
					if(cm.haveItem(4001101, 50)){
						cm.setBossRankCount("我全都要成就", 1);	
					}
                    cm.gainItem(4001101, -通关数量);
                    cm.showEffect(true, "quest/party/clear");
                    cm.playSound(true, "Party1/Clear");
					if(cm.判断团队每日("月妙") <= 次数限制){
						for (var i = 0; i < 奖励预览.length; i++) {
							gainPartyItemPro(奖励预览[i][0], 奖励预览[i][1], 奖励预览[i][2]);
						}
						cm.givePartyExp(通关经验);
						//cm.给团队里程(1);
					}
                   
					//给团队枫叶
					////枫叶
					//cm.给团队道具(4002000,cm.随机数(100));
					////黄金枫叶
					
                    //记录通关信息
					cm.endPartyQuest(1200);
                    cm.warpParty(100000200);
                    cm.setBossRankCount("月妙", 1);
                    cm.givePartyBossLog("月妙");
                    cm.worldMessage(2, "[副本-月妙] : 恭喜 " + cm.getPlayer().getName() + " 带领队伍，完成月妙副本。");
                    cm.对话结束();
                } else {
                    cm.sendNext("你没有年糕啊？");
                    cm.对话结束();
                }
            }
        } else if (selection == 1) {
            if (cm.haveItem(1002798, 1)) {
                cm.sendOk("你已经有了");
            } else if (!cm.canHold(1002798, 1)) {
                cm.sendOk("你已经有了");
            } else if (cm.haveItem(4001101, 20)) {
                cm.gainItem(4001101, -20); 
                cm.gainItem(1002798, 1);
            } else {
                cm.sendOk("你需要20个月妙的元宵");
            }
            cm.对话结束();
        } else if (selection == 3) {
            cm.warp(100000200);
        }
    }
}


function gainItemPro(itemId, count, prop){
	var number = Math.random()*(100);
	if(number <= prop){
		cm.gainItem(itemId, count);
	}
}

function gainChrItemPro(itemId, count, prop, chr){
	var number = Math.random()*(100);
	if(number <= prop){
		//var item = cm.getNewEquip(itemId);
		chr.gainItem(itemId, count);
		chr.dropMessage(5, "获得 " + cm.getItemName(itemId) + "x" + count);
	}
}

function gainPartyItemPro(itemId, count, prop){
	if (cm.getPlayer().getParty() == null || cm.getPlayer().getParty().getMembers().size() == 1) {
		gainChrItemPro(itemId, count, prop, cm.getPlayer());
		return;
	}
	var members = cm.getPlayer().getParty().getMembers();
	var it = members.iterator();
	while (it.hasNext()) {
		var chr = it.next();
		var curChar = cm.getPlayer().getMap().getCharacterById(chr.getId());
		if (curChar != null) {
			gainChrItemPro(itemId, count, prop, curChar);
		}
	}

}