function enter(pi) {
    if (!pi.haveItem(4032246)) {
	pi.playerMessage(5, "你没有梦幻主题公园魂魄。");
    } else {
	pi.openNpc(9270047);
    }
}