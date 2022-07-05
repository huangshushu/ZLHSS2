var status;

var itemList = new Array(1012056, 1112908, 1012098, 1012101, 1012102, 1012103, 1032055, 1032056, 1032057, 1032058, 1052165, 1052166, 1052167, 1002797, 1002800, 1072366, 1072368, 1072262, 1072264, 1082244, 1082245, 1102174, 1322003, //equips
    2100009, 2022141, 2049100, 2049001, 2049002, 2049000, 2070007, 2070006, 2044901, 2044902, 2044802, 2044801, 2044702, 2044701, 2044602,
    2044601, 2044501, 2044502, 2044402, 2044401, 2044302, 2044301, 2044201, 2044202, 2044102, 2044101,
    2044002, 2044001, 2043802, 2043801, 2043702, 2043701, 2043302, 2043301, 2043202, 2043201, 2043102,
    2043101, 2043002, 2043001, 2040801, 2040816, 2040817, 2040802, 2040915, 2040914, 2040805, 2040804, 2040532, 2040534, 2040517, 2040516,
    2040514, 2040513, 2040502, 2040501, 2040323, 2040321, 2040317, 2040316, 2040302, 2040301, //1x use items
    2022141, 2022245, 2022154, 2290096, 2290031, 2290033, 2290035, 2290037, 2290039, 2290041, 2290043, 2290047, 2290049, 2290051, 2290055, 2290057, 2290059, 2290061,
    2290063, 2290065, 2290069, 2290071, 2290073, 2290075, 2290077, 2290079, 2290081, 2290083, 2290085, 2290087, 2290089, 2290091, 2290093,
    2290095, 2280007, 2280008, 2290003, 2290001, 2290005, 2290007, 2290011, 2290013, 2290015, 2290017, 2290021, 2290023,
    2290025, 2290027, 2290031, 2290033, 2290035, 2290037, 2290039, 2290041, 2290043, 2290045, 2290047, 2290049, 2290051, 2290053,
    2290055, 2290057, 2290029, 2290061, 2290063, 2290065, 2290067, 2290069, 2290071, 2290073, 2290075, 2290077, 2290079, 2290081,
    2290083, 2290087, 2290089, 2290091, 2290093, 2290095,   //multiuse items
    4001126); //etc items

var randNum = Math.floor(Math.random() * (itemList.length));
var randItem = itemList[randNum];
var qty;

switch (randItem) {
    case 4020000:
    case 4020001:
    case 4020002:
    case 4020003:
    case 4020004:
    case 4020005:
    case 4020006:
    case 4010000:
    case 4010001:
    case 4010002:
    case 4010003:
    case 4010004:
    case 4010005:
        qty = 16;
        break;
    case 4010006:
    case 4020007:
    case 4020008:
        qty = 8;
        break;
    case 4003000:
        qty = 30;
        break;
    case 2000002:
    case 2000006:
        qty = 100;
        break;
    case 2000003:
        qty = 200;
        break;
    case 2000004:
        qty = 50;
        break;
    case 2000005:
    case 2022003:
        qty = 10;
        break;
    default:
        qty = 1;
}

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var em = cm.getEventManager("OrbisPQ");
    if (em == null) {
        cm.dispose();
        return;
    }
    for (var i = 4001044; i < 4001064; i++) {
        cm.removeAll(i); //holy
    }
    switch (cm.getMapId()) {
        case 920010100: //center stage, minerva warps to bonus
            //em.setProperty("done", "1");
            cm.showEffect(false, "quest/party/clear");
            cm.playSound(false, "Party1/Clear");
            cm.gainExp_PQ(120, 0.8);
            cm.getPlayer().endPartyQuest(1203);
            cm.warp(920011100);
            cm.dispose();
            break;
        default:
            if (mode == -1) {
                cm.dispose();
            }
            if (mode == 1)
                status++;
            else
                status--;
            if (status == 0) {
                cm.sendNext("请确认你的背包有没有空格。");
            } else if (status == 1) {
                if (!cm.canHold(4001222, 1)) {
                    cm.sendOk("请检查你背包其他栏有没有空格。");
                    cm.dispose();
                    return;
                }
                var a = cm.getBossLogC("每日女神塔副本");
                if (a <= 1) {
                    cm.gainItem(4001222, 1);
                    cm.setBossLog('每日女神塔副本');
                }
                if (cm.getPlayer().getLevel() <= 120) {
                    cm.gainItem(4001222, 1);
                    cm.gainItem(randItem, qty);
                    cm.playerMessage(5, "恭喜您获得5点女神塔副本通关点数！");
                    cm.setBossRankPoints("女神塔副本总点数", 5);
                    cm.setBossRankCount("所有副本总次数");
                    cm.setBossRankCount("女神塔副本总次数");
                    cm.setBossLog("完成5次女神塔组队", 12, 1);
                }else{
                    cm.givePartyLevelItems(1, 54, 1, 4001229, 2);
                    cm.setBossRankCount("越级女神塔副本总次数");
                }
                var eim = cm.getEventInstance();
                var 通关时间 = 20 * 60000;
                if (eim == null) {
                    var 消耗时间 = 999999999;
                } else {
                    var 消耗时间 = (通关时间 - eim.getTimeLeft()) / 1000;
                }
                if (eim != null) {
                    cm.worldMessage(2, "[副本-女神塔] : 恭喜 " + cm.getPlayer().getName() + " 完成女神塔副本。消耗时间 " + formatSeconds(消耗时间) + "。");
                }

                cm.warp(200080101);
                cm.dispose();
                break;
            }
    }
}
