function enter(pi) {
    var hayato = true;
    var warp = false;
    var target = 0;
    var p = 0;
    if (pi.getJob() != 4100) {
        hayato = false;
    }
    switch (pi.getMapId()) {
        case 807040000:
            if (hayato) {
                warp = pi.isQuestActive(57104)|| pi.isQuestFinished(57104);
            } else {
                warp = pi.isQuestActive(57402);
            }
            target = 807040100;
            break;
        case 807040100:
            if (hayato) {
                warp = pi.isQuestFinished(57104);
            } else {
                warp = pi.isQuestFinished(57402);
            }
            target = 807000000;
            p = 2;
            break;
    }
    if (!warp) {
        if (hayato) {
            pi.playerMessage(5, "山中幸盛對話吧。");
        } else {
            pi.playerMessage(5, "直江兼續對話吧。");
        }
    } else {
        pi.warp(target, p);
    }
}
