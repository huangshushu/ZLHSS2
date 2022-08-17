var status = -1;
var accuracy = 0;
var fakeMobKillCount = 0;
var score = 0;
var itemId = 0;

function start() {
    cm.sendNextSNew("累了！領取獎勵吧！", 0x25, 1, 9137205);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendAttackOnTitanScore(0x165);
        cm.dispose();
    } else if (status == 1) {
        var info = cm.getInfoQuest(58507).split(";");
        for (var i = 0; i < info.length; i++) {
            var q = info[i].split("=");
            if (q[0] == "accuracy") {
                accuracy = parseInt(q[1]);
            } else if (q[0] == "fakeMobKillCount") {
                fakeMobKillCount = parseInt(q[1]);
            } else if (q[0] == "score") {
                score = parseInt(q[1]);
            }
        }
        if (parseInt(score) >= 4000) {//SS
            itemId = 2028308;
        } else if (parseInt(score) >= 3500) {//S
            itemId = 2028309;
        } else if (parseInt(score) >= 3000) {//A
            itemId = 2028310;
        } else if (parseInt(score) >= 2000) {//B
            itemId = 2028311;
        } else if (parseInt(score) >= 1500) {//C
            itemId = 2028312;
        } else if (parseInt(score) >= 500) {//D
            itemId = 2028313;
        } else {//F
            itemId = 2028314;
        }
        if (!cm.canHold(itemId)) {
            cm.topMsg("消耗欄位不足。請空出 1格以上的空位。");
            cm.dispose();
            return;
        }
        cm.gainItem(itemId, 1);
        cm.updateInfoQuest(58507, "accuracy=0;fakeMobKillCount=0;score=0");
        cm.warp(parseInt(cm.getInfoQuest(58466).split("=")[1]), 0);
        cm.dispose();
    }
}