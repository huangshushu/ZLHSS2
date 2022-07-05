package constants;

import client.MapleCharacter;
import client.inventory.IItem;
import client.inventory.MapleInventoryType;
import client.inventory.MapleWeaponType;
import client.status.MonsterStatus;
import handling.channel.handler.AttackInfo;
import handling.login.LoginServer;
import java.util.List;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;
import java.util.Random;
import server.MapleStatEffect;
import server.Randomizer;
import server.maps.MapleMapObjectType;

public class GameConstants {
    public static boolean GMS = true; //true = GMS
    public static boolean isLinkedAttackSkill(final int id) {
        return getLinkedAttackSkill(id) != id;
    }

    public static int getLinkedAttackSkill(final int id) {
        switch (id) {
            case 11101220: // 皇家冲击
                return 11101120; // 潜行突袭
            case 11101221: // 焚影
                return 11101121; // 残像追击
            case 11111120: // 月影
                return 11111220; // 光芒四射
            case 11111121: // 月光十字架
                return 11111221; // 日光十字架
            case 11121201: // 疾速黄昏
            case 11121102: // 月光之舞（空中）
            case 11121202: // 疾速黄昏（空中
                return 11121101; // 月光之舞
            case 11121103: // 新月分裂
                return 11121203; // 太阳穿刺
            case 21110007:
            case 21110008:
                return 21110002;
            case 21120009:
            case 21120010:
                return 21120002;
            case 4321001:
                return 4321000;
            case 5300007:
                return 5301001;
            case 5320011:
                return 5321004;
            case 5211015:
            case 5211016:
                return 5211011;
            case 5001008:
                return 5200010;
            case 5001009:
                return 5101004;
        }
        return id;
    }
    public static final List<MapleMapObjectType> rangedMapobjectTypes = Collections.unmodifiableList(Arrays.asList(
            MapleMapObjectType.ITEM,
            MapleMapObjectType.MONSTER,
            MapleMapObjectType.DOOR,
            MapleMapObjectType.REACTOR,
            MapleMapObjectType.SUMMON,
            MapleMapObjectType.NPC,
            MapleMapObjectType.MIST));
    private static final int[] ExpTable = {0, 15, 34, 57, 92, 135, 372, 560, 840, 1242, 1716,
        2360, 3216, 4200, 5460, 7050, 8840, 11040, 13716, 16680, 20216,
        24402, 28980, 34320, 40512, 47216, 54900, 63666, 73080, 83720, 95700,
        108480, 122760, 138666, 155540, 174216, 194832, 216600, 240500, 266682, 294216,
        324240, 356916, 391160, 428280, 468450, 510420, 555680, 604416, 655200, 709716, // 51等到这
        748608, 789631, 832902, 878545, 926689, 977471, 1031036, 1087536, 1147132, 1209994,
        1276301, 1346242, 1420016, 1497832, 1579913, 1666492, 1757815, 1854143, 1955750, 2062925, // 71等到这
        2175973, 2295216, 2410993, 2553663, 2693603, 2841212, 2996910, 3161140, 3334370, 3517093,
        3709829, 3913127, 4127566, 4353756, 4592341, 4844001, 5109452, 5389449, 5684790, 5996316,
        6324914, 6671519, 7037118, 7422752, 7829518, 8258575, 8711144, 9188514, 9692044, 10223168, // 101等到这
        10783397, 11374327, 11997640, 12655110, 13348610, 14080113, 14851703, 15665576, 16524049, 17429566,
        18384706, 19392187, 20454878, 21575805, 22758159, 24005306, 25320796, 26708375, 28171993, 29715818,//121等到这
        31344244, 33061908, 34873700, 36784778, 38800583, 40926854, 43169645, 45535341, 48030677, 50662758,//131等到这
        53439077, 56367538, 59456479, 62714694, 66151459, 69776558, 73600313, 77633610, 81887931, 86375389,//141等到这
        91108760, 96101520, 101367883, 106922842, 112782213, 118962678, 125481832, 132358236, 139611467, 147262175,//151等到这
        155332142, 163844343, 172823012, 182293713, 192283408, 202820538, 213935103, 225658746, 238024845, 251068606, //160
        264827165, 279339693, 294647508, 310794191, 327825712, 345790561, 364739883, 384727628, 405810702, 428049128, //170
        451506220, 476248760, 502347192, 529875818, 558913012, 589541445, 621848316, 655925603, 691870326, 729784819,
        769777027, 811960808, 856456260, 903390063, 952895838, 1005114529, 1060194805, 1118293480, 1179575962, 1244216724,
        1312399800, 1384319309, 1460180007, 1540197871, 1624600714, 1713628833, 1807535693, 1906588648, 2011069705, 2121276324};
    private static final int[] ClosenessTable = {0, 1, 3, 6, 14, 31, 60, 108, 181, 287, 434, 632, 891, 1224, 1642, 2161, 2793,
        3557, 4467, 5542, 6801, 8263, 9950, 11882, 14084, 16578, 19391, 22547, 26074,
        30000};
    private static final int[] MountExpTable = {0, 6, 25, 50, 105, 134, 196, 254, 263, 315, 367, 430, 543, 587, 679, 725, 897, 1146, 1394, 1701, 2247,
        2543, 2898, 3156, 3313, 3584, 3923, 4150, 4305, 4550};

    public static final int[] itemBlock = {2340000, 2049100, 4001129, 2040037, 2040006, 2040007, 2040303, 2040403, 2040506, 2040507, 2040603, 2040709, 2040710, 2040711, 2040806, 2040903, 2041024, 2041025, 2043003, 2043103, 2043203, 2043303, 2043703, 2043803, 2044003, 2044103, 2044203, 2044303, 2044403, 2044503, 2044603, 2044908, 2044815, 2044019, 2044703, 1004001, 4007008, 1004002, 5152053, 5150040};
    public static final int[] cashBlock = {5500001, 5500002, 5600001, 5350003, 5401000, 5500000, 5252001, 5252003, 5220001, 5220002, 5200000, 5200001, 5200002, 5320000, 5440000};

    public static final int OMOK_SCORE = 122200;
    public static final int MATCH_SCORE = 122210;
    public static final int HP_ITEM = 122221;
    public static final int MP_ITEM = 122223;
    public static final int[] blockedSkills = {4341003};
    public static int[] blockedMaps = {109050000, 200000112, 200090020, 240060200, 280030000, 280090000, 280030001, 240060201, 900090021, 950101100, 950101010};
    public static int[] Equipments_Bonus = {1122017, 1122086, 1122207, 1122215};
    public static final String[] RESERVED = {"Rental"};
    public static final String[] stats = {"tuc", "reqLevel", "reqJob", "reqSTR", "reqDEX", "reqINT", "reqLUK", "reqPOP", "cash", "cursed", "success", "setItemID", "equipTradeBlock", "durability", "randOption", "randStat", "masterLevel", "reqSkillLevel", "elemDefault", "incRMAS", "incRMAF", "incRMAI", "incRMAL", "canLevel", "skill", "charmEXP"};

    public static int getExpNeededForLevel(final int level) {
        if (level < 0 || level >= ExpTable.length) {
            return Integer.MAX_VALUE;
        }
        return ExpTable[level];
    }

    public static boolean isNoDelaySkill(int skillId) {
        return skillId == SkillType.格斗家.蓄能激发
                || skillId == SkillType.狂狼勇士2.强化连击
                || skillId == SkillType.闪雷悍将2.蓄能激发
                || skillId == 2111007 || skillId == 2211007 || skillId == 2311007 || skillId == 32121003 || skillId == 35121005 || skillId == 35111004 || skillId == 35121013 || skillId == 35121003 || skillId == 22150004 || skillId == 22181004 || skillId == 11101002 || skillId == 51100002 || skillId == 13101002 || skillId == 24121000 || skillId == 112001008 || skillId == 22161005 || skillId == 22161005;
    }

    public static boolean isMarrigeRing(int itemid) {
        switch (itemid) {
            case 1112300:
            case 1112301:
            case 1112302:
            case 1112303:
            case 1112304:
            case 1112305:
            case 1112306:
            case 1112307:
            case 1112308:
            case 1112309:
            case 1112310:
            case 1112311:
            case 1112315:
            case 1112316:
            case 1112317:
            case 1112318:
            case 1112319:
            case 1112320:
            case 1112803:
            case 1112806:
            case 1112807:
            case 1112808:
            case 1112809:
                return true;
        }
        return false;
    }

    public static int getClosenessNeededForLevel(final int level) {
        return ClosenessTable[level - 1];
    }

    public static int getMountExpNeededForLevel(final int level) {
        return MountExpTable[level - 1];
    }

    public static int getBookLevel(final int level) {
        return (int) (5 * (5 * level) * (level + 1));
    }

    public static int getTimelessRequiredEXP(final int level) {
        return 70 + (level * 10);
    }

    public static int getReverseRequiredEXP(final int level) {
        return 60 + (level * 5);
    }

    public static int maxViewRangeSq() {
        //return 800000; // 800 * 800
        return Integer.MAX_VALUE;
    }

    public static boolean isRecoveryIncSkill(final int id) {
        switch (id) {
            case SkillType.十字军.魔力恢复:
            case SkillType.法师.魔力净化:
            case SkillType.骑士.魔力恢复:
            case SkillType.圣魂剑士3.魔力恢复:
            case SkillType.刺客.恢复术:
            case SkillType.侠盗.恢复术:
                return true;
        }
        return false;
    }

    public static boolean isLinkedSkill(final int id) {
        return getLinkedSkill(id) != id;
    }

    public static int getLinkedSkill(final int id) {
        switch (id) {
            case 21110007:
            case 21110008:
                return 21110002;
            case 21120009:
            case 21120010:
                return 21120002;
            case 4321001:
                return 4321000;
        }
        return id;
    }

    public static boolean isElementAmpSkill(final int skill) {
        switch (skill) {
            case 2110001:
            case 2210001:
            case 12110001:
                return true;
        }
        return false;
    }

    public static int getMPEaterForJob(final int job) {
        switch (job) {
            case 210:
            case 211:
            case 212:
                return 2100000;
            case 220:
            case 221:
            case 222:
                return 2200000;
            case 230:
            case 231:
            case 232:
                return 2300000;
        }
        return 2100000; // Default, in case GM
    }

    public static int getJobShortValue(int job) {
        if (job >= 1000) {
            job -= (job / 1000) * 1000;
        }
        job /= 100;
        if (job == 4) { // For some reason dagger/ claw is 8.. IDK
            job *= 2;
        } else if (job == 3) {
            job += 1;
        } else if (job == 5) {
            job += 11; // 16
        }
        return job;
    }

    public static boolean isPyramidSkill(final int skill) {
        switch (skill) {
            case 1020:
            case 10001020:
            case 20001020:
            case 20011020:
                return true;
        }
        return false;
    }

    public static boolean isMulungSkill(final int skill) {
        switch (skill) {
            case 1009:
            case 1010:
            case 1011:
            case 10001009:
            case 10001010:
            case 10001011:
            case 20001009:
            case 20001010:
            case 20001011:
            case 20011009:
            case 20011010:
            case 20011011:
                return true;
        }
        return false;
    }

    public static boolean isThrowingStar(final int itemId) {
        return itemId / 10000 == 207;
    }

    public static boolean isBullet(final int itemId) {
        return itemId / 10000 == 233;
    }

    public static boolean isRechargable(final int itemId) {
        return isThrowingStar(itemId) || isBullet(itemId);
    }

    public static boolean isOverall(final int itemId) {
        return itemId / 10000 == 105;
    }

    public static boolean isPet(final int itemId) {
        return itemId / 10000 == 500;
    }

    public static boolean isArrowForCrossBow(final int itemId) {
        return itemId >= 2061000 && itemId < 2062000;
    }

    public static boolean isArrowForBow(final int itemId) {
        return itemId >= 2060000 && itemId < 2061000;
    }

    public static boolean isMagicWeapon(final int itemId) {
        final int s = itemId / 10000;
        return s == 137 || s == 138;
    }

    public static boolean isWeapon(final int itemId) {
        return itemId >= 1300000 && itemId < 1500000;
    }

    public static MapleInventoryType getInventoryType(final int itemId) {
        final byte type = (byte) (itemId / 1000000);
        if (type < 1 || type > 5) {
            return MapleInventoryType.UNDEFINED;
        }
        return MapleInventoryType.getByType(type);
    }

    public static MapleWeaponType getWeaponType(final int itemId) {
        int cat = itemId / 10000;
        cat = cat % 100;
        switch (cat) {
            case 30:
                return MapleWeaponType.单手剑;
            case 31:
                return MapleWeaponType.单手斧;
            case 32:
                return MapleWeaponType.单手棍;
            case 33:
                return MapleWeaponType.短剑;
            case 34:
                return MapleWeaponType.双刀;
            case 37:
                return MapleWeaponType.长杖;
            case 38:
                return MapleWeaponType.短杖;
            case 40:
                return MapleWeaponType.双手剑;
            case 41:
                return MapleWeaponType.双手斧;
            case 42:
                return MapleWeaponType.双手棍;
            case 43:
                return MapleWeaponType.矛;
            case 44:
                return MapleWeaponType.枪;
            case 45:
                return MapleWeaponType.弓;
            case 46:
                return MapleWeaponType.弩;
            case 47:
                return MapleWeaponType.拳套;
            case 48:
                return MapleWeaponType.指虎;
            case 49:
                return MapleWeaponType.火枪;
        }
        return MapleWeaponType.没有武器;
    }

