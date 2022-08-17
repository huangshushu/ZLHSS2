var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            cm.sendOk("你听说了吗？据说和宇宙船内部的外星生命体战斗，可以获得非常好的饰品。\r\n   #b#i1113038:# #t1113038##k\r\n   #b#i1122256:# #t1122256##k\r\n   #b#i1032191:# #t1032191##k\r\n   #b#i1132230:# #t1132230##k\r\n里面的这种头盔，只有偶尔现身的#r#e“稀有的外星访客”#k#n才会掉落。是不是很不错？\r\n   #b#i1003893:# #t1003893##k");
            cm.dispose();
            break;
        case 1: //
            cm.dispose();//这是结束脚本，请按照实际情况使用
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}
