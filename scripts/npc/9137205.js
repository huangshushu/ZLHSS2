var status = -1;
var select = -1;

function start() {
    cm.updateInfoQuest(58507, "accuracy=0;fakeMobKillCount=0;score=0");
    cm.sendNextSNew("巨人唯一的弱點是頸部。", 0x25, 1, 9137205);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendSimpleSNew("所以驅除巨人需要熟悉使用立體機動。要跟我一起參加立體機動訓練嗎？\r\n#b#L0#參加立體機動訓練。\r\n#L1#訓練方法說明。\r\n#L2#說明訓練獎勵。#l#l\r\n#L3#結束對話。#l", 0x25, 1, 9137205);
    } else if (status == 1) {
        if (select == -1) {
            select = selection;
        }
        if (select == 0) {
            if (!cm.haveItem(4034232)) {
                cm.sendNextSNew("遊戲硬幣不足。 沒有遊戲硬幣就無法參加訓練。", 0x25, 1, 9137205);
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("ATT_Hook_Shot");
            if (em == null || em.getInstance("ATT_Hook_Shot") != null) {
                cm.sendOkSNew("裡面已經有人了", 0x25, 1, 9137205);
                cm.dispose();
            } else {
                cm.updateInfoQuest(58466, "rMap=814010000");
                em.startInstance_Solo("814011100", cm.getPlayer());
                cm.gainItem(4034232, -1);
                cm.dispose();
            }
        } else if (select == 1) {
            cm.sendNextSNew("立體機動訓練說明。", 0x25, 1, 9137205);
        } else if (select == 2) {
            cm.sendNextSNew("#e#r<有關立體機動訓練的獎勵>#k", 0x25, 1, 9137205);
        } else if (select == 3) {
            cm.sendOkSNew("如果是士兵就必須要帶在身上！", 0x25, 1, 9137205);
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else if (status == 2) {
        if (select == 1) {
            cm.sendNextPrevSNew("限定時間內進行立體機動訓練，訓練是盡量攻擊訓練場的模型巨人。", 0x25, 1, 9137205);
        } else if (select == 2) {
            cm.sendNextPrevSNew("#b#eF等級：未滿500點..#i2028314# #t2028314#..#r<主要報酬 >..#n#k#i2010033# #t2010033#, #i2010032# #t2010032#, #i4001832# #t4001832#", 0x25, 1, 9137205);
        } else {
            cm.dispose();
        }
    } else if (status == 3) {
        if (select == 0) {
            cm.sendOkSNew("", 0x25, 1, 9137205);
        } else if (select == 1) {
            cm.sendNextPrevSNew("雖然我知道，巨人的弱點為頸部，但訓練時如果沒有攻擊到就沒有意義。", 0x25, 1, 9137205);
        } else if (select == 2) {
            cm.sendNextPrevSNew("#b#eD等級：500點以上..#i2028313# #t2028313#..#r<主要報酬 >..#n#k#i2010033# #t2010033#, #i2010032# #t2010032#, #i4001832# #t4001832#", 0x25, 1, 9137205);
        } else {
            cm.dispose();
        }
    } else if (status == 4) {
        if (select == 0) {
            cm.dispose();
        } else if (select == 1) {
            cm.sendNextPrevSNew("想要參加立體機動訓練時請再次跟我說聲！", 0x25, 1, 9137205);
            cm.dispose();
        } else if (select == 2) {
            cm.sendNextPrevSNew("#b#eC等級：1,500點以上..#i2028312# #t2028312#..#r<主要報酬 >..#n#k#i2049710# #t2049710#, #i2003570# #t2003570#, #i2049158# #t2049158#", 0x25, 1, 9137205);
        } else {
            cm.dispose();
        }
    } else if (status == 5) {
        if (select == 2) {
            cm.sendNextPrevSNew("#b#eB等級：2,000點以上..#i2028311# #t2028311#..#r<主要報酬 >..#n#k#i2049603# #t2049603#, #i2470009# #t2470009#, #i2049165# #t2049165#, #i2049509# #t2049509#", 0x25, 1, 9137205);
        } else {
            cm.dispose();
        }
    } else if (status == 6) {
        if (select == 2) {
            cm.sendNextPrevSNew("#b#eA等級：3,000點以上..#i2028310# #t2028310#..#r<主要報酬 >..#n#k#i2028316# #t2028316#, #i2028315# #t2028315#, #i3015010# #t3015010#, #i2049022# #t2049022#", 0x25, 1, 9137205);
        } else {
            cm.dispose();
        }
    } else if (status == 7) {
        if (select == 2) {
            cm.sendNextPrevSNew("#b#eS等級：3,500點以上..#i2028309# #t2028309#..#r<主要報酬 >..#n#k#i2028316# #t2028316#, #i2028315# #t2028315#, #i3015010# #t3015010#, #i2049030# #t2049030#, #i2531001# #t2531001#", 0x25, 1, 9137205);
        } else {
            cm.dispose();
        }
    } else if (status == 8) {
        if (select == 2) {
            cm.sendNextPrevSNew("#b#eSS等級：4,000點以上..#i2028308# #t2028308#..#r<主要報酬 >..#n#k#i2028316# #t2028316#, #i2028315# #t2028315#, #i3015010# #t3015010#, #i2049030# #t2049030#, #i2531001# #t2531001#", 0x25, 1, 9137205);
        } else {
            cm.dispose();
        }
    } else if (status == 9) {
        if (select == 2) {
            cm.sendOkSNew("想要參加立體機動訓練時請再次跟我說聲！", 0x25, 1, 9137205);
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else {
        cm.dispose();
    }
}