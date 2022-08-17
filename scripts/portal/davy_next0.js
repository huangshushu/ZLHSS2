function enter(pi) {
    if (pi.haveItem(4001117,6) && pi.getMap().getAllMonstersThreadsafe().size() == 0) {//pi.getMap().getAllMonstersThreadsafe().size() == 0
	pi.gainItem(4001117,-6);
	pi.warpParty(925100100,0); //next
    } else {
	pi.playerMessage(5, "需要给我 6 个鼓楼钥匙，并且青光所有怪物，才能开启下一关。");
    }
}