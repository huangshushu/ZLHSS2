package constants;

import client.MapleCharacter;
import client.MapleClient;
import client.inventory.Equip;
import client.inventory.MapleInventoryType;
import client.inventory.MapleWeaponType;
import java.util.ArrayList;
import java.util.Map;
import java.util.TreeMap;
import server.MapleItemInformationProvider;

public class ItemConstants {

    public static class 伤害字型 {

        private static Map<Integer, Integer> damageSkin = new TreeMap();

        public static Map<Integer, Integer> getDamageSkin() {
            if (damageSkin.isEmpty()) {
                //Effect.wz/BasicEff.img/damageSkin
                damageSkin.put(2431965, 0); //基本伤害肌肤
                damageSkin.put(2431966, 1); //数位显示肌肤
                damageSkin.put(2432084, 1); //数位显示字型
                damageSkin.put(2431967, 2); //克里提亚斯伤害肌肤
                damageSkin.put(2432131, 3); //组队任务伤害肌肤
                damageSkin.put(2432153, 4); //冲击震撼字型
                damageSkin.put(2432638, 4); //具有冲击性的伤害字型
                damageSkin.put(2432659, 4); //具有冲击性的伤害字型
                damageSkin.put(2432154, 5); //甜蜜饼干字型
                damageSkin.put(2432637, 5); //传统韩果伤害字型
                damageSkin.put(2432658, 5); //传统韩果伤害字型
                damageSkin.put(2432207, 6); //铁壁城墙字型
                damageSkin.put(2432354, 7); //圣诞快乐伤害字型
                damageSkin.put(2432355, 8); //雪花飘落字型
                damageSkin.put(2432972, 8); //雪花伤害肌肤
                damageSkin.put(2432465, 9); //爱丽西亚的伤害字型
                damageSkin.put(2432479, 10); //桃乐丝的伤害字型
                damageSkin.put(2432526, 11); //键盘战士字型
                damageSkin.put(2432639, 11); //键盘战士伤害字型
                damageSkin.put(2432660, 11); //键盘战士伤害字型
                damageSkin.put(2432532, 12); //多彩春风字型
                damageSkin.put(2432592, 13); //单身部队伤害字型
                damageSkin.put(2432640, 14); //雷咪纳杉司伤害字型
                damageSkin.put(2432661, 14); //雷咪纳杉司伤害字型
                damageSkin.put(2432710, 15); //菇菇宝贝伤害字型
                damageSkin.put(2432836, 16); //王冠伤害字型
                damageSkin.put(2432973, 17); //灰白伤害肌肤
                damageSkin.put(2433063, 18); //明星星球伤害肌肤
                damageSkin.put(2433456, 19); //韩文的伤害字型(效果是中文)
                damageSkin.put(2433178, 20); //2014万圣节伤害肌肤
//            damageSkin.put(2433456, 21); //韩文的伤害字型
                damageSkin.put(2433631, 22); //NENE鸡的伤害字型
                damageSkin.put(2433655, 22); //NENE鸡的伤害字型
                damageSkin.put(2433981, 28); //皮卡啾伤害字型
                damageSkin.put(2432591, 1000); //樱花浪漫字型伤害肌肤
                damageSkin.put(2432803, 1004); //浓姬伤害字型(30日)
                damageSkin.put(2432804, 1004); //浓姬伤害字型(无限期)
                damageSkin.put(2432846, 1005); //杰特字型交换卷
                damageSkin.put(2433049, 1009); //初音未来伤害字型
                damageSkin.put(2433038, 1010); //皇家神兽学院字型
                damageSkin.put(2433165, 1011); //侠客字型交换卷
                damageSkin.put(2433197, 1012); //菲欧娜字型交换卷
                damageSkin.put(2433195, 1013); //橘子节字型交换卷
                damageSkin.put(2433182, 1014); //万圣节南瓜字型交换卷
                damageSkin.put(2433183, 1015); //万圣节幽灵字型交换卷
                damageSkin.put(2433184, 1016); //万圣节扫把字型交换卷
                //1018 - 跟1014一样
                damageSkin.put(2433775, 1032); //杀人鲸伤害字型
                damageSkin.put(2433776, 1033); //史乌伤害字型
                damageSkin.put(2433828, 1034); //太阳伤害字型
                damageSkin.put(2433829, 1035); //雨伤害字型
                damageSkin.put(2433830, 1036); //彩虹伤害字型
                damageSkin.put(2433831, 1037); //雪伤害字型
                damageSkin.put(2433832, 1038); //闪电伤害字型
                damageSkin.put(2433833, 1039); //风伤害字型
                damageSkin.put(2434004, 1041); //小筱伤害字型
                damageSkin.put(2434499, 1049); //月亮伤害字型
                //1050 - 跟1034一样
            }
            Map<Integer, Integer> value = new TreeMap();
            value.putAll(damageSkin);
            return value;
        }

        public static int getDamageSkinNumberByItem(int itemid) {
            Map<Integer, Integer> skin = getDamageSkin();
            if (skin.containsKey(itemid)) {
                return skin.get(itemid);
            }
            return -1;
        }

        public static Integer[] getDamageSkinsTradeBlock() {
            Map<Integer, Integer> skin = getDamageSkin();
            ArrayList<Integer> skins = new ArrayList<>();
            for (int s : skin.keySet()) {
                if (MapleItemInformationProvider.getInstance().isOnlyTradeBlock(s)) {
                    skins.add(s);
                }
            }
            Integer list[] = new Integer[skins.size()];
            return skins.toArray(list);
        }

        public static boolean isDamageSkin(int itemid) {
            Map<Integer, Integer> skin = getDamageSkin();
            if (skin.containsKey(itemid)) {
                return true;
            }
            return false;
        }
    }

    public static class 卷轴 {

        public static boolean canScroll(final int itemId) {
            return (itemId / 100000 != 19 && itemId / 100000 != 16) || 类型.心脏(itemId); //no mech/taming/dragon/心脏
        }

        public static boolean canHammer(final int itemId) {
            switch (itemId) {
                case 1122000:
                case 1122076: //ht, chaos ht
                    return false;
            }
            return canScroll(itemId);
        }

        public static int getChaosNumber(int itemId) {
            switch (itemId) {
                case 2049116://惊讶的混沌卷轴 60%
                case 2049132://惊讶的混沌卷轴 30%
                case 2049133://惊讶的混沌卷轴 50%
                case 2049134://惊讶的混沌卷轴 70%
                case 2049135://惊讶乐观的混沌卷轴 20%
                case 2049136://惊讶乐观的混沌卷轴 20%
                case 2049137://惊讶乐观的混沌卷轴 40%
                case 2049140://珠宝戒指的惊讶的混沌卷轴 40%
                case 2049142://惊讶的混沌卷轴 40%
                case 2049145://珠宝工艺惊讶的混沌卷轴 40%
                case 2049152://惊讶的混沌卷轴 60%
                case 2049153://惊讶乐观的混沌卷轴
                case 2049156://惊讶的混沌卷轴 20%
                case 2049159://惊讶的混沌卷轴 50%
                case 2049165://惊讶的混沌卷轴 50%
                    return 10;
            }
            return 5;
        }

