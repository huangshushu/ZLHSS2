function enter(pi) {
    if (pi.isQuestActive(2600)) {
        pi.warp(103050910,0);
    } else {
        pi.showQuestMsg("Talk to Ryden first, to start your journey.");
    }
}
