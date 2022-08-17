/*  
 *  
 *  热血道场第一阶

 *  
 */
//自定义复活次数
var reviveCount = 5;
var TimeA = 20 * 60 * 1000;//你这里有副本时间就不需要复制
var MaxDamage = [], MaxName = [], DISPLAY;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}


function setup(eim, leaderid) {
    em.setProperty("state", "1");//step1
    em.setProperty("leader", "false");//这里必须是false - 等于玩家进入后 禁止其他人进入 
    var eim = em.newInstance("Newdojang2");
    var map = eim.setInstanceMap(925070200);
    map.resetFully();
   ////////基础设置完毕////////////
   eim.schedule("beginQuest", 3000);//3秒后开启副本
    eim.setProperty("HPstate", "1");
    eim.startEventTimer(TimeA); // 30 min
    return eim;
}

function monsterSpawn(eim) {
	 	var map = eim.getMapInstance(925070200);

	 	if (em.getProperty("state").equals("1")==true){

	        var hprand = 3000000000000;
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {

         	var mob = em.getMonster(8820007);//怪物比恩宝宝
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(5000000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
        
         	eim.registerMonster(mob);

         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400 -i * 30,7)); //刷出这个
			}
			map.startMapEffect("图腾幻化为比恩宝宝被召唤了!!", 5120099);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "2");


		 } else if (em.getProperty("state").equals("2")==true) {
         	var overrideStats = em.newMonsterStats();
    		var hprand = 90000000000000;//三十万亿
         	var mob = em.getMonster(8510000);//怪物
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(5000000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);  
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(500,7)); //刷出这个
         	var mob2 = em.getMonster(8520000);//怪物
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(5000000);
         	overrideStats.setOMp(200000);
         	mob2.setOverrideStats(overrideStats);
         	mob2.setHp(hprand);
        
         	eim.registerMonster(mob2);

         	map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-462,7)); //刷出这个		        
			map.startMapEffect("图腾幻化为两只鱼王同时出现!!", 5120100);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "3");
		} else if (em.getProperty("state").equals("3")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(9833400);//怪物皮罗克魔王
         	var hprand = 300000000000000;//三百万亿
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400 -i * 200,7)); //刷出这个怪物
		        }
			map.startMapEffect("图腾幻化为皮洛克魔王出现了请消灭他!!!!", 5120099);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "4");
		} else if (em.getProperty("state").equals("4")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(6400003);//怪物 石像鬼王
         	var hprand = 1500000000000000;//一千五百万亿
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(450,7)); //刷出这个怪物
		        }
			map.startMapEffect("图腾幻化为石像鬼王!!!!还好只有一只", 5120099);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "5");
		} else if (em.getProperty("state").equals("5")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(8644011);//怪物恶化的调和精灵
         	var hprand = 3000000000000000;//三千五百万亿
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(450,7)); //刷出这个怪物
		        }
			map.startMapEffect("不好了图腾变异了，请消灭巨人精灵!!!!", 5120099);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "6");
			cm.worldSpouseMessage(0x26, "[图腾副本] 玩家 "+ cm.getChar().getName() +" 正在和第一波怪物作战 ["+cm.getItemName(itemd.getItemId())+"] ");
		} else if (em.getProperty("state").equals("6")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(8641010);//怪物
         	var hprand = 6000000000000000;//六千万亿
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(450,7)); //刷出这个怪物
		        }
			map.startMapEffect("巨大怪兽来袭!!！", 5120099);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "7");
		
		 	} else if (em.getProperty("state").equals("7")==true) {
		map.startMapEffect("真的牛逼! 期待你下一次挑战", 5120099);
		eim.schedule("openRollNpc", 1000 * 5);
		eim.schedule("EndThisBattle", 1000 * 8);
		map.broadcastMessage(em.getClock(120));
			}
}


function beginQuest(eim) {//开始步骤
		var map = eim.getMapInstance(925070200);
		em.getMapFactory().getMap(925070200).startMapEffect("欢迎你来到图腾幻化副本!在这里每打死一波怪物将会获得奖励，共6波，副本总共限制20分钟", 5120099);
		eim.schedule("monsterSpawn", 15000);
		}
function allMonstersDead(eim) {//每波怪物死亡后执行!!
		var map = eim.getMapInstance(925070200);
    	eim.setProperty("HPstate", "-1");
		for (var i = 0; i < eim.getPlayerCount(); i++) {
		eim.getPlayers().get(i).openNpc(2091011, "道场奖励2");
    }
	 	eim.schedule("monsterSpawn", 6000);
	
		}

function playerEntry(eim, player) {
	    /* 下面的内容是要复制的 */
    DISPLAY = true;//true 显示 队友 | false 不显示队友
    /* Register = 注册项目制进去 */
    Register(eim, player);
    /* 这里的内容是要复制的 */
    var map = eim.getMapInstance(0);//
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 925070200) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 925020001);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

/*function allMonstersDead(eim) {
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
	var map = eim.getMapInstance(925070200);
	map.startMapEffect("[道场1阶] 已通关 即将发放奖励 ", 5121000);
	
}*/

function monsterDamaged(eim, player, mobID, damage) {
    switch (mobID) {
        case 100100://这个是攻击这个怪物显示伤害 这里就是攻击哪个BOSS显示上海记录的 以此推 这样 玩家打8641010 或者 8644011 都会记录伤害 等
            /* 这里是玩家造成伤害实时显示 */
            C_UP(eim, player, damage)
            /* 上面的内容是要复制的 */
            break;
    }
};

