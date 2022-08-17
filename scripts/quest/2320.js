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
            qm.sendOk("我想让你亲自给这块好消息#b布鲁斯#k, 但我明白，如果你很忙.");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendAcceptDecline("我对你只有一个要求更多。你想坐听?");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.gainItem(4032389, 1);
        qm.sendOk("说实话，这些#b杀手孢菇#k不完全出我自己的工作。 你还记得吗#b布鲁斯#k 从#bHenesys#k? 从小我一直和他交朋友，和 #b杀手孢菇#k完成后，他分享了他的研究结果和我在一起。这一切都归功于他，所以我想你把这个交给他我.");
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
        qm.sendOk("哦!你在这里代表#bScarrs#k? \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 8800 exp");
    } else if (status == 1) {
        qm.gainExp(8800);
        qm.gainItem(4032389, -1);
        qm.sendOk("啊，所以这是#b杀手孢菇#k我在过去的工作。我有一个艰难的时间收拾的成分，所以我把它只有理论，但他能够完成它，用样本显示为好。请告诉他，我很欣赏他的出色工作.");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}