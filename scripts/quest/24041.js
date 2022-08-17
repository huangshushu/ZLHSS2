/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		qm.sendPlayerToNpc("冷静！我只是想。好吧，让我们跑下来是怎么回事.");
	} else if (status == 1) {
		qm.sendPlayerToNpc("1.精灵的其余部分仍然冻结，因此黑魔导士诅咒还是很到位.");
	} else if (status == 2) {
		qm.sendPlayerToNpc("2.我是谁的醒了唯一的一个。我不知道为什么，但我得到了黑魔导士密封减弱的感觉.");
	} else if (status == 3) {
		qm.sendPlayerToNpc("3. 我要到外面检查枫叶世界，但我只有10级。我不能相信......究竟有多强大是祸？我仍然冻结!");
	} else if (status == 4) {
		qm.sendPlayerToNpc("右，拿着它在一起。我需要确保有没有什么毛病我.");
	} else {
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.forceCompleteQuest(29952);
	qm.dispose();
}
