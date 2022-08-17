var status = -1;


function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	var date = new Date();
	cm.sendYesNo("是否要领取属性为【#r四维50，攻击魔力50，百分之20的BOSS伤害，百分之20的伤害，移动速度30，跳跃力30#k】的“#b#i1143052##t1143052##k勋章？”");    
	} else if (status == 1) {
		if (cm.getBossLog("组队副本积分", 1) < 900) {
			   cm.sendOk("通关次数不足 #r"+(900 - cm.getBossLog("组队副本积分", 1))+"#k 次，请获得足够的次数后再来领取。");
			   cm.dispose();
	} else if (cm.canHold(1143052,1)) {
               var ii = cm.getItemInfo();
               var toDrop = cm.getNewEquip(1143052); // 生成一个Equip类 耳环                 
               toDrop.setStr(50); //装备力量
               toDrop.setDex(50); //装备敏捷
               toDrop.setInt(50); //装备智力
               toDrop.setLuk(50); //装备运气
               toDrop.setMatk(50); //物理攻击
               toDrop.setWatk(50); //魔法攻击 
			   toDrop.setJump(30);//跳跃
			   toDrop.setSpeed(30);//移动速度
			   toDrop.setBossDamage(20);//boss伤害
			   toDrop.setTotalDamage(20);//总伤害
               cm.addFromDrop(toDrop);	
               cm.sendOk("领取成功，请在背包内查看。");
               cm.spouseMessage(0x13, "[组队任务奖励]：恭喜玩家 " + cm.getChar().getName() + " 获得了 “组队任务勋章” ，属性大幅度提升！~");
               cm.dispose();	
	} else {
               cm.sendOk("背包空间不足，请保证有充足的背包空间。");
			   cm.dispose();
    }
    }
}


