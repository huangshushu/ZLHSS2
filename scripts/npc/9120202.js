/* Konpei
 Showa - Nightmarish Last Days
 */

var flash;

function start() {
    flash = cm.haveItem(4000141);

    if (!flash) {
        cm.sendNext("一旦您打死老板的话，您必须拿著老大的道具来做为证据，什么?您要离开这个房间吗??");
    } else {
        cm.sendNext("嘿，嘿！这里是很危险的您还是赶快离开吧！")
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (!flash) {
            cm.warp(801040000, 0);
            cm.dispose();
        } else {
            cm.warp(801040101, 0);
            cm.dispose();
        }
    } else {
        cm.sendOk("我真的很佩服你的任性!好吧，如果你想要回到昭和村的时候再让我知道吧！");
    }
}
