var items = [[2022338, 100000], [2022339, 900000], [2022340, 3600000], [2022341, 900000], [2022342, 2500000], [2022345, 1600000], [2022179, 4900000]];
var buy = false;
var sel;

function start() {
    var selStr = "So, what do you want?\r\n\r\n#b";
    for (var i = 0; i < items.length; i++) {
        selStr += "#L" + i + "##v" + items[i][0] + "##t" + items[i][0] + "#\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (!buy) {
        sel = selection;
        cm.sendGetNumber("Are you sure you want to make a #b#v" + items[selection][0] + "##t" + items[selection][0] + "##k? The following items and materials will be required...\r\n\r\n" + items[selection][1] + " mesos", 1, 1, 200);
        buy = true;
    } else {
        if (!cm.canHold(items[sel][0], items[sel][1])) {
            cm.sendOk("Please make more space.");
            cm.dispose();
            return;
        }
        cm.gainMeso(-(items[sel][1] * selection));
        cm.gainItem(items[sel][0], selection);
        cm.sendOk("There, all done! That was quick, wasn't it? If you need any more items, I'll be waiting here.");
        cm.dispose();
        return;
    }
}