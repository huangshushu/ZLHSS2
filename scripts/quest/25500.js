/*
 * 光明中的黑暗，黑暗中的光明
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 19) {
            qm.sendOk("要想灵活运用力量，最好是进行实践……");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("尊敬的夜光法师，现在是该驾驭光之力量与黑暗力量，将其化为你自身力量而使用的时候了。");
    } else if (status == 1) {
        qm.sendNextPrevS("#b该如何驾驭？", 2);
    } else if (status == 2) {
        qm.sendNextPrev("我叫你来，正是为了跟你说说这个。请看画面右上方。看见跟上图\r\n#v3800300#\r\n一样的东西了吧？这个就是提示夜光法师拥有的光之力量与黑暗力量的栏。");
    } else if (status == 3) {
        qm.sendNextPrevS("#b这个翅膀是什么？", 2);
    } else if (status == 4) {
        qm.sendNextPrev("用于显示夜光法师可以积累的点数。你可以积累光明/黑暗点数各五个。夜光法师登录后，初次会各拥有一个光明/黑暗点数。使用和黑暗有关的技能时，将消耗一点黑暗点数，并立即成为#b心灵被黑暗笼罩的月蚀状态#k。请看下图。\r\n#v3800301#");
    } else if (status == 5) {
        qm.sendNextPrev("如果你继续使用暗之魔法，就会如下图所示，黑暗点数逐渐填满。\r\n#v3800302#");
    } else if (status == 6) {
        qm.sendNextPrev("#r累积的黑暗点数可以用于#b光明/黑暗状态切换#k技能。成为月蚀状态后，#k使用魔法时，#b仅消耗50%的魔力施展技能。每次施展技能时，会恢复1%的体力，使用暗之魔法还可以给敌人造成50%的额外伤害。对了，登录后只要使用一次和光明有关的技能，#k就可以驱逐心中的黑暗，立刻转变为太阳火焰状态。");
    } else if (status == 7) {
        qm.sendNextPrevS("#b心灵被黑暗笼罩，这听起来真让人不舒服。", 2);
    } else if (status == 8) {
        qm.sendNextPrev("哈哈哈，你不用担心。黑暗力量本身并没什么不好，归根结底要看你如何使用它。你是#b#e夜光法师#n#k，我相信你会把黑暗力量用在正道上的。你和某人……不一样。");
    } else if (status == 9) {
        qm.sendNextPrevS("#b好了，就说到这儿。下面还有什么内容？", 2);
    } else if (status == 10) {
        qm.sendNextPrev("#b在月蚀状态下，光/暗之魔法两种均可使用，点数也会继续累积。\r\n#v3800303#");
    } else if (status == 11) {
        qm.sendNextPrev("只要你不使用点数，会一直保持月蚀状态。月蚀增益图标#v3800310#显示在画面右上方。#b夜光法师的眼神和宝珠会发生如下变换，#k很容易就能看见。\r\n#v3800321#");
    } else if (status == 12) {
        qm.sendNextPrev("当心灵被黑暗笼罩时，自然对你使用暗之魔法更有利。不过，当你#r使用光明/黑暗状态切换技能，开始消耗光明点数后，#k黑暗会逐渐退去，#b光明将充满你的心灵#k。");
    } else if (status == 13) {
        qm.sendNextPrev("同样，当#r光明充满心灵后，#k如下所示，该栏会闪光，提示你成为太阳火焰状态。\r\n#v3800304#");
    } else if (status == 14) {
        qm.sendNextPrev("#r当光明充满心灵时，#k画面右上方也会显示太阳火焰增益图标#v3800309#，如下图所示，#b夜光法师的眼神和宝珠会恢复原样#k。\r\n#v3800320#");
    } else if (status == 15) {
        qm.sendNextPrev("成为太阳火焰状态后，#b和月蚀一样，每次使用光之魔法时，会恢复1%的体力，只消耗50%的魔力，并获得能在使用光之魔法时造成50%额外伤害的太阳火焰增益#k。在太阳火焰状态下，和月蚀状态时一样，光明/黑暗点数会继续累积。\r\n在该状态下使用黑暗点数可以重新变为月蚀状态。");
    } else if (status == 16) {
        qm.sendNextPrevS("#b所以梦幻概括起来，就是使用光之魔法时，消耗黑暗点数就能施展暗之魔法；使用暗之魔法时，消耗光明点数就能改为光之魔法，对吧？", 2);
    } else if (status == 17) {
        qm.sendNextPrev("没错，就是这样。如果你不知道现在该使用什么魔法，可以看看点数栏下方显示的强化的技能。\r\n<光之魔法>              <暗之魔法>\r\n#v3800312#  #v3800315#\r\n你都听明白了吗？");
    } else if (status == 18) {
        qm.sendNextPrevS("#b嗯，估计得试一试才能完全理解。", 2);
    } else if (status == 19) {
        qm.askAcceptDecline("哈哈哈，实践出真知，亲自使用一下你会更明白的。那么你去打猎怪物，#b分别转变一次太阳火焰或月蚀状态#k怎么样？");
    } else if (status == 20) {
        qm.forceStartQuest();
        qm.sendNextNoESC("好了，等你填满光明/黑暗点数各一次后再向我报告。");
        qm.dispose();
    }
}
