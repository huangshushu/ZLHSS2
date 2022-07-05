var status = 0;
function start() {
    status = -1;
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    }else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("你想找我做什么？\r\n#e#b#L1#跑商任务#l\t#L2#我拿到宝箱了#l");
    } else if (status == 1) {
        if (selection == 1) {
            cm.dispose();
            cm.openNpc(9010009, "跑商");
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(9000003);
        }
    }
}
