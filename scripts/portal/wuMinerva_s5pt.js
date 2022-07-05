/* 
 *  功能：女神之塔
 *  @Author 99
 */

function enter(pi) {
    var eim = pi.getEventInstance();
    var em = pi.getEventManager("PQ_Minerva");
    if (eim != null && em != null && eim.getProperty("stage6_" + (pi.getPortal().getName().substring(2, 5)) + "").equals("1")) {
        pi.instantMapWarp(parseInt(pi.getPortal().getName().substring(3, 4)) + 5);
        pi.setObjectState("an" + pi.getPortal().getName().substring(3, 5));
    } else {
        pi.instantMapWarp(23);
    }
}
