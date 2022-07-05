/*  
 *  功能：毒雾森林 组队任务相关
 *  @Author 99 
 */

function enter(pi) {
    var eim = pi.getEventInstance();
    var em = pi.getEventManager("PQ_PoisonForest");
    if (eim != null && em != null) {
        var mapStat = eim.getProperty(String(pi.getMapId()));
        switch (pi.getMapId()) {
            case 933021000:
                pi.warpParty_Instanced(933022000);
                break;
            case 933022000:
                pi.warpParty_Instanced(933023000);
                break;
            case 933023000:
                if ("clear".equals(mapStat)) {//pi.getEventMobSize() <= 0 && 
                    pi.warpParty_Instanced(933024000);
                } else {
                    pi.topMessage("请消灭所有苔藓木妖，才能进入下一阶段！");
                }
                break;
            case 933024000:
                if ("clear".equals(mapStat)) {
                    pi.warpParty_Instanced(933025000);
                } else {
                    pi.topMessage("请使用稀释的毒素清除荆棘草！");
                }
                break;
            default:

                break;
        }
    }
}
