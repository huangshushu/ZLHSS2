var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    switch (status) {
        case 0:
            var txt = "\r\n";
            txt += "#e#r#L0#特色潜能重置#l\r\n";
            txt += "#L5#装备解绑中心#l\r\n";
            txt += "#L1#蜡笔重置中心#l\r\n";
            //txt += "#L2#翅膀进化中心#l\r\n";
			//txt += "#L6#图腾合成中心#l\r\n";
            //txt += "#L4#师徒系统中心#l#k#n\r\n";
            cm.sendSimple(txt);
            break;
        case 1:
            switch (selection) {
                case 0:
                    cm.dispose();
                    cm.openNpc(2470018, "潜能重置");
                    break;

                case 1:
                    cm.dispose();
                    cm.openNpc(2470018, "蜡笔");
                    break;

                case 2:
                    cm.dispose();
                    cm.openNpc(1530635, "终极翅膀");
                    break;

                case 3:
                    cm.dispose();
                    cm.openNpc(3002004);
                    break;

                    case 4:
                    cm.dispose();
                    cm.openNpc(9400373,"师徒");
                    break;

                    case 5:
                    cm.dispose();
                    cm.openNpc(1530390);
                    break;

					case 6:
                    cm.dispose();
                    cm.openNpc(1530390, "图腾合成");
                    break;
            }
            break;
        default:
            cm.dispose();
            break;
    }
}