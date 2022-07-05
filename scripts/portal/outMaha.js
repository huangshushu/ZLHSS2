function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() != 0) {
        pi.playerMessage(5, "请把愤怒的玛哈给杀死");
        return false;
    } else {
        pi.warp(140000000, 0);
        return true;
    }
}