function enter(pi) {
	
	if(pi.getMap().getAllMonstersThreadsafe().size()==0){
		if(pi.getPlayer().getMapId()==882100003){
			pi.warp(882100003,0);
		}else{
			pi.warp(882100003,0);
			pi.spawnMobOnMap(8880141,1,394,275,882100003);
		}
	}else{
	    pi.mapMessage(6, "")
	}
}