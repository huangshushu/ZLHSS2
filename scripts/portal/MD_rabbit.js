
var baseid = 221023400;
var dungeonid = 221023401;
var dungeons = 30;

function enter(pi) {
	pi.openNpc(2003,4);
    /*if (pi.getMapId() == baseid) {
        for(var i = 0; i < dungeons; i++) {
            if (pi.getPlayerCount(dungeonid + i) == 0) {
                pi.warp(dungeonid + i, 0);
                return true;
            }
        }
        pi.playerMessage(5, "所有的地下城都在使用中，請稍後再嘗試。");
    } else {
        pi.warp(baseid, "MD00");
    }
    return true;*/
}
