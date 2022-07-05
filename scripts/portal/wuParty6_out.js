/*  
 *  功能：毒雾森林 组队任务相关
 *  @Author 99
 */

function enter(pi) {
    var eim = pi.getEventInstance();
    var em = pi.getEventManager("PQ_PoisonForest");
	//pi.dropMessage(5,eim.getProperty(String(pi.getMapId())));
    if (eim != null && em != null) {
        var mapStat = eim.getProperty(String(pi.getMapId()));
        if ("clear".equals(mapStat)) {
            pi.warpParty_Instanced(933029000);
        }
    }
}
