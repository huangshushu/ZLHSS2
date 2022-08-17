/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.sendNext("嗯……#p1013101#的话，应该就能帮我了。");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendNext("最近农场上的#o1210100#有点奇怪。经常无缘无故地发脾气，做出一些烦人的事情。我对此很担心，所以今天很早就出来了。果然有一只#o1210100#钻过了篱笆，逃到外面去了。");
    } else if (status == 1) {
        qm.sendAcceptDecline("在找到#o1210100#之前，必须先把坏了的篱笆修好。还好坏得不是太严重，只要有几个#t4032498#应该就能修好了。小不点，要是你能帮我搜集#b3个#t4032498##k就好了……");
    } else if (status == 2) {
        qm.forceStartQuest();
        qm.sendNext("哦，真是谢谢你。#b#t4032498##k可以从周围的#r#o0130100##k身上搜集到。它们虽然不是很强，但不小心的话，可能会遇到危险。你一定要好好使用技能道具。");
    } else if (status == 3) {
        qm.evanTutorial("UI/tutorial/evan/6/0", 1);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendNext("哦，#t4032498#搜集到了吗？真了不起。我应该给你什么作为奖赏呢……对了，我有那个东西。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010097# #t3010097#1个 \r\n#i2022621# #t2022621# 15个\r\n#i2022622# #t2022622# 15个 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 210 exp");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.gainItem(4032498, -3);
        qm.gainItem(3010097, 1);
        qm.gainItem(2022621, 15);
        qm.gainItem(2022622, 15);
        qm.gainExp(210);
        qm.sendNextPrev("好了，我用修理篱笆剩下的木板做了一把椅子。虽然不太好看，但却很结实。就给你用吧。");
    } else if (status == 2) {
        qm.evanTutorial("UI/tutorial/evan/7/0", 1);
        qm.dispose();
    }
}