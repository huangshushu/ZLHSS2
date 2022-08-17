﻿/*
 Made by Pungin
 */
        var status = -1;

function start(mode, type, selection) {
    switch (status) {
        case 1:
        case 2:
        case 3:
            status++;
            break;
        default:
            if (mode == 1) {
                status++;
            } else {
                status--;
            }
    }

    if (status == 0) {
        qm.sendNextSNew("我來告訴你時空旅行的方法吧。 \r\n有看到那邊的右側的時空隙縫嗎？可以從這隙縫移動至異世界。", 0x13, 1);
    } else if (status == 1) {
        qm.getDirectionStatus(true);
        qm.EnableUI(1, 0);
        qm.getDirectionInfoNew(0, 1500, 520, 100);
    } else if (status == 2) {
        qm.getDirectionInfo(1, 2000);
    } else if (status == 3) {
        qm.getDirectionInfoNew(1, 2000);
    } else if (status == 4) {
        qm.EnableUI(0);
        qm.sendNextPrevSNew("啊?好期待會是什麼樣的地方！!", 0x38, 1);
    } else if (status == 5) {
        qm.sendNextPrevSNew("啊啊…在這說明不如實際體驗最快。\r\n不過有一個注意事項，就是在那世界無法使用#h0#在楓之谷所能使用的技能。因為時空不同，這應該這也不算什麼。", 0x13, 1);
    } else if (status == 6) {
        qm.sendNextPrevSNew("什麼?!!!!!!!!!!!", 0x38, 1);
    } else if (status == 7) {
        qm.sendNextPrevSNew("這是我給你的禮物! 時空之石。使用此石頭就可以從異世界回到這裡。", 0x13, 1);
    } else if (status == 8) {
        if (!qm.canHold(2433281)) {
            qm.topMsg("消耗欄位不足。請空出 1格以上的空位。");
            qm.dispose();
            return;
        }
        qm.gainItem(2433281, 1, 30);
        qm.forceCompleteQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}
