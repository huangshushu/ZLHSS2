/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：职业头任务，地狱入口
 地图；105050400
 */
var 等级 = 50;
var 道具 = 4032496;
var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getPlayer().getMapId() == 105050400) {
            if (cm.getPlayer().getLevel() < 等级 && cm.haveItem(道具)) {
                cm.sendYesNo("你想进入 #b#m677000010##k 吗？");
            } else {
                cm.sendOk("你需要少于 #b"+等级+"#k 级并且需要 #v"+道具+"# #b#t"+道具+"##k 才能进入");
                cm.dispose();
            }
        } else if (cm.getPlayer().getMapId() == 677000011) {
            /*if (cm.getParty() == null) {
                cm.sendOk("请开启组队。");
            } else {
                var party = cm.getParty().getMembers();
                var mapId = cm.getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;
                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    if ((cPlayer.getLevel() >= 10 && cPlayer.getLevel() < 等级) || cPlayer.getJobId() == 900) {
                        levelValid += 1;
                    } else {
                        next = false;
                    }
                    if (cPlayer.getMapid() == mapId) {
                        inMap += 1;
                    }
                }
				//这里是屏蔽必须2个人
                if (party.size() < 2 || inMap < 2) {
                    next = false;
                }
                if (!next) {
                    cm.sendOk("不能开启副本，等级不符合。");
                    cm.dispose();
                    return;
                }
            }*/
            cm.warp(677000013, 0);
            cm.dispose();
        } else if (cm.getPlayer().getMapId() == 677000013) { 
            if (cm.getPlayer().getLevel() < 200 && cm.haveItem(道具)) {
                if (cm.getParty() == null) {
                    cm.sendOk("请开启组队。");
                } else {
                    var party = cm.getParty().getMembers();
                    var mapId = cm.getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        if ((cPlayer.getLevel() >= 10 && cPlayer.getLevel() < 等级) || cPlayer.getJobId() == 900) {
                            levelValid += 1;
                        } else {
                            next = false;
                        }
                        if (cPlayer.getMapid() == mapId) {
                            inMap += 1;
                        }
                    }
					//这里是屏蔽必须2个人
                    /*if (party.size() < 2 || inMap < 2) {
                        next = false;
                    }*/
                    if (next) {
                        if (cm.getMap(677000012).getCharactersSize() > 0) {
                            cm.sendOk("里面已经有人在挑战地狱大公了。");
                        } else {
                            cm.warpParty(677000012);
                        }
                    } else {
                        cm.sendOk("不能开启副本，等级不符合。");
                    }
                }
            } else {
                cm.warp(105050400, 0);
            }
            cm.dispose();
        } else {
            if (cm.getParty() != null) {
                cm.warpParty(677000011);
            } else {
                cm.warp(677000011, 0);
            }
            cm.dispose();
        }
    } else {
        cm.warp(677000010, 0);
        cm.dispose();
    }
}