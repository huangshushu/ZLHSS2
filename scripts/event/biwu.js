/* 
 * 比武大会 QQ 贰五八三八一八一柒三 奴婢
 */

var item = Array(4001839,5281003,4001832,5010083,5010095,5010096,5010097,5010098,5010105,5010101,5010106,5010107,5010108,5010109,5010111,5010122,5010123,5010128,5121047,5121048,5121026,5160035,5160036,2432394,2431738,2431739,2431740,2049400,2049700,2049300,2000005,5010008,5010010,5010011,5010012,5010013,5010014,5010015,5010016,
//脸饰
5010017,5010018,5010019,5010021,5010022,5010023,5010024,5010025,5010027,5010028,5010029,5010030,5010031,5010032,5010033,5010034,5010035,5010038,5010039,5010041,5010042,5010043,5010045,5010051,5010052,5010053,5010054,5010055,5010056,5010057,5010058,5010059,5010060,5010061,5010063,5010064,
//点状
5010000,5010001,5010002,5010003,5010004,5010005,5010006,2022139,2022139,2022139,2022139,2004009,2004029,2004049,2004069,2022139,4310088,4033356); //稀有点装
var yp = Array(1,2,3,4,5,6,1,2,3,4,5,6,7); //邮票
var sjgw = Array(8620000,8620001,8620002,8620003,8620010,9300872,2700102,8220012,8144008,2220000,2600015); //guaiwu

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leader) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("biwu");
    eim.setInstanceMap(866500000).resetPQ(level);
    eim.setInstanceMap(866501000).resetPQ(level);
    eim.setInstanceMap(866010453).resetPQ(level);
    eim.setInstanceMap(866010454).resetPQ(level);
    eim.setInstanceMap(866010455).resetPQ(level);
	
	//1

    var map = eim.setInstanceMap(866500000);
    map.resetFully();
    em.getMapFactory().getMap(866500000).killAllMonsters(false);
    var mob = em.getMonster(9300431); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 900);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-100, 82));
	var sjgw1 = Math.floor(Math.random() * sjgw.length);
    var mob = em.getMonster(sjgw[sjgw1]); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 900);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-80, 82));
	var sjgw1 = Math.floor(Math.random() * sjgw.length);
    var mob = em.getMonster(sjgw[sjgw1]); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 900);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-60, 82));
	var sjgw1 = Math.floor(Math.random() * sjgw.length);
    var mob = em.getMonster(sjgw[sjgw1]); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 900);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-40, 82));
	
	
	//2
	var map = eim.setInstanceMap(866501000);
    map.resetFully();
    em.getMapFactory().getMap(866501000).killAllMonsters(false);
    var mob = em.getMonster(8880004); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 680);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-120, 82));
    var sjgw1 = Math.floor(Math.random() * sjgw.length);
    var mob = em.getMonster(sjgw[sjgw1]); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 100);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-140, 82));
    var sjgw1 = Math.floor(Math.random() * sjgw.length);
    var mob = em.getMonster(sjgw[sjgw1]); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 900);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-160, 82));
    var sjgw1 = Math.floor(Math.random() * sjgw.length);
    var mob = em.getMonster(sjgw[sjgw1]); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 100);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-180, 82));
	
	
	//3
	 var map = eim.setInstanceMap(866010453);
    map.resetFully();
    em.getMapFactory().getMap(866010453).killAllMonsters(false);
    var mob = em.getMonster(8220025); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 20000);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-130, 82));
	var sjgw1 = Math.floor(Math.random() * sjgw.length);
    var mob = em.getMonster(sjgw[sjgw1]); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 100);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-150, 82));
	 var sjgw1 = Math.floor(Math.random() * sjgw.length);
    var mob = em.getMonster(sjgw[sjgw1]); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 900);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-170, 82));
	var sjgw1 = Math.floor(Math.random() * sjgw.length);
    var mob = em.getMonster(sjgw[sjgw1]); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 100);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-190, 82));
	
	
	//4
	 var map = eim.setInstanceMap(866010454);
    map.resetFully();
    em.getMapFactory().getMap(866010454).killAllMonsters(false);
    var mob = em.getMonster(8220024); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 20000);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-120, 82));
	var sjgw1 = Math.floor(Math.random() * sjgw.length);
    var mob = em.getMonster(sjgw[sjgw1]); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 900);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-70, 82));
	var sjgw1 = Math.floor(Math.random() * sjgw.length);
    var mob = em.getMonster(sjgw[sjgw1]); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 900);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-50, 82));
	var sjgw1 = Math.floor(Math.random() * sjgw.length);
    var mob = em.getMonster(sjgw[sjgw1]); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 300);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-30, 82));
	
	
	//5
	 var map = eim.setInstanceMap(866010455);
    map.resetFully();
    em.getMapFactory().getMap(866010455).killAllMonsters(false);
    var mob = em.getMonster(8220026); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 20000);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-100, 82));
    var mob = em.getMonster(8220022); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 150000);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-130, 82));
    var mob = em.getMonster(8800200); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 500);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-160, 82));
	var sjgw1 = Math.floor(Math.random() * sjgw.length);
    var mob = em.getMonster(sjgw[sjgw1]); //怪物
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 100);
    modified.setOMp(mob.getMobMaxMp() * 900);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-190, 82));
	
	
	
    eim.startEventTimer(1000 * 60 * 60); //60 min
    return eim;
	
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function changedMap(eim, player, mapid) {
    if (mapid != 866010453 && mapid != 866010454 && mapid != 866010455 && mapid != 866500000 && mapid != 866501000) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 866010452);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 866010452);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
	eim.schedule("end", 1000 * 1);
}


