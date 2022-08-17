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
            qm.askAcceptDecline("由我来说明另一种让怪怪变得更强的方法吧。");
        } else if (status == 1) {
            qm.sendNext("怪怪不只能强化，也可以进化呢。透过怪怪图鉴上的进化分页就可以进行进化。");
        } else if (status == 2) {
            qm.sendNext("#i3801011#\r\n怪怪们可以进行进化。但是在进化前，必须确认目标怪怪已经抵达 Lv5 (最大等级)。");
        } else if (status == 3) {
            qm.sendNext("#i3801011#\r\n先把Lv5的怪怪放在上方的 Base 栏后，再把相同阶级的怪怪材料配置在下方的 Material 栏上，点击进化按钮即可。");
        } else if (status == 4) {
            qm.sendNext("#i3801011#\r\n进化是无条件成功，做为进化用材料的怪怪也会因失去力量而回归自然。");
        } else if (status == 5) {
            qm.sendNext("进行进化的怪怪是会提升阶级，阶级从低到高分为C级、B级、A级、S级与SS级。");
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