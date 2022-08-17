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
			
            text += "#e#r这里是黑龙的洞穴！.\r\n\r\n"//3
            text += "#L1##b回收装备.\r\n\r\n"//3
            text += "#L2##b回收材料.\r\n\r\n"//3
            text += "#L3##b回收豆豆.\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9310027, 1);
        } else if (selection == 2) {
		cm.openNpc(9310027, 2);
        } 
         else if (selection == 3) {
		cm.openNpc(9310027, 3);
        } 
    }
}


