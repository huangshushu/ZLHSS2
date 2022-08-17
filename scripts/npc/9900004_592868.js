 /* * * * * * * * * * * *
 * *  脚本作者：HuanMS * *
 * *  QQ：346452946  * *
 * * * * * * * * * * * */


var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			需要金币 = 0;
			
			
			
			cm.sendYesNo("#r我可以帮你把技能点满!!!#k");
		} else if (status == 1) {
                if (cm.getMeso() >=需要金币){
                cm.sendOk("#r#e恭喜您点满了所有技能，从此叱咤风云！！");
				cm.teachSkill(1003,1,1);
				cm.teachSkill(1004,1,1);
				cm.teachSkill(1005,1,1);
                cm.teachSkill(0008,1,1);
                cm.teachSkill(1000,3,3);
                cm.teachSkill(1001,3,3);
                cm.teachSkill(1002,3,3);
				cm.teachSkill(10000012,20,20);
				cm.teachSkill(20001000,3,3);
				cm.teachSkill(20001001,3,3);
				cm.teachSkill(20001002,3,3);
				cm.teachSkill(20001003,3,3);
				cm.teachSkill(20001004,1,1);
				cm.teachSkill(20001005,1,1);
				cm.teachSkill(20000024,1,1);
				cm.teachSkill(20000012,20,20);
				cm.teachSkill(21000000,10,10); //矛连击强化
				cm.teachSkill(21001001,15,15); //战斗步伐
				cm.teachSkill(21000002,20,20); //双重重击
				cm.teachSkill(21001003,20,20); //快速矛
				cm.teachSkill(21100000,20,20); //精准矛
				cm.teachSkill(21100001,20,20); //三重重击
				cm.teachSkill(21100002,30,30); //战神突进
				cm.teachSkill(21101003,20,20); //抗压
				cm.teachSkill(21100004,20,20); //斗气爆裂
				cm.teachSkill(21100005,30,30); //连环吸血
				cm.teachSkill(21110000,20,20); //爆击强化
				cm.teachSkill(21111001,20,20); //灵巧击退
				cm.teachSkill(21110002,20,20); //全力挥击
				cm.teachSkill(21110003,30,30); //终极投掷
				cm.teachSkill(21110004,30,30); //幻影狼牙
				cm.teachSkill(21111005,20,20); //冰雪矛
				cm.teachSkill(21110006,20,20); //旋风
				cm.teachSkill(21110007,20,20); //全力挥击
				cm.teachSkill(21110008,20,20); //全力挥击
				cm.teachSkill(21121000,30,30); //冒险岛勇士
				cm.teachSkill(21120001,30,30); //攻击策略
				cm.teachSkill(21120002,30,30); //战神之舞
				cm.teachSkill(21121003,30,30); //战神的意志
				cm.teachSkill(21120004,30,30); //防守策略
				cm.teachSkill(21120005,30,30); //巨熊咆哮
				cm.teachSkill(21120006,30,30); //钻石星辰
				cm.teachSkill(21120007,30,30); //战神之盾
				cm.teachSkill(21121008,5,5); //勇士的意志
				cm.teachSkill(9001000,1,1);
				cm.teachSkill(9001001,1,1);
				cm.teachSkill(9001002,1,1);
				cm.teachSkill(9001003,1,1);
				cm.teachSkill(9001004,1,1);
				cm.teachSkill(9001005,1,1);
				cm.teachSkill(9001006,1,1);
				cm.teachSkill(9001007,1,1);
				cm.teachSkill(9001008,1,1);
				cm.teachSkill(9001009,1,1);
				cm.teachSkill(1121011,1,1);
				cm.teachSkill(1221012,1,1);
				cm.teachSkill(1321010,1,1);
				cm.teachSkill(2121008,1,1);
				cm.teachSkill(2221008,1,1);
				cm.teachSkill(2321009,1,1);
				cm.teachSkill(3121009,1,1);
				cm.teachSkill(3221008,1,1);
				cm.teachSkill(4121009,1,1);
				cm.teachSkill(4221008,1,1); //End of max-level "1" skills
				cm.teachSkill(1000002,8,8); //Start of max-level "8" skills
				cm.teachSkill(3000002,8,8);
				cm.teachSkill(4000001,8,8); //End of max-level "8" skills
				cm.teachSkill(1000001,10,10); //Start of max-level "10" skills
				cm.teachSkill(2000001,10,10); //End of max-level "10" skills
				cm.teachSkill(1000000,16,16); //Start of max-level "16" skills
				cm.teachSkill(2000000,16,16);
				cm.teachSkill(3000000,16,16); //End of max-level "16" skills
				cm.teachSkill(1001003,20,20); //Start of max-level "20" skills
				cm.teachSkill(3200001,30,30);
				cm.teachSkill(1001004,20,20);
				cm.teachSkill(1001005,20,20);
				cm.teachSkill(2001002,20,20);
				cm.teachSkill(2001003,20,20);
				cm.teachSkill(2001004,20,20);
				cm.teachSkill(2001005,20,20);
				cm.teachSkill(3000001,20,20);
				cm.teachSkill(3001003,20,20);
				cm.teachSkill(3001004,20,20);
				cm.teachSkill(3001005,20,20);
				cm.teachSkill(4000000,20,20);
				cm.teachSkill(4001344,20,20);
				cm.teachSkill(4001334,20,20);
				cm.teachSkill(4001002,20,20);
				cm.teachSkill(4001003,20,20);
				cm.teachSkill(1101005,20,20);
				cm.teachSkill(1100001,20,20); //Start of mastery's
				cm.teachSkill(1100000,20,20);
				cm.teachSkill(1200001,20,20);
				cm.teachSkill(1200000,20,20);
				cm.teachSkill(1300000,20,20);
				cm.teachSkill(1300001,20,20);
				cm.teachSkill(3100000,20,20);
				cm.teachSkill(3200000,20,20);
				cm.teachSkill(4100000,20,20);
				cm.teachSkill(4200000,20,20); //End of mastery's
				cm.teachSkill(4201002,20,20);
				cm.teachSkill(4101003,20,20);
				cm.teachSkill(3201002,20,20);
				cm.teachSkill(3101002,20,20);
				cm.teachSkill(1301004,20,20);
				cm.teachSkill(1301005,20,20);
				cm.teachSkill(1201004,20,20);
				cm.teachSkill(1201005,20,20);
				cm.teachSkill(1101004,20,20); //End of boosters
				cm.teachSkill(1101006,20,20);
				cm.teachSkill(1201006,20,20);
				cm.teachSkill(1301006,20,20);
				cm.teachSkill(2101001,20,20);
				cm.teachSkill(2100000,20,20);
				cm.teachSkill(2101003,20,20);
				cm.teachSkill(2101002,20,20);
				cm.teachSkill(2201001,20,20);
				cm.teachSkill(2200000,20,20);
				cm.teachSkill(2201003,20,20);
				cm.teachSkill(2201002,20,20);
				cm.teachSkill(2301004,20,20);
				cm.teachSkill(2301003,20,20);
				cm.teachSkill(2300000,20,20);
				cm.teachSkill(2301001,20,20);
				cm.teachSkill(3101003,20,20);
				cm.teachSkill(3101004,20,20);
				cm.teachSkill(3201003,20,20);
				cm.teachSkill(3201004,20,20);
				cm.teachSkill(4100002,20,20);
				cm.teachSkill(4101004,20,20);
				cm.teachSkill(4200001,20,20);
				cm.teachSkill(4201003,20,20); //End of second-job skills and first-job
				cm.teachSkill(4211005,20,20);
				cm.teachSkill(4211003,20,20);
				cm.teachSkill(4210000,20,20);
				cm.teachSkill(4110000,20,20);
				cm.teachSkill(4111001,20,20);
				cm.teachSkill(4111003,20,20);
				cm.teachSkill(3210000,20,20);
				cm.teachSkill(3110000,20,20);
				cm.teachSkill(3210001,20,20);
				cm.teachSkill(3110001,20,20);
				cm.teachSkill(3211002,20,20);
				cm.teachSkill(3111002,20,20);
				cm.teachSkill(2210000,20,20);
				cm.teachSkill(2211004,20,20);
				cm.teachSkill(2211005,20,20);
				cm.teachSkill(2111005,20,20);
				cm.teachSkill(2111004,20,20);
				cm.teachSkill(2110000,20,20);
				cm.teachSkill(2311001,20,20);
				cm.teachSkill(2311005,30,30);
				cm.teachSkill(2310000,20,20);
				cm.teachSkill(1311007,20,20);
				cm.teachSkill(1310000,20,20);
				cm.teachSkill(1311008,20,20);
				cm.teachSkill(1210001,20,20);
				cm.teachSkill(1211009,20,20);
				cm.teachSkill(1210000,20,20);
				cm.teachSkill(1110001,20,20);
				cm.teachSkill(1111007,20,20);
				cm.teachSkill(1110000,20,20); //End of 3rd job skills
				cm.teachSkill(1121000,20,20);
				cm.teachSkill(1221000,20,20);
				cm.teachSkill(1321000,20,20);
				cm.teachSkill(2121000,20,20);
				cm.teachSkill(2221000,20,20);
				cm.teachSkill(2321000,20,20);
				cm.teachSkill(3121000,20,20);
				cm.teachSkill(3221000,20,20);
				cm.teachSkill(4121000,20,20);
				cm.teachSkill(4221000,20,20); //End of Maple Warrior // Also end of max-level "20" skills
				cm.teachSkill(1321007,10,10);
				cm.teachSkill(1320009,25,25);
				cm.teachSkill(1320008,25,25);
				cm.teachSkill(2321006,10,10);
				cm.teachSkill(1220010,10,10);
				cm.teachSkill(1221004,25,25);
				cm.teachSkill(1221003,25,25);
				cm.teachSkill(1100003,30,30);
				cm.teachSkill(1100002,30,30);
				cm.teachSkill(1101007,30,30);
				cm.teachSkill(1200003,30,30);
				cm.teachSkill(1200002,30,30);
				cm.teachSkill(1201007,30,30);
				cm.teachSkill(1300003,30,30);
				cm.teachSkill(1300002,30,30);
				cm.teachSkill(1301007,30,30);
				cm.teachSkill(2101004,30,30);
				cm.teachSkill(2101005,30,30);
				cm.teachSkill(2201004,30,30);
				cm.teachSkill(2201005,30,30);
				cm.teachSkill(2301002,30,30);
				cm.teachSkill(2301005,30,30);
				cm.teachSkill(3101005,30,30);
				cm.teachSkill(3201005,30,30);
				cm.teachSkill(4100001,30,30);
				cm.teachSkill(4101005,30,30);
				cm.teachSkill(4201005,30,30);
				cm.teachSkill(4201004,30,30);
				cm.teachSkill(1111006,30,30);
				cm.teachSkill(1111005,30,30);
				cm.teachSkill(1111002,30,30);
				cm.teachSkill(1111004,30,30);
				cm.teachSkill(1111003,30,30);
				cm.teachSkill(1111008,30,30);
				cm.teachSkill(1211006,30,30);
				cm.teachSkill(1211002,30,30);
				cm.teachSkill(1211004,30,30);
				cm.teachSkill(1211003,30,30);
				cm.teachSkill(1211005,30,30);
				cm.teachSkill(1211008,30,30);
				cm.teachSkill(1211007,30,30);
				cm.teachSkill(1311004,35,35);
				cm.teachSkill(1311003,30,30);
				cm.teachSkill(1311006,30,30);
				cm.teachSkill(1311002,30,30);
				cm.teachSkill(1311005,30,30);
				cm.teachSkill(1311001,35,35);
				cm.teachSkill(2110001,30,30);
				cm.teachSkill(2111006,30,30);
				cm.teachSkill(2111002,30,30);
				cm.teachSkill(2111003,30,30);
				cm.teachSkill(2210001,30,30);
				cm.teachSkill(2211006,30,30);
				cm.teachSkill(2211002,30,30);
				cm.teachSkill(2211003,30,30);
				cm.teachSkill(2311003,30,30);
				cm.teachSkill(2311002,30,30);
				cm.teachSkill(2311004,30,30);
				cm.teachSkill(2311006,30,30);
				cm.teachSkill(3111004,30,30);
				cm.teachSkill(3111003,30,30);
				cm.teachSkill(3111005,30,30);
				cm.teachSkill(3111006,30,30);
				cm.teachSkill(3211004,30,30);
				cm.teachSkill(3211003,30,30);
				cm.teachSkill(3211005,30,30);
				cm.teachSkill(3211006,40,40);
				cm.teachSkill(4111005,30,30);
				cm.teachSkill(4111006,20,20);
				cm.teachSkill(4111004,30,30);
				cm.teachSkill(4111002,40,40);
				cm.teachSkill(4211002,30,30);
				cm.teachSkill(4211004,30,30);
				cm.teachSkill(4211001,30,30);
				cm.teachSkill(4211006,30,30);
				cm.teachSkill(1120004,30,30);
				cm.teachSkill(1120003,30,30);
				cm.teachSkill(1120005,30,30);
				cm.teachSkill(1121000,30,30);
				cm.teachSkill(1121008,30,30);
				cm.teachSkill(1121010,30,30);
                                                        cm.teachSkill(1121011,5,5);
				cm.teachSkill(1121006,30,30);
				cm.teachSkill(1121002,30,30);
				cm.teachSkill(1220005,30,30);
				cm.teachSkill(1221009,30,30);
				cm.teachSkill(1220006,30,30);
				cm.teachSkill(1221007,30,30);
				cm.teachSkill(1221011,30,30);
                                                        cm.teachSkill(1221012,5,5);
				cm.teachSkill(1221002,30,30);
				cm.teachSkill(1221000,30,30);
				cm.teachSkill(1320005,30,30);
				cm.teachSkill(1320006,30,30);
				cm.teachSkill(1321003,30,30);
				cm.teachSkill(1321002,30,30);
				cm.teachSkill(1321000,30,30);
                                                        cm.teachSkill(1321010,5,5);
				cm.teachSkill(2121005,30,30);
				cm.teachSkill(2121003,30,30);
				cm.teachSkill(2121004,30,30);
				cm.teachSkill(2121002,30,30);
				cm.teachSkill(2121007,30,30);
				cm.teachSkill(2121006,30,30);
                                                        cm.teachSkill(2121008,5,5);
				cm.teachSkill(2121000,30,30);
				cm.teachSkill(2221007,30,30);
				cm.teachSkill(2221006,30,30);
				cm.teachSkill(2221003,30,30);
				cm.teachSkill(2221005,30,30);
				cm.teachSkill(2221004,30,30);
				cm.teachSkill(2221002,30,30);
                                                        cm.teachSkill(2221008,5,5);
				cm.teachSkill(2221000,30,30);
				cm.teachSkill(2321007,30,30);
				cm.teachSkill(2321003,30,30);
				cm.teachSkill(2321008,30,30);
                                                        cm.teachSkill(2321009,5,5);
				cm.teachSkill(2321005,30,30);
				cm.teachSkill(2321004,30,30);
				cm.teachSkill(2321000,30,30);
				cm.teachSkill(2321002,30,30);
				cm.teachSkill(3120005,30,30);
				cm.teachSkill(3121008,30,30);
				cm.teachSkill(3121000,30,30);
                                                        cm.teachSkill(3121009,5,5);
				cm.teachSkill(3121003,30,30);
				cm.teachSkill(3121007,30,30);
				cm.teachSkill(3121006,30,30);
                                                        cm.teachSkill(3121000,30,30);
				cm.teachSkill(3121002,30,30);
				cm.teachSkill(3121004,30,30);
				cm.teachSkill(3221006,30,30);
				cm.teachSkill(3221000,30,30);
				cm.teachSkill(3220004,30,30);
                                                        cm.teachSkill(3221000,30,30);
				cm.teachSkill(3221003,30,30);
				cm.teachSkill(3221005,30,30);
				cm.teachSkill(3221001,30,30);
				cm.teachSkill(3221002,30,30);
				cm.teachSkill(3221007,30,30);
                                                        cm.teachSkill(3221008,5,5);
				cm.teachSkill(4121004,30,30);
				cm.teachSkill(4121008,30,30);
				cm.teachSkill(4121000,30,30);
				cm.teachSkill(4121003,30,30);
				cm.teachSkill(4121006,30,30);
				cm.teachSkill(4121007,30,30);
                                                        cm.teachSkill(4121000,30,30);
                                                        cm.teachSkill(4121009,5,5);
				cm.teachSkill(4120005,30,30);
				cm.teachSkill(4221001,30,30);
				cm.teachSkill(4221007,30,30);
				cm.teachSkill(4221004,30,30);
                                                        cm.teachSkill(4221000,30,30);  
				cm.teachSkill(4221000,30,30);
				cm.teachSkill(4221003,30,30);
				cm.teachSkill(4221006,30,30);
                                                        cm.teachSkill(4221008,5,5);
				cm.teachSkill(4220005,30,30);
				cm.teachSkill(1321001,30,30);
				cm.teachSkill(4120002,30,30);
				cm.teachSkill(2221001,30,30);
				cm.teachSkill(3100001,30,30);
				cm.teachSkill(1121001,30,30);
				cm.teachSkill(1221001,30,30);
				cm.teachSkill(2121001,30,30);
				cm.teachSkill(2221001,30,30);
				cm.teachSkill(2321001,30,30);
				cm.teachSkill(4220002,30,30);
				cm.teachSkill(8,1,1);
				//Start of Pirate Job Skills
				cm.teachSkill(5000000,20,20); //Bullet Time
				cm.teachSkill(5001001,20,20); //Flash Fist
				cm.teachSkill(5001002,20,20); //Sommersault Kick
				cm.teachSkill(5001003,20,20); //Double Shot
				cm.teachSkill(5001005,10,10); //Dash
				cm.teachSkill(5100000,10,10); //Improve MaxHP
				cm.teachSkill(5100001,20,20); //Knuckler Mastery
				cm.teachSkill(5101002,20,20); //Backspin Blow
				cm.teachSkill(5101003,20,20); //Double Uppercut
				cm.teachSkill(5101004,20,20); //Corkscrew Blow
				cm.teachSkill(5101005,10,10); //MP Recovery
				cm.teachSkill(5101006,20,20); //Knuckler Booster
				cm.teachSkill(5101007,10,10); //Oak Barrel
				cm.teachSkill(5200000,20,20); //Gun Mastery
				cm.teachSkill(5201001,20,20); //Invisible Shot
				cm.teachSkill(5201002,20,20); //Grenade
				cm.teachSkill(5201003,20,20); //Gun Booster
				cm.teachSkill(5201004,20,20); //Blank Shot
				cm.teachSkill(5201005,10,10); //Wings
				cm.teachSkill(5201006,20,20); //Recoil Shot
				cm.teachSkill(5110000,20,20); //Stun Mastery
				cm.teachSkill(5110001,40,40); //Energy Charge
				cm.teachSkill(5111002,30,30); //Energy Blast
				cm.teachSkill(5111004,20,20);  //Energy Drain
				cm.teachSkill(5111005,20,20); //Transformation
				cm.teachSkill(5210000,20,20); //Burst Fire
				cm.teachSkill(5211001,30,30); //Octopus
				cm.teachSkill(5211002,30,30); //Gaviota
				cm.teachSkill(5211004,30,30); //FlameThrower
				cm.teachSkill(5211005,30,30); //Ice Splitter
				cm.teachSkill(5211006,30,30); //Homing Beacon
				cm.teachSkill(5121000,30,30); //Maple Warrior
				cm.teachSkill(5121001,30,30); //Dragon Strike
				cm.teachSkill(5121002,30,30); //Energy Orb
				cm.teachSkill(5121003,20,20); //Super Transformation
				cm.teachSkill(5121004,30,30); //Demolition
				cm.teachSkill(5121005,30,30); //Snatch
                                                        cm.teachSkill(5111006,30,30); //Caonima
				cm.teachSkill(5121007,30,30); //Barrage
				cm.teachSkill(5121008,30,30);   //Pirate's Rage
				cm.teachSkill(5121009,20,20); //Speed Infusion
				cm.teachSkill(5121010,30,30); //Time Leap
				cm.teachSkill(5221000,30,30); //Maple Warrior
				cm.teachSkill(5220001,30,30); //Elemental Boost
				cm.teachSkill(5220002,20,20); //Wrath of the Octopi
				cm.teachSkill(5221003,30,30); //Aerial Strike
				cm.teachSkill(5221004,30,30); //Rapid Fire
				cm.teachSkill(5221006,10,10); //BattleShip
				cm.teachSkill(5221007,30,30); //BattleShip Cannon
				cm.teachSkill(5221008,30,30); //BattleShop Torpedo
				cm.teachSkill(5221009,20,20); //Hypnotize
				cm.teachSkill(5221010,25,25); //Speed Infusion
				cm.teachSkill(5220011,20,20); //BullsEye
				//战童
				//cm.teachSkill(21000000,10,10); //矛连击强化
				//cm.teachSkill(21001001,15,15); //战斗步伐
				//cm.teachSkill(21000002,20,20); //双重重击
				//cm.teachSkill(21001003,20,20); //快速矛
				//cm.teachSkill(21100000,20,20); //精准矛
				//cm.teachSkill(21100001,20,20); //三重重击
				//cm.teachSkill(21100002,30,30); //战神突进
				//cm.teachSkill(21101003,20,20); //抗压
				//cm.teachSkill(21100004,20,20); //斗气爆裂
				//cm.teachSkill(21100005,20,20); //连环吸血
				//cm.teachSkill(21110000,20,20); //爆击强化
				//cm.teachSkill(21111001,20,20); //灵巧击退
				//cm.teachSkill(21110002,20,20); //全力挥击
				//cm.teachSkill(21110003,30,30); //终极投掷
				//cm.teachSkill(21110004,30,30); //幻影狼牙
				//cm.teachSkill(21111005,20,20); //冰雪矛
				//cm.teachSkill(21110006,20,20); //旋风
				//cm.teachSkill(21110007,20,20); //全力挥击
				//cm.teachSkill(21110008,20,20); //全力挥击
				//cm.teachSkill(21121000,30,30); //冒险岛勇士
				//cm.teachSkill(21120001,30,30); //攻击策略
				//cm.teachSkill(21120002,30,30); //战神之舞
				//cm.teachSkill(21121003,30,30); //战神的意志
				//cm.teachSkill(21120004,30,30); //防守策略
				//cm.teachSkill(21120005,30,30); //巨熊咆哮
				//cm.teachSkill(21120006,30,30); //钻石星辰
				//cm.teachSkill(21120007,30,30); //战神之盾
				//cm.teachSkill(21121008,5,5); //勇士的意志
 //魂骑士
				cm.teachSkill(11000000,10,10); //生命加强
				cm.teachSkill(11001001,10,10); //圣甲术
				cm.teachSkill(11001002,20,20); //强力攻击
				cm.teachSkill(11001003,20,20); //群体攻击
				cm.teachSkill(11001004,20,20); //魂精灵
				cm.teachSkill(11100000,20,20); //精准剑
				cm.teachSkill(11101001,20,20); //快速剑
				cm.teachSkill(11101002,30,30); //终极剑
				cm.teachSkill(11101003,20,20); //愤怒之火
				cm.teachSkill(11101004,30,30); //灵魂之刃
				cm.teachSkill(11101005,10,10); //灵魂迅移
				cm.teachSkill(11110000,20,20); //魔力恢复
				cm.teachSkill(11111001,20,20); //斗气集中
				cm.teachSkill(11111002,20,20); //恐慌
				cm.teachSkill(11111003,20,20); //昏迷
				cm.teachSkill(11111004,30,30); //轻舞飞扬
				cm.teachSkill(11110005,20,20); //进阶斗气
				cm.teachSkill(11111006,30,30); //灵魂突刺
				cm.teachSkill(11111007,20,20); //灵魂属性
 //炎术士
				cm.teachSkill(12000000,10,10); //魔力强化
				cm.teachSkill(12001001,10,10); //魔法盾
				cm.teachSkill(12001002,10,10); //魔法铠甲
				cm.teachSkill(12001003,20,20); //魔法双击
				cm.teachSkill(12001004,20,20); //炎精灵
				cm.teachSkill(12101000,20,20); //精神力
				cm.teachSkill(12101001,20,20); //缓速术
				cm.teachSkill(12101002,20,20); //火焰箭
				cm.teachSkill(12101003,20,20); //快速移动
				cm.teachSkill(12101004,20,20); //魔法狂暴
				cm.teachSkill(12101005,20,20); //自然力重置
				cm.teachSkill(12101006,20,20); //火柱
				cm.teachSkill(12110000,20,20); //魔法抗性
				cm.teachSkill(12110001,20,20); //魔力激化
				cm.teachSkill(12111002,20,20); //封印术
				cm.teachSkill(12111003,20,20); //天降落星
				cm.teachSkill(12111004,20,20); //火魔兽
				cm.teachSkill(12111005,30,30); //火牢术屏障
				cm.teachSkill(12111006,30,30); //火风暴
				cm.teachSkill(13000000,20,20); //强力箭
				cm.teachSkill(13000001,8,8); //远程箭
				cm.teachSkill(13001002,10,10); //集中术
				cm.teachSkill(13001003,20,20); //二连射
				cm.teachSkill(13001004,20,20); //风精灵
				cm.teachSkill(13100000,20,20); //精准弓
				cm.teachSkill(13101001,20,20); //快速箭
				cm.teachSkill(13101002,30,30); //终极弓
				cm.teachSkill(13101003,20,20); //无形箭
				cm.teachSkill(13100004,20,20); //疾风步
				cm.teachSkill(13101005,20,20); //暴风射击
				cm.teachSkill(13101006,10,10); //风影漫步
				cm.teachSkill(13111000,20,20); //箭雨
				cm.teachSkill(13111001,30,30); //箭扫射
				cm.teachSkill(13111002,20,20); //暴风箭雨
				cm.teachSkill(13110003,20,20); //神箭手
				cm.teachSkill(13111004,20,20); //替身术
				cm.teachSkill(13111005,10,10); //信天翁
				cm.teachSkill(13111006,20,20); //风灵穿越
				cm.teachSkill(13111007,20,20); //疾风扫射
				cm.teachSkill(14000000,10,10); //集中术
				cm.teachSkill(14000001,8,8); //远程暗器
				cm.teachSkill(14001002,10,10); //诅咒术
				cm.teachSkill(14001003,10,10); //隐身术
				cm.teachSkill(14001004,20,20); //双飞斩
				cm.teachSkill(14001005,20,20); //夜精灵
				cm.teachSkill(14100000,20,20); //精准暗器
				cm.teachSkill(14100001,30,30); //强力投掷
				cm.teachSkill(14101002,20,20); //快速暗器
				cm.teachSkill(14101003,20,20); //轻功
				cm.teachSkill(14101004,20,20); //二段跳
				cm.teachSkill(14100005,10,10); //驱逐
				cm.teachSkill(14101006,20,20); //吸血
				cm.teachSkill(14111000,30,30); //影分身
				cm.teachSkill(14111001,20,20); //影网术
				cm.teachSkill(14111002,30,30); //多重飞镖
				cm.teachSkill(14110003,20,20); //药剂精通
				cm.teachSkill(14110004,20,20); //武器用毒液
				cm.teachSkill(14111005,20,20); //三连环光击破
				cm.teachSkill(14111006,30,30); //毒炸弹
				cm.teachSkill(15000000,10,10); //快动作
				cm.teachSkill(15001001,20,20); //百裂拳
				cm.teachSkill(15001002,20,20); //半月踢
				cm.teachSkill(15001003,10,10); //疾驰
				cm.teachSkill(15001004,20,20); //雷精灵
				cm.teachSkill(15100000,10,10); //强体术
				cm.teachSkill(15100001,20,20); //精准拳
				cm.teachSkill(15101002,20,20); //急速拳
				cm.teachSkill(15101003,20,20); //贯骨击
				cm.teachSkill(15100004,20,20); //能量获得
				cm.teachSkill(15101005,20,20); //能量爆破
				cm.teachSkill(15101006,20,20); //雷鸣
				cm.teachSkill(15110000,20,20); //必杀拳
				cm.teachSkill(15111001,20,20); //能量耗转
				cm.teachSkill(15111002,10,10); //超人变形
				cm.teachSkill(15111003,20,20); //碎石乱击
				cm.teachSkill(15111004,20,20); //光速拳
				cm.teachSkill(15111005,20,20); //极速领域
				cm.teachSkill(15111006,20,20); //闪光击
				cm.teachSkill(15111007,30,30); //鲨鱼波
			
			    cm.teachSkill(8,1,1);
                        cm.gainMeso(-需要金币);
                        //cm.喇叭(1, "[" + cm.getPlayer().getName() + "]使用了一键满技恭喜这位豪~");
			cm.dispose();
                        }else{ 
                cm.sendOk("#b金币不足，下次收集完再来吧.");
                cm.dispose();
                                 }
			}
		}
	}
