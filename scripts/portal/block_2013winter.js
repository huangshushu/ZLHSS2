var blockMapName;

function enter(pi) {
	var mapId = pi.getMapId();
	switch (mapId) {
		case 221020000:
			blockMapName = "地球防御本部";
			break;
		case 222020000:
		case 230030200:
			blockMapName = "童话村";
			break;
		default:
			blockMapName = "未知地图";
	}
	pi.playerMessage("由于黑气息的阻挡，无法移动到" + blockMapName + "。");
}
