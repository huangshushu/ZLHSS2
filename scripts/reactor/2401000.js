function act() {
    rm.changeMusic("Bgm14/HonTale");
    rm.spawnMonster(8810026, 71, 260);
	rm.worldMessage(6,"[BOSS公告] 玩家：" + rm.getPlayer().getName() + "召唤出了暗黑龙王，战斗正式开始。");
    //rm.scheduleWarp(43200, 240000000);
    if (!rm.getPlayer().isGM()) {
        rm.getMap().startSpeedRun();
    }
}