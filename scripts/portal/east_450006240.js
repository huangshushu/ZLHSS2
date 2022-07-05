function enter(pi){
   if(pi.getPlayer().getMapId() == 450006240){
	pi.warp(450006300,2);
	pi.showInstruction("#e[当前位置]：#n#m"+pi.getMapId()+"#",160,6);
	pi.playerMessage(-1,"[当前位置]：封锁区");
	pi.playerMessage(6,"[系统提示]：接下来请小心行事!!");
   }

}