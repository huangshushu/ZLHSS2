/* Dawnveil
    [Ellinel Fairy Academy] The Final Rescue
	Woonie and Tracy
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (status == 0) {
    	cm.sendOkS("Please eliminate that gross old mole!\r\n#b(Defeat the Mole king.)",4);
    	cm.dispose();
    }
}