    public static boolean isShield(final int itemId) {
        int cat = itemId / 10000;
        cat = cat % 100;
        return cat == 9;
    }

    public static boolean isEquip(final int itemId) {
        return itemId / 1000000 == 1;
    }

    public static boolean isCleanSlate(int itemId) {
        return itemId / 100 == 20490;
    }

    public static boolean isAccessoryScroll(int itemId) {
        return itemId / 100 == 20492;
    }

    public static boolean isChaosScroll(int itemId) {
        if (itemId >= 2049105 && itemId <= 2049110) {
            return false;
        }
        return itemId / 100 == 20491;
    }

    public static int getChaosNumber(int itemId) {
        return itemId == 2049116 ? 10 : 5;
    }

    public static boolean isEquipScroll(int scrollId) {
        return scrollId / 100 == 20493;
    }

    public static boolean isPotentialScroll(int scrollId) {
        return scrollId / 100 == 20494;
    }

    public static boolean isSpecialScroll(final int scrollId) {
        switch (scrollId) {
            case 2040727: // Spikes on show
            case 2041058: // Cape for Cold protection
                return true;
        }
        return false;
    }

    public static boolean isTwoHanded(final int itemId) {
        switch (getWeaponType(itemId)) {
            case 双手斧:
            case 火枪:
            case 指虎:
            case 双手棍:
            case 弓:
            case 拳套:
            case 弩:
            case 枪:
            case 矛:
            case 双手剑:
                return true;
            default:
                return false;
        }
    }

    public static boolean isTownScroll(final int id) {
        return id >= 2030000 && id < 2040000;
    }

    public static boolean isUpgradeScroll(final int id) {
        return id >= 2040000 && id < 2050000;
    }

    public static boolean isGun(final int id) {
        return id >= 1492000 && id < 1500000;
    }

    public static boolean isUse(final int id) {
        return id >= 2000000 && id <= 2490000;
    }

    public static boolean isSummonSack(final int id) {
        return id / 10000 == 210;
    }

    public static boolean isMonsterCard(final int id) {
        return id / 10000 == 238;
    }

    public static boolean isSpecialCard(final int id) {
        return id / 1000 >= 2388;
    }

    public static int getCardShortId(final int id) {
        return id % 10000;
    }

    public static boolean isGem(final int id) {
        return id >= 4250000 && id <= 4251402;
    }

    public static boolean isOtherGem(final int id) {
        switch (id) {
            case 4001174:
            case 4001175:
            case 4001176:
            case 4001177:
            case 4001178:
            case 4001179:
            case 4001180:
            case 4001181:
            case 4001182:
            case 4001183:
            case 4001184:
            case 4001185:
            case 4001186:
            case 4031980:
            case 2041058:
            case 2040727:
            case 1032062:
            case 4032334:
            case 4032312:
            case 1142156:
            case 1142157:
                return true; //mostly quest items
        }
        return false;
    }

    public static boolean isCustomQuest(final int id) {
        return id > 99999;
    }

    public static int getTaxAmount(final int meso) {
        if (meso >= 100000000) {
            return (int) Math.round(0.06 * meso);
        } else if (meso >= 25000000) {
            return (int) Math.round(0.05 * meso);
        } else if (meso >= 10000000) {
            return (int) Math.round(0.04 * meso);
        } else if (meso >= 5000000) {
            return (int) Math.round(0.03 * meso);
        } else if (meso >= 1000000) {
            return (int) Math.round(0.018 * meso);
        } else if (meso >= 100000) {
            return (int) Math.round(0.008 * meso);
        }
        return 0;
    }

    public static int EntrustedStoreTax(final int meso) {
        if (meso >= 100000000) {
            return (int) Math.round(0.03 * meso);
        } else if (meso >= 25000000) {
            return (int) Math.round(0.025 * meso);
        } else if (meso >= 10000000) {
            return (int) Math.round(0.02 * meso);
        } else if (meso >= 5000000) {
            return (int) Math.round(0.015 * meso);
        } else if (meso >= 1000000) {
            return (int) Math.round(0.009 * meso);
        } else if (meso >= 100000) {
            return (int) Math.round(0.004 * meso);
        }
        return 0;
    }

    public static short getSummonAttackDelay(final int id) {
        switch (id) {
            case 15001004: // Lightning
            case 14001005: // Darkness
            case 13001004: // Storm
            case 12001004: // Flame
            case 11001004: // Soul
            case 3221005: // Freezer
            case 3211005: // Golden Eagle
            case 3121006: // Phoenix
            case 3111005: // Silver Hawk
            case 2321003: // Bahamut
            case 2311006: // Summon Dragon
            case 2221005: // Infrit
            case 2121005: // Elquines
                return 3030;
            case 5211001: // Octopus
            case 5211002: // Gaviota
            case 5220002: // Support Octopus
                return 1230;
            case 3211002: // Puppet
            case 3111002: // Puppet
            case 1321007: // Beholder
            case 4341006:
            case 35121009:
            case 35121010:
            case 35111011:
            case 35111002:
                return 0;
        }
        return 0;
    }

    public static short getAttackDelay(final int id) {
        switch (id) { // Assume it's faster(2)
            case 5201001: // Invisible shot
                return 200;
            case 3110001:
                return 120;
            case 5001002:
                return 30;
            case 4321001: //tornado spin
                return 40; //reason being you can spam with final assaulter
            case 3121004: // Storm of Arrow
            case 33121009:
            case 13111002: // Storm of Arrow
            case 5221004: // Rapidfire
            case 4221001: //Assassinate?
            case 5201006: // Recoil shot/ Back stab shot
                return 120;
            case 13101005: // Storm Break
                return 360;
            case 5001003: // Double Fire
                return 390;
            case 5001001: // Straight/ Flash Fist
            case 15001001: // Straight/ Flash Fist
            case 1321003: // Rush
            case 1221007: // Rush
            case 1121006: // Rush
                return 450;
            case 5211004: // Flamethrower
            case 5211005: // Ice Splitter
            case 4201005: // Savage blow
                return 480;
            case 0: // Normal Attack, TODO delay for each weapon type
            case 5111002: // Energy Blast
            case 15101005: // Energy Blast
            case 1001004: // Power Strike
            case 11001002: // Power Strike
            case 1001005: // Slash Blast
            case 11001003: // Slash Blast
            case 1311005: // Sacrifice
                return 570;
            //case 2101004: // Fire Arrow
            case 12101002: // Fire Arrow
            case 2101005: // Poison Breath
            case 2121003: // Fire Demon
            case 2221003: // Ice Demon
            case 2121006: // Paralyze
            case 3111006: // Strafe
            case 311004: // Arrow Rain
            case 13111000: // Arrow Rain
            case 3111003: // Inferno
            case 3101005: // Arrow Bomb
            case 4001344: // Lucky Seven
            case 14001004: // Lucky seven
            case 4121007: // Triple Throw
            case 14111005: // Triple Throw
            case 4111004: // Shadow Meso
            case 4101005: // Drain
            case 4211004: // Band of Thieves
            case 4201004: // Steal
            case 4001334: // Double Stab
            case 5221007: // Battleship Cannon
            case 1211002: // Charged blow
            case 1311003: // Dragon Fury : Spear
            case 1311004: // Dragon Fury : Pole Arm
            case 3211006: // Strafe
            case 3211004: // Arrow Eruption
            case 3211003: // Blizzard Arrow
            case 3201005: // Iron Arrow
            case 3221001: // Piercing
            case 4111005: // Avenger
            case 14111002: // Avenger
            case 5101004: // Corkscrew Blow
            case 15101003: // Corkscrew Blow
            case 1121008: // Brandish
            case 11111004: // Brandish
            case 1221009: // Blast
            case 2001005: // Magic Claw
            case 2301002:
                return 600;
            case 5201004: // Blank Shot/ Fake shot
            case 5211000: // Burst Fire/ Triple Fire
            case 15001002: // Sommersault Kick
            case 4221007: // Boomerang Stab
            case 1311001: // Spear Crusher, 16~30 pts = 810
            case 1311002: // PA Crusher, 16~30 pts = 810
            case 2221006: // Chain Lightning
                return 660;

            case 4121008: // Ninja Storm
            case 5211006: // Homing Beacon
            case 5221008: // Battleship Torpedo
            case 5101002: // Backspin Blow

            case 12001003: // Magic Claw
            case 2001004: // Energy Bolt
            case 2301005: // Holy Arrow
            case 2121001: // Big Bang
            case 2221001: // Big Bang
            case 2321001: // Big Bang
            case 2321007: // Angel's Ray
            case 2201005: // Thunderbolt
            case 2201004: // Cold Beam
            case 2211002: // Ice Strike
            case 4211006: // Meso Explosion
            case 5121005: // Snatch
            case 12111006: // Fire Strike
            case 11101004: // Soul Blade
                return 750;
            case 15111007: // Shark Wave
            case 2111006: // Elemental Composition
            case 2211006: // Elemental Composition
                return 810;
            case 13111006: // Wind Piercing
            case 4211002: // Assaulter
            case 5101003: // Double Uppercut
            case 2111002: // Explosion
                return 900;
            case 2311004: // Shining Ray
                return 500;
            case 5121003: // Energy Orb
                return 930;
            case 13111007: // Wind Shot
                return 960;
            case 14101006: // Vampire
            case 4121003: // Showdown
            case 4221003: // Showdown
                return 1020;
            case 12101006: // Fire Pillar
                return 1050;
            case 5121001: // Dragon Strike
                return 1060;
            case 2211003: // Thunder Spear
            case 1311006: // Dragon Roar
                return 1140;
            case 11111006: // Soul Driver
                return 1230;
            case 12111005: // Flame Gear
                return 1260;
            case 2111003: // Poison Mist
                return 800;
            case 5111006: // Shockwave
            case 15111003: // Shockwave
                return 1500;
            case 5121007: // Barrage
            case 15111004: // Barrage
                return 1830;
            case 5221003: // Ariel Strike
            case 5121004: // Demolition
                return 2160;
            case 2121007: // 火流星
            case 2221007: // 暴风雪
            case 2321008: // 天怒
                return 700;
            case 10001011: // Meteo Shower
                return 3060;
        }
        // TODO delay for final attack, weapon type, swing,stab etc
        return 330; // Default usually
    }

    public static boolean getWuYanChi(final int id) {
        switch (id) {
            case 15111006:
            case 15001002:
                return false;
        }
        return true;
    }

