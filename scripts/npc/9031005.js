var status = -1;
var sel = -1;

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
	cm.sendSimple("#b#L0#学习/忘掉炼金术#l");
    } else if (status == 1) {
	    if (cm.getPlayer().getProfessionLevel(92040000) > 0) {
		cm.sendYesNo("你确定要忘掉炼金术？您将失去在炼金术所有EXP /水平.");
	    } else if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92000000) <= 0) {
		cm.sendOk("你学不会忘掉和炼金术，因为你已经有锻造或附件手工艺，或你没有草药.");
		cm.dispose();
	    } else {
		cm.sendYesNo("你想学习炼金术?");
	    }
    } else if (status == 2) {
	    if (cm.getPlayer().getProfessionLevel(92040000) > 0) {
		cm.sendOk("你不精通了炼金术.");
		cm.teachSkill(92040000, 0, 0);
	    } else {
		cm.sendOk("你已经学会炼金术.");
		cm.teachSkill(92040000, 0x1000000, 0); //00 00 00 01
	    }
	    cm.dispose();
    }
}