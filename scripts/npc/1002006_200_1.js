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
            text += "#e#r你好！在我这里可以帮你制作你所需要的武器，以下是我可以为您制作的武器列表.\r\n\r\n"//3
            text += "#L1##e#d#v1302314#伽耶汉军刀(单手剑)制作.\r\n"//3
            text += "#L2##e#d#v1312184#伽耶汉斧  (单手斧)制作#l\r\n"//3
            text += "#L3##e#d#v1322235#伽耶汉锤  (单手锤)制作#l\r\n"//3
            text += "#L4##e#d#v1332259#伽耶汉短刀制作#l\r\n"//3
            text += "#L5##e#d#v1372206#伽耶汉短杖制作#l\r\n"//3
            text += "#L6##e#d#v1382244#伽耶汉长杖制作#l\r\n"//3
            text += "#L7##e#d#v1402235#伽耶汉双手剑制作#l\r\n"//3
            //text += "#L8##e#d#v1412163#伽耶汉双手战斧制作#l\r\n"//3
            //text += "#L9##e#d#v1422170#伽耶汉双手锤制作#l\r\n"//3
            text += "#L10##e#d#v1432199#伽耶汉枪制作#l\r\n"//3
            text += "#L11##e#d#v1452237#伽耶汉弓制作#l\r\n"//3
            text += "#L12##e#d#v1462224#伽耶汉弩赋制作#l\r\n"//3
            text += "#L13##e#d#v1472246#伽耶汉斗拳制作#l\r\n"//3
            //text += "#L14##e#d#v1482201#伽耶汉拳爪制作#l\r\n"//3
            text += "#L15##e#d#v1492211#伽耶汉手铳制作#l\r\n"//3
            text += "#L16##e#d#v1442253#伽耶汉巨灵开山斧制作#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(1002006, 201);
        } else if (selection == 2) {
		cm.openNpc(1002006, 202);
        } else if (selection == 3) {
		cm.openNpc(1002006, 203);
        } else if (selection == 4) {
		cm.openNpc(1002006, 204);
        } else if (selection == 5) {
		cm.openNpc(1002006, 205);
        } else if (selection == 6) {
		cm.openNpc(1002006, 206);
        } else if (selection == 7) {
		cm.openNpc(1002006, 207);
        } else if (selection == 8) {
		cm.openNpc(1002006, 208);
        } else if (selection == 9) {
		cm.openNpc(1002006, 209);
        } else if (selection == 10) {
		cm.openNpc(1002006, 210);
        } else if (selection == 11) {
		cm.openNpc(1002006, 211);
        } else if (selection == 12) {
		cm.openNpc(1002006, 212);
        } else if (selection == 13) {
		cm.openNpc(1002006, 213);
        } else if (selection == 14) {
		cm.openNpc(1002006, 214);
        } else if (selection == 15) {
		cm.openNpc(1002006, 215);
        } else if (selection == 16) {
		cm.openNpc(1002006, 216);
	}
    }
}