        public static int getBonusPotentialScrollSucc(int scrollId) {
            switch (scrollId) {
                case 2048306://成功100,3行
                case 2048307://成功100
                case 2048315://成功100
                case 2048316://成功100
                    return 100;
                case 2048313://心之项炼专用,成功80
                    return 80;
                case 2048305://成功70,失败损坏100
                    return 70;
                case 2048309://成功60,无损
                case 2048310://成功60,失败损坏100
                case 2048314://成功60
                    return 60;
                case 2048308://成功50,失败损坏50
                case 2048311://成功50,失败损坏50
                    return 50;
                case 2048312://成功1
                    return 1;
                default:
                    return 0;
            }
        }

        public static int getBonusPotentialScrollCurse(int scrollId) {
            switch (scrollId) {
                case 2048305://成功70,失败损坏100
                case 2048310://成功60,失败损坏100
                    return 100;
                case 2048308://成功50,失败损坏50
                case 2048311://成功50,失败损坏50
                    return 50;
                default:
                    return 0;
            }
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

        public static int getEnhanceTimes(int itemId) {
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            int level = ii.getReqLevel(itemId);
            boolean isSuperiorEquip = false;//ii.isSuperiorEquip(itemId);
            int enhanceTimes = 0;
            if (level >= 0 && level < 95) {
                enhanceTimes = isSuperiorEquip ? 3 : 5;
            } else if (level >= 95 && level < 108) {
                enhanceTimes = isSuperiorEquip ? 5 : 8;
            } else if (level >= 108 && level < 118) {
                enhanceTimes = isSuperiorEquip ? 8 : 10;
            } else if (level >= 118 && level < 128) {
                enhanceTimes = isSuperiorEquip ? 10 : 15;
            } else if (level >= 128 && level < 138) {
                enhanceTimes = isSuperiorEquip ? 12 : 20;
            } else if (level >= 138) {
                enhanceTimes = isSuperiorEquip ? 15 : 25;
            }
            return enhanceTimes;
        }
    }

    public static class 套装 {

        public static ArrayList<Integer> get6YearSet() {
            int[] set = {1462116, 1342039, 1402109, 1472139, 1332147, 1322105, 1442135, 1452128, 1312071, 1382123, 1492100, 1372099, 1432098, 1422072, 1302172, 1482101, 1412070};
            ArrayList<Integer> list = new ArrayList();
            for (int i : set) {
                list.add(i);
            }
            return list;
        }

        public static ArrayList<Integer> get7YearSet() {
            int[] set = {1003243, 1052358, 1072522, 1082315, 1102295, 1132093, 1152061, 1332145, 1402107, 1442133, 1462114, 1472137, 1532070, 1522066, 1452126, 1312069, 1382121, 1492098, 1372097, 1362058, 1432096, 1422070, 1302170, 1482099, 1412068};
            ArrayList<Integer> list = new ArrayList();
            for (int i : set) {
                list.add(i);
            }
            return list;
        }

        public static ArrayList<Integer> get8YearSet() {
            int[] set = {1462159, 1462156, 1402145, 1402151, 1052461, 1052457, 1532073, 1532074, 1472177, 1472179, 1332186, 1332193, 1322154, 1322162, 1442173, 1442182, 1522068, 1522071, 1452165, 1312114, 1312116, 1382160, 1132154, 1132151, 1072666, 1072660, 1212069, 1212068, 1492152, 1492138, 1372139, 1372131, 1222063, 1222064, 1082433, 1082430, 1362060, 1362067, 1432138, 1432135, 1152088, 1152089, 1003529, 1003552, 1422107, 1422105, 1232070, 1232063, 1302227, 1302212, 1113036, 1113035, 1112743, 1112742, 1482140, 1482138, 1242048, 1242075, 1412102, 1412014, 1102394, 1102441};
            ArrayList<Integer> list = new ArrayList();
            for (int i : set) {
                list.add(i);
            }
            return list;
        }

