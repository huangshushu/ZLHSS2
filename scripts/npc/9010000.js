var status = 0;
function start() {
    cm.sendYesNo("嗨，我是#p9010000# 想要和你的朋友在这个服留下美好的照片吗？？");
}

function action(mode, type, selection) {
    if (mode != 1) {
        if (mode == 0)
        cm.sendOk("需要的时候，再来找我吧。");
        cm.dispose();
        return;
    }
    status++;
    if (status == 1) {
		cm.saveLocation("DONGDONGCHIANG");
		cm.warp(970000000, 0);
        cm.dispose();
}
}
