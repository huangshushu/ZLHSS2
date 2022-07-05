var status = 0;
var itemId = new Array(2047000, 2047002, 2047100, 2047102, 2047200, 2047201, 2047202, 2047203);
var set = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        cm.dispose();
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("大王将你飞起来了？");
        cm.dispose();
    } else if (status == 1) {
        cm.sendSimple("大王将你飞起来了？");
        cm.dispose();
    } else if (status == 2) {
        cm.sendSimple("大王将你飞起来了？");
        cm.dispose();
    }
}