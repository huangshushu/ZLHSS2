/* Dawnveil
    [Ellinel Fairy Academy] The First Rescue
	Tosh the Fairy
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (status == 0) {
    	cm.sendOkS("Help me! I'm totally stuck 'cuz of all the monsters!\r\n\r\n#b(Defeat all nearby monsters.)",4);
    	cm.dispose();
    }
}