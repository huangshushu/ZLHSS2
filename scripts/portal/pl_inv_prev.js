/**************************************************
 *  function:   阿特利埃传送门(返回)
 *  Smade by    枫之谷Shana QQ:1508682946
***************************************************/


function enter(pi){
   if(pi.getPlayer().getMapId() == 867116700){
     pi.warp(867116650,2);
     pi.playerMessage(-1,"[当前位置]：藏身处入口");
   }else if(pi.getPlayer().getMapId() == 867116750){
     pi.warp(867116700,2);
   }else if(pi.getPlayer().getMapId() == 867116800){
     pi.warp(867116750,1);
   }else if(pi.getPlayer().getMapId() == 867116850){
     pi.warp(867116800,2);
   }else if(pi.getPlayer().getMapId() == 867116900){
     pi.warp(867116850,2);
   }else if(pi.getPlayer().getMapId() == 867116950){
     pi.warp(867116900,2);
   }else if(pi.getPlayer().getMapId() == 867117000){
     pi.warp(867116950,1);
   }else if(pi.getPlayer().getMapId() == 867117050){
     pi.warp(867117000,2);
   }
}