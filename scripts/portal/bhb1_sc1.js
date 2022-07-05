function enter(pi) {
	if(pi.getMap().getAllMonstersThreadsafe().size()==0){
		if(pi.getPlayer().getMapId()==350060240){
			pi.warp(350060240,0);
		}else{
			pi.warp(350060240,0);
			pi.spawnMobOnMap(8240098,1,32,-16,350060240);
		}
	}else{
	    pi.mapMessage(6, "")
	}
}