        public static ArrayList<Integer> get10YearSet() {
            int[] set = {
                1004172,//帽子
                1012471,//脸饰
                1052758,//套服
                1102691,//披风
                1122280,//坠饰
                1212095,//魔法克鲁
                1222089,//灵魂射手
                1232089,//魔剑
                1242095,//能量剑
                1302304,//单手剑
                1312179,//单手斧
                1322230,//单手棍
                1332254,//短剑
                1342094,//双刀
                1362115,//手杖
                1372201,//短杖
                1382239,//长杖
                1402229,//双手剑
                1412158,//双手斧
                1422165,//双手棍
                1432194,//枪
                1442248,//矛
                1452232,//弓
                1462219,//弩
                1472241,//拳套
                1482196,//指虎
                1492205,//火枪
                1522118,//双弩枪
                1532124,//加农炮
            };
            ArrayList<Integer> list = new ArrayList();
            for (int i : set) {
                list.add(i);
            }
            return list;
        }
    }

//    public static class 方块 {
//
//        public static boolean canUseCube(Equip eq, int cubeId) {
//            switch (cubeId) {
//                case 2711007://10周年武器专用方块
//                    if (套装.get10YearSet().contains(eq.getItemId()) && 类型.武器(eq.getItemId())) {
//                        return true;
//                    }
//                    return false;
//                case 5062100://枫叶奇幻方块(罕见)
//                    if (套装.get7YearSet().contains(eq.getItemId()) && eq.getState(false) < 20) {
//                        return true;
//                    }
//                    return false;
//                case 5062102://[6周年]奇幻方块
//                    if (套装.get6YearSet().contains(eq.getItemId()) && 类型.武器(eq.getItemId())) {
//                        return true;
//                    }
//                    return false;
//                case 5062103://梦幻的神奇魔方
//                    if (套装.get8YearSet().contains(eq.getItemId())) {
//                        return true;
//                    }
//                    return false;
//                case 2711000://可疑的方块
//                case 2711001://奇怪的方块
//                    if (eq.getState(false) < 18) {
//                        return true;
//                    }
//                    return false;
//                case 2710000://奇怪的方块(罕见)
//                case 2711005://工匠的方块
//                case 5062000://奇幻方块
//                case 5062004://星星方块
//                    if (eq.getState(false) < 20) {
//                        return true;
//                    }
//                    return false;
//                default:
//                    return true;
//            }
//        }
//
//        public enum CubeType {
//
//            特殊(0x1),
//            稀有(0x2),
//            罕见(0x4),
//            传说(0x8),
//            等级下降(0x10),
//            调整潜能条数(0x20),
//            洗后无法交易(0x40),
//            对等(0x80),
//            去掉无用潜能(0x100),
//            前两条相同(0x200),
//            附加潜能(0x400),
//            点商光环(0x800),
//            ;
//            private final int value;
//
//            private CubeType(int value) {
//                this.value = value;
//            }
//
//            public final int getValue() {
//                return value;
//            }
//
//            public final boolean check(int flag) {
//                return (flag & value) == value;
//            }
//        }
//
//        public static int getCubeType(int itemId) {
//            int type = CubeType.特殊.getValue() | CubeType.稀有.getValue() | CubeType.罕见.getValue() | CubeType.传说.getValue();
//            switch (itemId) {
//                case 2711000://可疑的方块(稀有)
//                case 2711001://奇怪的方块(传说,说明上是传说,实际只能洗到稀有)
//                    type -= CubeType.罕见.getValue();
//                case 2710000://奇怪的方块(罕见)
//                    type -= CubeType.传说.getValue();
//                    type |= CubeType.等级下降.getValue();
//                    break;
//                case 2710001://情谊魔方(洗后装备不可交换)
//                    type -= CubeType.传说.getValue();
//                case 3994895://枫方块
//                    type |= CubeType.洗后无法交易.getValue();
//                    break;
//                case 2711005://工匠的方块
//                case 2711007://10周年武器专用方块
//                case 5062000://奇幻方块
//                    type -= CubeType.传说.getValue();
//                    break;
//                case 5062001://超级奇幻方块
//                    type -= CubeType.传说.getValue();
//                    type |= CubeType.调整潜能条数.getValue();
//                    break;
//                case 5062004://星星方块
//                    type -= CubeType.传说.getValue();
//                    type |= CubeType.去掉无用潜能.getValue();
//                    break;
//                case 5062013://太阳方块
//                    type |= CubeType.去掉无用潜能.getValue();
//                case 5062005://惊奇方块
//                case 5062006://白金奇幻方块
//                case 5062021://新对等方块
//                    type |= CubeType.对等.getValue();
//                    break;
//                case 5062008://镜射方块
//                case 5062019://闪耀镜射方块
//                    type |= CubeType.前两条相同.getValue();
//                    break;
//                case 5062500://大师附加奇幻方块
//                case 5062501://[MS特价] 大师附加奇幻方块
//                    type |= CubeType.附加潜能.getValue();
//                    break;
//                case 2711006://名匠的方块
//                case 5062002://传说方块
//                case 5062009://红色方块
//                case 5062010://黑色方块
//                case 5062017://闪耀方块
//                case 5062020://闪炫方块
//                case 5062090://记忆方块
//                case 5062100://枫叶奇幻方块
//                case 5062102://[6周年]奇幻方块
//                case 5062103://奇异奇幻方块
//                default:
//                    break;
//            }
//            if (MapleItemInformationProvider.getInstance().isCash(itemId)) {
//                type |= CubeType.点商光环.getValue();
//            }
//            return type;
//        }
//
//        public static boolean potentialIDFits(final int potentialID, final int newstate, final int i) {
//            //first line is always the best
//            //but, sometimes it is possible to get second/third line as well
//            //may seem like big chance, but it's not as it grabs random potential ID anyway
//            if (newstate == 20) {
//                return (i == 1 || Randomizer.nextInt(20) == 0 ? potentialID >= 40000 : potentialID >= 30000 && potentialID < 60004); // xml say so
//            } else if (newstate == 19) {
//                return (i == 1 || Randomizer.nextInt(20) == 0 ? potentialID >= 30000 && potentialID < 40000 : potentialID >= 20000 && potentialID < 30000);
//            } else if (newstate == 18) {
//                return (i == 1 || Randomizer.nextInt(20) == 0 ? potentialID >= 20000 && potentialID < 30000 : potentialID >= 10000 && potentialID < 20000);
//            } else if (newstate == 17) {
//                return (i == 1 || Randomizer.nextInt(20) == 0 ? potentialID >= 10000 && potentialID < 20000 : potentialID < 10000);
//            } else {
//                return false;
//            }
//        }
//
//        public static boolean optionTypeFits(final int optionType, final int itemId) {
//            switch (optionType) {
//                case 10: // 武器、盾牌、副手和能源
//                    return 类型.武器(itemId) || 类型.副手(itemId) || 类型.能源(itemId);
//                case 11: // 除了武器的全部装备
//                    return !类型.武器(itemId);
//                case 20: // 除了配饰和武器的全部装备
//                    return !类型.饰品(itemId) && !类型.武器(itemId);
//                case 40: // 配饰
//                    return 类型.饰品(itemId);
//                case 51: // 帽子
//                    return 类型.帽子(itemId);
//                case 52: // 披风
//                    return 类型.披风(itemId);
//                case 53: // 上衣、裤子与套服
//                    return 类型.上衣(itemId) || 类型.套服(itemId) || 类型.裤裙(itemId);
//                case 54: // 手套
//                    return 类型.手套(itemId);
//                case 55: // 鞋子
//                    return 类型.鞋子(itemId);
//                default:
//                    return true;
//            }
//        }
//
//        public static boolean isAllowedPotentialStat(Equip eqp, int opID, boolean bonus, boolean cash) { //For now
//            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
//            boolean superPot = ZZMSConfig.superiorPotential && ii.isSuperiorEquip(eqp.getItemId()) && Randomizer.nextInt(100) < 15;
//            //判断潜能是主潜还是附潜
//            int type = opID / 1000 % 10;
//            if ((bonus && ((!superPot && type != 2) || (superPot && type >= 1))) || (!bonus && type == 2)) {
//                return false;
//            }
//            //点商光环清除罕见以上潜能的非常的垃圾纯数字潜能
//            if ((opID % 1000 <= 14 || opID % 1000 == 81) && type != 1 && opID < 60000 && cash) {
//                return false;
//            }
//
//            int state = opID % 1000;
//            return superPot && !bonus ? (state != 4 && state != 9 && state != 24 && (state < 13 || state > 18)) : opID < 60000;
//        }
//
//        public static int getCubeFragment(int itemId) {
//            switch (itemId) {
//                case 5062000://奇幻方块
//                    return 2430112;
//                case 5062002://传说方块
//                    return 2430481;
//                case 5062004://星星方块
//                    return 2432114;
//                case 5062005://惊奇方块
//                    return 2430759;
//                case 5062006://白金奇幻方块
//                    return 2431427;
//                case 5062009://红色方块
//                    return 2431893;
//                case 5062010://黑色方块
//                    return 2431894;
//                case 5062013://太阳方块
//                    return 2432115;
//                case 5062090://记忆方块
//                    return 2431445;
//                case 5062100://枫叶魔方
//                    return 2430112;
//                case 5062102://[7周年]神奇魔方
//                    return 2430112;
//                case 5062103://奇异奇幻方块
//                    return 2430112;
//                case 5062500://大师附加奇幻方块
//                    return 2430915;
//                default:
//                    return 0;
//            }
//        }
//
//        public static boolean canLockCube(int itemId) {
//            switch (itemId) {
//                case 5062000://奇幻方块
//                case 5062004://星星方块
//                case 5062006://白金奇幻方块
//                case 5062013://太阳方块
//                    return true;
//                default:
//                    return false;
//            }
//        }
//
//        public static long getMapleCubeCost(int times, int potentialState) {
//            potentialState -= 1;
//            if (potentialState < 0) {
//                return 100;
//            }
//            long cost = 0;
//            long[] mapleCubeCostPlus = {100, 10000, 500000, 20000000};
//            long[] mapleCubeCostInitial = {100, 100000, 1000000, 10000000};
//            long[] mapleCubeCostMax = {15000, 47400000, 5113000000L, 9999999999L};
//            if (times >= 50) {
//                cost = mapleCubeCostMax[potentialState];
//            } else {
//                for (int i = 1; i <= times; i++) {
//                    long plus = 1;
//                    for (int j = 0; j < i / (potentialState == 0 ? 10 : 5); j++) {
//                        if (potentialState == 0) {
//                            plus += 1;
//                        } else if (potentialState == 1) {
//                            plus *= 2;
//                        } else if (potentialState == 2) {
//                            plus *= 2 + (j == 0 ? 2 : 0);
//                        } else if (potentialState == 3) {
//                            plus *= 2 + (j == 3 ? 1 : 0);
//                        }
//                    }
//                    cost += mapleCubeCostPlus[potentialState] * plus;
//                }
//            }
//            cost += mapleCubeCostInitial[potentialState];
//            cost = cost > mapleCubeCostMax[potentialState] ? mapleCubeCostMax[potentialState] : cost;
//            return cost;
//        }
//
//        public static boolean isUselessPotential(StructItemOption pot) {
//            boolean useless = false;
//            for (String s : pot.getItemOption()) {
//                if (pot.get(s) > 0) {
//                    switch (s) {
//                        case "incSTRr":
//                        case "incDEXr":
//                        case "incINTr":
//                        case "incLUKr":
//                        case "incMHPr":
//                        case "incPADr":
//                        case "incMADr":
//                        case "incCriticaldamageMin":
//                        case "incCriticaldamageMax":
//                        case "incDAMr":
//                        case "incTerR":
//                        case "incAsrR":
//                        case "ignoreTargetDEF":
//                        case "incMaxDamage":
//                        case "reduceCooltime":
//                        case "boss":
//                        case "incMesoProp":
//                        case "incRewardProp":
//                        case "level":
//                        case "attackType":
//                            break;
//                        default:
//                            useless = true;
//                    }
//                }
//            }
//            return useless;
//        }
//    }
    public static class 类型 {

