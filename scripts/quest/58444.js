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
        qm.sendNextSNew("你來晚了呢? 今天開始有訓練兵團的訓練. 每開設一個訓練會另外進行聯絡，請大家一定要參加。", 0x13, 1);
    } else if (status == 1) {
        qm.sendNextPrevSNew("嗯? 不，我…我是…你好像誤會了…", 0x38, 1);
    } else if (status == 2) {
        qm.sendNextPrevSNew("突然怕了嗎? 但是到了現在無法取消參加。已經加入了訓練兵團一定不會有問題。那，請多指教囉。", 0x13, 1);
    } else if (status == 3) {
        qm.sendNextPrevSNew("…訓練兵團？這…等等…", 0x38, 1);
    } else if (status == 4) {
        qm.sendNextPrevSNew("(但是他已經離開已久…)\r\n 好像有什麼嚴重誤會…怎麼辦呢…我真得要接受訓練嗎?!", 0x38, 1);
    } else if (status == 5) {
        qm.forceCompleteQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}
