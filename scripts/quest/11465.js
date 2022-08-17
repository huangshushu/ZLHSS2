/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 0 && status == 0) {
        qm.sendOk("这可是免费赠送的……如果你想领取礼物，请再来和我说话。");
        qm.dispose();
        return;
    } else if (mode == 0) {
        status--;
    } else {
        status++;
    }
    if (status == 0) {
        qm.sendYesNo("你好，#b#h0##k。在传说嘉年华期间，每天都会发放可以移动到任何村庄的#b#t2430455##k一次。你想现在领取吗？");
    } else if (status == 1) {
        if (qm.canHold(2430455)) {
            qm.gainItem(2430455, 1);
            qm.forceCompleteQuest();
            qm.sendOk("#b#t2430455##k存在30分钟的冷却时间。希望你好好使用，在冒险岛度过快乐的时光～");
        } else {
            qm.sendOk("背包空间不足.");
        }
        qm.dispose();
    }
}

function end(mode, type, selection) {
}