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
            qm.sendNext("你刚开始接触新力量，最好先明白一些事。");
        } else if (status == 1) {
            qm.sendNextPrev("首先，你拥有极高的天分，想要好好利用这力量，应该不算难事。");
        } else if (status == 2) {
            qm.sendNextPrev("不过，如果你熟知一些基本的东西，应该更有助于你控制力量。所以，我想对此给你说明下，希望你能记好。");
        } else if (status == 3) {
            qm.sendNextPrev("新力量可以通过名为V矩阵的精神体系来控制。如果你打开#b技能栏#k，应该能看到#b'V'标签已经激活#k，你可以按下#bV矩阵按钮#k，对力量进行整理。");
        } else if (status == 4) {
            qm.sendNextPrev("如果你使用过核心宝石，应该已经获得新技能的核心了。你可以通过在V矩阵中#b双击核心#k，或者#b将其拖拽到空白栏位上#k，以便在#b'V'标签中查看新技能#k。");
        } else if (status == 5) {
            qm.sendNextPrev("与之相反，如果你在栏位中拿掉核心，那么'V'标签中的技能也会随之消失。");
        } else if (status == 6) {
            qm.sendNextPrev("总之，当你前往神秘河畔时，你的新技能应该会帮你很多忙。");
        } else if (status == 7) {
            qm.sendNextPrev("此外，如果你以后获得新的核心宝石，除了技能核心之外，你还能得到#b强化核心#k或#b特殊核心#k等。只要把强化核心装备在V矩阵上，你所拥有的技能就会变得更强大。");
        } else if (status == 8) {
            qm.sendNextPrev("如果把特殊核心装备在V矩阵上，技能不会发生变化，但当你处于特殊情况时，它将发出神秘力量，为你提供帮助。");
        } else if (status == 9) {
            qm.sendNextPrev("不过，特殊核心将会消耗大量的艾尔达，随着时间流逝，特殊核心可能也会消失。");
        } else if (status == 10) {
            qm.sendNextPrev("你也可以通过消耗技能核心和强化核心来进行强化，不过这项工作不是谁都能胜任的，你必须找到拥有#b'V核心大师'#k称号的人。");
        } else if (status == 11) {
            qm.sendNextPrev("你只要把核心拿给V核心大师看，然后鼠标右键点击强化之后，选择需要消耗的材料就行了。");
        } else if (status == 12) {
            qm.sendNextPrev("最后，通过装备核心获得的技能和能力，不适用增益持续时间增加效果，并具有冷却时间，这点请你注意。");
        } else if (status == 13) {
            qm.sendNextPrev("说明到这里，凭你的智慧，应该已经明白了吧。接下来你可以亲自操控你的力量了。继续向前进吧。");
        } else {
            qm.forceCompleteQuest();
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
            qm.dispose();
        }
    }
}
