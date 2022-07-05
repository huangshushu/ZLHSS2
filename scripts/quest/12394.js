/* RED 1st impact
    First Ability - The Eye Opener
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNext("Hello, #b#h0##k. You have already reached Lv. 30! When you reach #bLv. 30#k, you can receive a special power called #bAbility#k. I shall release that power for you right now.");
	} else if (status == 1) {
	    qm.sendPrev("Well, then! I have released the new power, the Ability, for you. Check it out in your character stat window!");
        qm.forceStartQuest();
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
}