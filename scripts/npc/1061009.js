/*
 重新改写打教官脚本by:Kodan
 */

var msg = "";

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var nextmap1 = cm.getMapFactory().getMap(108010201);
    var nextmap2 = cm.getMapFactory().getMap(108010301);
    var nextmap3 = cm.getMapFactory().getMap(108010101);
    var nextmap4 = cm.getMapFactory().getMap(108010401);
    var nextmap5 = cm.getMapFactory().getMap(108010501);
    var nextmap11 = cm.getMapFactory().getMap(108010200);
    var nextmap22 = cm.getMapFactory().getMap(108010300);
    var nextmap33 = cm.getMapFactory().getMap(108010100);
    var nextmap44 = cm.getMapFactory().getMap(108010400);
    var nextmap55 = cm.getMapFactory().getMap(108010500);

    if (cm.getPlayer().getLevel() >= 70) {
        if (cm.canHold(4031059)) {
            if (!(cm.haveItem(4031059))) {
                if (nextmap1.mobCount() > 0 && nextmap1.playerCount() == 0 && nextmap11.playerCount() == 0) {
                    nextmap1.killAllMonsters(true);
                } else if (nextmap2.mobCount() > 0 && nextmap2.playerCount() == 0 && nextmap22.playerCount() == 0) {
                    nextmap2.killAllMonsters(true);
                } else if (nextmap3.mobCount() > 0 && nextmap3.playerCount() == 0 && nextmap33.playerCount() == 0) {
                    nextmap3.killAllMonsters(true);
                } else if (nextmap4.mobCount() > 0 && nextmap4.playerCount() == 0 && nextmap44.playerCount() == 0) {
                    nextmap4.killAllMonsters(true);
                } else if (nextmap5.mobCount() > 0 && nextmap5.playerCount() == 0 && nextmap55.playerCount() == 0) {
                    nextmap5.killAllMonsters(true);
                }
                switch (cm.getPlayer().getMapId()) {
                    case 100040106:
                        if (cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230) {
                            if (nextmap11.playerCount() != 0 || nextmap1.playerCount() != 0) {
                                check();
                                return;
                            }
                            cm.warp(108010200, 0);
                            cm.spawnMobOnMap(9001001, 1, -276, -3, 108010201);
                            cm.sendOk("法师3转的试炼即将开始!!");
                        } else {
                            cm.sendOk("没有达到标准0.0");
                        }
                        break;
                    case 105070001:
                        if (cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130) {
                            if (nextmap2.playerCount() != 0 && nextmap22.playerCount() != 0) {
                                check();
                                return;
                            }
                            cm.warp(108010300, 0);
                            cm.spawnMobOnMap(9001000, 1, -276, -3, 108010301);
                            cm.sendOk("剑士3转的试炼即将开始!!");
                        } else {
                            cm.sendOk("没有达到标准0.0");
                        }
                        break;
                    case 105040305:
                        if (cm.getJob() == 310 || cm.getJob() == 320) {
                            if (nextmap3.playerCount() != 0 || nextmap33.playerCount() != 0) {
                                check();
                                return;
                            }
                            cm.warp(108010100, 0);
                            cm.spawnMobOnMap(9001002, 1, -276, -3, 108010101);
                            cm.sendOk("弓箭手3转的试炼即将开始!!");
                        } else {
                            cm.sendOk("没有达到标准0.0");
                        }
                        break;
                    case 107000402:
                        if (cm.getJob() == 410 || cm.getJob() == 420) {
                            if (nextmap4.playerCount() != 0 || nextmap44.playerCount() != 0) {
                                check();
                                return;
                            }
                            cm.warp(108010400, 0);
                            cm.spawnMobOnMap(9001003, 1, -276, -3, 108010401);
                            cm.sendOk("盗贼3转的试炼即将开始!!");
                        } else {
                            cm.sendOk("没有达到标准0.0");
                        }
                        break;
                    case 105070200:
                        if (cm.getJob() == 510 || cm.getJob() == 520) {
                            if (nextmap5.playerCount() != 0 || nextmap55.playerCount() != 0) {
                                check();
                                return;
                            }
                            cm.warp(108010500, 0);
                            cm.spawnMobOnMap(9001004, 1, -276, -3, 108010501);
                            cm.sendOk("海盗3转的试炼即将开始!!");
                        } else {
                            cm.sendOk("没有达到标准0.0");
                        }
                        break;
                }
            } else {
                cm.sendOk("你貌似已经有了#t4031059#。");
            }
        } else {
            cm.sendOk("请确认是否有足够的空间。");
        }
    } else {
        cm.sendOk("等级好像不正确。");
    }
    cm.dispose();
}

function check() {
    msg = "里面有人在挑战。";
    cm.sendNext(msg);
    cm.dispose();
}
