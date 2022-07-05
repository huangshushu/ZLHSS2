/*
    传送到703000000 - 2022新叶城 - 被破坏的 新叶城
*/

function enter(pi) {
    switch (pi.getMapId()) {
		case 600000000:
			if (pi.getQuestStatus(56200) == 2) { //新叶城-市区街道 - 新叶城-市区中心
				pi.warp(703000000, 0);
			} else {
				pi.topMsg("目前无法进入，这好像是和未来的新叶城有某种联系");
				pi.playerMessage( - 9, "目前无法进入，这好像是和未来的新叶城有某种联系");
			}
			break;
		case 703000001:
			if (pi.getQuestStatus(56203) == 2) { //2022新叶城 - 被占领的 新叶城
				pi.warp(703000000, 0);
			} else {
				pi.topMsg("目前无法进入，这好像是和未来的新叶城有某种联系");
				pi.playerMessage( - 9, "目前无法进入，这好像是和未来的新叶城有某种联系");
			}
			break;
		default:
			pi.topMsg("目前无法进入，这好像是和未来的新叶城有某种联系");
			pi.playerMessage( - 9, "目前无法进入，这好像是和未来的新叶城有某种联系");
			break;
    }
}
