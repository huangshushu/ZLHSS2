var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == -1) {
        if (mode != 1) {
            qm.sendOk("目前還不是很清醒。");
        }
        qm.dispose();
    } else if (status == 0) {
        qm.sendYesNo("我是尼子家族的家臣，曾一起參加過本能寺攻略戰，我叫山中幸盛，在介紹詳細情況之前可以先知道一下怎麼稱呼您嗎？");
    } else if (status == 1) {
        if (!qm.isQuestActive(57103)) {
            qm.forceStartQuest();
        }
        qm.sendNextS("我是松山家族的家臣，也是信包的兒子，我叫劍斗。", 2);
    } else if (status == 2) {
        qm.sendNextPrev("劍斗… 有聽說過好幾次，曉月類的神聖而名揚四海的劍斗，很榮幸見到你。");
    } else if (status == 3) {
        qm.sendNextPrevS("感到榮幸的是我，可以見到忠義的榜樣而有名的山中幸盛，有參加過本能寺 攻略戰，若早一點知道的話，早就打招呼啦。", 2);
    } else if (status == 4) {
        qm.sendNextPrev("很想再聊多一點，但是先簡單說一下在本能寺攻略戰中發生的事情和目前的情況，若準備好了告訴一下。");
    } else {
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
        qm.sendNext("可能有些亂… 有感覺到了嗎？這裡的風景跟我們熟悉的日本很相似但是又感覺不太自然，很相似但實際上是不同的兩個地方。");
    } else if (status == 1) {
        qm.sendNextPrevS("很相似但實際上是不同的兩個地方？", 2);
    } else if (status == 2) {
        qm.sendNextPrev("是的，簡單說這裡不是日本，是我們不曾知道的另一個世界，原因不太清楚，正在本能寺攻略戰時在本堂散發出奪目的光後，我們就飛到我們不知道的世界，而且是各自都在不同時間，不同地點。");
    } else if (status == 3) {
        if (mode != 1) {
            qm.dispose();
            return;
        }
        qm.sendNextPrevS("未知的的世界… 那可能嗎？", 2);
    } else if (status == 4) {
        qm.sendYesNo("是喔，我也不太清楚，只是根據先到達的人們的意見下的結論 ，先到達的人們就在這山坡上建立了新的陣地，先去那裡吧。");
    } else if (status == 5) {
        qm.forceCompleteQuest();
        qm.gainExp(621);
        qm.dispose();
    }
}