/*  
 *  功能：毒雾森林 组队任务相关
 *  @Author 99 
 */
function enter(pi) {
    var eim = pi.getEventInstance();
    var em = pi.getEventManager("PQ_PoisonForest");
    if (eim != null && em != null) {
        if (java.lang.Math.random() < 0.1) {
            pi.instantMapWarp(11);
            eim.setProperty(String(pi.getMapId()), "clear");
            pi.showEffect("quest/party/clear");
        } else {
            var port = parseInt(java.lang.Math.random() * 3 + 1);
            if (java.lang.Math.random() < 0.3) {
                pi.instantMapWarp(Math.min(port + 8, 10));// 0 4 8
            } else if (java.lang.Math.random() < 0.6) {
                pi.instantMapWarp(port + 4);
            } else {
                pi.instantMapWarp(port);//eim.setProperty(String(mapID), "clear");
            }
        }
    }
}
