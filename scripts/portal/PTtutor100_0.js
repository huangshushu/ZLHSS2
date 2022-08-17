function enter(pi) {
    if (pi.isQuestActive(25000) || pi.isQuestFinished(25000)) {  
        pi.warp(915000200, "out00");
    } else {
        pi.getPlayer().dropMessage(5, "Your most excellent manservant, Gaston, will see to the final preparations. Talk to him.");
    }
}
