var a = 0;
var Text;
// var PenItemId = 4034999;//注射用道具ID
var PenItemId = 4033248;//注射用道具ID，金色枫叶
var Level;
var NeededItem;
var GiveItem;
var Shuxing;
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt1 = "#fMap/MapHelper.img/weather/candy/4#";
var ttt2 = "#fMap/MapHelper.img/weather/candy/5#";
var ttt3 = "#fMap/MapHelper.img/weather/candy/6#";

//材料需求
requires = [
    20,         //index 0  level 1
    40,         //index 1  level 2
    80,         //index 2  level 3
    160,        //index 3  level 4
    320,        //index 4  level 5
    640,        //index 5  level 6
    1280,       //index 6  level 7
    2560,       //index 7  level 8
    3688,       //index 8  level 9
    4888,       //index 9  level 10
    6888,       //index 10  level 11
    8888,       //index 11  level 12
    12888,       //index 12  level 13
    16888,       //index 13  level 14
    26888,       //index 13  level 15
];
    
//基础属性
BaseAttrs= [
    10,         //index 0  level 1
    20,         //index 1  level 2
    30,         //index 2  level 3  
    40,        //index 3  level 4
    50,        //index 4  level 5
    60,        //index 5  level 6
    70,       //index 6  level 7
    80,       //index 7  level 8
    90,       //index 8  level 9
    100,       //index 9  level 10
    110,       //index 10  level 11
    120,       //index 11  level 12
    130,       //index 12  level 13
    140,       //index 13  level 14
    160,       //index 14  level 15
];


