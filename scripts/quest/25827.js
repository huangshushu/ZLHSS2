/*
 * 变得更强的附加契约
 * 爆莉萌天使4转
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 10) {
            qm.sendNext("刚刚那个正义勇士跑哪里去了？");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("#h0#，你在认真修炼啊？");
    } else if (status == 1) {
        qm.sendNextPrevS("嗯，我能帮助那么多的人，得到他们的喜爱，真开心。", 2)
    } else if (status == 2) {
        qm.sendNextPrev("(呃……这孩子真善良……)嗯，你的想法很积极向上。我有个建议给你，要不要听听？");
    } else if (status == 3) {
        qm.sendNextPrevS("你突然那么一本正经的，让人好紧张。是什么建议？", 2)
    } else if (status == 4) {
        qm.sendNextPrev("我一直都很正经的。");
    } else if (status == 5) {
        qm.sendNextPrevS("越看越吓人额？哈哈哈。", 2)
    } else if (status == 6) {
        qm.sendNextPrev("真被你打败了。行了，说说正题吧。咱俩被强制结成契约有一段时间了吧，现在应该可以缔结额外契约了。");
    } else if (status == 7) {
        qm.sendNextPrevS("额外契约？", 2)
    } else if (status == 8) {
        qm.sendNextPrev("第一次契约不是我们自己决定的，而是受到命运的指引。但额外的契约必须要你我都同意才能缔结。");
    } else if (status == 9) {
        qm.sendNextPrevS("呃……是粉红色又要加深了吗？不过要是能获得帮助更多人的力量，粉红色我忍了。", 2)
    } else if (status == 10) {
        qm.askAcceptDeclineNoESC("那么就建立额外契约咯！你必须跟我同时缔结契约，集中精神吧？");
    } else if (status == 11) {
        if (qm.getJob() == 6511) {
            qm.changeJob(6512);
        }
        if (!qm.haveItem(1142498, 1)) {
            qm.gainItem(1142498, 1);
        }
        qm.forceCompleteQuest();
        qm.sendNextS("为了大家，我要变强！！！", 2);
        qm.dispose();
    }
}
