/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package constants;

import client.MapleJob;

/**
 * @author pungin
 */
public class SkillConstants {

    public static boolean isSkill92XX0000(int skillId) {
        return skillId / 1000000 == 92 && skillId % 10000 == 0;
    }

    public static boolean isSkill92XX____(int skillId) {
        return !isSkill92XX0000(skillId) && isSkill92XX0000(10000 * (skillId / 10000));
    }

    public static boolean is4thNotNeedMasterLevel(int skillId) {
        if (skillId > 5220014) { // 双倍幸运骰子
            if (skillId > 23120011) { // 旋风月光翻转
                // 进阶光速双击 || 勇士的意志 || 狂暴天性 || 双倍幸运骰子
                if (skillId == 23120013 || skillId == 23121008 || skillId == 33120010 || skillId == 35120014) {
                    return true;
                }
                // 战斗大师
                return skillId == 51120000;
            } else {
                // 旋风月光翻转
                if (skillId == 23120011
                        || skillId == 5320007 // 双倍幸运骰子
                        || skillId == 5321004 // 双胞胎猴子
                        || skillId == 5321006 // 枫叶净化
                        || skillId == 21120011 // 快速移动
                        || skillId == 21120014) { // 屠魔勇气
                    return true;
                }
                // 欧尼斯的意志
                return skillId == 22181004;
            }
        }
        if (skillId == 5220014) { // 双倍幸运骰子
            return true;
        }
        if (skillId <= 4110012) { // 镖术精通
            // 镖术精通 || 战斗精通 || 灵魂复仇 || Null(没找到技能) || Null(没找到技能) || Null(没找到技能)
            if (skillId == 4110012 || skillId == 1120012 || skillId == 1320011 || skillId == 2121009 || skillId == 2221009 || skillId == 2321010) {
                return true;
            }
            // 射击术
            return skillId == 3210015;
        }
        // !贪婪 && !疾速 && !致命的飞毒杀
        if (skillId != 4210012 && skillId != 4340010 && skillId != 4340012) {
            // Null(没找到技能)
            if (skillId <= 5120010) {
                return false;
            }
            // 双倍幸运骰子 
            if (skillId > 5120012) {
                // 反击
                return skillId == 5220012;
            }
        }
        return true;
    }

    public static boolean isNot4thNeedMasterLevel(int skillId) {
        if (skillId > 101100101) { // 进阶武器投掷
            // 进阶回旋之刃 || 进阶旋风 || 进阶旋风急转弯 || 进阶旋风落叶斩 || 进阶碎地猛击
            if (skillId == 101100201 || skillId == 101110102 || skillId == 101110200 || skillId == 101110203 || skillId == 101120104) {
                return true;
            }
            return skillId == 101120204; // 进阶暴风裂击
        } else {
            if (skillId == 101100101 // 进阶武器投掷
                    || skillId == 4311003 // 狂刃风暴
                    || skillId == 4321006 // 翔空落叶斩
                    || skillId == 4330009 // 暗影回避
                    || skillId == 4331002 // 替身术
                    || skillId == 4341004 // 短刀护佑
                    || skillId == 4341007) { // 荆棘特效
                return true;
            }
            return skillId == 101000101; // 进阶威力震击
        }
    }

    public static boolean isSkillNeedMasterLevel(int skillId) {
        if (is4thNotNeedMasterLevel(skillId)) {
            return false;
        }
        if (isSkill92XX0000(skillId)) {
            return false;
        }
        if (isSkill92XX____(skillId)) {
            return false;
        }
        if (MapleJob.isJob8000(skillId)) {
            return false;
        }
        int jobid = getJobBySkill(skillId);
        if (MapleJob.is初心者(jobid) || MapleJob.isJob9500(skillId) || skillId == 42120024/*影朋‧花狐*/) {// || MapleJob.is幻兽师(jobid)
            return false;
        }
        int jobTimes = MapleJob.get转数(jobid);
//        if (MapleJob.is龙魔导士(jobid)) {
//            if (skillId == 22171004) { // 枫叶净化
//                return false;
//            }
//            if (jobTimes == 9) {
//                return true;
//            }
//            return jobTimes == 10;
//        } else {
        if (isNot4thNeedMasterLevel(skillId)) {
            return true;
        }
        return jobTimes == 4;//!MapleJob.is神之子(jobid)
//    }
    }

