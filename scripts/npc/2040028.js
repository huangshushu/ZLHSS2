/**
 -- Odin JavaScript --------------------------------------------------------------------------------
 Mark the Toy Soldier - Doll's House(922000010)
 -- By ---------------------------------------------------------------------------------------------
 Information
 -- Version Info -----------------------------------------------------------------------------------
 1.0 - First Version by Information
 ---------------------------------------------------------------------------------------------------
 **/

var havePendulum = false;
var complete = false;
var inQuest = false;

function start() {
    if (cm.getQuestStatus(3230) == 1) {
        inQuest = true;
    } else {
        inQuest = false;
    }
    dh = cm.getEventManager("DollHouse");
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    } else if (mode == 0 && status == 1) {
        cm.sendNext("我要知道你会留下来帮助我的。");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (inQuest == true) {
        if (status == 0) {
            if (cm.haveItem(4031094)) {
                cm.sendNext("哇！你已经找到了#b#t4031094##k，谢谢你帮助我们通过这次的难关，在此之前请先检查背包是否有足够的空间，好让我们能表示最高的致意。");
                havePendulum = true;
            } else {
                cm.sendSimple("嗨，我是 #b#p2040028##k, 是负责保护这个房间，在这里你会看见等多许多小屋子但是你会发现有一些不同，你的任务是找到正确的小屋子并敲破它拿到#b#t4031094##k，因为这是玩具城钟塔的一部分零件，喔对了顺便提醒如果你打错了小屋子那么你将会被传回去，这点请务必小心。\r\n#L0##b我想离开这里#k#l");
            }
        } else if (status == 1) {
            if (havePendulum == true) {
                if (!cm.canHold(2000010)) {
                    cm.sendNext("请确认你的背包是否满了。");
                }
                cm.sendNextPrev("你有什么感想？你喜欢 #b100 #t2000010#s#k 我给你的奖励吗？非常感谢你对我们的帮助，我现在就带你出去吧。");
                if (complete == false) {
                    cm.completeQuest(3230);
                    cm.gainExp(2400);
                    cm.gainItem(4031094, -1);
                    cm.gainItem(2000010, 100);
                    complete = true;
                }
            } else {
                cm.sendYesNo("你确定你现在要放弃？那好吧.....但是请记住，下次再进来的话正确的位置会改变的，你必须好好的记住这次的经验。");
            }
        } else if (status == 2) {
            if (cm.getPlayer().getEventInstance() != null)
                cm.getPlayer().getEventInstance().removePlayer(cm.getChar());
            cm.warp(221024400, 4);
            cm.dispose();
        } else {
            cm.warp(221024400, 4);
            cm.dispose();
        }
    } else {
        if (status == 0) {
            cm.sendNext("我不知道你是怎么来到这里的，但我建议你还是赶紧离开这个危险地带。");
        } else if (status == 1) {
            cm.warp(221024400, 4);
            cm.dispose();
        }
    }
}