    public static byte gachaponRareItem(final int id) {
        switch (id) {
            case 1322001: //槌子
            case 1322006: //钢管
            case 1142374: //圣诞奇蹟
            case 1032128: //许愿树金耳环
            case 1132103: //黄金腰带
            case 1022162: //旅行者的翅膀造型眼镜
            case 1112596: //拉尔孙的挑战型戒指
            case 1004579: //乖巧羊帽子
            case 1012310: //情人甜美巧克力
            case 1082514: //情人节手环<下级>
            case 1142681: //守护情侣的单身
            case 1142713: //非自发性的单身主义者
            case 1012164: //鬼娃恰吉的伤口
            case 1012167: //鬼娃恰吉的伤口
            case 1012168: //鬼娃恰吉的伤口
            case 1012169: //鬼娃恰吉的伤口
            case 1402044: //南瓜灯笼
            case 1003439: //情人节氢气球
            case 1002596: //小狗帽子
            case 1002723: //年糕帽
            case 1032028: //红祖母绿耳环
            case 1032194: //里贝卡的葡萄耳环
            case 1122109: //葡萄项坠
            case 1052350: //小丘运动服
            case 1082533: //爱里涅的手镯
            case 1102590: //爱里捏的翅膀
            case 1092035: //可乐战盾
            case 1102370: //西格诺斯粉丝俱乐部气球
            case 1102371: //巴雷利粉丝俱乐部气球
            case 1102372: //莉琳粉丝俱乐部气球
            case 1302145: //3rd 不速之客 单手剑
            case 1332123: //3rd 不速之客 短剑
            case 1372076: //3rd 不速之客 杖
            case 1382097: //3rd 不速之客 长杖
            case 1402088: //3rd 不速之客 双手剑
            case 1432079: //3rd 不速之客枪
            case 1442109: //3rd 不速之客 矛
            case 1452104: //3rd 不速之客 弓
            case 1462089: //3rd 不速之客 弩
            case 1472115: //3rd 不速之客 拳套
            case 1482077: //3rd 不速之客 指虎
            case 1492077: //3rd 不速之客 火枪
            case 1382045: //火云长杖
            case 1382046: //毒龙长杖
            case 1382047: //冰魄长杖
            case 1382048: //朱雀长杖
            case 1132049: //力气褐色锁扣腰带
            case 1132059: //智慧褐色锁扣腰带
            case 1132069: //锋利褐色锁扣腰带
            case 1132079: //幸运褐色锁扣腰带
            case 1122297: //橘子项炼
            case 1142260: //新手枫叶转蛋券勋章
            case 1002931: //蕃茄帽子(力量)
            case 1002932: //蕃茄帽子(敏捷)
            case 1002933: //蕃茄帽子(智力)
            case 1002934: //蕃茄帽子(幸运)
            case 1052191: //蕃茄服装
            case 1142073: //和我做朋友勋章
            case 1142376: //神出鬼没
            case 1012056: //狗鼻
            case 1102234: //奇多豹掌气球
            case 1002799: //桂冠
            case 1302087: //奖杯武器
            case 1032127: //许愿树银耳环
            case 1112915: //欢乐指环
            case 1022047: //猫头鹰
            case 1102042: //紫色冒险家披风
            case 1142207: //春花胸针
            case 1092022: //调色盘
            case 1302061: //树藤鞭子
            case 1332101: //奇多豹掌武器
            case 1422068: //奇多豹掌棍
            case 2043305: //短剑攻击诅咒卷轴30%
            case 2044804: //指虎攻击诅咒卷轴30%
            case 1112922: //奇多豹掌戒指
            case 1082149: //褐色工作手套
            case 1072798: //妖精的红色帆布鞋
            case 1082179: //黄击中手套
            case 1004379: //橘子帽子
            case 1004380: //橘子帽子
            case 1004381: //橘子帽子
            case 1004382: //橘子帽子
            case 1102041: //粉红冒险家披风
            case 1302024: //纸剑
            case 1302021: //橡皮榔头
            case 2043005: //单手剑攻击诅咒卷轴30%
            case 2043205: //单手棍攻击诅咒卷轴30%
            case 2044405: //矛攻击诅咒卷轴30%
            case 2044505: //弓攻击诅咒卷轴30%
            case 2044705: //拳套攻击诅咒卷轴30%
            case 2043805: //长杖魔力诅咒卷轴30%
            case 2043705: //短杖魔力诅咒卷轴30%
            case 2044904: //火枪攻击诅咒卷轴30%
            case 2040509: //套服敏捷诅咒卷轴30%
            case 2040521: //套服幸运诅咒卷轴30%		
            case 2044305: //枪攻击诅咒卷轴30%		
            case 2044605: //弩攻击诅咒卷轴30%		
            case 1132088: //葡萄腰带
            case 1122019: //枫叶之心
            case 1012484: //双十纪念喇叭
            case 1122209: //黄金月饼项炼
            case 1012070: //草莓冰棒
            case 2040519: //套服智力诅咒卷轴30%
            case 2040533: //套服力量诅咒卷轴30%
            case 1372035: //旋火短杖
            case 1372036: //五毒短杖
            case 1372037: //极冻短杖
            case 1372038: //雷鸣短杖
            case 1302001: //锯
            case 1302037: //喇叭
            case 1302080: //枫叶小电灯
            case 1302105: //圣诞节天使
            //case 1302132: //打猪棒
            case 1302150: //魔女扫把
            case 1302201: //福袋
            case 1322070: //西班牙火腿
            case 1322225: //冲击波来福
            case 1332030: //扇子
            case 1322023: //蓝花纹游泳圈
            case 1322024: //紫游泳圈
            case 1322025: //救生圈
            case 1302293: //粉红色游泳圈
            case 3010298: //北极熊椅子
            case 3010048: //耶诞树椅子
            case 3010049: //冰窖椅
            case 3010061: //枫树下
            case 3010135: //独角狮椅子
            case 3010140: //病床
            case 3010223: //柯基犬椅子
            case 3010224: //麻糬冰淇淋椅
            case 3010433: //魔法皮卡啾
            case 3010447: //好困啊鸟椅子
            case 3010449: //治好要10周椅子
            case 3010453: //乘著暴风的兔子椅
            case 3010454: //爱心云朵椅
            case 3010584: //圣诞幽灵
            case 1113076: //最初的戒指
            case 1072447: //雪冰的鞋
            case 1082276: //雪冰的手套
            case 1102246: //雪冰的披风
            case 1132140: //温暖的腹带
            case 3010024: //粉红发条熊椅子
            case 3010038: //透明椅
            case 3010170: //飘雪的夜晚
            case 3010174: //魔女椅子
            case 3010175: //小画家椅
            case 3010288: //珍珠蚌椅子
            case 3010107: //龙蛋		
            case 3010032: //黄色五环椅
            case 3010033: //绿色五环椅
            case 3010002: //绿色设计师椅
            case 3010026: //幽魂发条熊椅
            case 3010094: //缎带肥肥椅
            case 3010095: //石巨人座椅
            case 3010075: //留声机椅
            case 3010077: //猫头鹰椅
            case 3010149: //凉夏猫咪椅
            case 3010096: //恐龙化石宝座
            case 3010068: //荷叶下椅子
            case 3010010: //白色海豹抱枕椅		
            case 3010016: //黑色海豹抱枕
            case 3010196: //泡泡浴缸椅
            case 3010007: //粉红海豹抱枕椅
            case 3010003: //红色设计师椅
            case 3010006: //设计师椅(黄色)
            case 3010013: //遮阳椅
            case 3010020: //澎澎桧木桶
            case 3010021: //暖暖桌
            case 3010025: //枫树下
            case 3010027: //奇多元气加倍椅		
            case 3010017: //金色海豹抱枕
            case 3010031: //红色五环椅
            case 3010045: //冰椅
            case 3010051: //公砂兔椅
            case 3010046: //赤龙椅
            case 3010047: //蓝龙椅
            case 3010120: //兔子篮子椅子		
            case 3010052: //母砂兔椅
            case 3010029: //蓝色五环椅
            case 3010030: //黑色五环椅		
            case 3010802: //国中生月妙磕头椅子
            case 3010804: //军人月妙磕头椅子
            case 3010600: //福宝月妙椅子
            case 3010316: //走吊钢丝的月妙方椅
            case 3010210: //草莓冰淇淋月饼椅子
            case 3010440: //找到故乡的月妙椅子
            case 3010705: //月妙和绿水灵椅
            case 3010172: //星空夜晚
            case 3010043: //女巫扫把
            case 3010717: //一克拉婚戒戒指	
            case 3015378: //大家的圣诞节
            case 3015379: //大家的圣诞节
            case 3010070: //皮卡啾椅子
            case 3010014: //弯弯月亮
            case 2340000: // 祝福卷轴
            case 2290096: // [技能书]枫叶祝福 20
            case 2290049: // [技能书]天怒 30
            case 2290041: // [技能书]火流星 30
            case 2290047: // [技能书]暴风雪 30
            case 2290095: // [技能书]烟雾弹 30
            case 2290017: // [技能书]斗气爆发 30
            case 2290075: // [技能书]必杀狙击 30
            case 2290085: // [技能书]三飞闪 30
            case 2290116: // [技能书]海鸥特战队 30
            case 2290084: // [技能书]三飞闪 20
            case 2290048: // [技能书]天怒 20
            case 2290040: // [技能书]火流星 20
            case 2290046: // [技能书]暴风雪 20
            case 2290074: // [技能书]必杀狙击 20
            case 2290064: // [技能书]进阶终极 20
            case 2290094: // [技能书]烟雾弹 20
            case 2290022: // [技能书]黑暗之力 20
            case 2290056: // [技能书]弓术精通 20
            case 2290066: // [技能书]弩术精通 20
            case 2290020: // [技能书]鬼神之击 20
            case 2049100: // 混沌卷轴60%
            case 1092049: // 致命剑盾
            case 1382050: // 玄武之杖
            case 1332032: // 圣诞树
            case 1022060: // 狐猴眼部装饰
            case 3012002: // 桧木泡澡桶
            case 1452167: //金刚不坏小鸡
            case 1004096: //新春舞狮(头)
            case 1032129: //许愿树传说耳环
            case 1112672: //传说枫叶银之戒
            case 1142698: //新年目标王
            case 1003114: //神龙头盔
            case 1102248: //神龙披风
            case 1012170: //鬼娃恰吉的伤口
            case 3010755: //天鹅便桶
            case 3010756: //饭桶招财猫
            case 3010608: //名画椅子
            case 3010593: //小姐小姐新年到～
            case 3010622: //我的好友丹金椅
            case 3010624: //电视椅
            case 3010642: //重新上色的画
            case 3010664: //进化椅子
            case 3010675: //斑斑的愤怒
            case 3010682: //天文台椅子
            case 3010601: //黑猫篮椅
            case 3010688: //实验室椅子
            case 3010716: //超级菇菇椅子
            case 3010721: //漫画书椅子
            case 3010722: //僵尸狩猎者椅子
            case 3010609: //时尚潮男椅
            case 3010757: //你跟我
            case 3010754: //百鬼夜行
            case 3010766: //尖耳木椅
            case 3010799: //坟墓椅
            case 3010810: //火车旅行椅子
            case 3010863: //愤怒的美容院椅子
            case 3015331: //猫咪纸屋
            case 2048014: //宠物力量卷轴60%
            case 2048015: //宠物智力卷轴60%
            case 2048016: //宠物敏捷卷轴60%
            case 2048017: //宠物幸运卷轴60%
            case 1032077: //雷克斯的绿耳环
            case 1032078: //雷克斯的红耳环
            case 1032079: //雷克斯的蓝色耳环
            case 2049003: //白衣卷轴20%
            case 2022463: //卡珊德拉的奖励5
            case 1112413: //莉琳的戒指
            case 1112414: //莉琳的戒指
            case 1112405: //莉琳的戒指
            case 3010106: //狂狼椅
            case 3010071: //迷你神兽椅
            case 3010044: //秋天椅
            case 3010187: //猫咪抱抱椅
            case 3010403: //樱花处的小型音乐会
            case 3010439: //小羊椅子
            case 3015429: //亲爱冬天的秋千椅
            case 5490000: //金钥匙
            case 4280000: //金宝箱
            case 4280001: //银宝箱
            case 2101013: //昭和头目召唤包1
            case 2100009: //召唤巴洛古
            case 2100000: //黑之包
            case 2043105: //单手斧攻击诅咒卷轴30%
            case 2044005: //双手剑攻击诅咒卷轴30%
            case 2044105: //双手斧攻击诅咒卷轴30%
            case 2044205: //双手棍攻击诅咒卷轴30%
            case 2044805: //指虎攻击诅咒卷轴30%
            case 2044905: //火枪攻击诅咒卷轴30%
            case 1402214: //红色双手剑
            case 1432182: //红色之枪
            case 1422156: //红色战锤
            case 1452220: //红色弓
            case 1462208: //红色十字弓
            case 1382226: //红色长杖
            case 1472230: //红色之拳
            case 1332242: //红色切割者
            case 1492194: //红色火枪
            case 1482183: //红色指虎
            case 1012171: //恰吉100等
            case 3015369: //杀人鲸的兔娃娃
            case 3012001: //营火
            case 3010037: //小肥肥蚊香椅子
            case 3010161: //天竺鼠椅
            case 3010053: //兔子沙发
            case 3010144: //七夕椅
            case 3010098: //懒骨头椅子
            case 3010069: //机器人椅子
            case 3010139: //我的王座
            case 3010123: //花漾彩蝶椅
            case 1142375: //圣粉后援会
            case 1142399: //阿捏母汤喔
            case 1142739: //杀人鲸的挚友
            case 1932171: //摇摇木马
            case 1932200: //咕咕鸡
            case 1422160: //杀戮电锯
            case 1422036: //玩具匠人铁锤
            case 1322034: //铁棍
            case 1302067: //枫之谷纪念旗
            case 1112723: //米哈逸戒指
            case 3010876: //枫之谷世界椅
            case 3010879: //星空夜语
            case 3010877: //人鱼梦境
            case 3010866: //匈奴族长在身边
            case 3010978: //俘虏杀人鲸枕头椅
            case 3010979: //军团长杀人鲸枕头椅
            case 3010980: //惊奇兔子箱椅
            case 3010976: //加油就交给我！椅子
            case 1082345: //传说枫叶手套
                return 1;
            case 2370005: // 兵法书(司马法）
            case 2370006: // 兵法书(李卫公问对)
            case 2370007: // 兵法书(孙兵兵法)
            case 3010054: // 绵羊单人床
            case 2022483: // 加持道具
            case 2210029: // 黄金猪  变身道具
            case 2040305: //耳环智力诅咒卷轴30%
            case 2040407: //上衣力量诅咒卷轴30%
            case 2040411: //上衣幸运诅咒卷轴30%
            case 2040626: //裤裙敏捷卷轴 30%
            case 2040811: //手套攻击诅咒卷轴30%
            case 2040815://手套魔力诅咒卷轴30%
                return 2;
            case 2049000: // Reverse Scroll
            case 2049001: // Reverse Scroll
            case 2049002: // Reverse Scroll
                /*
            case 2040006: // Miracle
            case 2040007: // Miracle
            case 2040303: // Miracle
            case 2040403: // Miracle
            case 2040506: // Miracle
            case 2040507: // Miracle
            case 2040603: // Miracle
            case 2040709: // Miracle
            case 2040710: // Miracle
            case 2040711: // Miracle
            case 2040806: // Miracle
            case 2040903: // Miracle
            case 2041024: // Miracle
            case 2041025: // Miracle
            case 2043003: // Miracle
            case 2043103: // Miracle
            case 2043203: // Miracle
            case 2043303: // Miracle
            case 2043703: // Miracle
            case 2043803: // Miracle
            case 2044003: // Miracle
            case 2044103: // Miracle
            case 2044203: // Miracle
            case 2044303: // Miracle
            case 2044403: // Miracle
            case 2044503: // Miracle
            case 2044603: // Miracle
            case 2044908: // Miracle
            case 2044815: // Miracle
            case 2044019: // Miracle
            case 2044703: // Miracle
            case 1382037: // Blade Staff
                */
                return 3;
            case 1102084: // Pink Gaia Cape
            case 1102086: // Purple Gaia Cape
            case 3010065: // Pink Parasol
            case 3010064: // Brown Sand Bunny Cushion
            case 3010063: // Starry Moon Cushion

                return 3;
            //1 = wedding msg o.o
        }
        return 0;
    }

