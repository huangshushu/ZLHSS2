/*
 蜗牛冒险岛(079)游戏服务端
 脚本：活动
 */
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var 类型 = 13;
    var 地图 = cm.getMapId();
    var 角色 = cm.getPlayer().id;
    var 传送点 = cm.判断传送点x(角色, 类型);
    var 落脚点 = cm.判断传送点y(角色, 类型);
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (地图 == 109050000) {
            返回();
            return;
        }
        if (status == 0) {
            cm.sendNext("  Hi~ #b#h ##k ，如果你给我 " + cm.显示物品(5220001) + " ，我就可以让你参加活动。你想要参加有趣的活动吗？");
        } else if (status == 1) {
            var 文本 = "  Hi~ #b#h ##k ，你想要参加有趣的活动吗？\r\n\r\n";
            文本 += "#b#L1#有哪些活动#l\r\n";
            文本 += "#L2#进入活动#l\r\n";
            if (cm.OX道题活动() > 0) {
                文本 += "#L3##r进入OX答题现场#k#l";
            }
            cm.sendSimple(文本);
        } else if (status == 2) {
            if (selection == 1) {
                cm.sendSimple(" 你想要了解一下这些活动吗？#b\r\n#L0#打椰子比赛#l\r\n#L1#打瓶盖比赛#l\r\n#L2#向高地比赛#l\r\n#L3#推雪球比赛#l\r\n#L4#OX答题比赛#l");
            } else if (selection == 2) {
                if (cm.判断物品数量(5220001, 1)) {
                    if (!cm.canHold()) {
                        cm.sendNext("尽量空出你的背包空间.");
                    } else if (cm.getChannelServer().getEvent() > -1) {
                        传送(地图, 0);
                        cm.saveReturnLocation("EVENT");
                        cm.getPlayer().setChalkboard(null);
                        cm.收物品(5220001, 1);
                        cm.warp(cm.getChannelServer().getEvent(), cm.getChannelServer().getEvent() == 109080000 || cm.getChannelServer().getEvent() == 109080010 ? 0 : "join00");
                    } else {
                        cm.sendNext("活动已经开始了，或者还没活动呢。");
                    }
                } else {
                    cm.sendNext("你没有 " + cm.显示物品(5220001) + "，我不能让你进去。");
                }
                cm.dispose();
            } else if (selection == 3) {
                if (cm.判断物品数量(5220001, 1)) {
                    传送(地图, 0);
                    cm.warp(109020001, 0);
                    cm.收物品(5220001, 1);
                } else {
                    cm.sendNext("你没有 " + cm.显示物品(5220001) + "，我不能让你进去。");
                }

            }
        } else if (status == 3) {
            if (selection == 0) {
                cm.sendNext("[打椰子比赛]\r\n\r\n	活动开始后，玩家进入活动地图，分#r红色方#k，#b蓝色方#k，在活动时间结束后，哪一方打掉的椰子多，哪一方获胜。");
            } else if (selection == 1) {
                cm.sendNext("[打瓶盖比赛]\r\n\r\n	活动开始后，玩家进入活动地图，分#r红色方#k，#b蓝色方#k，在活动时间结束后，哪一方打掉的瓶盖多，哪一方获胜。");
            } else if (selection == 2) {
                cm.sendNext("[向高地比赛]\r\n\r\n	活动开始后，玩家进入活动地图，在指定时间内到达终点的玩家即可获得奖励。");
            } else if (selection == 3) {
                cm.sendNext("[推雪球比赛]\r\n\r\n	活动开始后，玩家进入活动地图，分#r红色方#k，#b蓝色方#k，在活动时间结束后，哪一方先将雪球推到终点就获胜。");
            } else if (selection == 4) {
                cm.sendNext("[OX答题比赛]\r\n\r\n	活动开始后，玩家进入活动地图，管理员会发起问题，玩家选择 X 或者 O 答对的玩家即可获得奖励。");
            } else if (selection == 5) {
                cm.sendNext("5");
            }
            cm.dispose();
        }
    }
}

function 返回() {
    var 类型 = 13;
    var 地图 = cm.getMapId();
    var 角色 = cm.getPlayer().id;
    var 传送点 = cm.判断传送点x(角色, 类型);
    var 落脚点 = cm.判断传送点y(角色, 类型);
    if (传送点 <= 0) {
        cm.warp(100000000, 0);
        cm.sendOk("传送点出错，默认为你回到射手村，已经为你重新配置该传送点。");
    } else {
        cm.warp(传送点, 落脚点);
    }
    cm.设置传送点x(角色, 类型, 0);
    cm.设置传送点y(角色, 类型, 0);
	cm.dispose();
}
function 传送(a, b) {
    var 类型 = 13;
    var 地图 = cm.getMapId();
    var 角色 = cm.getPlayer().id;
    cm.设置传送点x(角色, 类型, a);
    cm.设置传送点y(角色, 类型, b);
}