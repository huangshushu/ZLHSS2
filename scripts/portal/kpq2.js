
/*
Kerning PQ: 2nd stage to 3rd stage portal
*/

function enter(pi) {
    var eim = pi.getEventManager("KerningPQ").getInstance("KerningPQ");

    // only let people through if the eim is ready
    if (eim.getProperty("2stageclear") == null) { // do nothing; send message to player
        pi.playerMessage(5, "您还没有通过任务。");
    } else {
        pi.warp(103000802, "st00");
		pi.removeAll(4001008);
    }
}