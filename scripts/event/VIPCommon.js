var eventName="VIPCommon";//脚本名称
var reviveCount = 99;//复活次数
var backMap=101050000;//副本结束后，返回的地图
var mapcode=940200505;//地图ID
var mobcode=new Array(
	//怪物ID，每次刷新数量，X轴坐标，Y轴坐标（可以通过!mapinfo命令查看当前角色所在坐标位置）
	Array(9410160,5,1441,-31),
	Array(9410160,5,1444,-31),
	Array(9410160,5,1723,-31)
);

var dropItems = new Array(9410160,
		//怪物ID，物品ID，爆率，最小值，最大值
		new Array(9410160, 4001126, 100, 8, 8)//枫叶
	);
	
var spawnTime=1000*3;//怪物刷新时间 1000=1秒 （刷新机制为：当角色刚进副本或者地图上的怪都被消灭后开始倒计时刷新）
var Time=1000 * 60 * 10;//副本持续时间 1000=1秒

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    em.setProperty("summon", "0");
    var eim = em.newInstance(eventName+leaderid);
    var map = eim.createInstanceMap(mapcode);
	map.resetFully();
	map.killAllMonsters(true);
	eim.schedule("summonMob", 1000);
	eim.startEventTimer(Time); 
	return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}
function changedMap(eim, player, mapid) {
    if (mapid != mapcode) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}
function playerRevive(eim, player) {
   	return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, backMap);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}



function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.restReviveCount();
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
	eim.schedule("summonMob", spawnTime);
}

function summonMob(eim)
{
	var map = eim.getMapInstance(0);
	for(var i in mobcode)
	{
		for(var n=0;n<mobcode[i][1];n++)
		{
			var mob = em.getMonster(mobcode[i][0]);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobcode[i][2], mobcode[i][3]));
			eim.registerMonster(mob);
		}
	}
}

function monsterDrop(eim, player, mob) {
	var mobid = mob.getId();
	var toDrop = new Array();
	var partySize=eim.getPlayerCount();
	for (var i = 0; i < dropItems.length; i++) {
		if (mobid != dropItems[i][0])
			continue;
		var chance = random(1, 100); //爆率
		chance=chance-partySize*10;
		if (chance < dropItems[i][2]) {
			var minQuantity = dropItems[i][3];
			var maxQuantity = dropItems[i][4];
			var quantity = Math.floor(Math.random() * (maxQuantity - minQuantity + 1) + minQuantity);
			toDrop.push(new Array(dropItems[i][1], quantity)); //载入暴率数组
		}
	}
	for (var i = 0; i < toDrop.length; i++) {
		if (player.getMap() != null)
			player.getMap().spawnMobDrop(em.newItem(toDrop[i][0], 0, toDrop[i][1]), new java.awt.Point(mob.getTruePosition().getX() + 25 * i, mob.getTruePosition().getY()), mob, player, 2, 0);
	}
}


function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
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