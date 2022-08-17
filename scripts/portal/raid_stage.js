function enter(pi) {
    if (!pi.dojoAgent_NextMap(false, false)) {
	pi.playerMessage("BOSS还未清理，我是不会让你通过的");
    }
	pi.setBossRankCount("强化之地");
	pi.dispose(); 
}