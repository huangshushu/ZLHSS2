function enter(pi){
if(pi.getMap().getAllMonstersThreadsafe().size() <= 0){
	pi.warp(271040100);
	pi.playerMessage(-1,"回到庭院");
	}else{
	pi.playerMessage(1,"消灭敌人才可以离开.");
  }
}