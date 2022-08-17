/* RED 1st impact
    Christmas Tree
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendNext("Christmas Tree decorating will take place every day. Talk to #bCassandra#k for more details.");
		cm.dispose();
    }
}