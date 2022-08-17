var status = -1;
var select = -1;

function start() {
    cm.sendNextSNew("#b#h0##k、你知道莎夏嗎？", 0x25, 1, 9137202);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendSimpleSNew("現在要和莎夏一起進行敏捷性訓練，你也要一起參加嗎？\r\n#b#L0# 參加敏捷性訓練。\r\n#L1# 聽取訓練方法。\r\n#L2# 詢問訓練報酬。#l#l\r\n#L3# 結束對話。#l", 0x25, 1, 9137202);
    } else if (status == 1) {
        if (select == -1) {
            select = selection;
        }
        if (select == 0) {
            cm.sendNextSNew("你好像沒有遊戲硬幣耶？雖然很可惜，但沒有遊戲硬幣是無法參加訓練的。", 0x25, 1, 9137202);
            cm.dispose();
        } else if (select == 1) {
            cm.sendNextSNew("現在跟你說明一下敏捷性訓練的內容。", 0x25, 1, 9137202);
        } else if (select == 2) {
            cm.sendNextSNew("#e#r<敏捷性訓練的獎勵>#k", 0x25, 1, 9137202);
        } else if (select == 3) {
            cm.sendOkSNew("如果改變了心意，可以再跟我說！", 0x25, 1, 9137202);
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else if (status == 2) {
        if (select == 0) {

        } else if (select == 1) {
            cm.sendNextPrevSNew("敏捷性訓練是在一定時間內，避開各種障礙物，儘可能地接住從空中掉下來的馬鈴薯的有趣訓練。", 0x25, 1, 9137202);
        } else if (select == 2) {
            cm.sendNextPrevSNew("#b#e等級F：未達到1,000點\r\n#i2028314# #t2028314#\r\n#r<主要獎勵>\r\n#n#k#i2010033# #t2010033#, #i2010032# #t2010032#, #i4001832# #t4001832#", 0x25, 1, 9137202);
        } else {
            cm.dispose();
        }
    } else if (status == 3) {
        if (select == 0) {
            cm.sendOkSNew("", 0x25, 1, 9137202);
        } else if (select == 1) {
            cm.sendNextPrevSNew("障礙物有石頭、菜刀和麵粉袋子3種。", 0x25, 1, 9137202);
        } else if (select == 2) {
            cm.sendNextPrevSNew("#b#e等級D：1,000點以上\r\n#i2028313# #t2028313#\r\n#r<主要獎勵>\r\n#n#k#i2010033# #t2010033#, #i2010032# #t2010032#, #i4001832# #t4001832#", 0x25, 1, 9137202);
        } else {
            cm.dispose();
        }
    } else if (status == 4) {
        if (select == 0) {
            cm.dispose();
        } else if (select == 1) {
            cm.sendNextPrevSNew("以上是訓練說明。 如果想參加敏捷性訓練，再跟我說一下吧！", 0x25, 1, 9137202);
            cm.dispose();
        } else if (select == 2) {
            cm.sendNextPrevSNew("#b#e等級C：1,500點以上\r\n#i2028312# #t2028312#\r\n#r<主要獎勵>\r\n#n#k#i2049710# #t2049710#, #i2003570# #t2003570#, #i2049158# #t2049158#", 0x25, 1, 9137202);
        } else {
            cm.dispose();
        }
    } else if (status == 5) {
        if (select == 2) {
            cm.sendNextPrevSNew("#b#e等級B：2,500點以上\r\n#i2028311# #t2028311#\r\n#r<主要獎勵>\r\n#n#k#i2049603# #t2049603#, #i2470009# #t2470009#, #i2049165# #t2049165#, #i2049509# #t2049509#", 0x25, 1, 9137202);
        } else {
            cm.dispose();
        }
    } else if (status == 6) {
        if (select == 2) {
            cm.sendNextPrevSNew("#b#e等級A：4,000點以上\r\n#i2028310# #t2028310#\r\n#r<主要獎勵>\r\n#n#k#i2028316# #t2028316#, #i2028315# #t2028315#, #i3015010# #t3015010#, #i2049022# #t2049022#", 0x25, 1, 9137202);
        } else {
            cm.dispose();
        }
    } else if (status == 7) {
        if (select == 2) {
            cm.sendNextPrevSNew("#b#e等級S：4,500點以上\r\n#i2028309# #t2028309#\r\n#r<主要獎勵>\r\n#n#k#i2028316# #t2028316#, #i2028315# #t2028315#, #i3015010# #t3015010#, #i2049030# #t2049030#, #i2531001# #t2531001#", 0x25, 1, 9137202);
        } else {
            cm.dispose();
        }
    } else if (status == 8) {
        if (select == 2) {
            cm.sendNextPrevSNew("#b#e等級SS：5,000點以上\r\n#i2028308# #t2028308#\r\n#r<主要獎勵>\r\n#n#k#i2028316# #t2028316#, #i2028315# #t2028315#, #i3015010# #t3015010#, #i2049030# #t2049030#, #i2531001# #t2531001#", 0x25, 1, 9137202);
        } else {
            cm.dispose();
        }
    } else if (status == 9) {
        if (select == 2) {
            cm.sendOkSNew("以上是訓練說明。 如果想參加敏捷性訓練，再跟我說一下吧！", 0x25, 1, 9137202);
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else {
        cm.dispose();
    }
}