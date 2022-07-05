function enter(pi){
if(pi.getMap().getAllMonstersThreadsafe().size() <= 0){
	pi.warp(921120005 ,2);
	pi.removeAll(4009028);//瓶子
	pi.removeAll(4033034);//冰冷的水
	 }else{
	pi.playerMessage(1,"敌人太强大，走不开。");
   }
 }