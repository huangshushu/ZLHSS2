/*  制作:修彼德蔓   
 *  黑魔法师副本  
    /* mobid = 8880303;//
    mob = em.getMonster(mobid);
    mob.changeLevel(250);
    mob.getChangedStats().setOHp(40000000000000);
    mob.setHp(40000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450013300);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(286, 215));*/

var reviveCount = 0;
var TimeA = 1000 * 60 * 40;
var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var MapList = Array(
        450013100, 
        450013300,
		450013500,
        450013700
        );


function init() {
    em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    var eim = em.newInstance("BlackMage");
    for (var i = 0; i < MapList.length; i++) {
        var map = eim.setInstanceMap(MapList[i]);
        map.resetPQ(level);
        map.resetFully();
        map.killAllMonsters(true);
    }
    
    em.setProperty("state", "1");
	em.setProperty("leader", "true");
    
    mobid = 8880500;//剑灵
    mob = em.getMonster(mobid);
    mob.changeLevel(270);
    mob.getChangedStats().setOHp(50000000000000);
    mob.setHp(50000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450013100);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-595, 85));
	
	mobid = 8880501;//剑灵
    mob = em.getMonster(mobid);
    mob.changeLevel(270);
    mob.getChangedStats().setOHp(50000000000000);
    mob.setHp(50000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450013100);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(345, 85));
	
	mobid = 8880502;//魔法师本体
    mob = em.getMonster(mobid);
    mob.changeLevel(270);
    mob.getChangedStats().setOHp(2000000000000000);
    mob.setHp(2000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450013300);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0, 88));
	
	mobid = 8880504;//魔法师2阶段
    mob = em.getMonster(mobid);
    mob.changeLevel(270);
    mob.getChangedStats().setOHp(1000000);
    mob.setHp(50000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450013500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0, 85));
	
	mobid = 8645043;//次元射线
    mob = em.getMonster(mobid);
    mob.changeLevel(270);
    mob.getChangedStats().setOHp(1000000000000);
    mob.setHp(1000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450013500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0, 85));
	
	
	eim.startEventTimer(TimeA);// 40分钟 
	eim.schedule("summonFall", 2000);
	eim.schedule("stage1", 7000);//第一关小怪
    return eim;
}
function stage1(eim) {
	 	var map = eim.getMapInstance(450013100);
    		for (var i = 0; i < 10; i++) {
         	var mob = em.getMonster(8644604);//掉落
	    modified = em.newMonsterStats();
	    modified.setOHp(500000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1600 -i * 320,85));

			}
			map.startMapEffect("屠杀吧!我的士兵们!", 5120182);
			eim.schedule("stage1", 20000);
}

function stage2(eim) {
	 	var map = eim.getMapInstance(450013300);
    		
			for (var i = 0; i < 2; i++) {
         	var mob = em.getMonster(8644630);//锁链
	    modified = em.newMonsterStats();
	    modified.setOHp(400000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400-i*800,88));

			}
			map.startMapEffect("光明与黑暗剑灵不会白白送死的!!!", 5120182);
			eim.schedule("stage2", 15000);
}

function stage3(eim) {
	 	var map = eim.getMapInstance(450013300);
		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(8644628);//内核
	    modified = em.newMonsterStats();
	    modified.setOHp(500000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,88));

			}
			
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(8880507);//左墙
	    modified = em.newMonsterStats();
	    modified.setOHp(1000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-700,88));

			}
			
			for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(8880508);//右墙
	    modified = em.newMonsterStats();
	    modified.setOHp(1000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(700,88));

			}
			
			
}

function stage4(eim) {//第二阶段闪电
        
		
	 	var map = eim.getMapInstance(450013300);
    		for (var i = 0; i < 2; i++) {
         	var mob = em.getMonster(8880506);
	    modified = em.newMonsterStats();
	    modified.setOHp(3000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(550 -i * 1100,88));

			}
			for (var i = 0; i < 2; i++) {
         	var mob = em.getMonster(8880506);
	    modified = em.newMonsterStats();
	    modified.setOHp(3000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(200 -i * 400,88));

			}
			map.startMapEffect("帮我捉拿那个泄密者!修彼德蔓!", 5120182);
		
			eim.schedule("stage4", 30000);
}

function stage5(eim) {//第三阶段放射物
		
	 	var map = eim.getMapInstance(450013500);
    		for (var i = 0; i < 2; i++) {
         	var mob = em.getMonster(8880509);
	    modified = em.newMonsterStats();
	    modified.setOHp(5000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(500-i*1000,85));

			}
			for (var i = 0; i < 2; i++) {
         	var mob = em.getMonster(8880510);
	    modified = em.newMonsterStats();
	    modified.setOHp(5000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(250-i*500,85));

			}
			for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(8880511);
	    modified = em.newMonsterStats();
	    modified.setOHp(5000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,85));

			}
			map.startMapEffect("黑魔法师拥有创造与破坏的技能,必须躲避他的射线!", 5120182);
}

