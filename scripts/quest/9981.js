/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 importPackage(net.sf.Start.client);

var status = -1;

function end(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("祝贺你努力升级。作为升级的祝贺，我送你一个枫叶。希望你能在#r#e冒险岛#k#k度过愉快的一天～\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4001126# 29个");
		} else if (status == 1) {
			qm.forceCompleteQuest(9981);
			qm.gainItem(4001126, 29);
			qm.dispose();
		}
	}
}
