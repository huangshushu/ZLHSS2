var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        qm.sendSangokuTalk("…我， …。我！ …神那…！", 4, 9130081, false, true);
    } else if (status == 1) {
        qm.sendNextS("嗚… 嗚嗚…", 16);
    } else if (status == 2) {
        qm.sendSangokuTalk("神那， 醒醒！", 4, 9130081, true, true);
    } else if (status == 3) {
        qm.sendNextPrevS("哈！", 16);
    } else if (status == 4) {
        qm.sendSangokuTalk("現在才醒過來了呀，怎麼可以這麼無防備呀。。。", 4, 9130081, true, true);
    } else if (status == 5) {
        qm.sendNextPrevS("這裡是哪裡呀?　嗯… 好的， 為阻止魔王破壞天使的儀式與森蘭丸對戰， 破壞祭壇… 阻止儀式， 之後就沒有記憶了。 到底發生什麼事情了?", 16);
    } else if (status == 6) {
        qm.sendSangokuTalk("是喔， 我的記性也跟你差不多。 剛好附近好像有人，去問問他怎麼樣? 感覺好面熟。", 4, 9130081, true, true);
    } else {
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}