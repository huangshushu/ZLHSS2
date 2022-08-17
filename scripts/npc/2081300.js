/*
 冒险岛(079)游戏服务端
 弓箭手四转教官
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
        if (!(cm.getJob() == 311 || cm.getJob() == 321)) {
            cm.sendOk("为什么你要见我??还有你想要问我关于什么事情??");
            cm.dispose();
            return;
        } else if (cm.getPlayer().getLevel() < 120) {
            cm.sendOk("你等级尚未到达120级.");
            cm.dispose();
            return;
        } else {
            if (cm.getJob() == 311) {
                cm.sendSimple("你想继续变强吗？\r\n#b#L0#我想成为神射手#l\r\n#b#L1#像我想一下...#l");
            } else if (cm.getJob() == 321) {
                cm.sendSimple("你想继续变强吗？\r\n#b#L0#我想成为箭神#l\r\n#b#L1#像我想一下...#l");
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
        } else {
            if (cm.canHold(2280003)) {
                cm.gainItem(2280003, 1);
                if (cm.getJob() == 311) {
                    cm.changeJob(312);
                    cm.teachSkill(3120005, 0, 10);
                    cm.teachSkill(3121007, 0, 10);
                    cm.teachSkill(3121002, 0, 10);
                    cm.gainItem(4031348, -1);
                    cm.sendNext("恭喜你转职为 #b神射手#k.我送你一些神秘小礼物^^");
                } else {
                    cm.changeJob(322);
                    cm.teachSkill(3221006, 0, 10);
                    cm.teachSkill(3220004, 0, 10);
                    cm.teachSkill(3221002, 0, 10);
                    cm.gainItem(4031348, -1);
                    cm.sendNext("恭喜你转职为 #b箭神#k.我送你一些神秘小礼物^^");
                }
            } else {
                cm.sendOk("你没有多的栏位请清空再来尝试一次!");
                cm.dispose();
                return;
            }
        }
    } else if (status == 2) {
        if (cm.getJob() == 312) {
            cm.sendNext("不要忘记了这一切都取决于你练了多少.");
        } else {
            cm.sendNext("不要忘记了这一切都取决于你练了多少.");
        }
    } else if (status == 3) {
        cm.dispose();
    }
}