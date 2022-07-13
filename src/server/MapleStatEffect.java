package server;

import java.awt.Point;
import java.awt.Rectangle;
import java.io.Serializable;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.EnumMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;

import client.ISkill;
import client.MapleBuffStat;
import client.MapleCharacter;
import client.MapleCoolDownValueHolder;
import client.MapleDisease;
import client.MapleStat;
import client.PlayerStats;
import client.SkillFactory;
import client.inventory.IItem;
import client.inventory.MapleInventory;
import client.inventory.MapleInventoryType;
import client.status.MonsterStatus;
import client.status.MonsterStatusEffect;
import constants.GameConstants;
import constants.SkillType.GM;
import constants.SkillType.传说;
import constants.SkillType.冒险之技;
import constants.SkillType.打手;
import constants.SkillType.拳霸;
import constants.SkillType.格斗家;
import constants.SkillType.破风使者3;
import constants.SkillType.神枪手;
import constants.SkillType.贵族;
import constants.SkillType.闪雷悍将3;
import handling.channel.ChannelServer;
import provider.MapleData;
import provider.MapleDataTool;
import server.MapleCarnivalFactory.MCSkill;
import server.Timer.BuffTimer;
import server.life.MapleMonster;
import server.maps.MapleDoor;
import server.maps.MapleMap;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import server.maps.MapleMist;
import server.maps.MapleSummon;
import server.maps.SummonMovementType;
import tools.MaplePacketCreator;
import tools.Pair;

public class MapleStatEffect implements Serializable {

    private static final long serialVersionUID = 9179541993413738569L;
    private byte mastery, mhpR, mmpR, mobCount, attackCount, bulletCount;
    private short hp, mp, watk, matk, wdef, mdef, acc, avoid, hands, speed, jump, mpCon, hpCon, damage, prop, ehp, emp,
            ewatk, ewdef, emdef, thaw, dotTime;
    private double hpR, mpR;
    private int duration, sourceid, moveTo, x, y, z, itemCon, itemConNo, bulletConsume, moneyCon, cooldown, morphId = 0,
            expinc, exp, fatigue, mhp_temp, mmp_temp;
    private boolean overTime, skill, partyBuff = true;
    private List<Pair<MapleBuffStat, Integer>> statups;
    private Map<MonsterStatus, Integer> monsterStatus;
    private Point lt, rb;
    private int expBuff, itemup, mesoup, cashup, berserk, illusion, booster, berserk2, cp, nuffSkill;
    private byte level;
    private int range = 0;
    // private List<Pair<Integer, Integer>> randomMorph;
    private List<MapleDisease> cureDebuffs;

    public static final MapleStatEffect loadSkillEffectFromData(final MapleData source, final int skillid,
            final boolean overtime, final byte level) {
        return loadFromData(source, skillid, true, overtime, level);
    }

    public static final MapleStatEffect loadItemEffectFromData(final MapleData source, final int itemid) {
        return loadFromData(source, itemid, false, false, (byte) 1);
    }

    private static void addBuffStatPairToListIfNotZero(final List<Pair<MapleBuffStat, Integer>> list,
            final MapleBuffStat buffstat, final Integer val) {
        if (val != 0) {
            list.add(new Pair<>(buffstat, val));
        }
    }

