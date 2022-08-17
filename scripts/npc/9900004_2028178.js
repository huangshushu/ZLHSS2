 
status = -1;
var itemList = Array(
		                  
Array(2382000, 100, 1, 1), //·ÉÐÐÈ¸¿¨Æ¬
Array(2382001, 100, 1, 1), //Á³
Array(2382002, 100, 1, 1), //Á³
Array(2382003, 100, 1, 1), //Á³
Array(2382004, 100, 1, 1), //Á³
Array(2382005, 100, 1, 1), //Á³
Array(2382006, 100, 1, 1), //Á³
Array(2382007, 100, 1, 1), //Á³
Array(2382008, 100, 1, 1), //Á³
Array(2382009, 100, 1, 1), //Á³
Array(2382010, 100, 1, 1), //Á³
Array(2382011, 100, 1, 1), //Á³
Array(2382012, 100, 1, 1), //Á³
Array(2382013, 100, 1, 1), //Á³
Array(2382014, 100, 1, 1), //Á³
Array(2382015, 100, 1, 1), //Á³
Array(2382016, 100, 1, 1), //Á³
Array(2382017, 100, 1, 1), //Á³
Array(2382018, 100, 1, 1), //Á³
Array(2382019, 100, 1, 1), //Á³
Array(2382020, 100, 1, 1), //Á³
Array(2382021, 100, 1, 1), //Á³
Array(2382022, 100, 1, 1), //Á³
Array(2382023, 100, 1, 1), //Á³
Array(2382024, 100, 1, 1), //Á³
Array(2382025, 100, 1, 1), //Á³
Array(2382026, 100, 1, 1), //Á³
Array(2382027, 100, 1, 1), //Á³
Array(2382028, 100, 1, 1), //Á³
Array(2382029, 100, 1, 1), //Á³
Array(2382030, 100, 1, 1), //Á³
Array(2382031, 100, 1, 1), //Á³
Array(2382032, 100, 1, 1), //Á³
Array(2382033, 100, 1, 1), //Á³
Array(2382034, 100, 1, 1), //Á³
Array(2382035, 100, 1, 1), //Á³
Array(2382036, 100, 1, 1), //Á³
Array(2382037, 100, 1, 1), //Á³
Array(2382038, 100, 1, 1), //Á³
Array(2382039, 100, 1, 1), //Á³
Array(2382040, 100, 1, 1), //Á³
Array(2382041, 100, 1, 1), //Á³
Array(2382042, 100, 1, 1), //Á³
Array(2382043, 100, 1, 1), //Á³
Array(2382044, 100, 1, 1), //Á³
Array(2382045, 100, 1, 1), //Á³
Array(2382046, 100, 1, 1), //Á³
Array(2382047, 100, 1, 1), //Á³
Array(2382048, 100, 1, 1), //Á³
Array(2382049, 100, 1, 1), //Á³
Array(2382050, 100, 1, 1), //Á³
Array(2382051, 100, 1, 1), //Á³
Array(2382052, 100, 1, 1), //Á³
Array(2382053, 100, 1, 1), //Á³
Array(2382054, 100, 1, 1), //Á³
Array(2382055, 100, 1, 1), //Á³
Array(2382056, 100, 1, 1), //Á³
Array(2382057, 100, 1, 1), //Á³
Array(2382058, 100, 1, 1), //Á³
Array(2382059, 100, 1, 1), //Á³
Array(2382060, 100, 1, 1), //Á³
Array(2382061, 100, 1, 1), //Á³
Array(2382062, 100, 1, 1), //Á³
Array(2382063, 100, 1, 1), //Á³
Array(2382064, 100, 1, 1), //Á³
Array(2382065, 100, 1, 1), //Á³
Array(2382066, 100, 1, 1), //Á³
Array(2382067, 100, 1, 1), //Á³
Array(2382068, 100, 1, 1), //Á³
Array(2382069, 100, 1, 1), //Á³
Array(2382070, 100, 1, 1), //Á³
Array(2382071, 100, 1, 1), //Á³
Array(2382072, 100, 1, 1), //Á³
Array(2382073, 100, 1, 1), //Á³
Array(2382074, 100, 1, 1), //Á³
Array(2382075, 100, 1, 1), //Á³
Array(2382076, 100, 1, 1), //Á³
Array(2382077, 100, 1, 1), //Á³
Array(2382078, 100, 1, 1), //Á³
Array(2382079, 100, 1, 1), //Á³
Array(2382080, 100, 1, 1), //ºÚÃàÑò¿¨Æ¬


Array(2382092, 100, 1, 1), //µÃÒâµÄÄ¢¹½×Ð¿¨Æ¬
Array(2382093, 100, 1, 1), //Á³
Array(2382094, 100, 1, 1), //Á³
Array(2382095, 100, 1, 1), //Á³
Array(2382096, 100, 1, 1) //Ç×ÎÀ¶ÓÆó¶ì±ø¿¨Æ¬

);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("ÔÙ¼ûµÃ°ÑÓÍ¡£");
            cm.dispose();
        }
        status--;
    }
		if (status == 0) {
			if(cm.haveItem(2028178,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("´ò¿ªµÚ3Ò³¿¨Æ¬Ïä¿É»ñµÃÒÔÏÂ¿¨Æ¬Ö®Ò»:" + str1);
				}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 100);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "µÚ3Ò³¿¨Æ¬Ïä", notice);
            if (item != -1) {
                cm.gainItem(2028178, -1);//»ñµÃÎïÆ·
                cm.sendOk("Äã»ñµÃÁË #b#t" + item + "##k " + quantity + "¸ö¡£");
            } else {
                cm.sendOk("ÇëÄãÈ·ÈÏÔÚ±³°üµÄ×°±¸£¬ÏûºÄ£¬ÆäËû´°¿ÚÖÐÊÇ·ñÓÐÒ»¸ñÒÔÉÏµÄ¿Õ¼ä¡£");
            }
            cm.safeDispose();
        } else {
            cm.safeDispose();
        }
    }
}
















