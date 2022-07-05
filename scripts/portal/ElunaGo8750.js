function enter(pi){
   if(pi.getPlayer().getMapId() == 867118700){
	pi.warp(867118750,4);
	pi.showInstruction("#e[当前位置]：#n#m"+pi.getMapId()+"#",180,7);
   }else if(pi.getPlayer().getMapId() == 867118800){
	pi.warp(867118750,5);
   }

}