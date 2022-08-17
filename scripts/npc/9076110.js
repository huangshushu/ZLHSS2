/*
 废弃都市组队任务
 */
var status = 0;
var minLevel = 30;
var maxLevel = 300;
var minPlayers = 1; // GMS = 3
var maxPlayers = 6; // GMS = 4
var range = 250; // 等级范围
var maxenter = 25;
var PQLog = "第一次同行";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.sendOk("快捷寻找组队按热键“O”赶快加入组队来挑战组队任务吧。");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            cm.removeAll(4001008);
            cm.removeAll(4001007);
            cm.sendSimple("#e<组队任务：第一次同行>#n\r\n\r\n你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……如果想挑战的话，请让#b所属组队的队长#k来和我说话。\r\n#b#L0#我想执行组队任务。#l\r\n#L1#我想听一下说明。#l\r\n#L2#我想知道今天的剩余挑战次数。#l");
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getParty() == null) { // No Party
                    cm.sendOk("你没有创建组队,无法入场。");
                    cm.dispose();
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("请你们团队的队长和我对话。");
                    cm.dispose();
                } else if (!cm.isAllPartyMembersAllowedLevel(minLevel, maxLevel)) {
                    cm.sendOk("在你或者队员中存在" + minLevel + "级以下，" + maxLevel + "级以上的角色。请注意等级限制。");
                    cm.dispose();
				/*} else if (!cm.isPartyAverageLevel(range, cm.getLevel())) {//range 等级范围, cm.getLevel()队长等级
					cm.sendOk("你和你的组队成员必须在#r" + range + "#k级之内！");
					cm.dispose();*/
                } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, maxenter)) {
                    cm.sendOk("你的队员#r#e \"" + cm.getNotAllowedPQMember(PQLog, maxenter).getName() + "\" #k#n次数已经达到上限了。");
                    cm.dispose();
                } else if (!cm.allMembersHere()) {
                    cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。");
                    cm.dispose();
                } else {
                    var party = cm.getParty().getMembers();
                    var next = true;
                    if (party.size() > maxPlayers || party.size() < minPlayers) {
                        next = false;
                    }
					var averageLevel = cm.getPartyAverageLevel();
					if (averageLevel > 250) { //似乎大于198级无法召唤怪物
						averageLevel = 250;
					}
                    if (next) {
                        var em = cm.getEventManager("KerningPQ");
                        if (em == null) {
                            cm.sendOk("此任务正在建设当中。");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop.equals("0") || prop == null) {
                                em.startInstance(cm.getParty(), cm.getMap(), averageLevel);
                                cm.gainMembersPQ(PQLog, 1);
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("组队训练场任务里面已经有人了，请稍等！");
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendYesNo("你需要有一个 " + minPlayers + " - " + maxPlayers + " 人的队伍. 请您组好队员后再试.");
                        cm.dispose();
                    }
                }
            } else if (selection == 1) {
                cm.sendYesNo("你需要有一个 " + minPlayers + " - " + maxPlayers + " 人的队伍.并且等级在" + minLevel + "~" + maxLevel + "范围,\r\n那么请让你的组队长和我对话吧!");
                cm.dispose();
            } else if (selection == 2) {
                var pqtry = maxenter - cm.getPQLog(PQLog);
                cm.sendOk("今天剩余挑战次数是" + pqtry + "次.");
                cm.dispose();
            }
        }
    }
}
