function enter(pi) {
    var map = 0;
    var warp = 0;
    switch (pi.getMapId()) {
        case 100000201:
            map = 450000100;
            break;
        case 400000001:
            map = 450000110;
            break;
        case 105300000:
            map = 450000120;
            break;
        case 105300301:
            if (pi.isQuestActive(1464)) {
                map = 450000120;
            } else {
                return;
            }
            break;
    }
    pi.warp(map);
}
