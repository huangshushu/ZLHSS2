function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#d BOSS掉线重返！！#l\r\n\r\n"//3
            text += "#L1##r闹钟#l\r\n\r\n"//3
            text += "#L2##r扎昆#l\r\n\r\n"//3
            text += "#L3##r黑龙#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if( cm.getMap(220080001).getCharactersSize() > 0){
			cm.warp(220080001);
            cm.dispose();
			}else{
            cm.sendOk("地图可能已经没有人了！");
            cm.dispose();
			}
        } else if (selection == 2) {
			if( cm.getMap(280030000).getCharactersSize() > 0){
			cm.warp(280030000);
            cm.dispose();
			}else{
            cm.sendOk("地图可能已经没有人了！");
            cm.dispose();
			}
        } else if (selection == 3) {
			if( cm.getMap(240060200).getCharactersSize() > 0){
			cm.warp(240060200);
            cm.dispose();
			}else{
            cm.sendOk("地图可能已经没有人了！");
            cm.dispose();
			}
		}
    }
}


