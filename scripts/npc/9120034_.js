/*
	Noran
 */

var status = -1;

function start() {
    cm.sendSimple("有什么我可以替你帮忙的吗？ \r #b#L0# 请帮我解除石锁#l \r #L1# 帮助我锻练道具#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (status == 1) {
        status--;
        selection = 0;
    } else {
        cm.dispose();
        return;
    }
    switch (status) {
    case 0:
        if (selection == 0) {
            cm.sendNext("我是诺兰，司令部技术负责人。现在司令部始终都在谈论著你的事。要是能协助我破坏机械军团，我也会帮助你。使用机械军团布雷兹的技术，应该可以制造出强力的道具吧。")
        } else {
            status = 9;
            cm.sendSimple("决定那一个？\r\n#b#L0##t2070019##l\r\n#L1##t2330007##l");
        }
        break;
    case 1:
        cm.sendNextPrev("听说布雷兹已成功开发出收集宇宙能量的技术。若是属实，一定会取得庞大的能量。你说你可以从布雷兹那边取得蓄积宇宙能量的特殊岩石。想要使用岩石的能量必须先解除石锁（封印），要是能拿过来我就帮你解除封印。");
        break;
    case 2:
        cm.sendSimple("将封印的岩石交给我。\r\n#b#L0#交出#t4020010#与费用1,000#t4032181#。#l\r\n#L1#交出#t4020012#与费用1,000#t4032181#。#l\r\n#L2#交出#t4020011#与费用1,000#t4032181#。#l");
        break;
    case 3:
        if (selection == 0) {
            if (cm.haveItem(4020010, 1) && cm.haveItem(4032181, 1000)) {
                cm.gainItem(4032169, 1);
                cm.gainItem(4020010, -1);
                cm.gainItem(4032181, -1000);
            } else {
                cm.sendNext("你好像没有道具喔。请交给我被封印的岩石和费用1,000#t4032181#。另外，再请顺便确认一下道具栏上是否还有足够空位。");
            }
        } else if (selection == 1) {
            if (cm.haveItem(4020011, 1) && cm.haveItem(4032181, 1000)) {
                cm.gainItem(4032170, 1);
                cm.gainItem(4020011, -1);
                cm.gainItem(4032181, -1000);
            } else {
                cm.sendNext("你好像没有道具喔。请交给我被封印的岩石和费用1,000#t4032181#。另外，再请顺便确认一下道具栏上是否还有足够空位。");
            }
        } else {
            if (cm.haveItem(4020012, 1) && cm.haveItem(4032181, 1000)) {
                cm.gainItem(4032171, 1);
                cm.gainItem(4020011, -1);
                cm.gainItem(4032181, -1000);
            } else {
                cm.sendNext("你好像没有道具喔。请交给我被封印的岩石和费用1,000#t4032181#。另外，再请顺便确认一下道具栏上是否还有足够空位。");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (selection == 0) {
            if (cm.haveItem(4032168, 1) && cm.haveItem(4032181, 2500) && cm.haveItem(4032171, 1) && cm.haveItem(2070006, 1) && (cm.getMeso() >= 500000000)) {
                cm.gainItem(4032171, -1);
                cm.gainItem(4032168, -1);
                cm.gainItem(2070006, -1);
                cm.gainItem(4032181, -2500);
                cm.gainMeso(-500000000);
                cm.gainItem(2070019, 1);
            } else {
                cm.sendNext("咦？你好像没有必要的素材嘛？\r\n制造#t2070019#需要有#t4032168#、#t4032170#、#t02070006#1个、#t4032181#2,500片以及500,000,000金币。");
            }
        } else {
            if (cm.haveItem(4032168, 1) && cm.haveItem(4032181, 2500) && cm.haveItem(4032170, 1) && cm.haveItem(2330003, 1) && (cm.getMeso() >= 150000000)) {
                cm.gainItem(4032170, -1);
                cm.gainItem(4032168, -1);
                cm.gainItem(2330003, -1);
                cm.gainItem(4032181, -2500);
                cm.gainMeso(-150000000);
                cm.gainItem(2330007, 1);
            } else {
                cm.sendNext("咦？你好像没有必要的素材嘛？\r\n制造#t2330007#需要有#t4032168#、#t4032171#、#t02330003#1个、#t4032181#2,500片以及150,000,000金币。");
            }
        }
        cm.dispose();
        break;
    }
}
