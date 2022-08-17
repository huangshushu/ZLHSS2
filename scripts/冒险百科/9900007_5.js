/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：冒险百科
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		var selStr = "\t\t\t" + 心 + "  " + 心 + " #r#e < 冒险百科 > #k#n " + 心 + "  " + 心 + "\r\n\r\n";
	    selStr += " #L0##b返回#k#l\r\n";
		selStr += " #L1##b枫叶套装#k#l\r\n";
		selStr += " #L2##b永恒套装#k#l\r\n";
		selStr += " #L3##b重生套装#k#l\r\n";
		//selStr += " #L4##b企鹅王套装#k#l\r\n";

        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 0:
                cm.dispose();
                cm.openNpc(9900007,0);
                break;
            case 1:
                cm.dispose();
                cm.openNpc(9900007,50001);
                break;
			case 2:
                cm.dispose();
                cm.openNpc(9900007,50002);
                break;
			case 3:
                cm.dispose();
                cm.openNpc(9900007,50003);
                break;
			case 3:
                cm.dispose();
                cm.openNpc(9900007,50004);
                break;
        }
    }
}