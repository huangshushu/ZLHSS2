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
    if (status == 0) {
	cm.sendSimple("#b#L2#去打破监狱的一个聚会.#l\r\n#L3#马克思·冯·莱昂腰带（50卫队钥匙) (STR/DEX)#l\r\n#L4#阿尔玛·冯·莱昂腰带（50卫队键）（INT / LUK）#l\r\n#L5#福克斯冯莱昂腰带（50卫队键）（STR/ DEX）#l\r\n#L6#氮氧化物冯莱昂腰带（50卫队键）（DEX/ LUK）#l\r\n#L7#科拉·冯·莱昂腰带（50卫队键）（STR/ DEX）#l#k");
    } else if (status == 1) {
	if (selection == 2) {
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("党的领导人必须在这里.");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 120) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && size >= 2) {
			var em = cm.getEventManager("Prison");
			if (em == null) {
				cm.sendOk("监狱是目前精. 请稍后再试.");
			} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
		    } else {
			cm.sendOk("另一方的任务已经进入该通道.");
		    }
			}
		} else {
			cm.sendOk("贵党全体2+成员必须是在这里和等级120或更高.");
		}
	    }
	} else if (selection == 3 || selection == 4 || selection == 5 || selection == 6 || selection == 7) {
		if (!cm.canHold(1132091 + selection,1)) {
			cm.sendOk("使装备室.");
		} else if (cm.haveItem(4001534,50)) { //TODO JUMP
			cm.gainItem(1132091 + selection, 1);
			cm.gainItem(4001534, -50);
		} else {
			cm.sendOk("回来与50卫队关键.");
		}
	}
	cm.dispose();
    }
}