function stage6(eim) {
	 	var map = eim.getMapInstance(450013500);
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8644645);
	    modified = em.newMonsterStats();
	    modified.setOHp(50000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(700 -i * 280,85));

			}
			map.startMapEffect("想要击败神的旨意,必须选择创造与破坏的力量与之抗衡", 5120182);
			eim.schedule("stage6", 20000);
}
function stage7(eim) {
	 	var map = eim.getMapInstance(450013700);
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(8880504);
	    modified = em.newMonsterStats();
	    modified.setOHp(50000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,218));

			}
			//map.startMapEffect("看他的样子,像是拥有了神的技能,即便他是神,也必须为了大家将他挡下", 5120182);
			
}

function stage8(eim) {
	 	var map = eim.getMapInstance(450013700);
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(8644611);
	    modified = em.newMonsterStats();
	    modified.setOHp(10000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,218));

			}
			map.startMapEffect("看他的样子,像是拥有了神的技能,即便他是神,也必须为了大家将他挡下", 5120182);
			eim.schedule("stage8", 15000);
			
}
function stage9 (eim) {
	eim.setProperty("giftcount","0");
		roll(eim);
		eim.startEventTimer(1000 * 60 * 5);
		var map = eim.getMapInstance(450013700);
		map.startMapEffect("[黑魔法师] 已通关，10秒后将开启全队掷骰奖励", 5120182);
}
function playerEntry(eim, player) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
    }
    if (i <= 1) {
        eim.setProperty("Name", "[ 终 级 ] 黑魔法师");
        eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
    }
    var map = eim.getMapInstance(0);
	player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}




function changedMap(eim, player, mapid) {
	
    switch (mapid) {
        case 450013100: // 
            em.setProperty("state", "1");
            var map = eim.getMapInstance(450013100);
            break;

        case 450013300:
            em.setProperty("state", "2");
            var map = eim.getMapInstance(450013300);
            break;

        case 450013500:
            em.setProperty("state", "3");
            var map = eim.getMapInstance(450013500);
            break;
        case 450013700:
            em.setProperty("state", "4");
            var map = eim.getMapInstance(450013700);
            break;

    }

    switch (mapid) {
        case 450013100:
        case 450013300:
        case 450013500:
		case 450013700:
            return;
    }
    player.dropMessage(6, "[黑魔法师] 已退出挑战。");
    eim.unregisterPlayer(player);
	if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
}


function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}
function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(0, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}
function monsterValue(eim, mobid) {
    switch (mobid) {
        case 8880501:
		    eim.schedule("stage2", 10000);
			eim.schedule("stage3", 5000);
			eim.schedule("stage4", 25000);
            var mapA = eim.getMapInstance(450013300);
            for (var i = 0; i < eim.getPlayerCount() ; i++) {
                eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
            }
            break;

        case 8880502:
		   eim.schedule("stage5", 5000);
		   eim.schedule("stage6", 10000);
            var mapA = eim.getMapInstance(450013500);
            for (var i = 0; i < eim.getPlayerCount() ; i++) {
                eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
            }
            break;
		
		case 8880504:
		    if (em.getProperty("state").equals("4")==true) {
				eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (60 * 1000)));
            eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (60 * 1000) / 1000));
            openNpc(eim, 1540008, "TimCareU");
			eim.schedule("stage9", 5000);
			} else {
		    eim.schedule("stage7", 15000);
			eim.schedule("stage8", 5000);
            var mapA = eim.getMapInstance(450013700);
            for (var i = 0; i < eim.getPlayerCount() ; i++) {
                eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
            }
			}
            break;

        case 2600800:
		    
            
           
            break;

    }
    return 1;
}

function summonFall(eim) {
    var state = parseInt(em.getProperty("state"));
    
    switch (state) {
        case 1:
		    var time = 3000;
            var map = eim.getMapInstance(MapList[state-1]);
            if (map != null) {
             map.obtacleFall(6, 65, 67);
               eim.schedule("summonFall", time);
            }
        break;
		case 2:
		    var time = 3000;
            var map = eim.getMapInstance(MapList[state-1]);
            if (map != null) {
             map.obtacleFall(6, 75, 75);
               eim.schedule("summonFall", time);
            }
        break;
		case 3:
		    var time = 6000;
            var map = eim.getMapInstance(MapList[state-1]);
            if (map != null) {
             map.obtacleFall(5, 76, 77);
               eim.schedule("summonFall", time);
            }
        break;
		case 4:
		    var time = 10000;
            var map = eim.getMapInstance(MapList[state-1]);
            if (map != null) {
             map.obtacleFall(5, 79, 79);
               eim.schedule("summonFall", time);
            }
        break;
	}
	
}

