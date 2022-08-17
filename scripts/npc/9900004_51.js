
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
	if (cm.GetPiot("清理背包开关","2") >= 1  ) {
            cm.showInstruction("\r\n#e#r"+MC+"\r\n\r\n管理员已经关闭清理背包功能#n#k\r\n ", 200, 3);  
            cm.dispose();
          return;
	 
	    }
    if (status == 0) {
		var avail = "";
		for (var i = 0; i < 96; i++) {
			if (cm.getInventory(1).getItem(i) != null) {
				avail += "#L" + cm.getInventory(1).getItem(i).getItemId() + "##i" + cm.getInventory(1).getItem(i).getItemId() + ":##l";
			}
			slot.push(i);
		}
		  
		cm.sendSimple("       #r"+心+" "+心+" #e"+MC+"#k#n 背包快捷清理 "+心+" "+心+"\r\n\r\n#r提示；可连续清理。不要点下一步，直接点结束。\r\n#b" + avail);
	 
    } else if (status == 1) {
        itemss = selection;
		var shul = cm.getPlayer().getItemQuantity(itemss, false);
		cm.removeAll(itemss);
		//Ok("我已经将你背包里的 #d#i" + itemss + ":# #t" + itemss + ":# 数量：#e#r" + shul + "#n#b\r\n从你的背包删除！");
		
		 cm.dispose();	
		 cm.GainPiot("清理背包道具",1,1);
		  cm.dispose();
		 cm.openNpc(9900004,51);
            	
    } else {
        cm.dispose();
    }//status
}// function

function Ok(text) {
    cm.sendOk(text);
}



