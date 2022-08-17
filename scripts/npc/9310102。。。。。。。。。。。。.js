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
            text += "#e#r在我这里可以帮你制作或强化你所需要的道具，以下是我可以为您服务的道具列表.\r\n\r\n#b请选择你要制作或强化的装备\r\n\r\n"//3
            text += "#L1##e#d#v1003946#革命帽子[四维+7] [攻魔+5] [HP/MP+200] \r\n"//3
            text += "#L2##e#d#v1082540#革命手套[四维+7] [攻魔+3] [HP/MP+50]#l\r\n"//3
            text += "#L3##e#d#v1072853#革命鞋子[四维+7] [攻魔+3] [HP/MP+50]#l\r\n"//3
            text += "#L4##e#d#v1102612#革命披风[四维+10] [攻魔+10] [HP/MP+200]#l\r\n"//3
            text += "#L5##e#d#v1132242#革命腰带[四维+15] [攻魔+8] [HP/MP+200]#l\r\n"//3
            text += "#L6##e#d#v1052647#革命战斗服[四维+25] [攻魔+15] [HP/MP+300]#l\r\n"//3
            //text += "#L7##e#d#v1452100#黄金枫叶弓#l\r\n"//3
            //text += "#L8##e#d#v1462085#黄金枫叶弩#l\r\n"//3
            //text += "#L9##e#d#v1472111#黄金枫叶拳套#l\r\n"//3
            //text += "#L10##e#d#v1482073#黄金枫叶指节#l\r\n"//3
            //text += "#L11##e#d#v1492073#黄金枫叶短枪#l\r\n"//3
            //text += "#L12##e#d#v1372071#黄金枫叶短杖#l\r\n"//3
            //text += "#L13##e#d#v1412055##z1412055#黄金枫叶双手斧制作#l\r\n"//3
            //text += "#L14##e#d#v1422057##z1422057#黄金枫叶双手锤制作#l\r\n"//3
            //text += "#L15##e#d#v1482073#黄金枫叶指节制作#l\r\n"//3
            //text += "#L16##e#d#v1492073##z1492073#黄金枫叶短枪制作#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9310073, 560);
        } else if (selection == 2) {
		cm.openNpc(9310073, 561);
        } else if (selection == 3) {
		cm.openNpc(9310073, 562);
        } else if (selection == 4) {
		cm.openNpc(9310073, 563);
        } else if (selection == 5) {
		cm.openNpc(9310073, 564);
        } else if (selection == 6) {
		cm.openNpc(9310073, 565);
        } else if (selection == 7) {
		cm.openNpc(9310073, 567);
        } else if (selection == 8) {
		cm.openNpc(9310073, 568);
        } else if (selection == 9) {
		cm.openNpc(9310073, 538);
        } else if (selection == 10) {
		cm.openNpc(9310073, 539);
        } else if (selection == 11) {
		cm.openNpc(9900004, 540);
        } else if (selection == 12) {
		cm.openNpc(9900004, 541);
        } else if (selection == 13) {
		cm.openNpc(9900004, 542);
        } else if (selection == 14) {
		cm.openNpc(9900004, 314);
        } else if (selection == 15) {
		cm.openNpc(9900004, 315);
        } else if (selection == 16) {
		cm.openNpc(9900004, 316);
	}
    }
}


