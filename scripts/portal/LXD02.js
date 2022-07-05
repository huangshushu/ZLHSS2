function enter(pi) {
	
	if(pi.getMap().getAllMonstersThreadsafe().size()==0){
		if(pi.getPlayer().getMapId()==882100004){
			pi.warp(882100004,0);
		}else{
			pi.warp(882100004,0);
			pi.spawnMobOnMap(8643013,1,49,435,882100004);
		}
	}else{
	    pi.mapMessage(6, "")
	}
}