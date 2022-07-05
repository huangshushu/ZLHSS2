function enter(pi){
	if(pi.getMap().getAllMonstersThreadsafe().size() <= 0){
        pi.warp(921120200, 1);
	}else{
	 pi.playerMessage(5,"怪物太多了，无法前进。");
	 pi.playerMessage(-1,"怪物太多了，无法前进。");
     }
 }