var equip = null;
var change = null;
var ii = Packages.server.MapleItemInformationProvider.getInstance();
var statNames = new Array("力量(STR)", "敏捷(DEX)", "智力(INT)", "运气(LUK)", "红(HP)", "魔(MP)", "物理攻击(Weapon attack)", "魔法攻击(Magic attack)", "物理防御(Weapon defense)", "魔法防御(Magic defense)", "命中率(Accuracy)", "躲避率(Avoidability)", "速度(Speed)", "跳跃(Jump)", "可升级次数(Slots to Upgrade)"); //设置装备各种属性名称
var toDrop;
var needvip = 30166; //需要多少VIP等级以上才能使用此功能

var number = Math.floor(Math.random() * 3 + 1); //设置随机一个数字
var needmark = 31111 * number; //制作一件装备需要的价格
var str = 0; //增加1点力量(STR)价格
var dex = 0; //增加1点敏捷(DEX)价格
var ini = 0; //增加1点智力(INT)价格
var luk = 0; //增加1点运气(LUK)价格
var hp = 0; //增加1点红(HP)价格
var mp = 0; //增加1点魔(MP)价格
var wattack = 0; //增加1点物理攻击(Weapon attack)价格
var mattack = 0; //增加1点魔法攻击(Magic attack)价格
var wdefense = 0; //增加1点物理防御(Weapon defense)价格
var mdefense = 0; //增加1点魔法防御(Magic defense)价格
var accuracy = 0; //增加1点命中率(Accuracy)价格
var avoidability = 5; //增加1点躲避率(Avoidability)价格
var speed = 5; //增加1点速度(Speed)价格
var jump = 5; //增加1点跳跃(Jump)价格
var upgrade = 6; //增加1点可升级次数(Slots to Upgrade)价格
var own = 5; //修改装备名(Own)价格

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if ((status == 1 || status == 3 || status == 4) && mode == 0) {
            cm.dispose();
            return;
        }

        if (mode == 1) status++;
        else if (mode == 0) status--;

        if (status == 0) {
            if (cm.getChar().getId() == needvip) {
                cm.sendYesNo("#d欢迎#d来到#r兔花花冒险岛!你需要制作自己的指定属性装备吗?\r\n\r\n#b┈┈┈┈┈┈━═☆收费说明☆═━┈┈┈┈┈┈\r\n#r增加一点#g力量(STR)#r价格:#g" + str + "#r个兔兔币\r\n#r增加一点#g敏捷(DEX)#r价格:#g" + dex + "#r个兔兔币\r\n#r增加一点#g智力(INI)#r价格:#g" + ini + "#r个兔兔币\r\n#r增加一点#g运气(LUK)#r价格:#g" + luk + "#r个兔兔币\r\n\r\n#r增加一点#g红(HP)#r价格:#g" + hp + "#r个兔兔币\r\n#r增加一点#g魔(MP)#r价格:#g" + mp + "#r个兔兔币\r\n#r增加一点#g物理攻击(Weapon attack)#r价格:#g" + wattack + "#r个兔兔币\r\n#r增加一点#g魔法攻击(Magic attack)#r价格:#g" + mattack + "#r个兔兔币\r\n#r增加一点#g物理防御(Weapon defense)#r价格:#g" + wdefense + "#r个兔兔币\r\n#r增加一点#g魔法防御(Magic defense)#r价格:#g" + mdefense + "#r个兔兔币\r\n\r\n#r增加一点#g命中率(Accuracy)#r价格:#g" + accuracy + "#r个兔兔币\r\n#r增加一点#g躲避率(Avoidability)#r价格:#g" + avoidability + "#r个兔兔币\r\n#r增加一点#g速度(Speed)#r价格:#g" + speed + "#r个兔兔币\r\n#r增加一点#g跳跃(Jump)#r价格:#g" + jump + "#r个兔兔币\r\n#r增加一点#g可升级次数(Slots to Upgrade)#r价格:#g" + upgrade + "#r个兔兔币\r\n#r增加一点#g修改装备名(Own)#r价格:#g" + own + "#r个兔兔币\r\n\r\n#b┈┈┈┈┈┈━═☆特殊说明☆═━┈┈┈┈┈┈\r\n#d只有#gVIP" + needvip + "#d以上的等级才能使用此功能.\r\n#r如果您是#g游戏管理员(Game Master,GM)#r,使用此功能制作指定属性装备,是#g无收取任何费用#r的,但是您要有#g足够#r的兔兔币币!\r\n制作一件装备需要#g" + needmark + "兔兔币#r(即使装备无加任何属性也要收费,避免会出现刷装备的#gBUG#r)");
            } else {
                cm.sendOk("对不起,只有#rGM指定的ID为" + needvip + "的人#k才能使用制作指定属性装备功能..");
                cm.dispose();
            }
        } else if (status == 1) {
            cm.sendGetNumber("请输入装备代码.", 1000000, 1000000, 1999999); //参数为:显示的对话内容,默认输入的内容,可输入装备代码最小值,可输入装备代码最大值 
        } else if (status == 2) {
            var items = ii.getAllItems().toArray(); //从缓存获取装备集合
            for (var i = 0; i < items.length; i++) { //循环所有缓存里面的装备
                if (items[i].itemId == selection) { //判断输入的装备在缓存里面是否存在
                    //equip = ii.getEquipById(selection);
                    toDrop = ii.randomizeStats(ii.getEquipById(selection)).copy(); // 生成一个Equip类(生成这个装备)
                    cm.sendYesNo("你需要制作 #b#v" + selection + "##z" + selection + "##k 吗?");
                    return;
                }
            }
            cm.sendPrev("你需要制作的装备不存在.");
        } else if (status == 3) {
            var needpoints = str * getEquipStat(0) + dex * getEquipStat(1) + ini * getEquipStat(2) + luk * getEquipStat(3) + hp * getEquipStat(4) + mp * getEquipStat(5) + wattack * getEquipStat(6) + mattack * getEquipStat(7) + wdefense * getEquipStat(8) + mdefense * getEquipStat(9) + accuracy * getEquipStat(10) + avoidability * getEquipStat(11) + speed * getEquipStat(12) + jump * getEquipStat(13) + upgrade * getEquipStat(14) + own * 1; //定义增加属性的总共价钱
            var s = "你正在制作: #b#z" + toDrop.getItemId() + "##k.\r\n请随意修改它的属性.\r\n一共需要花费您的#g" + needpoints + " + " + needmark + "#k个兔兔币\r\n如果你是#r游戏管理员(Game Master,GM)#k,就#g无#k收取任何费用!\r\n";
            for (var i = 0; i < 16; i++) {
                s += "#L" + i + "##b" + statNames[i] + ": " + getEquipStat(i) + "#k#l\r\n";
            }

            s += "\r\n#L16##e#r制作装备#k#l";
            cm.sendSimple(s);
        }
        else if (status == 4) {
            if (selection == 16) {
                var needpoints = str * getEquipStat(0) + dex * getEquipStat(1) + ini * getEquipStat(2) + luk * getEquipStat(3) + hp * getEquipStat(4) + mp * getEquipStat(5) + wattack * getEquipStat(6) + mattack * getEquipStat(7) + wdefense * getEquipStat(8) + mdefense * getEquipStat(9) + accuracy * getEquipStat(10) + avoidability * getEquipStat(11) + speed * getEquipStat(12) + jump * getEquipStat(13) + upgrade * getEquipStat(14) + own * 1; //定义增加属性的总共价钱
                if (cm.getHyPay(1) < needpoints+needmark) {
                    cm.sendOk("你的兔兔币余额不足于:#g" + needpoints + " + " + needmark + "#k个.");
                    cm.dispose();
                    return;
                } else {
                    var text;
                    if (cm.getSpace(1) < 1) { //判断装备栏是否有空格
                        cm.sendOk("请确认你的装备栏是否有空格.你当前装备只有" + cm.getSpace(1)+"个空格!");
                        cm.dispose();
                        return;
                    }
                    if (!cm.getChar().isGM()) {
                        allpoints = needpoints + needmark //定义需要所有的兔兔币
                        cm.addHyPay(allpoints, true); //扣取需要的兔兔币
                        text = "恭喜,你已经成功制作一件装备: #b#t" + toDrop.getItemId() + "##k!一共花费了您的#g" + allpoints + "#k个兔兔币!";
                    } else { //如果是GM
                        text = "恭喜,你已经成功制作一件装备: #b#t" + toDrop.getItemId() + "##k!因为您是#r游戏管理员(Game Master,GM)#k,所以#g无#k收取任何费用!";
                    }
                    cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).addItem(toDrop); //将这个装备放入包中
                    cm.fakeRelog();//刷新数据
                    //cm.getChar().getClient().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(Packages.client.inventory.MapleInventoryType.EQUIP, toDrop)); //刷新背包
                    cm.sendOk(text);
                    cm.dispose();
                }
            } else {
                change = selection;
                if (selection == 15) {
                    cm.sendGetText("请输入#bowner#k的值.");
                    return;
                }

                var def = getEquipStat(selection);
                cm.sendGetNumber("输入新的值到: #b" + statNames[selection] + "#k.", def, 0, 32767); //输入的属性最大值
            }
        } else if (status == 5) {
            setEquipStat(change, selection);
            status = 3;
            action(2, 0, 0);
        }
    }
}

