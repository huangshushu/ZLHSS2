function start() {
    if (cm.getQuestStatus(6108) == 1) {
        var ret = checkJob();
        if (ret == -1) {
            cm.sendOk("请先组队在确认一次。");
        } else if (ret == 0) {
            cm.sendOk("请确认队伍里面有两个人。");
        } else if (ret == 1) {
            cm.sendOk("队伍其中一个人没有符合资格。");
        } else if (ret == 2) {
            cm.sendOk("队伍里有成员尚未符合。");
        } else {
            var em = cm.getEventManager("s4aWorld");
            if (em == null) {
                cm.sendOk("找不到副本请联系管理员。");
            } else if (em.getProperty("started").equals("true")) {
                cm.sendOk("已经有队伍正在挑战，请稍后再尝试。");
            } else {
                em.startInstance(cm.getParty(), cm.getMap());
            }
        }
    }
    cm.dispose();
}

function action(mode, type, selection) {}

function checkJob() {
    var party = cm.getParty();

    if (party == null) {
        return -1;
    }

    var it = party.getMembers().iterator();

    while (it.hasNext()) {
        var cPlayer = it.next();

        if (cPlayer.getJobId() == 312 || cPlayer.getJobId() == 322 || cPlayer.getJobId() == 900) {
            if (cPlayer.getLevel() < 120) {
                return 2;
            }
        } else {
            return 1;
        }
    }
    return 3;
}
