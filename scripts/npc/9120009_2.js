var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
    Array(2044815, 1),
    Array(2044703, 1),
    Array(2043703, 1),
    Array(2043803, 1),
    Array(2044603, 1),
    Array(2044503, 1),
    Array(2044019, 1),
    Array(2043003, 1),
    Array(2044003, 1),
    Array(2044303, 1),
    Array(2043103, 1),
    Array(2044203, 1),
    Array(2044403, 1),
    Array(2044908, 1),
    Array(2043303, 1),
    Array(2040506, 1),
    Array(2040710, 1),
    Array(2040711, 1),
    Array(2040303, 1),
    Array(2040709, 1)
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            text = "  选择所要兑换的道具\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "#回收#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "# 每张100 点券#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " - 当前回收道具：#r#i" + itemlist[selects][0] + "##t" + itemlist[selects][0] + "#\r\n\r\n"
            cm.sendGetNumber(txt,  cm.itemQuantity(itemlist[selects][0]), 1, cm.itemQuantity(itemlist[selects][0]));
        } else if (a == 2) {
            var itemid = itemlist[selects][0];
                cm.gainItem(itemlist[selects][0],-selection);
                cm.gainNX(selection * 100);
                cm.sendOk("兑换成功。");
                cm.dispose();

    }//mode
    }
}
