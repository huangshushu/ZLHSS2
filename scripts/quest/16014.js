/*
 *
 *  功能：冒险联盟
 *
 */

var status = -1;
var sel = -1;
var money = 200

function start(mode, type, selection) {
	switch (mode) {
	case 0: //上一步
		status--;
		break;
	case 1: //下一步
		status++;
		break;
	}
	switch (status) {
	case 0:
		if (qm.checkMapleUnion() && !qm.isQuestFinished(16013)) {
			qm.sendOk("你好，#b勇士#k~见到你很高兴~你现在可以开始使用<冒险岛联盟>啦！");
		} else if (qm.isQuestFinished(16013)) {
			qm.askMenu("今天可是个适合去屠龙的好日子！\r\n关于#b冒险岛联盟#k的工作，有什么我可以帮忙的吗？\r\n\r\n\r\n#L0##b<查看我的冒险岛联盟信息。>#l\r\n#L1##b<提升冒险岛联盟级别。>#l\r\n#L2##b<了解有关冒险岛联盟的说明。>#k#l\r\n#L3##b<每周获得联盟币排名>#k#l");
		} else {
			qm.sendOk("你好，#b勇士#k~见到你很高兴~，你现在的能力还不够使用<冒险岛联盟>！");
			qm.dispose();
		}
		break;
	case 1:
		sel = selection;
		switch (selection) {
		case 0:
			qm.openUI(1148);
			qm.dispose();
			break;
		case 1:
			var str = "";
			var nowRank = qm.getMapleUnionRank();
			var nextRank = qm.getNextMapleUnionRank();
			if (nowRank != null && nextRank != null) {
				str += "你想要进行#e冒险岛联盟升级#n吗？\r\n\r\n#e当前级别：#n#b#e<";
				str += nowRank.toString();
				str += ">#n#k\r\n#e下一个级别：#n#b#e<";
				str += nextRank.toString();
				str += ">#n#k\r\n#e升级时可以投入的攻击队队员增加：#n #b#e<";
				str += nowRank.getAttackerCount();
				str += "→";
				str += nextRank.getAttackerCount();
				str += "人>#n#k\r\n\r\n为了升级，需要满足以下条件。\r\n\r\n#e<联盟等级> #r#e";
				str += nextRank.getLevel();
				str += "以上#n#k #n\r\n#e<支付联盟币>#b#e#t4310229# ";
				str += "200";
				str += "个#n#k\r\n\r\n\r\n现在就要对冒险岛联盟进行#e升级#n吗？";
				qm.askYesNo(str);
			} else {
				qm.sendOk("您的冒险岛联盟已经达到最高等级了！无法再进行升级！");
				qm.dispose();
			}
			break;
		case 2:
			qm.dispose();
			qm.openNpc(9010106, "Script_19");
			break;
		default:
			qm.dispose();
		}
		break;
	case 2:
		switch (sel) {
		case 1:
			//	if (selection == 1) {
			var nRank = qm.getNextMapleUnionRank();
			if (qm.getMapleUnionLevel() >= nRank.getLevel()) { //  && qm.getItemQuantity(4310229) >= money
				if (qm.doMapleUnionLevelUp()) { //还需要判断时有足够联盟币
					// 扣除联盟币
					// qm.gainItem(4310229, -money)
					var newRank = qm.getMapleUnionRank();
					qm.sendOk("恭喜你！现在的冒险岛联盟等级提高了，#e当前级别：#n#b#e<" + newRank.toString() + ">#n#k");
				} else {
					qm.sendOk("当前冒险岛联盟已经达到最高等级！");
				}
			} else {
				qm.sendOk("升级失败，请确认是否达到了#n#b<联盟等级>#e" + nRank.getLevel() + "#n#k\r\n或者#b#t4310229##k是否足够#b#e" + money + "个?#n#k");
			}
			//}
			qm.dispose();
			break;
		default:
			qm.dispose();
		}
		break;
	default:
		qm.dispose();
		break;
	}
}

function end(mode, type, selection) {
	switch (mode) {
	case  - 1: //结束对话
		qm.dispose();
		return;
	case 0: //上一步
		status--;
		break;
	case 1: //下一步
		status++;
		break;
	}
	qm.dispose();
}
