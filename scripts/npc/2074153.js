/*      
 *  
 *  功能：等级送礼
 *  
 */

var status = 0;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		var t = "				#e布  丁  冒  险  岛\r\n\r\n";
		t += "萌新玩家可以获得以下道具：\r\n\r\n";
		t += "声望值 x 10000000\r\n";//	金花戒指
		t += "#i1112941# #i1202193# #i1113210# #i1182150# #i2431693# #i2435413# #i2431937#\r\n#i1114304# #i1143078# #i1112659# #i1113040# #i1190400# #i1012553# #i1112918# #i5211060#\r\n#i1122198# #i1082219# #i1152109# #i1112761# #i1072345# #i1032160# #i1012378# #i1062158# #i1042244#\r\n";
		cm.sendYesNo(t);
	} else if (status == 1) {
		if (cm.getBossLog("新手礼包", 1) == 0) {
			cm.setBossLog("新手礼包", 1, 1);
			cm.gainItem(2431693, 1);// 开发者的信
			cm.gainItem(2435413, 1);// 13周年盒子
			cm.gainItem(1113210, 1);//	金花戒指
			cm.gainItem(1182150, 1);//	热情徽章
			cm.gainItem(1114304, 1);//	重启宇宙戒指
			cm.gainItem(1202193, 1);//	轮回
			cm.gainItem(2430780, 1);//	魔法袋
			cm.gainItem(1002186, 1);//	透明帽
			cm.gainItem(1702224, 1);//	透明装备
			cm.gainItem(1072153, 1);//	透明鞋
			cm.gainItem(1032024, 1);//	透明耳环
			cm.gainItem(1022048, 1);//	透明眼饰
			cm.gainItem(1102039, 1);//	透明披风
			cm.gainItem(1012057, 1);//	透明面具
			cm.gainItem(2431937, 1);//  巨匠武器箱
			cm.gainItem(5062500, 200);// 大师附加神奇魔方
			cm.gainItem(5062010, 200);// 终级神奇魔方
			cm.gainItem(4009453, 9999);// 魔方精髓
			cm.gainItem(1012553, 1);// 咬紧牙关
			cm.gainItem(2022720, 9999);// 超级药水
			cm.gainItem(1112918, 1);// 回归戒指
			cm.gainItem(2431027, 1);// 段数药水
			cm.gainItem(2430865, 1);// 全能BUFF
			
                        cm.gainItem(5211060, 1, 1, true); // 三倍经验卡

	                //cm.gainItem(2431290, 1);//内测删除//
			//cm.gainItem(4031997, 10000);//内测删除//
                        //cm.gainMeso(+10000000000);//内测删除//
                        //cm.gainNX(+10000000);//内测删除//

			cm.getPlayer().gainHonor(10000000);//	声望值
			
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1122198) ; //
			toDrop.setState(20,false);
			toDrop.setPotential(42087, 1, false);
			cm.addFromDrop(toDrop);
			
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1082219) ; //
			toDrop.setState(20,false);
			toDrop.setPotential(42087, 1, false);
			cm.addFromDrop(toDrop);
			
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1072345) ; //
			toDrop.setState(20,false);
			toDrop.setPotential(42087, 1, false);
			cm.addFromDrop(toDrop);
			
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1032160) ; //
			toDrop.setState(20,false);
			toDrop.setPotential(42087, 1, false);
			cm.addFromDrop(toDrop);
			
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1012378) ; //
			toDrop.setState(20,false);
			toDrop.setPotential(42087, 1, false);
			cm.addFromDrop(toDrop);
			
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1062158) ; //
			toDrop.setState(20,false);
			toDrop.setPotential(42087, 1, false);
			cm.addFromDrop(toDrop);
			
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1042244) ; //
			toDrop.setState(20,false);
			toDrop.setPotential(42087, 1, false);
			cm.addFromDrop(toDrop);
			
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1152109) ; // 肩章    
			toDrop.setStr(100); //装备力量
			toDrop.setDex(100); //装备敏捷
			toDrop.setInt(100); //装备智力
			toDrop.setLuk(100); //装备运气
			toDrop.setMatk(50); //物理攻击
			toDrop.setWatk(50); //魔法攻击 
			toDrop.setBossDamage(5);// BOSS伤
			toDrop.setState(20,false);
			toDrop.setPotential(42087, 1, false);
			cm.addFromDrop(toDrop);
			
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1112761) ; // 戒指    
			toDrop.setStr(100); //装备力量
			toDrop.setDex(100); //装备敏捷
			toDrop.setInt(100); //装备智力
			toDrop.setLuk(100); //装备运气
			toDrop.setMatk(50); //物理攻击
			toDrop.setWatk(50); //魔法攻击 
			toDrop.setBossDamage(5);// BOSS伤
			toDrop.setState(20,false);
			toDrop.setPotential(42087, 1, false);
			cm.addFromDrop(toDrop);

			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1143078); // 生成一个Equip类 耳环                 
			toDrop.setHp(10000); //血量
			toDrop.setMp(10000); //蓝量
			toDrop.setJump(20);//跳跃						
			toDrop.setSpeed(20);//移动速度
			cm.addFromDrop(toDrop);

			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1112659); // 生成一个Equip类 耳环                 
			toDrop.setStr(100); //装备力量
			toDrop.setDex(100); //装备敏捷
			toDrop.setInt(100); //装备智力
			toDrop.setLuk(100); //装备运气
			toDrop.setWatk(100); //物理攻击
			toDrop.setMatk(100); //魔法攻击
			toDrop.setJump(100);//跳跃						
			toDrop.setSpeed(100);//移动速度
			cm.addFromDrop(toDrop);

			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1113040); // 生成一个Equip类 耳环                 
			toDrop.setBossDamage(40);//boss伤害
			toDrop.setTotalDamage(20);//总伤害
			cm.addFromDrop(toDrop);

			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1190400); // 生成一个Equip类      
			toDrop.setEnhance(25)
			toDrop.setStr(5); //装备力量
			toDrop.setDex(5); //装备敏捷
			toDrop.setInt(5); //装备智力
			toDrop.setLuk(5); //装备运气
			toDrop.setMatk(5); //物理攻击
			toDrop.setWatk(5); //魔法攻击 
			cm.addFromDrop(toDrop);

			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1112941); // 点状戒指      
			toDrop.setStr(100); //装备力量
			toDrop.setDex(100); //装备敏捷
			toDrop.setInt(100); //装备智力
			toDrop.setLuk(100); //装备运气
			toDrop.setMatk(100); //物理攻击
			toDrop.setWatk(100); //魔法攻击 
			cm.addFromDrop(toDrop);
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1112941); // 点状戒指      
			toDrop.setStr(100); //装备力量
			toDrop.setDex(100); //装备敏捷
			toDrop.setInt(100); //装备智力
			toDrop.setLuk(100); //装备运气
			toDrop.setMatk(100); //物理攻击
			toDrop.setWatk(100); //魔法攻击 
			cm.addFromDrop(toDrop);
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1112941); // 点状戒指      
			toDrop.setStr(100); //装备力量
			toDrop.setDex(100); //装备敏捷
			toDrop.setInt(100); //装备智力
			toDrop.setLuk(100); //装备运气
			toDrop.setMatk(100); //物理攻击
			toDrop.setWatk(100); //魔法攻击 
			cm.addFromDrop(toDrop);
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1112941); // 点状戒指      

			toDrop.setStr(100); //装备力量
			toDrop.setDex(100); //装备敏捷
			toDrop.setInt(100); //装备智力
			toDrop.setLuk(100); //装备运气
			toDrop.setMatk(100); //物理攻击
			toDrop.setWatk(100); //魔法攻击 
			cm.addFromDrop(toDrop);
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1112941); // 点状戒指      
			toDrop.setStr(100); //装备力量
			toDrop.setDex(100); //装备敏捷
			toDrop.setInt(100); //装备智力
			toDrop.setLuk(100); //装备运气
			toDrop.setMatk(100); //物理攻击
			toDrop.setWatk(100); //魔法攻击 
			cm.addFromDrop(toDrop);
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1112941); // 点状戒指      
			toDrop.setStr(100); //装备力量
			toDrop.setDex(100); //装备敏捷
			toDrop.setInt(100); //装备智力
			toDrop.setLuk(100); //装备运气
			toDrop.setMatk(100); //物理攻击
			toDrop.setWatk(100); //魔法攻击 
			cm.addFromDrop(toDrop);
			cm.worldSpouseMessage(0x0A,"『萌新驾到』 萌新 " + cm.getPlayer().getName() + " 来到 月光冒险岛 ，欢迎TA的到来！！~~~");
			cm.worldSpouseMessage(0x0A,"『萌新驾到』 萌新 " + cm.getPlayer().getName() + " 来到 月光冒险岛 ，欢迎TA的到来！！~~~");
			cm.worldSpouseMessage(0x0A,"『萌新驾到』 萌新 " + cm.getPlayer().getName() + " 来到 月光冒险岛 ，欢迎TA的到来！！~~~");
			cm.warp(50000);
			cm.sendOk("恭喜您，领取成功！快打开包裹看看吧！");
			cm.dispose();
		} else {
			status = -1;
			cm.sendSimple("您已经领取过了，快去冒险吧。");
		}
	}
}
