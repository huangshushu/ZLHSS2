var status = 0;
var minLevel = 180;
var maxLevel = 300;
var minPlayers = 2;
var maxPlayers = 6;
var maxenter = 25;
var PQLog = "御龙魔";
var sel = -1;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.sendOk("让你的朋友加入你的队伍. 你也可以使用组队搜索功能来搜索队伍."); // gms has spelling mistakes.. 
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (cm.getPlayer().getClient().getChannel() >= 1) {
            if (status == 0) {
                if (cm.getMapId() == 910800000 || cm.getMapId() == 240080000) {
                    cm.sendSimple("#e<组队任务：御龙魔>#n\r\n\r\n年轻人，你能不能帮我做件事？麻烦你去消灭搅乱神木村平静生活的御龙魔吧。\r\n#b#L0# 1. 我要进入天渡。（180以上/2名以上）#l\r\n#L1# 2. 我要寻找一起组队的同伴。#l\r\n#L2# 3. 我想听介绍。#l\r\n#L3# 4. 我想知道今天的剩余挑战次数。#l\r\n#L4# 5. 我想学习#r[飞翔]#b技能。#l");
                } else {
                    cm.sendYesNo("#e<组队任务：御龙魔>#n\r\n\r\n你想要就此放弃了吗?");
                }
            } else if (status == 1) {
                if (cm.getMapId() == 910800000 && selection == 0) {
                    sel = 0;
                    cm.sendNext("如果你要挑战一下，我将会把你送到天渡……");
                } else if (cm.getMapId() != 910800000 && cm.getMapId() != 240080000) {
                    cm.removeAll(4001528);
                    cm.warp(240080050, 0);
                    cm.dispose();
                    return;
                } else if (selection == 0) {
                    if (cm.getParty() == null) { // 没有组队
                        cm.sendOk("需要有一个队伍在可以入场。");
                        cm.dispose();
                    } else if (!cm.isLeader()) { // 不是队长
                        cm.sendOk("队长必须在这里。请让他和我说话。");
                        cm.dispose();
                    } else if (!cm.isAllPartyMembersAllowedLevel(minLevel, maxLevel)) {
                        cm.sendOk("在你或者队员中存在" + minLevel + "级以下，" + maxLevel + "级以上的角色。请注意等级限制。");
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
                        if (!cm.isAdmin() && (party.size() > maxPlayers || party.size() < minPlayers)) {
                            next = false;
                        }
                        if (next) {
                            var em = cm.getEventManager("Dragonica");
                            if (em == null) {
                                cm.sendOk("此任务正在建设当中。");
                            } else {
                                var prop = em.getProperty("state");
                                if (prop.equals("0") || prop == null) {
                                    em.startInstance(cm.getParty(), cm.getMap(), 170);
                                    cm.gainMembersPQ(PQLog, 1);
                                    cm.dispose();
                                    return;
                                } else {
                                    cm.sendOk("御龙魔任务里面已经有人了，请稍等！");
                                }
                            }
                        } else {
                            cm.sendYesNo("你需要有一个 " + minPlayers + " - " + maxPlayers + " 人的队伍. 请您组好队员后再试.");
                        }
                        cm.dispose();
                    } //判断组队
                } else if (selection == 1) {
                    cm.sendOk("请向周围的朋友们请求组队。使用寻找组队(快捷键O)功能，可以在任何时间任何地点寻找组队。敬请参考。");
                    cm.dispose();
                } else if (selection == 2) {
                    cm.sendOk("#e<组队任务：御龙魔>#n\r\n\r\n前往#b<天空之门 >#k，搞清楚#r御龙魔#k的真实身份吧。使用#b飞翔#k技能在天空中飞翔，消灭飞龙并进行追踪，就可以找到御龙魔。\r\n - #e等级#n：130级以上 \r\n - #e规定时间#n：30分钟\r\n - #e参加人员#n：3～6名\r\n - #e参加条件#n：学习飞翔技能");
                    cm.dispose();
                } else if (selection == 3) {
                    var pqtry = maxenter - cm.getPQLog(PQLog);
                    if (pqtry <= maxenter) {
                        cm.sendOk("今天剩余挑战次数是" + pqtry + "次.");
                        cm.dispose();
                    }
                } else if (selection == 4) {
                    sel = 4;
                    cm.sendYesNo("学习[飞翔]技能必须付出一定的金币哟!大约需要:#r2000000#k,那么你想现在就学习么?");
                }
            } else if (status == 2) {
                if (sel == 4) {
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
                } else {
                    cm.saveLocation("MULUNG_TC"); // not sure if correct..?
                    cm.warp(240080000, 0);
                    cm.dispose();
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
            cm.sendOk("只有在1频道才可以参加御龙魔任务。");
        }
    }
}

