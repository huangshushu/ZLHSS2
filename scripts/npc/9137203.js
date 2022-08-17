var status = -1;
var select = -1;

function start() {
    cm.sendNextSNew("進行討伐訓練吧。", 0x25, 1, 9137203);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendSimpleSNew("有想要問有關討伐訓練的事情就提問吧。#l\r\n#e#b#L0#參加討伐訓練。#n#l\r\n#b#L1#有關訓練方法#n#l\r\n#b#L2#有關訓練獎勵#n#l\r\n#b#L3#對話結束。#l", 0x25, 1, 9137203);
    } else if (status == 1) {
        if (select == -1) {
            select = selection;
        }
        if (select == 0) {
            cm.sendNextSNew("#b#e遊戲硬幣#k#n取得後再來找我。", 0x25, 1, 9137203);
            cm.dispose();
        } else if (select == 1) {
            cm.sendNextSNew("#b#e<有關討伐訓練>#k\r\n-制限時間：10分\r\n-每日可參加次數：5回\r\n但是參加1回時為了訓練準備，參加必須等待約1小時。", 0x25, 1, 9137203);
        } else if (select == 2) {
            cm.sendNextSNew("#e#r<有關討伐訓練的獎勵>#k", 0x25, 1, 9137203);
        } else if (select == 3) {
            cm.sendOkSNew("如果想要參加，再跟我說ㄧ聲。", 0x25, 1, 9137203);
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else if (status == 2) {
        if (select == 0) {

        } else if (select == 1) {
            cm.sendNextPrevSNew("規則：\r\n限定時間內比敵隊隊伍更早破壞自己隊伍的模型巨人。", 0x25, 1, 9137203);
        } else if (select == 2) {
            cm.sendNextPrevSNew("[贏的隊伍]\r\n#i2028313:# #t2028313#, #i2028318:# #t2028318#, #i2023457:# #t2023457#", 0x25, 1, 9137203);
        } else {
            cm.dispose();
        }
    } else if (status == 3) {
        if (select == 0) {
            cm.sendOkSNew("", 0x25, 1, 9137203);
        } else if (select == 1) {
            cm.sendOkSNew("如果想要參加，再跟我說ㄧ聲。", 0x25, 1, 9137203);
            cm.dispose();
        } else if (select == 2) {
            cm.sendNextPrevSNew("[輸的隊伍]\r\n#i2028314:# #t2028314#, #i2023456:# #t2023456#", 0x25, 1, 9137203);
        } else {
            cm.dispose();
        }
    } else if (status == 4) {
        if (select == 0) {
            cm.dispose();
        } else if (select == 2) {
            cm.sendNextPrevSNew("[平手]\r\n#i2028314:# #t2028314#, #i2023456:# #t2023456#", 0x25, 1, 9137203);
        } else {
            cm.dispose();
        }
    } else if (status == 5) {
        if (select == 2) {
            cm.sendOkSNew("如果想要參加，再跟我說ㄧ聲。", 0x25, 1, 9137203);
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else {
        cm.dispose();
    }
}