        //<editor-fold defaultstate="collapsed" desc="道具一级分类">
        public static boolean 帽子(int itemid) {
            return itemid / 10000 == 100;
        }

        public static boolean 脸饰(int itemid) {
            return itemid / 10000 == 101;
        }

        public static boolean 眼饰(int itemid) {
            return itemid / 10000 == 102;
        }

        public static boolean 耳环(int itemid) {
            return itemid / 10000 == 103;
        }

        public static boolean 上衣(int itemid) {
            return itemid / 10000 == 104;
        }

        public static boolean 套服(int itemId) {
            return itemId / 10000 == 105;
        }

        public static boolean 裤裙(int itemid) {
            return itemid / 10000 == 106;
        }

        public static boolean 鞋子(int itemid) {
            return itemid / 10000 == 107;
        }

        public static boolean 手套(int itemid) {
            return itemid / 10000 == 108;
        }

        public static boolean 盾牌(int itemid) {
            return itemid / 10000 == 109;
        }

        public static boolean 披风(int itemid) {
            return itemid / 10000 == 110;
        }

        public static boolean 戒指(int itemid) {
            return itemid / 10000 == 111;
        }

        public static boolean 坠饰(int itemid) {
            return itemid / 10000 == 112;
        }

        public static boolean 腰带(int itemid) {
            return itemid / 10000 == 113;
        }

        public static boolean 勋章(int itemid) {
            return itemid / 10000 == 114;
        }

        public static boolean 肩饰(int itemid) {
            return itemid / 10000 == 115;
        }

        public static boolean 口袋道具(int itemid) {
            return itemid / 10000 == 116;
        }

        public static boolean 胸章(int itemId) {
            return itemId / 10000 == 118;
        }

        public static boolean 能源(final int itemid) {
            return itemid / 10000 == 119;
        }

        public static boolean 图腾(final int itemid) {
            return itemid / 10000 == 120;
        }

        public static boolean 闪亮克鲁(final int itemid) {
            return itemid / 10000 == 121;
        }

        public static boolean 灵魂射手(final int itemid) {
            return itemid / 10000 == 122;
        }

        public static boolean 魔剑(final int itemid) {
            return itemid / 10000 == 123;
        }

        public static boolean 能量剑(final int itemid) {
            return itemid / 10000 == 124;
        }

        public static boolean 幻兽棍棒(final int itemid) {
            return itemid / 10000 == 125;
        }

        public static boolean ESP限制器(final int itemid) {
            return itemid / 10000 == 126;
        }

        public static boolean 单手剑(final int itemid) {
            return itemid / 10000 == 130;
        }

        public static boolean 单手斧(final int itemid) {
            return itemid / 10000 == 131;
        }

        public static boolean 单手棍(final int itemid) {
            return itemid / 10000 == 132;
        }

        public static boolean 短剑(final int itemid) {
            return itemid / 10000 == 133;
        }

        public static boolean 双刀(final int itemid) {
            return itemid / 10000 == 134;
        }

        public static boolean 特殊副手(final int itemid) {
            return itemid / 10000 == 135;
        }

        public static boolean 手杖(final int itemid) {
            return itemid / 10000 == 136;
        }

        public static boolean 短杖(final int itemid) {
            return itemid / 10000 == 137;
        }

        public static boolean 长杖(final int itemid) {
            return itemid / 10000 == 138;
        }

        public static boolean 双手剑(final int itemid) {
            return itemid / 10000 == 140;
        }

        public static boolean 双手斧(final int itemid) {
            return itemid / 10000 == 141;
        }

        public static boolean 双手棍(final int itemid) {
            return itemid / 10000 == 142;
        }

        public static boolean 枪(final int itemid) {
            return itemid / 10000 == 143;
        }

