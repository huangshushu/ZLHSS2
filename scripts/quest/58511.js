﻿/*
 Made by Pungin
 */
        var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        switch (qm.getMapId()) {
            case 814011900:
                break;
            default:
                qm.dispose();
                return;
        }
        var info = qm.getInfoQuest(58507).split(";");
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
        if (!qm.canHold(itemId)) {
            qm.topMsg("消耗欄位不足。請空出 1格以上的空位。");
            qm.dispose();
            return;
        }
        qm.gainItem(itemId, 1);
        qm.updateInfoQuest(58507, "accuracy=0;fakeMobKillCount=0;score=0");
        qm.warp(parseInt(qm.getInfoQuest(58466).split("=")[1]));
        qm.dispose();
    } else {
        qm.dispose();
    }
}
