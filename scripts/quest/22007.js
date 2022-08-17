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
            qm.sendNext("不愿意？那就算了。孵化器我就不能给你。");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendNext(" 嗯，好吧，我把孵化器给你，但你要帮我做一件事。妈妈让我去收 鸡蛋 ，我还没去呢。啊～因为我觉的麻烦。如果你能帮我去收 鸡蛋 ，我就把孵化器给你。怎么样？可以吗？");
    } else if (status == 1) {
        qm.sendOk(" 好的，那你快到#b右边的 鸡蛋桶#k 去，把 鸡蛋 拿回来。点击鸡蛋桶 ，就可以获得 鸡蛋 。拿太多的话，会不太方便，你只要拿1个回来就行。");
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.sendNext("嗯？奇怪。孵化器没有设置好。重新尝试一下吧。");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendNext("哦，鸡蛋 拿来了吗？快把蛋给我吧。我来帮你把它孵化。");
    } else if (status == 1) {
        qm.sendYesNo("来，拿着。不知道这到底可以用来干什么…… \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 360 经验");
    } else if (status == 2) {
        qm.forceCompleteQuest();
        qm.gainExp(360);
        if (qm.haveItem(4032451)) {
            qm.gainItem(4032451, -1);
        }
        qm.evanTutorial("UI/tutorial/evan/9/0", 1);
        qm.dispose();
    }
}