    public static int get紫扇传授UnknownValue(int skillId) {
        int result;
        if (skillId == 40020002 || skillId == 80000004) {
            result = 100;
        } else {
            result = 0;
        }
        return result;
    }

    public static int getJobBySkill(int skillId) {
        int result = skillId / 10000;
        if (skillId / 10000 == 8000) {
            result = skillId / 100;
        }
        return result;
    }

    public static boolean isApplicableSkill(int skil) {
        return ((skil < 80000000 || skil >= 100000000) && (skil % 10000 < 8000 || skil % 10000 > 8006) && !isAngel(skil)) || skil >= 92000000 || (skil >= 80000000 && skil < 80010000); //no additional/decent skills
    }

    //    public static boolean isApplicableSkill_(int skil) { //not applicable to saving but is more of temporary
//        for (int i : PlayerStats.pvpSkills) {
//            if (skil == i) {
//                return true;
//            }
//        }
//        return (skil >= 90000000 && skil < 92000000) || (skil % 10000 >= 8000 && skil % 10000 <= 8003) || isAngel(skil);
//    }
    public static boolean isRidingSKill(int skil) {
        return (skil >= 80001000 && skil < 80010000);
    }

    public static boolean isAngel(int skillId) {
        if (MapleJob.isBeginner(skillId / 10000) || skillId / 100000 == 800) {
            switch (skillId % 10000) {
                case 1085: // 大天使 [等级上限：1]\n召唤被大天使祝福封印的大天使。
                case 1087: // 黑天使 [等级上限：1]\n召唤被黑天使祝福封印的大天使。
                case 1090: // 大天使 [等级上限：1]\n召唤被大天使祝福封印的大天使。
                case 1179: // 白色天使 [最高等级： 1]\n召唤出被封印的圣洁天使。
                case 86: // 大天使祝福 [等级上限：1]\n得到大天使的祝福。
                    return true;
            }
        }
        switch (skillId) {
            case 80000052: // 恶魔之息 获得恶魔的力量，攻击力和魔法攻击力增加6，HP、MP增加5%，可以和其他增益叠加。
            case 80000053: // 恶魔召唤 获得恶魔的力量，攻击力和魔法攻击力增加13，HP、MP增加10%，可以和其他增益叠加。
            case 80000054: // 恶魔契约 获得恶魔的力量，攻击力和魔法攻击力增加15，HP、MP增加20%，可以和其他增益叠加。
            case 80000086: // 战神祝福 [等级上限：1]\n得到战神的祝福。
            case 80001154: // 白色天使 [最高等级：1]\n召唤被白天使的祝福封印的白天使。
            case 80001262: // 战神祝福 [等级上限：1]\n召唤战神
            case 80001518: // 元素玛瑙 召唤玛瑙戒指中的#c元素玛瑙#.
            case 80001519: // 火焰玛瑙 召唤玛瑙戒指中的#c火焰玛瑙#.
            case 80001520: // 闪电玛瑙 召唤玛瑙戒指中的#c火焰玛瑙#.
            case 80001521: // 冰冻玛瑙 召唤玛瑙戒指中的#c冰冻玛瑙#.
            case 80001522: // 大地玛瑙 召唤玛瑙戒指中的#c大地玛瑙#.
            case 80001523: // 黑暗玛瑙 召唤玛瑙戒指中的#c黑暗玛瑙#.
            case 80001524: // 神圣玛瑙 召唤玛瑙戒指中的#c神圣玛瑙#.
            case 80001525: // 火精灵玛瑙 召唤玛瑙戒指中的#c火精灵玛瑙#.
            case 80001526: // 电子玛瑙 召唤玛瑙戒指中的#c电子玛瑙#.
            case 80001527: // 水精灵玛瑙 召唤玛瑙戒指中的#c水精灵玛瑙#.
            case 80001528: // 地精灵玛瑙 召唤玛瑙戒指中的#c地精灵玛瑙#.
            case 80001529: // 恶魔玛瑙 召唤玛瑙戒指中的#c恶魔玛瑙#.
            case 80001530: // 天使玛瑙 召唤玛瑙戒指中的#c天使玛瑙#.
            case 80001715: // 元素玛瑙
            case 80001716: // 火焰玛瑙
            case 80001717: // 闪电玛瑙
            case 80001718: // 冰冻玛瑙
            case 80001719: // 大地玛瑙
            case 80001720: // 黑暗玛瑙
            case 80001721: // 神圣玛瑙
            case 80001722: // 火精灵玛瑙
            case 80001723: // 电子精灵玛瑙
            case 80001724: // 水精灵玛瑙
            case 80001725: // 地精灵玛瑙
            case 80001726: // 恶魔玛瑙
            case 80001727: // 天使玛瑙
                return true;
        }
        return false;
    }

