function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (status == 1 && mode == 0) {
            cm.sendNext("？？？？");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#e<Boss - 麦格纳斯>#n\r\n\r\n#b#h0# \n\#k你想进入哪里?\r\n#b#L0#暴君模拟战斗[梦幻]#l#k\r\n#b#L1#赫里希安最上层入口#l#k");
        } else if (status == 1) {
            if(selection ==0){
                cm.warp(401060399, 0);
            }else{
                cm.warp(401060000, 0);
            }
            cm.dispose();
        }
    }
}
