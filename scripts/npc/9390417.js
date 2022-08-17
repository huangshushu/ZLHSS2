/*
 * 
 * 阿卡伊勒
 */
function start() {
    cm.sendOk("把我精心安排的计划化为泡影的家伙们竟然会自己找上门来，就别提我有多么高兴了。\n\r\n\r 你们要为此付出代价！");
}

function action(mode, type, selection) {
    	cm.killAllMob();
	cm.removeNpc(cm.getMapId(), 9390417);
    	cm.spawnMob(8860000, 1, 0, -181);
    	cm.dispose();

// If accepted, = summon PB + Kriston Disappear + 1 hour timer
// If deny = NoTHING HAPPEN
}
