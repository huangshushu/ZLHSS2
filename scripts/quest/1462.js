/* 
 5th Job Quests.
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.sendOk("考虑好后再来找我吧。");
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendNext("远道而来，真是辛苦你了。\r\n\r\n我们一直守护着这个世界的勇士，但却很少有人见过我们的样子。");
        } else if (status == 1) {
            qm.sendNext("你想获得控制艾尔达的力量？\r\n\r\n你的体内也存在着艾尔达。如果好好利用这艾尔达，你就能发挥出新力量。当然，前提是我为你提供一点点帮助。");
        } else if (status == 2) {
            qm.sendNext("不过，在此之前希望你能回答我一个问题。\r\n\r\n#b(女神好像有什么疑问。去听听是什么疑问吧。)#k");
        } else if (status == 3) {
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
            qm.sendNext("我想问的问题非常梦幻。");
        } else if (status == 1) {
            qm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#和我一起对抗黑魔法师的同伴们#l\r\n");
        } else if (status == 2) {
            qm.askMenu("艾尔达不停地重复着诞生与消亡，构成并支撑着这个世界。不仅冒险岛世界，其他次元的世界中也充斥着艾尔达。从你刚刚踏上这个世界开始，无论是泥土和树木，还是光明和黑暗中...都存在艾尔达\r\n\r\n#L0##b看来艾尔达真的很重要啊。#k#l");
        } else if (status == 3) {
            qm.sendNext("我认为可以相互信任的同伴最为珍贵。\r\n\r\n所以我最珍惜跟我一起对抗黑魔法师的同伴们。当然，其中也有些不可靠的家伙，但... 这都是小问题。");
        } else if (status == 4) {
            qm.sendNext("这样啊。这并不是一个梦幻的问题。因为对所有人来说，珍惜的东西都不仅只有一个。\r\n\r\n这个问题并没有正确答案。我只是好奇勇士你为什么想守护这个世界而已。\r\n\r\n#b#i2435734:# #t2435734:# 1个");
        } else if (status == 5) {
            qm.sendNext("这个石头被称为#b神秘石#k。如果勇士你把自己的力量记录在这石头上，艾尔达之力就会化作适合你的形态，渗入你的体内。");
        } else if (status == 6) {
            if (qm.canHold(2435734)) {
                qm.sendNext("通过了女神的考验，获得了神秘石。现在去找其他女神吧。\r\n\r\n#b#p1540943##k : 万神殿的#b#m400000001##k\r\n#b#p1540944##k : 堕落世界树的#b#m105300000##k");
                qm.gainItem(2435734, 1);
                qm.forceCompleteQuest();
            } else {
                qm.sendNext("背包空间不足！请清理");
            }
            qm.dispose();
        }
    }
}
