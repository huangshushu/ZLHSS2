/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
		if (cm.getMap().getAllMonstersThreadsafe().size() <= 0) {//判断地图有没有怪物
        //cm.sendNext("感谢你救了我!");
		cm.forceStartQuest(21733); //开始任务
		cm.forceStartQuest(21762, "2");//给可以完成任务的条件
		cm.warp(104000004);
		cm.dispose();
		} else {
        cm.sendNext("请消灭人偶师在来解救我吧!");
		cm.dispose();
    }
}}