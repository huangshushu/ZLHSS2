
var sj;
var itemSet = Array(2044908, 2044815, 2044703, 2044603, 2044503, 2044403, 2044303, 2044203, 2044103, 2044003,
    2043303, 2043203, 2043103, 2043003, 2041025, 2041024, 2040903, 2040806, 2040711, 2040710,
    2040709, 2040603, 2040507, 2040506, 2040303, 2040007, 2040006, 2040826, 2044908, 2044815,
    2044703, 2044603, 2044503, 2044403, 2044303, 2044203, 2044103, 2044003, 2043303, 2043203,
    2043103, 2043003, 2041025, 2041024, 2040903, 2040806, 2040711, 2040710, 2040709, 2040603,
    2040507, 2040506, 2040303, 2040007, 2040006, 2040826);
var itemSet1 = Array(2044908, 2044815, 2044703, 2044603, 2044503, 2044403, 2044303, 2044203, 2044103, 2044003,
    2043303, 2043203, 2043103, 2043003, 2041025, 2041024, 2040903, 2040806, 2040711, 2040710,
    2040709, 2040603, 2040507, 2040506, 2040303, 2040007, 2040006, 2040826, 2044908, 2044815,
    2044703, 2044603, 2044503, 2044403, 2044303, 2044203, 2044103, 2044003, 2043303, 2043203,
    2043103, 2043003, 2041025, 2041024, 2040903, 2040806, 2040711, 2040710, 2040709, 2040603,
    2040507, 2040506, 2040303, 2040007, 2040006, 2040826);
var sel = Math.floor(Math.random() * itemSet.length);
var sel1 = Math.floor(Math.random() * itemSet1.length);
var status = 0;
var 跑环;
var 环数
function start() {
    跑环 = cm.getBossLog("每日跑环_十环");
    sj = 跑环
    环数 = sj + 1
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;


        if (status == 0) {
            var textz = "                 每 日 任 务 - 第 " + 环数 + " 环\r\n\r\n";
            if (跑环 == 0) {

                textz += " - 本环所需道具：#v4000019# x 30\r\n\r\n";

                textz += " - 本环所需道具：#v4000000# x 30\r\n\r\n";

                textz += " - 本环所需道具：#v4000016# x 30\r\n\r\n";

                textz += " - 奖励金币：20W\r\n\r\n";
				
				cm.sendYesNo(textz);
            } else if (跑环 == 1) {

                textz += " - 本环所需道具：#v4000040# x 1\r\n\r\n";

                textz += " - 奖励金币：30W\r\n\r\n";
               
				
				cm.sendYesNo(textz);

            } else if (跑环 == 2) {

                textz += " - 本环所需道具：#v4000176# x 1\r\n\r\n";

                textz += " - 奖励点券：30\r\n\r\n";

				
				cm.sendYesNo(textz);
            } else if (跑环 == 3) {

                textz += " - 本环所需道具：#v4000009# x 1\r\n\r\n";

                textz += " - 奖励点券：50\r\n\r\n";

				
				cm.sendYesNo(textz);
            } else if (跑环 == 4) {

                textz += " - 本环所需道具：#v4001111# x 1\r\n\r\n";

                textz += " - 奖励金币：50W\r\n\r\n";

				
				cm.sendYesNo(textz);
            } else if (跑环 == 5) {

                textz += " - 本环所需道具：#v4000083# x 30\r\n\r\n";
				
				textz += " - 奖励道具：#v1122017# 一天权\r\n\r\n";

                textz += " - 奖励金币：100W\r\n\r\n";

				
				cm.sendYesNo(textz);
            } else {
                cm.sendOk("今日跑环任务以完成，请明日再来。");
                cm.dispose();
            }

        } else if (status == 1) {
            if (sj == 0) {
                if (cm.haveItem(4000019, 30) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else if (cm.haveItem(4000000, 30) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else if (cm.haveItem(4000016, 30) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4000019, -30);
                    cm.gainItem(4000000, -30);
                    cm.gainItem(4000016, -30);
                    cm.setBossLog("每日跑环_十环");
                    cm.gainMeso(200000);
                    cm.sendOk("任务完成。");
                    cm.全服公告("恭喜玩家["+cm.getName()+"]完成了每日任务第1阶段");
					cm.dispose();
                }

            } else if (sj == 1) {//2星
                if (cm.haveItem(4000040, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4000040, -1);
                    cm.setBossLog("每日跑环_十环");
                    cm.gainMeso(300000);
                    cm.sendOk("任务完成。");
                     cm.全服公告("恭喜玩家["+cm.getName()+"]完成了每日任务第2阶段");
					cm.dispose();
                }

            } else if (sj == 2) {//3星
                if (cm.haveItem(4000176, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4000176, -1);
                    cm.setBossLog("每日跑环_十环");
                    cm.gainNX(30);
                    cm.sendOk("任务完成。");
                    cm.全服公告("恭喜玩家["+cm.getName()+"]完成了每日任务第3阶段");
				    cm.dispose();
                }

            } else if (sj == 3) {//4星
                if (cm.haveItem(4000009, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4000009, -1);
                    cm.setBossLog("每日跑环_十环");
                    cm.gainNX(50);
                    cm.sendOk("任务完成。");
                     cm.全服公告("恭喜玩家["+cm.getName()+"]完成了每日任务第4阶段");
					cm.dispose();
                }

            } else if (sj == 4) {//5星
                if (cm.haveItem(4001111, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4001111, -1);
                    cm.setBossLog("每日跑环_十环");
                    cm.gainItem(4032246,2);
                    cm.sendOk("任务完成。");
                     cm.全服公告("恭喜玩家["+cm.getName()+"]完成了每日任务第5阶段");
					cm.dispose();
                }

            } else if (sj == 5) {//6星
                if (cm.haveItem(4000083, 30) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4000083, -30);
                    cm.setBossLog("每日跑环_十环");
                    cm.gainMeso(1000000);
                    cm.给属性装备(1122017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 24); 
                    cm.sendOk("任务完成。");
                     cm.全服公告("恭喜玩家["+cm.getName()+"]完成了每日任务第6阶段");
					cm.dispose();
                }

            

            }
        }
    }
}