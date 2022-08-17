/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：雪人三兄弟
 */
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var C = "#fUI/UIWindow.img/Minigame/Common/mark#";


function start() {
    status = -1;

    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--

    }

    var 地图 = cm.getMap(106021500).getCharactersSize();
    var FantMap = cm.getMap(106021500);
    var r = Math.ceil(Math.random() * 3);
    if (status <= 0) {
        var
         selStr = "hi，勇士，蘑菇城是不是很壮观？\r\n\r\n";
        selStr += "#L1##r挑战雪人三兄弟\r\n";
        selStr += "#L2##b拯救菲欧娜\r\n";
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
            case 1:
               if (地图 == 0) {
                    FantMap.resetFully();
                    if (r <= 1) {
                        cm.warpParty(106021500, 1);
                        cm.showEffect(true, "pepeKing/frame/B");
                        cm.showEffect(true, "pepeKing/pepe/pepeB");
                        cm.spawnMob_map(3300005, 106021500, 283, -68);
                    } else if (r == 2) {
                        cm.warpParty(106021500, 1);
                        cm.showEffect(true, "pepeKing/frame/B");
                        cm.showEffect(true, "pepeKing/pepe/pepeB");
                        cm.spawnMob_map(3300006, 106021500, 283, -68);
                    } else if (r == 3) {
                        cm.warpParty(106021500, 1);
                        cm.showEffect(true, "pepeKing/frame/B");
                        cm.showEffect(true, "pepeKing/pepe/pepeB");
                        cm.spawnMob_map(3300007, 106021500, 283, -68);
                    }
                } else {
                    cm.sendOk("已经有人正在挑战中···");
                }
                cm.dispose();
                break
            case 2:
                cm.warp(106021401, 0);
                cm.dispose();
                break

        }
    }
}