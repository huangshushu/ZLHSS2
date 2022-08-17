function start() {
         im.gainItem(2433654, -1);
         im.gainItme(4001839,500);
         im.sendOk("恭喜您获得 #r500#k 星星。");
	 im.channelMessage(0x18, "[星星兑换系统]" + " : " + "玩家" + im.getChar().getName() + ",从[星星兑换券]获得500星星。");
	 //im.worldSpouseMessage(0x20,"[怪物掉宝提示]：恭喜玩家 "+ im.getChar().getName() +" 从怪物身上掉落[抵用券500商品券]获得500抵用卷。");
         im.dispose(); 
}
