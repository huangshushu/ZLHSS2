var status = 0;

var backMap = Array(
	Array(223030210, 705000000)
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			text = "现在就要离开吗？";
			cm.sendYesNo(text);
			//cm.dispose();
		} else if (status == 1){
			var mapid = 910800000;
			for(var i in backMap) {
				if (cm.getMap().getId() == backMap[i][0])
				{
					mapid = backMap[i][1];
					break;
				}
			}
			cm.warp(mapid);
			cm.dispose();
		}
   }
}