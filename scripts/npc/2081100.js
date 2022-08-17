/*
 ZEVMS冒险岛(079)游戏服务端
 战士四转教官
 */

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        if(!(cm.getJob() == 111 || cm.getJob() == 121 || cm.getJob() == 131 || cm.getJob() == 2111)) {
            cm.sendOk("你好，你找我有什么事情吗？");
            cm.dispose();
            return;
        } else if (cm.getPlayer().getLevel() < 120) {
            cm.sendOk("你等级尚未到达120级.");
            cm.dispose();
            return;
        } else {
            if (cm.getJob() == 111) {
                cm.sendSimple("你想继续变强吗？\r\n#b#L0#我想成为英雄#l\r\n#b#L1#像我想一下。#l");
            } else if (cm.getJob() == 121) {
                cm.sendSimple("你想继续变强吗？\r\n#b#L0#我想成为圣骑士#l\r\n#b#L1#像我想一下。#l");
            } else if (cm.getJob() == 131) {
                cm.sendSimple("你想继续变强吗？\r\n#b#L0#我想成为黑骑士#l\r\n#b#L1#像我想一下。#l");
            } else if (cm.getJob() == 2111) {
                cm.sendSimple("你想继续变强吗？\r\n#b#L0#我想变强#l\r\n#b#L1#像我想一下...#l");
            } else {
                cm.sendOk("好吧假如你想要4转麻烦再来找我");
                cm.dispose();
                return;
            }
        }
    } else if (status == 1) {
        if (selection == 1) {
            cm.sendOk("好吧假如你想要4转麻烦再来找我。");
            cm.dispose();
            return;
        }
        if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 120) * 3) {
            cm.sendOk("你的技能点数还没点完。");
            cm.dispose();
            return;
        } else {
            if (cm.canHold(2280003)) {
                cm.gainItem(2280003, 1);
                if (cm.getJob() == 111) {
                    cm.changeJob(112);
                    cm.teachSkill(1121001, 0, 10);
                    cm.teachSkill(1120004, 0, 10);
                    cm.teachSkill(1121008, 0, 10);
                    cm.sendNext("恭喜你转职为 #b英雄#k 我送你一些神秘小礼物^^");
                } else if (cm.getJob() == 121) {
                    cm.changeJob(122);
                    cm.teachSkill(1221001, 0, 10);
                    cm.teachSkill(1220005, 0, 10);
                    cm.teachSkill(1221009, 0, 10);
                    cm.sendNext("恭喜你转职为 #b圣骑士#k 我送你一些神秘小礼物^^");
                } else if (cm.getJob() == 131) {
                    cm.changeJob(132);
                    cm.teachSkill(1321001, 0, 10);
                    cm.teachSkill(1320005, 0, 10);
                    cm.teachSkill(1321007, 0, 10);
                    cm.sendNext("恭喜你转职为 #b黑骑士#k 我送你一些神秘小礼物^^");
                } else if (cm.getJob() == 2111) {
                    cm.changeJob(2112);
                    if (cm.canHold(1142132, 1)) {
                        cm.forceCompleteQuest(29927);
                        cm.gainItem(1142132, 1);
                    }
                    cm.sendNext("恭喜你狂狼勇士又更上一层楼了！ 另外我送你一些神秘小礼物^^");
                } else {
                    cm.sendOk("你没有多的栏位请清空再来尝试一次!");
                    cm.dispose();
                    return;
                }
            }else{
				cm.sendOk("你身上满了，或者已经有#i2280003:#了，请先把它扔掉再来找我。");
				cm.dispose();
				return;
			}
        }
    } else if (status == 2) {
        cm.sendNextPrev("不要忘记了这一切都取决于你练了多少.");
        cm.dispose();
    }
}