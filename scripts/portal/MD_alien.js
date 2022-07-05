var baseid = 221040000;
var dungeonid = 221040001;

function enter(pi) {
try {
    if (pi.getMapId() == baseid) {
		if (pi.getParty() != null) {
			if (pi.isLeader()) {
				if (pi.getPlayerCount(dungeonid) == 0) {
					pi.warpParty(dungeonid);
					return;
				}
			} else {
				pi.playerMessage(5, "You are not the leader of the party.");
			}
		} else {
			if (pi.getPlayerCount(dungeonid) == 0) {
				pi.warp(dungeonid);
				return;
			}
		}
		pi.playerMessage(5, "All of the Mini-Dungeons are in use right now, please try again later.");
    } else {
		pi.playPortalSE();
		pi.warp(baseid, "MD00");
    }
} catch (e) {
    pi.playerMessage("Error: " + e);
}
}