    public static boolean is紫扇仰波(int id) {
        return id == 42001000 || id > 42001004 && id <= 42001006;
    }

    public static boolean is初心者紫扇仰波(int id) {
        return id == 40021185 || id == 42001006 || id == 80011067;
    }

    public static boolean sub_9F5282(int id) {
        return id == 4221052 || id == 65121052; // 暗影雾杀 || 超级超新星
    }

    public static boolean sub_9F529C(int id) {
        return id == 13121052 // 季风
                || id - 13121052 == 1000000 // 道米尼奥
                || id - 13121052 == 2000000 // 海神降临
                || id - 13121052 == 66880377 // 崩坏之轮行踪
                || id - 13121052 == 66880379 // 破灭之轮行踪
                || (id - 13121052 - 66880379) == 19999852; // 暗影之雨
    }

    public static boolean isKeyDownSkillWithPos(int id) {
        return id == 13111020 || id == 112111016; // 寒冰乱舞 || 旋风飞行
    }

    public static int getHyperAddBullet(int id) {
        if (id == 4121013) { // 四飞闪
            return 4120051; // 四飞闪-攻击加成
        } else if (id == 5321012) { // 加农砲连击
            return 5320051; // 加农砲连击-奖励攻击
        }
        return 0;
    }

    public static int getHyperAddAttack(int id) {
        if (id > 12120011) { // 极致炽烈
            if (id > 41121001) { // 神速无双
                if (id > 61121100) { // 蓝焰恐惧
                    if (id > 112101009) { // 电光石火
                        if (id == 112111004) { // 队伍轰炸
                            return 112120050; // 队伍轰炸-临时目标
                        } else if (id > 112119999 && id <= 112120003) { // 朋友发射
                            return 112120053;
                        }
                        return 0;
                    }
                    if (id == 112101009) { // 电光石火
                        return 112120048; // 电光石火-攻击加成
                    }
                    if (id != 61121201) { // 蓝焰恐惧(变身)
                        if (id > 65121006 && (id <= 65121008 || id == 65121101)) { // 三位一体
                            return 65120051; // 三位一体-三重反击
                        }
                        return 0;
                    }
                } else if (id != 61121100) { // 蓝焰恐惧
                    switch (id) {
                        case 41121002: // 一闪
                            return 41120050; // 一闪-次数强化
                        case 41121018: // 瞬杀斩
                        case 41121021: // 瞬杀斩
                            return 41120048; // 瞬杀斩-次数强化
                        case 42121000: // 破邪连击符
                            return 42120045; // 破邪连击符-次数强化
                        case 51121007: // 灵魂突击
                            return 51120051; // 灵魂突击-奖励加成
                        case 51121008: // 圣光爆发
                            return 51120048; // 圣光爆发-攻击加成
                    }
                    return 0;
                }
                return 61120045; // 蓝焰恐惧-加码攻击
            }
            if (id == 41121001) { // 神速无双
                return 41120044; // 神速无双-次数强化
            } else if (id > 21121013) { // 终极之矛
                if (id == 22181002) { // 龙神之怒
                    return 0;//".img/SlideMenu/0/Recommend";
                } else if (id == 25121005) { // 鬼斩
                    return 25120148; // 鬼斩-次数强化
                } else if (id == 31111005) { // 恶魔布雷斯
                    return 31120044; // 恶魔气息-攻击加成
                } else if (id == 31121001) { // 恶魔冲击
                    return 31120050; // 恶魔冲击-攻击加成
                } else if (id == 32111003) {
                    return 0;
                } else if (id == 35121016) { // 巨型火炮：IRON-B
                    return 35120051; // 巨型火炮：IRON-B-追加攻击
                }
            } else {
                if (id == 21121013) { // 终极之矛
                    // goto LABEL_115;
                }
                if (id == 13121000 + 2) { // 破风之箭
                    return 13120048; // 破风之箭-次数强化
                }
                if (id - (13121000 + 2) == 1000000) { // 四倍缓慢
                    return 14120045; // 五倍缓慢-爆击率
                }
                if (id - (13121000 + 2) == 1990020 || id - (13121000 + 2) == 1999001) { // 疾风 || 台风
                    return 15120045; // 疾风-次数强化
                }
                if (id - (13121000 + 2) == 2000000) { // 霹雳
                    return 15120048; // 霹雳-次数强化
                }
                if (id - (13121000 + 2) - 2000000 == 5999002 + 1) { // 终极之矛
                    //LABEL_115:
                    return 21120047; // 终极之矛-加码攻击
                } else if (id - (13121000 + 2) - 2000000 - (5999002 + 1) == 1) { // 极冰暴风
                    return 21120049; // 极冰暴风-加码攻击
                }
            }
        } else {
            if (id == (12120009 + 2)) { // 极致炽烈
                return 12120046; // 极致炽烈-追加反击
            }
            if (id <= 5121017) { // 爆烈冲击波
                if (id >= 5121016) { // 蓄能冲击波
                    return 5120051; // 蓄能冲击波-攻击加成
                }
                if (id <= 3121015) { // 骤雨狂矢
                    switch (id) {
                        case 3121015: // 骤雨狂矢
                            return 3120048; // 骤雨狂矢-攻击加成
                        case 1120017: // 狂暴攻击
                        case 1121008: // 狂暴攻击
                            return 1120051; // 狂暴攻击-攻击加成
                        case 1221009: // 骑士冲击波
                            return 1220048; // 骑士冲击波-攻击加成
                        case 1221011: // 鬼神之击
                            return 1220050; // 鬼神之击-攻击加成
                        case 2121003: // 地狱爆发
                            return 2120049; // 地狱爆发-攻击加成
                        case 2121006: // 梅杜莎之眼
                            return 2120048; // 梅杜莎之眼-次数强化
                        case 2221006: // 闪电连击
                            return 2220048; // 闪电连击-攻击加成
                    }
                    return 0;
                }
                if (id == 3121020) { // 暴风神射
                    return 3120051; // 暴风神射-多重射击
                }
                if (id == 3221017) { // 光速神弩
                    return 3220048; // 光速神弩-攻击加成
                }
                if (id == 4221007) { // 瞬步连击
                    return 4220048; // 瞬步连击-攻击加成
                }
                if (id == 4331000) { // 血雨暴风狂斩
                    return 4340045; // 血雨暴风狂斩-攻击加成
                }
                if (id == 4341009) { // 幻影箭
                    return 4340048; // 幻影箭-攻击加成
                }
                if (id != 5121007) { // 闪‧连杀
                    return 0;
                }
                return 5120048; // 闪．连杀-攻击加成
            }
            if (id > 5721064) { // 穿心掌打 
                if (id == (11121101 + 2) || id - (11121101 + 2) == 100) { // 新月分裂 || 太阳穿刺
                    return 11120048; // 分裂与穿刺-次数强化
                } else if (id - (11121101 + 2) == 878923 // 元素火焰
                        || id - (11121101 + 2) == 978925
                        || id - (11121101 + 2) == 988925
                        || id - (11121101 + 2) == 998907) { // 元素火焰 IV
                    return 12120045; // 元素火焰-速发反击
                }
            } else {
                if (id == 5721064) { // 穿心掌打 
                    return 5720048; // 穿心掌打-次数强化
                }
                if (id == 5121020) { // 闪‧瞬连杀
                    return 5120048; // 闪．连杀-攻击加成
                }
                if (id - 5121020 == 99996) { // 爆头射击
                    return 5220047; // 爆头射击-攻击加成
                } else {
                    if (id - 5121020 == 198991) {
                        //goto LABEL_116;
                    }
                    if (id - 5121020 == 199980) {// 加农砲火箭
                        return 5320048; // 加农砲火箭-攻击加成
                    }
                    if (id - 5121020 == 199984) { // 双胞胎猴子
                        //LABEL_116:
                        return 5320043; // 双胞胎猴子-伤害分裂
                    } else if (id - 5121020 == 600041) { // 龙袭乱舞 
                        return 5720045; // 龙袭乱舞-次数强化
                    }
                }
            }
        }
        return 0;
    }

