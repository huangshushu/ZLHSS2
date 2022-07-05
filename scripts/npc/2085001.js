function start() {
    var eim = cm.getDisconnected("Dragon_Nest");
    if (eim != null && cm.getPlayer().getParty() != null) { //only skip if not null
        eim.registerPlayer(cm.getPlayer());
    }
    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
        cm.sendOk("The leader of the party must be here.");
        cm.dispose();
        return;
    }
    var party = cm.getPlayer().getParty().getMembers();
    var next = true;
    var size = 0;
    var it = party.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
        if (ccPlayer == null || ccPlayer.getLevel() < 120 || (ccPlayer.getSkillLevel(ccPlayer.getStat().getSkillByJob(1026, ccPlayer.getJob())) <= 0)) {
            next = false;
            break;
        } else if (ccPlayer.isGM()) {
            size += 4;
        } else {
            size++;
        }
    }
    if (next && size >= 1) {
        var em = cm.getEventManager("Dragon_Nest");
        if (em == null) {
            cm.sendOk("This event is currently not available.");
        } else {
            var prop = em.getProperty("state");
            if (prop == null || prop.equals("0")) {
                em.startInstance(cm.getParty(), cm.getMap(), 200);
            } else {
                cm.sendOk("Someone is already attempting this boss.");
            }
        }
    } else {
        cm.sendOk("Make sure all 2+ 队员 are in this map and level 120+ and have Soaring skill.");
    }
    cm.dispose();
}

function action(a,b,c) {}