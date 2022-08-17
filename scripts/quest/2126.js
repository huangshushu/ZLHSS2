var status = -1;
var maps = Array(104000000, 102000000, 101000000, 103000000, 120000000);
var map;

function start(mode, type, selection) {}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (qm.haveItem(4031624) && qm.getPlayer().getMapId() == 260000200) {
                qm.sendNext("恭喜完成任务。");
                status = 2;
            }
            if (qm.getMeso() <= 10000) {
                qm.sendNext("我看你好像还没准备好，准备好再来找我吧。");
                qm.dispose();
            } else {
                qm.sendNext("是否已经准备话一万金币随机传送金银岛的任意一个城市?");
            }
        } else if (status == 1) {
            qm.sendNextPrev("我会想你的。");
        } else if (status == 2) {
            map = Math.floor(Math.random() * maps.length);
            qm.gainMeso(-10000);
            qm.warp(maps[map], 1);
            qm.forceStartQuest();
            qm.dispose();
        } else if (status == 3) {
            if (qm.haveItem(4031581)) {
                qm.gainItem(2022155, 5);
            }
            qm.forceCompleteQuest();
            qm.forceStartQuest(2127);
            qm.gainItem(2030000, 1);
            qm.gainExp(2000);
            qm.dispose();
        }
    }
}