        public static boolean 矛(final int itemid) {
            return itemid / 10000 == 144;
        }

        public static boolean 弓(final int itemid) {
            return itemid / 10000 == 145;
        }

        public static boolean 弩(final int itemid) {
            return itemid / 10000 == 146;
        }

        public static boolean 拳套(final int itemid) {
            return itemid / 10000 == 147;
        }

        public static boolean 指虎(final int itemid) {
            return itemid / 10000 == 148;
        }

        public static boolean 火枪(final int itemid) {
            return itemid / 10000 == 149;
        }

        public static boolean 双弩枪(final int itemid) {
            return itemid / 10000 == 152;
        }

        public static boolean 加农炮(final int itemid) {
            return itemid / 10000 == 153;
        }

        public static boolean 太刀(final int itemid) {
            return itemid / 10000 == 154;
        }

        public static boolean 扇子(final int itemid) {
            return itemid / 10000 == 155;
        }

        public static boolean 琉(final int itemid) {
            return itemid / 10000 == 156;
        }

        public static boolean 璃(final int itemid) {
            return itemid / 10000 == 157;
        }

        public static boolean 引擎(int itemid) {
            return itemid / 10000 == 161;
        }

        public static boolean 手臂(int itemid) {
            return itemid / 10000 == 162;
        }

        public static boolean 腿(int itemid) {
            return itemid / 10000 == 163;
        }

        public static boolean 机壳(int itemid) {
            return itemid / 10000 == 164;
        }

        public static boolean 晶体管(int itemid) {
            return itemid / 10000 == 165;
        }

        public static boolean 机器人(int itemid) {
            return itemid / 10000 == 166;
        }

        public static boolean 心脏(int itemId) {
            return itemId / 10000 == 167;
        }

        public static boolean 宠物装备(int itemid) {
            return itemid / 10000 >= 180 && itemid / 10000 <= 183;
        }

        public static boolean 骑宠(int itemid) {
            return itemid / 10000 == 190 || itemid / 10000 == 193;
        }

        public static boolean 马鞍(int itemid) {
            return itemid / 10000 == 191;
        }

        public static boolean 龙面具(int itemid) {
            return itemid / 10000 == 194;
        }

        public static boolean 龙坠饰(int itemid) {
            return itemid / 10000 == 195;
        }

        public static boolean 龙之翼(int itemid) {
            return itemid / 10000 == 196;
        }

        public static boolean 龙尾巴(int itemid) {
            return itemid / 10000 == 197;
        }

        public static boolean 飞镖(int itemid) {
            return itemid / 10000 == 207;
        }

        public static boolean 子弹(int itemid) {
            return itemid / 10000 == 233;
        }

        public static boolean 宠物(int id) {
            return id / 10000 == 500;
        }

        //</editor-fold>
        public static boolean 防具(int itemid) {
            return 帽子(itemid) || 上衣(itemid) || 套服(itemid) || 裤裙(itemid) || 鞋子(itemid) || 手套(itemid) || 披风(itemid);
        }

        public static boolean 饰品(int itemid) {
            return 脸饰(itemid) || 眼饰(itemid) || 耳环(itemid) || 戒指(itemid) || 坠饰(itemid) || 腰带(itemid) || 勋章(itemid) || 肩饰(itemid) || 口袋道具(itemid) || 胸章(itemid) || 能源(itemid) || 图腾(itemid);
        }

        public static boolean 副手(int itemid) {
            return 盾牌(itemid) || 双刀(itemid) || 特殊副手(itemid);
        }

        public static boolean 武器(int itemid) {
            return 闪亮克鲁(itemid)
                    || 灵魂射手(itemid)
                    || 魔剑(itemid)
                    || 能量剑(itemid)
                    || 幻兽棍棒(itemid)
                    || ESP限制器(itemid)
                    || 单手剑(itemid)
                    || 单手斧(itemid)
                    || 单手棍(itemid)
                    || 短剑(itemid)
                    || 手杖(itemid)
                    || 短杖(itemid)
                    || 长杖(itemid)
                    || 双手剑(itemid)
                    || 双手斧(itemid)
                    || 双手棍(itemid)
                    || 枪(itemid)
                    || 矛(itemid)
                    || 弓(itemid)
                    || 弩(itemid)
                    || 拳套(itemid)
                    || 指虎(itemid)
                    || 火枪(itemid)
                    || 双弩枪(itemid)
                    || 加农炮(itemid)
                    || 太刀(itemid)
                    || 扇子(itemid)
                    || 琉(itemid)
                    || 璃(itemid);
        }

        public static boolean 机械(final int itemid) {
            return 引擎(itemid) || 手臂(itemid) || 腿(itemid) || 机壳(itemid) || 晶体管(itemid);
        }

        public static boolean 龙装备(final int itemid) {
            return 龙面具(itemid) || 龙坠饰(itemid) || 龙之翼(itemid) || 龙尾巴(itemid);
        }

        public static boolean 可充值道具(int itemid) {
            return (飞镖(itemid)) || (子弹(itemid));
        }

        public static boolean 单手武器(int itemid) {
            return 武器(itemid) && !双手武器(itemid);
        }

        public static boolean 双手武器(final int itemid) {
            return 双手剑(itemid)
                    || 双手斧(itemid)
                    || 双手棍(itemid)
                    || 枪(itemid)
                    || 矛(itemid)
                    || 弓(itemid)
                    || 弩(itemid)
                    || 拳套(itemid)
                    || 指虎(itemid)
                    || 火枪(itemid)
                    || 双弩枪(itemid)
                    || 加农炮(itemid)
                    || 太刀(itemid)
                    || 扇子(itemid)
                    || 琉(itemid)
                    || 璃(itemid);
        }

        public static boolean 物理武器(int itemid) {
            return 武器(itemid) && !魔法武器(itemid);
        }

        public static boolean 魔法武器(int itemid) {
            return 短杖(itemid) || 长杖(itemid) || 扇子(itemid) || 幻兽棍棒(itemid) || ESP限制器(itemid);
        }

        public static boolean 骑宠道具(int itemid) {
            return 骑宠(itemid) || 马鞍(itemid);
        }

        public static boolean 装备(int itemid) {
            return (itemid / 10000 >= 100) && (itemid / 10000 < 200);
        }

        public static boolean 消耗(int itemid) {
            return (itemid / 10000 >= 200) && (itemid / 10000 < 300);
        }

        public static boolean 装饰(int itemid) {
            return (itemid / 10000 >= 300) && (itemid / 10000 < 400);
        }

        public static boolean 其他(int itemid) {
            return (itemid / 10000 >= 400) && (itemid / 10000 < 500);
        }

        public static boolean 特殊(int itemid) {
            return itemid / 1000 >= 500;
        }

