/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendOk("我知道这不是一个艰难的任务，所以如果你准备好，回来我.");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("哦，我差点忘了！ 我在想什么？ 我需要你交这个 #b样品 杀手孢菇#k 至 #b魔法部部长#k 并报告结果.");
	if (status == 1){
		qm.forceStartQuest();
		qm.gainItem(4032389, 1);
		qm.sendOk("#b魔法部部长#k 告诉我一次 #b杀手孢菇#k 是完整的，他会想要一个 样品 它也是如此。 我给你样品; 现在去请把它交给我们 #b魔法部部长.#k");
		qm.dispose();
	}
}

function end(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendOk("是的#b杀手孢菇#k 终于完成?");
	if (status == 1){
		qm.gainExp(4200);
		qm.gainItem(4032389, -1);
		qm.sendOk("好吧，所以这是 #b杀手孢菇.#k 谢谢，谢谢，请告诉 #b疤痕#k 一样.");
		qm.forceCompleteQuest();
	}
}
	