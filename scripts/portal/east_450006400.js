function enter(pi){
   if(pi.getPlayer().getMapId() == 450006400){
	pi.warp(450006410,1);
	pi.showInstruction("#e[当前位置]：#n#m"+pi.getMapId()+"#",185,6);
	pi.playerMessage(-1,"[当前位置]：那天的特鲁埃博2");
   }

}