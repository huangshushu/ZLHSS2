var status = 0;
var minLevel = 220;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 6;
var maxenter = 1;
var PQLog = "超空间魔方";
var PQLog1 = "狩猎13周年的法兰肯蝙蝠魔";

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
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        // if (cm.getPlayer().getClient().getChannel() == 1) {
            if (status == 0) {

                var text = "#e<超空间魔方>#n\r\n\r\n欢迎来到超空间魔方，超空间魔方如同迷宫一样，有很多个房间，最终BOSS为乌鸦天狗！\r\n#b";
                text+="#L0# 1. 我要进入超空间魔方。（200以上/1名以上）#l\r\n";
                //text+="#L1# 2. 领取任务（狩猎13周年的法兰肯蝙蝠魔）#l\r\n";
                //text+="#L2# 4. 打开13周年活动币商店#l\r\n";
                text+="#L3# 5. 我想知道今天的剩余挑战次数。#l";
                cm.sendSimple(text);
            } else if (status == 1) {
                if (selection == 0) {
                    if (cm.getParty() == null) { // 没有组队
                        cm.sendOk("需要有一个队伍在可以入场。");
                        cm.dispose();
                    } else if (!cm.isLeader()) { // 不是队长
                        cm.sendOk("队长必须在这里。请让他和我说话。");
                        cm.dispose();
                    } else if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
                        cm.sendOk("队长必须在这里，请让他和我说话。.");
                        cm.dispose();
                    } else if (!cm.isAllPartyMembersAllowedLevel(minLevel, maxLevel)) {
                        cm.sendNext("组队成员等级 " + minLevel + " 以上 " + maxLevel + " 以下才可以入场。");
                        cm.dispose();
                    } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, maxenter)) {
                        cm.sendNext("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, maxenter) + "\" #k#n次数已经达到上限了。");
                        cm.dispose();
                    } else if (!cm.allMembersHere()) {
                        cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
                        cm.dispose();
                    } else {
                        var party = cm.getParty().getMembers();
                        var next = true;
                        if (!cm.isAdmin() && (party.size() > maxPartySize || party.size() < minPartySize)) {
                            next = false;
                        }
                        if (next) {
                            var em = cm.getEventManager("shizi3");
                            if (em == null) {
                                cm.sendOk("超空间魔方任务正在建设当中。");
                            } else {
                                var prop = em.getProperty("state");
                                if (prop.equals("0") || prop == null) {

                                    
                                   
                                    
                                    
                                    em.startInstance(cm.getParty(), cm.getMap(), 255);
                                    cm.gainMembersPQ(PQLog, 1);
                                    cm.dispose();
                                    return;
                                } else {
                                    cm.sendOk("一夜暴富的机会已经被人抢了，你可以死磕或者换一个频道！");
                                }
                            }
                        } else {
                            cm.sendYesNo("你需要有一个 " + minPartySize + " - " + maxPartySize + " 人的队伍. 请您组好队员后再试.");
                        }
                        cm.dispose();
                    } //判断组队
                } else if (selection == 1) {
                    // cm.sendOk("请向周围的朋友们请求组队。使用寻找组队(快捷键O)功能，可以在任何时间任何地点寻找组队。敬请参考。");
                   if(cm.getPQLog(PQLog1)<1){
                        cm.forceStartQuest(15557);
                        cm.setPQLog(PQLog1);
                        cm.sendOk("领取成功！");
                        cm.dispose();
                    }else{
                        cm.sendOk("你已经领取过该任务！");
                        cm.dispose();
                    }
                } else if (selection == 2) {
                   
                    cm.openShop(9000391);
                    // cm.sendOk("#e<组队任务：超空间魔方>#n\r\n\r\n超空间魔方\r\n - #e等级#n：130级以上 \r\n - #e规定时间#n：30分钟\r\n - #e参加人员#n：3～6名\r\n - #e参加条件#n：学习飞翔技能");
                    cm.dispose();
                } else if (selection == 3) {
                    var pqtry = maxenter - cm.getPQLog(PQLog);
                    if (pqtry <= maxenter) {
                        cm.sendOk("今天还能进行 " + pqtry + " 次.");
                        cm.dispose();
                    }
                } else if (selection == 4) {
                    cm.sendYesNo("学习[飞翔]技能必须付出一定的金币哟!大约需要:#r2000000#k,那么你想现在就学习么?");
                }
            } else if (status == 2) {
                var skillid = (cm.getBeginner() * 10000) + 1026;
                if (cm.getSkillLevel(skillid) <= 0) {
                    if (cm.getMeso() >= 2000000) {
                        cm.gainMeso(-2000000);
                        cm.teachSkill(skillid, 1);
                        cm.sendOk("恭喜,你学习了[飞翔]技能!");
                    } else {
                        cm.sendOk("您似乎没有那么多的金币哟！在去努力攒钱吧！");
                    }
                } else {
                    cm.sendOk("你已经获得了[飞翔]技能了!!!");
                }
                cm.dispose();
            }
        // } else {
        //     cm.dispose();
        //     cm.sendOk("只有在1频道才可以参加御龙魔任务。");
        // }
    }
}

