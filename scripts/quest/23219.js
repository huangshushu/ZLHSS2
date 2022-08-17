/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function end(mode, type, selection) {
	start(mode,type,selection);
}

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("这是为了一个重要的决定.");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendYesNo("你们已经做出了决定？该决定将是最终的，所以决定做什么之前，仔细考虑。你确定你想成为一个斩妖除魔?");
    } else if (status == 1) {
	qm.sendNext("我刚刚塑造了你的身体，使它成为恶魔杀手的完美之选。 如果您希望变得更强大，请使用Stat Window（S）来提高相应的统计数据。 如果您不确定要举起什么，请点击 #b自动#k.");
	if (qm.getJob() == 3111) {
		qm.teachSkill(31120011, qm.getPlayer().getSkillLevel(31120011), 1);
	    qm.changeJob(3112);
		qm.teachSkill(30011159, qm.getPlayer().getSkillLevel(30011159), 1);
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("我也拓展您的库存时隙计数为您的设备等存货。使用这些插槽明智和填充它们与抗性所需物品随身携带.");
    } else if (status == 3) {
	qm.sendNextPrev("现在...我希望你去那里，向世界展示了电阻如何运作.");
	qm.safeDispose();
    }
}