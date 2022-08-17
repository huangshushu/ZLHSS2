/*
SnailMS脚本生成器
*/
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";

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
	var item = cm.getInventory(1).getItem(1);
	if (status == 0) {
		
		if(item == null){
			cm.sendOk("你背包第一格没有装备啊！");
			cm.dispose();
			return;
		}
		var itemID = item.getItemId();
		if(itemID != 1003439) {
			cm.sendOk("请将#v1003439#放在第一格!");
			cm.dispose();
			return;
		}
		var level = item.getLevel();
		var upgradeSlots = item.getUpgradeSlots();
		var text = ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n";
		text += "\t\t\t#v1003439#\t\t#v1003439#\t\t#v1003439#\t\t\r\n";
		text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n\r\n";
		text += "#d已强化次数:#r " + level + " #k\r\n";
		text += "#d可强化次数:#g " + upgradeSlots + " #k\r\n";
		text += "#d消耗: #v4001126##bx60000\t#v4310025#x10\t #d金币#bx2000W #d可升级次数#b-1#k\r\n\r\n";
		text += "#d强化效果: #b全属性+#r5#b 攻击力+#r5#b 魔法力+#r5#b\r\n\r\n";
		text += "\t\t\t\t\t#L1##d[强化]\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		if(selection == 1){
			if(cm.haveItem(4001126, 60000) && cm.haveItem(4310025, 10) && cm.判断金币() >= 20000000){
				if(cm.砸装备(item, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true)){
					cm.gainItem(4001126, -30000);
					cm.gainItem(4001126, -30000);
					cm.gainItem(4310025, -10);
					cm.收金币(20000000);
					item = cm.getInventory(1).getItem(1);
					var level = item.getLevel();
					//cm.全服道具公告("高级装备强化", "恭喜 " + cm.getPlayer().getName() + "强化到了 " + level + " 级", item);
					cm.sendOk("强化成功");
				}else{
					cm.sendOk("你的可强化次数不足!");
					cm.dispose();
					return;
				}
			}else{
				cm.sendOk("你的材料不足!");
				cm.dispose();
				return;
			}
			
		}
		return;
		
	} else if(status == 2){
		cm.safeDispose();
		cm.openNpc(1061015, 1);
		return;
	} else {
		cm.safeDispose();
		return;
	}
}

