/*
 * 腔绢柯扼牢 家胶 胶农赋飘 涝聪促.
 * 
 * 器呕困摹 : 
 * 器呕汲疙 : 
 * 
 * 力累 : 林农喉发
 * 
 */
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.packet.creators);

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    if (eim == null) {
        pi.warp(262031200);
        return true;
    }
    var startmap = Integer.parseInt(eim.getProperty("Global_StartMap"));
    var curstage = Integer.parseInt(eim.getProperty("CurrentStage"));
    var curmap = (startmap + ((curstage - 1) * 100));
    if (eim.getProperty(curmap+"Prepared") == null) {
        pi.prepareAswanMob(curmap, eim);
        eim.setProperty(curmap+"Prepared", "1");
    }
    if(curmap == pi.getPlayer().getMapId()) {
        pi.getPlayer().send(UIPacket.showInfo("带傈 郴狼 阁胶磐甫 葛滴 棱酒具 促澜 胶抛捞瘤肺 捞悼且 荐 乐嚼聪促."));
        pi.getPlayer().message(5, "阁胶磐甫 葛滴 棱栏脚 饶 促澜 器呕肺 捞悼秦 林技夸.");
        return false;
    } else {
        pi.warp(curmap);
        return true;
    }
}