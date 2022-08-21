package handling.channel.handler;

import client.MapleBeans;
import client.MapleCharacter;
import client.MapleClient;
import constants.BeansConstants;
import constants.GameConstants;
import server.Randomizer;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.data.LittleEndianAccessor;

import java.util.ArrayList;
import java.util.List;

public class BeanGame {

    public static int 进洞次数 = 0;
    public static int 第一排 = 0;
    public static int 第三排 = 0;
    public static int 第二排 = 0;
    public static int 启动打怪效果 = 0;
    public static int 中奖率 = 0;
    public static int 加速旋转 = 0;
    public static boolean 打中女皇出现特效A = false;//false = 启动动画效果
    public static boolean 打中女皇出现特效B = false;//false = 启动动画效果
    public static int 蓝 = 0;
    public static int 绿 = 0;
    public static int 红 = 0;
    public static int 黄金狗设置局数 = 0;
    //public static int 海洋帽子 = 1002743;

    public static final void BeansGameAction(LittleEndianAccessor slea, MapleClient c) {
        /*
        第一
        1 = 3
        2 = 6
        3 = 9
        4 = 2
        5 = 5
        6 = 8
        7 = 4
        8 = 7
        9 = 1
        
        第三
        1 = 5
        2 = 3
        3 = 8
        4 = 6
        5 = 4
        6 = 9
        7 = 1
        8 = 7
        9 = 2
        
        0 大白怪
        1 紫怪
        2 飞侠
        3 粉怪
        4 海盗
        5 小白怪
        6 法师
        7 战士
        8 弓箭手
        9 女皇
         */
 /*public static int[] 豆豆装备 = {1002695, 1002609, 1002665, 1002985, 1002986, 1002761, 1002760, 1002583, 1002543, 1002448, 1052137, 1092051, 1702232, 1702138};
    public static int[] 豆豆坐骑 = {1902031, 1902032, 1902033, 1902034, 1902035, 1902037};
    public static int[] 消耗品 = {2022140, 2022141, 2022139, 2022137, 1902035, 1902037};*/
        BeansConstants Beans = new BeansConstants();
        //String 豆豆装备[] = Beans.get豆豆装备();
        //String 豆豆坐骑[] = Beans.get豆豆坐骑();
        //String 消耗品[] = Beans.get消耗品();
        int 海洋帽子几率 = Beans.get海洋帽子几率();
        int 力度搞假 = Beans.get力度搞假();
        int 豆豆奖励范围 = Beans.get豆豆奖励范围();
        String[] 黄金狗几率 = Beans.get黄金狗几率();
        String[] 大白怪 = Beans.get大白怪();
        String[] 小白怪 = Beans.get小白怪();
        String[] 紫色怪 = Beans.get紫色怪();
        String[] 粉色怪 = Beans.get粉色怪();
        String[] 飞侠 = Beans.get飞侠();
        String[] 海盗 = Beans.get海盗();
        String[] 法师 = Beans.get法师();
        String[] 战士 = Beans.get战士();
        String[] 弓箭手 = Beans.get弓箭手();
        String[] 女皇 = Beans.get女皇();
        String[] 白怪奖励 = Beans.get白怪奖励();
        String[] 色怪奖励 = Beans.get色怪奖励();
        String[] 五职业奖励 = Beans.get五职业奖励();
        String[] 女皇奖励 = Beans.get女皇奖励();
        //System.out.println("豆豆出现包" +slea.toString());
        MapleCharacter chr = c.getPlayer();
        List<MapleBeans> beansInfo = new ArrayList<>();
        int type = slea.readByte();
        int 力度 = 0;
        int 豆豆序号 = 0;
        //int 力度搞假A = 0;
        //if (力度搞假 > 0) {
        //    力度搞假A = Randomizer.nextInt(力度搞假);
        //}
        if (chr.getBeans() <= 0) {
            c.getPlayer().dropMessage(1, "你没有小钢珠，无法使用。");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        switch (type) {
            case 0://开始打豆豆
                //力度 = slea.readShort();
                slea.readShort();
                力度 = Randomizer.rand(1000, 5000);
                //slea.readInt();
                chr.setBeansRange(力度 /*+ 力度搞假A*/);
                c.getSession().write(MaplePacketCreator.enableActions());
                break;
            case 1://点开始的时候 确认打豆豆的力度
                //01 E8 03
                //力度 = slea.readShort();
                chr.setBeansRange(力度 /*+ 力度搞假A*/);
                c.getSession().write(MaplePacketCreator.enableActions());
                break;
            case 2://暂时没去注意这个 而且IDA里面也没有对应内容
                //没存在的必要
                //02 1B 00 00 00
                //slea.readInt();
                if (get进洞次数() > 1) {
                    set进洞次数(0);
                } else {
                    set进洞次数(0);
                }
                break;
            case 3:
                //打豆豆进洞以后的数据
                gain进洞次数(1);
                if (get进洞次数() > 7) {
                    set进洞次数(7);
                }
                //  FileoutputUtil.log("log\\打豆豆进洞颜色.log", "进洞颜色" + beansInfo + "\r\n");
                c.getSession().write(MaplePacketCreator.BeansJDCS(get进洞次数(), 加速旋转, 蓝, 绿, 红));
                break;
            case 4:
                //记录进洞次数的黄色豆豆。最多只有7个。
                if (get进洞次数() == 0) {
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }
                gain进洞次数(-1);
                /*  第一排 = Randomizer.nextInt(10);
                第三排 = Randomizer.nextInt(10);*/
                // 第二排 = Randomizer.nextInt(10);
                int 概率 = 0;
                if (黄金狗设置局数 > 0) {
                    概率 = 100;
                }
                if (Randomizer.nextInt(Integer.parseInt(大白怪[0])) > Integer.parseInt(大白怪[1]) && 概率 != 100) {
                    第一排 = 0;
                    第三排 = 0;
                    if (Randomizer.nextInt(Integer.parseInt(大白怪[2])) > Integer.parseInt(大白怪[3])) {
                        第二排 = 0;
                        中奖率 = 100;
                    } else {
                        中奖率 = 0;
                    }
                    启动打怪效果 = 1;
                    打中女皇出现特效A = false;
                    打中女皇出现特效B = false;
                } else if (Randomizer.nextInt(Integer.parseInt(紫色怪[0])) > Integer.parseInt(紫色怪[1]) && 概率 != 100) {
                    第一排 = 9;
                    第三排 = 7;
                    if (Randomizer.nextInt(Integer.parseInt(紫色怪[2])) > Integer.parseInt(紫色怪[3])) {
                        第二排 = 1;
                        中奖率 = 100;
                    } else {
                        中奖率 = 0;
                    }
                    启动打怪效果 = 1;
                    打中女皇出现特效A = false;
                    打中女皇出现特效B = false;
                } else if (Randomizer.nextInt(Integer.parseInt(粉色怪[0])) > Integer.parseInt(粉色怪[1]) && 概率 != 100) {
                    第一排 = 1;
                    第三排 = 2;
                    if (Randomizer.nextInt(Integer.parseInt(粉色怪[2])) > Integer.parseInt(粉色怪[3])) {
                        第二排 = 3;
                        中奖率 = 100;
                    } else {
                        中奖率 = 0;
                    }
                    启动打怪效果 = 1;
                    打中女皇出现特效A = false;
                    打中女皇出现特效B = false;
                } else if (Randomizer.nextInt(Integer.parseInt(小白怪[0])) > Integer.parseInt(小白怪[1]) && 概率 != 100) {
                    第一排 = 5;
                    第三排 = 1;
                    if (Randomizer.nextInt(Integer.parseInt(小白怪[2])) > Integer.parseInt(小白怪[3])) {
                        第二排 = 5;
                        中奖率 = 100;
                    } else {
                        中奖率 = 0;
                    }
                    启动打怪效果 = 1;
                    打中女皇出现特效A = false;
                    打中女皇出现特效B = false;
                } else if (Randomizer.nextInt(Integer.parseInt(飞侠[0])) > Integer.parseInt(飞侠[1]) && 概率 != 100) {
                    第一排 = 4;
                    第三排 = 9;
                    if (Randomizer.nextInt(Integer.parseInt(飞侠[2])) > Integer.parseInt(飞侠[3])) {
                        第二排 = 2;
                        中奖率 = 100;
                    } else {
                        中奖率 = 0;
                    }
                    启动打怪效果 = 1;
                    打中女皇出现特效A = false;
                    打中女皇出现特效B = false;
                } else if (Randomizer.nextInt(Integer.parseInt(海盗[0])) > Integer.parseInt(海盗[1]) && 概率 != 100) {
                    第一排 = 7;
                    第三排 = 5;
                    if (Randomizer.nextInt(Integer.parseInt(海盗[2])) > Integer.parseInt(海盗[3])) {
                        第二排 = 4;
                        中奖率 = 100;
                    } else {
                        中奖率 = 0;
                    }
                    启动打怪效果 = 1;
                    打中女皇出现特效A = false;
                    打中女皇出现特效B = false;
                } else if (Randomizer.nextInt(Integer.parseInt(法师[0])) > Integer.parseInt(法师[1]) && 概率 != 100) {
                    第一排 = 2;
                    第三排 = 4;
                    if (Randomizer.nextInt(Integer.parseInt(法师[2])) > Integer.parseInt(法师[3])) {
                        第二排 = 6;
                        中奖率 = 100;
                    } else {
                        中奖率 = 0;
                    }
                    启动打怪效果 = 1;
                    打中女皇出现特效A = false;
                    打中女皇出现特效B = false;
                } else if (Randomizer.nextInt(Integer.parseInt(战士[0])) > Integer.parseInt(战士[1]) && 概率 != 100) {
                    第一排 = 8;
                    第三排 = 8;
                    if (Randomizer.nextInt(Integer.parseInt(战士[2])) > Integer.parseInt(战士[3])) {
                        第二排 = 7;
                        中奖率 = 100;
                    } else {
                        中奖率 = 0;
                    }
                    启动打怪效果 = 1;
                    打中女皇出现特效A = false;
                    打中女皇出现特效B = false;
                } else if (Randomizer.nextInt(Integer.parseInt(弓箭手[0])) > Integer.parseInt(弓箭手[1]) && 概率 != 100) {
                    第一排 = 6;
                    第三排 = 3;
                    if (Randomizer.nextInt(Integer.parseInt(弓箭手[2])) > Integer.parseInt(弓箭手[3])) {
                        第二排 = 8;
                        中奖率 = 100;
                    } else {
                        中奖率 = 0;
                    }
                    启动打怪效果 = 1;
                    打中女皇出现特效A = false;
                    打中女皇出现特效B = false;
                } else if (Randomizer.nextInt(Integer.parseInt(女皇[0])) > Integer.parseInt(女皇[1]) || 概率 == 100) {
                    第一排 = 3;
                    第三排 = 6;
                    if (黄金狗设置局数 > 0) {
                        第二排 = 9;
                        中奖率 = 100;
                        黄金狗设置局数 = 0;
                    } else if (Randomizer.nextInt(Integer.parseInt(女皇[2])) > Integer.parseInt(女皇[3])) {
                        第二排 = 9;
                        中奖率 = 100;
                    } else {
                        中奖率 = 0;
                    }
                    启动打怪效果 = 1;
                    打中女皇出现特效A = false;
                    打中女皇出现特效B = false;
                } else {
                    第一排 = Randomizer.nextInt(10);
                    switch (第一排) {
                        case 0:
                            第三排 = Randomizer.nextInt(9) + 1;
                            break;
                        case 1:
                            第三排 = Randomizer.nextInt(7) + 3;
                            break;
                        case 2:
                            第三排 = Randomizer.nextInt(5) + 5;
                            break;
                        case 3:
                            第三排 = Randomizer.nextInt(3) + 7;
                            break;
                        case 4:
                            第三排 = Randomizer.nextInt(9);
                            break;
                        case 5:
                            第三排 = Randomizer.nextInt(8) + 2;
                            break;
                        case 6:
                            第三排 = Randomizer.nextInt(6) + 4;
                            break;
                        case 7:
                            第三排 = Randomizer.nextInt(4) + 6;
                            break;
                        case 8:
                            第三排 = Randomizer.nextInt(8);
                            break;
                        case 9:
                            第三排 = Randomizer.nextInt(7);
                            break;
                    }
                    第二排 = Randomizer.nextInt(10);
                    启动打怪效果 = 0;
                    中奖率 = 0;
                    加速旋转 = 0;
                    打中女皇出现特效A = false;
                    打中女皇出现特效B = false;
                }
                c.getSession().write(MaplePacketCreator.BeansJDXZ(get进洞次数(), 第一排, 第三排, 第二排, 启动打怪效果, 中奖率, 加速旋转, 打中女皇出现特效A, 打中女皇出现特效B));
                c.sendPacket(MaplePacketCreator.enableActions());
                if (第二排 != 9) {
                    if (Randomizer.nextInt(Integer.parseInt(黄金狗几率[0])) == Integer.parseInt(黄金狗几率[1]) && 黄金狗设置局数 == 0) {
                        黄金狗设置局数 = 1;
                        c.getSession().write(MaplePacketCreator.BeansHJG((byte) 1));
                    } else {
                        黄金狗设置局数 = 0;
                        c.getSession().write(MaplePacketCreator.BeansHJG((byte) 0));
                    }
                }
                break;
            case 5://应该是普通的怪物中奖 //移动以后三排一样的 这里应该是处理 打完以后出现的 看看是不是判断一排的代码
                //移动以后三排一样的 这里应该是处理 打完以后出现的 看看是不是判断一排的代码
                if ((第一排 == 0 && 第三排 == 0 && 第二排 == 0)
                        || (第一排 == 9 && 第三排 == 7 && 第二排 == 1)
                        || (第一排 == 4 && 第三排 == 9 && 第二排 == 2)
                        || (第一排 == 1 && 第三排 == 2 && 第二排 == 3)
                        || (第一排 == 7 && 第三排 == 5 && 第二排 == 4)
                        || (第一排 == 5 && 第三排 == 1 && 第二排 == 5)
                        || (第一排 == 2 && 第三排 == 4 && 第二排 == 6)
                        || (第一排 == 8 && 第三排 == 8 && 第二排 == 7)
                        || (第一排 == 6 && 第三排 == 3 && 第二排 == 8)
                        || (第一排 == 3 && 第三排 == 6 && 第二排 == 9)) {
                    int itemId = 0;
                    //int exp = GameConstants.getExpNeededForLevel(c.getPlayer().getLevel() + 1) / 2000;
                    final int experi = Randomizer.nextInt(Math.abs(GameConstants.getExpNeededForLevel(c.getPlayer().getLevel()) / 800) + 1);
                    int beilu = (c.getPlayer().getLevel() <= 50) ? 1 : (c.getPlayer().getLevel() > 50 && c.getPlayer().getLevel() <= 100) ? 2 : (c.getPlayer().getLevel() > 100 && c.getPlayer().getLevel() <= 150) ? 4 : (c.getPlayer().getLevel() > 150 && c.getPlayer().getLevel() <= 200) ? 8 : 1;
                    final int experi2 = ((int) Math.ceil(experi / beilu));
                    int x = Randomizer.nextInt(100) + 1;
                    int count = 1;
                    switch (第二排) {
                        case 5://小白怪
                        case 0://大白怪
                            if (Randomizer.nextInt(Integer.parseInt(白怪奖励[0])) > Randomizer.nextInt(Integer.parseInt(白怪奖励[1]))) {
                                c.getPlayer().gainExp(experi2, false, false, false);
                                c.getPlayer().dropMessage(5, "在小钢珠中获得：" + experi2 + "经验值！");
                            } else if (Randomizer.nextInt(Integer.parseInt(白怪奖励[2])) > Randomizer.nextInt(Integer.parseInt(白怪奖励[3]))) {
                                c.getPlayer().gainExp(experi2, false, false, false);
                                c.getPlayer().dropMessage(5, "在小钢珠中获得：" + experi2 + "经验值！");
                            }
                            c.sendPacket(MaplePacketCreator.enableActions());
                            break;
                        case 1://紫色怪
                        case 3://粉色怪
                            if (Randomizer.nextInt(Integer.parseInt(色怪奖励[0])) > Randomizer.nextInt(Integer.parseInt(色怪奖励[1]))) {
                                c.getPlayer().gainExp(experi2, false, false, false);
                                c.getPlayer().dropMessage(5, "在小钢珠中获得：" + experi2 + "经验值！");
                            } else if (Randomizer.nextInt(Integer.parseInt(色怪奖励[4])) > Randomizer.nextInt(Integer.parseInt(色怪奖励[5]))) {
                                c.getPlayer().gainExp(experi2, false, false, false);
                                c.getPlayer().dropMessage(5, "在小钢珠中获得：" + experi2 + "经验值！");
                            } else if (Randomizer.nextInt(Integer.parseInt(色怪奖励[2])) > Randomizer.nextInt(Integer.parseInt(色怪奖励[3]))) {
                                c.getPlayer().gainExp(experi2, false, false, false);
                                c.getPlayer().dropMessage(5, "在小钢珠中获得：" + experi2 + "经验值！");
                            }
                            c.sendPacket(MaplePacketCreator.enableActions());
                            break;
                        case 2://飞侠
                        case 4://海盗
                        case 6://法师
                        case 7://战士
                        case 8://弓箭手
                            if (Randomizer.nextInt(Integer.parseInt(五职业奖励[0])) > Randomizer.nextInt(Integer.parseInt(五职业奖励[1]))) {
                                c.getPlayer().gainExp(experi2, false, false, false);
                                c.getPlayer().dropMessage(5, "在小钢珠中获得：" + experi2 + "经验值！");
                            } else if (Randomizer.nextInt(Integer.parseInt(五职业奖励[4])) > Randomizer.nextInt(Integer.parseInt(五职业奖励[5]))) {
                                c.getPlayer().gainExp(experi2, false, false, false);
                                c.getPlayer().dropMessage(5, "在小钢珠中获得：" + experi2 + "经验值！");
                            } else if (Randomizer.nextInt(Integer.parseInt(五职业奖励[6])) > Randomizer.nextInt(Integer.parseInt(五职业奖励[7]))) {
                                c.getPlayer().gainExp(experi2, false, false, false);
                                c.getPlayer().dropMessage(5, "在小钢珠中获得：" + experi2 + "经验值！");
                            } else if (Randomizer.nextInt(Integer.parseInt(五职业奖励[2])) > Randomizer.nextInt(Integer.parseInt(五职业奖励[3]))) {
                                c.getPlayer().gainExp(experi2, false, false, false);
                                c.getPlayer().dropMessage(5, "在小钢珠中获得：" + experi2 + "经验值！");
                            }
                            c.sendPacket(MaplePacketCreator.enableActions());
                            break;
                        case 9://女皇
                            if (Randomizer.nextInt(Integer.parseInt(女皇奖励[4])) > Randomizer.nextInt(Integer.parseInt(女皇奖励[5]))) {
                                c.getPlayer().gainExp(experi2, false, false, false);
                                c.getPlayer().dropMessage(5, "在小钢珠中获得：" + experi2 + "经验值！");
                            } else if (x == 海洋帽子几率) {
                                c.getPlayer().gainExp(experi2, false, false, false);
                                c.getPlayer().dropMessage(5, "在小钢珠中获得：" + experi2 + "经验值！");
                            } else if (Randomizer.nextInt(Integer.parseInt(女皇奖励[6])) > Randomizer.nextInt(Integer.parseInt(女皇奖励[7]))) {
                                c.getPlayer().gainExp(experi2, false, false, false);
                                c.getPlayer().dropMessage(5, "在小钢珠中获得：" + experi2 + "经验值！");
                            } else if (Randomizer.nextInt(Integer.parseInt(女皇奖励[2])) > Randomizer.nextInt(Integer.parseInt(女皇奖励[3]))) {
                                c.getPlayer().gainExp(experi2, false, false, false);
                                c.getPlayer().dropMessage(5, "在小钢珠中获得：" + experi2 + "经验值！");
                            }
                            c.sendPacket(MaplePacketCreator.enableActions());
                            break;
                        default:
                            System.out.println("未处理的类型A【" + type + "】\n包" + slea);
                            break;
                    }
                    /*if (c.getPlayer().getInventory(GameConstants.getInventoryType(itemId)).getNextFreeSlot() > -1 && itemId != 0) {
                        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
                        MapleInventoryType type1 = ii.getInventoryTypeCS(itemId);
                        if (type1.equals(MapleInventoryType.EQUIP)) {
                            count = 1;
                        }
                        MapleInventoryManipulator.addById(c, itemId, (short) count, "豆豆机奖励");
                    }*/
                    // int 奖励豆豆 = Randomizer.nextInt(150) + 50;
                    int 奖励豆豆 = /*第二排 +*/ 豆豆奖励范围;
                    //chr.gainBeans(奖励豆豆);
                    chr.modifyJF(4, 奖励豆豆);
                    c.getPlayer().dropMessage(5, "在小钢珠中获得: " + 奖励豆豆 + "小钢珠积分！");
                    // chr.gainExp(1, true, false, true);
                    if (chr.getMapId() == 809030000) {
                        String notea = "恭喜你小钢珠成功中奖！当前中获得：" + 奖励豆豆 + "小钢珠积分！";
                        c.getSession().write(MaplePacketCreator.BeansGameMessage(0x01, 0x01, notea));
                    }
                    if (黄金狗设置局数 > 0 && 第二排 == 9) {
                        黄金狗设置局数 = 0;
                        c.getSession().write(MaplePacketCreator.BeansHJG((byte) 0));
                    }
                    //c.getSession().write(MaplePacketCreator.BeansZJgeidd(true, 奖励豆豆));
                }
                break;
            case 7:
                if (黄金狗设置局数 > 0) {
                    黄金狗设置局数 = 0;
                    c.getSession().write(MaplePacketCreator.BeansHJG((byte) 0));
                }
                //c.getSession().write(MaplePacketCreator.BeansZJgeidd(true, 0));
                break;
            case 0x0B:
                //0B[11] - 点start/stop的时候获得start/stop时豆豆的力度和序号
                //0 - 刚打开界面的时候设置的力度
                //力度 = slea.readShort();
                slea.readShort();
                力度 = Randomizer.rand(1000, 5000);
                豆豆序号 = slea.readInt() + 1;//这里获得的Int是最后一个豆豆的序号
                chr.setBeansRange(力度/* + 力度搞假A*/);
                chr.setBeansNum(豆豆序号);
                if (豆豆序号 == 1) {
                    chr.setCanSetBeansNum(false);
                }
                break;
            case 6:
                //点暂停或者满5个豆豆后客户端发送的豆豆信息 最多5个豆豆
                slea.skip(1);
                int 循环次数 = slea.readByte();
                if (循环次数 == 0) {
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                } else if (循环次数 != 1) {
                    slea.skip((循环次数 - 1) * 8);
                }   //int 临时豆豆序号 = slea.readInt();
                //豆豆序号 = (临时豆豆序号 == 1 ? 0 : 临时豆豆序号) + (chr.getBeansNum()  == 临时豆豆序号 ? 1 : 0);
                if (chr.isCanSetBeansNum()) {
                    chr.setBeansNum(chr.getBeansNum() + 循环次数);
                }
                chr.gainBeans(-循环次数);
                chr.setCanSetBeansNum(true);
                break;
            default:
                System.out.println("未处理未知类型【" + type + "】\n包" + slea);
                //FileoutputUtil.log("logs/小钢珠未知类型.txt", "类型【" + type + "】\n包" + slea.toString());
                FileoutputUtil.logToFile("logs/小钢珠未知类型.txt", "时间: " + FileoutputUtil.NowTime() + " IP: " + chr.getClient().getSessionIPAddress() + " MAC: " + chr.getNowMacs() + chr.getName() + "类型【" + type + "】\n包" + slea + "\r\n");
                break;
        }
        if (type == 0x0B || type == 6) {
            for (int i = 0; i < 5; i++) {
                beansInfo.add(new MapleBeans(rand(1000, 5000), getBeanType(), chr.getBeansNum() + i));
            }
            c.getSession().write(MaplePacketCreator.showBeans(beansInfo));
            c.sendPacket(MaplePacketCreator.enableActions());
        }
        c.getSession().write(MaplePacketCreator.updateBeans(c.getPlayer()));
        c.sendPacket(MaplePacketCreator.enableActions());
    }

    private static int getBeanType() {
        int random = rand(1, 100);
        int beanType = 0;
         /*switch (random) {
            case 2:
                beanType = 1;
                break;
            case 49:
                beanType = 2;
                break;
            case 99:
                beanType = 3;
                break;
        }*/
        return beanType;
    }

    public static final int get进洞次数() {
        return 进洞次数;
    }

    public static final void gain进洞次数(int a) {
        进洞次数 += a;
    }

    public static final void set进洞次数(int a) {
        进洞次数 = a;
    }

    private static int rand(int lbound, int ubound) {
        return (int) ((Math.random() * (ubound - lbound + 1)) + lbound);

    }

    public enum BeansType {
        开始打豆豆(0x00),
        颜色求进洞(0x03),
        进洞旋转(0x04),
        奖励豆豆效果(0x05),
        未知效果(0x06),
        黄金狗(0x07),
        奖励豆豆效果B(0x08),
        领奖NPC(0x09);

        final byte type;

        BeansType(int type) {
            this.type = (byte) type;
        }

        public byte getType() {
            return type;
        }
    }

    /*public class Beans {

        private int number;
        private int type;
        private int pos;

        public Beans(int pos, int type, int number) {
            this.pos = pos;
            this.number = number;
            this.type = type;
        }

        public int getType() {
            return type;
        }

        public int getNumber() {
            return number;
        }

        public int getPos() {
            return pos;
        }
    }*/
//}
    public static final void updateBeans(LittleEndianAccessor slea, MapleClient c) {
        c.getSession().write(MaplePacketCreator.updateBeans(c.getPlayer()));
        c.getSession().write(MaplePacketCreator.enableActions());
    }
}
