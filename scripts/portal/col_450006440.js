function enter(pi){
   if(pi.getPlayer().getMapId() == 450006440){
	pi.warp(pi.getMapId(),1);
	//pi.showInstruction("#e[当前位置]：#n#m"+pi.getMapId()+"#",185,6);
	//pi.playerMessage(-1,"[当前位置]：那天的特鲁埃博2");
	pi.playerMessage(-1,"[系统提示]：多小心一些");
	pi.playerMessage(5,"[系统提示]：多小心一些");
   }

}