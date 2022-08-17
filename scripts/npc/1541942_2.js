/*
SnailMS脚本生成器
*/
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//在这里编写脚本第一步要做的事
		var text = "你确定要选择接受我的祝福吗？\r\n#r注意:一旦接受，便无法再重新选择，若将来想强行切换，只能借助强大的道具才可实现。\r\n";
		cm.sendYesNo(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		cm.getPlayer().setSkillSkinAll(2);
		cm.getPlayer().setOneTimeLog("出生技能皮肤");
		cm.sendOk("感谢你的选择，请接受我的祝福吧！请务必努力修炼，强大自身，待到审判之日到来，我们终将战胜邪恶，封印黑魔法师！\r\n\r\n#bps：伴随着一道神秘光芒，艾尔达流入了你的身体，你感到体内的力量在不断翻涌，随后逐渐沉寂了下来。\r\n")
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