    public final static int[] Jxboxrewards = {
        1112413, 1, // 莉琳的戒指 *
        //    2070018, 1, // balance fury 没有的物品
        2040313, 1, // 耳环智力卷轴65% *
        2040522, 1, // 套福敏捷卷轴65% *
        2040526, 1, // 套福智力卷轴65% *
        2040821, 1, // 手套攻击卷轴65% *
        2041052, 1, // 披风智力卷轴65% *
        2043011, 1, // 单手剑攻击卷轴65% *
        2043306, 1, // 短剑攻击卷轴65% *
        2043706, 1, // 短杖魔力卷轴65% *
        2043806, 1, // 长杖魔力卷轴65% *
        2044006, 1, // 双手剑攻击卷轴65% *
        2041050, 3, // 披风力量卷轴65%
        2044406, 1, // 矛攻击卷轴65% *
        2044811, 1, // 指虎攻击卷轴65% *
        2044906, 1, // 火枪攻击卷轴65% *
        2040528, 1, // 套服幸运卷轴65% *
        2040819, 3, // 手套敏捷卷轴65% *
        2040718, 3, // 鞋子敏捷卷轴65% *
        2044306, 1, // 枪攻击卷轴65% *
        5120015, 1, // 新年鞭炮 *
        5121020, 1, // 恭喜发财 *

        2022133, 3, // 恭喜发财 *
        2022455, 3, // 恭喜发财 *
        2002023, 3, // 姜汁汽水 *
        4001038, 3, // 木妖橡皮擦 *
        4001039, 3, // 蘑菇王橡皮擦 *
        4001040, 3, // 猴子橡皮擦 *
        4001041, 3, // 大幽灵橡皮擦 *
        4001042, 3, // 绿水灵橡皮擦 *
        4001043, 3, // 三眼章鱼橡皮擦 *
        2022216, 3, // 姑姑宝贝的御守 *
        2022220, 3, // 拉图斯的御守 *
        2022223, 3, // 企鹅王的御守 *
        2000005, 3, // 超级药水

        3010798, 1, // 鞭炮椅子 *
        2012005, 1, // +100ad无法交换苹果 *
        5220000, 1, // 转蛋券 *

        2043206, 1, // 单手棍攻击卷轴65% *
        2044106, 1, // 双手斧攻击卷轴65% *
        2044206, 1, // 双手棍攻击卷轴65% *
        2043106, 1, // 单手斧攻击卷轴65% *
        2044813, 1, // 指虎命中卷轴65% *

        2022251, 4, // 枫叶棒棒糖 *
        2022245, 3, // 心跳停止糖 *

        2210025, 4, // 吉祥红包 *
        2210026, 4, // 吉祥红包 *
        2210027, 4, // 吉祥红包 *

        2022217, 5, // 残暴炎魔御守 *
        4001137, 3, // 乖宝宝印章 *
        2210028, 4, // 吉祥红包 *
        2022133, 10, // 年年有余 *
        5121020, 10, // 红包 *
        4001188, 4}; // 舞痴鱼 *

    public final static int[] goldrewards = {
        2340000, 1, // white scroll
        //    2070018, 1, // balance fury 没有的物品
        1402037, 1, // Rigbol Sword
        2290096, 1, // Maple Warrior 20
        2290049, 1, // Genesis 30
        2290041, 1, // Meteo 30
        2290047, 1, // Blizzard 30
        2290095, 1, // Smoke 30
        2290017, 1, // Enrage 30
        2290075, 1, // Snipe 30
        2290085, 1, // Triple Throw 30
        2290116, 1, // Areal Strike
        1302059, 3, // Dragon Carabella
        2049100, 1, // Chaos Scroll
        2340000, 1, // White Scroll
        1092049, 1, // Dragon Kanjar
        1102041, 1, // Pink Cape
        1432018, 3, // Sky Ski
        1022047, 3, // Owl Mask
        3010051, 1, // Chair
        3010020, 1, // Portable meal table
        2040914, 1, // Shield for Weapon Atk

        1432011, 3, // Fair Frozen
        1442020, 3, // HellSlayer
        1382035, 3, // Blue Marine
        1372010, 3, // Dimon Wand
        1332027, 3, // Varkit
        1302056, 3, // Sparta
        1402005, 3, // Bezerker
        1472053, 3, // Red Craven
        1462018, 3, // Casa Crow
        1452017, 3, // Metus
        1422013, 3, // Lemonite
        1322029, 3, // Ruin Hammer
        1412010, 3, // Colonian Axe

        1472051, 1, // Green Dragon Sleeve
        1482013, 1, // Emperor's Claw
        1492013, 1, // Dragon fire Revlover

        1382050, 1, // Blue Dragon Staff
        1382045, 1, // Fire Staff, Level 105
        1382047, 1, // Ice Staff, Level 105
        1382048, 1, // Thunder Staff
        1382046, 1, // Poison Staff

        1332032, 4, // Christmas Tree
        1302293, 3, // Flowery Tube

        4001040, 4, // Lupin Eraser
        4001039, 4, // Mushmom Eraser
        4001038, 4, // Stump Eraser

        2030008, 5, // Bottle, return scroll
        1442018, 3, // Frozen Tuna
        2040900, 4, // Shield for DEF
        2000005, 10, // Power Elixir
        2000004, 10, // Elixir
        4280000, 4}; // Gold Box
    public final static int[] silverrewards = {
        3010041, 1, // skull throne
        1002452, 3, // Starry Bandana
        1002455, 3, // Starry Bandana
        2290084, 1, // Triple Throw 20
        2290048, 1, // Genesis 20
        2290040, 1, // Meteo 20
        2290046, 1, // Blizzard 20
        2290074, 1, // Sniping 20
        2290064, 1, // Concentration 20
        2290094, 1, // Smoke 20
        2290022, 1, // Berserk 20
        2290056, 1, // Bow Expert 30
        2290066, 1, // xBow Expert 30
        2290020, 1, // Sanc 20
        1102082, 1, // Black Raggdey Cape
        1302049, 1, // Glowing Whip
        2340000, 1, // White Scroll
        1102041, 1, // Pink Cape
        1452019, 2, // White Nisrock
        4001116, 3, // Hexagon Pend
        4001041, 3, // Wraith Eraser
        1022060, 2, // Foxy Racoon Eye

        1432011, 3, // Fair Frozen
        1442020, 3, // HellSlayer
        1382035, 3, // Blue Marine
        1372010, 3, // Dimon Wand
        1332027, 3, // Varkit
        1302056, 3, // Sparta
        1402005, 3, // Bezerker
        1472053, 3, // Red Craven
        1462018, 3, // Casa Crow
        1452017, 3, // Metus
        1422013, 3, // Lemonite
        1322029, 3, // Ruin Hammer
        1412010, 3, // Colonian Axe
        1002587, 3, // Black Wisconsin
        1402044, 1, // Pumpkin lantern
        2101013, 4, // Summoning Showa boss
        1442046, 1, // Super Snowboard
        1422031, 1, // Blue Seal Cushion
        1332054, 3, // Lonzege Dagger
        1012056, 3, // Dog Nose
        1022047, 3, // Owl Mask
        3012002, 1, // Bathtub
        1442012, 3, // Sky snowboard
        1442018, 3, // Frozen Tuna
        1432010, 3, // Omega Spear
        // 1432036, 1, // Fishing Pole 没用的物品
        2000005, 10, // Power Elixir
        2000004, 10, // Elixir
        4280001, 4}; // Silver Box
    public static int[] eventCommonReward = {
        0, 40,
        1, 10,
        //        5060003, 18, 
        //        4170023, 18, 
        4031019, 5,
        4280000, 3,
        4280001, 4,
        5490000, 3,
        5490001, 4
    };
    public static int[] eventUncommonReward = {
        2, 4,
        3, 4,
        5160000, 5,
        5160001, 5,
        5160002, 5,
        5160003, 5,
        5160004, 5,
        5160005, 5,
        5160006, 5,
        5160007, 5,
        5160008, 5,
        5160009, 5,
        5160010, 5,
        5160011, 5,
        5160012, 5,
        5160013, 5,
        4001137, 5,
        4001137, 5,
        4080000, 5,
        4080001, 5,
        4080002, 5,
        4080003, 5,
        4080004, 5,
        4080005, 5,
        4080006, 5,
        4080007, 5,
        4080008, 5,
        4080009, 5,
        4080010, 5,
        4080011, 5,
        4080100, 5,
        4031019, 5,
        5121003, 5,
        5150042, 5,
        2022463, 5,
        2022463, 5,
        2450000, 2,};
    public static int[] eventRareReward = {
        4031019, 5,
        2049100, 5,
        //        1122017, 1,
        4001137, 10,
        2049301, 20,
        2049400, 3,
        2340000, 1,
        3010130, 5,
        3010131, 5,
        3010132, 5,
        3010133, 5,
        3010136, 5,
        3010116, 5,
        3010117, 5,
        3010118, 5,
        1112405, 1,
        1112413, 1,
        1112414, 1,
        //        1022097, 1, 
        2040211, 1,
        2040212, 1,
        2049000, 2,
        2049001, 2,
        2049002, 2,
        2049003, 2,
        1012058, 2,
        1012059, 2,
        1012060, 2,
        1012061, 2
    };
    public static int[] eventSuperReward = {
        4031019, 5,
        4031307, 50,
        3010127, 10,
        3010128, 10,
        3010137, 10,
        4001137, 10,
        1012139, 10,
        1012140, 10,
        1012141, 10
    };
    public static int[] fishingReward = {
        0, 40, // Meso
        1, 40, // EXP
        1302021, 5, // Pico Pico Hammer
        1072238, 1, // Voilet Snowshoe
        1072239, 1, // Yellow Snowshoe
        2049100, 1, // Chaos Scroll
        //2049301, 1, // Equip Enhancer Scroll
        //2049401, 1, // Potential Scroll
        1302000, 3, // Sword
        1442011, 1, // Surfboard
        //4000517, 8, // Golden Fish
        //4000518, 25, // Golden Fish Egg
        4031627, 2, // White Bait (3cm)
        4031628, 1, // Sailfish (120cm)
        4031630, 1, // Carp (30cm)
        4031631, 1, // Salmon(150cm)
        4031632, 1, // Shovel
        4031633, 2, // Whitebait (3.6cm)
        4031634, 1, // Whitebait (5cm)
        4031635, 1, // Whitebait (6.5cm)
        4031636, 1, // Whitebait (10cm)
        4031637, 2, // Carp (53cm)
        4031638, 2, // Carp (60cm)
        4031639, 1, // Carp (100cm)
        4031640, 1, // Carp (113cm)
        4031641, 2, // Sailfish (128cm)
        4031642, 2, // Sailfish (131cm)
        4031643, 1, // Sailfish (140cm)
        4031644, 1, // Sailfish (148cm)
        4031645, 2, // Salmon (166cm)
        4031646, 2, // Salmon (183cm)
        4031647, 1, // Salmon (227cm)
        4031648, 1, // Salmon (288cm)
        4031629, 1, // Pot
        1102041, 1, // 粉披
        1102042, 1, // 紫披
        2101120, 1 // 鱼怪召唤袋
    };

    public static boolean isDragonItem(int itemId) {
        switch (itemId) {
            case 1372032:
            case 1312031:
            case 1412026:
            case 1302059:
            case 1442045:
            case 1402036:
            case 1432038:
            case 1422028:
            case 1472051:
            case 1472052:
            case 1332049:
            case 1332050:
            case 1322052:
            case 1452044:
            case 1462039:
            case 1382036:
            case 1342010:
                return true;
            default:
                return false;
        }
    }

    public static boolean isReverseItem(int itemId) {
        switch (itemId) {
            case 1002790:
            case 1002791:
            case 1002792:
            case 1002793:
            case 1002794:
            case 1082239:
            case 1082240:
            case 1082241:
            case 1082242:
            case 1082243:
            case 1052160:
            case 1052161:
            case 1052162:
            case 1052163:
            case 1052164:
            case 1072361:
            case 1072362:
            case 1072363:
            case 1072364:
            case 1072365:

            case 1302086:
            case 1312038:
            case 1322061:
            case 1332075:
            case 1332076:
            case 1372045:
            case 1382059:
            case 1402047:
            case 1412034:
            case 1422038:
            case 1432049:
            case 1442067:
            case 1452059:
            case 1462051:
            case 1472071:
            case 1482024:
            case 1492025:

            case 1342012:
                return true;
            default:
                return false;
        }
    }

    public final static int[] 重生装备 = {1002790, 1002791, 1002792, 1002793, 1002794, 1082239, 1082240, 1082241, 1082242,
            1082243, 1052160, 1052161, 1052162, 1052163, 1052164, 1072361, 1072362, 1072363, 1072364, 1072365, 1302086,
            1312038, 1322061, 1332075, 1332076, 1372045, 1382059, 1402047, 1412034, 1422038, 1432049, 1442067, 1452059,
            1462051, 1472071, 1482024, 1492025, 1342012};

    public final static int[] 永恒装备 = {1032031, 1102172, 1002776, 1002777, 1002778, 1002779, 1002780, 1082234, 1082235,
            1082236, 1082237, 1082238, 1052155, 1052156, 1052157, 1052158, 1052159, 1072355, 1072356, 1072357, 1072358,
            1072359, 1092057, 1092058, 1092059, 1122011, 1122012, 1302081, 1312037, 1322060, 1332073, 1332074, 1372044,
            1382057, 1402046, 1412033, 1422037, 1432047, 1442063, 1452057, 1462050, 1472068, 1482023, 1492023, 1342011};

