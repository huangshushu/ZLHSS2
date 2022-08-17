function action(mode, type, selection) {
    if (cm.getPlayer().hasEquipped(1032033)) {
        cm.dispose();
    } else {
        cm.getPlayer().updateSingleStat(Packages.client.MapleStat.HP, 0);//自杀
    }
    cm.dispose();
}//
