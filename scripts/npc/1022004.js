/*
 
 材料合成
 */
function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  cm.对话结束();
  cm.打开NPC(2020000, 0);
  /*if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "   Hi #b#h ##k，我是 A 级道具制造者，我擅长合成材料，你有没有什么想要我做的呢？\r\n\r\n";
		selStr += "#b#L1#母矿合成#l#k\r\n";
		selStr += "#b#L2#金属合成#l#k\r\n";
        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.dispose();
                cm.openNpc(1022004, 1);
                break;
			case 2:
                cm.dispose();
                cm.openNpc(1022004, 2);
                break;
        }
    }*/
}
