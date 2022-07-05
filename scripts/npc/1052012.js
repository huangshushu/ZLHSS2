/*
	Mong from Kong - Victoria Road : Kerning City (103000000)
*/

function start() {
    cm.sendYesNo("Aren't you connected through the Internet Cafe? If so, then go in here ... you'll probably head to a familiar place. What do you think? Do you want to go in?");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendNext("You must be busy, huh? But if you're loggin on from the internet cafe, then you should try going in. You may end up in a strange place once inside.");
    } else {
	if (cm.haveItem(5420007)) {
	    cm.warp(193000000, 0);
	} else {
	    cm.sendNext("Hey, hey ... I don't think you're logging on from the internet cafe. You can't enter this place if you are logging on from home ...");
	}
    }
    cm.dispose();
}
