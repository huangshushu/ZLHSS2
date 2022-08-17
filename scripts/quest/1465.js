/* 
 5th Job Quests.
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.sendOk("如果你准备好了，请重新跟我对话吧。");
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendNext("不过，这些石头还没有完全属于你。\r\n如果你想把它们变成自己的，必须在上面记录下你所拥有的力量。\r\n\r\n#b(请激活女神之神秘石，狩猎等级范围怪。激活后的2小时内，狩猎经验值将被记录在神秘石上。该经验值在5次转职之后，可以通过经验值药水再获得一次。)#k");
        } else if (status == 1) {
            qm.sendNextPrev("请不要忘记，3个神秘石全部都要激活。");
        } else {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            qm.sendNext("现在你已经做好获得新力量的准备啦…好了，请把激活的神秘石交给我吧。我会使用它，唤醒你潜在的力量。\r\n\r\n#b(如果点击确认，即可完成5次转职)");
        } else if (status == 1) {
            qm.removeItem(2435734);
            qm.removeItem(2435735);
            qm.removeItem(2435736);
            qm.show5thJobEffect();
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}
