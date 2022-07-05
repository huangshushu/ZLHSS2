// 机械零件的下落
var status = -1;
var id = 0;
var 任务道具 = Array(2040704, 2040705, 2040707);

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var map = cm.getPlayer().getMapId();
        var mapid = 922000000;
        if (cm.getQuestStatus(3239) == 1 && map == mapid) {
            cm.sendNext("哦?完成了，让我看看。");
            status++;
        } else if (cm.getQuestStatus(3239) == 1) {
            cm.sendNext("嗨，找我来破任务了阿??");
        } else {
            cm.sendNext("没事别来妨碍我。");
            cm.dispose();
        }
    } else if (status == 1) {
        if (cm.getQuestStatus(3239) == 1) {
            var em = cm.getEventManager("Mechanical");
            if (em == null) {
                cm.sendOk("当前副本有问题，请联络管理员....");
            } else {
                var prop = em.getProperty("started");

                if (prop.equals("0") || prop == null) {
                    em.startInstance(cm.getPlayer());
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("里面已经有人在挑战...");
                }
            }
            cm.dispose();
        }
    } else if (status == 2) {
        cm.sendNext("啊哈~不简单啊,在规定时间内把10个#b机械零件#k带来了，好的！既然你为了我们玩具工厂付出这么大的心力，我将送给你一个不错的礼物，送给你之前，请先确认一下消耗栏内是否有一个以上的空间吧！");
    } else if (status == 3) {
        if (cm.haveItem(4031092, 10)) {
            if (cm.getQuestStatus(3239) == 1) {
                id = Math.floor(Math.random() * 任务道具.length);
                cm.gainItem(任务道具 [id], 1);
                cm.removeAll(4031092);
                cm.gainExp(2700);
                cm.forceCompleteQuest(3239);
            }
            cm.sendNext("怎么样？#b#t" + 任务道具 [id] + "##k收好了吗？希望我的礼物对你会有所帮助。");
        } else {
            cm.sendNext("我的#b#t4031092##kx10个呢?");
            cm.dispose();
        }
    } else if (status == 4) {
        cm.sendNext("多亏了你，我们的玩具工厂已经恢复运转了，真是幸运啊，现在我们已经特别注意，不会再弄丢零件了，你放心吧。好的，今天也要努力干活囉！");
    } else if (status == 5) {
        cm.warp(922000009);
        cm.dispose();
    }
}
