/*
 * 新版武陵道场
 * Telegram Meguel_chms
 */
var minPlayers = 1;
var BossList = [
	9305600, //红蜗牛王	1关
	9305601, //	蘑菇王	 2
	9305602, //	树妖王	 3
	9305603, //	蓝蘑菇王	 4
	9305604, //	僵尸蘑菇王	 5
	9305605, //	绿水灵王	6
	9305606, //	多尔	 7
	9305607, //	巨居蟹	 8
	9305608, //	浮士德	 9
	9305609, //	希拉	 10
	9305610, //	钢铁石头人	 11
	9305611, //	艾利杰	 12
	9305612, //	蝙蝠怪	 13
	9305613, //	九尾狐	 14
	9305614, //	大宇	 15
	9305615, //	朱诺	16
	9305616, //	提莫	 17
	9305617, //	黑轮王	 18
	9305618, //	肯德熊	 19
	9305619, //	班·雷昂	 20
	9305620, //	远古精灵
	9305621, //	阿丽莎乐
	9305622, //	老海盗
	9305623, //	迪特和罗伊
	9305624, //	法兰肯
	9305625, //	吉米拉
	9305626, //	毒液石头人
	9305627, //	妖怪禅师
	9305628, //	蝙蝠魔
	9305629, //	阿卡伊勒	 30
	9305630, //	火焰龙	 31
	9305631, //	天鹰	 32
	9305632, //	驮狼雪人	 33
	9305633, //	帕普拉图斯	 34
	9305634, //	阿尼	 35
	9305635, //	大海兽	36
	9305636, //	多多	 37
	9305637, //	玄冰独角兽	 38
	9305638, //	雷卡	 39
	9305639, //	麦格纳斯	 40
	9305656, //	乌曼王	 41
	9305657, //	盖奥勒克	42
	9305658, //	艾菲尼娅	 43
	9305659, //	薛西斯	 44
	9305660, //	塔尔卡	 45
	9305661, //	斯卡利昂	46
	9305662, //	拉瓦那	 47
	9305663, //	蜘蛛女王	 48
	9305664, //	幻龙	 49
	9305665, //	御龙魔	50
	9305666, //	胡克	 51
	9305667, //	伊卡尔特	 52
	9305668, //	伊莉娜	 53
	9305669, //	奥兹 54层
	9305670, //	米哈尔	 55
	9305671, //	希纳斯 56层
	9305672, //	阿狼	 57
	9305673, //	凤仙 58层
	9305674, //	悟空	 59
	9305675, //	宋达	 60
	9305676, //	黄龙	 61
	9305677, //	赤虎	62
	9305640 //	武公 改到 63关
];
var normalMob = [
	9305641, //	日光精灵	21
	9305642, //	玩具黑鼠	22
	9305643, //	凯丁	23
	9305644, //	氯化洛伊德	24
	9305645, //	强化版洛伊德	25
	9305646, //	变态哈闷	26
	9305647, //	混种石头人	27
	9305648, //	妙仙		28
	9305649 //	长枪牛魔王	29
];

function init() {}