    //    private static List<Integer> SoulSkills;
//    public static List<Integer> getSoulSkills() {
//        if (SoulSkills != null) {
//            return SoulSkills;
//        }
//        SoulSkills = new LinkedList();
//        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
//        for (ItemInformation itInfo : ii.getAllItems()) {
//            if (ItemConstants.类型.灵魂宝珠(itInfo.itemId)) {
//                SoulSkills.add(ii.getSoulSkill(itInfo.itemId));
//            }
//        }
//        return SoulSkills;
//    }
    public static int SkillIncreaseMobCount(int sk) {
        int inc = 0;
        switch (sk) {
            case 112001008://鲜鱼龙卷风
            case 112101009://电光石火
            case 112111004://队伍轰炸
            case 61111100:// 龙剑风
            case 51121008://圣光爆发
            case 42121000://破邪连击符
            case 41121021://瞬杀斩
            case 41121018://瞬杀斩
            case 41121009://鹰爪闪
            case 36121012://伪装扫荡：轰炸
            case 36121011://伪装扫荡：砲击
            case 36121000://疾风剑舞
            case 35121015://巨型火炮：SPLASH-F
            case 33121002://音爆
            case 32121003://飓风
            case 27121303://绝对击杀
            case 27121202://暗黑烈焰
            case 24121000://连犽突进
            case 24121005://卡牌风暴
            case 15121002://霹雳
            case 13121002://破风之箭
            case 12120011://极致炽烈
            case 11121203://太阳穿刺
            case 11121103://新月分裂
            case 5721007://侠客突袭
            case 5321000://加农砲火箭
            case 5121016://蓄能冲击波
            case 4341004://短刀护佑
            case 4331000://血雨暴风狂斩
            case 4221007://瞬步连击
            case 4121017://挑衅契约
            case 3221017://光速神孥
            case 3121015://骤雨狂矢
            case 2221012://冰锋刃
            case 2221006://闪电连击
            case 2211007://瞬间移动精通
            case 1211008://雷鸣之剑
            case 1121008://狂暴攻击
                inc = 2;
                break;
            case 1221004://圣灵之剑
            case 1201012://寒冰之剑
            case 1201011://烈焰之剑
                inc = 3;
                break;
        }
        return inc;
    }
}
