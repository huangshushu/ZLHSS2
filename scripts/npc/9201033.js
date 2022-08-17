/* RED 1st impact
    Simon
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	if (cm.getPlayer().getMapId() == 209000000) {
	    cm.sendNext("I see. I guess you have some business to take care of around here. If you ever feel the need to visit the temple, let me know!");
	    cm.dispose();
	} else {
	    cm.sendNext("Feel free to stay as long as you like! This temple has some nice spots where you can take pictures in. Enjoy your stay!");
	    cm.dispose();
	}
	}
	status--;
    }
    if (status == 0) {
	if (cm.getPlayer().getMapId() == 209000000) {
	    cm.sendYesNo("Shalom Temple is a place that is unlike anything you've ever seen. It's a great place to take pictures, too. Would you like to go there?");
	} else {
	    cm.sendYesNo("I hope you enjoyed looking around this temple. Are you ready to return to your original spot?");
	}
	} else if (status == 1) {
	if (cm.getPlayer().getMapId() == 209000000) {
	    cm.sendNext("Alright, let's go!");
	} else {
	    cm.sendNext("Hope you visit the temple again. Take care!");
	}
    } else if (status == 2) {
	cm.warp(cm.getPlayer().getMapId() == 209000000 ? 681000000 : 209000000);
	cm.dispose();
    }
  }