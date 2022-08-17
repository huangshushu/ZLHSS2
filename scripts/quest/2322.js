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
            qm.sendNext("我们需要你的帮助。");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendYesNo("就像我刚才告诉你的一样，刚刚打破的障碍不值得庆祝，这是因为企鹅王国禁止让所有人进入城堡，嗯。。得找出另外一种潜入方式。");
    } else if (status == 1) {
        qm.sendNext("路过蘑菇森林，当你到屏障的时候，就可以走进城墙了，祝你好运。");
    } else if (status == 2) {
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
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendOk("嗯。。可能他们已经关闭大门。");
    } else if (status == 1) {
        qm.gainExp(11000);
        qm.sendOk("干得好，太谢谢你了。");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}