/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendOk("去#b首席Tatamo#k 在Leafre 并带回 一个古老的龙永攀.");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
    	status++;
	if (status == 0) {
		if (qm.haveItem(4032969,1)) {
			qm.sendNext("大！ 请等到我把这些成分混合在一起...");
		} else {
			qm.sendOk("请去#b首席Tatamo#k Leafre的并带回 一个古老的龙永攀.");
			qm.forceStartQuest();
			qm.dispose();
		}
	} else {
		qm.teachSkill(80001089, 1, 0); // Maker
		qm.removeAll(4032969);
		qm.sendOk("我们去！ 你已经学会了翱翔的技能，并将能够飞翔，使用大量的MP.");
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
	