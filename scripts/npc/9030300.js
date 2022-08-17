/* RED 1st impact
    Eggrich
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendOkS("The Maple Auction is not available now. We're sorry for the inconvenience.",4);
		cm.dispose();
    }
}