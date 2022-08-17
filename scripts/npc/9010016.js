var status = -1;
var job = 0;
var type = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0 && status == 0) {
		status--;
	} else if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}

	if (status == 0) {
		cm.sendYesNo("到达等级30，在我这里可以帮你一键学习 群宠#s8#跟骑兽#s1004# ");
	} else if (status == 1) {
		if (cm.getPlayer().getLevel() < 1) {
			cm.sendNext("你的等级没有达到1级");
			cm.dispose();
			return;
		} else if (cm.getPlayer().getOneTimeLog("骑群宠技能") >= 1) { //判断永久记录
			cm.sendNext("你已经学过了！");
			cm.dispose();

		} else {
			if(cm.判断职业() >= 2000 && cm.判断职业() < 2200){
				cm.teachSkill(20001007, 3); //锻造
				cm.teachSkill(20000024, 1); //群宠
				cm.teachSkill(20001004, 1); //骑兽
			} else if(cm.判断职业() >= 1000 && cm.判断职业() < 2000){
				cm.teachSkill(10001007, 3); //锻造
				cm.teachSkill(10000018, 1); //群宠
				cm.teachSkill(10001004, 1); //骑兽
			} else {
				cm.teachSkill(1007, 3); //锻造
				cm.teachSkill(8, 1); //群宠
				cm.teachSkill(1004, 1); //骑兽
			}
			//cm.getPlayer().setOneTimeLog("骑群宠技能"); //给永久记录
			cm.sendNext("技能已经学习成功");
			cm.dispose();

		}
	}
}