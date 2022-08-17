var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
        qm.sendNextNew("……我能理解. 对于我这种人你一定没什么兴趣的. 即使世界发生变化. ");
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendNextNew("喂, 你能听见我说话吗? \r\n\r\n你现在手里拿着的东西叫做智能手机. 虽然这东西在这个世界是个稀罕物, 但在我之前生活的地方却是非常常见呢.");
        } else if (status == 1) {
            qm.sendNextPrevNew("对了, 你看见我的衣服了吗? \r\n这是校服, 我之前所在的世界里, 学生们都要穿这种衣服的. ");
        } else if (status == 2) {
            qm.sendYesNoNew("怎么样, 对这个新的世界是不是很感兴趣呢?\r\n\r\n#b（如果接受, 则会移动到射手村衣柜落入的房子里. ）#k");
        } else if (status == 3) {
            qm.sendNextNew("那么, 请到射手村衣柜落入的房子来找到我吧.\r\n\r\n#e#b通过次元之镜也可移动到那里. #n#k");
        } else if (status == 4) {
			qm.forceStartQuest();
            qm.warp(100000004, 1);
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
        if (status == 0) {
            if (qm.getPlayerStat("HP") < 50) {
                qm.sendNext("嗨，你的HP还没有完全恢复，使用我给你的苹果来补充吧！快去试试!");
                qm.dispose();
            } else {
                qm.sendNext("消耗道具。。。怎么样？很梦幻吧？可以在右下角设定#b快捷键#k，你还不知道吧？哈哈~");
            }
        } else if (status == 1) {
            qm.sendNextPrev("不错！学得很好应该给你礼物。这些都是在旅途中必需的，谢谢我吧！危机的时候好好使用。");
        } else if (status == 2) {
            qm.sendNextPrev("我能教你的只有这些了。有点儿舍不得也没办法，到了要离别的时候。路上小心，一路顺风啊！！！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2010000# 3 #t2010000#\r\n#v2010009# 3 #t2010009#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp");
        } else if (status == 3) {
            qm.gainExp(10);
            qm.gainItem(2010000, 3);
            qm.gainItem(2010009, 3);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}