var status = -1;

function start() {
    if (cm.getMapId() == 807100000) {
        action(1, 0, 0);
    } else {
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendSangokuTalk("終於到時間啦，第六天魔王的化身織田信長的神話今天將是最後一天啦。", 9130000, false, true);
    } else if (status == 1) {
        cm.sendNextPrevS("沒能守住主力軍隊，沒能守住家族，沒能守住公主殿下 的恥辱… 想到今天終於可以洗清，激動不已。", 17);
    } else if (status == 2) {
        cm.sendSangokuTalk("雖然受到污名而報仇也不錯，但是只有一身熱血不太好。我不是不知道你的實力，頭腦過熱就會容易判斷錯誤，若判斷錯誤就容易失手。", 9130000, true, true);
    } else if (status == 3) {
        cm.sendNextPrevS("謝謝你的提醒，不知道能不能控制湧入我劍上的血。", 17);
    } else if (status == 4) {
        cm.sendSangokuTalk("哈哈哈，你能這麼說就代表你還不錯，那我就相信你的實力，把本能寺進攻第一步讓你邁開可以嗎？", 9130000, true, true);
    } else if (status == 5) {
        cm.sendNextPrevS("你是說東門的開門嗎？", 17);
    } else if (status == 6) {
        cm.sendSangokuTalk("是喔，你翻過本能寺牆壁打開東門的話武田信玄騎馬隊進攻踐踏魔王的手下的。", 9130000, true, true);
    } else if (status == 7) {
        cm.sendNextPrevS("我的切開雲霧之劍只要敵人的血，不在乎任務，請交給我吧。", 17);
    } else if (status == 8) {
        cm.sendSangokuTalk("哈哈哈，很強大的氣魄！若可以的話就這樣一直都把你留作我的手下，祝你好運，武田信玄騎馬隊很快會跟上去的！", 9130000, true, true);
    } else if (status == 9) {
        cm.EnableUI(0);
        cm.environmentChange("guide1");
        cm.environmentChange("guide2");
        cm.environmentChange("guide3");
        cm.environmentChange("guide4");
        cm.dispose();
    }
}