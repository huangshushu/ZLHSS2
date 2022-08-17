/* Dawnveil
    [Ellinel Fairy Academy] The Second Escape
	Phiny and Ephony
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (status == 0) {
    	cm.sendOkS("Help us! These monsters are gonna eeeeat us!\r\n\r\n#b(Defeat all nearby monsters.)",4);
    	cm.dispose();
    }
}