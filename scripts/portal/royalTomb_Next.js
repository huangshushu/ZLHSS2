function enter(pi) {
    if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonster().size() == 0 && pi.isLeader() && pi.getPlayer().getMapId() != 745010500) {
        pi.warpParty(pi.getPlayer().getMapId() + 100);
        pi.playPortalSE();
    } else if(pi.getPlayer().getParty() != null && pi.getMap().getAllMonster().size() == 0 && pi.isLeader() && pi.getPlayer().getMapId() == 745010500){
	pi.openNpc(9330231,1);
        pi.playPortalSE();
    } else {
        pi.playerMessage(5, "请确认当前地图是否还存在怪物！");
  }
}