    public final static int[] 迷之蛋随机物品 = {
            1142270,//妖精的瞳孔
            1382050, //玄武之杖
            1382052, //青龙长杖  
            1382051, //白虎长杖  
            1382049, //朱雀长杖  
            //寻宝装备
            1004492, //寻宝帽子
            1073057, //寻宝鞋
            1082647, //寻宝手套
            1442270, //寻宝矛
            1052929, //寻宝套装
            1382263, //寻宝长杖
            1452255, //寻宝弓
            1322253, //寻宝锤
            1462241, //寻宝弩
            1332277, //寻宝切割者
            1402253, //寻宝双手剑
            1472263, //寻宝拳
            1412180, //寻宝双手战斧
            1482218, //寻宝冲拳
            1422187, //寻宝锤
            1098008, //寻宝盾
            1099014, //寻宝战士盾
            1492233,
            1432216,
            1302336,
            1372225,
            1322001, //槌子
            1322006, //钢管
            1142374, //圣诞奇蹟
            1032128, //许愿树金耳环
            1132103, //黄金腰带
            1022162, //旅行者的翅膀造型眼镜
            1112596, //拉尔孙的挑战型戒指
            1004579, //乖巧羊帽子
            1012310, //情人甜美巧克力
            1082514, //情人节手环<下级>
            1142681, //守护情侣的单身
            1142713, //非自发性的单身主义者
            1402044, //南瓜灯笼
            1003439, //情人节氢气球
            1002723, //年糕帽
            1032028, //红祖母绿耳环
            1032194, //里贝卡的葡萄耳环
            1122109, //葡萄项坠
            1052350, //小丘运动服
            1082533, //爱里涅的手镯
            1102590, //爱里捏的翅膀
            1092035, //可乐战盾
            1102370, //西格诺斯粉丝俱乐部气球
            1102371, //巴雷利粉丝俱乐部气球
            1102372, //莉琳粉丝俱乐部气球
            1302145, //3rd 不速之客 单手剑
            1332123, //3rd 不速之客 短剑
            1372076, //3rd 不速之客 杖
            1382097, //3rd 不速之客 长杖
            1402088, //3rd 不速之客 双手剑
            1432079, //3rd 不速之客枪
            1442109, //3rd 不速之客 矛
            1452104, //3rd 不速之客 弓
            1462089, //3rd 不速之客 弩
            1472115, //3rd 不速之客 拳套
            1482077, //3rd 不速之客 指虎
            1492077, //3rd 不速之客 火枪
            1382045, //火云长杖
            1382046, //毒龙长杖
            1382047, //冰魄长杖
            1382048, //朱雀长杖
            1132049, //力气褐色锁扣腰带
            1132059, //智慧褐色锁扣腰带
            1132069, //锋利褐色锁扣腰带
            1132079, //幸运褐色锁扣腰带
            1142260, //新手枫叶转蛋券勋章
            1142073, //和我做朋友勋章
            1142376, //神出鬼没
            1012056, //狗鼻
            /*
            1102481, //暴君披风
            1102482, //暴君披风
            1102483, //暴君披风
            1102484, //暴君披风
            1102485, //暴君披风
            */
            1002799, //桂冠
            1302087, //奖杯武器
            1032127, //许愿树银耳环
            1112915, //欢乐指环
            1022047, //猫头鹰
            1102042, //紫色冒险家披风
            1142207, //春花胸针
            1092022, //调色盘
            1302061, //树藤鞭子
            1332101, //奇多豹掌武器
            2043305, //短剑攻击诅咒卷轴30%
            2044804, //指虎攻击诅咒卷轴30%
            1082149, //褐色工作手套
            1072798, //妖精的红色帆布鞋
            1082179, //黄击中手套
            1102041, //粉红冒险家披风
            1302024, //纸剑
            1302021, //橡皮榔头
            2043005, //单手剑攻击诅咒卷轴30%
            2043205, //单手棍攻击诅咒卷轴30%
            2044405, //矛攻击诅咒卷轴30%
            2044505, //弓攻击诅咒卷轴30%
            2044705, //拳套攻击诅咒卷轴30%
            2043805, //长杖魔力诅咒卷轴30%
            2043705, //短杖魔力诅咒卷轴30%
            2044904, //火枪攻击诅咒卷轴30%
            2040509, //套服敏捷诅咒卷轴30%
            2040521, //套服幸运诅咒卷轴30%
            2044305, //枪攻击诅咒卷轴30%
            2044605, //弩攻击诅咒卷轴30%
            1132088, //葡萄腰带
            1122019, //枫叶之心
            1122209, //黄金月饼项炼
            1012070, //草莓冰棒
            2040519, //套服智力诅咒卷轴30%
            2040533, //套服力量诅咒卷轴30%
            1372035, //旋火短杖
            1372036, //五毒短杖
            1372037, //极冻短杖
            1372038, //雷鸣短杖
            1302001, //锯
            1302037, //喇叭
            1302080, //枫叶小电灯
            1302105, //圣诞节天使
            //1302132, //打猪棒
            1302150, //魔女扫把
            1302201, //福袋
            1322225, //冲击波来福
            1332030, //扇子
            1322023, //蓝花纹游泳圈
            1322024, //紫游泳圈
            1322025, //救生圈
            1302293, //粉红色游泳圈
            3010298, //北极熊椅子
            3010048, //耶诞树椅子
            3010049, //冰窖椅
            3010061, //枫树下
            3010135, //独角狮椅子
            3010140, //病床
            3010223, //柯基犬椅子
            3010224, //麻糬冰淇淋椅
            3010433, //魔法皮卡啾
            3010447, //好困啊鸟椅子
            3010449, //治好要10周椅子
            3010453, //乘著暴风的兔子椅
            3010454, //爱心云朵椅
            3010584, //圣诞幽灵
            1113076, //最初的戒指
            1072447, //雪冰的鞋
            1082276, //雪冰的手套
            1102246, //雪冰的披风
            1132140, //温暖的腹带
            3010024, //粉红发条熊椅子
            3010038, //透明椅
            3010170, //飘雪的夜晚
            3010174, //魔女椅子
            3010175, //小画家椅
            3010288, //珍珠蚌椅子
            3010107, //龙蛋
            3010032, //黄色五环椅
            3010033, //绿色五环椅
            3010002, //绿色设计师椅
            3010026, //幽魂发条熊椅
            3010094, //缎带肥肥椅
            3010095, //石巨人座椅
            3010075, //留声机椅
            3010077, //猫头鹰椅
            3010149, //凉夏猫咪椅
            3010096, //恐龙化石宝座
            3010068, //荷叶下椅子
            3010010, //白色海豹抱枕椅
            3010016, //黑色海豹抱枕
            3010196, //泡泡浴缸椅
            3010007, //粉红海豹抱枕椅
            3010003, //红色设计师椅
            3010006, //设计师椅(黄色)
            3010013, //遮阳椅
            3010021, //暖暖桌
            3010025, //枫树下
            3010017, //金色海豹抱枕
            3010031, //红色五环椅
            3010045, //冰椅
            3010051, //公砂兔椅
            3010046, //赤龙椅
            3010047, //蓝龙椅
            3010120, //兔子篮子椅子
            3010052, //母砂兔椅
            3010029, //蓝色五环椅
            3010030, //黑色五环椅
            3010802, //国中生月妙磕头椅子
            3010804, //军人月妙磕头椅子
            3010600, //福宝月妙椅子
            3010316, //走吊钢丝的月妙方椅
            3010210, //草莓冰淇淋月饼椅子
            3010440, //找到故乡的月妙椅子
            3010705, //月妙和绿水灵椅
            3010172, //星空夜晚
            3010043, //女巫扫把
            3010717, //一克拉婚戒戒指
            3015378, //大家的圣诞节
            3015379, //大家的圣诞节
            3010070, //皮卡啾椅子
            3010014, //弯弯月亮
            2340000, // 祝福卷轴
            2290096, // [技能书]枫叶祝福 20
            2290049, // [技能书]天怒 30
            2290041, // [技能书]火流星 30
            2290047, // [技能书]暴风雪 30
            2290095, // [技能书]烟雾弹 30
            2290017, // [技能书]斗气爆发 30
            2290075, // [技能书]必杀狙击 30
            2290085, // [技能书]三飞闪 30
            2290116, // [技能书]海鸥特战队 30
            2290084, // [技能书]三飞闪 20
            2290048, // [技能书]天怒 20
            2290040, // [技能书]火流星 20
            2290046, // [技能书]暴风雪 20
            2290074, // [技能书]必杀狙击 20
            2290064, // [技能书]进阶终极 20
            2290094, // [技能书]烟雾弹 20
            2290022, // [技能书]黑暗之力 20
            2290056, // [技能书]弓术精通 20
            2290066, // [技能书]弩术精通 20
            2290020, // [技能书]鬼神之击 20
            2049100, // 混沌卷轴60%
            1092049, // 致命剑盾
            1332032, // 圣诞树
            1022060, // 狐猴眼部装饰
            3012002, // 桧木泡澡桶
            1452167, //金刚不坏小鸡
            1004096, //新春舞狮(头)
            1032129, //许愿树传说耳环
            1112672, //传说枫叶银之戒
            1142698, //新年目标王
            1003114, //神龙头盔
            1102248, //神龙披风
            1012170, //鬼娃恰吉的伤口
            3010755, //天鹅便桶
            3010756, //饭桶招财猫
            3010608, //名画椅子
            3010593, //小姐小姐新年到～
            3010622, //我的好友丹金椅
            3010624, //电视椅
            3010642, //重新上色的画
            3010664, //进化椅子
            3010675, //斑斑的愤怒
            3010682, //天文台椅子
            3010601, //黑猫篮椅
            3010688, //实验室椅子
            3010716, //超级菇菇椅子
            3010721, //漫画书椅子
            3010722, //僵尸狩猎者椅子
            3010609, //时尚潮男椅
            3010757, //你跟我
            3010754, //百鬼夜行
            3010766, //尖耳木椅
            3010799, //坟墓椅
            3010810, //火车旅行椅子
            3010863, //愤怒的美容院椅子
            3015331, //猫咪纸屋
            2048014, //宠物力量卷轴60%
            2048015, //宠物智力卷轴60%
            2048016, //宠物敏捷卷轴60%
            2048017, //宠物幸运卷轴60%
            1032077, //雷克斯的绿耳环
            1032078, //雷克斯的红耳环
            1032079, //雷克斯的蓝色耳环
            2049003, //白衣卷轴20%
            2022463, //卡珊德拉的奖励5
            1112405, //莉琳的戒指
            3010106, //狂狼椅
            3010071, //迷你神兽椅
            3010044, //秋天椅
            3010187, //猫咪抱抱椅
            3010403, //樱花处的小型音乐会
            3010439, //小羊椅子
            5490000, //金钥匙
            4280000, //金宝箱
            4280001, //银宝箱
            2101013, //昭和头目召唤包1
            2100009, //召唤巴洛古
            2100000, //黑之包
            2043105, //单手斧攻击诅咒卷轴30%
            2044005, //双手剑攻击诅咒卷轴30%
            2044105, //双手斧攻击诅咒卷轴30%
            2044205, //双手棍攻击诅咒卷轴30%
            2044805, //指虎攻击诅咒卷轴30%
            2044905, //火枪攻击诅咒卷轴30%
            //红色武器
            1432182, //红色之枪
            1422156, //红色战锤
            1452220, //红色弓
            1462208, //红色十字弓
            1382226, //红色长杖
            1472230, //红色之拳
            1332242, //红色切割者
            1492194, //红色火枪
            1482183, //红色指虎
            1402214, //红色双手剑
            1012171, //恰吉100等
            3012001, //营火
            3010037, //小肥肥蚊香椅子
            3010161, //天竺鼠椅
            3010053, //兔子沙发
            3010144, //七夕椅
            3010098, //懒骨头椅子
            3010069, //机器人椅子
            3010139, //我的王座
            3010123, //花漾彩蝶椅
            1142375, //圣粉后援会
            1142399, //阿捏母汤喔
            1932171, //摇摇木马
            1932200, //咕咕鸡
            1422160, //杀戮电锯
            1422036, //玩具匠人铁锤
            1322034, //铁棍
            1302067, //枫之谷纪念旗
            1112723, //米哈逸戒指
            3010876, //枫之谷世界椅
            3010879, //星空夜语
            3010877, //人鱼梦境
            3010978, //俘虏杀人鲸枕头椅
            3010979, //军团长杀人鲸枕头椅
            3010980, //惊奇兔子箱椅
            3010976, //加油就交给我！椅子
            1082345, //传说枫叶手套
            3010054, // 绵羊单人床
            2022483, // 加持道具
            2210029, // 黄金猪  变身道具
            2040305, //耳环智力诅咒卷轴30%
            2040407, //上衣力量诅咒卷轴30%
            2040411, //上衣幸运诅咒卷轴30%
            2040626, //裤裙敏捷卷轴 30%
            2040811, //手套攻击诅咒卷轴30%
            2040815,//手套魔力诅咒卷轴30%
            2049000, // 白医卷轴
            2049001, // 白医卷轴
            2049002, // 白医卷轴
            //必成卷轴
            /*
            2040006, // 必成卷轴
            2040007, // Miracle
            2040303, // Miracle
            2040403, // Miracle
            2040506, // Miracle
            2040507, // Miracle
            2040603, // Miracle
            2040709, // Miracle
            2040710, // Miracle
            2040711, // Miracle
            2040806, // Miracle
            2040903, // Miracle
            2041024, // Miracle
            2041025, // Miracle
            2043003, // Miracle
            2043103, // Miracle
            2043203, // Miracle
            2043303, // Miracle
            2043703, // Miracle
            2043803, // Miracle
            2044003, // Miracle
            2044103, // Miracle
            2044203, // Miracle
            2044303, // Miracle
            2044403, // Miracle
            2044503, // Miracle
            2044603, // Miracle
            2044908, // Miracle
            2044815, // Miracle
            2044019, // Miracle
            2044703, // Miracle
            */
            1382037, // 偃月
            1102084, // Pink Gaia Cape
            1102086, // Purple Gaia Cape
            3010065, // Pink Parasol
            3010064, // Brown Sand Bunny Cushion
            3010063, // Starry Moon Cushion
            //卷轴
            2043002,
            2040805,
            2040915,
            2043302,
            2044002,
            2044302,
            2044402,
            2044502,
            2044602,
            2044702,
            2044802,
            2044902,
            2040919,
            2040920,
            2043702,
            2043802,
            //1402309,
    };

