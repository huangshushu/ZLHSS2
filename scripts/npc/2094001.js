var status = -1;
var 海盗副本经验 = java.lang.Math.floor(Math.random() * 50000 + 150000);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.removeAll(4001117);
        cm.removeAll(4001120);
        cm.removeAll(4001121);
        cm.removeAll(4001122);
        cm.sendSimple("海贼王的帽子可以通过战利品持续升级哦。\r\n#b#L0#我要离开这里了。#l\r\n#L1#兑换海贼王的帽子。#l#k");
    } else if (status == 1) {
        if (selection == 0) {
            cm.setBossLog('每日海盗副本次数');
            var a = cm.getBossLogC("每日海盗副本次数");
			if (cm.getPlayer().getLevel() < 71){
				cm.gainExp(海盗副本经验);
				if (a <= 1) {
                    cm.gainExp(海盗副本经验);
                }
				cm.gainItem(4001136, 1);
			} else {
				//cm.setBossRankCount("越级副本出席");
				cm.givePartyLevelItems(1, 70, 1, 4000313, 2);//2个金叶子
                if (a <= 1) {
                    cm.givePartyLevelItems(1, 70, 1, 4000313, 2);//2个金叶子
                }
                cm.setBossRankCount("越级海盗副本总次数");
				cm.playerMessage(5, "恭喜您获得1点越级副本出席点数！");
				}
            cm.getPlayer().endPartyQuest(1204);
			cm.setBossRankCount("海盗副本总次数");
			cm.setBossRankCount("所有副本总次数");
			//cm.worldMessage(2, "[副本-海盗] : 恭喜 " + cm.getPlayer().getName() + " 完成海盗副本。");
            cm.warp(251010404, 0);
        } else { //TODO JUMP
            if (cm.haveItem(1002574, 1)) {
                cm.sendOk("你已经拥有海贼王的帽子。");
            } else if (cm.haveItem(1002573, 1)) {
                if (cm.haveItem(4001136, 20)) {
                    if (cm.canHold(1002574, 1)) {
                        cm.gainItem(1002573, -1);
                        cm.gainItem(4001136, -20);
                        cm.gainItem(1002574, 1, true);
                        cm.sendOk("给，这是海贼王的帽子。");
                    } else {
                        cm.sendOk("请检查一下你的背包是否有空格。");
                    }
                } else {
                    cm.sendOk("你没有20个战利品。");
                }
            } else if (cm.haveItem(1002572, 1)) {
                if (cm.haveItem(4001136, 20)) {
                    if (cm.canHold(1002573, 1)) {
                        cm.gainItem(1002572, -1);
                        cm.gainItem(4001136, -20);
                        cm.gainItem(1002573, 1, true);
                        cm.sendOk("给，这是海贼王的帽子。");
                    } else {
                        cm.sendOk("请检查一下你的背包是否有空格。");
                    }
                } else {
                    cm.sendOk("你没有20个战利品。");
                }
            } else if (cm.haveItem(1002571, 1)) {
                if (cm.haveItem(4001136, 20)) {
                    if (cm.canHold(1002572, 1)) {
                        cm.gainItem(1002571, -1);
                        cm.gainItem(4001136, -20);
                        cm.gainItem(1002572, 1, true);
                        cm.sendOk("给，这是海贼王的帽子。");
                    } else {
                        cm.sendOk("请检查一下你的背包是否有空格。");
                    }
                } else {
                    cm.sendOk("你没有20个战利品。");
                }
            } else {
                if (cm.haveItem(4001136, 20)) {
                    if (cm.canHold(1002571, 1)) {
                        cm.gainItem(4001136, -20);
                        cm.gainItem(1002571, 1, true);
                        cm.sendOk("给，这是海贼王的帽子。");
                    } else {
                        cm.sendOk("请检查一下你的背包是否有空格。");
                    }
                } else {
                    cm.sendOk("你没有20个战利品。");
                }
            }
        }
        cm.dispose();
    }
}