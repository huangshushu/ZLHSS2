function start() {
    var em = cm.getEventManager("GuildQuest");
    var eim = cm.getEventInstance();
    cm.changeMusic("Bgm10/Eregos");
    var mobid = 9300028;//BOSS
    var mob = cm.getMonster(mobid);
    var modified = em.newMonsterStats();
    cm.guildMessage("恐怖的黑暗力量出现了。");
    modified.setOHp(5000000000);//50E
    modified.setOMp(mob.getMobMaxMp() * 10);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(990000900);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(351, 101));

    mobid = 9300031;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(50000000);//5000W
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    //eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(990000900);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(130, 90));
    
    mobid = 9300032;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(50000000);//5000W
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(990000900);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(540, 90));
    
    mobid = 9300029;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(50000000);//5000W
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(990000900);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(130, 150));
    
    mobid = 9300030;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(50000000);//5000W
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(990000900);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(540, 150));
    cm.dispose();
}
