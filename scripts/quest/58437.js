﻿/*
    Made by Pungin
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            qm.sendOkSNew("竟然有討厭冒險的旅行者…真是獨特的人。", 0x13, 1);
            qm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        qm.getDirectionStatus(true);
        qm.EnableUI(1, 0);
        qm.DisableUI(true);
        qm.sendNextSNew("這裡是哪裡？", 0x39, 1);
    } else if (status == 1) {
        qm.EnableUI(0);
        qm.DisableUI(false);
        qm.sendYesNoSNew("跟異世界連結的時空的隙縫。異世界跟楓之谷世界是完全不同的世界。只有擁有特別之力的人才能透過時空的隙縫來移動到異世界. 可以從你的身上感覺到那種力量. 你也是否要去新的冒險呢?", 0x13, 1);
    } else if (status == 2) {
        qm.sendOkSNew("不是誰都有這樣的機會，所以請好好的享受此冒險。那如果要出發，跟我說聲唷。", 0x13, 1);
	qm.forceCompleteQuest();
        qm.gainExp(1000);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
