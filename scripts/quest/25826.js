/*
 * 粉红色是不是变得太强了呢？
 * 爆莉萌天使3转
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 9) {
            qm.sendNext("刚刚那个正义勇士跑哪里去了？");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNextS("#p3000018#，最近我使用技能时，粉红色光芒似乎更强烈了呢。", 2);
    } else if (status == 1) {
        qm.sendNextPrev("那是当然。我激活这股力量时，它就变成了我最喜欢的颜色。这种现象说明你已经逐渐能熟练运用我的力量了。");
    } else if (status == 2) {
        qm.sendNextPrevS("粉红色没什么不好……可这似乎有点太粉了吧。", 2)
    } else if (status == 3) {
        qm.sendNextPrev("那就放弃咯，放弃的话就没烦恼了。");
    } else if (status == 4) {
        qm.sendNextPrevS("没办法吗？", 2)
    } else if (status == 5) {
        qm.sendNextPrev("先不说这个，看来你已经能感觉到自己越来越能得心应手地控制这股力量。是时候再次提升你能力值的极限了。");
    } else if (status == 6) {
        qm.sendNextPrevS("你说的是之前提过的灵魂的默契吗？", 2)
    } else if (status == 7) {
        qm.sendNextPrev("对，怎么样？你会成为真正的粉色天使。");
    } else if (status == 8) {
        qm.sendNextPrevS("这个嘛，我怎么想都觉得不太好额……", 2)
    } else if (status == 9) {
        qm.askAcceptDeclineNoESC("你应该摒弃偏见。一句话，你想变强吧？");
    } else if (status == 10) {
        if (qm.getJob() == 6510) {
            qm.changeJob(6511);
        }
        if (!qm.haveItem(1142497, 1)) {
            qm.gainItem(1142497, 1);
        }
        qm.forceCompleteQuest();
        qm.sendNextS("哇啊！我好像变强了呢！", 2);
        qm.dispose();
    }
}
