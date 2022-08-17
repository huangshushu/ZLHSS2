importPackage(Packages.client);
importPackage(Packages.client.inventory);

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        var avail = "亲爱的#b#e#h ##n#k，欢迎来到玩具抽奖箱子兑换处:\r\n";
        avail += "#b#v2022468##z2022468##l\r\n\r\n可以用黄金枫叶购买，50个黄金枫叶可以兑换一个抽奖箱子！\r\n";
        avail += "#r \r\t\r\t您是否要继续(请确保背包里面有50个黄金枫叶)   \r\n";
        cm.sendYesNo(avail);
    } else if (status == 1) {
        var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000313).iterator();
        cm.sendGetNumber("请输入您要兑换的数量:  ",1,1,iter.next().getQuantity()/50);
    } else if (status == 2) {
            if (cm.getInventory(2).isFull()) {
                cm.sendSimple("您的背包空间不足，消耗栏起码留出一个空位。");
                cm.dispose();
                return;
            }
            cm.gainItem(2022468, selection);
            cm.gainItem(4000313, -(selection*50));
            cm.sendOk("您成功兑换了#z"+2022468+"##v"+2022468+"# x #r" + selection + " #k个。");
            cm.dispose();
    }
}