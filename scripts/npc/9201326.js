/*
 *	组队任务：冰骑士的诅咒
 */

var status = -1;
var minLevel = 100;                                              //最低等级
var maxLevel = 255;                         //最高等级
var maxenter = 5;                  //次数
var PQLog = "冰骑士的诅咒";
var minPartySize = 1;                                                               //最低人数
var maxPartySize = 6;                                                                                 //最高人数

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
    }
    if (status == 0) {
        cm.sendSimple("#e<组队任务：冰骑士的诅咒>#n\r\n等等，嘘……！安静！小心别被冰骑士发现。中了他的诅咒的话，就会变成和我的朋友一样,请你帮帮我的朋友，让他能够解开冰骑士的诅咒！需要！！\r\n#b#L0#我愿意帮助你的朋友。#l\r\n#L1#我想知道到底发生了什么事。#l\r\n#L2#我想拥有冰骑士的特殊物品。#l\r\n#L3#我想知道今天的剩余挑战次数。#l");
    } else if (status == 1) {
        if (selection == 0) {

           /* if (!cm.getPlayer().hasEquipped(1112679)) {
                    cm.sendOk("您没有佩戴#v1112679#，无法入场。");
                    cm.dispose();
            }     */
            if (cm.getParty() == null) { // 没有组队
                cm.sendOk("请组队后和我谈话。");
            } else if (!cm.isLeader()) { // 不是队长
                cm.sendOk("队长必须在这里。请让他和我说话。");
            } else if (!cm.isAllPartyMembersAllowedLevel(minLevel, maxLevel)) {
                cm.sendNext("组队成员等级 " + minLevel + " 以上 " + maxLevel + " 以下才可以入场。");
            } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, maxenter)) {
                cm.sendNext("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, maxenter) + "\" #k#n次数已经达到上限了。");
            } else if (!cm.allMembersHere()) {
                cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
            } else {
                var em = cm.getEventManager("Iceman");
                if (em == null) {
                    cm.sendOk("当前服务器未开启此功能，请稍后在试...");
                } else {
                    var prop = em.getProperty("state");
                    if (prop.equals("0") || prop == null) {
                        em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 170);
                        cm.gainMembersPQ(PQLog, 1);
                    } else {
                        cm.sendOk("当前频道已有玩家在进行任务中，请稍后在试。");
                    }
                }
            }
            cm.dispose();
        } else if (selection == 1) {
            cm.sendNext("我一直以为我是大人，其他的孩子都很幼稚。阿俊总是跟着我，他是个听话的孩子。我们和往常一样玩捉迷藏，阿俊在抓我的时候，被我吓了一下。我觉得他很搞笑，就逗了他一下，但是……");
        } else if (selection == 2) {
            status = 2;
            cm.sendSimple("#b消灭冰骑士#k后，可以获得#b#t4001529##k。听说将那东西进行加工后，可以制作出特别道具。你去消灭冰骑士，解除诅咒，并带回#t4001529#的话，我就帮你制作。\r\n#L0##i3010519:# #t3010519# - 100个#t4001529##l\r\n#L1##i3700242:# #t3700242# - 80个#t4001529##l\r\n#L2##i1115035:# #t1115035# - 80个#t4001529##l\r\n#L3##i1115124:# #t1115124# - 80个#t4001529##l");
            cm.dispose();
        } else if (selection == 3) {
            cm.sendOk("今天剩余挑战次数是" + (maxenter - cm.getPQLog(PQLog)) + "次。");
            cm.dispose();
        }
    } else if (status == 2) {
        cm.sendNextPrev("阿俊说想变得勇敢，想成为所有人认可的勇敢的人。但是他却被冰骑士骗了，变成了那副模样。请帮帮我的朋友阿俊！要是不快点把诅咒解开的话，阿俊可能会和冰骑士一样，失去人类的心。");
        cm.dispose();
    } else if (status == 3) {
        var itemid;
        var cost = 80;
        switch (selection) {
            case 0:
                cost = 100;
                itemid = 3010519;
                break;
            case 1:
                itemid = 3700242;
                break;
            case 2:
                itemid = 1115035;
                break;
            case 3:
                itemid = 1115124;
                break;
        }
        if (cm.haveItem(4001529, cost)) {
            if (cm.canHold(itemid)) {
                cm.gainItem(itemid, 1);
                cm.gainItem(4001529, -cost);
            } else {
                cm.sendOk("请确保背包有足够的空间.");
            }
        } else {
            cm.sendOk("你确定#b#t4001529##k的数量没错？你可别想骗我。");
        }
        cm.dispose();
    }
}
