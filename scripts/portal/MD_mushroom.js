

var baseid = 105050100;
var dungeonid = 105050101;
var dungeons = 30;

function enter(pi) {
	pi.openNpc(2003,3);
    /*if (pi.getMapId() == baseid) {
        for (var i = 0; i < dungeons; i++)
            if (pi.getPlayerCount(dungeonid + i) == 0) {
                pi.warp(dungeonid + i, 0);
                return true;
            }
        pi.playerMessage(5, "目前所有迷你地下城都有人，請稍後再嘗試。");
    } else
        pi.warp(baseid, "MD00");
    return true;*/
}