function end(eim, player){
var iter = em.getInstances().iterator();
        while (iter.hasNext()) {
            var eim = iter.next();
            var pIter = eim.getPlayers().iterator();
            while (pIter.hasNext()) {
                var chr = pIter.next();
                //var winner = eim.getPlayers().get(0);
                var map = eim.getMapFactory().getMap(866010455);
                var randitem = Math.floor(Math.random() * item.length);
                var randyp = Math.floor(Math.random() * yp.length);
				for (var i = 0; i < yp[randyp]; i++) {
                    //map.spawnItemDrop(chr, chr, toDrop, chr.getPosition(), true, false);
		map.spawnAutoDrop(4001759,chr.getPosition());
                }
			//em.addById (em.player.getClient(),4001785,yp[randyp],"风雨森林的秘密获取");
              //  var toDrop = new Packages.client.inventory.Item(4001785, 0, 1);
                
		//var randx= Math.floor((Math.random()*3));
		//var xwsj= Math.floor((Math.random()*20))+30;
                //toDrop = new Packages.client.inventory.Item(item[randitem], 0, 1);
                //map.spawnItemDrop(winner, winner, toDrop, winner.getPosition(), true, false);
		//map.spawnAutoDrop(item[randitem],chr.getPosition());
		
		
		//em.broadcastYellowMsg("<终极组队挑战任务：风雨森林的秘密>恭喜您。巨大的粘液蜘蛛掉落" + yp[randyp] + "个椅子币和#z"+item[randitem]+"稀有装备！");
		
		em.broadcastYellowMsg("[终极][比武大会]恭喜您从比武大会中胜出！获得特别奖励！");
		em.broadcastServerMsg("[终极][比武大会]恭喜您。您从比武大会中获取" + yp[randyp] + "个椅子币和大量稀有物品！");
    em.broadcastServerMsg(5120093, "[终极][比武大会]三界冠军贝德罗斯第二波就已被阁下击败，阁下好身手。请在120秒内点击守护NPC离开挑战地图" ,true);
    
                
            }
        }eim.startEventTimer(1000 * 120); //120 min

}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
function monsterDrop(eim, player, mob) {}