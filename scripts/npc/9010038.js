var items = [
[1002510, 1003296, 1012286, 1032111, 1032040, 1082252, 1082343, 1102166, 1112670, 1122015, 1122152, 1092030, 1302033, 1302065, 1302067, 1302180, 1302058, 1302181, 1302020, 1342025, 1382009, 1452016, 1462014, 1472030, 1482020, 1492020], //level 39-
[1003242, 1052357, 1072521, 1082314, 1102294, 1132092, 1152060, 1302169, 1312068, 1322099, 1332144, 1362057, 1372096, 1382120, 1402106, 1412067, 1422069, 1432095, 1442132, 1452125, 1462113, 1472136, 1482098, 1492097, 1522065, 1532069, 1003349, 1012287, 1032041, 1032112, 1082344, 1102167, 1112671, 1122153, 1302030, 1332025, 1342026, 1382012, 1412011, 1422014, 1432012, 1442024, 1452022, 1462019, 1472032, 1482021, 1492021, 1332142, 1342037, 1372094, 1382118, 1402104, 1442130, 1452123, 1462111, 1472134, 1482096, 1492095], //level 40-59
[1003243, 1052358, 1072522, 1082315, 1102295, 1132093, 1152061, 1302170, 1312069, 1322101, 1332145, 1362058, 1372097, 1382121, 1402107, 1412068, 1422070, 1432096, 1442133, 1452126, 1462114, 1472137, 1482099, 1492098, 1522066, 1532070, 1003350, 1012288, 1032042, 1032113, 1082345, 1102168, 1112672, 1122154, 1092045, 1092046, 1092047, 1302064, 1312032, 1322054, 1332055, 1332056, 1342027, 1372034, 1382039, 1402039, 1412027, 1422029, 1432040, 1442051, 1452045, 1462040, 1472055, 1482022, 1492022], //level 60-69
[1002511, 1122115, 1122074, 1122075, 1122077, 1302142, 1312056, 1322084, 1332114, 1342028, 1372071, 1382093, 1402085, 1412055, 1422057, 1432075, 1442030, 1442104, 1452100, 1462085, 1472111, 1482073, 1492073, 1003529, 1052457, 1072660, 1082430, 1102394, 1112742, 1132151, 1152088, 1302212, 1312114, 1322154, 1332186, 1362060, 1372131, 1382160, 1402145, 1412102, 1422105, 1432135, 1442173, 1452165, 1462156, 1472177, 1482138, 1492138, 1522068, 1532073 /*, 1542058, 1552058*/], //level 70-79
[1002758, 1003364, 1052405, 1072610, 1082391, 1102322, 1132110, 1152068, 1302192, 1312098, 1322138, 1332168, 1362059, 1372117, 1382142, 1402129, 1412087, 1422089, 1432117, 1442154, 1452147, 1462136, 1472159, 1482120, 1492119, 1522055, 1532059], //level 80-99
[1003224, 1082313, 1122110, 1003552, 1052461, 1072666, 1082433, 1102441, 1112743, 1132154, 1152089, 1302227, 1312116, 1322162, 1332193, 1362067, 1372139, 1382168, 1402151, 1412104, 1422107, 1432138, 1442182, 1452170, 1462159, 1472179, 1482140, 1492152, 1522071, 1532074, /*1542059, 1552059,*/ 1112673, 1302200, 1312106, 1322146, 1332177, 1342059, 1362045, 1372126, 1382152, 1402138, 1412094, 1422097, 1432126, 1442164, 1452156, 1462146, 1472168, 1482129, 1492129, 1522063, 1532067, 1332143, 1342038, 1372095, 1382119, 1402105, 1442131, 1452124, 1462112, 1472135, 1482097, 1492096], //level 100+
[2046040, 2046041, 2046128, 2046277, 2046278, 2046279, 2046280, 2046366, 2046367, 2046368, 2046369, 2046281, 2046282, 2046283, 2046284, 2046370, 2046371, 2046372, 2046373]  //Legend Maple scrolls
];
//var existitems = [1002510, 1003296, 1012286, 1032111, 1032040, 1082252, 1082343, 1102166, 1112670, 1122015, 1122152, 1092030, 1302033, 1302065, 1302067, 1302180, 1302058, 1302181, 1302020, 1342025, 1382009, 1452016, 1462014, 1472030, 1482020, 1492020, 1003242, 1052357, 1072521, 1082314, 1102294, 1132092, 1152060, 1302169, 1312068, 1322099, 1332144, 1362057, 1372096, 1382120, 1402106, 1412067, 1422069, 1432095, 1442132, 1452125, 1462113, 1472136, 1482098, 1492097, 1522065, 1532069, 1003349, 1012287, 1032041, 1032112, 1082344, 1102167, 1112671, 1122153, 1302030, 1332025, 1342026, 1382012, 1412011, 1422014, 1432012, 1442024, 1452022, 1462019, 1472032, 1482021, 1492021, 1003243, 1052358, 1072522, 1082315, 1102295, 1132093, 1152061, 1302170, 1312069, 1322101, 1332145, 1362058, 1372097, 1382121, 1402107, 1412068, 1422070, 1432096, 1442133, 1452126, 1462114, 1472137, 1482099, 1492098, 1522066, 1532070, 1003350, 1012288, 1032042, 1032113, 1082345, 1102168, 1112672, 1122154, 1092045, 1092046, 1092047, 1302064, 1312032, 1322054, 1332055, 1332056, 1342027, 1372034, 1382039, 1402039, 1412027, 1422029, 1432040, 1442051, 1452045, 1462040, 1472055, 1482022, 1492022, 1002511, 1122115, 1122074, 1122075, 1122077, 1302142, 1312056, 1322084, 1332114, 1342028, 1372071, 1382093, 1402085, 1412055, 1422057, 1432075, 1442030, 1442104, 1452100, 1462085, 1472111, 1482073, 1492073, 1002758, 1003364, 1052405, 1072610, 1082391, 1102322, 1132110, 1152068, 1302192, 1312098, 1322138, 1332168, 1362059, 1372117, 1382142, 1402129, 1412087, 1422089, 1432117, 1442154, 1452147, 1462136, 1472159, 1482120, 1492119, 1522055, 1532059, 1112673, 1302200, 1312106, 1322146, 1332177, 1342059, 1362045, 1372126, 1382152, 1402138, 1412094, 1422097, 1432126, 1442164, 1452156, 1462146, 1472168, 1482129, 1492129, 1522063, 1532067, 2046040, 2046041, 2046128, 2046277, 2046278, 2046279, 2046280, 2046366, 2046367, 2046368, 2046369, 2046281, 2046282, 2046283, 2046284, 2046370, 2046371, 2046372, 2046373];
//exist item is v117 updated and used since there are items which are higher than v117
var leafprice = [50, 100, 100, 175, 350, 250, 350, 250];
var mesoprice = [5000, 10000, 25000, 50000, 100000, 250000, 500000, 500000];
var leaf = 4001126;
var equipneeded = 0;
var chat = -1;
var select, tab = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 || mode == -1 && chat == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? chat++ : chat--;
    switch (chat) {
        case 0:
            cm.sendSimple("What would you like to do ? \r\n\r\n" + 
                "\r\n#L0#Make level 39- equipments#l" + 
                "\r\n#L1#Make level 40-59 equipments#l" + 
                "\r\n#L2#Make level 60-69 equipments#l" + 
                "\r\n#L3#Make level 70-79 equipments#l" + 
                "\r\n#L4#Make level 80-99 equipments#l" + 
                "\r\n#L5#Make level 100+ equipments#l" + 
                "\r\n#L6#Make Legend Maple scrolls#l" + 
                "\r\n#L7#Trade for Experience#l");
            break;
        case 1:
            tab = selection;
            if (tab != 7) {
                itemSelection(selection);
            } else {
                tradeExp();
            }
            break;
        case 2:
            select = selection;
            if (tab != 7) {
                chooseItem(selection);
            } else {
                finishExpTrade(selection);
            }
            break;
        case 3:
            if (hasRequieredMaterials(tab, select))
                gainRewards(tab, select);
            else
                cm.sendOk("You don't have the requiered materials.");
            cm.dispose();
            break;
    }
}

