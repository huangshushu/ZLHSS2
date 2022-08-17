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
	if (!(cm.getJob() == 411 || cm.getJob() == 421 || cm.getJob() == 433)) {
	    cm.sendOk("为什么你要见我?还有你想要问我关于什么事情?");
	    cm.dispose();
	} else if (cm.getPlayer().getLevel() < 120) {
	    cm.sendOk("你等级尚未达到120级.");
	    cm.dispose();
	    return;
	} else {
		if (cm.getJob() == 411){
		    cm.sendSimple("恭喜你有资格4转.请问你想4转吗?\r\n#b#L0#我想成为隐士#l");
		} else if (cm.getJob() == 421){
		    cm.sendSimple("恭喜你有资格4转.请问你想4转吗?\r\n#b#L0#我想成为侠盗#l");
	    } else {
		cm.sendOk("好吧,假如你想要4转.请麻烦再来找我");
		cm.safeDispose();
		return;
	    }
	}
    } else if (status == 1) {
	if (selection == 1) {
		cm.sendOk("好吧,假如你想要4转.请麻烦再来找我");
	    cm.dispose();
	    return;
	} else {
	    if (cm.canHold(2280003)) {
		cm.gainItem(2280003, 1);

		if (cm.getJob() == 411) {
		    cm.changeJob(412);
		    cm.teachSkill(4120002,0,10);
		    cm.teachSkill(4121006,0,10);
		    cm.teachSkill(4120005,0,10);
			//cm.gainItem(4031348, -1);
		    cm.sendNext("恭喜你转职为 #b隐士#k.");
			cm.worldMessage(6,"恭喜玩家：["+cm.getName()+"]完成最终转职成为隐士！！ 恭喜玩家：["+cm.getName()+"]完成最终转职成为隐士！！");
		} else if (cm.getJob() == 421) {
		    cm.changeJob(422);
		    cm.teachSkill(4220002,0,10);
		    cm.teachSkill(4221007,0,10);
		    cm.teachSkill(4220005,0,10);
			//cm.gainItem(4031348, -1);
		    cm.sendNext("恭喜你转职为 #b侠盗#k.");
			cm.worldMessage(6,"恭喜玩家：["+cm.getName()+"]完成最终转职成为侠盗！！ 恭喜玩家：["+cm.getName()+"]完成最终转职成为侠盗！！");
	    } else {
		cm.sendOk("你没有空的栏位,请清空再来尝试一次!");
		cm.safeDispose();
		return;
	    }
	}
	}
    } else if (status == 2) {
	cm.sendNextPrev("不要忘记了这一切都取决于你强大了多少.");
    } else if (status == 3) {
	cm.dispose();
    }
}