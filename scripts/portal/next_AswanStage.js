function enter(pi) {
    if(pi.getPlayer().getParty() != null && pi.getMap().getAllMonster().size() == 0 && pi.isLeader()){
        pi.warpParty(pi.getPlayer().getMapId() + 100);
        pi.playPortalSE();
    } else {
        pi.playerMessage(5, "请确认当前地图是否还存在怪物！");
    }
}
