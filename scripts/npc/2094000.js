var status = 0;
var minLevel = 50;
var maxLevel = 256;
var minPartySize = 1;
var maxPartySize = 6;
var 次数限制 = 10;
var 奖励预览 = [

	[4031997, 1, 100]
];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
	if (cm.getPlayer().getClient().getChannel() == 1 || cm.getPlayer().getClient().getChannel() == 2 || cm.getPlayer().getClient().getChannel() == 3 || cm.getPlayer().getClient().getChannel() == 4) {
        if (status == 0) {
	cm.removeAll(4001117);
	cm.removeAll(4031437);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001122);
	cm.removeAll(4001260);
		var 文本信息 = "";
			文本信息 += "        #b里程x1#k\r\n"
			for (var i = 0; i < 奖励预览.length; i++) {
				文本信息 += "   " + cm.显示物品(奖励预览[i][0]) + "x" + 奖励预览[i][1] +" " + 奖励预览[i][2] +" % #k\r\n";
			}
            cm.sendSimple("亲爱的#r#h ##k您好，海盗船组队任务:\r\n#r所属队长与我对话执行。\r\n组队员等级必须要在" + minLevel + "级以上。\r\n#组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。#b\r\n通关获得:\r\n" + 文本信息 + "\r\n今日已完成 #r" + cm.判断每日值("海盗船") + "#k次\r\n\r\n#L0#进入海盗船\r\n\r\n");
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getParty() == null) { // 没有组队
                    cm.sendOk("请组队后和我谈话。");
                    cm.dispose();
                }
else if(cm.getBossLog("haidao") > 9) {
	            cm.sendOk("您好,系统限定每天只能挑战10次!");
                    cm.dispose();
		}
else if(cm.getBossLog('haid') > 19) {
	            cm.sendOk("您好,系统限定同一帐号总共最多能挑战20次!");
                    cm.dispose();
		}
 else if (!cm.isLeader()) { // 不是队长
                    cm.sendOk("队长必须在这里。请让他和我说话。");
                    cm.dispose();
                    } else  {
                    var party = cm.getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                            levelValid += 1;
                        } else {
                            next = false;
                        }
                        if (cPlayer.getMapid() == mapId) {
                            inMap += 1;
                        }
                    }
                    if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
                        next = false;
                    }
					// if(cm.判断团队每日("海盗船", 次数限制) == 0){
						// cm.sendOk("抱歉，今天你的队伍里有人已经做满 " + 次数限制 + " 次了！");
						// cm.dispose();
						// return;
					// }
                    if (next) {
                        var em = cm.getEventManager("Pirate");
                        if (em == null) {
                            cm.sendOk("此任务正在建设当中。");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop.equals("0") || prop == null) {
                                em.startInstance(cm.getParty(), cm.getMap());
                               cm.givePartyBossLog("haidao");
cm.setBossLog('haid');
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("[日常]抢占海盗船任务里面已经有人了，请稍等！");
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                        cm.dispose();
                    }
		} //判断组队
            } else if (selection == 1) {
                cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                cm.dispose();
            } else if (selection == 2) {
            cm.openNpc(9310084, 25);
                //cm.sendOk("1");
                //cm.dispose();
            }
        }
		 } else {
        		cm.dispose();
        		cm.sendOk("只有在1,2,3频道才可以参加海盗船任务。");
	}
    }
}