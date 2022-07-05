/*
 新年礼物 by梓条 v1
 */
【】var status = -1;


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    var Editing = true //false = 活动开始
    if (Editing) {
        cm.sendOk("等待2月8号吧!\r\n" +
                "今年的礼物是 ↓\r\n" +
                "#i1112585# + 666枫叶点数 #r或\r\n" +
                "#k#i1113021# + 666枫叶点数 ");
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("哈啰~我是新年活动NPC,今年有#r2个礼物跟枫叶点数666点#k但只能选#r其中一个戒指#r!!\r\n" +
                "#L0##d我想领 #i1112585# + 666枫叶点数\r\n" +
                "#L1##d我想领 #i1113021# + 666枫叶点数\r\n" +
                "#L2##d我不想要(点了就真的不能领啰)");
        //cm.dispose();
    } else if (status == 1) {
        if (selection == 2) {
            if (cm.getPlayer().getPrizeLog('新年活动') < 1) {
                cm.getPlayer().setPrizeLog('新年活动')
                cm.sendOk("不想领那就祝您新年快乐啰!");
                cm.worldMessage(6, "[讯息] " + "玩家" + cm.getChar().getName() + " 祝您新年快乐");
            } else {
                cm.sendOk("#d一个帐号只能领一次唷");
            }
        } else if (selection == 0) {
            if (cm.getPlayer().getPrizeLog('新年活动') < 1) {
                cm.getPlayer().modifyCSPoints(2, 666, true);
                cm.gainItem(1112585, 1);
                cm.getPlayer().setPrizeLog('新年活动');
                cm.sendOk("你领了 天使祝福戒指*1 + 666枫叶点数");
                cm.worldMessage(6, "[讯息] " + "玩家" + cm.getChar().getName() + " 领取了新年礼物");
            } else {
                cm.sendOk("#d一个帐号只能领一次唷");
            }
        } else if (selection == 1) {
            if (cm.getPlayer().getPrizeLog('新年活动') < 1) {
                cm.getPlayer().modifyCSPoints(2, 666, true);
                cm.gainItem(1113021, 1);
                cm.getPlayer().setPrizeLog('新年活动');
                cm.sendOk("你领了 爱情加速器*1 + 666枫叶点数");
                cm.worldMessage(6, "[讯息] " + "玩家" + cm.getChar().getName() + " 领取了新年礼物");
            } else {
                cm.sendOk("#d一个帐号只能领一次唷");
            }
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}