//获取装备属性


function getEquipStat(i) {
    switch (i) {
    case 0:
        return toDrop.getStr();
    case 1:
        return toDrop.getDex();
    case 2:
        return toDrop.getInt();
    case 3:
        return toDrop.getLuk();
    case 4:
        return toDrop.getHp();
    case 5:
        return toDrop.getMp();
    case 6:
        return toDrop.getWatk();
    case 7:
        return toDrop.getMatk();
    case 8:
        return toDrop.getWdef();
    case 9:
        return toDrop.getMdef();
    case 10:
        return toDrop.getAcc();
    case 11:
        return toDrop.getAvoid();
    case 12:
        return toDrop.getSpeed();
    case 13:
        return toDrop.getJump();
    case 14:
        return toDrop.getUpgradeSlots();
    case 15:
        return toDrop.getOwner() == "" ? "(none)" : toDrop.getOwner();;
    }
}

//设置装备属性


function setEquipStat(i, v) {

    switch (i) {
    case 0:
        toDrop.setStr(v);
        break;
    case 1:
        toDrop.setDex(v);
        break;
    case 2:
        toDrop.setInt(v);
        break;
    case 3:
        toDrop.setLuk(v);
        break;
    case 4:
        toDrop.setHp(v);
        break;
    case 5:
        toDrop.setMp(v);
        break;
    case 6:
        toDrop.setWatk(v);
        break;
    case 7:
        toDrop.setMatk(v);
        break;
    case 8:
        toDrop.setWdef(v);
        break;
    case 9:
        toDrop.setMdef(v);
        break;
    case 10:
        toDrop.setAcc(v);
        break;
    case 11:
        toDrop.setAvoid(v);
        break;
    case 12:
        toDrop.setSpeed(v);
        break;
    case 13:
        toDrop.setJump(v);
        break;
    case 14:
        toDrop.setUpgradeSlots(v);
        break;
    case 15:
        toDrop.setOwner(cm.getText());
        break;
    }
}
