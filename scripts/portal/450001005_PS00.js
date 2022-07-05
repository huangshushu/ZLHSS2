/*  
 *  忘却之湖-湖畔
 *  @Author 99
 */

function enter(pi) {
    if (pi.isQuestFinished(34107)) {
		pi.openNpc(3003123,"FerryBoat");
        //pi.warp(450001105, 1);
    }else {
		pi.dropMessage(5,"未完成任务，不允许移动！");
	}
}