        public static boolean 友谊戒指(int itemid) {
            switch (itemid) {
                case 1112800:
                case 1112801:
                case 1112802:
                case 1112810:
                case 1112811:
                case 1112816:
                case 1112817:
                    return true;
                case 1112803:
                case 1112804:
                case 1112805:
                case 1112806:
                case 1112807:
                case 1112808:
                case 1112809:
                case 1112812:
                case 1112813:
                case 1112814:
                case 1112815:
            }
            return false;
        }

        public static boolean 恋人戒指(int itemid) {
            switch (itemid) {
                case 1112001:
                case 1112002:
                case 1112003:
                case 1112005:
                case 1112006:
                case 1112007:
                case 1112012:
                case 1112015:
                case 1048000:
                case 1048001:
                case 1048002:
                    return true;
                case 1112004:
                case 1112008:
                case 1112009:
                case 1112010:
                case 1112011:
                case 1112013:
                case 1112014:
            }
            return false;
        }

        public static boolean 结婚戒指(int itemid) {
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

        public static boolean 特效戒指(int itemid) {
            return 友谊戒指(itemid) || 恋人戒指(itemid) || 结婚戒指(itemid);
        }

        public static boolean 管理员装备(final int itemid) {
            switch (itemid) {
                case 1002140://维泽特帽
                case 1003142://维泽特帽
                case 1003274://维泽特帽
                case 1042003://维泽特西装
                case 1042223://维泽特西装
                case 1062007://维泽特西裤
                case 1062140://维泽特西裤
                case 1322013://维泽特手提包
                case 1322106://维泽特手提包
                case 1002959:
                    return true;
            }
            return false;
        }

        public static boolean 城镇传送卷轴(final int itemid) {
            return itemid >= 2030000 && itemid < 2040000;
        }

        public static boolean 普通升级卷轴(int itemid) {
            return itemid >= 2040000 && itemid <= 2048100 && !阿斯旺卷轴(itemid);
        }

        public static boolean 阿斯旺卷轴(int itemid) {
            //return MapleItemInformationProvider.getInstance().getEquipStats(scroll.getItemId()).containsKey("tuc");
            //should add this ^ too.
            return itemid >= 2046060 && itemid <= 2046069 || itemid >= 2046141 && itemid <= 2046145 || itemid >= 2046519 && itemid <= 2046530 || itemid >= 2046701 && itemid <= 2046712;
        }

        public static boolean 提升卷(int itemid) { // 龙骑士获得的强化牌板
            return itemid >= 2047000 && itemid < 2047310;
        }

        public static boolean 附加潜能卷轴(int itemid) {
            return itemid / 100 == 20483 && !(itemid >= 2048200 && itemid <= 2048304);
        }

        public static boolean 白医卷轴(int itemid) {
            return itemid / 100 == 20490;
        }

        public static boolean 混沌卷轴(int itemid) {
            if (itemid >= 2049105 && itemid <= 2049110) {
                return false;
            }
            return itemid / 100 == 20491 || itemid == 2040126;
        }

        public static boolean 乐观混沌卷轴(int itemid) {
            if (!混沌卷轴(itemid)) {
                return false;
            }
            switch (itemid) {
                case 2049122://乐观的混卷轴50%
                case 2049129://乐观的混卷轴 50%
                case 2049130://乐观的混卷轴 30%
                case 2049131://乐观的混卷轴 20%
                case 2049135://惊讶乐观的混卷轴 20%
                case 2049136://惊讶乐观的混卷轴 20%
                case 2049137://惊讶乐观的混卷轴 40%
                case 2049141://珠宝戒指的乐观的混卷轴 30%
                case 2049155://珠宝工艺乐观的混卷轴 30%
                case 2049153://惊讶乐观的混卷轴
                    return true;
            }
            return false;
        }

        public static boolean 饰品卷轴(int itemid) {
            return itemid / 100 == 20492;
        }

        public static boolean 装备强化卷轴(int itemid) {
            return itemid / 100 == 20493;
        }

        public static boolean 铁锤(int itemid) {
            return itemid / 10000 == 247;
        }

        public static boolean 潜能卷轴(int itemid) {
            return itemid / 100 == 20494 || itemid / 100 == 20497 || itemid == 5534000;
        }

        public static boolean 回真卷轴(int itemid) {
            switch (itemid) {
                case 5064200://完美回真卡
                case 5064201://星光回真卷轴
                    return true;
                default:
                    return itemid / 100 == 20496;
            }
        }

        public static boolean 幸运日卷轴(int itemid) {
            switch (itemid) {
                case 5063100://幸运保护券(防爆+幸运)
                case 5068000://宠物专用幸运日卷轴
                    return true;
                default:
                    return itemid / 1000 == 2530;
            }
        }

        public static boolean 保护卷轴(int itemid) {
            switch (itemid) {
                case 5063100://幸运保护券(防爆+幸运)
                case 5064000://装备保护卷轴(无法用于尊贵或12星以上)
                case 5064002://星光装备保护卷轴(105以下的装备且无法用于尊贵或12星以上)
                case 5064003://尊贵装备保护卷轴(无法用于非尊贵以及尊贵7星以上)
                case 5064004://[MS特价] 装备保护卷轴(无法用于尊贵或12星以上)
                    return true;
                default:
                    return itemid / 1000 == 2531;
            }
        }

        public static boolean 安全卷轴(int itemid) {
            switch (itemid) {
                case 5064100://安全盾牌卷轴
                case 5064101://星光安全盾牌卷轴(105以下的装备)
                case 5068100://宠物安全盾牌卷轴
                    return true;
                default:
                    return itemid / 1000 == 2532;
            }
        }

        public static boolean 卷轴保护卡(int itemid) {
            switch (itemid) {
                case 5064300://卷轴保护卡
                case 5064301://星光卷轴保护卡(105以下的装备)
                case 5068200://宠物卷轴保护卡
                    return true;
            }
            return false;
        }

        public static boolean 灵魂卷轴_附魔器(int itemid) {
            return itemid / 1000 == 2590;
        }

        public static boolean 灵魂宝珠(int itemid) {
            return itemid / 1000 == 2591;
        }

        public static boolean TMS特殊卷轴(int itemid) {
            return itemid / 10000 == 261;
        }

        public static boolean 特殊卷轴(final int itemid) {
            return 幸运日卷轴(itemid) || 保护卷轴(itemid) || 安全卷轴(itemid) || 卷轴保护卡(itemid);
        }

        public static boolean 特殊潜能道具(final int itemid) {
            if (itemid / 100 == 10121 && itemid % 100 >= 64 && itemid % 100 <= 74 && itemid % 100 != 65 && itemid % 100 != 66) {//恰吉
                return true;
            } else if (itemid / 10 == 112212 && (itemid % 10 >= 2 && itemid % 10 <= 6)) {//真. 枫叶之心
                return true;
            } else if (itemid >= 1122224 && itemid <= 1122245) {//心之项炼
                return true;
            } else if (itemid / 10 == 101244) {//卡尔顿的胡子
                return true;
            }
            return false;
        }

        public static boolean 无法潜能道具(final int itemid) {
            return false;
        }

        public static boolean 脸型(final int itemid) {
            return itemid / 10000 == 2;
        }

        public static boolean 发型(final int itemid) {
            return itemid / 10000 == 3;
        }

        public static boolean 男脸型(int id) {
            return id / 1000 == 20;
        }

        public static boolean 女脸型(int id) {
            return id / 1000 == 21;
        }

        public static boolean 男发型(int id) {
            if (id == 33030 || id == 33160 || id == 33590) {
                return false;
            }
            if (id / 1000 == 30 || id / 1000 == 33 || (id / 1000 == 32 && id >= 32370) || id / 1000 == 36 || (id / 1000 == 37 && id >= 37160 && id <= 37170)) {
                return true;
            }
            switch (id) {
                case 32160:
                case 32330:
                case 34740:
                    return true;
            }
            return false;
        }

        public static boolean 女发型(int id) {
            if (id == 32160 || id == 32330 || id == 34740) {
                return false;
            }
            if (id / 1000 == 31 || id / 1000 == 34 || (id / 1000 == 32 && id < 32370) || (id / 1000 == 37 && id < 37160)) {
                return true;
            }
            switch (id) {
                case 33030:
                case 33160:
                case 33590:
                    return true;
            }
            return false;
        }
    }

