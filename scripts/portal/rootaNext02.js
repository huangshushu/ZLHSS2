

function enter(pi) {
    //pi.openNpc(2081005);
    if (pi.haveItem(9999999,200)) {
        pi.gainItem(4000991, -200);
        pi.warp(105200310);
    } else {
       
        pi.mapMessage(6, "不能让你进去,去问问伯爵夫人吧!")
    }
}

