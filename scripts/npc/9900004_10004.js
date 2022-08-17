/* Duey
   Edited by: Sean360 of RZ
   Latest edits and updates were made by the Maple4U Administrator
*/


var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendYesNo("MaxSkills?");
		} else if (status == 1) {
			//GM skill updated by Maple4U Start
			cm.teachSkill(4111006,20,20);
			//Pirate skills by Maple4U End
			cm.teachSkill(8,1,1);
			cm.dispose();
			}
		}
	}