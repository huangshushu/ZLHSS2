var status = -1;
//var items = Array(5062000, 5062001, 5062002, 5750000, 5750001, 5050000, 2049100, 2022179, 2340000, 4020009, 2040804, 2040029, 2040532, 2040516, 2040513, 2040501, 2040025, 2040321, 2040301, 2043401, 2045301, 2045201, 2040317, 2040817, 5610000, 5610001, 3011000, 5640000, 1122121, 2531000, 2530000, 5030000, 5030001, 5030006, 5534000, 5220084, 5220092, 5510000, 1812008);
//var itemsa = Array(2550, 20000, 30000, 5000, 4100, 2550, 4100, 5000, 50000, 2000, 5000, 6000, 7500, 7500, 8000, 8000, 9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000, 6000, 9000, 4500, 80000, 150000, 100000, 35000, 3400, 11800, 19800, 20000, 20000, 40000, 1000, 7000);
//var itemse = Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14, -1, 30, -1, -1, 1, 7, 14, -1, -1, -1, -1);
var items = [
/*Cubes*/ [[5062000, 2500, -1], [5062001, 10000, -1], [5062002, 12500, -1], [5062003, 30000, -1], [5062005, 40000, -1]/*, [5062500, 75000, -1]/*/],
/*Scrolls*/ [[2049100, 5100, -1], [2040804, 9000, -1], [2040301, 9000, -1], [2046223, 7000, -1], [2046224, 7000, -1], [2046225, 7000, -1], [2046226, 7000, -1], [2046314, 7000, -1], [2046315, 7000, -1], [2046316, 7000, -1], [2046317, 7000, -1], [2040817, 9000, -1]],
/*Scrolling Tools*/ [/*[2340000, 50000, -1], */[5610000, 10000, -1], [5610001, 12000, -1], [5640000, 80000, -1], [2531000, 100000, -1], [2530000, 35000, -1], [5534000, 20000, -1]],
/*Game Enhancing*/ [[5050000, 2050, -1], [5510000, 1000, -1], [5521000, 10000, -1], [5062200, 5000, -1], [5062201, 10000, -1], [5133000, 1000, -1], [5520001, 8000, -1]],
/*Hired Merchants*/ [[5030000, 3400, 1], [5030001, 11800, 7], [5030006, 19800, 7], [5470000, 50000, -1]],
/*ETC*/ [[4020009, 2000, -1], [3011000, 4500, 14], [1122121, 300000, 14], [5155000, 10000, -1]/*, [5062400, 10000, -1]*/, [5700000, 10000, -1]/*, [1342069, 20000, 90]*/, [1112909, 70000, -1], [2022032, 100, -1], [5450005, 5000, -1], [5040004, 100000, -1]],
/*Mastery Books*/ [[2290448, 40000, -1], [2290449, 40000, -1], [2290450, 40000, -1], [2290451, 40000, -1], [2290452, 40000, -1], [2290453, 40000, -1], [2290454, 40000, -1], [2290455, 40000, -1], [2290456, 40000, -1], [2290457, 40000, -1], [2290458, 40000, -1], [2290459, 40000, -1], [2290460, 40000, -1], [2290461, 40000, -1], [2290462, 40000, -1], [2290463, 40000, -1], [2290464, 40000, -1], [2290465, 40000, -1], [2290466, 40000, -1], [2290467, 40000, -1], [2290468, 40000, -1], [2290571, 40000, -1]/*, [2290602, 40000, -1]*/, [2290714, 40000, -1], [2290715, 40000, -1], [2290721, 40000, -1]]
];
var select, select2;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        //cm.sendSimple("Hello there, I am trading Cash for items. It seems that you have #r#e" + cm.getPlayer().getCSPoints(1) + "#n#k #rCash#k. You could sure waste some...\r\n\r\n#b#L0#Give me #rCash#b and I'll give you an item.#l#k");
        cm.sendSimple("Hi, I like #rCash#k. Maybe you could trade me some of your #r" + cm.getPlayer().getCSPoints(1) + " Cash#k? I have lots of great items for you...#b\r\n\r\n#L0#Cubes#l\r\n#L1#Scrolls#l\r\n#L2#Scrolling Tools#l\r\n#L3#Game-enhancing#l\r\n#L4#Hired Merchant#l\r\n#L5#ETC#l\r\n#L6#Mastery Books#l");
    } else if (status == 1) {
        select = selection;
        var selStr = "Which item would you like?\r\n#b";
        for (var i = 0; i < items[selection].length; i++) {
            selStr += "#L" + i + "##v" + items[selection][i][0] + "##t" + items[selection][i][0] + "# #r(" + items[selection][i][1] / 2 + " Cash)" + (items[select][selection][2] > 0 ? " (Lasts for " + items[select][selection][2] + "days)" : "") + "#b#l\r\n";
        }
        cm.sendSimple(selStr + "#k");
    } else if (status == 2) {
        select2 = selection;
        if (items[select][selection][0] / 1000000 == 1) {
            if (cm.getPlayer().getCSPoints(1) < items[select2][i][1] / 2) {
                cm.sendOk("It seems that you don't have enough #rCash#k.");
            } else if (!cm.canHold(items[select][select2][0], 1)) {
                cm.sendOk("You don't have the inventory space to hold it. I must be legit and make this a fair trade... so hurry up and free your inventory.");
            } else {
                cm.getPlayer().modifyCSPoints(1, -(items[select][select2][i][1] / 2), true);
                if (items[select][select2][2] > 0) {
                    cm.gainItemPeriod(items[select][select2][0], 1, items[select][select2][2]);
                } else {
                    cm.gainItem(items[select][select2][0], 1);
                }
                cm.sendOk("You have gained " + selection + "and lost " + items[select][select2][i][1] / 2 * selection + " Cash");
            }
            cm.dispose();
        } else {
            cm.sendGetNumber("How many would you like? (1#v" + items[select][selection][0] + "##t" + items[select][selection][0] + "# = " + items[select][selection][1] / 2 + " Cash) (Current Cash: " + cm.getPlayer().getCSPoints(1) + ")", 1, 1, cm.getPlayer().getCSPoints(1) / (items[select][selection][1] / 2));
        }
    } else if (status == 3) {
        if ((items[select][select2][0] == 2340000 || items[select][select2][0] == 5610000 || items[select][select2][0] == 5610001 || items[select][select2][0] == 5062001 || items[select][select2][0] == 5640000) && cm.getPlayer().getLevel() < 70) {
            cm.sendOk("Sorry but you must be level 70 or above to get this item.");
        } else if (items[select][select2][0] == 2022179 && cm.getPlayer().getLevel() < 50) {
            cm.sendOk("Sorry but you must be level 50 or above to get this item.");
        } else if (cm.getPlayer().getCSPoints(1) < items[select][select2][1] / 2) {
            cm.sendOk("It seems that you don't have enough #rCash#k.");
        } else if (!cm.canHold(items[select][select2][0], selection)) {
            cm.sendOk("You don't have the inventory space to hold it. I must be legit and make this a fair trade... so hurry up and free your inventory.");
        } else {
            cm.getPlayer().modifyCSPoints(1, -(items[select][select2][1] / 2 * selection), true);
            if (items[select][select2][2] > 0) {
                cm.gainItemPeriod(items[select][select2][0], selection, items[select][select2][2]);
            } else {
                cm.gainItem(items[select][select2][0], selection);
            }
			cm.playerMessage("You have lost " + (items[select][select2][1] / 2 * selection) + " Cash.");
        //cm.showMessage(7, "You have lost " + (items[select][select2][1] / 2 * selection) + " Cash.");
            cm.sendOk("You have gained " + selection + " and lost " + items[select][select2][1] / 2 * selection + " Cash");
        }
        cm.dispose();
    }
}