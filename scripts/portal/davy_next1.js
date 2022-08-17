function enter(pi) {
    if (pi.haveItem(4001120,50)&&pi.haveItem(4001121,50)&&pi.haveItem(4001122,50)) {
	pi.gainItem(4001120,-50);
	pi.gainItem(4001121,-50);
	pi.gainItem(4001122,-50);
	pi.warpParty(925100300,0); 
    } else {
	pi.playerMessage(5, "给我 50 个 初级 中级 高级 海盗道具");
    }
}