function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
        pi.warpParty(925100500, 0);
        if (pi.getMap(925100500).getAllMonstersThreadsafe().size() == 0) {
            pi.spawnMob_map(9300119, 925100500, 450, 238);
        }
    } else {
        pi.playerMessage(5, "清光这里的怪物才可以通关哦");
    }
}