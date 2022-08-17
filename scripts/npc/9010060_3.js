var status = 0;
var typede = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		if (status == 0) {
			var text = "";
			text = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0##k\r\n部分技能收取金币,请了解后在进行学习。\r\n";
			text += "#L14##r了解以下技能特效(#e新人必看#n)#l\r\n";
			//#L1##b学习骑术#l
			text += "#L2##b学习群宠#l #L3##b学习锻造#l #L5##b学习匠人之魂#l\r\n";
			text += "#L9##b学习御龙魔飞行技能 (全职业可学)#l\r\n";
			text += "#L4##b学习英雄之回声     (全职业可学)#l\r\n";
			text += "#L6##b学习联盟的意志     (全职业可学)#l\r\n";
			text += "#L8##b学习好用的轻功     (全职业可学)#l\r\n";
			text += "#L7##b学习高贵精神       (骑士团可学)#l\r\n";
			text += "#L10##b学习女皇的呼唤     (骑士团可学)#l\r\n";
			text += "#L11##b学习女皇的祈祷     (骑士团、米哈儿可学)#l\r\n";
			text += "#L12##b学习找回的记忆     (战神职业可学)#l\r\n";
			text += "#L13##b学习继承的意志     (龙神职业可学)#l\r\n";
			cm.sendSimple(text);

		} else if (selection == 14) {
			cm.sendOk("#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0##k\r\n技能特效如下:\r\n#b0、龙神技能-继承的意志特效如下:#k\r\n永久性提高魔法攻击力10、魔法防御力300、HP增加15%、所有属性加10、BOSS伤害增加5% 需要支付#b500万金币#k才可学习。\r\n#b1、战神技能-找回的记忆特效如下:#k\r\n永久性提高攻击力10、物理防御力300、移动速度10、暴击率%5、BOSS伤害增加5%、需要支付#b500万金币#k才可学习。\r\n#b2、骑士团技能-女皇的呼唤特效如下:#k\r\n在2小时内物理攻击力和魔法攻击力同时提高4%,需要支付#b500万金币#k才可学习。\r\n#b3、全职业技能-联盟的意志特效如下:#k\r\n永久性提高力量5点、敏捷5点、智力5点、运气5点、攻击力5点、魔法攻击力5、需要支付#b500万金币#k才可学习。\r\n#b4、骑士团技能-女皇的祈祷特效如下:#k\r\n永久性提高最大PH和MP%20,需要支付#b500万金币#k才可学习。\r\n#b5、全职业技能-英雄之回声特效如下:#k\r\n在40分钟内增加物理攻击力2%、增加魔法攻击力2%、冷却时间2小时、需要支付#b500万金币#k才可学习。\r\n#b6、全职业技能-好用的轻功特效如下:#k\r\n在200秒内移动速度提高20、跳跃力提高10、需要支付#b300金币#k才可学习。\r\n#b7、骑士团技能-高贵精神特效如下:#k\r\n提高女皇的祝福最高等级7、需要等级#b5级以上#k才可学习。");
			cm.dispose();
		} else if (selection == 1) {
			 if (cm.getMeso() <= 1500000) {
				cm.sendOk("由于骑宠技能的特殊性需要支付150万金币才可以学习,您目前没有足够的金币。");
			} else if (cm.getPlayer().getLevel() >= 70) {
			    cm.gainMeso( - 1500000);
				cm.teachSkill(80001000, 1, 1);
		        cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
		    } else {
				cm.sendOk("您现在的等级条件还不能学习骑宠技能,需要70级才可以学习。");
			}
			cm.dispose();
		} else if (selection == 2) {
			 if (cm.getPlayer().getSkillLevel(8) > 0 || cm.getPlayer().getSkillLevel(10000018) > 0 || cm.getPlayer().getSkillLevel(20000024) > 0 || cm.getPlayer().getSkillLevel(20011024) > 0) {
                cm.sendOk("您已经学习过这个技能。");
			} else if (cm.getMeso() <= 500000) {
				cm.sendOk("由于群宠技能的特殊性需要支付#b10万#k金币才可以学习,您目前没有足够的金币。");
			} else if (cm.getPlayer().getLevel() <= 50) {
				cm.sendOk("您现在的等级条件还不能学习群宠技能,需要50级才可以学习。");
			} else if (cm.getJobId() >= 0 && cm.getJobId() <= 532) { //冒险家
				cm.gainMeso( - 100000);
				cm.teachSkill(8, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
			} else if (cm.getJobId() >= 2200 && cm.getJobId() <= 2218) { //龙神
					cm.gainMeso( - 100000);
					cm.teachSkill(20011024, 1, 1);
					cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 1000 && cm.getJobId() <= 1512) { //骑士团
					cm.gainMeso( - 100000);
					cm.teachSkill(10000018, 1, 1);
					cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2100 && cm.getJobId() <= 2112) { //战神
					cm.gainMeso( - 100000);
					cm.teachSkill(20000024, 1, 1);
				    cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
			 } else {
				cm.sendOk("学习此项技能中没有符合您的职业群,您可以尝试做官方任务获得该技能。");
			}
			cm.dispose();
		} else if (selection == 3) {
			if (cm.getPlayer().getLevel() <= 45) {
				cm.sendOk("您现在的等级条件还不能学习锻造技能,需要45级才可以学习。");
				} else if (cm.getJobId() >= 100 && cm.getJobId() <= 512) {//冒险家	
				cm.teachSkill(1007, 3, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 1000 && cm.getJobId() <= 1512) {//骑士团
				cm.teachSkill(10001007, 3, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2100 && cm.getJobId() <= 2112) {//战神
				cm.teachSkill(20001007, 3, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2200 && cm.getJobId() <= 2218) {//龙神
				cm.teachSkill(20011007, 3, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3000 && cm.getJobId() <= 3512) {//反抗者
				cm.teachSkill(30001007, 3, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 5100 && cm.getJobId() <= 5112) {//米哈尔
				cm.teachSkill(50001007, 3, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 6100 && cm.getJobId() <= 6112) {//狂龙战士
				cm.teachSkill(60001007, 3, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 6500 && cm.getJobId() <= 6512) {//暴利萌天使
				cm.teachSkill(60011007, 3, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3600 && cm.getJobId() <= 3612) {//尖兵
				cm.teachSkill(30021007, 3, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2700 && cm.getJobId() <= 2712) {//夜光法师	
				cm.teachSkill(20041007, 3, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2300 && cm.getJobId() <= 2312) {//双弩精灵
				cm.teachSkill(20021007, 3, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2400 && cm.getJobId() <= 2412) {//幻影
				cm.teachSkill(20031007, 3, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3100 && cm.getJobId() <= 3112) {// 恶魔猎手
				cm.teachSkill(30011007, 3, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
			} else {
				cm.sendOk("学习此项技能中没有符合您的职业群,您可以尝试做官方任务获得该技能。");
			}
			cm.dispose();
		} else if (selection == 4) {
			if (cm.getMeso() <= 5000000) {
				cm.sendOk("由于英雄之回声技能的特殊性需要支付#b500万金币#k才可以学习,您目前没有足够的金币。");
			} else if (cm.getPlayer().getLevel() <= 100) {
				cm.sendOk("您现在的等级条件还不能学习英雄之回声技能,需要100级才可以学习。");
				} else if (cm.getJobId() >= 100 && cm.getJobId() <= 512) {//冒险家	
				cm.gainMeso( - 5000000);
				cm.teachSkill(1005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 1000 && cm.getJobId() <= 1512) {//骑士团
				cm.gainMeso( - 5000000);
				cm.teachSkill(10001005, 1, 1);
				cm.teachSkill(10001215, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2100 && cm.getJobId() <= 2112) {//战神
				cm.gainMeso( - 5000000);
				cm.teachSkill(20001005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2200 && cm.getJobId() <= 2218) {//龙神
				cm.gainMeso( - 5000000);
				cm.teachSkill(20011005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3000 && cm.getJobId() <= 3512) {//反抗者
				cm.gainMeso( - 5000000);
				cm.teachSkill(30001005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 5100 && cm.getJobId() <= 5112) {//米哈尔
				cm.gainMeso( - 5000000);
				cm.teachSkill(50001005, 1, 1);
				cm.teachSkill(50001215, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3600 && cm.getJobId() <= 3612) {//尖兵
				cm.gainMeso( - 5000000);
				cm.teachSkill(30021005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2700 && cm.getJobId() <= 2712) {//夜光法师
				cm.gainMeso( - 5000000);
				cm.teachSkill(20041005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2300 && cm.getJobId() <= 2312) {//双弩精灵
				cm.gainMeso( - 5000000);
				cm.teachSkill(20021005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2400 && cm.getJobId() <= 2412) {//幻影
				cm.gainMeso( - 5000000);
				cm.teachSkill(20031005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3100 && cm.getJobId() <= 3112) {// 恶魔猎手
				cm.gainMeso( - 5000000);
				cm.teachSkill(30011005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				
			} else {
				cm.sendOk("学习此项技能中没有符合您的职业群,您可以尝试做官方任务获得该技能。");
			}
			cm.dispose();
		} else if (selection == 5) {
			if (cm.getPlayer().getLevel() <= 150) {
				cm.sendOk("您现在的等级条件还不能学习匠人之魂技能,需要150级才可以学习。");
				} else if (cm.getJobId() >= 100 && cm.getJobId() <= 512) {//冒险家
				cm.teachSkill(1003, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 1000 && cm.getJobId() <= 1512) {//骑士团
				cm.teachSkill(10001005, 1, 1);
				cm.teachSkill(10001215, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2100 && cm.getJobId() <= 2112) {//战神
				cm.teachSkill(20001005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2200 && cm.getJobId() <= 2218) {//龙神
				cm.teachSkill(20011005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3000 && cm.getJobId() <= 3512) {//反抗者
				cm.teachSkill(30001005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 5100 && cm.getJobId() <= 5112) {//米哈尔
				cm.teachSkill(50001005, 1, 1);
				cm.teachSkill(50001215, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3600 && cm.getJobId() <= 3612) {//尖兵
				cm.teachSkill(30021005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2700 && cm.getJobId() <= 2712) {//夜光法师
				cm.teachSkill(20041005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2300 && cm.getJobId() <= 2312) {//双弩精灵
				cm.teachSkill(20021005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2400 && cm.getJobId() <= 2412) {//幻影
				cm.teachSkill(20031005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3100 && cm.getJobId() <= 3112) {// 恶魔猎手
				cm.teachSkill(30011005, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				
			} else {
				cm.sendOk("学习此项技能中没有符合您的职业群,您可以尝试做官方任务获得该技能。");
			}
			cm.dispose();
		} else if (selection == 6) {
			if (cm.getMeso() <= 50000000) {
				cm.sendOk("由于联盟的意志技能的特殊性需要支付#b500万金币#k才可以学习.您目前没有足够的#b金币#k。");
			  } else if (cm.getPlayer().getLevel() <= 150) {
				cm.sendOk("您现在的等级条件还不能学习联盟的意志技能,需要150级才可以学习。");
				} else if (cm.getJobId() >= 5100 && cm.getJobId() <= 5112) {//米哈尔
				cm.gainMeso( - 5000000);
				cm.teachSkill(50000190, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 6100 && cm.getJobId() <= 6112) {//狂龙战士
				cm.gainMeso( - 5000000);
				cm.teachSkill(60000190, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 6500 && cm.getJobId() <= 6512) {//暴利萌天使
				cm.gainMeso( - 5000000);
				cm.teachSkill(60010190, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3600 && cm.getJobId() <= 3612) {//尖兵
				cm.gainMeso( - 5000000);
				cm.teachSkill(30020190, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2700 && cm.getJobId() <= 2712) {//夜光法师
				cm.gainMeso( - 5000000);
				cm.teachSkill(20040190, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2400 && cm.getJobId() <= 2412) {//幻影
				cm.gainMeso( - 5000000);
				cm.teachSkill(20030190, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 100 && cm.getJobId() <= 512) {//冒险家
				cm.gainMeso( - 5000000);
				cm.teachSkill(190, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 1000 && cm.getJobId() <= 1512) {//骑士团
				cm.gainMeso( - 5000000);
				cm.teachSkill(10000190, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2100 && cm.getJobId() <= 2112) {//战神
				cm.gainMeso( - 5000000);
				cm.teachSkill(20000190, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2200 && cm.getJobId() <= 2218) {//龙神
				cm.gainMeso( - 5000000);
				cm.teachSkill(20010190, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3000 && cm.getJobId() <= 3512) {//反抗者
				cm.gainMeso( - 5000000);
				cm.teachSkill(30000190, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2300 && cm.getJobId() <= 2312) {//双弩精灵
				cm.gainMeso( - 5000000);
				cm.teachSkill(20020190, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3100 && cm.getJobId() <= 3112) {// 恶魔猎手
				cm.gainMeso( - 5000000);
				cm.teachSkill(30010190, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				
			} else {
				cm.sendOk("学习此项技能中没有符合您的职业群,您可以尝试做官方任务获得该技能。");
			}
			cm.dispose();
		} else if (selection == 7) {
			if (cm.getPlayer().getLevel() <= 5) {
			cm.sendOk("您现在的等级条件还不能学习高贵精神技能,需要5级才可以学习。");
			} else if (cm.getJobId() >= 1000 && cm.getJobId() <= 1512) {// 骑士团
				cm.teachSkill(10000202, 6, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
			} else {
				cm.sendOk("学习高贵的精神技能只有骑士团职业群才可以学习。");
			}
			cm.dispose();
		} else if (selection == 8) {
			if (cm.getMeso() <= 3000000) {
				cm.sendOk("由于好用的轻功技能的特殊性需要支付#b300万金币#k才可以学习,您目前没有足够的金币。");
			} else if (cm.getPlayer().getLevel() <= 70) {
				cm.sendOk("您现在的等级条件还不能学习好用的轻功技能,需要70级才可以学习。");
				} else if (cm.getJobId() >= 100 && cm.getJobId() <= 512) {//冒险家
				cm.gainMeso( - 3000000);
				cm.teachSkill(8000, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 1000 && cm.getJobId() <= 1512) {//骑士团
				cm.gainMeso( - 3000000);
				cm.teachSkill(10008000, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2100 && cm.getJobId() <= 2112) {//战神
				cm.gainMeso( - 3000000);
				cm.teachSkill(20008000, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2200 && cm.getJobId() <= 2218) {//龙神
				cm.gainMeso( - 3000000);
				cm.teachSkill(20018000, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3000 && cm.getJobId() <= 3512) {//反抗者
				cm.gainMeso( - 3000000);
				cm.teachSkill(30008000, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 5100 && cm.getJobId() <= 5112) {//米哈尔
				cm.gainMeso( - 3000000);
				cm.teachSkill(50008000, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 6100 && cm.getJobId() <= 6112) {//狂龙战士
				cm.gainMeso( - 3000000);
				cm.teachSkill(60008000, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 6500 && cm.getJobId() <= 6512) {//暴利萌天使
				cm.gainMeso( - 3000000);
				cm.teachSkill(60018000, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3600 && cm.getJobId() <= 3612) {//尖兵
				cm.gainMeso( - 3000000);
				cm.teachSkill(30028000, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2700 && cm.getJobId() <= 2712) {//夜光法师
				cm.gainMeso( - 3000000);
				cm.teachSkill(20048000, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2300 && cm.getJobId() <= 2312) {//双弩精灵
				cm.gainMeso( - 3000000);
				cm.teachSkill(20028000, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2400 && cm.getJobId() <= 2412) {//幻影
				cm.gainMeso( - 3000000);
				cm.teachSkill(20038000, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3100 && cm.getJobId() <= 3112) {// 恶魔猎手
				cm.gainMeso( - 3000000);
				cm.teachSkill(30018000, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
			} else {
				cm.sendOk("学习此项技能中没有符合您的职业群,您可以尝试做官方任务获得该技能。");
			}
			cm.dispose();
		} else if (selection == 9) {
			if (cm.getMeso() <= 1000000) {
				cm.sendOk("由于飞翔技能的特殊性需要支付#b100万金币#k才可以学习,您目前没有足够的金币。");
			   } else if (cm.getPlayer().getLevel() <= 120) {
			   cm.sendOk("您现在的等级条件还不能学习飞翔技能,需要120级才可以学习。"); 
				} else if (cm.getJobId() >= 100 && cm.getJobId() <= 512) {//冒险家
				cm.gainMeso( - 1000000);
				cm.teachSkill(1026, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快11。");
				} else if (cm.getJobId() >= 1000 && cm.getJobId() <= 1512) {//骑士团
				cm.gainMeso( - 1000000);
				cm.teachSkill(10001026, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2100 && cm.getJobId() <= 2112) {//战神
				cm.gainMeso( - 1000000);
				cm.teachSkill(20001026, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2200 && cm.getJobId() <= 2218) {//龙神
				cm.gainMeso( - 1000000);
				cm.teachSkill(20011026, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3000 && cm.getJobId() <= 3512) {//反抗者
				cm.gainMeso( - 1000000);
				cm.teachSkill(30001026, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 5100 && cm.getJobId() <= 5112) {//米哈尔
				cm.gainMeso( - 1000000);
				cm.teachSkill(50001026, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 6100 && cm.getJobId() <= 6112) {//狂龙战士
				cm.gainMeso( - 1000000);
				cm.teachSkill(60001026, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 6500 && cm.getJobId() <= 6512) {//暴利萌天使
				cm.gainMeso( - 1000000);
				cm.teachSkill(60011026, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3600 && cm.getJobId() <= 3612) {//尖兵
				cm.gainMeso( - 1000000);
				cm.teachSkill(30021026, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2700 && cm.getJobId() <= 2712) {//夜光法师
				cm.gainMeso( - 1000000);
				cm.teachSkill(20041026, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2300 && cm.getJobId() <= 2312) {//双弩精灵
				cm.gainMeso( - 1000000);
				cm.teachSkill(20021026, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 2400 && cm.getJobId() <= 2412) {//幻影
				cm.gainMeso( - 1000000);
				cm.teachSkill(20031026, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 3100 && cm.getJobId() <= 3112) {// 恶魔猎手
				cm.gainMeso( - 1000000);
				cm.teachSkill(30011026, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
			} else {
				cm.sendOk("学习此项技能中没有符合您的职业群,您可以尝试做官方任务获得该技能。");
			}
			
			cm.dispose();
		} else if (selection == 10) {
			if (cm.getPlayer().getLevel() <= 100) {
			    cm.sendOk("您现在的等级条件还不能学习女皇的呼唤技能,需要100级才可以学习。");
			} else if (cm.getMeso() <= 5000000) {
			    cm.sendOk("由于女皇的呼唤技能的特殊性需要支付#b500万金币#k才可以学习,您目前没有足够的#b金币#k。");
			} else if (cm.getJobId() >= 1000 && cm.getJobId() <= 1512) {
				cm.gainMeso( - 5000000);
				cm.teachSkill(10000074, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
			} else {
				cm.sendOk("学习女皇的呼唤技能只有骑士团职业群才可以学习。");
			}
			cm.dispose();
		} else if (selection == 11) {
			 if (cm.getPlayer().getLevel() <= 100) {
				cm.sendOk("您现在的等级条件还不能学习女皇的祈祷技能,需要100级才可以学习。");
			} else if (cm.getMeso() <= 5000000) {
			    cm.sendOk("由于女皇的祈祷技能的特殊性需要支付#b500万金币#k才可以学习,您目前没有足够的金币。");	
				} else if (cm.getJobId() >= 1000 && cm.getJobId() <= 1512) {//骑士团
				cm.gainMeso( - 5000000);
				cm.teachSkill(10001075, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
				} else if (cm.getJobId() >= 5100 && cm.getJobId() <= 5112) {//米哈尔
				cm.gainMeso( - 5000000);
				cm.teachSkill(50001075, 1, 1);
			    cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
			} else {
				cm.sendOk("学习女皇的祈祷技能只有骑士团和米哈尔职业群才可以学习。");
			}
			cm.dispose();
		} else if (selection == 12) {
			if (cm.getPlayer().getLevel() <=100) {
			cm.sendOk("您现在的等级条件还不能学习找回的记忆技能,需要100级才可以学习。");
			} else if (cm.getMeso() <= 5000000) {
			cm.sendOk("由于找回的记忆技能的特殊性需要支付#b500万金币#k才可以学习,您目前没有足够的#b彩云币#k。");
			} else if (cm.getJobId() >= 2100 && cm.getJobId() <= 2112) {
				cm.gainMeso( - 5000000);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
			} else {
				cm.sendOk("学习找回的记忆技能只有战神职业群才可以学习。");

			}
			cm.dispose();
		} else if (selection == 13) {
			 if (cm.getPlayer().getLevel() < 120) {
				cm.sendOk("您现在的等级条件还不能学习继承的意志技能,需要120级才可以学习。");
			} else if (cm.getMeso() <= 5000000) {
			cm.sendOk("由于继承的意志技能的特殊性需要支付#b500万金币#k才可以学习,您目前没有足够的#b彩云币#k。");
			} else if (cm.getJobId() >= 2200 && cm.getJobId() <= 2218) {
				cm.gainMeso( - 5000000);
				cm.teachSkill(20010194, 1, 1);
				cm.sendOk("恭喜您学习技能成功,祝您游戏愉快。");
			} else {
				cm.sendOk("学习继承的意志技能只有龙神职业群才可以学习。");
			}
			cm.dispose();
		}
	}
}
