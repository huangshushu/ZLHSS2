var status = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
    } else {
        status++;
        if (status == 0) {
            cm.sendSimple("嗨，我是#p9000003#，需要什么帮忙吗？？\r\n#L0#我拿到宝箱了。");
        } else if (status == 1) {
            if (cm.getQianDaoAcLog("箱子活动") < 3) {
                if (cm.haveItem(4001102)) {
                    cm.setAcLog("箱子活动");
                    cm.gainItem(4001102, -1);
                    cm.giveEventPrize();
					cm.sendOk("恭喜你获得神秘奖励");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有#b#t4001102##k，你来找我做什么？？");
                    cm.dispose();
                }
            } else {
                cm.sendOk("你今天已经兑换过3次宝箱。");
                cm.dispose();
                return;
            }
            cm.dispose();
        }
    }
}

function getEimForGuild(em, id) {
    var stringId = "" + id;
    return em.getInstance(stringId);
}
