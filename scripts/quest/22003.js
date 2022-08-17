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
            qm.sendNext("不要觉得麻烦就不愿意去。你是个好孩子，对吧？再来和我说话吧。");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendAcceptDecline("去农场干活的时候，#b爸爸#k忘了把便当带过去了。你能去 #b#m100030300##k 给爸爸送#b便当#k吗？");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendNext("呵呵，小不点果然是个好孩子～#b从家里出去后，往左边走。#k爸爸一定饿极了，你最好快点给他送过去。");
        if (!qm.haveItem(4032448)) {
            qm.gainItem(4032448, 1);
        }
    } else if (status == 3) {
        qm.sendNextPrev("如果不小心把便当弄丢了，就马上回来。我再给你包一份。");
    } else if (status == 4) {
        qm.evanTutorial("UI/tutorial/evan/5/0", 1);
        qm.dispose();
    }
}

function end(mode, type, selection) {

}