/*
 ZEVMS冒险岛(079)游戏服务端
 */
var status = -1;
var skills = Array(21001003, 21000000, 21100000, 21100002, 21100004, 21100005, 21110002);

function start(mode, type, selection) {
    qm.sendNext("你想要撑杆臂吗？哈！你看起来一点也不强壮。超越你的联盟。如果你想要一个杆臂，那就在我的西边打猎，证明我错了，找到了30 个#b#v4032311##k!");
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("哈！你已经证明了你的价值…你会得到你想要的，最好的杆臂是可能的！");
    } else if (status == 1) {
        if (qm.getPlayerStat("RSP") > (qm.getPlayerStat("LVL") - 30) * 3) {
            qm.sendNext("你还有技能点没使用完。");
            qm.dispose();
            return;
        }
        qm.sendNextS("我的记忆正在回归…", 2);
        qm.changeJob(2110);
        qm.gainItem(1142130, 1);
        qm.gainItem(4032311, -30);
        qm.forceCompleteQuest(21201);
        for (var i = 0; i < skills.length; i++) {
            qm.teachSkill(skills[i], qm.getPlayer().getSkillLevel(skills[i]));
        }
        qm.forceCompleteQuest();
    } else if (status == 2) {
        qm.sendOk("哈哈！你已经得到你想要的了，现在离开！");
        qm.dispose();
    }
}