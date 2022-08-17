/*
 ±ã½Ý¹¦ÄÜ
 */
var ºì·ãÒ¶ ="#fMap/MapHelper/weather/maple/1#";
var ÒøÐÓÒ¶ ="#fMap/MapHelper/weather/maple/3#";
var Ð¡ÑÌ»¨ ="#fMap/MapHelper/weather/squib/squib4/1#";
var status;
var text;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            text = ""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+"\r\n";
			text += "              #r»¶Ó­À´µ½ÔÂÔÂÃ°ÏÕµºÉ¾³ýÎïÆ·#k\r\n";
			text += ""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+"\r\n";
            text += "            #L0#"+Ð¡ÑÌ»¨+"#bÑ¡ÔñÐèÒªÉ¾³ýµÄÎïÆ·"+Ð¡ÑÌ»¨+"#l\r\n";
            cm.sendSimple(text);
        } else {
            if (selstatus == -1) {
                selstatus = selection;
            }
            switch (selstatus) {
                case 0:
                    deleteItemBySlot(selection);
                    break;
                case 1:
                    cm.openNpc(cm.getNpc(), 501);
            }
        }
    }
}

function deleteItemBySlot(selection) {
    if (status == 1) {
        text = ""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+"\r\n";
		text += "              #r»¶Ó­À´µ½ÔÂÔÂÃ°ÏÕµºÉ¾³ýÎïÆ·#b\r\n";
		text += ""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+"\r\n";
        text += "        #L1#"+Ð¡ÑÌ»¨+"×°±¸À¸"+Ð¡ÑÌ»¨+"#l      #L2#"+Ð¡ÑÌ»¨+"ÏûºÄÀ¸"+Ð¡ÑÌ»¨+"#l\r\n\r\n";
        text += "        #L3#"+Ð¡ÑÌ»¨+"ÉèÖÃÀ¸"+Ð¡ÑÌ»¨+"#l      #L4#"+Ð¡ÑÌ»¨+"ÆäËüÀ¸"+Ð¡ÑÌ»¨+"#l\r\n";
        text += "\t#L5#ÌØÊâÀ¸#l\r\n";
        cm.sendSimple(text);
    } else if (status == 2) {
        inventoryType = selection;
        itemList = cm.getInventory(inventoryType).list().iterator();
		text = ""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+"\r\n";
		text += "              #r»¶Ó­À´µ½ÔÂÔÂÃ°ÏÕµºÉ¾³ýÎïÆ·#b\r\n";
		text += ""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+"\r\n\r\n";
        text += "                  ÇëÑ¡ÔñÒªÉ¾³ýµÄÎïÆ·\r\n#b";
        var indexof = 1;
        while (itemList.hasNext()) {
            var item = itemList.next();
            text += "#L" + item.getPosition() + "##v" + item.getItemId() + "#";
            if (indexof > 1 && indexof % 5 == 0) {
                text += "\r\n";
            }
            indexof++;
        }
        cm.sendSimple(text);
    } else if (status == 3) {
        var item = cm.getInventory(inventoryType).getItem(selection);
        deleteSlot = selection;
        deleteQuantity = item.getQuantity();
        text = "#eÉ¾³ý#r#v" + item.getItemId() + "##z" + item.getItemId() + "# " + deleteQuantity + "¸ö #k³É¹¦";
		cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
        cm.sendNextPrev(text);
    } else if (status == 4) {
        cm.sendOk("×£ÄãÓÎÏ·Óä¿ì~");
        status = 0;
		cm.dispose();
    }
}