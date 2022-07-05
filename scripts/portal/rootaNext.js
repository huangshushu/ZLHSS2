function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warpParty(pi.getMapId() + 10,0); //next
    } else {
		pi.playerMessage(5, "怪物还没有清理完毕.");
    }
	/*
     if(pi.getPlayer().getMapId() == 105200100){
        pi.warp(105200110, 1); //半半
     }else if(pi.getPlayer().getMapId() == 105200200){
        pi.warp(105200210, 1); //皮埃尔（小丑）
     }else if(pi.getPlayer().getMapId() == 105200300){
        pi.warp(105200310, 1); //血腥女王
     }else if(pi.getPlayer().getMapId() == 105200400){
        pi.warp(105200410, 1); //贝伦
     }else if(pi.getPlayer().getMapId() == 105200500){
        pi.warp(105200510, 1); //半半（进阶）
     }else if(pi.getPlayer().getMapId() == 105200600){
        pi.warp(105200610, 1); //皮埃尔（小丑）（进阶）
     }else if(pi.getPlayer().getMapId() == 105200700){
        pi.warp(105200710, 1); //血腥女王（进阶）
     }else if(pi.getPlayer().getMapId() == 105200800){
        pi.warp(105200810, 1); //贝伦（进阶）
     }*/
}