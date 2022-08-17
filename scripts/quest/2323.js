/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.sendOk("这将是你进入城堡的唯一途径。请想清楚");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendNext("啊!有可能是一种方式......如果你可以利用，我们已经成长为我们的城堡的保护脊椎藤，那么你也许能够进入的前提!");
    } else if (status == 1) {
        qm.sendAcceptDecline("如果你能以某种方式消除脊椎藤刺，然后你就可以翻越使用藤城墙。当然，这也将需要一个藤卸妆...");
    } else if (status == 2) {
        qm.sendOk("该#b脊柱去除#k 在萨尔瓦多纳斯的高原被创造出来，从神秘的草药提取物。王佩佩用这些草药来麻醉猪并接管蘑菇森林. #b陶醉尾纤#k 在这里你会发现药草提取物。请收集起来 #b100陶醉尾纤#k并带他们去找 #b魔法部部长.#k");
    } else if (status == 3) {
        //qm.forceStartQuest();
        //qm.forceStartQuest(2324, "1");
        qm.gainExp(11000);
        qm.sendOk("干得好通过该地区航行.");
        qm.forceCompleteQuest();
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
        qm.sendOk("嗯我知道了...所以他们完全关闭入口和一切.");
    } else if (status == 1) {
        qm.gainExp(11000);
        qm.sendOk("干得好通过该地区航行.");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}