function 增加生命法力(a) {
	var playerNmae = im.getPlayer().getName();
	var 生命值 = im.随机数(a);
	var 法力值 = im.随机数(a);
    im.增加角色最大生命值(生命值);
	im.增加角色最大法力值(法力值);
	im.个人公告("增加HP : "+生命值);
	im.个人公告("增加MP : "+法力值);
	im.全服公告(playerNmae + "使用洗血箱子HP+ :"+ 生命值 + "    MP+" +法力值);
	im.刷新();	
}

  function action() {
	if (im.getInventory(1).isFull(5)){
		im.说明文字("请保证背包#b装备栏#k至少有 #r6 #k个位置");
		im.结束对话();
		return;
	}
	if (im.getInventory(2).isFull(1)){
		im.说明文字("请保证背包#b消耗栏#k至少有 #r2 #k个位置");
		im.结束对话();
		return;
	}
	
	if(im.getPlayer().getMapId() != 910000000){
		im.sendOk("抱歉，洗血箱子只能在自由市场使用！");
		im.dispose();
		return;
	}

	if(!im.判断物品数量(2022468,1)){
		im.说明文字("你没有 "+im.显示物品(2022468)+" 。");
		im.对话结束();
        return;
	}else{
		im.收物品(2022468,1);
		增加生命法力(17);
		im.对话结束();
	}
	im.dispose();
}