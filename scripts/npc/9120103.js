var 聊天 = "#fUI/StatusBar/BtChat/normal/0#";
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
            text += "楼下那个#r猥琐大叔#k，我真的受够他了，你看他那色迷迷的眼神，不知道他一天到晚脑子里在想什么，我得离他远远的，你也别来烦我！#l\r\n\r\n"//3
            cm.sendOk(text);
		    cm.dispose();
		}
    }
}


