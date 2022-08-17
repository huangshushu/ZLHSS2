function act() {
	var r = Math.ceil(Math.random() * 100);
	if(r<=30){
		rm.setBossRankCount2("挖矿经验", 1);
		rm.setBossRankCount("挖矿", 1);
		rm.setBossLog("挖矿");
		rm.dropItems();
	}
}