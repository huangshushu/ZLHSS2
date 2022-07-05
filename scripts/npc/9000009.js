var status = 0;


function start() {
	if (cm.getPlayer().isGM() || cm.getPlayer().getAccountID() == 15726) {
		cm.dispose();
		cm.openNpc(9000009, "额外奖励");
	} else {
		cm.sendOk("Hi!我是#p9000009#");
		cm.dispose();
	}
	
	
}
