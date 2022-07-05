var select = -1;
var itemList = [
[1302030, 500, 500],//	枫叶剑
[1302064, 1000, 1000],//	枫叶突击剑
[1312032, 1000, 1000],//	枫叶破击斧
[1322054, 1000, 1000],//	枫叶地震锤
[1332025, 500, 500],//	枫叶刃
[1332055, 1000, 1000],//	枫叶锁魄铗
[1332056, 1000, 1000],//	枫叶追魂刺
[1372034, 1000, 1000],//	枫叶仙姬杖
[1382012, 500, 500],//	枫叶杖
[1382039, 1000, 1000],//	枫叶丹心杖
[1402039, 1000, 1000],//	枫叶枭首剑
[1412011, 500, 500],//	枫叶斧
[1412027, 1000, 1000],//	枫叶干坤轮
[1422014, 500, 500],//	枫叶锤
[1422029, 1000, 1000],//	枫叶轰天镗
[1432012, 500, 500],//	枫叶枪
//[1432037, 1000, 1000],//	枫叶大将旗
[1432040, 1000, 1000],//	枫叶钻天枪
[1442024, 500, 500],//	枫叶矛
[1442051, 1000, 1000],//	枫叶战斧
[1452022, 500, 500],//	枫叶弓
[1452045, 1000, 1000],//	枫叶HAPPY弓
[1462019, 500, 500],//	枫叶弩
[1462040, 1000, 1000],//	枫叶击星弩
[1472032, 500, 500],//	枫叶拳
[1472055, 1000, 1000],//	枫叶定天拳
[1482021, 500, 500],//	枫叶指节
[1482022, 1000, 1000],//	枫叶金爪
[1492021, 500, 500],//	枫叶枪
[1492022, 1000, 1000],//	枫叶枪
[1092030, 1000, 1000]//	枫叶枪
];

var itemid = 4001126;
function start() {
    var Editing = false //false 开始
    if (Editing) {
        cm.sendOk("维修中");
        cm.dispose();
        return;
    }
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
		var txt = "#e选择你想兑换的武器#n\r\n";
		for (var i in itemList) {
			txt += "#b#L" + i + "#使用#r" + itemList[i][1] + "#z"+itemid+"##b兑换#z" + itemList[i][0] + "##l\r\n";
		}
        cm.sendSimple(txt);

    } else if (status == 1) {
		if (!cm.haveItem(itemid, itemList[selection][1])) {
			cm.sendOk("#v" + itemid + "#数量不足");
			cm.dispose();
			return;
		} else if (!cm.canHold(itemList[selection][0], 1)) {
			cm.sendOk("空间不足");
			cm.dispose();
			return;
		}
		cm.gainItem(itemList[selection][0], 1, true);
		cm.gainItem(itemid, -itemList[selection][1]);
		cm.sendOk("兑换成功");
        cm.dispose();
    }
}

function openNpc(npcid) {
    openNpc(npcid, null);
}

function openNpc(npcid, script) {
    var mapid = cm.getMapId();
    cm.dispose();
    if (cm.getPlayerStat("LVL") < 10) {
        cm.sendOk("你的等级不能小于10等.");
    } else if (
            cm.hasSquadByMap() ||
            cm.hasEventInstance() ||
            cm.hasEMByMap() ||
            mapid >= 990000000 ||
            (mapid >= 680000210 && mapid <= 680000502) ||
            (mapid / 1000 === 980000 && mapid !== 980000000) ||
            mapid / 100 === 1030008 ||
            mapid / 100 === 922010 ||
            mapid / 10 === 13003000
            ) {
        cm.sendOk("你不能在这里使用这个功能.");
    } else {
        if (script == null) {
            cm.openNpc(npcid);
        } else {
            cm.openNpc(npcid, script);
        }
    }
}
