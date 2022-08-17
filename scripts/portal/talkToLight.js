/* RED 1st impact
    Explorer tut
    Made by Daenerys
*/
function enter(pi) {
	if(pi.isAllReactorState(1008010, 5) == true){
		pi.openNpc(10310);
	}else{
		pi.topMsg("不破坏掉锁链的话，无法离开。");
	}
}
