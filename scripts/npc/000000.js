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
		var t = "				#e月  光  冒  险  岛\r\n\r\n";
		t += "萌新玩家可以获得以下道具：\r\n\r\n";
		t += " - 声望值 x 10000000\r\n";//	金花戒指
		t += " - #z1112941# x 6（全属性攻击魔法100）\r\n";//	属性点装戒指
		t += " - #z1202193# x 1\r\n";//	金花戒指
		t += " - #z1113210# x 1\r\n";//	金花戒指
		t += " - #z1182150# x 1\r\n";//	热情徽章
		t += " - #z1114304# x 1\r\n";//	重启宇宙戒指
		t += " - #z1143078# x 1（#b装备属性：#rHP10000，MP10000，移动速度20，跳跃力20#k）\r\n";//	微不足道的新人
		t += " - #z1112659# x 1（#b装备属性：#r全属性100，双攻100，跳跃力20#k）\r\n";//	微不足道的新人
		t += " - #z1113040# x 1（#b装备属性：#rBoss伤害+40，总伤害+20#k）\r\n";//	微不足道的新人
		cm.sendYesNo(t);
	} else if (status == 1) {
		if (cm.getBossLog("新手礼包", 1) == 1) {
			cm.setBossLog("新手礼包", 1, 1);
			cm.gainItem(2431693, 1);// 召唤工作员
			cm.gainItem(2435413, 1);// 13周年
			cm.gainItem(1113210, 1);//	金花戒指
			cm.gainItem(1182150, 1);//	热情徽章
			cm.gainItem(1114304, 1);//	重启宇宙戒指
			cm.gainItem(1202193, 1);//	轮回
			cm.gainItem(1002186, 1);//	透明帽
			cm.gainItem(1702224, 1);//	透明装备
			cm.gainItem(1072153, 1);//	透明鞋
			cm.gainItem(1032024, 1);//	透明耳环
			cm.gainItem(1022048, 1);//	透明眼饰
			cm.gainItem(1102039, 1);//	透明披风
			cm.gainItem(1012057, 1);//	透明面具
			cm.gainItem(2431937, 1);//  巨匠武器箱
			cm.gainItem(5062500, 200);// 大师附加
			cm.gainItem(5062009, 200);// 超级神奇
			cm.gainItem(4009453, 9999);// 魔方精髓
			cm.gainItem(5360014, 1);// 双倍爆率
			cm.gainItem(1012553, 1);// 咬紧牙关
			cm.gainItem(2022720, 9999);// 超级药水
			cm.gainItem(1112918, 1);// 回归戒指
			cm.gainItem(2431028, 1);// 魔法盾
			
                        cm.gainItem(5211060, 1, 1, true); // 三倍经验卡

	                //cm.gainItem(2431290, 1);//内测删除//
			//cm.gainItem(4031997, 10000);//内测删除//
                        //cm.gainMeso(+10000000000);//内测删除//
                      //  cm.gainNX(+10000000);//内测删除//

			cm.getPlayer().gainHonor(10000000);//	声望值

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
			toDrop.setEnhance(20)
			toDrop.setStr(5); //装备力量
			toDrop.setDex(5); //装备敏捷
			toDrop.setInt(5); //装备智力
			toDrop.setLuk(5); //装备运气
			toDrop.setMatk(5); //物理攻击
			toDrop.setWatk(5); //魔法攻击 
			toDrop.setOwner("月光冒险岛");
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
                        

			cm.spouseMessage(0x0F, "[萌新驾到]：萌新 “" + cm.getPlayer().getName() + " 来到 月光冒险岛 ，欢迎TA的到来！！~~~”");
			cm.warp(50000);
			cm.sendOk("恭喜您，领取成功！快打开包裹看看吧！");
			cm.dispose();
		} else {
			status = -1;
			cm.sendSimple("您已经领取过了，快去冒险吧。");
		}
	}
}