function setup(level, leaderid) {
	//925070100 1层
	//925076300 63层
	var eim = em.newInstance("Dojang" + leaderid);
	var max = 62; //0-62
	eim.setProperty("stage", "0"); //初始关卡
	eim.setProperty("clear", "true"); //初始化关卡状态
	eim.setProperty("rounds", "1"); //默认为1波
	for (var i = 0; i < max; i++) { //注册地图
		var map = eim.createInstanceMap(925070100 + (i * 100)); //创建eim专属MAP
		if (map.getFirstUserEnter().equals("Fenter_Dojang"))
			continue;
		map.setFirstUserEnter("Fenter_Dojang");
		map.resetFully();
	}
	eim.startEventTimer(8, 0, 15 * 60 * 1000); //15min 道场专用 暂时坏了，先用下面的顶顶
	//eim.startEventTimer(15 * 60 * 1000); //15min 道场专用
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {}

function scheduledTimeout(eim) {
	end(eim);
}

function changedMap(eim, player, mapid) {
	var stage = Math.floor(((mapid - 925070000) / 100) - 1);
	//这里还要一个继续计时
	if (mapid >= 925070100 && mapid <= 925076300) {
		if (stage == 30 || stage == 31) { //31.32.1只2轮
			eim.setProperty("rounds", "2"); //更改波数
		}
		if (stage == 36 || stage == 37) { //37.38.1只3轮
			eim.setProperty("rounds", "3"); //更改波数
		}
		//eim.broadcastPlayerMsg(5, "3秒后出怪");
		eim.setProperty("stage", String(stage)); //记录关卡
		return;
	}
	//openNpc(eim, 2091005, "Dojang_end"); //结算
	eim.unregisterPlayer(player);
	eim.disposeIfPlayerBelow(0, 0);
}

function spawnMobs(eim) {
	var stage = parseInt(eim.getProperty("stage")); //读取当前关卡
	var counts = 1;
	if (stage == 32 || stage == 35) { //33.36.2只1轮
		counts = 2;
	} else if (stage == 33 || stage == 38 || stage == 44 || stage == 49) { //39.45.50 1轮3只
		counts = 3;
	} else {
		counts = 1;
	}
	//eim.broadcastPlayerMsg(5, "出怪：第" + stage + "关，数量：" + counts + "怪物代码：" + BossList[stage]);
	while (counts > 0) {
		var rand = random(0, 3); //刷怪的坐标
		var x = (rand == 0 ? -193 : rand == 1 ? 140 : 355);
		var map = eim.getMapInstance(stage);
		var Boss = em.getMonster(BossList[stage]);
		var modified = em.newMonsterStats();
		modified.setOHp(100000000 * (stage + 1)); //设置怪物血量
		Boss.setOverrideStats(modified);
		eim.registerMonster(Boss); //将怪物注册到eim
		map.spawnMonsterOnGroundBelow(Boss, new java.awt.Point(x, 7)); //刷道场怪物
		//eim.broadcastPlayerMsg(5, "刷怪的地图：" + map.getId());
		counts--;
	}
	//eim.broadcastPlayerMsg(5, "出怪结束");
	if (stage >= 20 && stage <= 28) { //第21-29关要额外刷5只小怪
		for (var i = 0; i < 5; i++) {
			var rand = random(0, 3); //刷怪的坐标
			var x = (rand == 0 ? -193 : rand == 1 ? 140 : 355);
			var rand2 = random(0 - 100);
			var map = eim.getMapInstance(stage);
			var mob = em.getMonster(normalMob[stage - 20]);
			eim.registerMonster(mob); //将怪物注册到eim
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(x + rand2, 7));
		}
	}
}

function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function playerDisconnected(eim, player) {
	return 0;
}

function monsterValue(eim, mobId) {
	return 1;
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	eim.disposeIfPlayerBelow(0, 0);
}

function end(eim) {
	eim.disposeIfPlayerBelow(100, 925020002);
}

function clearPQ(eim) {
	end(eim);
}

function allMonstersDead(eim) {
	var stage = parseInt(eim.getProperty("stage")); //读取当前关卡
	var rounds = parseInt(eim.getProperty("rounds"));
	if (rounds == 1) {
		var map = eim.getMapInstance(stage);
		eim.setProperty("clear", "true"); //设置通关状态
		map.playFieldSound("Dojang/clear");
		map.showScreenEffect("dojang/end/clear");
		var reactor = map.getReactorByID(2508000);
		if (reactor != null) {
			reactor.forceHitReactor(1);
		}
		//eim.playSound(true, "Dojang/clear");
		//eim.showEffect("dojang/end/clear");
	} else {
		rounds--;
		//eim.broadcastPlayerMsg(5, "重新刷怪，还剩" + rounds + "波。");
		eim.setProperty("rounds", String(rounds));
		eim.schedule("spawnMobs", 2222); //写一个刷怪的方法
	}
}

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {
	end(eim);
}

function cancelSchedule() {}

function pickUpItem(player, itemID) {}

function monsterDamaged(eim, player, mobid, damage) {
	//eim.broadcastPlayerMsg(5, "伤害 ：" + damage);
}
/*
function openNpc(eim, npcid, mode) {
for (var i = 0; i < eim.getPlayerCount(); i++) {
eim.getPlayers().get(i).openNpc(npcid, mode);
}
}
*/
