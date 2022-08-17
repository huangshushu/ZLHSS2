梦幻冒险大/* 
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
            qm.sendNext("经过漫长的旅程，你已经到达力量的巅峰…你在追求力量的同时，有没有迷失前进的方向呢？");
        } else if (status == 1) {
            qm.sendYesNo("说不定你不仅能活用你的力量，还能趁此机会变得更强。\r\n如果你有意向，请来时间神殿找我吧。\r\n\r\n#b(如果接受的话，将移动到时间神殿进行#e5次转职#n。)#k");
        } else if (status == 2) {
            var text = "好可惜，你还没有获得女神的许可，不能探索时间神殿的深处。请具备资格后再来找我吧？\r\n\r\n#b(在5次转职之前，必须完成下列#r时间神殿#k任务)#r";
            var ok = true;
            if (!qm.isQuestFinished(3500)) {
                text += "\r\n过去之路（探索时间神殿）";
                ok = false;
            }
            if (!qm.isQuestFinished(3505)) {
                text += "\r\n通过追忆之路（探索时间神殿）";
                ok = false;
            }
            if (!qm.isQuestFinished(3512)) {
                text += "\r\n通过后悔之路（探索时间神殿）";
                ok = false;
            }
            if (!qm.isQuestFinished(3519)) {
                text += "\r\n通过忘却之路（探索时间神殿）";
                ok = false;
            }
            if (!qm.isQuestFinished(3556)) {
                text += "\r\n迷路的神官（神官剧情故事）";
                ok = false;
            }
            ok = true;
            if (!ok) {
                qm.sendOk(text);
                qm.dispose();
            } else {
                if (qm.getMapId() != 270010111) {
                    qm.forceStartQuest();
                    qm.warp(270010111);
                    qm.dispose();
                } else {
                    qm.forceStartQuest();
                    qm.dispose();
                }
            }
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

        var cs = qm.getQuestCustomData();
        if (cs == null || cs.equals("0") || cs.equals("")) {
            if (status == 0) {
                qm.askMenu("#h #.....你的事迹我已经早有耳闻了\r\n\r\n我今天喊你来，是为了告诉你这个世界正在发生奇怪的事情。\r\n\r\n#L0##b奇怪的事情？#k#l");
            } else if (status == 1) {
                qm.askMenu("不知道你有没有听说过构成这个世界的能量--#e艾尔达？#n\r\n\r\n#L0##b艾尔达？#k#l");
            } else if (status == 2) {
                qm.askMenu("艾尔达不停地重复着诞生与消亡，构成并支撑着这个世界。不仅冒险岛世界，其他次元的世界中也充斥着艾尔达。从你刚刚踏上这个世界开始，无论是泥土和树木，还是光明和黑暗中...都存在艾尔达\r\n\r\n#L0##b看来艾尔达真的很重要啊。#k#l");
            } else if (status == 3) {
                qm.askMenu("那是当然。如果没有艾尔达，这个世界根本不会存在...不过，从不久前开始，我发现艾尔达正在逐渐消失。\r\n\r\n#L0##b艾尔达正在消失？#k#l");
            } else if (status == 4) {
                qm.sendNext("看来你还不太相信。除非亲眼所见，不然确实令人难以置信。百闻不如一见，等你亲眼看到了，你就明白了。");
            } else if (status == 5) {
                qm.askYesNo("如果你愿意，我会引导你短暂观察下艾文达的流动。好了，请闭上眼......\r\n\r\n#b(如果接受的话，请根据旁观者的引导，集中精神。)#k");
            } else if (status == 6) {
                qm.dispose();
                qm.warp(450000200);
            }
        } else if (cs != null && cs.equals("1")) {
            if (status == 0) {
                qm.askMenu("怎么样，亲眼看到艾尔达的流动后你有什么感想？\r\n\r\n#b#L0#我和它进行了对话。");
            } else if (status == 1) {
                qm.sendNextPrev("！！这是真的吗，你和艾尔达对话了？\r\n\r\n我终身都在观察艾尔达的流动，但却从未听过它说话。");
            } else if (status == 2) {
                qm.askMenu("艾尔达愿意和你对话……\r\n\r\n看来你比我想象中的还要强大。艾尔达希望能赋予你力量，让你守护它们。\r\n\r\n#b#L0#我该怎么做才能获得更强的力量呢？");
            } else if (status == 3) {
                qm.sendNext("说不定#b女神#k们会知道方法。自古以来，一直是女神将艾尔达和人类联系在一起。\r\n\r\n你最好到我所说的地方，去见见女神们。");
                qm.forceCompleteQuest();
                qm.dispose();
            }
        }
        //qm.forceCompleteQuest();
    }
}
