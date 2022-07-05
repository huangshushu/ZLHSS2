function action(mode, type, selection) {
    if (cm.getQuestStatus(6410) == 1) {
        var ddz = cm.getEventManager("ProtectRichard");
		if (cm.getParty() == null) {
			cm.sendOk("请组队。");
		} else {
        if (ddz == null) {
            cm.sendOk("未知的错误");
        } else {
            var prop = ddz.getProperty("state");
            if (prop == null || prop.equals("0")) {
                ddz.startInstance(cm.getParty(), cm.getMap());
            } else {
                cm.sendOk("别人挑战了，请稍后重试了一下.");
            }
        }
		}
    } else if (cm.getMapId() == 925010400) {
		cm.warp(120000104,0);
	}
    cm.dispose();
}
