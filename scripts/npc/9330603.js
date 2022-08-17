/* 开启2,3条星岩 */

var status = -1;
var useRMB = 20;
var oldEquip;
var nebulite;
var option;
var socket;
var itemId = 4031997;
var count = 20;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {

		oldEquip = cm.getEquipBySlot(1);
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好！想额外镶嵌星岩吗？\r\n#k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#使用#r "+useRMB+" #k#v4031997#，即可额外镶嵌星岩！\r\n#k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#当前拥共有#b #c4031997# #k个\r\n#k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#当前选择的装备：#v"+ oldEquip.getItemId() + "#\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n";

        selStr += "#L0##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##b镶嵌星岩至装备栏第一格装备#k（消耗：#r "+useRMB+" #k蘑菇金币)#l";

		cm.sendSimple(selStr + " \r\n");
    } else if (status == 1) {
		option = oldEquip.getSocket2() <= 0 ? 2 : oldEquip.getSocket3() <= 0 ? 3 : -1;
		if (oldEquip == null) {
			cm.sendOk("出现错误: \r\n背包栏第1个位置的装备为空！");
			cm.dispose();
			return;
		}
		if (option == -1) {
			cm.sendOk("您的装备已经镶嵌满了星岩！无法再额外镶嵌！");
			cm.dispose();
			return;
		}
		if (oldEquip.getSocket1() > 0) {
			var text = "您当前选择的装备是：\r\n\r\n#v"+oldEquip.getItemId()+"##z"+oldEquip.getItemId()+"#\r\n\r\n请选择您要镶嵌的星岩：\r\n";
			for (var i = 1; i < cm.getInventory(3).getNumFreeSlot(); i++) {
				var item = cm.getInventory(3).getItem(i);
				if (item != null && Packages.constants.ItemConstants.is星岩(item.getItemId())) {
					text += "\r\n#L" + i + "##v" + item.getItemId() + "##z" + item.getItemId() + "##l";
				}
			}
			cm.sendSimple(text);
		} else {
			cm.sendOk("出现错误: \r\n背包栏第1个位置的装备未镶嵌第一个星岩！");
			cm.dispose();
			return;
		}
    } else if (status == 2) {
		nebulite = cm.getInventory(3).getItem(selection).getItemId();
		socket = cm.getItemInfo().getSocketInfo(nebulite).opID;
		cm.sendYesNo("您当前选择的星岩是：\r\n\r\n#v"+nebulite+"##z"+nebulite+"#\r\n\r\n#b确定要镶嵌该星岩至第" + option + "插槽吗？#k");
	} else if (status == 3) {
		if(cm.getRMB() >= useRMB || cm.haveItem(itemId, count)) {
			if (option == 2) {
				oldEquip.setSocket2(socket);
			} else if (option == 3) {
				oldEquip.setSocket3(socket);
			} else {
				cm.sendOk("出现异常，请联系管理员");
				cm.dispose();
				return;
			}
			if (cm.haveItem(itemId, count)) {
				cm.sendOk("使用#z"+itemId+"#后，您成功将装备镶嵌第" + option + "星岩！");
				cm.gainItem(itemId, -count);
				cm.setBossLog("消费值" ,1 ,count)
			cm.gainItem(nebulite, -1);
			cm.getPlayer().forceUpdateItem(oldEquip, true);
			cm.getPlayer().equipChanged();
			cm.worldMessageItem("[星岩镶嵌] : 恭喜[" + cm.getPlayer().getName() + "]成功镶嵌第" + option + "星岩！", oldEquip);
			//cm.worldMessageItem("[星岩镶嵌] : " + "恭喜[" + cm.getPlayer().getName() + "]成功镶嵌第" + option + "星岩！", oldEquip);
			cm.dispose();
		} else {
			cm.sendOk("请确您的道具是否足够！");
			cm.dispose();
			return;
		}
	}
}}