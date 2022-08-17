var status = -1;

function action(mode, type, selection) {
	var iz = cm.getPlayer().getshitub().iterator();
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		
		 if (cm.getPlayer().getOneTimeLog("师傅") < 1) {
                cm.sendOk("你不是师傅");
                cm.dispose();
		 return;
		 }

        var selStr = "请选择要逐出师门的徒弟:\r\n\r\n#b";
       
		var I=0;
        while (iz.hasNext()) {
			I++;
            var zz = iz.next();
            selStr += "#L" + I + "#" +zz+ "#l\r\n";
			
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
		var I=0;
		  while (iz.hasNext()) {
			I++;
            var zz = iz.next();

			if(I==selection){
			
			cm.getPlayer().killshituLogbyname(zz);
			cm.worldMessage(6,"【"+cm.getPlayer().getName()+"】:即日起 将不再是吾之弟子.");
			cm.sendOk("你已将其逐出门墙");
			}
        }
		
		
		
		   //cm.getPlayer().killshituLogbyname(tudi);
       //cm.flytoID(selection);
        cm.dispose();
    }
}