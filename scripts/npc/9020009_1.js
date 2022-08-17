/**
 *
 * @script : 军衔系统
 * @autho  : memory
 *
 **/

var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var status = -1;

var medals = Array(
	1142310, // - 十字旅团[初等兵], // - (无描述) 前往766查看装备数据
	1142311, // - 十字旅团[中等兵], // - (无描述) 前往766查看装备数据
	1142312, // - 十字旅团[高等兵], // - (无描述) 前往766查看装备数据
	1142313, // - 十字旅团[军士长], // - (无描述) 前往766查看装备数据
	1142314, // - 十字旅团[准尉], // - (无描述) 前往766查看装备数据
	1142315, // - 十字旅团[少尉], // - (无描述) 前往766查看装备数据
	1142316, // - 十字旅团[中尉], // - (无描述) 前往766查看装备数据
	1142317, // - 十字旅团[上尉], // - (无描述) 前往766查看装备数据
	1142318, // - 十字旅团[少校], // - (无描述) 前往766查看装备数据
	1142319, // - 十字旅团[中校], // - (无描述) 前往766查看装备数据
	1142320 // - 十字旅团[上校], // - (无描述) 前往766查看装备数据
);

var attributes = Array(3, 4, 5, 6, 10, 12, 15, 18, 21, 25, 50);
var needFame = Array(1, 10, 20, 50, 80, 100, 120, 200, 300, 999);
var needPoints = Array(300, 500, 800, 1200, 2000, 3000, 4500, 6000, 8000, 10000);
var upgradeMaterial = Array(
	// upgrade to 2
	Array(
		Array(4001832, 50),
		Array(4001839, 50)
	),
	Array(
		Array(4001839, 100),
		Array(4001839, 100)
	),
	Array(
		Array(4001839, 150),
		Array(4001839, 150)
	),
	Array(
		Array(4001839, 350),
		Array(4001839, 350)
	),
	Array(
		Array(4001839, 550),
		Array(4001839, 550)
	),
	Array(
		Array(4001839, 900),
		Array(4001839, 900)
	),
	Array(
		Array(4001839, 1300),
		Array(4001839, 1300)
	),
	Array(
		Array(4001839, 1750),
		Array(4001839, 1750)
	),
	Array(
		Array(4001839, 2300),
		Array(4001839, 2300)
	),
	Array(
		Array(4001839, 3000),
		Array(4001839, 3000)
	)
)

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {

	if (mode == 0 && status == 0) {
		cm.dispose();
		return;
	}

	if (mode == 0) {
		status--;
	} else {
		status++;
	}

	if (status == 0) {
		var level = parseInt(cm.getBossLog("军衔等级", 1));
		var text = head + "\t亲爱的 #e#b#h ##n#k，欢迎来到试炼中心，在这里你可以认领你的军衔和升级你的军衔以及完成你今天的试炼任务。\r\n";
		text += "#L999##r#e[必看]#n 试炼系统玩法与说明#l\r\n\r\n";
		text += "   #d#e[军衔]#n#b #r" + cm.getItemName(medals[level]) + "#k  #d#e[试炼积分]#n#r " + cm.getCredit("试炼积分") + "#d 点\r\n";

		if (level >= medals.length - 1) {
			cm.sendOk("您已经走上人生巅峰，我已经没有什么好帮你的了。");
			cm.dispose();
			return;
		}
		var medalName = cm.getItemName(medals[parseInt(level) + 1]);
		var upgradeName = medalName.replace('十字旅团', "");
		if (level <= 0) {
			text += "#L0#" + icon + " #b#v" + medals[0] + "# 领取初等兵军衔#l\r\n";
		} else {
			text += "#L0#" + icon + " #b#v" + medals[level] + "# 军衔勋章丢失补领#l\r\n";
		}
		text += "#L1#" + icon + " #b#v" + medals[level + 1] + "# 我想升级为" + upgradeName + "\r\n";
		text += "#L2#" + icon + " #b#v" + medals[medals.length - 1] + "# 每日军衔试炼任务 #r[VIP每日三次]#k#l";
		text+="\r\n\t\t\t\t"
		text += "#L3#" + icon + " #r#e返回上一步#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		if (selection == 999) {
			var text = head + "#d#e - 什么是试炼系统？#n#k\r\n";
			text += "\t通过不断的完成试炼任务，收集游戏道具可以升级军衔，军衔越高，军衔勋章提供的属性则越多。\r\n";
			for (var i = 0; i < medals.length; i++) {
				var itemid = medals[i];
				var medalName = cm.getItemName(itemid);
				var attribute = attributes[i];

				text += "\t\t#r#e[军衔]#n#k#v" + itemid + "##b" + medalName + "\r\n";
				text += "\t\t#r#e[属性]#n#k 全属性#r+" + attribute + "#k 攻击力/魔法力#r+" + attribute + "#k\r\n";
				var materialString = "";
				if (i > 0) {
					var fame = needFame[i - 1];
					var material = upgradeMaterial[i - 1];
					for (var j in material) {
						var itemid = material[j][0];
						var quantity = material[j][1];
						materialString += "#d#z" + itemid + ":##e#b[" + quantity + "]#n#d个";
						if (j != material.length - 1) {
							materialString += ", ";
						}
					}
					var point = needPoints[i - 1];
					text += "\t\t#r#e[材料]#n#k " + materialString + "\r\n";
					text += "\t\t#r#e[积分]#n#k 需要消耗 #r" + point + "#k 点试炼积分\r\n";
					text += "\t\t#r#e[人气]#n#k 需要人气达到 #r" + fame + "#k 点";
				} else {
					text += "\t\t#r#e[材料]#n#k 等级达到120级免费领取 ";
				}
				text += "\r\n-----------------------------------------------------\r\n";
			}
			status = -1;
			cm.sendSimple(text);
		} else if (selection == 0) {
			if (cm.getPlayer().getLevel() < 120) {
				cm.sendOk("等级达到120级才可以领取哦！");
				cm.dispose();
				return;
			}
			var level = parseInt(cm.getBossLog("军衔等级", 1));
			var firstId = medals[level];
			if (!cm.haveItem(firstId) && cm.getPlayer().getMedalText().indexOf(cm.getItemName(firstId)) == -1) {
				if (cm.getSpace(1) >= 1) {
					buildMedal(firstId, attributes[level]);
					cm.playerMessage(1, "领取成功！");
					if (level == 0)
						cm.worldSpouseMessage(0x11, "[军衔系统] 恭喜玩家 " + cm.getChar().getName() + " 成为 " + cm.getItemName(firstId) + "！");
					cm.dispose();
				} else {
					cm.sendOk("您的装备栏空间不足！");
					cm.dispose();
				}
			} else {
				cm.sendOk("您身上已经拥有该等级的军衔勋章或者您已经领取过了。");
				cm.dispose();
			}
		} else if (selection == 1) {
			var level = parseInt(cm.getBossLog("军衔等级", 1));
			var nextMedalId = medals[level + 1];
			var currentMedalId = medals[level];
			//检测上一等级勋章是否放入背包
			if (cm.haveItem(currentMedalId)) {

				//检测所需材料是否具备
				var canUpgrade = true;
				//收集错误信息
				var errorMessage = "";
				//物品满足情况检测
				var material = upgradeMaterial[level];
				for (var i in material) {
					var itemid = material[i][0];
					var quantity = material[i][1];
					if (!cm.haveItem(itemid, quantity)) {
						canUpgrade = false;
						errorMessage += "#r×#d 材料 #b#v" + itemid + "##t" + itemid + "##d 还需要 #r" + (quantity - cm.getItemQuantity(itemid)) + " #d个\r\n";
					}
				}

				//人气检测
				var fame = needFame[level];
				if (cm.getPlayer().getFame() < fame) {
					canUpgrade = false;
					errorMessage += "#r×#d 人气还需要 #r" + (fame - cm.getPlayer().getFame()) + " #d点\r\n";
				}

				if (canUpgrade) {
					if (cm.getSpace(1) >= 1) {
						//扣除材料道具
						for (var i in material) {
							var itemid = material[i][0];
							var quantity = material[i][1];
							cm.gainItem(itemid, -quantity);
						}
						//扣除上一级勋章
						cm.gainItem(currentMedalId, -1);
						//军衔等级提升
						cm.setBossLog("军衔等级", 1);
						cm.playerMessage(1, "升级成功！");
						var equip = buildMedal(nextMedalId, attributes[level + 1]);
						sendGachaponNotice("[军衔系统]", "恭喜玩家 " + cm.getChar().getName() + " 军衔等级荣升为 {} ！可喜可贺！", equip, 3);
						cm.dispose();
					} else {
						cm.sendOk("您的装备栏空间不足！");
						cm.dispose();
					}
				} else {
					cm.sendOk("升级失败，原因如下：\r\n" + errorMessage);
					cm.dispose();
				}
			} else {
				cm.sendOk("请将当前等级的勋章放入背包中，否则无法升级，如上一等级勋章遗失，请先补领。");
				cm.dispose();
			}
		} else if (selection == 2) {
			cm.dispose();
			cm.openNpc(cm.getNpc(), 2);
		}else if (selection == 3){
			cm.dispose();
			cm.openNpc(1530636, 1006)
		}
	}
}

function buildMedal(itemid, attribute) {
	var ii = cm.getItemInfo();
	var equip = ii.getEquipById(itemid);
	equip.setStr(attribute);
	equip.setDex(attribute);
	equip.setInt(attribute);
	equip.setInt(attribute);
	equip.setWatk(attribute);
	equip.setMatk(attribute);
	Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), equip, false);
	return equip;
}

function sendGachaponNotice(head, text, item, notice) {
	cm.getChannelServer().broadcastMessage(Packages.tools.MaplePacketCreator.getGachaponMega(head, " : " + text, item, notice, cm.getChannelNumber()));
}