var datas = [{
    itemId: 1112785,
    require: requires[0],         //物品需求
    baseAttr: BaseAttrs[0],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 0,       //boss伤害
    ignoreDefense: 0,    //无视
    TotalDamage: 0,    //总伤
}, {
    itemId: 1112785,
    require: requires[1],         //物品需求
    baseAttr: BaseAttrs[1],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 0,       //boss伤害
    ignoreDefense: 0,    //无视
    TotalDamage: 0,    //总伤
}, {
    itemId: 1112785,
    require: requires[2],         //物品需求
    baseAttr: BaseAttrs[2],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 0,       //boss伤害
    ignoreDefense: 0,    //无视
    TotalDamage: 0,    //总伤
}, {
    itemId: 1112785,
    require: requires[3],         //物品需求
    baseAttr: BaseAttrs[3],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 0,       //boss伤害
    ignoreDefense: 0,    //无视
    TotalDamage: 0,    //总伤
}, {
    itemId: 1112785,
    require: requires[4],         //物品需求
    baseAttr: BaseAttrs[4],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 0,       //boss伤害
    ignoreDefense: 0,    //无视
    TotalDamage: 0,    //总伤
}, {
    itemId: 1112785,
    require: requires[5],         //物品需求
    baseAttr: BaseAttrs[5],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 10,       //boss伤害
    ignoreDefense: 0,    //无视
    TotalDamage: 0,    //总伤
}, {
    itemId: 1112785,
    require: requires[6],         //物品需求
    baseAttr: BaseAttrs[6],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 15,       //boss伤害
    ignoreDefense: 0,    //无视
    TotalDamage: 0,    //总伤
}, {
    itemId: 1112785,
    require: requires[7],         //物品需求
    baseAttr: BaseAttrs[7],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 20,       //boss伤害
    ignoreDefense: 5,    //无视
    TotalDamage: 0,    //总伤
}, {
    itemId: 1112785,
    require: requires[8],         //物品需求
    baseAttr: BaseAttrs[8],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 20,       //boss伤害
    ignoreDefense: 10,    //无视
    TotalDamage: 0,    //总伤
}, {
    itemId: 1112785,
    require: requires[9],         //物品需求
    baseAttr: BaseAttrs[9],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 25,       //boss伤害
    ignoreDefense: 10,    //无视
    TotalDamage: 5,    //总伤
}, {
    itemId: 1112785,
    require: requires[10],         //物品需求
    baseAttr: BaseAttrs[10],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 25,       //boss伤害
    ignoreDefense: 15,    //无视
    TotalDamage: 10,    //总伤
}, {
    itemId: 1112785,
    require: requires[11],         //物品需求
    baseAttr: BaseAttrs[11],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 30,       //boss伤害
    ignoreDefense: 15,    //无视
    TotalDamage: 10,    //总伤
}, {
    itemId: 1112785,
    require: requires[12],         //物品需求
    baseAttr: BaseAttrs[12],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 35,       //boss伤害
    ignoreDefense: 20,    //无视
    TotalDamage: 15,    //总伤
}, {
    itemId: 1112785,
    require: requires[13],         //物品需求
    baseAttr: BaseAttrs[13],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 40,       //boss伤害
    ignoreDefense: 25,    //无视
    TotalDamage: 20,    //总伤
}, {
    itemId: 1112785,
    require: requires[14],         //物品需求
    baseAttr: BaseAttrs[14],        //基础属性，力量 敏捷 智力 运气 攻击力 魔力
    bossDamage: 50,       //boss伤害
    ignoreDefense: 30,    //无视
    TotalDamage: 25,    //总伤
}
];

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
        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            Text = "#r欢迎使用魔戒锻造系统，金色枫叶各大BOSS均有几率掉落：#k\r\n\r\n\t#b当前背包里有： #r[ " + cm.getItemQuantity(PenItemId) + " ]" +
                " #b个" +
                " #r#t" + PenItemId + "##v" + PenItemId + "##k\r\n\r\n";
            Level = Math.abs(cm.getPQLog('魔戒进化', 1));
           
            if (Level >= datas.length ) {
                Text = "你已经全部进阶完毕了。\r\nError!\r\n";
            } else {

                Text += " #b需要灌注 #r(" + Math.abs(cm.getPQLog('金色枫叶能量', -1)) + "/" + datas[Level].require + ")#k" +
                    " #b能量可升阶至" + (Level + 1) + "阶" +
                    " \r\n\r\n\t\t#d可加成全属性" + datas[Level].baseAttr + "点(包含攻击)\r\n\r\n"
            }
 
            if (Text == "你已经全部进阶完毕了。\r\nError!\r\n") {
                cm.sendOk("你已经全部进阶完毕了。")
                cm.dispose();
            } else {
                Text += "#b#L0# " + ttt1 + " 灌注能量#l #L1#  " + ttt2 + " 魔戒进阶#l #L2#  " + ttt3 + " 进阶介绍#l#k\r\n \r\n";
                cm.sendSimple(Text);
            }
        } else if (status == 1) {
            if (selection == 0) {
                cm.sendGetNumber("请输入您要注射的金色枫叶数量。", cm.getItemQuantity(PenItemId), 0, 99999);
            } else if (selection == 1) {//进阶
                NeededItem = datas[Level].itemId;
                GiveItem = datas[Level].itemId;
                Shuxing = datas[Level].baseAttr;
                status = 2;
                cm.sendSimple("此次合成需要如下要求：\r\n1、#i" + NeededItem + "# #t" + NeededItem + "# x1\r\n\r\n2、灌注能量" + datas[Level].require + "点，目前为" + Math.abs(cm.getPQLog('金色枫叶能量', -1)) + "点。#b#e\r\n#L0# 点击我进行魔戒进化！");
            } else {//介绍
                var txt = "";
                for (var i = 0; i < datas.length; i++) {
                    txt += "#z" + datas[i].itemId + "#\r\n";
                }
                cm.sendOk("\t\t#e#b魔戒进阶全属性预览#k#n\r\n\r\n\r\n#r" + txt);
                cm.dispose();
            }
        } else if (status == 2) {
            quantity = selection;
            //var rand = Math.floor(Math.random() * 3) + 1;
            if (quantity == null) {
                cm.sendOk("什么？请输入您要注射的金色枫叶数量！");
                cm.dispose();
            }
            if (quantity > datas[Level].require - Math.abs(cm.getPQLog('金色枫叶能量', -1))) {
                cm.sendOk("对不起，输入的数量不能超过目前阶数的能量值" + datas[Level].require + "。目前阶段等级" + Level + "，目前能量值：" + Math.abs(cm.getPQLog('金色枫叶能量', -1)) + "点。");
                cm.dispose();
            } else {
                if (cm.haveItem(PenItemId, quantity)) {

                    cm.setPQLog('金色枫叶能量', 1, quantity);
                    cm.gainItem(PenItemId, -quantity);
                    if (Math.abs(cm.getPQLog('金色枫叶能量', -1)) >= datas[Level].require) {
                        cm.sendOk("您已成功注射金色枫叶能量 " + quantity + " 点。\r\n您当前阶数所需要的能量值已满。\r\n你可以选择进行进阶了！");
                        cm.worldSpouseMessage(0x17, "『魔戒进阶』 : 玩家 " + cm.getChar().getName() + "  成功给魔戒灌注了 " + quantity + " 点能量！");
                        cm.dispose();
                    } else {
                        cm.sendOk("您已成功注射金色枫叶能量" + quantity + "点。\r\n您目前的金色枫叶能量是: " + Math.abs(cm.getPQLog('金色枫叶能量', -1, 1)) + ".");
                        cm.worldSpouseMessage(0x17, "『魔戒进阶』 : 玩家 " + cm.getChar().getName() + "  成功给魔戒灌注了 " + quantity + " 点能量！");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("请确认您的背包有 #b#t" + PenItemId + "##k？");
                    cm.dispose();
                }
            }
        } else if (status == 3) {
            if (Math.abs(cm.getPQLog('金色枫叶能量', -1), 1) >= datas[Level].require && cm.haveItem(NeededItem)) {
                if (cm.getEquipBySlot(1) == null || cm.getEquipBySlot(1).getItemId() != NeededItem) {
                    cm.sendOk("请将#b#t" + NeededItem + "##k放在装备栏的第一栏！");
                    cm.dispose();
                } else if (Level != 0 && cm.getEquipBySlot(1).getOwner() != "至尊" + (parseInt(Level)) + "阶") {
                    cm.sendOk("只有进行过进阶的道具才能进阶！" + "至尊" + (parseInt(Level)) + "阶");
                    cm.dispose();
                } else {
                    MakeEquip(datas[Level]);
                    cm.resetPQLog('金色枫叶能量');//清空
                    cm.setPQLog('魔戒进化', 1);//进阶1
                    cm.getMap().startMapEffect("星月强大的魔戒拥有玩家 " + cm.getChar().getName() + " 把魔戒升级到 " + (1 + (parseInt(Level))) + " 阶了，大家快去仰望把！！", 5120008);
                    cm.worldSpouseMessage(0x17, "『魔戒进阶』 : 玩家 " + cm.getChar().getName() + " 的魔戒在金色枫叶的灌注下升级到 " + (1 + (parseInt(Level))) + " 阶了！");
                    cm.sendOk("进阶成功!");
                    cm.dispose();
                }
            } else {
                cm.sendOk("你还没有满足所需要的物品。");
                cm.dispose();
            }
        }//status
    }//mode
}//f
function getEquipStatToArray() {//得到装备数据
    EquipStat[0] = cm.getEquipBySlot(1).getStr();//力量
    EquipStat[1] = cm.getEquipBySlot(1).getDex();//敏捷
    EquipStat[2] = cm.getEquipBySlot(1).getInt();//智力
    EquipStat[3] = cm.getEquipBySlot(1).getLuk();//运气
    EquipStat[4] = cm.getEquipBySlot(1).getHp();
    EquipStat[5] = cm.getEquipBySlot(1).getMp();
    EquipStat[6] = cm.getEquipBySlot(1).getWatk();
    EquipStat[7] = cm.getEquipBySlot(1).getMatk();
    EquipStat[8] = cm.getEquipBySlot(1).getWdef();
    EquipStat[9] = cm.getEquipBySlot(1).getMdef();
    EquipStat[10] = cm.getEquipBySlot(1).getAcc();
    EquipStat[11] = cm.getEquipBySlot(1).getAvoid();
    EquipStat[12] = cm.getEquipBySlot(1).getSpeed();
    EquipStat[13] = cm.getEquipBySlot(1).getJump();
    EquipStat[14] = cm.getEquipBySlot(1).getOwnerBreak();
}