function monsterKilled(eim, player, mobID) {
    switch (mobID) {//这里是内容复制到新的event内 如果没有monse
        case 100100://最后要显示输出伤害的怪物id 通畅都是最后的一个boss  那这里还是只记录最后一个 因为这里是触发公告 如果几个阶段BOSS都记录上海 就 上面该 N(最后打死BBOSSCHUFA触发这里 会显示伤害)
            /* 这里是打死BOSS执行通关 | eim player | 副本时间 | 副本名称  | 公告类型 */
            C_THREAD(eim, player, TimeA, "武陵图腾", 282);//这里是公告的时候显示副本名字 ，TIMEaJIUSHIFUBBEN就是服版本时间 他会计算消耗了的时间这里有好多个BOSS
            //var map = eim.getMapInstance(0);
            //map.spawnNpc(NPCID写这里, new java.awt.Point(-89, 314));
            /* 上面的内容是要复制的 */
            break;
    }
};

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        //player.eventRevive();
		player.heal();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(101050000);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function openRollNpc(eim) {//领奖励和结算功能   setupTask = em.schedule("openRollNpc", 1000 * 5 * 1, eim);
	for (var i = 0; i < eim.getPlayerCount(); i++) {
		//eim.getPlayers().get(i).openNpc(0, "道场奖励2");
		eim.getPlayers().get(i).setPQLog("道场二阶");
    }
	//10秒后继续ROLL点
}

function EndThisBattle(eim) {//结束离开功能
	for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).dropMessage(1, "[图腾副本]恭喜挑战成功！");
    }
    em.setProperty("state", "done");
    eim.disposeIfPlayerBelow(100, 101050000);
	if (setupTask!=null)
		setupTask.cancel(true);
	eim.dispose();
}
function clearPQ(eim) {
    scheduledTimeout(eim);
}
function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}

//这里最简单，我直接加 - -
/* 下面的内容要进行复制的 */
function C_THREAD(eim, Char, time, name, type) {
    var max = Math.max.apply(null, MaxDamage);
    var minutes = Math.floor((time - eim.getTimeLeft()) / (60 * 1000));
    var seconds = Math.floor((time - eim.getTimeLeft()) % (60 * 1000) / 1000);
    eim.setProperty("minutes", minutes);
    eim.setProperty("seconds", seconds);
    var Content = []
    var group = [];
    Content.push("　[ BOSS副本 ]　" + format(" ", 42, name.toString()));
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        var Player = eim.getPlayers().get(i)
        var limitBreak = Player.getStat().getLimitBreak(Player)
        if (Char.getParty().getLeader().getId() == Player.getId()) {
            Content.push("　[ 副本队长 ]　" + format(" ", 15, Player.getName().toString()) + "　武器破攻　" + format(" ", 22, (limitBreak).toString()));
        } else {
            Content.push("　[ 副本队员 ]　" + format(" ", 15, Player.getName().toString()) + "　武器破攻　" + format(" ", 22, (limitBreak).toString()));
        }
        var C_A = parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_A") / 1E8)
        var C_B = parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_C") / 1E8)
        var C_C = (parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_A")) / (minutes * 60 + seconds)) / 1E8

        if (DISPLAY) {
            Content.push("　[ 伤害数据 ]　" + format(" ", 43, ("BOSS血量 " + format(" ", 10, C_A.toString()) + " E").toString()));
            Content.push("　[ 伤害数据 ]　" + format(" ", 43, ("最高伤害 " + format(" ", 10, C_B.toString()) + " E").toString()));
            Content.push("　[ 伤害数据 ]　" + format(" ", 43, ("平均秒伤 " + format(" ", 10, C_C.toFixed(2).toString()) + " E").toString()));
        };
        group.push("[" + [Player.getId(), "'" + Player.getName() + "'", C_A] + "]");
    }
    Content.push("　[ 击杀时间 ]　" + format(" ", 42, ("" + minutes + " 分钟 " + seconds + " 秒").toString()));
    Content.push("　[ 全场最佳 ]　" + format(" ", 42, MaxName[MaxDamage.indexOf(max)].toString()));
    for (var i in Content) {
        em.worldSpouseMessage(0x16, Content[i]);
    }

    //em.worldMessageEffect("玩家 " + Char.getParty().getLeader().getName() + " 挑战排行榜副本： " + name + " 时间： " + minutes + " 分钟 " + seconds + " 秒 !!!", type, 10);
    eim.setProperty("groupgame", "[" + group + "]");
    //eim.getPlayers().get(0).openNpc(0, "goodtext");
}

function Register(eim, chr) {
    var DOMList = ["-D_A", "-D_D", "-D_B", "-D_C"];
    for (var i in DOMList) {
        eim.setProperty(chr.getId() + DOMList[i], "0");
    }
}
function C_UP(eim, chr, damage) {
    D_A = parseInt(eim.getProperty(chr.getId() + "-D_A"));//累计值
    D_B = parseInt(eim.getProperty(chr.getId() + "-D_B"));//攻击值
    D_C = parseInt(eim.getProperty(chr.getId() + "-D_C"));//最高值
    D_A += parseInt(Math.abs(damage))
    D_B += 1
    D_D = parseInt(Math.abs(damage))//伤害值
    eim.setProperty(chr.getId() + "-D_D", String(D_D));
    eim.setProperty(chr.getId() + "-D_B", String(D_B));
    eim.setProperty(chr.getId() + "-D_A", String(D_A));
    if (parseInt(Math.abs(damage)) > D_C) {
        eim.setProperty(chr.getId() + "-D_C", String(Math.abs(damage)));
    }
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        MaxDamage[i] = parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_A"));
        MaxName[i] = eim.getPlayers().get(i).getName();
    }
    var max = Math.max.apply(null, MaxDamage);
}

var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}

function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}