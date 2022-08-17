/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

var status = -1;

function start(mode, type, selection) {
	end(mode,type,selection); //idk lol
}

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("我猜你还没准备好。");
	    qm.dispose();
	    return;
	} else if (status >= 2) {
	    status--;
	} else {
	    qm.dispose();
	    return;
	}
    } else {
	status++;
    }
    if (status == 0) {
		qm.sendYesNo("你存在皇家骑士团，那么你想成为一名骑士的其中一员？？");
    } else if (status == 1) {
	    qm.forceCompleteQuest();
	    if (qm.getJob() == 1111) {
		//qm.changeJob(1112);
		qm.teachSkill(10001005,1,1,-1);//英雄回声
	    } else if (qm.getJob() == 1211) {
		//qm.changeJob(1212);
		qm.teachSkill(10001005,1,1,-1);//英雄回声
	    } else if (qm.getJob() == 1311) {
		//qm.changeJob(1312);
		qm.teachSkill(10001005,1,1,-1);//英雄回声
	    } else if (qm.getJob() == 1411) {
		//qm.changeJob(1412);
		qm.teachSkill(10001005,1,1,-1);//英雄回声
	    } else if (qm.getJob() == 1511) {
		//qm.changeJob(1512);
		qm.teachSkill(10001005,1,1,-1);//英雄回声
	    }
	    qm.sendNext("你现在皇家骑士团的骑士的其中一员,获得了#r英雄回声#k技能。");
		qm.dispose();
    } else if (status == 3) {
	qm.sendPrev("现在回去找女皇吧。");
	qm.dispose();
    }
}