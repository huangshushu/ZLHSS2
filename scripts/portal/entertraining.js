function enter(pi) {
    if (pi.getQuestStatus(1041) == 1) {
	pi.warp(1010100, 4);
    } else if (pi.getQuestStatus(1042) == 1) {
	pi.warp(1010200, 4);
    } else if (pi.getQuestStatus(1043) == 1) {
	pi.warp(1010300, 4);
    } else if (pi.getQuestStatus(1044) == 1) {
	pi.warp(1010400, 4);
    } else {
	pi.playerMessage(5, "Only the adventurers that have been trained by Mai may enter.");
    }
}