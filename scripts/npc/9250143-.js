/*新副本？没测试*/
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
	        cm.sendSimple("欢迎.#b\r\n\r\n#L0#转到母舰 - 易（30+级）#l\r\n#L1#转到母舰 - 中型（60+级）#l\r\n#L2#转到母舰 - 硬盘（等级120+）#l");
    	    } else if (status == 1) {
	        if (selection == 0 || selection == 1 || selection == 2) {
   		    var em = cm.getEventManager("Visitor");
    		    if (em == null) {
			cm.sendOk("请稍后再试.");
			cm.dispose();
			return;
    		    }
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
				if (ccPlayer == null || ccPlayer.getLevel() < (selection == 0 ? 30 : (selection == 1 ? 60 : 120))) {
					next = false;
					break;
				}
				size += (ccPlayer.isGM() ? 2 : 1);
			}	
			if (next && size >= 2) {
		    		if (em.getInstance("Visitor" + selection) == null) {
					em.startInstance_Party("" + selection, cm.getPlayer());
		    		} else {
					cm.sendOk("另一方的任务已经进入该通道.");
		    		}
			} else {
				cm.sendOk("贵党的所有成员必须在这里。至少需要2人进入母舰.");
			}
		    }
		}
	        cm.dispose();
            }
}