    public static MapleWeaponType 武器类型(final int itemid) {
        if (类型.闪亮克鲁(itemid)) {
            return MapleWeaponType.闪亮克鲁;
        }
        if (类型.灵魂射手(itemid)) {
            return MapleWeaponType.灵魂射手;
        }
        if (类型.魔剑(itemid)) {
            return MapleWeaponType.魔剑;
        }
        if (类型.能量剑(itemid)) {
            return MapleWeaponType.能量剑;
        }
        if (类型.幻兽棍棒(itemid)) {
            return MapleWeaponType.幻兽棍棒;
        }
        if (类型.ESP限制器(itemid)) {
            return MapleWeaponType.ESP限制器;
        }
        if (类型.单手剑(itemid)) {
            return MapleWeaponType.单手剑;
        }
        if (类型.单手斧(itemid)) {
            return MapleWeaponType.单手斧;
        }
        if (类型.单手棍(itemid)) {
            return MapleWeaponType.单手棍;
        }
        if (类型.短剑(itemid)) {
            return MapleWeaponType.短剑;
        }
        if (类型.双刀(itemid)) {
            return MapleWeaponType.双刀;
        }
        if (类型.手杖(itemid)) {
            return MapleWeaponType.手杖;
        }
        if (类型.短杖(itemid)) {
            return MapleWeaponType.短杖;
        }
        if (类型.长杖(itemid)) {
            return MapleWeaponType.长杖;
        }
        if (类型.双手剑(itemid)) {
            return MapleWeaponType.双手剑;
        }
        if (类型.双手斧(itemid)) {
            return MapleWeaponType.双手斧;
        }
        if (类型.双手棍(itemid)) {
            return MapleWeaponType.双手棍;
        }
        if (类型.枪(itemid)) {
            return MapleWeaponType.枪;
        }
        if (类型.矛(itemid)) {
            return MapleWeaponType.矛;
        }
        if (类型.弓(itemid)) {
            return MapleWeaponType.弓;
        }
        if (类型.弩(itemid)) {
            return MapleWeaponType.弩;
        }
        if (类型.拳套(itemid)) {
            return MapleWeaponType.拳套;
        }
        if (类型.指虎(itemid)) {
            return MapleWeaponType.指虎;
        }
        if (类型.火枪(itemid)) {
            return MapleWeaponType.火枪;
        }
        if (类型.双弩枪(itemid)) {
            return MapleWeaponType.双弩枪;
        }
        if (类型.加农炮(itemid)) {
            return MapleWeaponType.加农炮;
        }
        if (类型.太刀(itemid)) {
            return MapleWeaponType.太刀;
        }
        if (类型.扇子(itemid)) {
            return MapleWeaponType.扇子;
        }
        if (类型.琉(itemid)) {
            return MapleWeaponType.琉;
        }
        if (类型.璃(itemid)) {
            return MapleWeaponType.璃;
        }
        return MapleWeaponType.未知;
    }

    public static byte gachaponRareItem(final int itemid) {
        switch (itemid) {
            case 2340000: // White Scroll
            case 2049100: // Chaos Scroll
            case 3010014: // Moon Star Chair
            case 3010043: // Halloween Brromstick
            case 3010073: // Giant Pink bean Cushion
            case 3010072: // Miwok Chief's Chair
            case 3010068: // Lotus Leaf Chair
            case 3010085: // Olivia's Chair
            case 3010118: // Musical Note Chair
            case 3010124: // Dunas Jet Char
            case 3010125: // Nibelung Battleship
            case 3010131: //chewing panda chair
            case 3010137: // Dragon lord Chair
            case 3010156: // Visitor Representative
            case 3010615: // Nao Resting
            case 3010592: //Black Bean Chair
            case 3010602: // Heart Cloud Chair
            case 3010670: // absolute Ring chair
            case 3010728: // ilove Maplestory
            case 1342033: // VIP Katara
            case 1372078: // VIP wand
            case 1382099: // Staff
            case 1402090: // Two handed Sword
            case 1412062: // Two Handed Axe
            case 1422063: // Two handed Blunt Weapon
            case 1432081: // Spear
            case 1442111: // Polearm
            case 1452106: // Bow
            case 1462091: // Crossbow
            case 1472117: // Claw
            case 1482079: // Knuckle
            case 1492079: // Gun
            case 1302147: // one sword
            case 1312062: // One handed Axe
            case 1322090: // One Handed Blunt Weapon
            case 1332120: // Dagger(LUK)
            case 1332125: // Dagger (STR)< end of VIP
            case 1102041: // Pink Adventure Cape
            case 1022082: // Spectrum Goog
            case 1072238: // Violet snow shoes
            case 5062002: // Super Miracle
            case 5062003: // Miracle
            case 5062005: // Miracle
            case 2040834: // Scroll for gloves for att 50%^
            case 1102042: // Purple adventure cape
                return 2;
            //1 = wedding msg o.o
        }
        return 0;
    }

