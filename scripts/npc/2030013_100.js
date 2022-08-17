

function start() {
	if(cm.getPlayer().getName()=="最佳损友"){
		cm.teachSkill(2001002, 20);//魔法盾
		cm.teachSkill(2301001, 20);//瞬移
		cm.teachSkill(2301003, 20);//神之保护
		cm.teachSkill(2311003, 30);//神之祈祷
		cm.teachSkill(2321005, 30);//圣灵之盾
		cm.teachSkill(2321006, 10);//复活术
		cm.teachSkill(1321002, 30);//泰山
		cm.teachSkill(1301007, 30);//神圣之火
		cm.teachSkill(4001003, 20);//隐身术
		cm.teachSkill(4111006, 20);//二段跳
		cm.teachSkill(4111002, 30);//影分身
		//cm.teachSkill(3121002, 30);//火眼
		
		//弓箭手
		//cm.teachSkill(3120005, 30)
		//cm.teachSkill(3121000, 30)
		//cm.teachSkill(3121003, 30)
		//cm.teachSkill(3121004, 30)
		//cm.teachSkill(3121007, 30)
		//cm.teachSkill(3121008, 30)
		//cm.teachSkill(3121009, 5)
		var name = cm.getPlayer().getName()
		cm.playerMessage(5, "["+name+"]你获得了赞助赠送的技能，联系GM吧");
	}
	
       if(!cm.getPlayerStat("LVL")>=0 && cm.getPlayerStat("LVL")<=9){

	cm.给经验(1000);

    cm.dispose();
	} else {
	    
cm.playerMessage(5, "只有等级在10级以内的玩家才可以使用。");
cm.sendOk("只有等级在10级以内的玩家才可以使用。");
    cm.dispose();
}
}