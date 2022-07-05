/* 
 * @Author Lerk
 * 
 * Tiger Statue (990000900)
 * 
 * Guild Quest - end of boss
 */
load('nashorn:mozilla_compat.js');
importPackage(java.lang);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    if (eim != null) {
	if (eim.getProperty("leader").equals(cm.getName())) {
	    if (cm.haveItem(4001024)) {
		cm.removeAll(4001024);
		var prev = eim.setProperty("bossclear","true",true);
		if (prev == null) {
		    var start = parseInt(eim.getProperty("entryTimestamp"));
		    var diff = System.currentTimeMillis() - start;
		    var points = 3000 - Math.floor(diff / (100 * 60));
		    cm.gainGP(points);
		}
		eim.finishPQ();
	    } else {
                cm.sendOk("这是你最后的挑战。请打带恶灵13后并带著他的遗物来找我。");
	    }
	}
    } else {
	cm.warp(990001100);
    }
	cm.dispose();
}