    public static boolean isOverPoweredEquip(final MapleClient c, final int itemId, short slot) {
        Equip source = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(slot);
        return source.getAcc() > 1000
                || source.getAvoid() > 1000
                || source.getStr() > 500
                || source.getDex() > 500
                || source.getInt() > 500
                || source.getLuk() > 500
                || source.getEnhance() > 25
                || source.getHands() > 100
                || source.getHp() > 5000
                || source.getMp() > 5000
                || source.getJump() > 100
                || source.getSpeed() > 100
                || source.getMatk() > 1000
                || source.getMdef() > 1500
                || source.getUpgradeSlots() > 32
                || source.getViciousHammer() > 1
                || source.getWatk() > 1000
                || source.getWdef() > 1500 /*|| source.getLevel() > 32*/;
    }

    public static boolean isForGM(int itemid) {
        return (itemid >= 2049335 && itemid <= 2049349) || //强化卷轴
                itemid == 2430011 || //特务召唤
                itemid == 2430012 || //移除特务
                itemid == 2430124 || //GM测试
                itemid == 2002085;//GM的无敌饮料
    }

    public static boolean isMadeByGM(final MapleClient c, final int itemId, short slot) {
        Equip source = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(slot);
        MapleCharacter gm = c.getChannelServer().getPlayerStorage().getCharacterByName(source.getOwner());
        if (source.getOwner() == null || source.getOwner().isEmpty() || gm == null) {
            return false;
        }
        return gm.isStaff();
    }

    public static int getEffectItemID(int itemId) {
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        Map<String, Integer> stats = ii.getEquipStats(itemId);
        if (stats.containsKey("effectItemID")) {
            return stats.get("effectItemID");
        }
        return 0;
    }

    public static short[] getEquipedSlot(int itemId) {
        boolean isCash = MapleItemInformationProvider.getInstance().isCash(itemId);
        if (类型.帽子(itemId)) {
            if (isCash) {
                return new short[]{-101};
            } else {
                return new short[]{-1};
            }
        } else if (类型.脸饰(itemId)) {
            if (isCash) {
                return new short[]{-102};
            } else {
                return new short[]{-2};
            }
        } else if (类型.眼饰(itemId)) {
            if (isCash) {
                return new short[]{-103};
            } else {
                return new short[]{-3};
            }
        } else if (类型.耳环(itemId)) {
            if (isCash) {
                return new short[]{-104};
            } else {
                return new short[]{-4};
            }
        } else if (类型.上衣(itemId) || 类型.套服(itemId)) {
            if (isCash) {
                return new short[]{-105};
            } else {
                return new short[]{-5};
            }
        } else if (类型.裤裙(itemId)) {
            if (isCash) {
                return new short[]{-106};
            } else {
                return new short[]{-6};
            }
        } else if (类型.鞋子(itemId)) {
            if (isCash) {
                return new short[]{-107};
            } else {
                return new short[]{-7};
            }
        } else if (类型.手套(itemId)) {
            if (isCash) {
                return new short[]{-108};
            } else {
                return new short[]{-8};
            }
        } else if (类型.披风(itemId)) {
            if (isCash) {
                return new short[]{-109};
            } else {
                return new short[]{-9};
            }
        } else if (类型.副手(itemId)) {
            if (isCash) {
                return new short[]{-110};
            } else {
                return new short[]{-10};
            }
        } else if (类型.武器(itemId)) {
            if (isCash) {
                return new short[]{-111};
            } else {
                return new short[]{-11};
            }
        } else if (类型.戒指(itemId)) {
            if (isCash) {
                return new short[]{-112, -113, -115, -116};
            } else {
                return new short[]{-12, -13, -15, -16};
            }
        } else if (类型.坠饰(itemId)) {
            return new short[]{-17, -36};
        } else if (类型.骑宠(itemId)) {
            return new short[]{-18};
        } else if (类型.马鞍(itemId)) {
            return new short[]{-19};
        } else if (类型.勋章(itemId)) {
            return new short[]{-21};
        } else if (类型.腰带(itemId)) {
            return new short[]{-22};
        } else if (类型.肩饰(itemId)) {
            return new short[]{-28};
        } else if (类型.口袋道具(itemId)) {
            return new short[]{-31};
        } else if (类型.机器人(itemId)) {
            return new short[]{-32};
        } else if (类型.心脏(itemId)) {
            return new short[]{-33};
        } else if (类型.胸章(itemId)) {
            return new short[]{-34};
        } else if (类型.能源(itemId)) {
            return new short[]{-35};
        } else if (类型.宠物装备(itemId)) {
            return new short[]{-114, -124, -126};
        } else if (类型.龙面具(itemId)) {
            return new short[]{-1000};
        } else if (类型.龙坠饰(itemId)) {
            return new short[]{-1001};
        } else if (类型.龙之翼(itemId)) {
            return new short[]{-1002};
        } else if (类型.龙尾巴(itemId)) {
            return new short[]{-1003};
        } else if (类型.引擎(itemId)) {
            return new short[]{-1100};
        } else if (类型.手臂(itemId)) {
            return new short[]{-1101};
        } else if (类型.腿(itemId)) {
            return new short[]{-1102};
        } else if (类型.机壳(itemId)) {
            return new short[]{-1103};
        } else if (类型.晶体管(itemId)) {
            return new short[]{-1104};
        } else if (类型.图腾(itemId)) {
            return new short[]{-5000, -5001, -5002};
        } else {
            return new short[0];
        }
    }

    public static boolean sub_609CDE(int slot, int type) {
        return (type - 3) <= 1 && slot >= 0 && slot < sub_5015E5(type);
    }

    public static int sub_5015E5(int type) {
        if (type == 3) {
            return 2;
        } else if (type == 4) {
            return 6;
        } else {
            return 0;
        }
    }

    public static boolean is透明短刀(int itemID) {
        switch (itemID) {
            case 1342069:
                return true;
        }
        return false;
    }
    
    /*
     * 检测装备是否是武器
     * 夜光武器: 1212000 开始
     * 萝莉武器: 1222000 开始
     * 双弩武器: 1522000 - 1522054
     * 火炮武器: 1532000 - 1532058
     * 复仇武器: 1232000 - 1232056
     * 尖兵武器: 1242000 - 1242059
     * 驯兽武器: 1252000 - 1252063
     */
    public static boolean isWeapon(int itemId) {
        if (itemId == 1342069) { //空气刃 双刀副手 点装道具
            return false;
        }
        return itemId >= 1300000 && itemId < 1540000 || itemId / 1000 == 1212 || itemId / 1000 == 1222 || itemId / 1000 == 1232 || itemId / 1000 == 1242 || itemId / 1000 == 1252;
    }
    
    public static MapleInventoryType getInventoryType(int itemId) {
        byte type = (byte) (itemId / 1000000);
        if (type < 1 || type > 5) {
            return MapleInventoryType.UNDEFINED;
        }
        return MapleInventoryType.getByType(type);
    }
}
