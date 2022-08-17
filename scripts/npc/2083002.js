/* Amon
 * Last Mission : dragon's Altar (280030000)
 */

function start() {
	cm.sendYesNo("你想要离开这里到外面去吗？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(240040700);
		if (cm.getPlayerCount(240060200) == 1) {
			cm.getMap(211042300).resetReactors();
		}
	}
	cm.dispose();
}
