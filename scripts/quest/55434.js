var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.askAcceptDecline("由我来说明让怪怪强化的一些方法吧。");
        } else if (status == 1) {
            qm.sendNext("有些可以让怪怪强化的方法唷。您可以在怪怪图鉴的强化分页上进行怪怪的强化。");
        } else if (status == 2) {
            qm.sendNext("#i3801010#\r\n请先把要进行强化的怪怪放在 Base 格。之后再配置用来强化的怪怪们。配置的数量能最少为 1只，最多为 4只。");
        } else if (status == 3) {
            qm.sendNext("#i3801010#\r\n配置完成后点击强化按钮，要强化的目标就会得到其他怪怪们的力量了。强化最高能进行到 Lv5为止。");
        } else if (status == 4) {
            qm.sendNext("#i3801010#\r\n强化有可能会成功也有可能会失败，成功机率会依照强化用怪怪的阶级不同而有所变化。");
        } else if (status == 5) {
            qm.sendNext("#i3801010#\r\n我是觉得…更高等级的强化用怪怪应该会有比较好的强化机率吧？");
        } else if (status == 6) {
            qm.sendNext("#i3801010#\r\n至于强化的顺序是依照配置强化用怪怪的顺序来进行，由左至右。在完成强化后，强化用怪怪们的力量会消失并回归自然。");
        } else if (status == 7) {
            qm.sendNext("#i3801010#\r\n若在得到所有强化用怪怪的力量前目标就抵达最高等级时，剩下的强化用怪怪则会回到图鉴中。");
        } else {
            qm.forceStartQuest();
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        qm.dispose();
    }
}