/*
function loadExistItems() {
    var list = new Array();
    for (var i = 0; i < items.length; i++)
        for (var j = 0; j < items[i].length; j++)
            if (cm.itemExists(items[i][j]))
                list.push(items[i][j]);
    cm.test(list);
}

function itemExists(item) {
    for (var i = 0; i < existitems.length; i++)
        if (existitems[i] == item)
            return true;
    return false;
}
*/

function itemSelection(index) {
    var choice = "So, what do you want?\r\n#b";
    for (var i = 0; i < items[index].length; i++)
        //if (itemExists(items[index][i]))
            choice += "#L" + items[index][i] + "##i" + items[index][i] + "##z" + items[index][i] + "##l\r\n";
    cm.sendSimple(choice);
}

function tradeExp() {
    cm.sendGetNumber("How many leaves would you like to trade in?", cm.itemQuantity(leaf), 0, 32767);
}

function finishExpTrade(leaves) {
    if (leaves <= 0) {
        cm.sendOk("If you don't want to trade any leaves, then you won't get exp.");
        cm.dispose();
        return;
    }
    if (leaves > cm.itemQuantity(leaf)) {
        cm.sendOk("You do not have that many leaves.");
        cm.dispose();
        return;
    }
    cm.gainItem(leaf, -leaves);
    cm.gainExpR(leaves * 200);
    cm.sendOk("There you go!");
    cm.dispose();
}

function chooseItem(itemid) {
    var choice = "Are you sure you want to make a #i" + itemid + "##z" + itemid + "#?\r\nThe following items and materials will be requiered...\r\n\r\n";
    switch (tab) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            equipneeded = getRequieredItem(itemid);
            choice += "\r\n#i" + leaf + "# x" + leafprice[tab] + "";
            choice += "\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + mesoprice[tab] + "";
            if (equipneeded > 0)
                choice += "\r\n#i" + getRequieredItem(itemid) + "##z" + getRequieredItem(itemid) + "";
            //choice += "\r\n#i" + getStimulator(itemid) + "##z" + getStimulator(itemid) + "# can also be used. #r(Optional)#k";
            cm.sendYesNo(choice);
            break;
    }
}

function getRequieredItem(itemid) {
    //if (itemExists(itemid - 1)) {
        return itemid - 1;
    //}
    //return 0;
}

function hasRequieredMaterials(index, itemid) {
    switch (index) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            if (cm.getMeso() >= mesoprice[0] && cm.itemQuantity(leaf) >= leafprice[0])
                if (equipneeded <= 0 || cm.itemQuantity(getRequieredItem(itemid)) >= 1)
                    return true;
            return false;
    }
}

function gainRewards(index, itemid) {
    switch (index) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            cm.gainMeso(-mesoprice[index]);
            cm.gainItem(leaf, -leafprice[index]);
            if (equipneeded > 0)
                cm.gainItem(equipneeded, -1);
            cm.gainItem(itemid, 1);
            break;
        default:
            cm.dispose();
            return;
    }
    cm.sendOk("Enjoy your rewards :D");
}