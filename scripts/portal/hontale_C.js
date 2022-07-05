/*
 * 腔绢柯扼牢 家胶 胶农赋飘 涝聪促.
 * 
 * 器呕困摹 : 急琶狼 悼奔
 * 器呕汲疙 : 悼奔 涝厘
 * 
 * 力累 : 林农喉发
 * 
 */

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    if (eim.getProperty("choiceCave") == null) {
        pi.getPlayer().message(5, "酒流 悼奔捞 急琶登瘤 臼疽嚼聪促.");
        return false;
    }
    if (eim.getProperty("choiceCave").equals("0")) {
        pi.allPartyWarp(240050300, false);
    } else {
        pi.allPartyWarp(240050310, false);
    }
    return true;
}