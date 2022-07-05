/* 鬼娃恰吉PQ by:Kodan*/
var Ghostbaby = 1; //一天五场
var status = -1;
var randTalk = Math.floor(Math.random() * 10) + 1;

function action(mode, type, selection) {

    var Editing = true; //false 开始
    if (Editing) {
        cm.sendOk("维修中");
        cm.dispose();
        return;
    }

    if (status == 1 && mode == 0 || status == 5 && mode == 1 || status == 10 && mode == 1 || status == 13 && mode == 1 || status == 15 && mode == 0 　 || status == 0 && mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        if (cm.getBossLog('Ghostbaby') >= 1) {
            cm.sendOk("每天只能打1次鬼娃恰吉！");
            cm.dispose();
        }
        cm.sendNext("蒐集到解梦钥匙了吗？让我来帮你解梦吧！看看你在万圣节会出现什么样的梦，解梦钥匙就由我来拿走吧！");
    } else if (status == 1) {
        if (randTalk >= 5) {
            cm.sendNext("梦里面的南瓜正在睡觉呢~如果你带一些南瓜碎片以及300万枫币，他有可能会唤醒也说不定？");
            cm.gainItem(4001337, -1);
            cm.gainMeso(-3000000);
            cm.dispose();
        } else {
            cm.sendNext("哦不~可怕的噩梦就要开始了，你梦见了鬼娃恰吉正在开始破坏万圣节派对，并抢走孩子们的糖果！好好教训他们，并把他们赶出去吧！");
        }
    } else if (status == 2) {
        if (cm.haveItem(4001337)) {
            var em = cm.getEventManager("Ghostbaby");
            if (em == null) {
                cm.sendOk("当前副本有问题，请联络管理员....");
                cm.dispose();
            } else {
                var prop = em.getProperty("state");
                if (prop.equals("0") || prop == null) {
                    em.startInstance(cm.getPlayer(), cm.getMap());
                    cm.setBossLog("Ghostbaby");
                    cm.gainItem(4001337, -1);
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("里面已经有人在挑战鬼娃恰吉了...");
                    cm.dispose();
                }
            }
        } else {
            cm.sendOk("貌似没有钥匙呢不能做梦了！");
            cm.dispose();
        }
    }
}
