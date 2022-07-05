//黑轮王任务副本
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selected) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getQuestStatus(8626) == 1) {
                cm.sendNext("准备好挑战黑轮王了吗??");
            } else if (cm.getQuestStatus(8626) == 2) {
                //if (cm.getBossLog("heilunwang") >= 5) {
                //     cm.sendOk("每天只能打5次黑轮王！");
                //      cm.dispose();
                //      return;
                //  } else {
                cm.setBossLog("heilunwang");
                cm.warp(741020102, 0);
                cm.dispose();
                //   }
            } else {
                cm.sendNext("很抱歉，您无法通过这里。");
                cm.dispose();
            }
        } else if (status == 1) {
            var em = cm.getEventManager("SnackBar");
            if (em == null) {
                cm.sendOk("当前副本有问题，请联络管理员....");
                cm.dispose();
            } else {
                var prop = em.getProperty("state");
                if (prop.equals("0") || prop == null) {
                    // if (cm.getBossLog("heilunwang") >= 5) {
                    //     cm.sendOk("每天只能打5次黑轮王！");
                    //     cm.dispose();
                    //     return;
                    // } else {
                    cm.setBossLog("heilunwang");
                    em.startInstance(cm.getPlayer(), cm.getMap());
                    cm.dispose();
                    return;
                    //  }
                } else {
                    cm.sendOk("里面已经有人在挑战黑轮王了...");
                    cm.dispose();
                }
            }
        }
    }
}
