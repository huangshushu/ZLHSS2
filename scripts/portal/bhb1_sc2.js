function enter(pi) {
	
	if(pi.getMap().getAllMonstersThreadsafe().size()==0){
		if(pi.getPlayer().getMapId()==350060260){
			pi.warp(350060260,0);
		}else{
			pi.warp(350060260,0);
			pi.spawnMobOnMap(8240099,1,3,-16,350060260);
		}
	}else{
	    pi.mapMessage(6, "")
	}
}