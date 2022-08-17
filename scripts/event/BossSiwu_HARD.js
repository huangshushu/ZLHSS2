/*
* 联系QQ : 2023995613 ( Hs、) 
* 支持各式脚本、开区策划、脚本优化
*/


var reviveCount = 10;
var Bossmap = 940205500;
var backMap=101050000;
var BossCode=9601295;
var Duration = 60 * 1000 * 60;
var BossName="钟馗";
var 血量 = 2000000000000000000
﻿
function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    em.setProperty("state", "1");
    var eim = em.newInstance("BossSiwu_HARD");
    var map = eim.setInstanceMap(Bossmap);
	map.resetFully();
	map.killAllMonsters(true);	
	var mob = em.getMonster(BossCode);
	mob.getStats().setChange(true);
	mob.changeLevel(275);
	mob.getChangedStats().setOHp(血量);
	mob.setHp(血量);
	eim.registerMonster(mob);
	var map = eim.getMapInstance(0);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-24,217));
	
	eim.setProperty("HPstate", "1");
	eim.setProperty("isGift", "0");
	eim.schedule("summonFall", 10000);
	eim.schedule("summonMob", 30000);
	
	eim.schedule("showRanking", 30000);
	
    eim.startEventTimer(Duration);
    return eim;
}

function playerEntry(eim, player) {
	eim.setProperty("BossName", "钟馗");
	eim.setProperty("TotalDamage", "0");
	eim.setProperty("Damage"+player.getName(), "0");
    var map = eim.getMapInstance(0);
	player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
	var map = player.getSpecialreviveCount() > 0 ? player.getMap() : eim.getMapFactoryMap(910000000);
	player.SpecialDeathRevive(map, map.getPortal(0),new java.awt.Point(0, 0));
	return true;
}

function scheduledTimeout(eim) {
	var isGift=eim.getProperty("isGift");
     if(isGift=="0") {
		eim.setProperty("HPstate", "-1");
	    eim.setProperty("isGift", "1");
		eim.schedule("openGifts", 1000);
		eim.startEventTimer(1000*30);
		eim.broadcastWeatherEffectNotice("[ 副本公告 ] : 副本已结束 系统将自动进行结算 , 请耐心等候", 153, 10);
	} else {
		end(eim);
	}
}

function changedMap(eim, player, mapid) {
    if (mapid != Bossmap) {
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

function monsterValue(eim, mobId) {
		var map = eim.getMapInstance(0);
    	switch (mobId) {
			case 9601295:	
				eim.setProperty("HPstate", "-1");
				eim.setProperty("isGift", "1");
				eim.schedule("openGifts", 1000);
				eim.startEventTimer(1000*30);
				eim.broadcastWeatherEffectNotice("[ 副本公告 ] : 副本已结束 系统将自动进行结算 , 请耐心等候", 153, 10);
			break;
    }
}

function openGifts(eim){
	openNpc(eim, 1540008, "远征奖励");
}

function score(eim){
	var score=0;
	var revive=eim.getProperty("revive");
	score=score+revive*10;
	score=score+Math.floor(100*(eim.getTimeLeft()/Duration));
}

function monsterDamaged(eim,player, mobID, damage){
  if(mobID==BossCode){
    var X = parseInt(eim.getProperty("TotalDamage"));
    X += damage;
    var Y = parseInt(eim.getProperty("Damage"+player.getName()));
    Y += damage;
    eim.setProperty("Damage"+player.getName(), String(Y));
    eim.setProperty("TotalDamage", String(X));
    eim.getMapInstance(0).sendMapEffect("目前 "+BossName+" 受到的总伤害 : "+X,284,3*1000);
  }
}

function summonFall(eim) {
	var state = parseInt(eim.getProperty("HPstate"));
	var time = 10000;
	if (state > 0) {
		var map = eim.getMapInstance(0);
		map.obtacleFall(12, 0x4f, 0x4f, 0, 0, 800, 10, 173, 1, 4, 100, 200);
		eim.schedule("summonFall", time);
	}
}

function showRanking(eim) {
	var state = parseInt(eim.getProperty("HPstate"));
	if (state > 0) {
		var list=new Array();
		for (var i = 0; i < eim.getPlayerCount() ; i++) {
			var playName = eim.getPlayers().get(i).getName();
			var son=new Array(playName,parseInt(eim.getProperty("Damage"+playName)));
			list.push(son);	
		}
		list.sort(function(a,b){
					return b[1] - a[1];
				})
		for (var i = 0; i < eim.getPlayerCount() ; i++) {
			eim.getPlayers().get(i).dropSpouseMessage(-1,"    远征队实时输出排行榜 < 每 15 秒进行更新 >");
			eim.getPlayers().get(i).dropSpouseMessage(-1,"/-------------------------------------------------/");
			for(var n in list)	{
				var txt="    第 "+(parseInt(n)+1)+" 名 " + format(" ", 10, list[n][0].toString())+" 总输出 : " + format(" ", 12, (parseInt(list[n][1]/100000000).toFixed(0).toString()).toString())+" (亿)";
				eim.getPlayers().get(i).dropSpouseMessage(-1,txt);

			}
	     		eim.getPlayers().get(i).dropSpouseMessage(-1,"/-------------------------------------------------/");
		}
		eim.schedule("showRanking", 15000);
	}
}

function summonMob(eim) {
    var map= eim.getMapInstance(0);
    var mob = em.getMonster(8500009);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(47, 218));
	var mob1 = em.getMonster(8500009);
	map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(-511, -64));
	var mob2 = em.getMonster(8500009);
	map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(593, -218));
	var mob3 = em.getMonster(8500009);
	map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(-625, -218));
	var mob4 = em.getMonster(8500009);
	map.spawnMonsterOnGroundBelow(mob4, new java.awt.Point(560, -93));
	var mob5 = em.getMonster(8500009);
	map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(847, -369));
	var mob6 = em.getMonster(8500009);
	map.spawnMonsterOnGroundBelow(mob6, new java.awt.Point(-1027, -269));
	var mob7 = em.getMonster(8500009);
	map.spawnMonsterOnGroundBelow(mob7, new java.awt.Point(-513, -442));	
    if (em.getProperty("state").equals("1")) {
        eim.schedule("summonMob", 30000);
		
    }
}

function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, backMap)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}
function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
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
