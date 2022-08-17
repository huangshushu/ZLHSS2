var status = 0;
var minLevel = 200; // GMS = 50 
var maxLevel = 300; // GMS = 200? recommended 50 - 69
var minPlayers = 2; // GMS = 3
var maxPlayers = 6; // GMS = 4 || but 6 makes it better :p
var open = true;//open or not
var PQLog = '女神的痕迹';
var maxenter = 10;

function start() {
    status = -1;
    if (cm.getPlayer().getMapId() == 920010000) {
        cm.sendSimple("#e <组队任务: 女神的痕迹>#n \r\n 是否现在就离开这里?。#b\r\n#L0#是的我要离开了#l\r\n#L1#还是再等等#l");
    } else {
        cm.sendSimple("#e <组队任务: 女神的痕迹>#n \r\n你好,我是温莉. 如果你想探索女神塔请告诉我。哦对了，如果你的组队里有战士，魔法师，弓箭手，飞侠，海盗，我将给予你温莉的祝福.#b\r\n#L1#申请入场.#l\r\n#L2#我想听听说明.#l\r\n#L5#寻找组队.#l\r\n#L6#查看剩余次数.#l#k");
    }
}
function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
        cm.sendOk("有什么需要请在来找我.."); // gms has spelling mistakes.. 
        cm.dispose();
        return;
    }
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (cm.getPlayer().getMapId() == 920010000) {
        if (selection == 0) {
            cm.warp(920011200, 0);
        }
        cm.dispose();
        return;
    }
    if (status == 0 && cm.getPlayer().getMapId() == 910002000) {
        cm.sendYesNo("#e <组队任务: 女神的痕迹>#n \r\n 是否现在就进去雅典娜禁地入口?。#b\r\n#L0#现在就过去.");
    } else {
        if (selection == 0) {
            cm.saveLocation("MULUNG_TC"); // not sure if correct..?
            cm.warp(933030000, 0);
            cm.dispose();
        } else if (selection == 1) {
            if (cm.getParty() == null) { // No Party
                cm.sendOk("你没有创建组队,无法入场。");
                cm.dispose();
            } else if (!cm.isLeader()) { // Not Party Leader
                cm.sendOk("请你们团队的队长和我对话。");
                cm.dispose();
            } else if (!cm.isAllPartyMembersAllowedLevel(minLevel, maxLevel)) {
                cm.sendOk("在你或者队员中存在" + minLevel + "级以下，" + maxLevel + "级以上的角色。请注意等级限制。");
                cm.dispose();
            } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, maxenter)) {
                cm.sendOk("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, maxenter) + "\" #k#n次数已经达到上限了。");
                cm.dispose();
            } else if (!cm.allMembersHere()) {
                cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。");
                cm.dispose();
            } else {
                // Check if all party members are over lvl 50
                var party = cm.getParty().getMembers();
                var next = true;
                if (!cm.isAdmin() && (party.size() > maxPlayers || party.size() < minPlayers)) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("nst");
                    if (em == null || open == false) {
                        cm.sendSimple("当前组队副本未开放.");
                        cm.dispose();
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                            em.startInstance(cm.getParty(), cm.getMap(), 70);
                        } else {
                            cm.sendSimple("已经有队伍在里面了,请稍等或者更换频道再试.");
                        }
                        for (var i = 4001044; i < 4001064; i++) {
                            cm.removeAll(i);
                        }
                        cm.setPQLog(PQLog);
                        cm.dispose();
                    }
                } else {
                    cm.sendYesNo("该任务需要有 " + minPlayers + " - " + maxPlayers + " 人的队伍. 请您组好队员后再试.");
                }
            }
        } else if (selection == 2) {
            cm.sendOk("#e <组队任务: 女神的痕迹>#n \r\n After a heavy rainfall on El Nath Mountains, a new cloud path opened behind the #bStatue of Goddess Minerva#k at the top of Orbis Tower. When a giant cloud far away split open, a mysterious tower appeared. It's the tower of #bGoddess Minerva#k, who ruled Orbis a long time ago. Would you like to begin your adventure at this legendary tower where Goddess Minerva is said to be trapped?\r\n #e - Level:#n 70 or higher #r (Recommended Level: 70 - 119)#k \r\n #e - Time Limit:#n 20 min \r\n #e - Players:#n 3 - 6 \r\n #e - Reward:#n \r\n#v1082232:# Goddess Wristband #b \r\n(Can be traded for 15 Feathers of Goddess.)#k \r\n#v1072455:# Goddess Shoes#b \r\n(Can be traded for 10 Feathers of Goddess.)#k \r\n#v1082322:# Minvera's Bracelet#b \r\n(Can be traded for 30 Feathers of Goddess and 1 Goddess Wristband.)#k \r\n#v1072534:# Minvera's Shoes#b \r\n(Can be traded for 20 Feathers of Goddess and 1 Goddess Shoes.).");
            cm.dispose();
        } else if (selection == 5) {
            cm.sendOk("快捷寻找组队按热键“O”赶快加入组队来挑战组队任务吧。");
            cm.dispose();
        } else if (selection == 6) {
            var pqtry = maxenter - cm.getPQLog(PQLog);
            cm.sendOk("今天还能进行 " + pqtry + " 次.");
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}
