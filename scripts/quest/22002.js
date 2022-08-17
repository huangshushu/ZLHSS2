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
            qm.sendNext("嗯？干嘛？你不想吃早饭了吗？不吃东西可不好。如果你想吃饭的话，就再来找我。不快点说的话，就要被我吃掉了啊？");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendNext("给#p1013102#喂过饭了吗？小不点你去吃早饭吧。今天的早饭是#t2022620#。我拿出来了，嘻嘻。事实上，如果你不去给#p1013102#喂食，我就不打算给你早饭吃。");
    } else if (status == 1) {
        qm.sendAcceptDecline("来，给你#b三明治，吃完之后到妈妈那里去一趟。#k她好象有话要跟你说。");
    } else if (status == 2) {
        qm.forceStartQuest();
        qm.PlayerToNpc("#b(有话要跟我说？先把#t2022620#吃了，然后到屋里去看看吧。)#k");
        qm.gainItem(2022620, 1);
    } else if (status == 3) {
        qm.evanTutorial("UI/tutorial/evan/3/0", 1);
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
        qm.sendNext("早饭吃了吗，小不点？你能帮妈妈做件事吗？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1003028# #t1003028# 1个  \r\n#i2022621# #t2022621# 5个 \r\n#i2022622# #t2022622# 5个 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 60 exp");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.evanTutorial("UI/tutorial/evan/4/0", 1);
        qm.gainItem(1003028, 1);
        qm.gainItem(2022621, 5);
        qm.gainItem(2022622, 5);
        qm.gainExp(60);
        qm.dispose();
    }
}