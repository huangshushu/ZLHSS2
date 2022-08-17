var status = 0;
var typed = 0;
var maxPlay = 1;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1) status++;
		else status--;
		if (status == 0) {
			//cm.showEffect(true, "Visitor/RankS");
			if (cm.getPlayer().isVip()) {
				maxPlay = 3;
			}
			var text = "#d为了培养出出色的英雄家，我们开辟了外星战场给冒险岛勇士们进行试炼，试炼中共 #r20#k #d波怪物。#k\r\n";
			text += "#e#d评分 #bB#k#n #r(获得 1 个#t5062002#  100 点试炼积分)\r\n";
			text += "#e#d评分 #bA#k#n #r(获得 2 个#t5062002#  300 点试炼积分)\r\n";
			text += "#e#d评分 #bF#k#n #r(获得 3 个#t5062002#  500 点试炼积分)\r\n";
			text += "#e#d评分 #bS#k#n#r (获得 5 个#t5062002#  1000点试炼积分)\r\n";
			text += "#r#e注意事项#k#n：试炼中怪物血量较多，请做好持久战准备。\r\n";
			text += "#e#r试炼要求#k#n：#b建议120级以上，突破上限 1000 万以上。#k\r\n";
			text += "#r#e试炼提示#n#k：如果中途掉线都是可以重新开始不算次数的\r\n";
			text += "如果你今天领取过奖励后，再进入是不能领取奖励的";
			cm.sendYesNo(text);
		} else if (status == 1) {
			if (cm.getLevel() <= 119) {
				cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n\r\n你好像还不具备以下条件。我不能送你们进入。\r\n\r\n\r\n- #e等级需求#n：120级以上");
				cm.dispose();
			}
			else if (cm.getParty() == null) {
				cm.sendOk("#e#r你好像还没有一个队伍,我是不能送你进去的.");
				cm.dispose();
			} else if (!cm.isLeader()) {
				cm.sendOk("#e#r请队长来跟我谈话.");
				cm.dispose();
			} else if (cm.getMap(940021000).getCharactersSize() > 0) { // Not Party Leader
				cm.sendOk("有人在挑战此副本，请稍等一会，或者换其它线尝试一下！..");
				cm.dispose();
			} else if (cm.getBossLog("szsl") >= maxPlay) {
				cm.sendOk("您已经进入过。");
				cm.dispose();
			} else {
				var em = cm.getEventManager("szsl");
				if (em == null) {
					cm.sendOk("出错啦,请联系GM.");
					cm.dispose();
				} else {
					var party = cm.getParty().getMembers(); //获取整个队伍角色信息
					var it = party.iterator();
					var next = true;
					em.startInstance(cm.getParty(), cm.getChar().getMap());
				}
				cm.worldSpouseMessage(0x0D, "『军衔试炼』" + " : " + "玩家 " + cm.getChar().getName() + " 进入了超越空间战场，祝他取得好的成绩");
				cm.dispose();
			}
		}
	}
}