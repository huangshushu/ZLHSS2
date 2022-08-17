function enter(pi) {
    //pi.openNpc(2081005);
    if (pi.haveItem(5150038)) {
        pi.gainItem(5150038, -1);
        pi.warp(910000019);
    } else {
       
        pi.mapMessage(6, "你没有超级明星美发卡！不能让你进去!")
    }
}