function roll(eim) {
	MaxRandom = 0;
	var count = eim.getProperty("giftcount");
	var rewardPlayer = null;
	//第二次开始,统计上一次ROLL点玩家结果，并发放奖励。
	if ((count*1)>=1) {
		for (var i = 0; i < eim.getPlayerCount(); i++) {
			var charName = eim.getPlayers().get(i).getName();
			var charId = eim.getPlayers().get(i).getId();
			//推送ROLL点信息
			for (var j = 0; j < eim.getPlayerCount(); j++) {
				var notice =  "[黑魔法师] 玩家 "+charName+" 掷出了 "+eim.getProperty("charid_"+charId)+"点";
				if ((eim.getProperty("charid_"+charId)*1)==0) {
					notice =  "[黑魔法师] 玩家 "+charName+" 放弃了掷点";
				}
				eim.getPlayers().get(j).dropMessage(6,notice);
			}
			//不断重置最大值
			if ((eim.getProperty("charid_"+charId)*1)>MaxRandom) {
				MaxRandom = eim.getProperty("charid_"+charId);
				//置换玩家名称
				eim.setProperty("rewardplayer", charName);
				//置换玩家ID
				eim.setProperty("rewardplayerid", charId);
			} 
   		}
		for (var j = 0; j < eim.getPlayerCount(); j++) {
			//操作NPC 发放奖励
			eim.getPlayers().get(j).openNpc(1052008, "huangjinroll");
		}
	}
	for (var j = 0; j < eim.getPlayerCount(); j++) {
		//重置所有玩家ROLL点点数为零
		eim.setProperty("charid_"+eim.getPlayers().get(j).getId(),"0");
	}
	//次数+1
	eim.setProperty("giftcount", (count*1+1));
	//重新读入次数
	count = eim.getProperty("giftcount");
	count = (count*1);
	//退出战场
	if ((count*1)>6) {
		EndThisBattle(eim);
		return;
	}
	//创建几率
	var chance = Math.floor(Math.random()*200);
	//最终物品列表
	var finalItemList = Array();
	for(var m=0; m<itemList.length; m++) {
		if (itemList[m][1] >= chance) {
			finalItemList.push(itemList[m][0]);
		}
	}
	var currentItem = finalItemList[Math.floor(Math.random()*finalItemList.length)];

	eim.setProperty("rewarditem", currentItem);
	//延迟10秒打开ROLL点NPC
	setupTask = em.schedule("openRollNpc", 1000 * 5 * 1, eim);
}

function openRollNpc(eim) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {
		eim.getPlayers().get(i).openNpc(9073009);
    }
	//10秒后继续ROLL点
	setupTask = em.schedule("roll", 1000 * 5 * 1, eim);
}

var itemList=Array(
	Array(2430028, 200), //蜡笔全套
	Array(2614069, 3000), //5000万极限突破
	Array(2435087, 500), //神秘武器
	Array(2614069, 2000), //5000万极限突破
    Array(2614069, 2000), //5000万极限突破
	Array(2432599, 2000), //500积分
	Array(2432599, 2000), //500积分
	Array(2614077, 500), //5亿极限突破石
	Array(4310144, 500), //进击的巨人积分图章
	Array(2439919, 1000), //黑魔法师专属暗黑礼包
	Array(2614069, 1000), //5000万极限突破
	Array(2430028, 500), //蜡笔全套
	Array(2431191, 1000), //星星生成宝箱
	Array(2431191, 1000), //星星生成宝箱
	Array(2614074, 1000), //1亿极限突破
	Array(2614074, 1000), //1亿极限突破
	Array(2614074, 1000)，//1亿极限突破
);

function monsterKilled(eim, player, cp) {
}
function allMonstersDead(eim) {
}
function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}
function monsterDamaged(eim, player, mobid, damage) {
}
function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}
function leftParty(eim, player) {
    eim.disposeIfPlayerBelow(100, 101050000);
}
function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 101050000);
}
function onMapLoad(eim, player) {
}
function monsterDrop(eim, player, mob) {
}
function cancelSchedule() {
}

function playerDead(eim, player) {
}

function EndThisBattle(eim) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).dropMessage(1, "[黑魔法师] 挑战成功！");
    }
    em.setProperty("state", "done");
    eim.disposeIfPlayerBelow(100, 101050000);
	if (setupTask!=null)
		setupTask.cancel(true);
	eim.dispose();
}

function scheduledTimeout(eim) {
    eim.broadcastPlayerMsg(1, "[黑魔法师副本] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
    eim.disposeIfPlayerBelow(100, 101050000);
	em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

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