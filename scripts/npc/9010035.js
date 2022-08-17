var rewards = [
/*Gachapon*/ [3700012, 3700013, 1152009, 1152082, 1152059, 1072344, 1003108, 1042191, 1062125, 1082275, 1072446, 1062148, 1132136, 1132013, 1092068, 1082393, 1082394, 1032135, 1032084, 1132040, 1122085, 1142249, 1012270, 1012240, 1012108, 1012109, 1012110, 1012111, 1022123, 1182019, 1182007, 1142489, 1112400, 1112585, 1112586, 1112664, 1112665, 1112666, 1112667, 1112675, 1112597, 1122150, 1122149, 1122148, 1122059, 1122151, 1662006, 1662002, 1662003, 1672005, 1672007/*, 2049137*/, 2046002, 2046003, 2046102, 2046103, 2040759, 3062230, 3062220, 3062280, 3063280, 3063281, 3063271, 3010183, 3010255, 3010321, 3010301, 3010302, 3010285, 3010422, 3010424],
/*Shop*/ [1000044, 1001070, 1001071, 1001076, 1002709, 1002842, 1002843, 1002878, 1002884, 1002998, 1002999, 1003001, 1003010, 1003078, 1003109, 1003120, 1003186, 1003187, 1003192, 1003193, 1003207, 1003220, 1003223, 1003232, 1003234, 1003235, 1003239, 1003240, 1003241, 1003247, 1003249, 1003250, 1003251, 1003252, 1003253, 1003254, 1003255, 1003256, 1003264, 1003265, 1003268, 1003269, 1003272, 1003277, 1003278, 1003279, 1003367, 1003403, 1003459, 1003460, 1003462, 1003463, 1003482, 1003483, 1003484, 1003485, 1003486, 1003487, 1003492, 1003493, 1003494, 1003495, 1003496, 1003503, 1003510, 1003518, 1003519, 1003520, 1003559, 1003560, 1040137, 1041138, 1040154, 1041156, 1042170, 1042204, 1042215, 1042216, 1042230, 1042231, 1042235, 1042236, 1042237, 1042238, 1048000, 1048001, 1049000, 1050227, 1050232, 1051131, 1051189, 1051232, 1051235, 1051264, 1051265, 1051278, 1051282, 1052046, 1052067, 1052082, 1052178, 1052201, 1052210, 1052211, 1052213, 1052224, 1052236, 1052253, 1052282, 1052332, 1052356, 1052408, 1052411, 1052412, 1052416, 1052417, 1052418, 1052419, 1052423, 1052425, 1052426, 1052438, 1052439, 1052446, 1052447, 1062136, 1062137, 1062145, 1062148, 1062151, 1062152, 1062153, 1072407, 1072516, 1072517, 1102251, 1102267, 1102270, 1102271, 1102291, 1102292, 1102300, 1102310, 1102325, 1102338, 1102349, 1102357, 1102359, 1102373, 1102374, 1102376, 1102377, 1102378, 1102380, 1102390, 1102486, 1010004, 1010005, 1012007, 1012044, 1012081, 1012298, 1702115, 1702235, 1702268, 1702274, 1702284, 1702293, 1702304, 1702306, 1702308, 1702309, 1702310, 1702334, 1702335, 1702336, 1702337, 1702340, 1702342, 1702348, 1702350, 1702352, 1702360, 1702371, 1702372]
];
var existitems = [3700012, 3700013, 1152009, 1152082, 1152059, 1072344, 1003108, 1042191, 1062125, 1082275, 1072446, 1062148, 1132136, 1132013, 1092068, 1082393, 1082394, 1032135, 1032084, 1132040, 1122085, 1142249, 1012270, 1012240, 1012108, 1012109, 1012110, 1012111, 1022123, 1182019, 1182007, 1142489, 1112400, 1112585, 1112586, 1112664, 1112665, 1112666, 1112667, 1112675, 1112597, 1122150, 1122149, 1122148, 1122059, 1122151, 1662006, 1662002, 1662003, 1672005, 1672007, 2046002, 2046003, 2046102, 2046103, 2040759, 3062230, 3062220, 3062280, 3063280, 3063281, 3063271, 3010183, 3010255, 3010321, 3010301, 3010302, 3010285, 3010422, 3010424, 1002709, 1002842, 1002843, 1002878, 1002884, 1002998, 1002999, 1003078, 1003109, 1003186, 1003187, 1003192, 1003193, 1003239, 1003249, 1003268, 1003269, 1003278, 1003279, 1003459, 1003482, 1003483, 1003484, 1003485, 1003486, 1003487, 1003492, 1003493, 1003494, 1003495, 1003496, 1003518, 1003519, 1003559, 1041138, 1042238, 1048000, 1048001, 1049000, 1051189, 1051278, 1051282, 1052082, 1052178, 1052282, 1052408, 1052418, 1052419, 1052438, 1052439, 1062148, 1102291, 1102292, 1102338, 1102349, 1102359, 1102378, 1102380, 1102390, 1102486, 1012081, 1012298, 1702268, 1702284, 1702293, 1702308, 1702309, 1702348];
var state = -1;
var sel;

