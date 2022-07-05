/**************************************************
 *  function:   阿特利埃传送门(进入)
 *  Smade by    枫之谷Shana QQ:1508682946
***************************************************/


function enter(pi){
   if(pi.getPlayer().getMapId() == 867116650){
     pi.warp(867116700,1);
     pi.playerMessage(-1,"[当前位置]：藏身处附近");
   }else if (pi.getPlayer().getMapId() == 867116700){
     pi.warp(867116750,2);
   }else if (pi.getPlayer().getMapId() == 867116750){
     pi.warp(867116800,1);
   }else if (pi.getPlayer().getMapId() == 867116800){
     pi.warp(867116850,1);
   }else if (pi.getPlayer().getMapId() == 867116850){
     pi.warp(867116900,1);
   }else if (pi.getPlayer().getMapId() == 867116900){
     pi.warp(867116950,3);
   }else if (pi.getPlayer().getMapId() == 867116950){
     pi.warp(867117000,1);
   }else if (pi.getPlayer().getMapId() == 867117000){
     pi.warp(867117050,3);
   }else if (pi.getPlayer().getMapId() == 867117050){
     pi.warp(867117100,3);
   }
}