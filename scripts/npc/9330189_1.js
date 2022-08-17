var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("呵呵，好吧，你继续玩吧。");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
            cm.sendYesNo("怎么？这就想出去了？还有很多有趣的事情呢？");
    } else if (status == 1) {
        cm.sendNext("真没耐心。如果你非要走的话，我也不会拦你。再见。");
    } else if (status == 2) {
        cm.warp(744000000);
        cm.dispose();
    }
}