function start() {
    cm.sendNext("Hello, I am the #rEvent Point#k reward exchanger!\r\nWould you like to exchange your #b" + cm.getPlayer().getEPoints() + " #rEvent Points#k?");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    state++;
    switch (state) {
        case 0:
            cm.sendSimple(" \r\n#L0#Event Gachapon#l\r\n#L1#Event Shop#l\r\n\r\n#r#L2#View Gachapon Obtainable Items#l");
            break;
        case 1:
            sel = selection;
            if (selection == 0) {
                cm.sendYesNo("Welcome to the #gEvent Gachapon#k! If you want to try me out, you will need " + "7" + "x #gEvent Points#k!\r\n#r*If you obtain a non-equip item from the #gEvent Gachapon#r, you may obtain more than one item.#k");
            } else if (selection == 1) {
                var selStr = "What would you like?\r\n#b";
                for (var i = 0; i < rewards[1].length; i++) {
                    if (itemExists(rewards[1][i])) {
                        selStr += "#L" + i + "##i" + rewards[1][i] + "##z" + rewards[1][i] + "# #g" + 10 + "x #rEvent Points#b#l\r\n";
                    }
                }
                cm.sendSimple(selStr);
            } else if (selection == 2) {
                var itemList = "There are the items who can be obtained through the #gEvent Gachapon#k:\r\n#b";
                itemList += "#i3800088#Nothing #g0.00% #bChance\r\n";
                itemList += "#i3994120#Nothing #g0.00% #bChance\r\n";
                itemList += "#i3800246#Exp (20% of required exp to level) #g" + cm.format("%.2f", 100 / (rewards[0].length + 1/*Exp*/)) + "% #bChance\r\n";
                for (var j = 0; j < rewards[0].length; j++) {
                    if (itemExists(rewards[0][j])) {
                        itemList += "#i" + rewards[0][j] + "##z" + rewards[0][j] + "# #g" + cm.format("%.2f", 100 / (rewards[0].length + 1/*Exp*/)) + "% #bChance\r\n";
                    }
                }
                cm.sendOk(itemList);
                cm.dispose();
            } else {
                cm.dispose();
                return;
            }
            break;
        case 2:
            if (sel == 0) {
                if (cm.getPlayer().getEPoints() < 7) {
                    cm.sendOk("You don't seem to have enough #rEvent Points#k.");
                    cm.dispose();
                    return;
                }
                var random = Math.floor(Math.random() * (rewards[0].length + 1/*Exp*/));
                var randomq = Math.floor(Math.random() * 5) + 1;
                if (random == rewards[0].length) {
                    if (cm.getPlayer().getLevel() >= 200) {
                        cm.sendNext("Your reward is #i3800246#EXP, but since you are higher than Lv.199 you will obtain another reward.");
                        state = 1;
                    } else {
                        cm.getPlayer().setEPoints(cm.getPlayer().getEPoints() - 7);
                        cm.gainExpR(cm.getPlayer().getNeededExp() / 20);
						cm.playerMessage("You have lost 7 Event Points.");
                        //cm.showMessage(7, "You have lost " + 7 + " Event Points.");
                    }
                } else {
                    cm.getPlayer().setEPoints(cm.getPlayer().getEPoints() - 7);
                    cm.gainItem(rewards[0][random], isOneQuantity(rewards[0][random]) ? 1 : randomq);
					cm.playerMessage("You have lost 7 Event Points.");
                    //cm.showMessage(7, "You have lost " + 7 + " Event Points.");
                }
            } else if (sel == 1) {
                if (cm.getPlayer().getEPoints() < 10) {
                    cm.sendOk("You don't seem to have enough #rEvent Points#k.");
                    cm.dispose();
                    return;
                }
                cm.getPlayer().setEPoints(cm.getPlayer().getEPoints() - 10);
                cm.gainItem(rewards[1][selection], 1);
				cm.playerMessage("You have lost 10 Event Points.");
                //cm.showMessage(7, "You have lost " + 10 + " Event Points.");
            } else {
                cm.dispose();
                return;
            }
            if (state != 1) {
                cm.sendOk("Thank you for your purchase!");
                cm.dispose();
            }
            break;
    }
}

function loadExistItems() {
    var list = new Array();
    for (var i = 0; i < rewards.length; i++)
        for (var j = 0; j < rewards[i].length; j++)
            if (cm.itemExists(rewards[i][j]))
                //if (rewards[i][j] >= 1000000)
                list.push(rewards[i][j]);
    cm.test(list);
}

function itemExists(item) {
    for (var i = 0; i < existitems.length; i++)
        if (existitems[i] == item)
            return true;
    return false;
}

function isOneQuantity(id) {
    return id >= 1000000 && id < 2000000 || id >= 3980000 && id < 4000000;
}