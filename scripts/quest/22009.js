/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 2) {
            qm.sendOk("什么？ 想想这个！ 如果农场失败，我们要生存下去！ 嗯？ 再次与我说话，然后按ACCEPT!");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.askAcceptDecline("如果狐狸的数量在农场附近增加，就像它在我们的房子附近，这将与爸爸的农场工作接口。 我们应该调查这个。 你不同意?");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("转到 #b中央农场#k 并问 #b爸#k 关于情况。 如果狡猾狐狸的数量在那里增加，我们将不得不进行一个大型狡猾狐狸狩猎.");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendOk("这是什么，埃文？我敢肯定你是不是在这里用爱来提供另一种饭盒，我太忙了，跟你玩了...什么？这里有增加北极狐的数量?");
    } else if (status == 1) {
        qm.sendNext("#b猪#k一直在疯狂，跳过所有的地方。 甚至狐狸似乎逃离了 猪s#b猪#k一直在疯狂，跳过所有的地方。 甚至狐狸似乎逃离了 猪s...");
        qm.gainExp(260);
        qm.forceCompleteQuest();
    } else if (status == 2) {
        qm.sendPrev("啊，也许这就是为什么狡猾狐狸人口附近的房子增加了。 他们跑到那里逃离 猪s. Hmm...");
        qm.dispose();
    }
}