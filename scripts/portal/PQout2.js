function enter(pi) {
	//保存语句是：pi.saveLocation("MULUNG_TC");
	var returnMap = pi.getSavedLocation("MULUNG_TC");
	if (returnMap < 0) {returnMap = 100000000;}
	pi.warp(returnMap);
	pi.playerMessage(-1,"[系统消息]：返回到之前的地方");
	pi.playerMessage(5,"[系统消息]：返回到之前的地方");
	pi.showInstruction("#e[当前位置]：#n#m"+pi.getMapId()+"#",200,6);
	//pi.clearSavedLocation("MULUNG_TC");
}