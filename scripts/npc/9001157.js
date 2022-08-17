//var status = 0;

//function start() {
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
			cm.sendYesNo("#r你是不是想激活所有技能?   \r\n\r\n   #k被禁止使用的技能为:\r\n 英雄    :#b船长上船技能、个别掉线技能");
		} else if (status == 1) {
            if (cm.getLevel() >= 10) {
			cm.teachSkill(1003,1,1);
				cm.teachSkill(1004,1,1);
				cm.teachSkill(1005,1,1);
				cm.teachSkill(1121011,1,1);

				cm.teachSkill(9001002,1,1);
				cm.teachSkill(2320013,1,1);
				cm.teachSkill(2320046,1,1);
				cm.teachSkill(2320047,1,1);
				cm.teachSkill(2320048,1,1);

				cm.teachSkill(9001003,1,1);
				cm.teachSkill(4201011,10,10);
				cm.teachSkill(9001001,1,1);
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
				cm.teachSkill(400041006,25,25);
				cm.teachSkill(400041021,25,25);
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
				cm.teachSkill(1121000,0,10);
				cm.teachSkill(1221000,0,10);
				cm.teachSkill(1321000,0,10);
				cm.teachSkill(2121000,20,20);
				cm.teachSkill(2221000,20,20);
				cm.teachSkill(2321000,0,10);
				cm.teachSkill(3121000,0,10);
				cm.teachSkill(3221000,20,20);
				cm.teachSkill(4121000,0,10);
				cm.teachSkill(4221000,0,10); //End of Maple Warrior // Also end of max-level "20" skills
				cm.teachSkill(1321007,0,0);//
				cm.teachSkill(1320009,0,10);
				cm.teachSkill(1320008,0,10);
				cm.teachSkill(2321006,0,10);
				cm.teachSkill(1220010,0,10);
				cm.teachSkill(1221004,25,25);
				cm.teachSkill(1221003,25,25);

				cm.teachSkill(400031007,25,25);
				cm.teachSkill(400031020,25,25);
				cm.teachSkill(400041000,25,25);
				cm.teachSkill(400041001,25,25);
				cm.teachSkill(400041002,25,25);
				cm.teachSkill(400041008,25,25);
				cm.teachSkill(400041009,25,25);
				cm.teachSkill(400041020,25,25);
				cm.teachSkill(400041022,25,25);
				cm.teachSkill(400041025,25,25);
				cm.teachSkill(400041028,25,25);
				cm.teachSkill(400031017,25,25);
				cm.teachSkill(400031012,25,25);




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
				cm.teachSkill(1311004,30,30);
				cm.teachSkill(1311003,30,30);
				cm.teachSkill(1311006,30,30);
				cm.teachSkill(1311002,30,30);
				cm.teachSkill(1311005,30,30);
				cm.teachSkill(1311001,30,30);
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
				cm.teachSkill(3211006,30,30);
				cm.teachSkill(4111005,30,30);
				cm.teachSkill(4111006,20,20);
				cm.teachSkill(4111004,30,30);
				cm.teachSkill(4111002,30,30);
				cm.teachSkill(4211002,30,30);
				cm.teachSkill(4211004,30,30);
				cm.teachSkill(4211001,30,30);
				cm.teachSkill(4211006,30,30);
				cm.teachSkill(1120004,0,10);
				//cm.teachSkill(1120003,10,0);//禁止
				cm.teachSkill(1120005,0,10);
				//cm.teachSkill(1121008,0,10);
				//cm.teachSkill(1121010,10,0);//禁止
				cm.teachSkill(1121006,0,10);
				cm.teachSkill(1121002,0,10);
				cm.teachSkill(1220005,0,10);
				cm.teachSkill(1221009,0,10);
				cm.teachSkill(1220006,0,10);
				cm.teachSkill(1221007,0,10);
				cm.teachSkill(1221011,0,10);
				cm.teachSkill(1221002,0,10);
				cm.teachSkill(1320005,0,10);
				cm.teachSkill(1320006,0,10);
				cm.teachSkill(1321003,30,30);
				cm.teachSkill(1321002,0,10);
				cm.teachSkill(2121005,30,30);
				cm.teachSkill(2121003,30,30);
				cm.teachSkill(2121004,30,30);
				cm.teachSkill(2121002,30,30);
				cm.teachSkill(2121007,30,30);
				cm.teachSkill(2121006,30,30);
				cm.teachSkill(2221007,30,30);
				cm.teachSkill(2221006,30,30);
				cm.teachSkill(2221003,30,30);
				cm.teachSkill(2221005,30,30);
				cm.teachSkill(2221004,30,30);
				cm.teachSkill(2221002,30,30);
				cm.teachSkill(2321007,0,10);
				cm.teachSkill(2321003,0,10);
				cm.teachSkill(2321008,0,10);
				cm.teachSkill(2321005,0,10);
				cm.teachSkill(2321004,0,10);
				cm.teachSkill(2321002,0,10);
				cm.teachSkill(3120005,0,10);
				cm.teachSkill(3121008,0,10);
				cm.teachSkill(3121003,0,10);
				cm.teachSkill(3121007,0,10);
				cm.teachSkill(3121006,0,10);
				cm.teachSkill(3121002,0,10);
				cm.teachSkill(3121004,0,10);
				cm.teachSkill(3221006,0,10);
				cm.teachSkill(3220004,0,10);
				cm.teachSkill(3221003,0,10);
				cm.teachSkill(3221005,0,10);
				cm.teachSkill(3221001,0,10);
				cm.teachSkill(3221002,0,10);
				cm.teachSkill(3221007,0,10);
				cm.teachSkill(4121004,0,10);
				cm.teachSkill(4121008,0,10);
				cm.teachSkill(4121003,0,10);
				cm.teachSkill(4200013,1,1);
				cm.teachSkill(51110001,20,20);
				cm.teachSkill(4220015,10,10);
				cm.teachSkill(4221001,0,10);



				cm.teachSkill(3120018,20,20);
				cm.teachSkill(1110009,10,10);
				cm.teachSkill(2320013,1,1);
				cm.teachSkill(40010067,1,1);
				cm.teachSkill(1320016,30,30);
				cm.teachSkill(15000006,10,10);
				cm.teachSkill(80000414,10,10);
				cm.teachSkill(80000413,10,10);
				cm.teachSkill(80000410,10,10);
				cm.teachSkill(61100008,1,1);
				cm.teachSkill(91001022,10,10);
				cm.teachSkill(25120147,1,1);









				cm.teachSkill(4221007,0,10);
				cm.teachSkill(4221004,0,10);
				cm.teachSkill(4221003,0,10);
				cm.teachSkill(4221006,0,10);
				cm.teachSkill(4220005,0,10);
				cm.teachSkill(1321001,0,10);
				cm.teachSkill(4120002,0,10);
				cm.teachSkill(2221001,30,30);
				cm.teachSkill(3100001,30,30);
				cm.teachSkill(1121001,0,10);
				cm.teachSkill(1221001,0,10);
				cm.teachSkill(2121001,30,30);
				cm.teachSkill(2221001,30,30);
				cm.teachSkill(2321001,0,10);
				cm.teachSkill(4220002,0,10);
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
				cm.teachSkill(5111004,20,0);  //Energy Drain
				cm.teachSkill(5111005,20,20); //Transformation
				cm.teachSkill(5210000,20,20); //Burst Fire
				cm.teachSkill(5211001,30,30); //Octopus
				cm.teachSkill(5211002,30,30); //Gaviota
				cm.teachSkill(5211004,30,30); //FlameThrower
				cm.teachSkill(5211005,30,30); //Ice Splitter
				cm.teachSkill(5211006,20,20); //Homing Beacon
				cm.teachSkill(5121000,0,10); //Maple Warrior
				cm.teachSkill(5121001,0,10); //Dragon Strike
				cm.teachSkill(5121002,0,10); //Energy Orb
				//cm.teachSkill(5121003,0,0); //禁止//Super Transformation
				cm.teachSkill(5121004,0,10); //Demolition
				cm.teachSkill(5121005,0,10); //Snatch
				cm.teachSkill(5121007,0,10); //Barrage
				cm.teachSkill(5121008,1,1);   //Pirate's Rage
				cm.teachSkill(5121009,0,10); //Speed Infusion
				cm.teachSkill(5121010,0,10); //Time Leap
				cm.teachSkill(5221000,0,10); //Maple Warrior
				cm.teachSkill(5220001,0,10); //Elemental Boost
				cm.teachSkill(5220002,0,10); //Wrath of the Octopi
				cm.teachSkill(5221003,0,10); //Aerial Strike
				cm.teachSkill(5221004,0,10); //Rapid Fire
				cm.teachSkill(5221006,0,0); //BattleShip
				cm.teachSkill(5221007,0,10); //BattleShip Cannon
				cm.teachSkill(5221008,0,10); //BattleShop Torpedo
				cm.teachSkill(5221009,0,10); //Hypnotize
				cm.teachSkill(5221010,0,1); //Speed Infusion
				//cm.teachSkill(5220011,20,20); //BullsEye
                                			cm.teachSkill(1004,1,0);
			cm.teachSkill(1003,1,0);
			cm.teachSkill(1009,1,0);
			cm.teachSkill(1005,1,0);
			cm.teachSkill(1006,1,0);
			cm.teachSkill(1007,3,0);
			cm.teachSkill(1010,1,0);
			cm.teachSkill(1011,1,0);
			cm.teachSkill(1013,1,0);
			cm.teachSkill(1015,1,0);
			cm.teachSkill(1016,1,0);
			cm.teachSkill(1017,1,0);
			//cm.teachSkill(1020,1,0);
			cm.teachSkill(10000018,1,0);
			cm.teachSkill(10001003,1,0);
			cm.teachSkill(10001004,1,0);
			cm.teachSkill(10001005,1,0);
			cm.teachSkill(10001006,1,0);
			cm.teachSkill(10001007,3,0);
			cm.teachSkill(10001017,1,0);
			cm.teachSkill(20000014,1,0);
			cm.teachSkill(20000015,1,0);
			cm.teachSkill(20000016,1,0);
			cm.teachSkill(20000017,1,0);
			cm.teachSkill(20000018,1,0);
			cm.teachSkill(20000024,1,0);
			cm.teachSkill(20001003,1,0);
			cm.teachSkill(20001004,1,0);
			cm.teachSkill(20001005,1,0);
			cm.teachSkill(20001006,1,0);
			cm.teachSkill(20001007,3,0);
			cm.maxSkillsByJob();
			cm.sendOk("激活成功");
			cm.dispose();
} else {
  cm.sendOk("不可以满技能哦");
cm.dispose();
			}cm.dispose();
	    }	
}}
