function enter(pi){
   if(pi.getPlayer().getMapId() == 450006040){
	pi.warp(450006130,3);
	pi.showInstruction("#e[当前位置]：#n#m"+pi.getMapId()+"#",185,6);
	pi.playerMessage(-1,"[当前位置]：特鲁埃博广场");
	pi.playerMessage(6,"[系统提示]：欢迎来到莫拉斯!!");
   }

}