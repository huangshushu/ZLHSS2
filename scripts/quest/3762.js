/* 奇怪的流浪者 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 3) {
            qm.sendNext("不管怎样，这件事都必须处理……");
            qm.dispose();
            return;
        } else if (status == 6) {
            qm.sendNextS("(还没做好心理准备。准备好了之后，就按一下按钮吧。)", 2);
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("不管怎样，这件事都必须处理……");
    } else if (status == 1) {
        qm.sendNextPrevS("(好像有人突然经过，撞到了我的肩。)", 2);
    } else if (status == 2) {
        qm.sendNextPrevS("你是谁？", 2);
    } else if (status == 3) {
        qm.askAcceptDecline("……\r\n\r\n(那个男人装作没听见我的话，很快地消失了。在他身后，好像掉落了一样发光的东西。要捡起来看看吗？)");
    } else if (status == 4) {
        qm.sendNextS("(走近一看，发光的东西不是别的，是一块陈旧的怀表。捡起来仔细一看，除了时针不在转动之外，好像没什么特别的地方。)", 2);
    } else if (status == 5) {
        qm.sendNextPrevS("按一下上面的按钮的话，怀表说不定会重新转动起来……", 2);
    } else if (status == 6) {
        qm.sendYesNoS("你想按一下按钮，让怀表重新转动起来吗？\r\n\r\n#b(按#r是#b的话，立即移动到塔拉森林。)#k", 4)
    } else if (status == 7) {
        qm.sendPlayerToNpc("好的，决定了。按一下按钮吧。");
	qm.forceStartQuest();
        qm.warp(240070000);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}
