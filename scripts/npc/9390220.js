var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            cm.sendSimple("你好, #e#b#h0##k#n。欢迎来到凯梅尔兹交易所。#b\r\n\r\n" + (cm.isQuestFinished(17007) ? "#L1#进行贸易#l#b\r\n#L2#个人回生系统#l" : "#L0#购置舰船#l"));
            break;
        case 1:
            if (selection == 0) {
                if (!cm.isQuestFinished(17007)) {
                    if (cm.getMeso() >= 10000000) {
                        cm.gainMeso(-10000000);
                        cm.setCanSail();
                        cm.gainItem(4310100, 30);
                        cm.sendOk("舰船购置成功,并交换了30个金币");
                    } else {
                        cm.sendOk("购置舰船需要1000W！");
                    }
                } else {
                    cm.sendOk("你已经购置了舰船了！");
                }
                cm.dispose();
            } else if (selection == 1) {
                if (cm.isQuestFinished(17007)) {
                    if (cm.getSailStat() == 0) {
                        cm.sendNext("上次贸易没有顺利完成,我可以返还给你货物的金币,但是货物不会给你. ");
                    } else if (cm.getSailCoins() > 0) {
                        cm.sendNext("最近,你通过交易所获得的金币是 #b#e" + cm.getSailCoins() + "#k#n个。");
                    } else {
                        cm.openUI(0x22A);
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("你还没有购置舰船不能进行贸易！");
                    cm.dispose();
                }
            } else {
                if (cm.getItemQuantity(4310100) < 10) {
                    cm.gainItem(4310100, 10);
                    cm.sendOk("好了,我已经给你10个金币了,请小心收好！");
                } else {
                    cm.sendOk("你不能使用个人回生系统！");
                }
                cm.dispose();
            }
            break;
        case 2:
            cm.sendYesNo("你要领取金币吗?");
            break;
        case 3:
            if (cm.gainSailBouns()) {
                cm.sendOk("金币领取成功！");
            } else {
                cm.sendOk("背包空间不足！");
            }
            cm.dispose();
            break;
    }
}
