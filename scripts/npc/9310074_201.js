var ºì·ãÒ¶ ="#fMap/MapHelper/weather/maple/1#";
var ÒøĞÓÒ¶ ="#fMap/MapHelper/weather/maple/3#";
var Ğ¡ÑÌ»¨ ="#fMap/MapHelper/weather/squib/squib4/1#";
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

            cm.sendOk("¸ĞĞ»ÄãµÄ¹âÁÙ£¡");
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
			text = ""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+"\r\n";
			text += "               #r»¶Ó­À´µ½²¼À³¿ËçÍÎäÆ÷ÖÆ×÷#k\r\n";
			text += ""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+"\r\n";
			text += "#L1#"+Ğ¡ÑÌ»¨+"#e#b#v1302070#²¼À³¿ÍçÍµ¥ÊÖ½£#l  #L2##e#b#v1312142#²¼À³¿ÍçÍµ¥ÊÖ¸«#l\r\n";
            text += "#L3#"+Ğ¡ÑÌ»¨+"#e#b#v1322100#²¼À³¿ÍçÍµ¥ÊÖ¶ÛÆ÷#l #L4##e#b#v1332214#²¼À³¿ÍçÍ¶Ìµ¶#l\r\n";
            text += "#L5#"+Ğ¡ÑÌ»¨+"#e#b#v1382199#²¼À³¿ÍçÍ³¤ÕÈ#l   #L6##e#b#v1402185#²¼À³¿ÍçÍË«ÊÖ½£#l\r\n";
            text += "#L7#"+Ğ¡ÑÌ»¨+"#e#b#v1412126#²¼À³¿ÍçÍË«ÊÖ¸«#l #L8##e#b#v1422129#²¼À³¿ÍçÍË«ÊÖ¶ÛÆ÷#l\r\n";
            text += "#L9#"+Ğ¡ÑÌ»¨+"#e#b#v1432158#²¼À³¿ÍçÍ³¤Ç¹#l   #L10##e#b#v1442209#²¼À³¿ÍçÍ³¤Ã¬#l\r\n";
            text += "#L11#"+Ğ¡ÑÌ»¨+"#e#b#v1452196#²¼À³¿ÍçÍ¹­#l    #L12##e#b#v1462184#²¼À³¿ÍçÍåó#l\r\n";
            text += "#L13#"+Ğ¡ÑÌ»¨+"#e#b#v1472205#²¼À³¿ÍçÍÈ­Ì×#l    #L14##e#b#v1482159#²¼À³¿ÍçÍÖ¸½Ú#l\r\n";
            text += "#L15#"+Ğ¡ÑÌ»¨+"#e#b#v1492170#²¼À³¿ÍçÍ¶ÌÇ¹#l\r\n"; //  #L16##e#r#v1402014#ÎÂ¶È¼Æ#l
//			text += "#L17#"+Ğ¡ÑÌ»¨+"#e#r#v1402037#Áú±³ÈĞ#l       #L18##e#r#v1382037#ÙÈÔÂÖ®ÕÈ#l\r\n";
//			text += "#L19#"+Ğ¡ÑÌ»¨+"#e#r#v1382049#ÖìÈ¸³¤ÕÈ#l      #L20##e#r#v1382050#ĞşÎä³¤ÕÈ#l\r\n";
//			text += "#L21#"+Ğ¡ÑÌ»¨+"#e#r#v1382051#°×»¢³¤ÕÈ#l      #L22##e#r#v1382052#ÇàÁú³¤ÕÈ#l\r\n";
            cm.sendSimple(text);
        }
		else if (selection == 1) {
			cm.openNpc(9310074, 20101);
        } 
		else if (selection == 2) {
			cm.openNpc(9310074, 20102);
        } 
		else if (selection == 3) {
			cm.openNpc(9310074, 20103);
        } 
		else if (selection == 4) {
			cm.openNpc(9310074, 20104);
        } 
		else if (selection == 5) {
			cm.openNpc(9310074, 20105);
        } 
		else if (selection == 6) {
			cm.openNpc(9310074, 20106);
        } 
		else if (selection == 7) {
			cm.openNpc(9310074, 20107);
        } 
		else if (selection == 8) {
			cm.openNpc(9310074, 20108);
        } 
		else if (selection == 9) {
			cm.openNpc(9310074, 20109);
        } 
		else if (selection == 10) {
			cm.openNpc(9310074, 20110);
        } 
		else if (selection == 11) {
			cm.openNpc(9310074, 20111);
        } 
		else if (selection == 12) {
			cm.openNpc(9310074, 20112);
        } 
		else if (selection == 13) {
			cm.openNpc(9310074, 20113);
        } 
		else if (selection == 14) {
			cm.openNpc(9310074, 20114);
        } 
		else if (selection == 15) {
			cm.openNpc(9310074, 20115);
        } 
		else if (selection == 16) {
			cm.openNpc(9310074, 20116);
		} 
		else if (selection == 17) {
			cm.openNpc(9310074, 20117);
		} 
		else if (selection == 18) {
			cm.openNpc(9310074, 20118);
		} 
		else if (selection == 19) {
			cm.openNpc(9310074, 20119);
		} 
		else if (selection == 20) {
			cm.openNpc(9310074, 20120);
		} 
		else if (selection == 21) {
			cm.openNpc(9310074, 20121);
		}
		else if (selection == 22) {
			cm.openNpc(9310074, 20122);
		}
    }
}


