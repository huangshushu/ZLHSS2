var ºì·ãÒ¶ ="#fMap/MapHelper/weather/maple/1#";
var ÒøĞÓÒ¶ ="#fMap/MapHelper/weather/maple/3#";
var Ğ¡ÑÌ»¨ ="#fMap/MapHelper/weather/squib/squib4/1#";
function start() {
	//cm.sendSimple("<3 <3");
	cm.sendSimple(""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+"\r\n              #r»¶Ó­À´µ½ÔÂÔÂÃ°ÏÕµºÍæ¼ÒÅÅÃû#k\r\n"+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+""+ºì·ãÒ¶+"\r\n\r\n   #L1#"+Ğ¡ÑÌ»¨+"#bÍæ¼ÒµÈ¼¶ÅÅÃû"+Ğ¡ÑÌ»¨+"#l   #L2#"+Ğ¡ÑÌ»¨+"Íæ¼Ò²Æ¸»ÅÅÃû"+Ğ¡ÑÌ»¨+"#l\r\n  #L3#"+Ğ¡ÑÌ»¨+"Ã¿ÖÜÈËÆøÍõÅÅÃû"+Ğ¡ÑÌ»¨+"#l  #L4#"+Ğ¡ÑÌ»¨+"Íæ¼Ò³äÖµÅÅÃû"+Ğ¡ÑÌ»¨+"#l\r\n\r\n");//\r\n#L2##b½ğ±ÒÅÅÃû#l
	
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {	
	cm.displayGuildRanks();
	cm.dispose();
	}
	else if (selection == 1) {
	cm.showlvl();
	cm.dispose();
	}
	else if (selection == 2) {
	cm.showmeso();
	cm.dispose();
	}
	else if (selection == 3) {
	cm.dispose();
    cm.openNpc(9040004,100);
	}
	else if (selection == 4) {
	cm.dispose();
    cm.openNpc(9040004,200);
	}	
}
