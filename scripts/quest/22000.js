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
            qm.sendNext("嗯？不想告 尤塔 吗？真是，兄弟之间应该好好相处嘛。");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendNext("醒了吗，小不点？");
    } else if (status == 1) {
        qm.PlayerToNpc("#b嗯……妈妈也醒了吗？#k");
    } else if (status == 2) {
        qm.sendNextPrev("嗯……但是你怎么好象没睡着呢？昨天晚上打了一夜的雷。所以才没睡好吗？");
    } else if (status == 3) {
        qm.PlayerToNpc("#b不，不是因为那个，是因为做了一个奇怪的梦。#k");
    } else if (status == 4) {
        qm.sendNextPrev("奇怪的梦，梦见什么呢？");
    } else if (status == 5) {
        qm.PlayerToNpc("#b嗯……#k");
    } else if (status == 6) {
        qm.PlayerToNpc("#b(说明梦见在迷雾中遇到龙的事情。)");
    } else if (status == 7) {
        qm.sendAcceptDecline("呵呵呵呵，龙？怎么会梦到这个呢？没被吃掉，真是太好了。你做了个有趣的梦，去告诉 尤塔 吧。他一定会很高兴的。");
    } else if (status == 8) {
        qm.forceStartQuest();
        qm.sendNext("#b尤塔#k 去 #b前院#k 给猎犬喂饭了。从家里出去就能见到他了。");
    } else if (status == 9) {
        qm.evanTutorial("UI/tutorial/evan/1/0", 1);
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
        qm.sendNext("哦，起来啦，小不点？大清早的，怎么这么大的黑眼圈啊？晚上没睡好吗？什么？做了奇怪的梦？什么梦啊？嗯？梦见遇到了龙？");
    } else if (status == 1) {
        qm.sendNextPrev("哈哈哈哈～龙？不得了。居然梦到了龙！但是梦里有狗吗？哈哈哈哈～\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20 exp");
    } else if (status == 2) {
        qm.gainExp(20);
        qm.evanTutorial("UI/tutorial/evan/2/0", 1);
        qm.forceCompleteQuest();
        qm.dispose();
    }
}