function setEquipStatRandom(data) {//设置装备属性
    toDrop.setStr(data.baseAttr);
    toDrop.setDex(data.baseAttr);
    toDrop.setInt(data.baseAttr);
    toDrop.setLuk(data.baseAttr);
    toDrop.setHp(data.baseAttr);
    toDrop.setMp(data.baseAttr);
    toDrop.setWatk(data.baseAttr);
    toDrop.setMatk(data.baseAttr);
    toDrop.setWdef(data.baseAttr);
    toDrop.setMdef(data.baseAttr);
    toDrop.setAcc(data.baseAttr);
    toDrop.setAvoid(data.baseAttr);
    toDrop.setSpeed(data.baseAttr);
    toDrop.setJump(data.baseAttr);

    toDrop.setBossDamage(data.bossDamage);//BOSS伤害：
    toDrop.setIgnorePDR(data.ignoreDefense);//无视防御：
    toDrop.setTotalDamage(data.TotalDamage);//总伤害：


    if(Level>=3){
        toDrop.setPotential(40055, 1, true);
    }
    if(Level>=6){
        toDrop.setPotential(40055, 2, true);
    }
    if(Level>=9){
        toDrop.setPotential(40055, 3, true);
    }
   




    toDrop.setOwner("至尊" + (parseInt(Level + 1)) + "阶");
    /*case 15:
        toDrop.setLimit("至尊" + (parseInt(Level + 1)) + "阶");
     break;
    /*case 16:
     toDrop.setPotential1(v);
     break;
     case 17:
     toDrop.setPotential2(v);
     break;
     case 18:
     toDrop.setPotential3(v);
     break;
     case 19:
     toDrop.setPotential4(v);
     break;
     case 20:
     toDrop.setPotential5(v);
     break;
     case 21:
     toDrop.setPotential6(v);
     break;
     */
}

function MakeEquip(data) {//制作装备
    var rand;
    //var ii = cm.getItemInfo();
    toDrop = cm.getNewEquip(GiveItem).copy(); // 生成一个Equip类(生成这个装备)
    setEquipStatRandom(data);
    cm.removeSlot(1, 1, 1);//删除掉原始道具
    //inventoryType, deleteSlot, deleteQuantity
    //toDrop.setEquipOnlyId(cm.getItemInfo().getNextEquipOnlyId());
    cm.addFromDrop(toDrop);
}