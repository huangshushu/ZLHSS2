var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else {
	cm.dispose();
	return;
	}

    if (status == 0) {
	if (cm.getEventInstance().getProperty("leader").equals(cm.getPlayer().getName())) {
	    if (cm.getEventInstance().getProperty("stage4clear") != null && cm.getEventInstance().getProperty("stage4clear").equals("true")) {
                cm.sendOk("我以为我永远会是永垂不朽的睡著，现在终于有人来守护这里了我现在终于可以好好的安息了！！");
		cm.safeDispose();
	    } else {
		var prev = cm.getEventInstance().setProperty("stage4clear","true",true);
		if (prev == null) {
                    cm.sendNext("我现在将为你完成这里的任务！！");
		} else { //if not null, was set before, and Gp already gained
                    cm.sendOk("我以为我永远会是永垂不朽的睡著，现在终于有人来守护这里了我现在终于可以好好的安息了！！");
		    cm.safeDispose();
		}
	    }
	} else {
	    if (cm.getEventInstance().getProperty("stage4clear") != null && cm.getEventInstance().getProperty("stage4clear").equals("true"))
                cm.sendOk("我以为我永远会是永垂不朽的睡著，现在终于有人来守护这里了我现在终于可以好好的安息了！！");
	    else
                cm.sendOk("我需要你的领导者和我谈话。");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	cm.gainGP(90);
	cm.getMap().getReactorByName("ghostgate").hitReactor(cm.getC());
	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.dispose();
    }
}
