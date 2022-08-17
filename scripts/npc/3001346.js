/*
SnailMS脚本生成器
*/
//importClass(Packages.snail.WorldBoss);
importClass(Packages.server.MapleItemInformationProvider);
importClass(Packages.handling.channel.ChannelServer);


/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓需要设置的地方↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/
var BOSS列表 = new Array(
	Array(5250004, 20000000000, 4032906, 1000000),//怪物ID，血量， 需要的召唤道具， 道具数量
	Array(9100024, 20000000000, 4032906, 1000000),
	Array(9400589, 20000000000, 4032906, 1000000),
	Array(9400590, 20000000000, 4032906, 1000000),
	Array(9400591, 20000000000, 4032906, 1000000),
	Array(9400592, 20000000000, 4032906, 1000000),
	Array(9400897, 20000000000, 4032906, 1000000),
	Array(9410224, 20000000000, 4032906, 1000000),
	Array(9600086, 20000000000, 4032906, 1000000),
	Array(8840000, 20000000000, 4032906, 1000000)
);
var 绝杀奖励 = Array(
	Array(2000019, 3000),
	Array(4310250, 50),
	Array(2340000, 20),
	Array(2049100, 20),
	Array(4310088, 80)
);

var 绝杀点券 = 66666;
var 绝杀抵用 = 66666;
var 绝杀金币 = 200000000;
var 绝杀里程 = 200;

var 参与奖励 = Array(
	Array(2000019, 1000),
	Array(4310250, 2),
	Array(2022468, 300)
);

var 参与点券 = 6666;
var 参与抵用 = 6666;
var 参与金币 = 0;
var 参与里程 = 20;

var 提交材料返还金币 = 666;

var 召唤地图ID = 910000080;
var 坐标x = 1455;
var 坐标y = 97;

var 开放 = true;

