var data = [[10, 0, 2300, "Mercedes"], [10, 0, 3100, "DemonSlayer"], [10, 0, 501, "Cannoneer"], [20, 400, 430, "DualBlade"], [10, 0, 508, "Jett"]];

function action(m,t,s) {
	if(t == 0) {
		cm.sendSimple("Which job would you like to be?\r\n#b#L0#Mercedes (Level 10 - Explorer)#l\r\n#L1#DemonSlayer (Level 10 - Explorer)#l\r\n#L2#Cannoneer (Level 10 - Explorer)#l\r\n#L3#DualBlade (Level 20 - Rogue)#l\r\n#L4#Jett (Level 10 - Exporer)#l\r\n#L5#How do I job advance?");
	} else {
		for (var i = 0; i < data.length; i++) {
		    if(s == i) {
				if (cm.getPlayerStat("LVL") >= data[i][0] && cm.getJob() == data[i][1]) {
					cm.changeJob(data[i][2]);
				} else {
					cm.PlayerToNpc("Oh Snap!\r\nI can't be a #b"+data[i][3]+"#k... Guess I should train more to become one!");
				}
			}
		}
		if(s == 5) {
			 cm.sendOk("You will auto job advance at your correct levels.");
		}
		cm.dispose();
	}
}