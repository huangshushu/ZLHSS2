/* RED 1st impact
    Explorer tut
    Made by Daenerys
*/
function enter(pi) {
    if (pi.getQuestStatus(32205)==1){
		pi.TutInstructionalBalloon("UI/tutorial.img/20");
		return true;
	}
}
