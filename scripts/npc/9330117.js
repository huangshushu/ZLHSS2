status = -1;
var itemList = Array(
        Array(2370000, 400, 1, 1), //兵法书(孙子)
        Array(2370000, 1, 1, 1), //兵法书(孙子)
        Array(2370001, 400, 1, 1), //兵法书(吴子) 
        Array(2370002, 400, 1, 1), //兵法书(尉缭子)
        Array(2370003, 400, 1, 1), //兵法书(六韬)
        Array(2370004, 400, 1, 1), //兵法书(三略)
        Array(2370005, 800, 1, 0), //兵法书(司马法)
        Array(2370006, 800, 1, 0), //兵法书(李卫公问对)
        Array(2370007, 800, 1, 0), //兵法书(孙兵兵法)
        Array(2370008, 800, 1, 0), //兵法书(兵法三十六计)
        Array(2370009, 800, 1, 0), //兵法书(兵法二十四章)
        Array(2370010, 800, 1, 0), //兵法书(战国策)
        Array(2370011, 800, 1, 0), //兵法书(百战奇略)
        Array(2370012, 800, 1, 0)//兵法书(心书)
        );

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063##i3994071##i3994077#\r\n" +
                    "        #r此为泡泡谷转蛋机，您不想抽奖吗？");
            cm.dispose();
        }
        status--;
    }

    if (status == 0) {
        if (cm.getPlayer().getLevel() < 30) {
            cm.sendOk("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063##i3994071##i3994077#\r\n" +
                    "        #r此为泡泡谷转蛋机，需要30等才能抽奖。");
            cm.dispose();
        } else if (cm.haveItem(5220000)) {
            cm.sendYesNo("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063##i3994071##i3994077#\r\n" +
                    "           #r此为泡泡谷转蛋机，你要抽奖吗?#k\r\n");
        } else {
            cm.sendOk("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063##i3994071##i3994077#\r\n" +
                    "       #r此为泡泡谷转蛋机，请到商城购买转蛋卷。#k\r\n");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 1000);
        if (chance > 800) {
            chance = 800;
        }
        if (chance < 1) {
            chance = 800;
        }
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            if (cm.haveItem(5220000) && cm.canHold()) {
                if (notice == 1) {
                    cm.gainGachaponItem(itemId, quantity, "兵法书转蛋机");
                } else {
                    cm.gainItem(itemId, quantity);
                }
                cm.gainItem(5220000, -1);
                cm.getItemLog("兵法书转蛋机", " 抽到 " + itemId + "(" + cm.getItemName(itemId) + ") " + quantity + "个。");
                cm.sendOk("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                        "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063##i3994071##i3994077#\r\n" +
                        " #r此为泡泡谷转蛋机，恭喜你得到了#k #b#t" + itemId + "##k #r" + quantity + "个。#k");
            } else {
                cm.sendOk("请确认背包是否已经满了以及是否有转蛋卷唷。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("出现未知问题，请稍后再试。");
            cm.safeDispose();
        }
    } else {
        cm.dispose();
    }
}
