var status;
var useMesos = 2000000;
﻿var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var itemList = Array(
        Array(2710000, 700, 1, 0), //怪异魔方 S
        Array(2711001, 800, 1, 0), //怪异魔方 A
        Array(2711003, 600, 1, 0), //匠人魔方
        Array(2711004, 200, 1, 1), //名匠之魔方 SS
        Array(2711005, 100, 1, 1), //工匠之魔方 S
        //cash
        Array(5062000, 80, 1, 1), //神奇魔方
        Array(5062001, 70, 1, 1), //混沌神奇魔方
        Array(5062002, 60, 1, 1), //高级神奇魔方
        Array(5062005, 50, 1, 1), //惊人的神奇魔方
        Array(5062006, 40, 1, 1), //白金神奇魔方
        Array(5062009, 30, 1, 1), //超级神奇魔方
        Array(5062010, 20, 1, 1), //终极神奇魔方
        Array(5062024, 10, 1, 1), //闪炫魔方
        Array(5062090, 30, 1, 1), //记忆魔方
        Array(5062500, 70, 1, 1), // 大师附加神奇魔方
        Array(5062501, 50, 1, 1), //[MS特价]潜能变化魔方
        Array(5062502, 50, 1, 1), //新春潜能变化魔方
        Array(5750000, 500, 1, 0), //星岩魔方
        Array(5750002, 500, 1, 0) //星岩魔方
        );
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.sendOk("不想使用金币来抽奖吗？…这里可是可以抽取到#b卷轴、魔方、新奇道具#k哦！");
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            if (cm.getMeso() >= useMesos) {
                cm.sendYesNo("            #e" + tz15 + "#r『转盘转转转』 " + tz15 + "\r\n#k\r\n\r\n        花费“#b" + useMesos + "金币#k”就可以进行一次....\r\n        你想现在进行吗?");
            } else {
                cm.sendOk("            #e" + tz15 + "#r『转盘转转转』 " + tz15 + "\r\n#k\r\n\r\n        这需要花费“#b" + useMesos + "金币#k”你好像没有这么多金币耶......");
                cm.safeDispose();
            }
            break;
        case 1: //
            var chance = Math.floor(Math.random() * 1000);
            var finalitem = Array();

            for (var i = 0; i < itemList.length; i++) {
                if (chance <= itemList[i][1]) {
                    finalitem.push(itemList[i]);
                }
            }
            if (finalitem.length != 0) {
                var random = new java.util.Random();
                var finalchance = random.nextInt(finalitem.length);
                var itemId = finalitem[finalchance][0];
                var quantity = finalitem[finalchance][2];
                var notice = finalitem[finalchance][3];
                if (cm.getMeso() >= useMesos) {
                    var ii = cm.getItemInfo();
                    if (cm.canHold()) {
                        if (notice == 1) {
                            cm.worldSpouseMessage(0x15, "『转盘转转转』 " + "[" + cm.getChar().getName() + "] 在转盘转转转中获得了" + quantity + "个<" + ii.getName(itemId) + ">, 大家快来祝贺他(她)吧！");
                        }
                        cm.gainItem(itemId, quantity);
                        cm.gainMeso(-useMesos);
                        cm.sendOk("你获得了 #b#t" + itemId + "##k " + quantity + "个。");
                    } else {
                        cm.sendOk("请整理你的背包空间..");
                    }
                } else {
                    cm.sendOk("这需要花费“#b" + useMesos + "金币#k”你好像没有这么多金币耶");
                }
                cm.safeDispose();
            } else {
                cm.sendOk("#r\r\n今天的运气可真差，什么都没有拿到。");
                cm.gainMeso(-useMesos);
                cm.gainItem(4001839, 20);
                cm.safeDispose();
            }
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}
