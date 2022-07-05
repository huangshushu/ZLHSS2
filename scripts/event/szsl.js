var mapId = 940021000;

function init() {
    em.setProperty("state", "0");
	em.setProperty("state1", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("state1", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Vergamot" + leaderid);

    eim.setProperty("vergamotSummoned", "0");

    var map = eim.setInstanceMap(mapId);
    map.resetFully();
    eim.schedule("beginQuest", 1000);
    eim.schedule("pf", 1000 * 60 * 3);
    eim.startEventTimer(60 * 1000 * 60);//60����
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 940021000) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
			em.setProperty("state1", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
c
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function pf(eim) {
	if (em.getProperty("state1").equals("1")==true){
    	em.setProperty("state1", "2");
    	eim.schedule("pf", 1000 * 60 * 3);
	} else if (em.getProperty("state1").equals("2")==true){
    	em.setProperty("state1", "3");
    	eim.schedule("pf", 1000 * 60 * 6);
	} else if (em.getProperty("state1").equals("3")==true){
    	em.setProperty("state1", "4");
}
}


function end(eim) {
		var map = eim.getMapInstance(940021000);
		eim.broadcastPlayerMsg(1, "��Ԫ�����ѹرգ���ص����г�");
		eim.disposeIfPlayerBelow(100, 910000000);
		em.setProperty("state", "0");
		em.setProperty("state1", "0");
		em.setProperty("leader", "true");
}
 
function monsterSpawn(eim) {
	 	var map = eim.getMapInstance(940021000);
		var pfB = em.showEffect("Visitor/RankB");
		var pfA = em.showEffect("Visitor/RankA");
		var pfF = em.showEffect("Visitor/RankF");
		var pfS = em.showEffect("Visitor/RankS");
		var packetsnd = em.playSound("rootabyss/firework");
	 	if (em.getProperty("state").equals("1")==true){
		//player.getMap().startMapEffect("����������10��󵽴�,��ץ������,,��ǰ��Ϯ��������" + map.getAllMonstersThreadsafe().size() + "", 5120092);
			map.startMapEffect("[С��ţ��]����20��������Ϯ��������ý�����", 5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610005);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610006);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610007);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610008);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
		em.setProperty("state", "2");
		 } else if (em.getProperty("state").equals("2")==true) {
			map.startMapEffect("[С��ţ��]�ڶ������������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("�ڶ������������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 6; i++) {
         	var mob = em.getMonster(8610005);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 6; i++) {
         	var mob = em.getMonster(8610006);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 6; i++) {
         	var mob = em.getMonster(8610007);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 6; i++) {
         	var mob = em.getMonster(8610008);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
		em.setProperty("state", "3");
		 } else if (em.getProperty("state").equals("3")==true) {
			map.startMapEffect("[С��ţ��]���������������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("���������������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610005);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610006);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610007);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610008);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "4");
		 	} else if (em.getProperty("state").equals("4")==true) {
			map.startMapEffect("[С��ţ��]���Ĳ����������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("���Ĳ����������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610009);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610010);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610011);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610012);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "5");
		 	} else if (em.getProperty("state").equals("5")==true) {
			map.startMapEffect("[С��ţ��]���岨���������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("���岨���������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 8; i++) {
         	var mob = em.getMonster(8610009);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 8; i++) {
         	var mob = em.getMonster(8610010);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 8; i++) {
         	var mob = em.getMonster(8610011);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 8; i++) {
         	var mob = em.getMonster(8610012);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "6");
		 	} else if (em.getProperty("state").equals("6")==true) {
			map.startMapEffect("[С��ţ��]���������������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("���������������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610009);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610010);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610011);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610012);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "7");
		 	} else if (em.getProperty("state").equals("7")==true) {
			map.startMapEffect("[С��ţ��]���߲����������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("���߲����������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610009);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610010);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610011);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610012);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "8");
		 	} else if (em.getProperty("state").equals("8")==true) {
			map.startMapEffect("[С��ţ��]�ڰ˲����������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("�ڰ˲����������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610009);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610010);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610011);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610012);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "9");
		 	} else if (em.getProperty("state").equals("9")==true) {
			map.startMapEffect("[С��ţ��]�ھŲ����������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("�ھŲ����������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610009);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610010);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610011);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610012);//����
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "10");
		 	} else if (em.getProperty("state").equals("10")==true) {
			map.startMapEffect("[С��ţ��]��ʮ�����������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("��ʮ�����������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610018);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610019);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610020);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610021);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "11");
		 	} else if (em.getProperty("state").equals("11")==true) {
			map.startMapEffect("[С��ţ��]��ʮһ�����������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("��ʮһ�����������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610018);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610019);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610020);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610021);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "12");
		 	} else if (em.getProperty("state").equals("12")==true) {
			map.startMapEffect("[С��ţ��]��ʮ�������������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("��ʮ�������������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610018);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610019);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610021);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610020);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "13");
		 	} else if (em.getProperty("state").equals("13")==true) {
			map.startMapEffect("[С��ţ��]��ʮ�������������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("��ʮ�������������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610018);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610019);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610020);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610021);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "14");
		 	} else if (em.getProperty("state").equals("14")==true) {
			map.startMapEffect("[С��ţ��]��ʮ�Ĳ����������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("��ʮ�Ĳ����������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610018);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610019);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610020);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610021);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "15");
		 	} else if (em.getProperty("state").equals("15")==true) {
			map.startMapEffect("[С��ţ��]��ʮ�岨���������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("��ʮ�岨���������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610018);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610019);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610020);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610021);//����
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "16");
		 	} else if (em.getProperty("state").equals("16")==true) {
			map.startMapEffect("[С��ţ��]��ʮ�������������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("��ʮ�������������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850000);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850001);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850002);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850003);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "17");
		 	} else if (em.getProperty("state").equals("17")==true) {
			map.startMapEffect("[С��ţ��]��ʮ�߲����������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("��ʮ�߲����������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850000);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850001);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850002);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850003);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "18");
		 	} else if (em.getProperty("state").equals("18")==true) {
			map.startMapEffect("[С��ţ��]��ʮ�˲����������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("��ʮ�˲����������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850000);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850001);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850002);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850003);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "19");
		 	} else if (em.getProperty("state").equals("19")==true) {
			map.startMapEffect("[С��ţ��]��ʮ�Ų����������ץ��ʱ����������", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("��ʮ�Ų����������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850000);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850001);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850002);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850003);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "20");
		 	} else if (em.getProperty("state").equals("20")==true) {
			map.startMapEffect("[С��ţ��]���һ�������������־���ʤ��", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("�ڶ�ʮ�����������ץ��ʱ����������",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850000);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2076,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850001);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2507,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850002);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2967,29)); //ˢ���������
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850003);//����
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3407,29)); //ˢ���������
			}
			em.setProperty("state", "21");
		 } else if (em.getProperty("state").equals("21")==true) {
			if(em.getProperty("state1").equals("4")==true) {
			map.broadcastMessage(pfB);
			map.broadcastMessage(packetsnd);
			} else if (em.getProperty("state1").equals("3")==true) {
			map.broadcastMessage(pfA);
			map.broadcastMessage(packetsnd);
			} else if (em.getProperty("state1").equals("2")==true) {
			map.broadcastMessage(pfF);
			map.broadcastMessage(packetsnd);
			} else if (em.getProperty("state1").equals("1")==true) {
			map.broadcastMessage(pfS);
			map.broadcastMessage(packetsnd);
			}
		map.spawnNpc(9020009, new java.awt.Point(2699,29));
		eim.schedule("likai", 1000 * 60);
		map.broadcastMessage(em.getClock(60));
			map.startMapEffect("[С��ţ��]һ�����к��˳����뾡����ȡ���NPC��ȡ�������˳�", 5120092);
        	//em.getMapFactory().getMap(940021000).startSimpleMapEffect("1�����к󽫹رմ�Ԫ���磬�뾡����ȡ���NPC��ȡ�������˳�",5120092);
			 }
			 }

function allMonstersDead(eim) {
		var map = eim.getMapInstance(940021000);
	 	eim.schedule("monsterSpawn", 1000);
		}

function beginQuest(eim) {
		em.getMapFactory().getMap(940021000).startMapEffect("[С��ţ��]10����һ���ڰ���ʿ������ɵ����ǣ���", 5120092);
        	//em.getMapFactory().getMap(940021000).startSimpleMapEffect("10����һ����Ԫ�����߽������ֹ���ǣ���",5120092);
		eim.schedule("monsterSpawn", 10000);
		}

function likai(eim) {
		var map = eim.getMapInstance(940021000);
		eim.broadcastPlayerMsg(1, "��Ԫ�����ѹرգ���ص����г�");
		eim.disposeIfPlayerBelow(100, 910000000);
		em.setProperty("state", "0");
		em.setProperty("state1", "0");
		em.setProperty("leader", "true");
		}
function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}