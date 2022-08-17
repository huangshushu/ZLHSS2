var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/13#";
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
    var MC = cm.getServerName();
    if (status == 0) {
        var
		selStr = "\t\t\t\t"+心+"  #r等级成就预览； "+心+"  #k\r\n\r\n";
        selStr += "#b"+cm.等级成就(833)+"";

		

		selStr += "\r\n\t\t\t\t     #b#L1#返回#l\r\n";
		
        
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
			
			case 1:
                cm.dispose();
                cm.openNpc(9900004, 1);
                break
}}}