/* ↑↑↑↑↑↑↑↑↑↑↑↑需要设置的地方↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/


var 当前阶段 = WorldBoss.getNowStage();
var 最大阶段 = WorldBoss.getMaxStage();
var 当前道具ID = WorldBoss.getItemId();
var 当前道具数量 = WorldBoss.getItemQuantity();
var 需要道具数量 = WorldBoss.getItemQuantityNeed();
var 已召唤 = WorldBoss.isSpawned();
var 已击杀 = WorldBoss.isKilled();
var BOSS = WorldBoss.getNowBoss();
var choose = 0;
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
		//WorldBoss.saveToDB();
		var text = "";
		if(!开放 && !cm.getPlayer().isGM()){
			cm.sendOk("筹备中，暂不开放");
			cm.dispose();
			return;
		}
		
		if(最大阶段 == 0){
			text += "抱歉，世界BOSS尚未加载，请耐心等候GM处理。\r\n"
			if(cm.getPlayer().getGMLevel() >= 100){
				text += "\r\n#r--------------以下为GM选项--------------#k\r\n";
				text += "#L4##b重置怪物#k#l\r\n\r\n"
			}
			
		}else{
			
			text += "这里是世界BOSS入口，当全服收集到指定数量的材料，即可召唤一个世界BOSS，所有玩家都可参与击败BOSS的活动，BOSS击杀后，所有参与者可领取奖励，且给予了BOSS最后一击的玩家，可得到额外的绝杀奖励。\r\n\r\n";
			text += "\t#d当前阶段：\t\t\t\t#g" + 当前阶段 + "#d/#b" + 最大阶段 +"#k\r\n";
			text += "#d\t当前BOSS：\t\t\t\t#r";
			if(BOSS != null){
				text += BOSS.getMonster().getStats().getName() + "#d\r\n";
			}else{
				text += "无#d\r\n";
			}
			
			text += "\t#d召唤状态：\t\t\t\t";
			if(已召唤 && !已击杀){
				var maxHp = WorldBoss.getMaxHp();
				var hp = WorldBoss.getNowBoss().getMobHp();
				text +="#g已召唤#d\r\n";
				text += "\t血量：\t\t\t\t#r" + hp + "#d/#b" + maxHp + "#d\r\n";
			}else if(已召唤 && 已击杀){
				text +="#r已击杀#d\r\n";
			}else{
				text +="#b筹集中#d\r\n";
				text += "\t#d需要数量：\t\t\t\t#r#v" + 当前道具ID + "##z" + 当前道具ID + "#x" + 需要道具数量 + "#d\r\n";
				text += "\t#d已筹集：\t\t\t\t#b" + 当前道具数量 + "#d\r\n";
			}
			if(当前阶段 > 1){
				text += "\t#d已击败BOSS：#b";
				for(var i = 1; i < 当前阶段; i++){
					var boss = WorldBoss.getBoss(i);
					var canReward = !WorldBoss.isRewarded(cm.getPlayer().getId(), i);
					/* if(cm.getPlayer().getOneTimeLog("世界BOSS"+ i + "参与") < 1){
						canReward = false;
						cm.playerMessage(6, "没参与 " + i);//测试
					} */
					text += "No." + i + " #r" + boss.getMonster().getStats().getName();
					//cm.playerMessage(6, "canReward " + canReward);//测试
					if(cm.getPlayer().getOneTimeLog("世界BOSS"+ i + "参与") > 0){
						if(canReward){
							text += "#g（可领奖）  #b";
						}else{
							text += "#b（#r已领取#b）  #b";
						}
					}else{
						text += "  #b";
					}
					
				}
				text += "#k\r\n\r\n";
			}
			
			
			if(参与奖励.length > 0 || 参与金币 > 0 || 参与点券 > 0 || 参与抵用 > 0 || 参与里程 > 0){
				text += "\t#d参与奖励：  #b";
				if(参与金币 > 0){
					text += "金币x" + 参与金币 + " ";
				}
				if(参与点券 > 0){
					text += "点券x" + 参与点券 + " ";
				}
				if(参与抵用 > 0){
					text += "抵用券x" + 参与抵用 + " ";
				}
				if(参与里程 > 0){
					text += "里程x" + 参与里程 + " ";
				}
				for(var i = 0; i < 参与奖励.length; i++){
					text += "#i" + 参与奖励[i][0] + ":#x" + 参与奖励[i][1] + " ";
				}
			}
			text += "\r\n";
			if(绝杀奖励.length > 0 || 绝杀金币 > 0 || 绝杀点券 > 0 || 绝杀抵用 > 0 || 绝杀里程 > 0){
				text += "\t#d绝杀奖励：  #b";
				if(绝杀金币 > 0){
					text += "金币x" + 绝杀金币 + " ";
				}
				if(绝杀点券 > 0){
					text += "点券x" + 绝杀点券 + " ";
				}
				if(绝杀抵用 > 0){
					text += "抵用券x" + 绝杀抵用 + " ";
				}
				if(绝杀里程 > 0){
					text += "里程x" + 绝杀里程 + " ";
				}
				for(var i = 0; i < 绝杀奖励.length; i++){
					text += "#i" + 绝杀奖励[i][0] + ":#x" + 绝杀奖励[i][1] + " ";
				}
			}
			
			text += "\r\n\r\n";
			
			if(!已召唤){
				text += "\t\t\t\t#L1##b提交材料#k#l\r\n\r\n";
			}
			if(已召唤 && !已击杀){
				text += "\t\t\t\t#L2##b挑战BOSS#k#l\r\n\r\n";
			}
			text += "\t\t\t\t#L3##b领取奖励#k#l\r\n\r\n";
			
			if(cm.getPlayer().getGMLevel() >= 100){
				text += "#r-------------------以下为GM选项-------------------#k\r\n";
				text += "\t\t\t\t#L4##b重置怪物#k#l\r\n\r\n";
			}
		}
		
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			var 道具数量 = cm.getPlayer().getItemQuantity(当前道具ID, false);
			if(道具数量 <= 0){
				cm.sendOk("你身上没有#v" + 当前道具ID + "#啊！");
				cm.dispose();
				return;
			}
			var 剩余数量 = 需要道具数量 - 当前道具数量;
			var text = "检测到你身上拥有 #b" + 道具数量 + "#k 件#v" + 当前道具ID + "#，距离召唤还需 #b" + 剩余数量 + " #k个请输入需要提交的数量：";
			
			if(剩余数量 > 道具数量){
				cm.sendGetNumber(text, 道具数量, 1, 道具数量);
			}else{
				cm.sendGetNumber(text, 剩余数量, 1, 剩余数量);
			}
			
			choose = 1;
			
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.sendYesNo("你要去挑战世界BOSS么？我将会把你传送到挑战地图。\r\n");
			choose = 2;
		} else if (selection == 3) {
			//在这里编写选项3要做的事
			var text = "请输入你要领取奖励的BOSS阶段:#r(1~" + 当前阶段 + ")\r\n";
			if(当前阶段 > 1){
				cm.sendGetNumber(text, 当前阶段 - 1, 1, 当前阶段);
			}else{
				cm.sendGetNumber(text, 当前阶段, 1, 当前阶段);
			}
			
			choose = 3;
			
		} else if (selection == 4) {
			//在这里编写选项4要做的事
			cm.sendYesNo("你确定要重置世界BOSS么？这将会重新加载脚本BOSS列表里的内容，并删除现有的记录。\r\n");
			choose = 4;
		} 
		
	} else if (status == 2){
		switch(choose){
			case 1:
				var 道具数量 = cm.getPlayer().getItemQuantity(当前道具ID, false);
				var 提交数量 = selection;
				if(提交数量 > 道具数量){
					cm.sendOk("你身上没有足够的#v" + 当前道具ID + "#啊！");
					cm.dispose();
					return;
				}
				if(提交数量 > 30000){
					var rate = parseInt(提交数量 / 30000);
					//cm.playerMessage(6, "倍率：" + rate);//测试
					for(var i = 0; i < rate; i++){
						cm.gainItem(当前道具ID, -30000);
					}
					cm.gainItem(当前道具ID, -(提交数量 - rate * 30000));
				}else{
					cm.gainItem(当前道具ID, -提交数量);
				}
				cm.给金币(提交材料返还金币 * 提交数量);
				WorldBoss.addItem(提交数量);
				if(cm.getPlayer().getOneTimeLog("世界BOSS"+ 当前阶段 + "参与") < 1){
					cm.getPlayer().setOneTimeLog("世界BOSS"+ 当前阶段 + "参与");
				}
				if(WorldBoss.canSpawn()){
					var cs = ChannelServer.getInstance(1);
					var map = cs.getMapFactory().getMap(召唤地图ID);
					map.resetFully();
					WorldBoss.spawn(map, 坐标x, 坐标y);
					var item = cm.getNewEquip(当前道具ID);
					//cm.全服道具公告("【世界BOSS】", cm.getPlayer().getName() + " 在提交了 " + 提交数量 + " 件 " + MapleItemInformationProvider.getInstance().getName(当前道具ID) + " 后，时空矩阵终于开始运转，通向世界BOSS的通道打开了，请各位冒险家尽快前往挑战世界BOSS！", item);
					cm.sendOk("您已成功提交#v" + 当前道具ID + "##bx" + 提交数量 + "#k，#r随着一道耀眼光芒，时空的通道打开了，请再次与我对话进入BOSS场地挑战BOSS。\r\n");
				}else{
					var item = cm.getNewEquip(当前道具ID);
					//cm.全服道具公告("【世界BOSS】", cm.getPlayer().getName() + " 提交了 " + 提交数量 + " 件 " + MapleItemInformationProvider.getInstance().getName(当前道具ID) + " ，距离召唤BOSS又更近了一步。", item)
					cm.sendOk("您已成功提交#v" + 当前道具ID + "##bx" + 提交数量 + "#k，并得到了 #b " + 提交材料返还金币 * 提交数量 + " 金币" );
					
				}
				//WorldBoss.saveToDB();
				break;
			case 2:
				var cs = ChannelServer.getInstance(1);
				var map = cs.getMapFactory().getMap(召唤地图ID);
				var monsterList = map.getAllMonstersThreadsafe();
				//cm.playerMessage("是否包含 " + monsterList.contains(BOSS.getMonster()));//测试
				if(!monsterList.contains(BOSS.getMonster())){
					WorldBoss.spawn(map, 坐标x, 坐标y);
				}
				/* if(WorldBoss.isSpawned()){
					var cs = ChannelServer.getInstance(1);
					var map = cs.getMapFactory().getMap(召唤地图ID);
					if(!map.haveMonster(BOSS.getMonster().getId())){
						map.resetFully();
						WorldBoss.spawn(map, 坐标x, 坐标y);
					}
				} */
				if(cm.getPlayer().getOneTimeLog("世界BOSS"+ 当前阶段 + "参与") < 1){
					cm.getPlayer().setOneTimeLog("世界BOSS"+ 当前阶段 + "参与");
				}
				cm.getPlayer().giveBuff(2438000, 30000, 30000, 0, 0, 9999, 9999, 9999, 9999, 60, 60, 600 * 1000, true);
				cm.warp(召唤地图ID);
				if(cm.getPlayer().getClient().getChannel() != 1){
					cm.getPlayer().changeChannel(1);
				}
				cm.dispose();
				//WorldBoss.saveToDB();
				break;
			case 3:
				var chooedStage = selection;
				if(chooedStage < 1 || chooedStage > 当前阶段){
					cm.sendOk("你输入的阶段不在许可范围内！");
					cm.dispose();
					return;
				}else if(!WorldBoss.isKilled(chooedStage)){
					cm.sendOk("该BOSS尚未被击败，无法领取奖励！");
					cm.dispose();
					return;
				}else if(WorldBoss.isRewarded(cm.getPlayer().getId(), chooedStage)){
					cm.sendOk("你已经领取过该阶段的奖励了！");
					cm.dispose();
					return;
				}else if(cm.getPlayer().getOneTimeLog("世界BOSS"+ chooedStage + "参与") < 1){
					cm.sendOk("你并未参与过该阶段BOSS的筹集或挑战，无法领取奖励！");
					cm.dispose();
					return;
				}
				
				WorldBoss.setRewarded(cm.getPlayer().getId(), chooedStage);
				var text = "";
				text += "恭喜你领取了参与奖励：#b";
				for(var i = 0; i < 参与奖励.length; i++){
					cm.gainItem(参与奖励[i][0], 参与奖励[i][1]);
					text += "#v" + 参与奖励[i][0] + "#x" + 参与奖励[i][1] + " ";
				}
				if(参与点券 > 0){
					cm.给点券(参与点券);
					text += "#r点券#bx" + 参与点券 + " ";
				}
				if(参与抵用 > 0){
					cm.给抵用券(参与抵用);
					text += "#r抵用券#bx" + 参与抵用 + " ";
				}
				if(参与金币 > 0){
					cm.给金币(参与金币);
					text += "#r金币#bx" + 参与金币 + " ";
				}
				if(参与里程 > 0){
					//cm.增加里程(参与里程);
					text += "#r金币#bx" + 参与里程 + " ";
				}
				text += "#k\r\n";
				
				cm.全服喇叭(9, "[世界BOSS] : 恭喜 " + cm.getPlayer().getName() + " 领取了世界BOSS阶段 " + chooedStage + " 的参与奖励。");
				
				var finalKiller = false;
				if(WorldBoss.getKillerId(chooedStage) == cm.getPlayer().getId()){
					finalKiller = true;
					
				}
				//cm.playerMessage("是否最终击杀 " + finalKiller);//测试
				if(finalKiller && !WorldBoss.isFinalRewarded(chooedStage)){
					text += "#k同时恭喜你拿下了BOSS的绝杀奖励：#b";
					WorldBoss.setFinalRewarded(true, chooedStage);
					for(var i = 0; i < 绝杀奖励.length; i++){
						cm.gainItem(绝杀奖励[i][0], 绝杀奖励[i][1]);
						text += "#v" + 绝杀奖励[i][0] + "#x" + 绝杀奖励[i][1] + " ";
					}
					if(绝杀点券 > 0){
						cm.给点券(绝杀点券);
						text += "#r点券#bx" + 绝杀点券 + " ";
					}
					if(绝杀抵用 > 0){
						cm.给抵用券(绝杀抵用);
						text += "#r抵用券#bx" + 绝杀抵用 + " ";
					}
					if(绝杀金币 > 0){
						cm.给金币(绝杀金币);
						text += "#r金币#bx" + 绝杀金币 + " ";
					}
					if(绝杀里程 > 0){
						//cm.增加里程(绝杀里程);
						text += "#r里程#bx" + 绝杀里程 + " ";
					}
					text += "#k\r\n";
					cm.全服喇叭(9, "[世界BOSS] : 恭喜幸运儿 " + cm.getPlayer().getName() + " 领取了世界BOSS阶段 " + chooedStage + " 的绝杀奖励。");
				}
				cm.sendOk(text);
				//WorldBoss.saveToDB();
				break;
			case 4:
				for(var i = 1; i <= 最大阶段; i++){
					clearJoinData(i);
					clearRewardData(i);
				}
				WorldBoss.reset();
				var cs = ChannelServer.getInstance(1);
				var map = cs.getMapFactory().getMap(召唤地图ID);
				map.resetFully();
				for(var i = 0; i < BOSS列表.length; i++){
					WorldBoss.addBoss(BOSS列表[i][0], BOSS列表[i][1], BOSS列表[i][2], BOSS列表[i][3]);
				}
				WorldBoss.saveToDB();
				cm.sendOk("已成功重置世界BOSS列表信息与所有记录");
				break;
				
		}
	} else {
		cm.dispose();
		return;
	}
}

function clearJoinData(stage){
	var log = "世界BOSS"+ stage + "参与";
	var con = Packages.database.DBConPool.getConnection();
	var ps = con.prepareStatement("DELETE FROM onetimelog WHERE log = ?");
	ps.setString(1, log);
	ps.executeUpdate();
	ps.close();
}

function clearRewardData(stage){
	var log = "世界BOSS阶段"+ stage + "奖励";
	var con = Packages.database.DBConPool.getConnection();
	var ps = con.prepareStatement("DELETE FROM onetimelog WHERE log = ?");
	ps.setString(1, log);
	ps.executeUpdate();
	ps.close();
}