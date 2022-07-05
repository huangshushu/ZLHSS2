var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    cm.removeAll(4031595);
    cm.removeAll(4031594);
    cm.removeAll(4031597);
    if (status == 0) {
        var marr = cm.getQuestRecord(160001);
        var data = marr.getCustomData();
        if (data == null) {
            marr.setCustomData("0");
            data = "0";
        }
        if (cm.getPlayer().getLevel() < 40 || cm.getPlayer().getMarriageId() <= 0 || !data.equals("3")) {
            cm.sendNext("你必须已经结婚且等级达到40等以上才能跟我说话唷～！");
            cm.dispose();
        } else {
            if (cm.haveItem(4031592)) {
                cm.gainItem(4031592, -1);
                cm.warp(670010100, 0);
                cm.dispose();
                return;
            }
            var apq = cm.getQuestRecord(160000);
            var data = apq.getCustomData();
            if (data == null) {
                apq.setCustomData("0");
                data = "0";
            }
            var time = parseInt(data);
            if (time + (6 * 3600000) < cm.getCurrentTime()) { //6 小时
                if (!cm.haveItem(4031592) && cm.haveItem(4031593, 10)) {
                    cm.gainItem(4031593, -10);
                    cm.gainItem(4031592, 1);
                    cm.sendOk("请下一张入场卷要6小时候唷。");
                    apq.setCustomData("" + cm.getCurrentTime());
                } else {
                    cm.sendOk("从怪物身上取得 10 个蓝环钥匙给我. 你一次只能拥有一个入场卷.");
                }
            } else {
                cm.sendNext("领取的时间尚未满6小时。");
            }
            cm.dispose();
            return;
        }
    }
}
