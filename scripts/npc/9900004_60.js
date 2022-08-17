
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/13#";
var status = -1;
var itemss;
var slot = Array();

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	
    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }var MC = cm.getServerName();

    if (status == 0) {
		var avail = "";
		for (var i = 0; i < 96; i++) {
			if (cm.getInventory(5).getItem(i) != null) {
				avail += "#L" + cm.getInventory(5).getItem(i).getItemId() + "##z" + cm.getInventory(5).getItem(i).getItemId() + ":##l\r\n";
			}
			slot.push(i);
		}
		  
		cm.sendSimple("       #r"+心+" "+心+" #e"+MC+"#k#n 背包快捷清理 "+心+" "+心+"\r\n\r\n\t#r提示；可连续清理。不要点下一步，直接点结束。\r\n#b" + avail);
	 
    } else if (status == 1) {
        itemss = selection;
		var shul = cm.getPlayer().getItemQuantity(itemss, false);
		cm.removeAll(itemss);
		cm.dispose();	
		cm.openNpc(9900004,60);	
    } else {
        cm.dispose();
    }
}

function Ok(text) {
    cm.sendOk(text);
}