    private static MapleStatEffect loadFromData(final MapleData source, final int sourceid, final boolean skill,
            final boolean overTime, final byte level) {
        final MapleStatEffect ret = new MapleStatEffect();
        ret.sourceid = sourceid;
        ret.skill = skill;
        ret.level = level;
        if (source == null) {
            return ret;
        }
        ret.duration = MapleDataTool.getIntConvert("time", source, -1);
        ret.hp = (short) MapleDataTool.getInt("hp", source, 0);
        ret.hpR = MapleDataTool.getInt("hpR", source, 0) / 100.0;
        ret.mp = (short) MapleDataTool.getInt("mp", source, 0);
        ret.mpR = MapleDataTool.getInt("mpR", source, 0) / 100.0;
        ret.mhpR = (byte) MapleDataTool.getInt("mhpR", source, 0);
        ret.mmpR = (byte) MapleDataTool.getInt("mmpR", source, 0);
        ret.mhp_temp = (byte) MapleDataTool.getInt("mhp_temp", source, 0);
        ret.mmp_temp = (byte) MapleDataTool.getInt("mmp_temp", source, 0);
        ret.mpCon = (short) MapleDataTool.getInt("mpCon", source, 0);
        ret.hpCon = (short) MapleDataTool.getInt("hpCon", source, 0);
        ret.prop = (short) MapleDataTool.getInt("prop", source, 100);
        ret.cooldown = MapleDataTool.getInt("cooltime", source, 0);
        ret.expinc = MapleDataTool.getInt("expinc", source, 0);
        ret.exp = MapleDataTool.getInt("exp", source, 0);
        ret.morphId = MapleDataTool.getInt("morph", source, 0);
        ret.cp = MapleDataTool.getInt("cp", source, 0);
        ret.nuffSkill = MapleDataTool.getInt("nuffSkill", source, 0);
        ret.mobCount = (byte) MapleDataTool.getInt("mobCount", source, 1);
        ret.fatigue = MapleDataTool.getInt("Fatigue", source, 0);
        ret.thaw = (short) MapleDataTool.getInt("thaw", source, 0);
        ret.dotTime = (short) MapleDataTool.getInt("dotTime", source, 0);
        if (skill) {
            switch (sourceid) {
                case 1100002:
                case 1100003:
                case 1200002:
                case 1200003:
                case 1300002:
                case 1300003:
                case 3100001:
                case 3200001:
                case 11101002:
                case 13101002:
                    ret.mobCount = 6;
                    break;
            }
        }

        /*
         * final MapleData randMorph = source.getChildByPath("morphRandom");
         * if (randMorph != null) {
         * for (MapleData data : randMorph.getChildren()) {
         * ret.randomMorph.add(new Pair(
         * MapleDataTool.getInt("morph", data, 0),
         * MapleDataTool.getIntConvert("prop", data, 0)));
         * }
         * }
         */
        if (!ret.skill && ret.duration > -1) {
            ret.overTime = true;
        } else {
            ret.duration *= 1000; // items have their times stored in ms, of course
            ret.overTime = overTime || ret.isMorph() || ret.isPirateMorph() || ret.isFinalAttack();
        }
        final ArrayList<Pair<MapleBuffStat, Integer>> statups = new ArrayList<>();

        ret.mastery = (byte) MapleDataTool.getInt("mastery", source, 0);
        ret.watk = (short) MapleDataTool.getInt("pad", source, 0);
        ret.wdef = (short) MapleDataTool.getInt("pdd", source, 0);
        ret.matk = (short) MapleDataTool.getInt("mad", source, 0);
        ret.mdef = (short) MapleDataTool.getInt("mdd", source, 0);
        ret.ehp = (short) MapleDataTool.getInt("emhp", source, 0);
        ret.emp = (short) MapleDataTool.getInt("emmp", source, 0);
        ret.ewatk = (short) MapleDataTool.getInt("epad", source, 0);
        ret.ewdef = (short) MapleDataTool.getInt("epdd", source, 0);
        ret.emdef = (short) MapleDataTool.getInt("emdd", source, 0);
        ret.acc = (short) MapleDataTool.getIntConvert("acc", source, 0);
        ret.avoid = (short) MapleDataTool.getInt("eva", source, 0);
        ret.speed = (short) MapleDataTool.getInt("speed", source, 0);
        ret.jump = (short) MapleDataTool.getInt("jump", source, 0);
        ret.expBuff = MapleDataTool.getInt("expBuff", source, 0);
        ret.range = MapleDataTool.getInt("range", source, 0);
        ret.cashup = MapleDataTool.getInt("cashBuff", source, 0);
        ret.itemup = MapleDataTool.getInt("itemupbyitem", source, 0);
        ret.mesoup = MapleDataTool.getInt("mesoupbyitem", source, 0);
        ret.berserk = MapleDataTool.getInt("berserk", source, 0);
        ret.berserk2 = MapleDataTool.getInt("berserk2", source, 0);
        ret.booster = MapleDataTool.getInt("booster", source, 0);
        ret.illusion = MapleDataTool.getInt("illusion", source, 0);

        List<MapleDisease> cure = new ArrayList<>(5);
        if (MapleDataTool.getInt("poison", source, 0) > 0) {
            cure.add(MapleDisease.POISON);
        }
        if (MapleDataTool.getInt("seal", source, 0) > 0) {
            cure.add(MapleDisease.SEAL);
        }
        if (MapleDataTool.getInt("darkness", source, 0) > 0) {
            cure.add(MapleDisease.DARKNESS);
        }
        if (MapleDataTool.getInt("weakness", source, 0) > 0) {
            cure.add(MapleDisease.WEAKEN);
        }
        if (MapleDataTool.getInt("curse", source, 0) > 0) {
            cure.add(MapleDisease.CURSE);
        }
        ret.cureDebuffs = cure;

        final MapleData ltd = source.getChildByPath("lt");
        if (ltd != null) {
            ret.lt = (Point) ltd.getData();
            ret.rb = (Point) source.getChildByPath("rb").getData();
        }

        ret.x = MapleDataTool.getInt("x", source, 0);
        ret.y = MapleDataTool.getInt("y", source, 0);
        ret.z = MapleDataTool.getInt("z", source, 0);
        ret.damage = (short) MapleDataTool.getIntConvert("damage", source, 100);
        ret.attackCount = (byte) MapleDataTool.getIntConvert("attackCount", source, 1);
        ret.bulletCount = (byte) MapleDataTool.getIntConvert("bulletCount", source, 1);
        ret.bulletConsume = MapleDataTool.getIntConvert("bulletConsume", source, 0);
        ret.moneyCon = MapleDataTool.getIntConvert("moneyCon", source, 0);

        ret.itemCon = MapleDataTool.getInt("itemCon", source, 0);
        ret.itemConNo = MapleDataTool.getInt("itemConNo", source, 0);
        ret.moveTo = MapleDataTool.getInt("moveTo", source, -1);

        Map<MonsterStatus, Integer> monsterStatus = new EnumMap<>(MonsterStatus.class);
        if (ret.overTime && ret.getSummonMovementType() == null && !ret.isEnergyCharge()) {
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.WATK, Integer.valueOf(ret.watk));
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.WDEF, Integer.valueOf(ret.wdef));
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.MATK, Integer.valueOf(ret.matk));
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.MDEF, Integer.valueOf(ret.mdef));
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.ACC, Integer.valueOf(ret.acc));
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.AVOID, Integer.valueOf(ret.avoid));
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.SPEED, Integer.valueOf(ret.speed));
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.JUMP, Integer.valueOf(ret.jump));
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.MAXHP, (int) ret.mhpR);
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.MAXMP, (int) ret.mmpR);
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.EXPRATE, ret.expBuff); // EXP
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.ACASH_RATE, ret.cashup); // custom
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.DROP_RATE, ret.itemup * 200); // defaults to 2x
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.MESO_RATE, ret.mesoup * 200); // defaults to 2x
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.BERSERK_FURY, ret.berserk2);
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.BOOSTER, ret.booster);
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.HP_LOSS_GUARD, (int) ret.thaw);
            addBuffStatPairToListIfNotZero(statups, MapleBuffStat.ILLUSION, ret.illusion);

        }
        if (skill) { // hack because we can't get from the datafile...
            switch (sourceid) {
                // case 9001003:
                // statups.clear();
                // // 攻击
                // statups.add(new Pair<>(MapleBuffStat.WATK, 10000));
                // statups.add(new Pair<>(MapleBuffStat.MATK, 10000));
                // // 防御
                // statups.add(new Pair<>(MapleBuffStat.WDEF, 10000));
                // statups.add(new Pair<>(MapleBuffStat.MDEF, 10000));
                // // 命中率
                // statups.add(new Pair<>(MapleBuffStat.ACC, 10000));
                // // 回避率
                // statups.add(new Pair<>(MapleBuffStat.AVOID, 10000));
                // break;
                case 2001002: // 魔力之盾
                case 12001001: // 魔心防御
                    statups.add(new Pair<>(MapleBuffStat.MAGIC_GUARD, ret.x));
                    break;
                case 2301003: // 神圣之光
                    statups.add(new Pair<>(MapleBuffStat.INVINCIBLE, ret.x));
                    break;
                case 9001004: // 终极隐藏
                    ret.duration = 60 * 120 * 1000;
                    statups.add(new Pair<>(MapleBuffStat.DARKSIGHT, ret.x));
                    break;
                case 13101006:// 风影漫步
                    statups.add(new Pair<>(MapleBuffStat.WIND_WALK, ret.x));
                    break;
                case 4001003: // 隐身术
                case 14001003:// 隐身术
                    statups.add(new Pair<>(MapleBuffStat.DARKSIGHT, ret.x));
                    break;
                case 4211003: // 勇者掠夺术
                    statups.add(new Pair<>(MapleBuffStat.PICKPOCKET, ret.x));
                    break;
                case 4211005: // 枫币护盾
                    statups.add(new Pair<>(MapleBuffStat.MESOGUARD, ret.x));
                    break;
                case 4111001: // 幸运术
                    statups.add(new Pair<>(MapleBuffStat.MESOUP, ret.x));
                    break;
                case 4111002: // 影分身
                case 14111000:// 影分身
                    statups.add(new Pair<>(MapleBuffStat.SHADOWPARTNER, ret.x));
                    break;
                case 21120002:// 终极攻击
                    statups.add(new Pair<>(MapleBuffStat.FINALATTACK, ret.x));
                    break;
                case 13101002:// 终极攻击
                    statups.add(new Pair<>(MapleBuffStat.ARIANT_COSS_IMU2, ret.x));
                    break;
                case 11101002:// 终极攻击
                    statups.add(new Pair<>(MapleBuffStat.FINALATTACK, (int) ret.prop));
                    break;
                case 3101004:// 无形之箭
                case 3201004:// 无形之箭
                case 2311002:// 时空门
                case 13101003:// 无形之箭
                case 33101003:// 无形之箭
                case 8001:
                    statups.add(new Pair<>(MapleBuffStat.SOULARROW, ret.x));
                    break;
                case 1211006: // 寒冰之棍
                case 1211003: // 烈焰之剑
                case 1211004: // 烈焰之棍
                case 1211005: // 寒冰之剑
                case 1211007: // 雷鸣之剑
                case 1211008: // 雷鸣之棍
                case 1221003: // 圣灵之剑
                case 1221004: // 圣灵之棍
                case 11111007:// 灵魂属性
                case 21111005:// 寒冰属性
                case 15101006:// 雷鸣
                    statups.add(new Pair<>(MapleBuffStat.WK_CHARGE, ret.x));
                    break;
                case 12101005:
                case 22121001: // Elemental Reset
                    statups.add(new Pair<>(MapleBuffStat.ELEMENT_RESET, ret.x));
                    break;
                case 3121008:
                    statups.add(new Pair<>(MapleBuffStat.CONCENTRATE, ret.x));
                    break;
                case 5110001: // Energy Charge
                case 15100004:
                    statups.add(new Pair<>(MapleBuffStat.ENERGY_CHARGE, 0));
                    break;
                case 1101005: // booster
                case 1101004:
                case 1201005:
                case 1201004:
                case 1301005:
                case 1301004:
                case 3101002:
                case 3201002:
                case 4101003:
                case 4201002:
                case 2111005: // 极速咏唱
                case 2211005:
                case 5101006:
                case 5201003:
                case 11101001:
                case 12101004:
                case 13101001:
                case 14101002:
                case 15101002:
                case 21001003: // 神速之矛
                case 22141002: // Magic Booster
                case 4301002:
                case 32101005:
                case 33001003:
                case 35101006:
                case 35001003: // TEMP.BOOSTER
                    statups.add(new Pair<>(MapleBuffStat.BOOSTER, ret.x));
                    break;
                case 5121009:
                case 15111005:
                    statups.add(new Pair<>(MapleBuffStat.SPEED_INFUSION, ret.x));
                    break;
                case 4321000: // tornado spin uses same buffstats
                    ret.duration = 1000;
                    statups.add(new Pair<>(MapleBuffStat.DASH_SPEED, 100 + ret.x));
                    statups.add(new Pair<>(MapleBuffStat.DASH_JUMP, ret.y)); // always 0 but its there
                    break;
                case 5001005: // Dash
                case 15001003:
                    statups.add(new Pair<>(MapleBuffStat.DASH_SPEED, ret.x));
                    statups.add(new Pair<>(MapleBuffStat.DASH_JUMP, ret.y));
                    break;
                case 1101007: // pguard
                case 1201007:
                    statups.add(new Pair<>(MapleBuffStat.POWERGUARD, ret.x));
                    break;

                case 1301007: // hyper body
                case 9001008:
                case 8003:
                case 10008003:
                case 20008003:
                case 20018003:
                case 30008003:
                    statups.add(new Pair<>(MapleBuffStat.MAXHP, ret.x));
                    statups.add(new Pair<>(MapleBuffStat.MAXMP, ret.y));
                    break;
                case 1001: // 团队治愈
                case 10001001:
                case 20001001:
                    statups.add(new Pair<>(MapleBuffStat.RECOVERY, ret.x));
                    break;
                case 1111002: // combo
                case 11111001: // combo
                    statups.add(new Pair<>(MapleBuffStat.COMBO, 1));
                    break;
                case 21120007: // combo barrier
                    statups.add(new Pair<>(MapleBuffStat.COMBO_BARRIER, ret.x));
                    break;
                case 5211006: // Homing Beacon
                case 5220011: // Bullseye
                case 22151002: // killer wings
                    ret.duration = 60 * 120000;
                    statups.add(new Pair<>(MapleBuffStat.HOMING_BEACON, ret.x));
                    break;
                case 1011: // Berserk fury
                case 10001011:
                case 20001011:
                case 20011011:
                case 30001011:
                    statups.add(new Pair<>(MapleBuffStat.BERSERK_FURY, 1));
                    break;
                case 1010:
                case 10001010:// Invincible Barrier
                case 20001010:
                case 20011010:
                case 30001010:
                    statups.add(new Pair<>(MapleBuffStat.DIVINE_BODY, 1));
                    break;
                case 1311006: // dragon roar
                    ret.hpR = -ret.x / 100.0;
                    statups.add(new Pair<>(MapleBuffStat.DRAGON_ROAR, ret.y));
                    break;

                case 4331002:
                    statups.add(new Pair<>(MapleBuffStat.MIRROR_IMAGE, ret.x));
                    break;
                case 4331003:
                    ret.duration = 60 * 1000;
                    statups.add(new Pair<>(MapleBuffStat.OWL_SPIRIT, ret.y));
                    break;
                case 1311008: // dragon blood
                    statups.add(new Pair<>(MapleBuffStat.DRAGONBLOOD, ret.x));
                    break;
                case 1121000: // maple warrior, all classes
                case 1221000:
                case 1321000:
                case 2121000:
                case 2221000:
                case 2321000:
                case 3121000:
                case 3221000:
                case 4121000:
                case 4221000:
                case 5121000:
                case 5221000:
                case 21121000: // Aran - Maple Warrior
                case 22171000:
                case 4341000:
                case 32121007:
                case 33121007:
                case 35121007:
                    statups.add(new Pair<>(MapleBuffStat.MAPLE_WARRIOR, ret.x));
                    break;
                case 15111006: // 闪光击
                    // statups.add(new Pair<>(MapleBuffStat.SPARK, ret.x));
                    statups.add(new Pair<>(MapleBuffStat.SPARK, (int) ret.mobCount));
                    break;
                case 3121002: // sharp eyes bow master
                case 3221002: // sharp eyes marksmen
                case 33121004:
                case 8002:
                case 10008002:
                case 20008002:
                case 20018002:
                case 30008002:
                    statups.add(new Pair<>(MapleBuffStat.SHARP_EYES, ret.x << 8 | ret.y));
                    break;

                case 21111001: // Body Pressure
                    statups.add(new Pair<>(MapleBuffStat.SMART_KNOCKBACK, ret.x));
                    break;
                case 21101003: // Body Pressure
                    statups.add(new Pair<>(MapleBuffStat.BODY_PRESSURE, ret.x));
                    break;
                case 21100005: // Combo Drain
                case 32101004:
                    statups.add(new Pair<>(MapleBuffStat.COMBO_DRAIN, ret.x));
                    break;

                case 22181003: // soul stone
                    statups.add(new Pair<>(MapleBuffStat.SOUL_STONE, 1));
                    break;
                case 4001002: // disorder
                case 14001002: // cygnus disorder
                    monsterStatus.put(MonsterStatus.WATK, ret.x);
                    monsterStatus.put(MonsterStatus.WDEF, ret.y);
                    break;
                case 5221009: // Mind Control
                    monsterStatus.put(MonsterStatus.HYPNOTIZE, 1);
                    break;
                case 1201006: // threaten
                    monsterStatus.put(MonsterStatus.WATK, ret.x);
                    monsterStatus.put(MonsterStatus.WDEF, ret.y);
                    break;
                case 1211002: // charged blow
                case 1111008: // shout
                case 4211002: // assaulter
                case 3101005: // arrow bomb
                case 1111005: // coma: sword
                case 1111006: // coma: axe
                case 4221007: // boomerang step
                case 5101002: // Backspin Blow
                case 5101003: // Double Uppercut
                case 5121004: // Demolition
                case 5121005: // Snatch
                case 5121007: // Barrage
                case 5201004: // pirate blank shot
                case 4121008: // Ninja Storm
                case 22151001:
                case 4201004: // steal, new
                case 5111002: // energy blast
                case 15101005:
                    monsterStatus.put(MonsterStatus.STUN, 1);
                    break;
                case 4221003:
                case 4121003:

                    monsterStatus.put(MonsterStatus.SHOWDOWN, ret.x);
                    monsterStatus.put(MonsterStatus.MDEF, ret.x);
                    monsterStatus.put(MonsterStatus.WDEF, ret.x);
                    break;
                case 2201004: // cold beam
                case 2211002: // ice strike
                case 3211003: // blizzard
                case 2211006: // il elemental compo
                case 2221007: // Blizzard
                case 5211005: // Ice Splitter
                case 2121006: // Paralyze
                case 21120006: // Tempest
                    monsterStatus.put(MonsterStatus.FREEZE, 1);
                    ret.duration *= 2; // freezing skills are a little strange
                    break;
                case 2101003: // fp slow
                case 2201003: // il slow
                case 12101001:
                    monsterStatus.put(MonsterStatus.SPEED, ret.x);
                    break;
                case 2101005: // poison breath
                case 2111006: // fp elemental compo
                case 2121003: // ice demon
                case 2221003: // fire demon
                case 神枪手.火焰喷射:
                    // case 3111003: //烈火箭
                    monsterStatus.put(MonsterStatus.POISON, 1);
                    break;
                case 4121004: // Ninja ambush
                case 4221004:
                    monsterStatus.put(MonsterStatus.NINJA_AMBUSH, (int) ret.damage);
                    break;
                case 2311005:
                    monsterStatus.put(MonsterStatus.DOOM, 1);
                    break;
                case 4341006:
                case 3111002: // puppet ranger
                case 3211002: // puppet sniper
                case 13111004: // puppet cygnus
                case 5211001: // Pirate octopus summon
                case 5220002: // wrath of the octopi
                    statups.add(new Pair<>(MapleBuffStat.PUPPET, 1));
                    break;
                case 3211005: // golden eagle
                case 3111005: // golden hawk
                    statups.add(new Pair<>(MapleBuffStat.SUMMON, 1));
                    monsterStatus.put(MonsterStatus.STUN, 1);
                    break;
                case 3221005: // frostprey
                case 2121005: // elquines
                    statups.add(new Pair<>(MapleBuffStat.SUMMON, 1));
                    monsterStatus.put(MonsterStatus.FREEZE, 1);
                    break;
                case 2311006: // summon dragon
                case 3121006: // phoenix
                case 2221005: // ifrit
                case 2321003: // bahamut
                case 1321007: // Beholder
                case 5211002: // Pirate bird summon
                case 11001004:
                case 12001004:
                case 12111004: // Itrit
                case 13001004:
                case 14001005:
                case 15001004:
                    statups.add(new Pair<>(MapleBuffStat.SUMMON, 1));
                    break;
                case 2311003: // hs
                case 9001002: // GM hs
                    statups.add(new Pair<>(MapleBuffStat.HOLY_SYMBOL, ret.x));
                    break;
                case 2211004: // il seal
                case 2111004: // fp seal
                case 12111002: // cygnus seal
                    monsterStatus.put(MonsterStatus.SEAL, 1);
                    break;
                case 4111003: // shadow web
                case 14111001:
                    monsterStatus.put(MonsterStatus.SHADOW_WEB, 1);
                    break;
                case 4121006: // spirit claw
                    statups.add(new Pair<>(MapleBuffStat.SPIRIT_CLAW, 0));
                    break;
                case 2121004:
                case 2221004:
                case 2321004: // Infinity
                    statups.add(new Pair<>(MapleBuffStat.INFINITY, ret.x));
                    break;
                case 1121002:
                case 1221002:
                case 1321002: // Stance
                case 21121003: // Aran - Freezing Posture
                    statups.add(new Pair<>(MapleBuffStat.STANCE, (int) ret.prop));
                    break;
                case 1005: // Echo of Hero
                case 10001005: // Cygnus Echo
                case 20001005: // Aran
                case 20011005: // Evan
                case 30001005:
                    statups.add(new Pair<>(MapleBuffStat.ECHO_OF_HERO, ret.x));
                    break;
                case 1026: // Soaring
                case 10001026: // Soaring
                case 20001026: // Soaring
                case 20011026: // Soaring
                case 30001026:
                    ret.duration = 60 * 120 * 1000; // because it seems to dispel asap.
                    statups.add(new Pair<>(MapleBuffStat.SOARING, 1));
                    break;
                case 2121002: // mana reflection
                case 2221002:
                case 2321002:
                    statups.add(new Pair<>(MapleBuffStat.MANA_REFLECTION, 1));
                    break;
                case 2321005: // holy shield
                    statups.add(new Pair<>(MapleBuffStat.HOLY_SHIELD, ret.x));
                    break;
                case 3121007: // Hamstring
                    statups.add(new Pair<>(MapleBuffStat.HAMSTRING, ret.x));
                    monsterStatus.put(MonsterStatus.SPEED, ret.x);
                    break;
                case 3221006: // Blind
                    statups.add(new Pair<>(MapleBuffStat.BLIND, ret.x));
                    monsterStatus.put(MonsterStatus.ACC, ret.x);
                    break;
                default:
                    break;
            }
        }
        if (ret.isMonsterRiding()) {
            statups.add(new Pair<>(MapleBuffStat.MONSTER_RIDING, 1));
        }
        if (ret.isMorph() || ret.isPirateMorph()) {
            // statups.add(new Pair<>(MapleBuffStat.MORPH, ret.getMorph()));
        }
        ret.monsterStatus = monsterStatus;
        statups.trimToSize();
        ret.statups = statups;

        return ret;
    }

    /**
     * @param applyto
     * @param obj
     * @param attack  damage done by the skill
     */
    public final void applyPassive(final MapleCharacter applyto, final MapleMapObject obj) {
        if (makeChanceResult()) {
            switch (sourceid) {
                case 2100000:// 魔力吸收
                case 2200000:// 魔力吸收
                case 2300000:// 魔力吸收
                    if (obj == null || obj.getType() != MapleMapObjectType.MONSTER) {
                        return;
                    }
                    final MapleMonster mob = (MapleMonster) obj; // x is absorb percentage
                    if (!mob.getStats().isBoss()) {
                        final int absorbMp = Math.min((int) (mob.getMobMaxMp() * (getX() / 70.0)), mob.getMp());
                        if (absorbMp > 0 && mob.canAbsorbMP()) {
                            mob.absorbMP(absorbMp);
                            applyto.getStat().setMp((short) (applyto.getStat().getMp() + absorbMp));
                            applyto.getClient().sendPacket(MaplePacketCreator.showOwnBuffEffect(sourceid, 1));
                            applyto.getMap().broadcastMessage(applyto,
                                    MaplePacketCreator.showBuffeffect(applyto.getId(), sourceid, 1), false);
                        }
                    }
                    break;
            }
        }
    }

    public final boolean applyTo(MapleCharacter chr) {
        return applyTo(chr, chr, true, null, duration);
    }

    public final boolean applyTo(MapleCharacter chr, int durationa) {
        return applyTo(chr, chr, true, null, durationa);
    }

    public final boolean applyTo(MapleCharacter chr, int durationa, final boolean dc) {
        return applyTo(chr, chr, true, null, durationa, dc);
    }

    public final boolean applyTo(MapleCharacter chr, Point pos) {
        return applyTo(chr, chr, true, pos, duration);
    }

    private boolean applyTo(final MapleCharacter applyfrom, final MapleCharacter applyto, final boolean primary,
            final Point pos) {
        return applyTo(applyfrom, applyto, primary, pos, duration);
    }

    public final boolean applyTo(final MapleCharacter applyfrom, final MapleCharacter applyto, final boolean primary,
            final Point pos, int newDuration) {
        return applyTo(applyfrom, applyto, primary, pos, newDuration, false);
    }

    public final boolean applyTo(final MapleCharacter applyfrom, final MapleCharacter applyto, final boolean primary,
            final Point pos, int newDuration, final boolean dc) {
        if (isHeal() && (applyfrom.getMapId() == 749040100 || applyto.getMapId() == 749040100)) {
            return false; // z
            // } else if (isSoaring() && !applyfrom.getMap().canSoar()) {
            // return false;
        }
        if (sourceid == 2022166) {
            applyto.getClient().sendPacket(MaplePacketCreator.enableActions());
            return false;
        }
        int hpchange = calcHPChange(applyfrom, primary, dc);
        int mpchange = calcMPChange(applyfrom, primary, dc);

        final PlayerStats stat = applyto.getStat();
        if (primary) {
            if (itemConNo != 0 && !applyto.isClone()) {
                if (applyto.haveItem(itemCon, itemConNo, false, true)) {
                    MapleInventoryManipulator.removeById(applyto.getClient(), GameConstants.getInventoryType(itemCon),
                            itemCon, itemConNo, false, true);
                }
            }
        } else if (!primary && isResurrection()) {
            hpchange = stat.getMaxHp();
            applyto.setStance(0); // TODO fix death bug, player doesnt spawn on other screen
            applyto.isSquadPlayerID();
        }
        if (isDispel() && makeChanceResult()) {
            applyto.dispelDebuffs();
        } else if (isHeroWill()) {
            applyto.dispelDebuff(MapleDisease.SEDUCE);
        } else if (cureDebuffs != null && cureDebuffs.size() > 0) {
            for (final MapleDisease debuff : cureDebuffs) {
                applyfrom.dispelDebuff(debuff);
            }
        } else if (isMPRecovery()) {
            final int toDecreaseHP = ((stat.getMaxHp() / 100) * 10);
            if (stat.getHp() > toDecreaseHP) {
                hpchange += -toDecreaseHP; // -10% of max HP
                mpchange += ((toDecreaseHP / 100) * getY());
            } else {
                hpchange = stat.getHp() == 1 ? 0 : stat.getHp() - 1;
            }
        }
        final Map<MapleStat, Integer> hpmpupdate = new EnumMap<>(MapleStat.class);
        if (hpchange != 0) {
            if (hpchange < 0 && (-hpchange) > stat.getHp() && !applyto.hasDisease(MapleDisease.ZOMBIFY)) {
                return false;
            }
            stat.setHp(stat.getHp() + hpchange);
        }
        if (mpchange != 0) {
            if (mpchange < 0 && (-mpchange) > stat.getMp()) {
                return false;
            }
            // short converting needs math.min cuz of overflow
            stat.setMp(stat.getMp() + mpchange);

            hpmpupdate.put(MapleStat.MP, Integer.valueOf(stat.getMp()));
        }
        hpmpupdate.put(MapleStat.HP, Integer.valueOf(stat.getHp()));

        applyto.getClient().sendPacket(MaplePacketCreator.updatePlayerStats(hpmpupdate, true, applyto));

        if (expinc != 0) {
            applyto.gainExp(expinc, true, true, false);
            // applyto.getClient().sendPacket(MaplePacketCreator.showSpecialEffect(19));
        } else if (GameConstants.isMonsterCard(sourceid)) {
            applyto.getMonsterBook().addCard(applyto.getClient(), sourceid);
        } else if (isSpiritClaw() && !applyto.isClone()) {
            MapleInventory use = applyto.getInventory(MapleInventoryType.USE);
            IItem item;
            for (int i = 0; i <= use.getSlotLimit(); i++) { // impose order...
                item = use.getItem((byte) i);
                if (item != null) {
                    if (GameConstants.isThrowingStar(item.getItemId()) && item.getQuantity() >= 200) {
                        MapleInventoryManipulator.removeById(applyto.getClient(), MapleInventoryType.USE,
                                item.getItemId(), 200, false, true);
                        break;
                    }
                }
            }
        } else if (cp != 0 && applyto.getCarnivalParty() != null) {
            applyto.getCarnivalParty().addCP(applyto, cp);
            applyto.CPUpdate(false, applyto.getAvailableCP(), applyto.getTotalCP(), 0);
            for (MapleCharacter chr : applyto.getMap().getCharactersThreadsafe()) {
                chr.CPUpdate(true, applyto.getCarnivalParty().getAvailableCP(), applyto.getCarnivalParty().getTotalCP(),
                        applyto.getCarnivalParty().getTeam());
            }
        } else if (nuffSkill != 0 && applyto.getParty() != null) {
            final MCSkill skil = MapleCarnivalFactory.getInstance().getSkill(nuffSkill);
            if (skil != null) {
                final MapleDisease dis = skil.getDisease();
                for (MapleCharacter chr : applyto.getMap().getCharactersThreadsafe()) {
                    if (chr.getParty() == null || (chr.getParty().getId() != applyto.getParty().getId())) {
                        if (skil.targetsAll || Randomizer.nextBoolean()) {
                            if (dis == null) {
                                chr.dispel();
                            } else if (skil.getMobSkill() == null) {
                                chr.getDiseaseBuff(dis, 1, 30000, MapleDisease.getByDisease(dis), 1);
                            } else {
                                chr.getDiseaseBuff(dis, skil.getMobSkill());
                            }
                            if (!skil.targetsAll) {
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (overTime && !isEnergyCharge()) {
            applyBuffEffect(applyfrom, applyto, primary, newDuration, dc);
        }
        if (skill) {
            // removeMonsterBuff(applyfrom);
        }
        if (primary) {
            if ((overTime || isHeal()) && !isEnergyCharge()) {
                applyBuff(applyfrom, newDuration);
            }
            if (isMonsterBuff()) {
                applyMonsterBuff(applyfrom);
            }
        }
        if (this.getFatigue() != 0) {
            applyto.getMount().setFatigue((byte) (applyto.getMount().getTiredness() + this.getFatigue()));
        }

        final SummonMovementType summonMovementType = getSummonMovementType();
        if (summonMovementType != null) {
            final MapleSummon tosummon = new MapleSummon(applyfrom, this,
                    new Point(pos == null ? applyfrom.getPosition() : pos), summonMovementType);
            if (!tosummon.isPuppet()) {
                applyfrom.getCheatTracker().resetSummonAttack();
            }
            applyfrom.getMap().spawnSummon(tosummon);
            applyfrom.getSummons().put(sourceid, tosummon);
            tosummon.addHP((short) x);
            if (isBeholder()) {
                tosummon.addHP((short) 1);
            }
            if (sourceid == 4341006) {
                applyfrom.cancelEffectFromBuffStat(MapleBuffStat.MIRROR_IMAGE);
            }
        } else if (isMagicDoor()) { // Magic Door

            MapleDoor door = new MapleDoor(applyto, new Point(/* pos == null ? */applyto.getTruePosition() /* : pos */),
                    sourceid); // Current Map door
            if (door.getTownPortal() != null) {
                applyto.getMap().spawnDoor(door);
                applyto.addDoor(door);
                MapleDoor townDoor = new MapleDoor(door); // Town door
                applyto.addDoor(townDoor);
                door.getTown().spawnDoor(townDoor);
                door.first = false;
                if (applyto.getParty() != null) { // update town doors
                    applyto.silentPartyUpdate();
                }
            } else {
                applyto.dropMessage(5, "无法使用时空门，村庄不可容纳。");
            }

        } else if (isMist()) {
            int addx = 0;
            final Rectangle bounds = calculateBoundingBox(pos != null ? pos : applyfrom.getPosition(),
                    applyfrom.isFacingLeft(), addx);
            final MapleMist mist = new MapleMist(bounds, applyfrom, this);
            applyfrom.getMap().spawnMist(mist, getDuration(), false);
            // final Rectangle bounds = calculateBoundingBox(pos != null ? pos : new
            // Point(applyfrom.getPosition()), applyfrom.isFacingLeft());
            // final MapleMist mist = new MapleMist(bounds, applyfrom, this);
            // applyfrom.getMap().spawnMist(mist, getDuration(), false);

            /*
             * } else if (isMist()) {
             * Rectangle bounds = calculateBoundingBox(applyfrom.getPosition(),
             * applyfrom.isFacingLeft());
             * MapleMist mist = new MapleMist(bounds, applyfrom, this);
             * //applyfrom.getMap().spawnMist(mist, getDuration(), sourceid == 2111003,
             * false);
             * applyfrom.getMap().spawnMist(mist, getDuration(), false);
             */
        } else if (isTimeLeap()) { // Time Leap
            for (MapleCoolDownValueHolder i : applyto.getCooldowns()) {
                if (i.skillId != 5121010) {
                    applyto.removeCooldown(i.skillId);
                    applyto.getClient().sendPacket(MaplePacketCreator.skillCooldown(i.skillId, 0));
                }
            }
        } else {
            for (WeakReference<MapleCharacter> chrz : applyto.getClones()) {
                if (chrz.get() != null) {
                    applyTo(chrz.get(), chrz.get(), primary, pos, newDuration);
                }
            }
        }
        return true;
    }

    public final boolean applyReturnScroll(final MapleCharacter applyto) {
        if (moveTo != -1) {
            // if (applyto.getMap().getReturnMapId() != applyto.getMapId()) {
            MapleMap target;
            if (moveTo == 999999999) {
                target = applyto.getMap().getReturnMap();
            } else {
                target = ChannelServer.getInstance(applyto.getClient().getChannel()).getMapFactory().getMap(moveTo);
                if (target.getId() / 10000000 != 60 && applyto.getMapId() / 10000000 != 61) {
                    if (target.getId() / 10000000 != 21 && applyto.getMapId() / 10000000 != 20) {
                        if (target.getId() / 10000000 != applyto.getMapId() / 10000000) {
                            if (target.getId() == 120000000 && applyto.getMapId() != 120000000) {
                                applyto.changeMap(target, target.getPortal(0));
                                return true;
                            } else if (target.getId() != 120000000 && applyto.getMapId() == 120000000) {
                                applyto.changeMap(target, target.getPortal(0));
                                return true;
                            }
                            return false;
                        }
                    }
                }
            }
            applyto.changeMap(target, target.getPortal(0));
            return true;
            // }
        }
        return false;
    }

    private boolean isSoulStone() {
        return skill && sourceid == 22181003;
    }

    private void applyBuff(final MapleCharacter applyfrom, int newDuration) {
        if (isSoulStone()) {
            if (applyfrom.getParty() != null) {
                int membrs = 0;
                for (MapleCharacter chr : applyfrom.getMap().getCharactersThreadsafe()) {
                    if (chr.getParty() != null && chr.getParty().equals(applyfrom.getParty()) && chr.isAlive()) {
                        membrs++;
                    }
                }
                List<MapleCharacter> awarded = new ArrayList<>();
                while (awarded.size() < Math.min(membrs, y)) {
                    for (MapleCharacter chr : applyfrom.getMap().getCharactersThreadsafe()) {
                        if (chr.isAlive() && chr.getParty().equals(applyfrom.getParty()) && !awarded.contains(chr)
                                && Randomizer.nextInt(y) == 0) {
                            awarded.add(chr);
                        }
                    }
                }
                for (MapleCharacter chr : awarded) {
                    applyTo(applyfrom, chr, false, null, newDuration);
                    chr.getClient().sendPacket(MaplePacketCreator.showOwnBuffEffect(sourceid, 2));
                    chr.getMap().broadcastMessage(chr, MaplePacketCreator.showBuffeffect(chr.getId(), sourceid, 2),
                            false);
                }
            }
        } else if (isPartyBuff() && (applyfrom.getParty() != null || isGmBuff())) {
            final Rectangle bounds = calculateBoundingBox(applyfrom.getPosition(), applyfrom.isFacingLeft());
            final List<MapleMapObject> affecteds = applyfrom.getMap().getMapObjectsInRect(bounds,
                    Arrays.asList(MapleMapObjectType.PLAYER));

            for (final MapleMapObject affectedmo : affecteds) {
                final MapleCharacter affected = (MapleCharacter) affectedmo;

                if (affected != applyfrom && (isGmBuff() || applyfrom.getParty().equals(affected.getParty()))) {
                    if ((isResurrection() && !affected.isAlive()) || (!isResurrection() && affected.isAlive())) {
                        applyTo(applyfrom, affected, false, null, newDuration);
                        affected.getClient().sendPacket(MaplePacketCreator.showOwnBuffEffect(sourceid, 2));
                        affected.getMap().broadcastMessage(affected,
                                MaplePacketCreator.showBuffeffect(affected.getId(), sourceid, 2), false);
                    }
                    if (isTimeLeap()) {
                        for (MapleCoolDownValueHolder i : affected.getCooldowns()) {
                            if (i.skillId != 5121010) {
                                affected.removeCooldown(i.skillId);
                                affected.getClient().sendPacket(MaplePacketCreator.skillCooldown(i.skillId, 0));
                            }
                        }
                    }
                }
            }
        }
    }

    // private void removeMonsterBuff(final MapleCharacter applyfrom) {
    // List<MonsterStatus> cancel = new ArrayList<MonsterStatus>();
    // ;
    // switch (sourceid) {
    // case 1111007:
    // cancel.add(MonsterStatus.WDEF);
    // cancel.add(MonsterStatus.WEAPON_DEFENSE_UP);
    // //cancel.add(MonsterStatus.WEAPON_IMMUNITY);
    // break;
    // case 1211009:
    // cancel.add(MonsterStatus.MDEF);
    // cancel.add(MonsterStatus.MAGIC_DEFENSE_UP);
    // //cancel.add(MonsterStatus.MAGIC_IMMUNITY);
    // break;
    // case 1311007:
    // cancel.add(MonsterStatus.WATK);
    // cancel.add(MonsterStatus.WEAPON_ATTACK_UP);
    // cancel.add(MonsterStatus.MATK);
    // cancel.add(MonsterStatus.MAGIC_ATTACK_UP);
    // break;
    // default:
    // return;
    // }
    // final Rectangle bounds = calculateBoundingBox(applyfrom.getPosition(),
    // applyfrom.isFacingLeft());
    // final List<MapleMapObject> affected =
    // applyfrom.getMap().getMapObjectsInRect(bounds,
    // Arrays.asList(MapleMapObjectType.MONSTER));
    // int i = 0;
    //
    // for (final MapleMapObject mo : affected) {
    // if (makeChanceResult()) {
    // for (MonsterStatus stat : cancel) {
    // ((MapleMonster) mo).cancelStatus(stat);
    // }
    // }
    // i++;
    // if (i >= mobCount) {
    // break;
    // }
    // }
    // }
    public final void applyMonsterBuff(final MapleCharacter applyfrom) {
        final Rectangle bounds = calculateBoundingBox(applyfrom.getTruePosition(), applyfrom.isFacingLeft());
        final MapleMapObjectType objType = MapleMapObjectType.MONSTER;
        final List<MapleMapObject> affected = sourceid == 35111005
                ? applyfrom.getMap().getMapObjectsInRange(applyfrom.getTruePosition(), Double.POSITIVE_INFINITY,
                        Arrays.asList(objType))
                : applyfrom.getMap().getMapObjectsInRect(bounds, Arrays.asList(objType));
        int i = 0;

        for (final MapleMapObject mo : affected) {
            if (makeChanceResult()) {
                for (Map.Entry<MonsterStatus, Integer> stat : getMonsterStati().entrySet()) {
                    MapleMonster mons = (MapleMonster) mo;
                    mons.applyStatus(applyfrom,
                            new MonsterStatusEffect(stat.getKey(), stat.getValue(), sourceid, null, false), isPoison(),
                            getDuration(), true, this);

                }

            }
            i++;
            if (i >= mobCount && sourceid != 35111005) {
                break;
            }
        }
    }

    public Rectangle calculateBoundingBox(Point posFrom, boolean facingLeft, int addedRange) {
        return calculateBoundingBox(posFrom, facingLeft, this.lt, this.rb, range + addedRange);
    }

    public static Rectangle calculateBoundingBox(Point posFrom, boolean facingLeft, Point lt, Point rb, int range) {
        if ((lt == null) || (rb == null)) {
            return new Rectangle((facingLeft ? -200 - range : 0) + posFrom.x, -100 - range + posFrom.y, 200 + range,
                    100 + range);
        }
        Point myrb;
        Point mylt;
        if (facingLeft) {
            mylt = new Point(lt.x + posFrom.x - range, lt.y + posFrom.y);
            myrb = new Point(rb.x + posFrom.x, rb.y + posFrom.y);
        } else {
            myrb = new Point(lt.x * -1 + posFrom.x + range, rb.y + posFrom.y);
            mylt = new Point(rb.x * -1 + posFrom.x, lt.y + posFrom.y);
        }
        return new Rectangle(mylt.x, mylt.y, myrb.x - mylt.x, myrb.y - mylt.y);
    }

    public Rectangle calculateBoundingBox(final Point posFrom, final boolean facingLeft) {
        if (lt == null || rb == null) {
            return new Rectangle(posFrom.x, posFrom.y, facingLeft ? 1 : -1, 1);
        }
        Point mylt;
        Point myrb;
        if (facingLeft) {
            mylt = new Point(lt.x + posFrom.x, lt.y + posFrom.y);
            myrb = new Point(rb.x + posFrom.x, rb.y + posFrom.y);
        } else {
            myrb = new Point(lt.x * -1 + posFrom.x, rb.y + posFrom.y);
            mylt = new Point(rb.x * -1 + posFrom.x, lt.y + posFrom.y);
        }
        return new Rectangle(mylt.x, mylt.y, myrb.x - mylt.x, myrb.y - mylt.y);
    }

    public final void setDuration(int d) {
        this.duration = d;
    }

    public final void silentApplyBuff(final MapleCharacter chr, final long starttime, final int localDuration,
            final List<Pair<MapleBuffStat, Integer>> statup, final int cid) {
        chr.registerEffect(this, starttime,
                BuffTimer.getInstance().schedule(new CancelEffectAction(chr, this, starttime),
                        ((starttime + localDuration) - System.currentTimeMillis())),
                statup, true, localDuration, cid);
        boolean expired = (starttime + localDuration) < System.currentTimeMillis();
        if (expired) {
            chr.cancelEffect(this, false, starttime);
        }
        final SummonMovementType summonMovementType = getSummonMovementType();
        if (summonMovementType != null) {
            final MapleSummon tosummon = new MapleSummon(chr, this, chr.getPosition(), summonMovementType);
            if (!tosummon.isPuppet()) {
                chr.getCheatTracker().resetSummonAttack();
                chr.getMap().spawnSummon(tosummon);
                chr.getSummons().put(sourceid, tosummon);
                tosummon.addHP((short) x);
                if (isBeholder()) {
                    tosummon.addHP((short) 1);
                }
            }
        }
    }

    public final void applyComboBuff(final MapleCharacter applyto, int combo) {
        final List<Pair<MapleBuffStat, Integer>> stat = Collections
                .singletonList(new Pair<>(MapleBuffStat.ARAN_COMBO, combo));
        applyto.getClient().sendPacket(MaplePacketCreator.giveBuff(sourceid, 99999, stat, this)); // Hackish timing,
                                                                                                  // todo find out

        final long starttime = System.currentTimeMillis();
        applyto.registerEffect(this, starttime, null, applyto.getId());

    }

    public final void applyEnergyBuff(final MapleCharacter applyto, final boolean infinity) {
        final List<Pair<MapleBuffStat, Integer>> stat = this.statups;

        final long starttime = System.currentTimeMillis();
        if (infinity) {
            applyto.getClient().sendPacket(MaplePacketCreator.giveEnergyChargeTest(0, duration / 1000));
            applyto.registerEffect(this, starttime, null, applyto.getId());
        } else {
            applyto.cancelEffect(this, true, -1);
            applyto.getMap().broadcastMessage(applyto,
                    MaplePacketCreator.giveEnergyChargeTest(applyto.getId(), 10000, duration / 1000), false);
            final CancelEffectAction cancelAction = new CancelEffectAction(applyto, this, starttime);
            final ScheduledFuture<?> schedule = BuffTimer.getInstance().schedule(cancelAction,
                    ((starttime + duration) - System.currentTimeMillis()));
            this.statups = Collections.singletonList(new Pair<>(MapleBuffStat.ENERGY_CHARGE, 10000));
            applyto.registerEffect(this, starttime, schedule, stat, false, duration, applyto.getId());
            this.statups = stat;
        }

    }

    private void applyBuffEffect(final MapleCharacter applyfrom, final MapleCharacter applyto, final boolean primary,
            final int newDuration, final boolean dc) {
        int localDuration = newDuration;
        if (primary && applyto.getBuffedValue(MapleBuffStat.MORPH) == null) {
            localDuration = dc ? newDuration : alchemistModifyVal(applyfrom, localDuration, false);
            applyto.getMap().broadcastMessage(applyto, MaplePacketCreator.showBuffeffect(applyto.getId(), sourceid, 1),
                    false);
        }
        // 怪物手册加成buff持续时间
        double[] buffUpgrades = { 2.0, 4.0, 6.0, 12.0, 20.0, 32.0, 46.0, 62.0, 80.0, 100.0 };
        if (applyto.isGM()) {
            applyto.dropMessage(5, "buff原持续时间：" + localDuration);
        }
        localDuration += localDuration * (buffUpgrades[applyto.getMonsterBook().getBookLevel() - 1] / 100);
        if (applyto.isGM()) {
            applyto.dropMessage(5, "buff加成后持续时间：" + localDuration);
        }
        List<Pair<MapleBuffStat, Integer>> localstatups = statups;
        ArrayList<Pair<MapleBuffStat, Integer>> Selfstat = null;
        boolean normal = true;
        switch (sourceid) {
            case 2022221: // Speed Infusion
            case 2022222: {
                Selfstat = new ArrayList();
                Selfstat.add((new Pair<>(MapleBuffStat.MAXHP, mhp_temp)));
                Selfstat.add((new Pair<>(MapleBuffStat.MAXMP, mmp_temp)));
                break;
            }

            case 5121009: // Speed Infusion
            case 15111005:
            case 5001005: // Dash
            case 4321000: // tornado spin
            case 15001003: {
                applyto.getClient().sendPacket(MaplePacketCreator.givePirate(statups, localDuration / 1000, sourceid));
                applyto.getMap().broadcastMessage(applyto,
                        MaplePacketCreator.giveForeignPirate(statups, localDuration / 1000, applyto.getId(), sourceid),
                        false);
                normal = false;
                break;
            }
            case 5211006: // Homing Beacon
            case 22151002: // killer wings
            case 5220011: {// Bullseye
                if (applyto.getLinkMid() > 0) {
                    applyto.getClient().sendPacket(MaplePacketCreator.cancelHoming());
                    applyto.getClient().sendPacket(MaplePacketCreator.giveHoming(sourceid, applyto.getLinkMid()));
                } else {
                    return;
                }
                normal = false;
                break;
            }
            case 13101006:
            case 4330001:
            case 4001003:
            case 14001003: { // Dark Sight
                final List<Pair<MapleBuffStat, Integer>> stat = Collections
                        .singletonList(new Pair<>(MapleBuffStat.DARKSIGHT, 0));
                applyto.getMap().broadcastMessage(applyto,
                        MaplePacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
                break;
            }

            /*
             * case 1211008:
             * case 1211007: { //lightning
             * if (applyto.getBuffedValue(MapleBuffStat.WK_CHARGE) != null &&
             * applyto.getBuffSource(MapleBuffStat.WK_CHARGE) != sourceid) {
             * localstatups = Collections.singletonList(new
             * Pair<>(MapleBuffStat.LIGHTNING_CHARGE, 1));
             * }
             * applyto.getClient().sendPacket(MaplePacketCreator.giveBuff(sourceid,
             * localDuration, localstatups, this));
             * normal = false;
             * break;
             * }
             */
            case 1111002:
            case 11111001: { // Combo
                final List<Pair<MapleBuffStat, Integer>> stat = Collections
                        .singletonList(new Pair<>(MapleBuffStat.COMBO, 0));
                applyto.getMap().broadcastMessage(applyto,
                        MaplePacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
                break;
            }
            case 3101004:
            case 3201004:
            case 13101003: { // Soul Arrow
                final List<Pair<MapleBuffStat, Integer>> stat = Collections
                        .singletonList(new Pair<>(MapleBuffStat.SOULARROW, 0));
                applyto.getMap().broadcastMessage(applyto,
                        MaplePacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
                break;
            }
            case 4111002:
            case 14111000: { // Shadow Partne
                final List<Pair<MapleBuffStat, Integer>> stat = Collections
                        .singletonList(new Pair<>(MapleBuffStat.SHADOWPARTNER, 0));
                applyto.getMap().broadcastMessage(applyto,
                        MaplePacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
                break;
            }
            case 15111006: { // Spark
                localstatups = Collections.singletonList(new Pair<>(MapleBuffStat.SPARK, x));
                applyto.getClient()
                        .sendPacket(MaplePacketCreator.giveBuff(sourceid, localDuration, localstatups, this));
                normal = false;
                break;
            }

            case 1121010: // Enrage
                applyto.handleOrbconsume();
                break;
            default:
                /*
                 * if (sourceid == 2450000) {
                 * if (applyfrom.getBuffTimeCout(sourceid) < 1) {
                 * applyfrom.setBuffTime(sourceid, localDuration);
                 * } else {
                 * applyfrom.updateBuffTime(sourceid, localDuration);
                 * }
                 * }
                 * if (sourceid == 2022179) {
                 * if (applyfrom.getBuffTimeCout(sourceid) < 1) {
                 * applyfrom.setBuffTime(sourceid, localDuration);
                 * } else {
                 * applyfrom.updateBuffTime(sourceid, localDuration);
                 * }
                 * }
                 * if (sourceid == 2450001) {
                 * if (applyfrom.getBuffTimeCout(sourceid) < 1) {
                 * applyfrom.setBuffTime(sourceid, localDuration);
                 * } else {
                 * applyfrom.updateBuffTime(sourceid, localDuration);
                 * }
                 * }
                 * if (sourceid == 2450010) {
                 * if (applyfrom.getBuffTimeCout(sourceid) < 1) {
                 * applyfrom.setBuffTime(sourceid, localDuration);
                 * } else {
                 * applyfrom.updateBuffTime(sourceid, localDuration);
                 * }
                 * }
                 * if (sourceid == 2022530) {
                 * if (applyfrom.getBuffTimeCout(sourceid) < 1) {
                 * applyfrom.setBuffTime(sourceid, localDuration);
                 * } else {
                 * applyfrom.updateBuffTime(sourceid, localDuration);
                 * }
                 * }
                 * if (sourceid == 2022531) {
                 * if (applyfrom.getBuffTimeCout(sourceid) < 1) {
                 * applyfrom.setBuffTime(sourceid, localDuration);
                 * } else {
                 * applyfrom.updateBuffTime(sourceid, localDuration);
                 * }
                 * }
                 * 
                 * if (sourceid == 2001002) {
                 * if (applyfrom.getBuffTimeCout(sourceid) < 1) {
                 * applyfrom.setBuffTime(sourceid, localDuration);
                 * } else {
                 * applyfrom.updateBuffTime(sourceid, localDuration);
                 * }
                 * }
                 * if (sourceid == 12001001) {
                 * if (applyfrom.getBuffTimeCout(sourceid) < 1) {
                 * applyfrom.setBuffTime(sourceid, localDuration);
                 * } else {
                 * applyfrom.updateBuffTime(sourceid, localDuration);
                 * }
                 * }
                 */
                if (isMorph() || isPirateMorph()) {
                    final List<Pair<MapleBuffStat, Integer>> stat = Collections
                            .singletonList(new Pair<>(MapleBuffStat.MORPH, getMorph(applyto)));
                    applyto.getMap().broadcastMessage(applyto,
                            MaplePacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
                    Selfstat = new ArrayList();
                    Selfstat.add((new Pair<>(MapleBuffStat.JUMP, (int) getJump())));
                    Selfstat.add((new Pair<>(MapleBuffStat.WDEF, (int) getWdef())));
                    Selfstat.add((new Pair<>(MapleBuffStat.MDEF, (int) getWdef())));
                    Selfstat.add((new Pair<>(MapleBuffStat.SPEED, (int) getSpeed())));
                    Selfstat.add((new Pair<>(MapleBuffStat.MORPH, (int) getMorph(applyto))));
                } else if (isMonsterRiding()) {
                    localDuration = 2100000000;
                    final int mountid = parseMountInfo(applyto, sourceid);
                    final int mountid2 = parseMountInfo_Pure(applyto, sourceid);
                    if (mountid != 0 && mountid2 != 0) {
                        final List<Pair<MapleBuffStat, Integer>> stat = Collections
                                .singletonList(new Pair<>(MapleBuffStat.MONSTER_RIDING, 0));
                        applyto.cancelEffectFromBuffStat(MapleBuffStat.POWERGUARD);
                        applyto.cancelEffectFromBuffStat(MapleBuffStat.MANA_REFLECTION);
                        applyto.getClient().getSession()
                                .writeAndFlush(MaplePacketCreator.giveMount(mountid2, sourceid, stat));
                        applyto.getMap().broadcastMessage(applyto,
                                MaplePacketCreator.showMonsterRiding(applyto.getId(), stat, mountid, sourceid), false);
                    } else {
                        return;
                    }
                    normal = false;
                } else if (isSoaring()) {
                    localstatups = Collections.singletonList(new Pair<>(MapleBuffStat.SOARING, 1));
                    applyto.getMap().broadcastMessage(applyto,
                            MaplePacketCreator.giveForeignBuff(applyto.getId(), localstatups, this), false);
                    applyto.getClient()
                            .sendPacket(MaplePacketCreator.giveBuff(sourceid, localDuration, localstatups, this));
                    normal = false;
                    // } else if (berserk > 0) {
                    // final List<Pair<MapleBuffStat, Integer>> stat = Collections.singletonList(new
                    // Pair<>(MapleBuffStat.PYRAMID_PQ, berserk));
                    // applyto.getMap().broadcastMessage(applyto,
                    // MaplePacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
                } else if (isBerserkFury() || berserk2 > 0) {
                    final List<Pair<MapleBuffStat, Integer>> stat = Collections
                            .singletonList(new Pair<>(MapleBuffStat.BERSERK_FURY, 1));
                    applyto.getMap().broadcastMessage(applyto,
                            MaplePacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
                } else if (isDivineBody()) {
                    final List<Pair<MapleBuffStat, Integer>> stat = Collections
                            .singletonList(new Pair<>(MapleBuffStat.DIVINE_BODY, 1));
                    applyto.getMap().broadcastMessage(applyto,
                            MaplePacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
                }
                break;
        }
        if (!isMonsterRiding_()) {
            applyto.cancelEffect(this, true, -1, Selfstat == null ? localstatups : Selfstat);
        }
        // Broadcast effect to self
        if (normal && (statups.size() > 0 || (Selfstat != null && Selfstat.size() > 0))) {
            applyto.getClient().sendPacket(MaplePacketCreator.giveBuff((skill ? sourceid : -sourceid), localDuration,
                    Selfstat == null ? statups : Selfstat, this));
        }
        final long starttime = System.currentTimeMillis();
        final CancelEffectAction cancelAction = new CancelEffectAction(applyto, this, starttime);
        // System.out.println("Started effect " + sourceid + ". Duration: " +
        // localDuration + ", Actual Duration: " + (((starttime + localDuration) -
        // System.currentTimeMillis())));
        try {
            final ScheduledFuture<?> schedule = BuffTimer.getInstance().schedule(cancelAction,
                    ((starttime + localDuration) - System.currentTimeMillis()));
            applyto.registerEffect(this, starttime, schedule, Selfstat == null ? localstatups : Selfstat, false,
                    localDuration, applyfrom.getId());

        } catch (Exception ex) {
        }
        if (applyto.getDebugMessage()) {
            applyto.dropMessage("[ApplyBuffEffect] - [" + getName() + "(" + sourceid + ")] ");
        }

    }

    public static final int parseMountInfo(final MapleCharacter player, final int skillid) {
        switch (skillid) {
            case 冒险之技.怪物骑乘:
            case 贵族.怪物骑乘:
            case 传说.怪物骑乘:
                if (player.getInventory(MapleInventoryType.EQUIPPED).getItem((byte) (-118)) != null
                        && player.getInventory(MapleInventoryType.EQUIPPED).getItem((byte) (-119)) != null) {
                    return player.getInventory(MapleInventoryType.EQUIPPED).getItem((byte) (-118)).getItemId();
                }
                return parseMountInfo_Pure(player, skillid);
            default:
                return GameConstants.getMountItem(skillid);
        }
    }

    public static final int parseMountInfo_Pure(final MapleCharacter player, final int skillid) {
        switch (skillid) {
            case 冒险之技.怪物骑乘:
            case 贵族.怪物骑乘:
            case 传说.怪物骑乘:
                if (player.getInventory(MapleInventoryType.EQUIPPED).getItem((byte) (-18)) != null
                        && player.getInventory(MapleInventoryType.EQUIPPED).getItem((byte) (-19)) != null) {
                    return player.getInventory(MapleInventoryType.EQUIPPED).getItem((byte) (-18)).getItemId();
                }
                return 0;
            default:
                return GameConstants.getMountItem(skillid);
        }
    }

    private int calcHPChange(final MapleCharacter applyfrom, final boolean primary, final boolean dc) {
        int hpchange = 0;
        if (hp != 0) {
            if (!skill) {
                if (primary) {
                    hpchange += dc ? hp : alchemistModifyVal(applyfrom, hp, true);
                } else {
                    hpchange += hp;
                }
                if (applyfrom.hasDisease(MapleDisease.ZOMBIFY)) {
                    hpchange /= 2;
                }
            } else { // assumption: this is heal
                hpchange += makeHealHP(hp / 100.0, applyfrom.getStat().getTotalMagic(), 3, 5);
                if (applyfrom.hasDisease(MapleDisease.ZOMBIFY)) {
                    hpchange = -hpchange;
                }
            }
        }
        if (hpR != 0) {
            hpchange += (int) (applyfrom.getStat().getCurrentMaxHp() * hpR)
                    / (applyfrom.hasDisease(MapleDisease.ZOMBIFY) ? 2 : 1);
        }
        // actually receivers probably never get any hp when it's not heal but whatever
        if (primary) {
            if (hpCon != 0) {
                hpchange -= hpCon;
            }
        }
        switch (this.sourceid) {
            case 4211001: // Chakra
                final PlayerStats stat = applyfrom.getStat();
                int v42 = getY() + 100;
                int v38 = Randomizer.rand(1, 100) + 100;
                hpchange = (int) ((v38 * stat.getLuk() * 0.033 + stat.getDex()) * v42 * 0.002);
                hpchange += makeHealHP(getY() / 100.0, applyfrom.getStat().getTotalLuk(), 2.3, 3.5);
                break;
        }
        return hpchange;
    }

    private static int makeHealHP(double rate, double stat, double lowerfactor, double upperfactor) {
        return (int) ((Math.random() * ((int) (stat * upperfactor * rate) - (int) (stat * lowerfactor * rate) + 1))
                + (int) (stat * lowerfactor * rate));
    }

    private static int getElementalAmp(final int job) {
        switch (job) {
            case 211:
            case 212:
                return 2110001;
            case 221:
            case 222:
                return 2210001;
            case 1211:
            case 1212:
                return 12110001;
            case 2215:
            case 2216:
            case 2217:
            case 2218:
                return 22150000;
        }
        return -1;
    }

    private int calcMPChange(final MapleCharacter applyfrom, final boolean primary, final boolean dc) {
        int mpchange = 0;
        if (mp != 0) {
            if (primary) {
                mpchange += dc ? mp : alchemistModifyVal(applyfrom, mp, true);
            } else {
                mpchange += mp;
            }
        }
        if (mpR != 0) {
            mpchange += (int) (applyfrom.getStat().getCurrentMaxMp() * mpR);
        }
        if (primary) {
            if (mpCon != 0) {
                double mod = 1.0;

                final int ElemSkillId = getElementalAmp(applyfrom.getJob());
                if (ElemSkillId != -1) {
                    final ISkill amp = SkillFactory.getSkill(ElemSkillId);
                    final int ampLevel = applyfrom.getSkillLevel(amp);
                    if (ampLevel > 0) {
                        MapleStatEffect ampStat = amp.getEffect(ampLevel);
                        mod = ampStat.getX() / 100.0;
                    }
                }
                final Integer Concentrate = applyfrom.getBuffedSkill_X(MapleBuffStat.CONCENTRATE);
                final int percent_off = applyfrom.getStat().mpconReduce + (Concentrate == null ? 0 : Concentrate);
                if (applyfrom.getBuffedValue(MapleBuffStat.INFINITY) != null) {
                    mpchange = 0;
                } else {
                    mpchange -= (mpCon - (mpCon * percent_off / 100)) * mod;
                }
            }
        }
        return mpchange;
    }

    private int alchemistModifyVal(final MapleCharacter chr, final int val, final boolean withX) {
        if (!skill) {
            int offset = chr.getStat().RecoveryUP;
            final MapleStatEffect alchemistEffect = getAlchemistEffect(chr);
            if (alchemistEffect != null) {
                offset += (withX ? alchemistEffect.getX() : alchemistEffect.getY());
            } else {
                offset += 100;
            }
            return (val * offset / 100);
        }
        return val;
    }

    private MapleStatEffect getAlchemistEffect(final MapleCharacter chr) {
        ISkill al;
        switch (chr.getJob()) {
            case 411:
            case 412:
                al = SkillFactory.getSkill(4110000);
                if (chr.getSkillLevel(al) <= 0) {
                    return null;
                }
                return al.getEffect(chr.getSkillLevel(al));
            case 1411:
            case 1412:
                al = SkillFactory.getSkill(14110003);
                if (chr.getSkillLevel(al) <= 0) {
                    return null;
                }
                return al.getEffect(chr.getSkillLevel(al));
        }

        return null;
    }

    public final void setSourceId(final int newid) {
        sourceid = newid;
    }

    private boolean isGmBuff() {
        switch (sourceid) {
            case 冒险之技.英雄共鸣:
            case 贵族.英雄的回响:
            case 传说.英雄的回响:
            case GM.终极净化:
            case GM.终极轻功:
            case GM.终极祈祷:
            case GM.终极祝福:
            case GM.复活:
            case GM.终极圣火:
                return true;
            default:
                return false;
        }
    }

    public boolean isEnergyCharge() {
        return skill && (sourceid == 5110001 || sourceid == 15100004);
    }

    private boolean isMonsterBuff() {
        switch (sourceid) {
            case 1201006: // threaten
            case 2101003: // fp slow
            case 2201003: // il slow
            case 12101001: // cygnus slow
            case 2211004: // il seal
            case 2111004: // fp seal
            case 12111002: // cygnus seal
            case 2311005: // doom
            case 4111003: // shadow web
            case 14111001: // cygnus web
            case 4121004: // Ninja ambush
            case 4221004: // Ninja ambush
            case 22151001:
            case 22141003:
            case 22121000:
            case 22161002:
            case 4321002:
                return skill;
        }
        return false;
    }

    public final void setPartyBuff(boolean pb) {
        this.partyBuff = pb;
    }

    private boolean isPartyBuff() {
        if (lt == null || rb == null || !partyBuff) {
            return isSoulStone();
        }
        switch (sourceid) {
            case 1211003:
            case 1211004:
            case 1211005:
            case 1211006:
            case 1211007:
            case 1211008:
            case 1221003:
            case 1221004:
            case 11111007:
            case 12101005:
            case 4311001:
                return false;
        }
        return true;
    }

    public final boolean isHeal() {
        return sourceid == 2301002 || sourceid == 9101000;
    }

    public final boolean isResurrection() {
        return sourceid == 9001005 || sourceid == 2321006;
    }

    public final boolean isTimeLeap() {
        return sourceid == 5121010;
    }

    public final short getHp() {
        return hp;
    }

    public final short getMp() {
        return mp;
    }

    public final byte getMastery() {
        return mastery;
    }

    public final short getWatk() {
        return watk;
    }

    public final short getMatk() {
        return matk;
    }

    public final short getWdef() {
        return wdef;
    }

    public final short getMdef() {
        return mdef;
    }

    public final short getAcc() {
        return acc;
    }

    public final short getAvoid() {
        return avoid;
    }

    public final short getHands() {
        return hands;
    }

    public final short getSpeed() {
        return speed;
    }

    public final short getJump() {
        return jump;
    }

    public final int getDuration() {
        return duration;
    }

    public final boolean isOverTime() {
        return overTime;
    }

    public final List<Pair<MapleBuffStat, Integer>> getStatups() {
        return statups;
    }

    public final boolean sameSource(final MapleStatEffect effect) {
        return effect != null && this.sourceid == effect.sourceid && this.skill == effect.skill;
    }

    public final int getX() {
        return x;
    }

    public final int getY() {
        return y;
    }

    public final int getZ() {
        return z;
    }

    public final short getDamage() {
        return damage;
    }

    public final int getEXP() {
        return exp;
    }

    public final byte getAttackCount() {
        return attackCount;
    }

    public final byte getBulletCount() {
        return bulletCount;
    }

    public final int getBulletConsume() {
        return bulletConsume;
    }

    public final byte getMobCount() {
        return mobCount;
    }

    public final int getMoneyCon() {
        return moneyCon;
    }

    public final int getCooldown() {
        return cooldown;
    }

    public final Map<MonsterStatus, Integer> getMonsterStati() {
        return monsterStatus;
    }

    public final int getBerserk() {
        return berserk;
    }

    public final boolean isHide() {
        return skill && sourceid == 9001004;
    }

    public final boolean isDragonBlood() {
        return skill && sourceid == 1311008;
    }

    public final boolean isBerserk() {
        return skill && sourceid == 1320006;
    }

    public final boolean isBeholder() {
        return skill && sourceid == 1321007;
    }

    public final boolean isMPRecovery() {
        return skill && sourceid == 5101005;
    }

    public final boolean isMonsterRiding_() {
        return skill && (sourceid == 1004 || sourceid == 10001004 || sourceid == 20001004 || sourceid == 20011004
                || sourceid == 30001004);
    }

    public final boolean isMonsterRiding() {
        return skill && (isMonsterRiding_() || GameConstants.getMountItem(sourceid) != 0);
    }

    public final boolean isMagicDoor() {
        return skill && (sourceid == 2311002 || sourceid == 8001 || sourceid == 10008001 || sourceid == 20008001
                || sourceid == 20018001 || sourceid == 30008001);
    }

    public final boolean isMesoGuard() {
        return skill && sourceid == 4211005;
    }

    public final boolean isCharge() {
        switch (sourceid) {
            case 1211003:
            case 1211008:
            case 11111007:
            case 12101005:
            case 15101006:
            case 21111005:
                return skill;
        }
        return false;
    }

    public final boolean isPoison() {
        switch (sourceid) {
            case 2111003:
            case 2101005:
            case 2111006:
            case 2121003:
            case 2221003:
            case 12111005: // Flame gear
                // case 3111003: //inferno, new
            case 22161002: // phantom imprint
                return skill;
        }
        return false;
    }

    private boolean isMist() {
        return skill && (sourceid == 2111003 || sourceid == 4221006 || sourceid == 12111005 || sourceid == 14111006
                || sourceid == 22161003); // poison mist, smokescreen and flame gear, recovery aura
    }

    private boolean isSpiritClaw() {
        return skill && sourceid == 4121006;
    }

    private boolean isDispel() {
        return skill && (sourceid == 2311001 || sourceid == 9001000);
    }

    private boolean isHeroWill() {
        switch (sourceid) {
            case 1121011:
            case 1221012:
            case 1321010:
            case 2121008:
            case 2221008:
            case 2321009:
            case 3121009:
            case 3221008:
            case 4121009:
            case 4221008:
            case 5121008:
            case 5221010:
            case 21121008:
            case 22171004:
            case 4341008:
            case 32121008:
            case 33121008:
            case 35121008:
                return skill;
        }
        return false;
    }

    public final boolean isAranCombo() {
        return sourceid == 21000000;
    }

    public final boolean isCombo() {
        switch (sourceid) {
            case 1111002:
            case 11111001: // Combo
                return skill;
        }
        return false;
    }

    public final boolean isPirateMorph() {
        switch (sourceid) {
            case 15111002:
            case 5111005:
            case 5121003:
                return skill;
        }
        return false;
    }

    public final boolean isSoaring() {
        switch (sourceid) {
            case 1026: // Soaring
            case 10001026: // Soaring
            case 20001026: // Soaring
            case 20011026: // Soaring
            case 30001026:
                return skill;
        }
        return false;
    }

    public final boolean isFinalAttack() {
        switch (sourceid) {
            case 13101002:
            case 11101002:
                return skill;
        }
        return false;
    }

    private boolean isSkillMorph() {
        return skill && (sourceid == 打手.伪装术 || sourceid == 格斗家.斗神附体 || sourceid == 拳霸.斗神降世 || sourceid == 破风使者3.阿尔法
                || sourceid == 闪雷悍将3.斗神附体);
    }

    public final boolean isRecovery() {
        return skill && (sourceid == 冒险之技.团队治愈 || sourceid == 10001001 || sourceid == 传说.团队治愈);
    }

    public final boolean isMorph() {
        return morphId > 0;
    }

    public final boolean isDivineBody() {
        switch (sourceid) {
            case 1010:
            case 10001010:// Invincible Barrier
            case 20001010:
            case 20011010:
            case 30001010:
                return skill;
        }
        return false;
    }

    public final boolean isBerserkFury() {
        switch (sourceid) {
            case 1011: // Berserk fury
            case 10001011:
            case 20001011:
            case 20011011:
            case 30001011:
                return skill;
        }
        return false;
    }

    public final int getMorph() {
        switch (sourceid) {
            case 15111002:
            case 5111005:
                return 1000;
            case 5121003:
                return 1001;
            case 5101007:
                return 1002;
            case 13111005:
                return 1003;
        }
        return morphId;
    }

    public final int getMorph(final MapleCharacter chr) {
        final int morph = getMorph();
        switch (morph) {
            case 1000:
            case 1001:
            case 1003:
                return morph + (chr.getGender() == 1 ? 100 : 0);
        }
        return morph;
    }

    public final byte getLevel() {
        return level;
    }

    public final SummonMovementType getSummonMovementType() {
        if (!skill) {
            return null;
        }
        switch (sourceid) {
            case 3211002: // puppet sniper
            case 3111002: // puppet ranger
            case 33111003:
            case 13111004: // puppet cygnus
            case 5211001: // octopus - pirate
            case 5220002: // advanced octopus - pirate
            case 4341006:
            case 35111002:
            case 35111005: // TEMP
            case 35111004: // TEMP
                // case 35111011: //TEMP
            case 35121009:
                // case 35121010: //TEMP
            case 35121011:
                // case 4111007: //TEMP
                return SummonMovementType.STATIONARY;
            case 3211005: // golden eagle
            case 3111005: // golden hawk
            case 33111005:
            case 2311006: // summon dragon
            case 3221005: // frostprey
            case 3121006: // phoenix
                return SummonMovementType.CIRCLE_FOLLOW;
            case 5211002: // bird - pirate
                return SummonMovementType.CIRCLE_STATIONARY;
            case 32111006: // reaper
                return SummonMovementType.WALK_STATIONARY;
            case 1321007: // beholder
            case 2121005: // elquines
            case 2221005: // ifrit
            case 2321003: // bahamut
            case 12111004: // Ifrit
            case 11001004: // soul
            case 12001004: // flame
            case 13001004: // storm
            case 14001005: // darkness
            case 15001004: // lightning
            case 35111001:
            case 35111010:
            case 35111009:
                return SummonMovementType.FOLLOW;
        }
        return null;
    }

    public final int getSourceId() {
        return sourceid;
    }

    public final boolean isSkill() {
        return skill;
    }

    /**
     *
     * @return true if the effect should happen based on it's probablity, false
     *         otherwise
     */
    public final boolean makeChanceResult() {
        return prop == 100 || Randomizer.nextInt(99) < prop;
    }

    public final short getProb() {
        return prop;
    }

    public final short getDOTTime() {
        return dotTime;
    }

    public static class CancelEffectAction implements Runnable {

        private MapleStatEffect effect;
        private WeakReference<MapleCharacter> target;
        private long startTime;

        public CancelEffectAction(final MapleCharacter target, final MapleStatEffect effect, final long startTime) {
            this.effect = effect;
            this.target = new WeakReference<>(target);
            this.startTime = startTime;
        }

        @Override
        public void run() {
            final MapleCharacter realTarget = target.get();
            if (realTarget != null && !realTarget.isClone()) {
                realTarget.cancelEffect(effect, false, startTime);
            }
        }
    }

    public String getName() {
        String Name = "";
        try {
            Name = SkillFactory.getName(getSourceId());
        } catch (Exception ex) {

        }
        return Name;
    }

    private int getFatigue() {
        return fatigue;
    }

    public final double getMaxDistanceSq() { // lt = 前面, rb = 后面; 非取得两点位置而是玩家的相对位置以及单一方向
        final int maxX = Math.max(Math.abs(lt == null ? 0 : lt.x), Math.abs(rb == null ? 0 : rb.x));
        final int maxY = Math.max(Math.abs(lt == null ? 0 : lt.y), Math.abs(rb == null ? 0 : rb.y));
        return (maxX * maxX) + (maxY * maxY);
    }

    public final int getRange() {
        return range;
    }
}
