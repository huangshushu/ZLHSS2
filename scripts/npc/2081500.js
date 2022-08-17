/*  NPC : 海伦
	盗贼 4转 任务脚本
	地图代码 (240010501)
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	if (!(cm.getJob() == 511 || cm.getJob() == 521)) {
	    cm.sendOk("为什么你要见我?还有你想要问我关于什么事情?");
	    cm.dispose();
	    return;
	} else if (cm.getPlayer().getLevel() < 120) {
	    cm.sendOk("你等级尚未到达120级.");
	    cm.dispose();
	    return;
	} else {
		if (cm.getJob() == 511){
		    cm.sendSimple("恭喜你有资格4转.请问你想4转吗?\r\n#b#L0#我想成为冲锋队长#l");
		} else if (cm.getJob() == 521){
		    cm.sendSimple("恭喜你有资格4转.请问你想4转吗?\r\n#b#L0#我想成为船长#l");
	    } else {
		cm.sendOk("好吧,假如你想要4转,请麻烦再来找我");
	    cm.dispose();
		return;
	    }
	}
    } else if (status == 1) {
	if (selection == 1) {
		cm.sendOk("好吧,假如你想要4转,请麻烦再来找我");
	    cm.dispose();
	    return;
	} else {
	    if (cm.canHold(2280003)) {
		cm.gainItem(2280003, 1);

		if (cm.getJob() == 511) {
		    cm.changeJob(512);
		    cm.teachSkill(5121007,0,10);
		    cm.teachSkill(5121001,0,10);
		    cm.teachSkill(5121002,0,10);
		    cm.teachSkill(5121009,0,10);
			//cm.gainItem(4031348, -1);
		    cm.sendNext("恭喜你转职为 #b冲锋队长#k.");
			cm.worldMessage(6,"恭喜玩家：["+cm.getName()+"]完成最终转职成为冲锋队长！！ 恭喜玩家：["+cm.getName()+"]完成最终转职成为冲锋队长！！");
		} else if (cm.getJob() == 521) {
		    cm.changeJob(522);
		    cm.teachSkill(5221004,0,10);
		    cm.teachSkill(5220001,0,10);
		    cm.teachSkill(5220002,0,10);
		    cm.teachSkill(5220011,0,10);
			//cm.gainItem(4031348, -1);
		    cm.sendNext("恭喜你转职为 #b船长#k.");
			cm.worldMessage(6,"恭喜玩家：["+cm.getName()+"]完成最终转职成为船长！！ 恭喜玩家：["+cm.getName()+"]完成最终转职成为船长！！");
		}
	    } else {
		cm.sendOk("你没有多的栏位,请清空再来尝试一次!");
		cm.safeDispose();
		return;
	    }
	}
	
    } else if (status == 2) {
	if (cm.getJob() == 512) {
	    cm.sendNext("不要忘记了这一切都取决于你强大了多少.");
	} else {
	    cm.sendNext("不要忘记了这一切都取决于你强大了多少.");
	}
    } else if (status == 3) {
	cm.sendNextPrev("我以你为荣.");
    } else if (status == 4) {
	cm.dispose();
    }
}