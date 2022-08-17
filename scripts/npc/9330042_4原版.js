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
			//text += "#e#r    亲. 领取点券 之前记得 #b#b先将包包腾出空间  #k\r\n\r\n否则落了物品! #b#b咱可不负责赔偿的哟!!!#k\r\n\r\n\r\n"
            text += "#L1##e#d#v4031561#领取   < 回顾冒险岛萌新拯救者 > 勋章 #l\r\n\r\n"//3
            text += "#L2##d#v4170007#领取   <回顾冒险岛官方认证女神> 勋章#l\r\n\r\n"//3
            text += "#L3##d#v4170014#领取   <回顾冒险岛史诗开拓者> 勋章#l\r\n\r\n"//3
            text += "#L4##d#v4170015#领取   <回顾冒险岛宣传大使> 勋章#l\r\n\r\n"//3
            text += "#L5##d#v4170016#领取   <回顾冒险岛形像大使> 勋章#l\r\n\r\n"//3
			text += "#L6##d#v4170017#领取   <好人一生平安> 勋章#l\r\n\r\n"//3
			text += "#L7##d#v4170018#领取   <壕无人性> 勋章#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9330042, 41);
        } else if (selection == 2) {
		cm.openNpc(9330042, 42);
        } else if (selection == 3) {
		cm.openNpc(9330042, 43);
        } else if (selection == 4) {
		cm.openNpc(9330042, 44);
		} else if (selection == 5) {
		cm.openNpc(9330042, 45);
		} else if (selection == 6) {
		cm.openNpc(9330042, 46);
		} else if (selection == 7) {
		cm.openNpc(9330042, 47);
	}
    }
}


