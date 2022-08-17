/*
 *  功能：大咪安第一阶段动画
 *  Telegram: Meguel_chms
 */

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	mapid = ms.getPlayer().getMapId();
	switch (status) {
	case 0:
		ms.getDirectionStatus(true); //IN_GAME_CUR_NODE_EVENT_END
		ms.EnableUI(1, false);
		ms.DisableUI(true);
		ms.setRemoveAdditionalEffect();//0X0E
		ms.getDirectionInfo(3, 0);
		ms.getDirectionInfo(9, 1); //ok
		//ms.setCameraZoom(0, 1000, 0, -125, -700); //???
		//ms.getDirectionStatus(true); //IN_GAME_CUR_NODE_EVENT_END
		ms.getDirectionInfo(1, 500);	
		break;
	case 1:
		ms.setSpineScreen("Map/Effect2.img/DemianIllust/1pahseSp/demian", "animation"); //ok
		ms.playSound("Sound/SoundEff.img/BossDemian/phase1"); //ok
		ms.getDirectionInfo(1, 8000);
		break;
	case 2:
		//ms.getDirectionInfo(9, 0); //ok
		ms.EnableUI(0);
		ms.DisableUI(false);
		ms.dispose();
		ms.warp_Instanced(mapid - 60);
		break;
	default:
		ms.dispose();
		break;
	}
}
