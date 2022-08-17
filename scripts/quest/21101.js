/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;
var skills = Array(21001003, 21000000, 21100002, 21100004, 21100005, 21110002);
//polearm booster, combo ability, polearm mastery, final charge, combo smash, combo drain, full swing
function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("#b(再考虑一下好了...)#k");
	    qm.dispose();
	    return;
	} else if (status == 2) {
	    qm.MovieClipIntroUI(true);
	    qm.warp(914090100, 0);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendYesNo("#b(我自己确信是使用过 #p1201001#的英雄吗？ 确定的话就拿出力量抓住 #p1201001#吧 一定会有什么反应。)#k");
    } else if (status == 1) {
	if (qm.getJob() == 2000) {
	    qm.changeJob(2100);
	    //qm.expandInventory(1, 4);
	    //qm.expandInventory(2, 4);
	    //qm.expandInventory(3, 4);
	    //qm.expandInventory(4, 4);
	    qm.gainItem(1142129, 1);
		qm.gainItem(1442077, 1);
		qm.forceCompleteQuest();//完成任务
	    //qm.teachSkill(20009000, 0, -1);
	    //qm.teachSkill(20009000, 1, 0);
		//qm.teachSkill(20001004, 0, -1);
	    //qm.teachSkill(20001004, 1, 0);
		for (var i = 0; i < skills.length; i++) {
			//qm.teachSkill(skills[i], 0);
		}
	    qm.sendNextS("#b(好像想起什么了...)#k", 3);
	}
    } else if (status == 2) {
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
