var status = -1;
var select = -1;

function start() {
    cm.sendSimpleSNew("要參加羅塞之牆戰鬥嗎？\r\n#b#L0#<參加。>\r\n#L1#<羅塞之牆戰鬥說明>\r\n#L2#<羅塞之牆戰鬥獎勵說明>#l#l\r\n#L3#<結束對話。>#l", 0x25, 1, 9137004);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        if (select == -1) {
            select = selection;
        }
        if (select == 0) {
            if (cm.getParty() == null || !cm.isLeader()) {
                cm.sendNextSNew("請讓隊長來跟我說。", 0x25, 1, 9137004);
                cm.dispose();
                return;
            } else if (!cm.partyHaveItem(4034233, 1)) {
                cm.sendNextSNew("#i4034233# #t4034233#硬幣不足。", 0x25, 1, 9137004);
                cm.dispose();
                return;
            } else if (!cm.allMembersHere()) {
                cm.sendNextSNew("請確認所有隊員都在當前地圖。", 0x25, 1, 9137004);
                cm.dispose();
                return;
            } else if (!cm.partyHaveItem(1073010, 1)) {
                cm.sendNextSNew("所有隊員都需要裝備立體機動裝置。", 0x25, 1, 9137004);
                cm.dispose();
                return;
            }
            cm.sendNextSNew("即將移動。請稍後。", 0x25, 1, 9137004);
            //訓練兵一個人很危險。請等待至隊伍人員出現一人以上。
            //814031000
            //9460026
        } else if (select == 1) {
            cm.sendNextSNew("羅塞之牆戰鬥說明。", 0x25, 1, 9137004);
        } else if (select == 2) {
            cm.sendNextSNew("羅塞之牆戰鬥獎勵說明。", 0x25, 1, 9137004);
        } else if (select == 3) {
            cm.sendOkSNew("…準備完畢後再跟我說。", 0x25, 1, 9137004);
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else if (status == 1) {
        if (select == 0) {
            if (!cm.partyHaveItem(4034233, 1)) {
                cm.dispose();
                return;
            }
            cm.gainItem(4034233, -1);
            cm.updateInfoQuest(58509, "nonbossMobKillCount=0;bossMobKillCount=0;score=0;enter=0");
            var em = cm.getEventManager("ATT_Wall_War");
            if (em == null || em.getInstance("ATT_Wall_War") != null) {
                cm.sendOkSNew("裡面已經有人了", 0x25, 1, 9137004);
            } else {
                em.startInstance_Party("814031000", cm.getPlayer());
            }
            cm.dispose();
        } else if (select == 1) {
            cm.sendNextPrevSNew("羅塞之牆戰鬥是跟超大型巨人的模擬戰鬥方式來進行的模擬戰。", 0x25, 1, 9137004);
        } else if (select == 2) {
            cm.sendNextPrevSNew("羅塞之牆戰鬥獎勵分為#bF、D、C、B、A、S、SS#k7個等級。", 0x25, 1, 9137004);
        } else {
            cm.dispose();
        }
    } else if (status == 2) {
        if (select == 0) {
            cm.sendOkSNew("", 0x25, 1, 9137004);
        } else if (select == 1) {
            cm.sendNextPrevSNew("超大型巨人的攻擊，雖然很單純，但是卻非常強力, 戰鬥途中可以消耗遊戲硬幣來復活。", 0x25, 1, 9137004);
        } else if (select == 2) {
            cm.sendNextPrevSNew("#b#eF等級：未滿1,000點\r\n#i2028325# #t2028325#\r\n#r<主要獎勵>\r\n#n#k#i2010033# #t2010033#, #i2010032# #t2010032#, #i4001832# #t4001832#", 0x25, 1, 9137004);
        } else {
            cm.dispose();
        }
    } else if (status == 3) {
        if (select == 0) {
            cm.dispose();
        } else if (select == 1) {
            cm.sendNextPrevSNew("在限制時間內，擊殺超大型巨人時，有準備了在剩下時間期間可以在市區擊殺一般巨人的紅利地圖場地。", 0x25, 1, 9137004);
        } else if (select == 2) {
            cm.sendNextPrevSNew("#b#eD等級：1,000點以上\r\n#i2028324# #t2028324#\r\n#r<主要獎勵>\r\n#n#k#i2049710# #t2049710#, #i2003570# #t2003570#, #i2049158# #t2049158#", 0x25, 1, 9137004);
        } else {
            cm.dispose();
        }
    } else if (status == 4) {
        if (select == 1) {
            cm.sendOkSNew("擊殺超大型巨人後，盡量討伐很多的一般巨人來挑戰更好的獎勵吧。", 0x25, 1, 9137004);
            cm.dispose();
        } else if (select == 2) {
            cm.sendNextPrevSNew("#b#eC等級：2,000點以上\r\n#i2028323# #t2028323#\r\n#r<主要獎勵>\r\n#n#k#i2049603# #t2049603#, #i2470009# #t2470009#, #i2049165# #t2049165#, #i2049509# #t2049509#", 0x25, 1, 9137004);
        } else {
            cm.dispose();
        }
    } else if (status == 5) {
        if (select == 2) {
            cm.sendNextPrevSNew("#b#eB等級：4,000點以上\r\n#i2028322# #t2028322#\r\n#r<主要獎勵>\r\n#n#k#i2028316# #t2028316#, #i2028315# #t2028315#, #i3015010# #t3015010#, #i2049022# #t2049022#", 0x25, 1, 9137004);
        } else {
            cm.dispose();
        }
    } else if (status == 6) {
        if (select == 2) {
            cm.sendNextPrevSNew("#b#eA等級：7,000點以上\r\n#i2028321# #t2028321#\r\n#r<主要獎勵>\r\n#n#k#i2028316# #t2028316#, #i2028315# #t2028315#, #i3015010# #t3015010#, #i2049030# #t2049030#, #i2531001# #t2531001#", 0x25, 1, 9137004);
        } else {
            cm.dispose();
        }
    } else if (status == 7) {
        if (select == 2) {
            cm.sendNextPrevSNew("#b#eS等級：10,000點以上\r\n#i2028320# #t2028320#\r\n#r<主要獎勵>\r\n#n#k#i2028316# #t2028316#, #i2028315# #t2028315#, #i3015010# #t3015010#, #i2049030# #t2049030#, #i2531001# #t2531001#", 0x25, 1, 9137004);
        } else {
            cm.dispose();
        }
    } else if (status == 7) {
        if (select == 2) {
            cm.sendNextPrevSNew("#b#eSS等級：15,100點以上\r\n#i2028319# #t2028319#\r\n#r<主要獎勵>\r\n#n#k#i2028316# #t2028316#, #i2028315# #t2028315#, #i3015010# #t3015010#, #i2049030# #t2049030#, #i2531001# #t2531001#", 0x25, 1, 9137004);
        } else {
            cm.dispose();
        }
    } else if (status == 7) {
        if (select == 2) {
            cm.sendOkSNew("擊殺超大型巨人後，盡量討伐很多的一般巨人來挑戰更好的獎勵吧。", 0x25, 1, 9137004);
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else {
        cm.dispose();
    }
}