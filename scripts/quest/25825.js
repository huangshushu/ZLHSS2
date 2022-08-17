/*
 * 正义的代理人
 * 爆莉萌天使2转
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendOk("不管怎样确实变强了，暂且当成是高兴的事情吧。");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.askAcceptDeclineNoESC("由于修炼和练习的结果，和#p3000018#的灵魂的联系越来越紧密了。心里既感到高兴，又有一丝不安。是否要进行爆莉萌天使2转？");
    } else if (status == 1) {
        if (qm.getJob() == 6500) {
            qm.changeJob(6510);
        }
        if (!qm.haveItem(1142496, 1)) {
            qm.gainItem(1142496, 1);
        }
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