    public static boolean isTimelessItem(int itemId) {
        switch (itemId) {
            case 1032031: //shield earring, but technically
            case 1102172:
            case 1002776:
            case 1002777:
            case 1002778:
            case 1002779:
            case 1002780:
            case 1082234:
            case 1082235:
            case 1082236:
            case 1082237:
            case 1082238:
            case 1052155:
            case 1052156:
            case 1052157:
            case 1052158:
            case 1052159:
            case 1072355:
            case 1072356:
            case 1072357:
            case 1072358:
            case 1072359:
            case 1092057:
            case 1092058:
            case 1092059:

            case 1122011:
            case 1122012:

            case 1302081:
            case 1312037:
            case 1322060:
            case 1332073:
            case 1332074:
            case 1372044:
            case 1382057:
            case 1402046:
            case 1412033:
            case 1422037:
            case 1432047:
            case 1442063:
            case 1452057:
            case 1462050:
            case 1472068:
            case 1482023:
            case 1492023:
            case 1342011:
                return true;
            default:
                return false;
        }
    }

    public static boolean isRing(int itemId) {
        return itemId >= 1112000 && itemId < 1113000;
    }// 112xxxx - pendants, 113xxxx - belts

    //if only there was a way to find in wz files -.-
    public static boolean isEffectRing(int itemid) {
        return isFriendshipRing(itemid) || isCrushRing(itemid) || isMarriageRing(itemid);
    }

    public static boolean isMarriageRing(int itemId) {
        switch (itemId) {
            case 1112300:
            case 1112301:
            case 1112302:
            case 1112303:
            case 1112304:
            case 1112305:
            case 1112306:
            case 1112307:
            case 1112308:
            case 1112309:
            case 1112310:
            case 1112311:
            case 1112315:
            case 1112316:
            case 1112317:
            case 1112318:
            case 1112319:
            case 1112320:
            case 1112803:

            case 1112806:
            case 1112807:
            case 1112808:
            case 1112809:

                return true;
        }
        return false;
    }

    public static boolean isFriendshipRing(int itemId) {
        switch (itemId) {
            case 1112800:
            case 1112801:
            case 1112802:
            case 1112804:
            case 1112810: //new
            case 1112811: //new, doesnt work in friendship?
            case 1112812: //new, im ASSUMING it's friendship cuz of itemID, not sure.
            case 1112015:
            case 1112816:
            case 1112817:
            case 1112822:
            case 1049000:
            case 1112016:
                return true;
        }
        return false;
    }

    public static boolean isCrushRing(int itemId) {
        switch (itemId) {
            case 1112001:
            case 1112002:
            case 1112003:
            case 1112005:
            case 1112006:
            case 1112007:
            case 1112012:
            case 1112013: // 爱情红线戒指
            case 1112015:
            case 1048000:
            case 1048001:
            case 1048002:
                return true;
        }
        return false;
    }

    public static int Equipment_Bonus_EXP(final int itemid) { // TODO : Add Time for more exp increase
        switch (itemid) {
            case 1122017:
            case 1122086:
            case 1122207:
            case 1122215:
                return 30;
        }
        return 0;
    }

    public static int getExpForLevel(int i, int itemId) {
        if (isReverseItem(itemId)) {
            return getReverseRequiredEXP(i);
        } else if (getMaxLevel(itemId) > 0) {
            return getTimelessRequiredEXP(i);
        }
        return 0;
    }

    public static int getMaxLevel(final int itemId) {
        if (isTimelessItem(itemId)) {
            return 5;
        } else if (isReverseItem(itemId)) {
            return 3;
        } else {
            switch (itemId) {
                case 1302109:
                case 1312041:
                case 1322067:
                case 1332083:
                case 1372048:
                case 1382064:
                case 1402055:
                case 1412037:
                case 1422041:
                case 1432052:
                case 1442073:
                case 1452064:
                case 1462058:
                case 1472079:
                case 1482035:

                case 1302108:
                case 1312040:
                case 1322066:
                case 1332082:
                case 1372047:
                case 1382063:
                case 1402054:
                case 1412036:
                case 1422040:
                case 1432051:
                case 1442072:
                case 1452063:
                case 1462057:
                case 1472078:
                case 1482036:
                    return 1;

                case 1072376:
                    return 2;
            }
        }
        return 0;
    }

    public static int getStatChance() {
        return 25;
    }

    public static MonsterStatus getStatFromWeapon(final int itemid) {
        switch (itemid) {
            case 1302109:
            case 1312041:
            case 1322067:
            case 1332083:
            case 1372048:
            case 1382064:
            case 1402055:
            case 1412037:
            case 1422041:
            case 1432052:
            case 1442073:
            case 1452064:
            case 1462058:
            case 1472079:
            case 1482035:
                return MonsterStatus.ACC;
            case 1302108:
            case 1312040:
            case 1322066:
            case 1332082:
            case 1372047:
            case 1382063:
            case 1402054:
            case 1412036:
            case 1422040:
            case 1432051:
            case 1442072:
            case 1452063:
            case 1462057:
            case 1472078:
            case 1482036:
                return MonsterStatus.SPEED;
        }
        return null;
    }

    public static int getXForStat(MonsterStatus stat) {
        switch (stat) {
            case ACC:
                return -70;
            case SPEED:
                return -50;
        }
        return 0;
    }

    public static int getSkillForStat(MonsterStatus stat) {
        switch (stat) {
            case ACC:
                return 3221006;
            case SPEED:
                return 3121007;
        }
        return 0;
    }
    public final static int[] normalDrops = {
        4001009, //real
        4001010,
        4001011,
        4001012,
        4001013,
        4001014, //real
        4001021,
        4001038, //fake
        4001039,
        4001040,
        4001041,
        4001042,
        4001043, //fake
        4001038, //fake
        4001039,
        4001040,
        4001041,
        4001042,
        4001043, //fake
        4001038, //fake
        4001039,
        4001040,
        4001041,
        4001042,
        4001043, //fake
        4000164, //start
        2000000,
        2000003,
        2000004,
        2000005,
        4000019,
        4000000,
        4000016,
        4000006,
        2100121,
        4000029,
        4000064,
        5110000,
        4000306,
        4032181,
        4006001,
        4006000,
        2050004,
        3994102,
        3994103,
        3994104,
        3994105,
        2430007, //end
        4000164, //start
        2000000,
        2000003,
        2000004,
        2000005,
        4000019,
        4000000,
        4000016,
        4000006,
        2100121,
        4000029,
        4000064,
        5110000,
        4000306,
        4032181,
        4006001,
        4006000,
        2050004,
        3994102,
        3994103,
        3994104,
        3994105,
        2430007, //end
        4000164, //start
        2000000,
        2000003,
        2000004,
        2000005,
        4000019,
        4000000,
        4000016,
        4000006,
        2100121,
        4000029,
        4000064,
        5110000,
        4000306,
        4032181,
        4006001,
        4006000,
        2050004,
        3994102,
        3994103,
        3994104,
        3994105,
        2430007}; //end
    public final static int[] rareDrops = {
        2049100,
        2049301,
        2049401,
        2022326,
        2022193,
        2049000,
        2049001,
        2049002};
    public final static int[] superDrops = {
        2040804,
        2049400,
        2049100};

    public static int getSkillBook(final int job) {
        return 0;
    }

    public static int getSkillBookForSkill(final int skillid) {
        return getSkillBook(skillid / 10000);
    }

    public static int getMountItem(final int sourceid) {
        switch (sourceid) {
            case 5221006: //海盗船
                return 1932000;
            case 1013: //宇宙船
            case 10001014:
                return 1932001;
            case 1014: // 宇宙冲锋
            case 10001015:
                return 1932002;
            case 1015: //宇宙光束
            case 10001016:
                return 1932007;
            case 1017: //雪吉拉骑士
            case 10001019:
            case 20001019:
                return 1932003;
            //椅子-坐骑
            case 3015998:
                return 1933391;
            case 3010075:
                return 1933019;
            case 3010086:
                return 1933025;
            case 3010093:
                return 1933024;
            case 3010117:
                return 1933006;
            case 3010118:
                return 1933005;
            case 3010123:
                return 1933021;
            case 3010125:
                return 1933017;
            case 3010141:
                return 1933002;
            case 3010142:
                return 1933003;
            case 3010145:
                return 1933022;
            case 3010146:
                return 1933022;
            case 3010151:
                return 1933007;
            case 3010153:
                return 1933009;
            case 3010156:
                return 1933008;
            case 3010162:
                return 1933010;
            case 3010163:
                return 1933013;
            case 3010164:
                return 1933013;
            case 3010166:
                return 1933011;
            case 3010167:
                return 1933002;
            case 3010183:
                return 1933012;
            case 3010204:
                return 1933026;
            case 3010217:
                return 1933027;
            case 3010219:
                return 1933028;
            case 3010220:
                return 1933029;
            case 3010221:
                return 1933030;
            case 3010226:
                return 1933031;
            case 3010230:
                return 1933002;
            case 3010241:
                return 1933019;
            case 3010242:
                return 1933007;
            case 3010253:
                return 1933013;
            case 3010255:
                return 1933022;
            case 3010266:
                return 1933933;
            case 3010279:
                return 1933352;
            case 3010282:
                return 1933035;
            case 3010283:
                return 1933036;
            case 3010285:
                return 1933099;
            case 3010286:
                return 1933038;
            case 3010287:
                return 1933039;
            case 3010299:
                return 1933006;
            case 3010304:
                return 1933028;
            case 3010305:
                return 1933032;
            case 3010306:
                return 1933021;
            case 3010312:
                return 1933040;
            case 3010323:
                return 1933000;
            case 3010338:
                return 1933008;
            case 3010350:
                return 1933006;
            case 3010355:
                return 1933042;
            case 3010359:
                return 1933035;
            case 3010362:
                return 1933043;
            case 3010366:
                return 1933028;
            case 3010367:
                return 1933004;
            case 3010400:
                return 1933042;
            case 3010401:
                return 1933041;
            case 3010412:
                return 1933028;
            case 3010423:
                return 1933371;
            case 3010424:
                return 1933046;
            case 3010462:
                return 1933047;
            case 3010473:
                return 1933003;
            case 3010480:
                return 1933006;
            case 3010483:
                return 1933020;
            case 3010485:
                return 1933012;
            case 3010489:
                return 1933023;
            case 3010495:
                return 1933049;
            case 3010501:
                return 1933352;
            case 3010506:
                return 1933352;
            case 3010527:
                return 1933004;
            case 3010528:
                return 1933007;
            case 3010571:
                return 1933371;
            case 3010583:
                return 1933050;
            case 3010590:
                return 1933051;
            case 3010592:
                return 1933099;
            case 3010595:
                return 1933052;
            case 3010599:
                return 1933053;
            case 3010610:
                return 1933054;
            case 3010651:
                return 1933056;
            case 3010652:
                return 1933057;
            case 3010653:
                return 1933058;
            case 3010654:
                return 1933059;
            case 3010655:
                return 1933060;
            case 3010656:
                return 1933061;
            case 3010682:
                return 1933047;
            case 3010700:
                return 1933064;
            case 3010703:
                return 1933043;
            case 3010704:
                return 1933065;
            case 3010705:
                return 1933352;
            case 3010706:
                return 1933005;
            case 3010708:
                return 1933066;
            case 3010719:
                return 1933069;
            case 3010742:
                return 1933072;
            case 3010743:
                return 1933073;
            case 3010747:
                return 1933075;
            case 3010748:
                return 1933076;
            case 3010749:
                return 1933077;
            case 3010750:
                return 1933078;
            case 3010751:
                return 1933079;
            case 3010761:
                return 1933080;
            case 3010779:
                return 1933082;
            case 3010780:
                return 1933081;
            case 3010783:
                return 1933083;
            case 3010794:
                return 1933084;
            case 3010811:
                return 1933087;
            case 3010812:
                return 1933085;
            case 3010813:
                return 1933086;
            case 3010824:
                return 1933089;
            case 3010825:
                return 1933090;
            case 3010826:
                return 1933091;
            case 3010827:
                return 1933092;
            case 3010828:
                return 1933093;
            case 3010829:
                return 1933094;
            case 3010830:
                return 1933095;
            case 3010831:
                return 1933096;
            case 3010832:
                return 1933097;
            case 3010835:
                return 1933098;
            case 3010837:
                return 1933103;
            case 3010838:
                return 1933102;
            case 3010839:
                return 1933067;
            case 3010842:
                return 1933099;
            case 3010843:
                return 1933100;
            case 3010844:
                return 1933101;
            case 3010855:
                return 1933028;
            case 3010876:
                return 1933105;
            case 3010878:
                return 1933106;
            case 3010883:
                return 1933036;
            case 3010889:
                return 1933010;
            case 3010890:
                return 1933011;
            case 3010925:
                return 1933080;
            case 3010930:
                return 1933038;
            case 3010936:
                return 1933107;
            case 3010955:
                Random rand = new Random();
                int luck = rand.nextInt(100);
                if (luck <= 50) {
                    return 1933047;
                }
                if (luck > 50) {
                    return 1933049;
                }
            case 3010964:
                return 1933105;
            case 3010969:
                return 1933069;
            case 3010980:
                return 1933110;
            case 3010988:
                return 1933113;
            case 3010989:
                return 1933114;
            case 3010990:
                return 1933115;
            case 3010991:
                return 1933116;
            case 3010992:
                return 1933117;
            case 3010993:
                return 1933118;
            case 3010994:
                return 1933119;
            case 3010995:
                return 1933120;
            case 3010996:
                return 1933121;
            case 3010997:
                return 1933122;
            case 3010998:
                return 1933123;
            case 3015000:
                return 1933111;
            case 3015002:
                return 1933112;

            case 3015008:
                return 1933138;
            case 3015013:
                return 1933137;
            case 3015014:
                return 1933139;
            case 3015015:
                return 1933124;
            case 3015016:
                return 1933125;
            case 3015017:
                return 1933126;
            case 3015018:
                return 1933127;
            case 3015019:
                return 1933128;
            case 3015020:
                return 1933129;
            case 3015021:
                return 1933130;
            case 3015022:
                return 1933131;
            case 3015023:
                return 1933132;
            case 3015024:
                return 1933133;
            case 3015025:
                return 1933134;
            case 3015026:
                return 1933135;
            case 3015027:
                return 1933136;
            case 3015031:
                return 1933141;
            case 3015035:
                return 1933147;
            case 3015048:
                return 1933144;
            case 3015049:
                return 1933145;
            case 3015050:
                return 1933146;
            case 3015999:
                return 1933388;
            default:
                return 0;
        }
    }

