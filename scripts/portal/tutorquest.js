function enter(pi) {
    var mapid = pi.getMapId();
    var questid;
    var state = 2;

    switch (mapid) {
        case 130030001:
            questid = 20010;
            state = 1
            break;
        case 130030002:
            questid = 20011;
            break;
        case 130030003:
            questid = 20012;
            break;
        case 130030004:
            questid = 20013;
            break;
        default:
            return;
    }
    if (pi.getQuestStatus(questid) == state) {
        pi.playPortalSE();
        pi.warp(pi.getMapId() + 1, "sp");
    } else {
        pi.playerMessage(5, "你可能不会离开。");
    }
}