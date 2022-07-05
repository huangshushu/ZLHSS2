var status = -1;
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else if (mode === 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendYesNo("请问您是否要领取RC勋章？");
    } else if (status == 1) {
        if (!cm.ReceiveMedal()) {
            cm.sendNext("请检查您的背包是否已满、已经领取过该勋章或是目前不在领取勋章清单内");
        } else {
            cm.sendNext("勋章已经发到您的背包里了，请查收。");
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}