    public static boolean isKatara(int itemId) {
        return itemId / 10000 == 134;
    }

    public static boolean isDagger(int itemId) {
        return itemId / 10000 == 133;
    }

    public static boolean isApplicableSkill(int skil) {
        return skil < 40000000 && (skil % 10000 < 8000 || skil % 10000 > 8003); //no additional/decent skills
    }

    public static boolean isApplicableSkill_(int skil) { //not applicable to saving but is more of temporary
        return skil >= 90000000 || (skil % 10000 >= 8000 && skil % 10000 <= 8003);
    }

    public static boolean isTablet(int itemId) {
        return itemId / 1000 == 2047;
    }

    public static int getSuccessTablet(final int scrollId, final int level) {
        if (scrollId % 1000 / 100 == 2) { //2047_2_00 = armor, 2047_3_00 = accessory
            switch (level) {
                case 0:
                    return 70;
                case 1:
                    return 55;
                case 2:
                    return 43;
                case 3:
                    return 33;
                case 4:
                    return 26;
                case 5:
                    return 20;
                case 6:
                    return 16;
                case 7:
                    return 12;
                case 8:
                    return 10;
                default:
                    return 7;
            }
        } else if (scrollId % 1000 / 100 == 3) {
            switch (level) {
                case 0:
                    return 70;
                case 1:
                    return 35;
                case 2:
                    return 18;
                case 3:
                    return 12;
                default:
                    return 7;
            }
        } else {
            switch (level) {
                case 0:
                    return 70;
                case 1:
                    return 50; //-20
                case 2:
                    return 36; //-14
                case 3:
                    return 26; //-10
                case 4:
                    return 19; //-7
                case 5:
                    return 14; //-5
                case 6:
                    return 10; //-4
                default:
                    return 7;  //-3
            }
        }
    }

    public static int getCurseTablet(final int scrollId, final int level) {
        if (scrollId % 1000 / 100 == 2) { //2047_2_00 = armor, 2047_3_00 = accessory
            switch (level) {
                case 0:
                    return 10;
                case 1:
                    return 12;
                case 2:
                    return 16;
                case 3:
                    return 20;
                case 4:
                    return 26;
                case 5:
                    return 33;
                case 6:
                    return 43;
                case 7:
                    return 55;
                case 8:
                    return 70;
                default:
                    return 100;
            }
        } else if (scrollId % 1000 / 100 == 3) {
            switch (level) {
                case 0:
                    return 12;
                case 1:
                    return 18;
                case 2:
                    return 35;
                case 3:
                    return 70;
                default:
                    return 100;
            }
        } else {
            switch (level) {
                case 0:
                    return 10;
                case 1:
                    return 14; //+4
                case 2:
                    return 19; //+5
                case 3:
                    return 26; //+7
                case 4:
                    return 36; //+10
                case 5:
                    return 50; //+14
                case 6:
                    return 70; //+20
                default:
                    return 100;  //+30
            }
        }
    }

    public static boolean isAccessory(final int itemId) {
        return (itemId >= 1010000 && itemId < 1040000) || (itemId >= 1122000 && itemId < 1153000) || (itemId >= 1112000 && itemId < 1113000);
    }

    public static boolean potentialIDFits(final int potentialID, final int newstate, final int i) {
        //first line is always the best
        //but, sometimes it is possible to get second/third line as well
        //may seem like big chance, but it's not as it grabs random potential ID anyway
        if (newstate == 7) {
            return (i == 0 || Randomizer.nextInt(10) == 0 ? potentialID >= 30000 : potentialID >= 20000 && potentialID < 30000);
        } else if (newstate == 6) {
            return (i == 0 || Randomizer.nextInt(10) == 0 ? potentialID >= 20000 && potentialID < 30000 : potentialID >= 10000 && potentialID < 20000);
        } else if (newstate == 5) {
            return (i == 0 || Randomizer.nextInt(10) == 0 ? potentialID >= 10000 && potentialID < 20000 : potentialID < 10000);
        } else {
            return false;
        }
    }

    public static boolean optionTypeFits(final int optionType, final int itemId) {
        switch (optionType) {
            case 10: //weapon
                return isWeapon(itemId);
            case 11: //any armor
                return !isWeapon(itemId);
            case 20: //shield??????????
                return itemId / 10000 == 109; //just a gues
            case 21: //pet equip?????????
                return itemId / 10000 == 180; //???LOL
            case 40: //face accessory
                return isAccessory(itemId);
            case 51: //hat
                return itemId / 10000 == 100;
            case 52: //cape
                return itemId / 10000 == 110;
            case 53: //top/bottom/overall
                return itemId / 10000 == 104 || itemId / 10000 == 105 || itemId / 10000 == 106;
            case 54: //glove
                return itemId / 10000 == 108;
            case 55: //shoe
                return itemId / 10000 == 107;
            case 90:
                return false; //half this stuff doesnt even work
            default:
                return true;
        }
    }

    public static boolean isJobFamily(final int baseJob, final int currentJob) {
        return currentJob >= baseJob && currentJob / 100 == baseJob / 100;
    }

    public static boolean isKOC(final int job) {
        return job >= 1000 && job < 2000;
    }

    public static boolean isAran(final int job) {
        return job >= 2000 && job <= 2112 && job != 2001;
    }

    public static boolean isAdventurer(final int job) {
        return job >= 0 && job < 1000;
    }

    public static boolean isCygnus(final int job) {
        return job >= 1000 && job <= 1512;
    }

    public static int getBofForJob(final int job) {
        if (isAdventurer(job)) {
            return 12;
        } else if (isKOC(job)) {
            return 10000012;
        }
        return 20000012;
    }

    public static final boolean isMountItemAvailable(final int mountid, final int jobid) {
        if (jobid != 900 && mountid / 10000 == 190) {
            if (isKOC(jobid)) {
                if (mountid < 1902005 || mountid > 1902007) {
                    return false;
                }
            } else if (isAdventurer(jobid)) {
                if (mountid < 1902000 || mountid > 1902002) {
                    return false;
                }
            } else if (isAran(jobid)) {
                if (mountid < 1902015 || mountid > 1902018) {
                    return false;
                }
            }
        }
        return true;
    }

    public static boolean isEvanDragonItem(final int itemId) {
        return itemId >= 1940000 && itemId < 1980000; //194 = mask, 195 = pendant, 196 = wings, 197 = tail
    }

    public static boolean canScroll(final int itemId) {
        return itemId / 100000 != 19 && itemId / 100000 != 16; //no mech/taming/dragon
    }

    public static boolean canHammer(final int itemId) {
        switch (itemId) {
            case 1122000:
            case 1122076: //ht, chaos ht
                return false;
        }
        if (!canScroll(itemId)) {
            return false;
        }
        return true;
    }
    public static int[] owlItems = new int[]{
        1082002, // work gloves
        2070005,
        2070006,
        1022047,
        1102041,
        2044705,
        2340000, // white scroll
        2040017,
        1092030,
        2040804};

    public static int getMasterySkill(final int job) {
        if (job >= 1410 && job <= 1412) {
            return 14100000;
        } else if (job >= 410 && job <= 412) {
            return 4100000;
        } else if (job >= 520 && job <= 522) {
            return 5200000;
        }
        return 0;
    }

    public static int getExpRate_Below10(final int job) {
        if (GameConstants.isAran(job) || GameConstants.isKOC(job)) {
            return 5;
        }
        return 1;
    }

    public static int getExpRate_Quest(final int level) {
        return 1;
    }

    public static String getCashBlockedMsg(final int id) {
        switch (id) {
            case 5062000:
                //cube
                return "这个东西只能通过自由市场玩家NPC";
        }
        return "这个道具无法购买\r\n未来有机会开放购买。";
    }

    public static boolean isCustomReactItem(final int rid, final int iid, final int original) {
        if (rid == 2008006) { //orbis pq LOL
            return iid == (Calendar.getInstance().get(Calendar.DAY_OF_WEEK) + 4001055);
            //4001056 = sunday. 4001062 = saturday
        } else {
            return iid == original;
        }
    }
// Custom Balloon Tips on the Login Screen
    private static final List<Balloon> lBalloon = Arrays.asList(
            new Balloon("欢迎来到" + LoginServer.getServerName(), 236, 122),
            new Balloon("禁止开外挂", 0, 276),
            new Balloon("游戏愉快", 196, 263));

    public static List<Balloon> getBalloons() {
        return lBalloon;
    }

    public static int getJobNumber(int jobz) {
        int job = (jobz % 1000);
        if (job / 100 == 0) {
            return 0; //beginner
        } else if (job / 10 == 0) {
            return 1;
        } else {
            return 2 + (job % 10);
        }
    }

    public static boolean is新手职业(int job) {
        switch (job) {
            case 0:
            case 1000:
            case 2000:
            case 2001:
            case 2002:
            case 2003:
            case 2004:
            case 2005:
            case 3000:
            case 3001:
            case 3002:
            case 5000:
            case 6000:
            case 6001:
            case 10000:
            case 11000:
                return true;
        }
        return false;
    }

    public static boolean isCarnivalMaps(int mapid) {
        return mapid / 100000 == 9800 && (mapid % 10 == 1 || mapid % 1000 == 100);

    }

    public static boolean isForceRespawn(int mapid) {
        switch (mapid) {
            case 103000800: //kerning PQ crocs
            case 925100100: //crocs and stuff
            case 100010000:
                return true;
            default:
                return mapid / 100000 == 9800 && (mapid % 10 == 1 || mapid % 1000 == 100);
        }
    }

    public static int getFishingTime(boolean vip, boolean gm) {
        return gm ? 1000 : (vip ? 120000 : 120000);
    }

    public static int getCustomSpawnID(int summoner, int def) {
        switch (summoner) {
            case 9400589:
            case 9400748: //MV
                return 9400706; //jr
            default:
                return def;
        }
    }

    public static boolean canForfeit(int questid) {
        switch (questid) {
            case 20000:
            case 20010:
            case 20015: //cygnus quests
            case 20020:
            case 2312:
                return false;
            default:
                return true;
        }
    }

    public static boolean isGMEquip(final int itemId) {
        switch (itemId) {
            case 1002140://维泽特帽
            case 1042003://维泽特西装
            case 1062007://维泽特西裤
            case 1322013://维泽特手提包
                return true;
        }
        return false;
    }

    public static boolean isEventMap(final int mapid) {
        return (mapid >= 109010000 && mapid < 109050000) || (mapid > 109050001 && mapid < 109090000) || (mapid >= 809040000 && mapid <= 809040100);
    }

    public static boolean isExpChair(final int itemid) {

        switch (itemid / 10000) {
            case 302:
                return true;
            default:
                return false;
        }
    }

    public static boolean isFishingMap(int mapId) {
        switch (mapId) {
            case 749050500:
            case 741000200:
            case 741000201:
            case 741000202:
            case 741000203:
            case 741000204:
            case 741000205:
            case 741000206:
            case 741000207:
            case 741000208:
            case 749050501:
            case 749050502:
            case 910000000:
                return true;
            default:
                return false;
        }
    }

