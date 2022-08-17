/* Red
    Explorer tut
    Made by Daenerys
*/
function enter(pi) {
	if (pi.getMapId()==4000001) {
		pi.openNpc(10310, "infoPortalTuto");
	} else {
		pi.TutInstructionalBalloon("UI/tutorial.img/22");
	}
	return true;
}

