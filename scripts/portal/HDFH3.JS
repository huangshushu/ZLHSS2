function enter(pi){
if(pi.allMembersHere() && pi.haveItem(4033034,1)){
	pi.warpParty(921120100 ,0);//下一关
	pi.removeAll(4033034);//冰冷的水
	 }else{
	pi.playerMessage(5,"你需要集结队友并带来“冰冷的水”；否则无法通过这里。");
   }
 }