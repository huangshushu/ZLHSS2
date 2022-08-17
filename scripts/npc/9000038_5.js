/*
SnailMS脚本生成器
*/
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";


var finishedCards = 0;
var stage = -1;
var 名称 = Array("朱雀", "玄武", "青龙", "白虎", "麒麟", "腾蛇", "白泽", "饕餮", "混沌");
var 消耗金币 = 10000000;
var 要求卡片等级 = 1;

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
		finishedCards = cm.getPlayer().getMonsterBook().getFinishQuantity(0, 要求卡片等级);
		// cm.getPlayer().dropMessage("totalCards:" +  cm.getPlayer().getMonsterBook().getTotalCards());//测试
		var text = "";
		for (i = 0; i < 10; i++) {
			text += "";
		}
		text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
	   text += " \t\t\t  #e#r #v4000005#  林中小屋  #v4000005##k#n              \r\n"
		text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
		text += "#d\t\t角色名称：#b" + cm.getName() + "#k\t\t满#r" + 要求卡片等级 + "#k级卡片总数:#b" + finishedCards + "#k\r\n";
	
		text += "#r强化成功之后，会在装备上显示装备等级。每次领取或者强化，需要#b消耗1000万金币#r。\r\n";
		text += "#b#L0##v2388006#卡片商店#l\r\n";//3
		
		text += "#r#L1##d领取#r" + 名称[0] + "#b#b#v1115400##z1115400##d需要红色怪物卡片全满" + 要求卡片等级 + "级收集";//3
		if(cm.getPlayer().getMonsterBook().isFinished(1, 要求卡片等级)){
			text += "，#g 已达成目标，可兑换。#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(1, 要求卡片等级);
			text += "，收集情况：#r" + cards + "#k/#b20#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L2##r" + 名称[0] + "#d#v1115400#升为#r" + 名称[1] + "#d，#b全属性+2，攻击力+2，魔法力+2#d，需要橙色怪物卡片全满" + 要求卡片等级 + "级收集";//3
		if(cm.getPlayer().getMonsterBook().isFinished(2, 要求卡片等级)){
			text += "，#g 已达成目标，可兑换。#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(2, 要求卡片等级);
			text += "，收集情况：#r" + cards + "#k/#b74#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L3##r" + 名称[1] + "#d#v1115400#升为#r" + 名称[2] + "#d，#b全属性+2，攻击力+2，魔法力+2#d，需要浅绿怪物卡片全满" + 要求卡片等级 + "级收集";//3
		if(cm.getPlayer().getMonsterBook().isFinished(3, 要求卡片等级)){
			text += "，#g 已达成目标，可兑换。#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(3, 要求卡片等级);
			text += "，收集情况：#r" + cards + "#k/#b86#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L4##r" + 名称[2] + "#d#v1115400#升为#r" + 名称[3] + "#d，#b全属性+2，攻击力+2，魔法力+2#d，需要翠绿怪物卡片全满" + 要求卡片等级 + "级收集";//3
		if(cm.getPlayer().getMonsterBook().isFinished(4, 要求卡片等级)){
			text += "，#g 已达成目标，可兑换。#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(4, 要求卡片等级);
			text += "，收集情况：#r" + cards + "#k/#b58#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L5##r" + 名称[3] + "#d#v1115400#升为#r" + 名称[4] + "#d，#b全属性+2，攻击力+2，魔法力+2#d，需要天蓝怪物卡片全满" + 要求卡片等级 + "级收集";//3
		if(cm.getPlayer().getMonsterBook().isFinished(5, 要求卡片等级)){
			text += "，#g 已达成目标，可兑换。#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(5, 要求卡片等级);
			text += "，收集情况：#r" + cards + "#k/#b44#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L6##r" + 名称[4] + "#d#v1115400#升为#r" + 名称[5] + "#d，#b全属性+2，攻击力+2，魔法力+2#d，需要海蓝怪物卡片全满" + 要求卡片等级 + "级收集";//3
		if(cm.getPlayer().getMonsterBook().isFinished(6, 要求卡片等级)){
			text += "，#g 已达成目标，可兑换。#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(6, 要求卡片等级);
			text += "，收集情况：#r" + cards + "#k/#b27#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L7##r" + 名称[5] + "#d#v1115400#升为#r" + 名称[6] + "#d，#b全属性+2，攻击力+2，魔法力+2#d，需要紫藤怪物卡片全满" + 要求卡片等级 + "级收集";//3
		if(cm.getPlayer().getMonsterBook().isFinished(7, 要求卡片等级)){
			text += "，#g 已达成目标，可兑换。#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(7, 要求卡片等级);
			text += "，收集情况：#r" + cards + "#k/#b29#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L8##r" + 名称[6] + "#d#v1115400#升为#r" + 名称[7] + "#d，#b全属性+2，攻击力+2，魔法力+2#d，需要暗黑怪物卡片全满" + 要求卡片等级 + "级收集";//3
		if(cm.getPlayer().getMonsterBook().isFinished(8, 要求卡片等级)){
			text += "，#g 已达成目标，可兑换。#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(8, 要求卡片等级);
			text += "，收集情况：#r" + cards + "#k/#b20#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L9##r" + 名称[7] + "#d#v1115400#升为#r" + 名称[8] + "#d，#b全属性+2，攻击力+2，魔法力+2#d，需要暗金怪物卡片全满" + 要求卡片等级 + "级收集";//3
		if(cm.getPlayer().getMonsterBook().isFinished(9, 要求卡片等级)){
			text += "，#g 已达成目标，可兑换。#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(9, 要求卡片等级);
			text += "，收集情况：#r" + cards + "#k/#b53#k";
		}
		text += "#l\r\n\r\n";
		text += "\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		if(cm.getPlayer().getGMLevel() >= 100){
			text += "#L10##r设置卡片等级（GM专属）#l\r\n\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 0){
			cm.safeDispose();
			cm.openNpc(9000038, 7);
			return;
		}else if(selection == 1){
			//在这里编写选项1要做的事
			if(cm.判断背包装备栏().isFull(0)){
				cm.sendOk("请保证你的背包装备栏至少有 1 格空间！");
				cm.dispose();
				return;
			}else if(cm.getPlayer().getOneTimeLoga("怪物卡片戒指") > 0){
				cm.sendOk("#r抱歉，这个账号已经升级过怪物卡片戒指了，一旦升级过就不能再领取了！若戒指遗失请联系管理员！\r\n");
				cm.dispose();
				return;
			}else if(cm.haveItem(1115400, 1, true, true)){
				cm.sendOk("#r抱歉，你身上已经有#v1115400#了，只能持有一个！\r\n");
				cm.dispose();
				return;
			}else if(cm.判断金币() < 消耗金币){
				cm.sendOk("#r抱歉，你身上的金币不够" + 消耗金币 + "！\r\n");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getMonsterBook().isFinished(1, 要求卡片等级)){
				//cm.gainItem(1115400, 1);
				cm.gainMeso(-消耗金币);
				var item = cm.getNewEquip(1115400);
				item.setOwner(名称[selection - 1]);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.sendOk("恭喜你成功制作了#b#v1115400##z1115400#\r\n");
				cm.全服道具公告("[装备制作]", "玩家 "+cm.getPlayer().getName()+" 完成了怪物卡片收集，成功制作了" + 名称[selection - 1] + "怪物卡片戒指。", item);
				cm.dispose();
				return;
			}else{
				cm.sendOk("#r你的卡片不够啊！\r\n");
				cm.dispose();
				return;
			}
			
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1115400) {
				cm.sendOk("把#v1115400#放在第一格!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, 要求卡片等级)){
				cm.sendOk("#r你的卡片不够啊！\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("怪物卡片戒指" + selection) > 0){
				cm.sendOk("#r你账号底下的角色已经升级过一次这个等级了，无法再次升级！\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > 消耗金币 && cm.getInventory(1).getItem(1).getOwner() == 名称[selection - 2]) {
				cm.getPlayer().setOneTimeLoga("怪物卡片戒指");
				cm.getPlayer().setOneTimeLoga("怪物卡片戒指" + selection);
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(名称[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-消耗金币);
				cm.sendOk("强化成功，当前装备等级为 “#r" + 名称[selection - 1] + "#k”。\r\n #r#e全属性#b+2#r，攻击力#b+2#r，魔法力#b+2#r\r\n");
				cm.全服道具公告("[卡片戒指强化]", "玩家 "+cm.getPlayer().getName()+" 将怪物卡片戒指强化到了" + 名称[selection - 1] + "。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备前缀不对。或者金币不足");
				cm.dispose();
			}
		}else if (selection == 3) {
			//在这里编写选项3要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1115400) {
				cm.sendOk("把#v1115400#放在第一格!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, 要求卡片等级)){
				cm.sendOk("#r你的卡片不够啊！\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("怪物卡片戒指" + selection) > 0){
				cm.sendOk("#r你账号底下的角色已经升级过一次这个等级了，无法再次升级！\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > 消耗金币 && cm.getInventory(1).getItem(1).getOwner() == 名称[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("怪物卡片戒指" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(名称[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-消耗金币);
				cm.sendOk("强化成功，当前装备等级为 “#r" + 名称[selection - 1] + "#k”。\r\n #r#e全属性#b+2#r，攻击力#b+2#r，魔法力#b+2#r\r\n");
				cm.全服道具公告("[卡片戒指强化]", "玩家 "+cm.getPlayer().getName()+" 将怪物卡片戒指强化到了" + 名称[selection - 1] + "。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备前缀不对。或者金币不足");
				cm.dispose();
			}
		} else if (selection == 4) {
			//在这里编写选项4要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1115400) {
				cm.sendOk("把#v1115400#放在第一格!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, 要求卡片等级)){
				cm.sendOk("#r你的卡片不够啊！\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("怪物卡片戒指" + selection) > 0){
				cm.sendOk("#r你账号底下的角色已经升级过一次这个等级了，无法再次升级！\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > 消耗金币 && cm.getInventory(1).getItem(1).getOwner() == 名称[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("怪物卡片戒指" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(名称[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-消耗金币);
				cm.sendOk("强化成功，当前装备等级为 “#r" + 名称[selection - 1] + "#k”。\r\n #r#e全属性#b+2#r，攻击力#b+2#r，魔法力#b+2#r\r\n");
				cm.全服道具公告("[卡片戒指强化]", "玩家 "+cm.getPlayer().getName()+" 将怪物卡片戒指强化到了" + 名称[selection - 1] + "。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备前缀不对。或者金币不足");
				cm.dispose();
			}
		} else if (selection == 5) {
			//在这里编写选项5要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1115400) {
				cm.sendOk("把#v1115400#放在第一格!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, 要求卡片等级)){
				cm.sendOk("#r你的卡片不够啊！\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("怪物卡片戒指" + selection) > 0){
				cm.sendOk("#r你账号底下的角色已经升级过一次这个等级了，无法再次升级！\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > 消耗金币 && cm.getInventory(1).getItem(1).getOwner() == 名称[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("怪物卡片戒指" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(名称[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-消耗金币);
				cm.sendOk("强化成功，当前装备等级为 “#r" + 名称[selection - 1] + "#k”。\r\n #r#e全属性#b+2#r，攻击力#b+2#r，魔法力#b+2#r\r\n");
				cm.全服道具公告("[卡片戒指强化]", "玩家 "+cm.getPlayer().getName()+" 将怪物卡片戒指强化到了" + 名称[selection - 1] + "。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备前缀不对。或者金币不足");
				cm.dispose();
			}
		} else if (selection == 6) {
			//在这里编写选项6要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1115400) {
				cm.sendOk("把#v1115400#放在第一格!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, 要求卡片等级)){
				cm.sendOk("#r你的卡片不够啊！\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("怪物卡片戒指" + selection) > 0){
				cm.sendOk("#r你账号底下的角色已经升级过一次这个等级了，无法再次升级！\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > 消耗金币 && cm.getInventory(1).getItem(1).getOwner() == 名称[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("怪物卡片戒指" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(名称[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-消耗金币);
				cm.sendOk("强化成功，当前装备等级为 “#r" + 名称[selection - 1] + "#k”。\r\n #r#e全属性#b+2#r，攻击力#b+2#r，魔法力#b+2#r\r\n");
				cm.全服道具公告("[卡片戒指强化]", "玩家 "+cm.getPlayer().getName()+" 将怪物卡片戒指强化到了" + 名称[selection - 1] + "。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备前缀不对。或者金币不足");
				cm.dispose();
			}
		} else if (selection == 7) {
			//在这里编写选项7要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1115400) {
				cm.sendOk("把#v1115400#放在第一格!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, 要求卡片等级)){
				cm.sendOk("#r你的卡片不够啊！\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("怪物卡片戒指" + selection) > 0){
				cm.sendOk("#r你账号底下的角色已经升级过一次这个等级了，无法再次升级！\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > 消耗金币 && cm.getInventory(1).getItem(1).getOwner() == 名称[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("怪物卡片戒指" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(名称[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-消耗金币);
				cm.sendOk("强化成功，当前装备等级为 “#r" + 名称[selection - 1] + "#k”。\r\n #r#e全属性#b+2#r，攻击力#b+2#r，魔法力#b+2#r\r\n");
				cm.全服道具公告("[卡片戒指强化]", "玩家 "+cm.getPlayer().getName()+" 将怪物卡片戒指强化到了" + 名称[selection - 1] + "。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备前缀不对。或者金币不足");
				cm.dispose();
			}
		} else if (selection == 8) {
			//在这里编写选项7要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1115400) {
				cm.sendOk("把#v1115400#放在第一格!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, 要求卡片等级)){
				cm.sendOk("#r你的卡片不够啊！\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("怪物卡片戒指" + selection) > 0){
				cm.sendOk("#r你账号底下的角色已经升级过一次这个等级了，无法再次升级！\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > 消耗金币 && cm.getInventory(1).getItem(1).getOwner() == 名称[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("怪物卡片戒指" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(名称[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-消耗金币);
				cm.sendOk("强化成功，当前装备等级为 “#r" + 名称[selection - 1] + "#k”。\r\n #r#e全属性#b+2#r，攻击力#b+2#r，魔法力#b+2#r\r\n");
				cm.全服道具公告("[卡片戒指强化]", "玩家 "+cm.getPlayer().getName()+" 将怪物卡片戒指强化到了" + 名称[selection - 1] + "。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备前缀不对。或者金币不足");
				cm.dispose();
			}
		} else if (selection == 9) {
			//在这里编写选项7要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1115400) {
				cm.sendOk("把#v1115400#放在第一格!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, 要求卡片等级)){
				cm.sendOk("#r你的卡片不够啊！\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("怪物卡片戒指" + selection) > 0){
				cm.sendOk("#r你账号底下的角色已经升级过一次这个等级了，无法再次升级！\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > 消耗金币 && cm.getInventory(1).getItem(1).getOwner() == 名称[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("怪物卡片戒指" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(名称[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-消耗金币);
				cm.sendOk("强化成功，当前装备等级为 “#r" + 名称[selection - 1] + "#k”。\r\n #r#e全属性#b+2#r，攻击力#b+2#r，魔法力#b+2#r\r\n");
				cm.全服道具公告("[卡片戒指强化]", "玩家 "+cm.getPlayer().getName()+" 将怪物卡片戒指强化到了" + 名称[selection - 1] + "。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备前缀不对。或者金币不足");
				cm.dispose();
			}
		} else if(selection == 10){
			var text = "请选择你想要设置的阶段：\r\n";
			for(var i = 0; i < 10; i ++){
				if(i == 0){
					text += "#r#L" + i + "#所有阶段#l\r\n";
				}else{
					text += "#b#L" + i + "#阶段" + i + "#l   "; 
				}
			}
			text += "#k\r\n";
			cm.sendSimple(text);
		}
		
	} else if(status == 2){
		if(selection >= 0){
			stage = selection;
			var text = "请输入要设置的等级：\r\n";
			cm.sendGetNumber(text, 0, 0, 5);
		}
		
	}  else if(status == 3){
		if(selection >= 0){
			if(selection > 5){
				selection = 5;
			}
			cm.getPlayer().getMonsterBook().setCardsByStage(cm.getC(), stage, selection);
			if(stage == 0){
				cm.sendOk("以成功将全阶段的怪物卡片等级设置为 " + selection + " 级。\r\n");
			}else{
				cm.sendOk("以成功将阶段 " + stage + " 的所有怪物卡片等级设置为 " + selection + " 级。\r\n");
			}
			cm.dispose();
			return;
		}
		
	} else {
		cm.dispose();
		return;
	}
}