    public static boolean isChair(final int itemid) {
        return itemid / 10000 == 302;
    }

    public static int getMaxDamage(int level, int jobid, int skillid) {
        int max = 0;

        if (level < 20) {
            max += 900;
        } else if (level < 30) {
            max += 1800;
        } else if (level < 40) {
            max += 5000;
        } else if (level < 50) {
            max += 7000;
        } else if (level < 60) {
            max += 8000;
        } else if (level < 70) {
            max += 9000;
        } else if (level < 80) {
            max += 10000;
        } else if (level < 90) {
            max += 11000;
        } else if (level < 100) {
            max += 12000;
        } else if (level < 110) {
            max += 13000;
        } else {
            max = 500000;
        }
        if (isCygnus(jobid)) {
            max += 1000;
        }
        if (skillid == 21110004) {
            max *= 3;
        } else if (skillid == 1111005) {
            max *= 2;
        } else if (skillid == 21100004 || skillid == 4211006) {
            max *= 1.5;
        }
        return max;
    }

    public static boolean isElseSkill(int id) {
        switch (id) {
            case 10001009:
            case 20001009:
            case 1009:   // 武陵道场技能
            case 1020:   // 金字塔技能
            case 10001020:
            case 20001020:
            case 3221001:// 光速神弩
            case 4211006:// 枫币炸弹
            case 3221007:
            case 1221011:
                return true;
        }
        return false;
    }

    public static boolean Novice_Skill(int skill) {
        switch (skill) {
            case 1000://新手 蜗牛壳
            case 10001000://新手 蜗牛壳
            case 20001000://狂郎  蜗牛壳
                return true;
        }
        return false;
    }

    private static double getAttackRangeBySkill(AttackInfo attack) {
        double defRange = 0;
        switch (attack.skill) {
            case 21120006: // 极冰暴风
                defRange = 800000.0;
                break;
            case 2121007: // 火流星
            case 2221007: // 暴风雪
            case 2321008: // 天怒
                defRange = 750000.0;
                break;
            case 15111007://鲸噬
            case 2221006: // 闪电连击
            case 3101005: // 炸弹箭
            case 21101003:// 强化连击
            case 15111006://闪光击    
                defRange = 600000.0;
                break;
            case 2111003:
                defRange = 400000.0;
                break;
            case 4001344: // 双飞斩
            case 1121008: // 无双剑舞
                defRange = 350000.0;
                break;
            case 2211002: // 冰风暴
                defRange = 300000.0;
                break;
            case 5110001: // 蓄能激发
            case 2311004: // 圣光
            case 2211003: // 落雷凝聚
            case 2001005: // 魔力爪
                defRange = 250000.0;
                break;
            case 5221004:// 迅雷
            case 2321007: // 天使之箭
                defRange = 200000.0;
                break;
            case 20001000: // 蜗牛投掷术
            case 1000: // 蜗牛投掷术
                defRange = 120000.0;
                break;
            case 12111005://火牢术屏障
            case 12111006://火风暴
                defRange = 400000.0;
                break;
        }
        return defRange;
    }

    private static double getAttackRangeByWeapon(MapleCharacter chr) {
        IItem weapon_item = chr.getInventory(MapleInventoryType.EQUIPPED).getItem((byte) -11);
        MapleWeaponType weapon = weapon_item == null ? MapleWeaponType.没有武器 : GameConstants.getWeaponType(weapon_item.getItemId());
        switch (weapon) {
            case 枪:       // 矛
                return 200000;
            case 拳套:     // 拳套
                return 250000;
            case 火枪:     // 火枪
            case 弩:       // 弩
            case 弓:       // 弓
                return 180000;
            default:
                return 100000;
        }
    }

    public static double getAttackRange(MapleCharacter chr, MapleStatEffect def, AttackInfo attack) {
        int rangeInc = chr.getStat().defRange;// 处理远程职业
        double base = 450.0;// 基础
        double defRange = ((base + rangeInc) * (base + rangeInc));// 基础范围
        if (def != null) {
            // 计算范围((maxX * maxX) + (maxY * maxY)) + (技能范围 * 技能范围))
            defRange += def.getMaxDistanceSq() + (def.getRange() * def.getRange());
            if (getAttackRangeBySkill(attack) != 0) {// 直接指定技能范围
                defRange = getAttackRangeBySkill(attack);
            }
        } else {// 普通攻击
            defRange = getAttackRangeByWeapon(chr);// 从武器获取范围
        }
        return defRange;
    }

    public static boolean isMonsterSpawn(int id) {
        switch (id) {
            case 220060000:
            case 220060100:
            case 220060200:
            case 220060300:
            case 220070000:// 遗忘的时间之路<1> 6230400 6230500
            case 220070100:// 遗忘的时间之路<2> 8140200 8140300
            case 220070200:// 遗忘的时间之路<3> 7130010
            case 220070300:// 遗忘的时间之路<4> 8142000
            case 270010100:// 回忆之路1 2600701 2600700
            case 270010200:// 回忆之路2 2600702 2600700
            case 270010300:// 回忆之路3 2600703 2600700
            case 270010400:// 回忆之路4 2600704 2600703 2600700
            case 270010500:// 回忆之路5 2600704 2600700
            case 270020100:// 悔恨之路1 2600706 2600700
            case 270020200:// 悔恨之路2 2600707 2600700
            case 270020300:// 悔恨之路3 2600708 2600700
            case 270020400:// 悔恨之路4 2600709 2600708 2600700
            case 270020500:// 悔恨之路5 2600709 2600700
            case 270030100:// 忘却之路1 2600711 2600700
            case 270030200:// 忘却之路2 2600712 2600700
            case 270030300:// 忘却之路3 2600713 2600700
            case 270030400:// 忘却之路4 2600714 2600713 2600700
            case 270030500:// 忘却之路5 2600714	
            case 220060201://  弯曲的时间
            case 220060301://  纠结的时间
            case 220070201://  毁坏的时间
            case 220070301://  禁忌的时间  
            case 741020101:
            case 741020102:
                return true;
        }
        return false;
    }

    public static boolean isBossMap(int id) {
        switch (id) {
            case 220080001:// 动力室
            case 280030000:// 残暴炎魔祭坛
            case 551030200:// 梦幻主题公园
            case 240060000:// 试炼之穴I
            case 240060100:// 试炼之穴II
            case 240060200:// 闇黑龙王洞穴
            case 800040208:// 城堡走廊：武器仓库
            case 801040003:// 迎宾室
            case 801040100:// 基地内部
                return true;
        }
        return false;
    }

    public static boolean isNotToMap(int id) {
        return id >= 211060000 && id <= 211061000;
    }

    public static boolean isNotTo(int id) {
        switch (id) {
            case 211060010:
            case 211060100:
            case 211060200:
            case 211060300:
            case 211060400:
            case 211060500:
            case 211060600:
            case 211060610:
            case 211060620:
            case 211060700:
            case 211060800:
            case 211060810:
            case 211060820:
            case 211060830:
            case 211060900:
                return true;
        }
        return false;
    }

    public static boolean isNotTo(int id, String portal) {
        if (id == 211060010 && portal.equals("east00")) {
            return true;
        }
        if (id == 211060100 && portal.equals("west00")) {
            return true;
        }
        if (id == 211060100 && portal.equals("east00")) {
            return true;
        }
        if (id == 211060200 && portal.equals("west00")) {
            return true;
        }
        if (id == 211060200 && portal.equals("east00")) {
            return true;
        }
        if (id == 211060300 && portal.equals("east00")) {
            return true;
        }
        if (id == 211060400 && portal.equals("west00")) {
            return true;
        }
        if (id == 211060400 && portal.equals("out00")) {
            return true;
        }
        if (id == 211060400 && portal.equals("east00")) {
            return true;
        }
        if (id == 211060410 && portal.equals("in01")) {
            return true;
        }
        if (id == 211060500 && portal.equals("east00")) {
            return true;
        }
        if (id == 211060600 && portal.equals("out00")) {
            return true;
        }
        if (id == 211060600 && portal.equals("out01")) {
            return true;
        }
        if (id == 211060600 && portal.equals("east00")) {
            return true;
        }
        if (id == 211060600 && portal.equals("west00")) {
            return true;
        }
        if (id == 211060610 && portal.equals("in01")) {
            return true;
        }
        if (id == 211060620 && portal.equals("in01")) {
            return true;
        }
        if (id == 211060700 && portal.equals("east00")) {
            return true;
        }
        if (id == 211060800 && portal.equals("out00")) {
            return true;
        }
        if (id == 211060800 && portal.equals("out01")) {
            return true;
        }
        if (id == 211060800 && portal.equals("out10")) {
            return true;
        }
        if (id == 211060800 && portal.equals("out11")) {
            return true;
        }
        if (id == 211060800 && portal.equals("out20")) {
            return true;
        }
        if (id == 211060800 && portal.equals("east00")) {
            return true;
        }
        if (id == 211060800 && portal.equals("up00")) {
            return true;
        }
        if (id == 211060801 && portal.equals("east00")) {
            return true;
        }
        if (id == 211060801 && portal.equals("down00")) {
            return true;
        }
        if (id == 211060810 && portal.equals("in01")) {
            return true;
        }
        if (id == 211060810 && portal.equals("in00")) {
            return true;
        }
        if (id == 211060820 && portal.equals("in00")) {
            return true;
        }
        if (id == 211060820 && portal.equals("in01")) {
            return true;
        }
        if (id == 211060830 && portal.equals("in00")) {
            return true;
        }
        if (id == 211060830 && portal.equals("in01")) {
            return true;
        }
        if (id == 211060900 && portal.equals("west00")) {
            return true;
        }
        if (id == 211061000 && portal.equals("west00")) {
            return true;
        }
        if (id == 211061000 && portal.equals("out00")) {
            return true;
        }
        if (id == 211061000 && portal.equals("out10")) {
            return true;
        }
        if (id == 211061000 && portal.equals("out20")) {
            return true;
        }
        if (id == 211061000 && portal.equals("up00")) {
            return true;
        }
        if (id == 211061001 && portal.equals("down00")) {
            return true;
        }
        if (id == 211061001 && portal.equals("st00")) {
            return true;
        }
        return false;
    }

    public static short getSlotMax(int itemId) {
        switch (itemId) {
            case 4030003:
            case 4030004:
            case 4030005:
                return 1;
            case 4001168:
            case 4031306:
            case 4031307:
            case 3993000:
            case 3993002:
            case 3993003:
                return 100;
            case 5220010:
            case 5220013:
                return 1000;
            case 5220020:
                return 2000;
            case 2000005:
            case 2000019:
            case 2001505:
                return 1000;
        }
        return 0;
    }

    public static short getStat(int itemId, int def) {
        switch (itemId) {
            case 1002419:
                return 5;
            case 1002959:
                return 25;
            case 1142002:
                return 10;
            case 1122121:
                return 7;
        }
        return (short) def;
    }

    public static short getHpMp(int itemId, int def) {
        switch (itemId) {
            case 1122121:
                return 500;
            case 1142002:
            case 1002959:
                return 1000;
        }
        return (short) def;
    }

    public static short getATK(int itemId, int def) {
        switch (itemId) {
            case 1122121:
                return 3;
            case 1002959:
                return 4;
            case 1142002:
                return 9;
        }
        return (short) def;
    }

    public static short getDEF(int itemId, int def) {
        switch (itemId) {
            case 1122121:
                return 250;
            case 1002959:
                return 500;
        }
        return (short) def;
    }

    public static boolean isPickupRestricted(int itemId) {
        return itemId == 4030003 || itemId == 4030004;
    }

    public static boolean isDropRestricted(int itemId) {
        return itemId == 3012000 || itemId == 4030004 || itemId == 1052098 || itemId == 1052202;
    }

    public final static int[] aisuWeapens = {
            1302333,
            1312199,
            1322250,
            1332274,
            1342101,
            1372222,
            1382259,
            1402251,
            1412177,
            1422184,
            1432214,
            1442268,
            1452252,
            1462239,
            1472261,
            1482216,
            1492231
    };

    /**
     * 怪物手册增加的四维+hp/mp
     */
    public final static short[] monsterBookUpStat = {
            0,
            10,
            20,
            40,
            80,
            160,
            320,
            640,
            1280
    };

    public static boolean isEvan(final int job) {
        return job == 2001 || (job >= 2200 && job <= 2218);
    }

    public static boolean isMercedes(final int job) {
        return job == 2002 || (job >= 2300 && job <= 2312);
    }

    public static boolean isDemon(final int job) {
        return job == 3001 || (job >= 3100 && job <= 3112);
    }

    public static boolean isResist(final int job) {
        return job >= 3000 && job <= 3512;
    }

    public static boolean isCannon(final int job) {
        return job == 1 || job == 501 || (job >= 530 && job <= 532);
    }

    public static boolean isDualBlade(final int job) {
        return job >= 430 && job <= 434;
    }

    public static boolean isNoSpawn(int mapID) {
        return mapID == 809040100 || mapID == 925020010 || mapID == 925020011 || mapID == 925020012 || mapID == 925020013 || mapID == 925020014 || mapID == 682020000 || mapID == 980010000 || mapID == 980010100 || mapID == 980010200 || mapID == 980010300 || mapID == 980010020;
    }
        
}
