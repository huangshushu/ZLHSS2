var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        qm.sendNextS("異變‘這邊’… 都是些不現實的故事。", 16);
    } else if (status == 1) {
        qm.sendSangokuTalk("但是只能相信了。 這山坡周圍的風景， 與日本很相似但肯定不是日本。 日本當中沒有我不知道的地方。", 4, 9130081, true, true);
    } else if (status == 2) {
        qm.sendNextPrevS("果然刻意中斷那時候的儀式就是異變的原因呀? 若更快一點擊敗森蘭丸，更順暢的中斷儀式… 對了，師傅和紋櫻怎麼樣了?", 16);
    } else if (status == 3) {
        qm.sendSangokuTalk("不用自責，你只是做了你該做的事情。 首先就按照那個叫直江兼續的小孩的話去看看新的據點。", 4, 9130081, true, true);
    } else if (status == 4) {
        qm.sendNextPrevS("師傅… 你一定要平安無事…", 16);
    } else {
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        qm.sendNext("這裡就是新的據點楓葉丘陵，做為聯合軍毛利把先到達‘這邊’的人聚集興建的。");
    } else if (status == 1) {
        qm.sendNextPrevS("楓葉丘陵… 染紅的楓葉… 非常悲壯的的名字呀。", 2);
    } else if (status == 2) {
        qm.sendNextPrev("哈哈，這麼說好像也是。 先見見陣地內的毛利吧，也需要商量一下進後的事情…");
    } else if (status == 3) {
        qm.sendNextPrevS("直江兼續您呢?", 2);
    } else if (status == 4) {
        qm.sendNextPrev("我還要繼續對上杉謙信的搜索，大部分都是昏迷狀態下到達‘這裡’的， 隨時都會處在危險當中。 太長時間沒有見到主公，有點受不了了，那我先失禮了。");
    } else if (status == 5) {
        qm.forceCompleteQuest();
        qm.gainItem(2001501, 70);
        qm.gainItem(2001503, 70);
        qm.gainItem(1003570, 1);
        qm.gainItem(1052479, 1);
        qm.gainItem(1082450, 1);
        qm.gainItem(1072684, 1);
        qm.gainItem(1552000, 1);
        qm.gainItem(1142506, 1);
        qm.dispose();
    }
}