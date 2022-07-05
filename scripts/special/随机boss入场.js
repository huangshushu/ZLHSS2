var status = 0;
//召唤npc的id
var npcid = 9310022;
function start() {
    var Editing = false //false 开始
    if (Editing) {
        cm.sendOk("维修中");
        cm.dispose();
        return;
    }
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
		var em = cm.getEventManager("randomboss");
		if (em == null) {
			cm.sendSimple("找不到脚本请联络GM");
		} else {
			var prop = em.getProperty("state");
			if (prop.equals("0") || prop == null) {
				em.startInstance(cm.getParty(), cm.getMap());
				cm.removeNpc(npcid);
				cm.dispose();
				return;
			} else {
				cm.sendOk("其他队伍已经在里面了");
			}
		}
    } else {
		cm.dispose();
    }
}


