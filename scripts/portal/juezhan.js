function enter(pi) {
    //pi.openNpc(2081005);
    if (pi.haveItem(4033731)) {
        pi.gainItem(4033731, -1);
        pi.warp(273060000);
    } else {
       
        pi.mapMessage(6, "你没有战士冤魂！不能让你进去!")
    }
}




