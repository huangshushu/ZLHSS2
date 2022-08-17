var status = -1;

function start() {
    switch (cm.getMapId()) {
        case 807100000:
            cm.sendNext("翻过本能寺外墙，打开东门。");
            cm.dispose();
            break;
        case 807100002:
            cm.forceStartQuest(57101);
            cm.environmentChange("guide1");
            cm.environmentChange("guide2");
            cm.environmentChange("guide3");
            action(1, 0, 0);
            break;
        default:
            cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (cm.getMapId()) {
        case 807100002:
            if (status == 0) {
		cm.sendSangokuTalk("果然做的很好，我越來越喜歡你啦。", 9131007, false, true);
            } else if (status == 1) {
                cm.sendNextPrevS("並不困難，況且戰鬥已經開始了所以更加簡單… 到底在發生什麼事情？是負責北邊的上杉謙信南邊的士兵首先攻進去的？", 2);
            } else if (status == 2) {
		cm.sendSangokuTalk("說好各方面同時進攻的，若不是某個人想打亂計劃忽略進攻信號就很難說啦。當然還是有可疑的地方… 但是沒辦法確定所以現在答應你沒什麼意義吧。", 9131007, false, true);
            } else if (status == 3) {
		cm.sendSangokuTalk("營內很混亂所以我們很容易進攻，目前情況對我們沒有害處，關於真相的確認等阻擋織田信長後再進行也不晚，趁勝攻擊本堂吧。", 9131007, false, true);
            } else if (status == 4) {
                cm.sendPrevS("知道了，失陪啦！", 2);
            } else {
                cm.dispose();
            }
            break;
    }
}