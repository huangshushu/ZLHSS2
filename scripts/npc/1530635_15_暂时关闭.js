/*
Care - 脚本调整 - 
家族驻地
脚本定制 仿制脚本 
唯一方式 381991414
*/

var status = 0;
var Icon = Array(
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("条件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("钻石", "#fUI/NameTag/medal/556/w#"),
    Array("钻石", "#fUI/NameTag/medal/556/c#"),
    Array("钻石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("蓝点", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失败", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/0/0#"),
    Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
    Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
    Array("金菇", "#fUI/NameTag/medal/74/w#"),
    Array("金菇", "#fUI/NameTag/medal/74/c#"),
    Array("金菇", "#fUI/NameTag/medal/74/e#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
    Array("胡子", "#fUI/NameTag/124/w#"),
    Array("胡子", "#fUI/NameTag/124/c#"),
    Array("胡子", "#fUI/NameTag/124/e#"),
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#"),
    Array("圣诞", "#fUI/NameTag/medal/728/w#"),
    Array("圣诞", "#fUI/NameTag/medal/728/c#"),
    Array("圣诞", "#fUI/NameTag/medal/728/e#"),
    Array("红钻", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#"),
    Array("音符", "#fEffect/ItemEff/1112811/0/0#"),
    Array("十字", "#fUI/GuildMark/Mark/Pattern/00004002/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/2#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/3#"),
    Array("淘居", "#fEffect/ItemEff/1102877/effect/default/0#"),
    Array("开始", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("猫咪", "#fUI/NameTag/190/w#"),
    Array("猫咪", "#fUI/NameTag/190/c#"),
    Array("猫咪", "#fUI/NameTag/190/e#"),
    Array("蝗虫", "#fUI/NameTag/188/w#"),
    Array("蝗虫", "#fUI/NameTag/188/c#"),
    Array("蝗虫", "#fUI/NameTag/188/e#")
    );

var Care = [75, 75, 76, 79, 80, 81, 82];
var txt, accountId, itemid, TradeId, TradePrice, TradeItem, TradeCid, tradetype, Care_U, ItemPrice, TradeData, newItemList;
var accountId;
var backupmode = 0;
var indexSearch = false;
var giveback = new Array();
var EquipStat = new Array();
var EquipStatFromData = new Array();
function start() {
    status = -1;
    action(1, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose()
    } else {
        if (mode == 1) status++;
        else {
            cm.dispose();
            return;
        }
        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            txt = "\t\t　#b " + Icon[73][1] + " #r#e  寄售中心  #n#b " + Icon[Care[Math.floor(Math.random() * Care.length)]][1] + " #k\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n\r\n";

            txt += "#d　       " + Icon[4][1] + " 你目前拥有 [#r " + format(" ", 10, cm.getPlayer().getCSPoints(1).toString()) + " #d] 点卷#k\r\n";
            txt += "#d　       " + Icon[4][1] + " 你目前拥有 [#r " + format(" ", 10, cm.getPlayer().getHyPay(1).toString()) + " #d] 元宝#k\r\n";
            txt += "#r#L0#" + Icon[15][1] + " 查询所有寄售道具#l　　#L1#" + Icon[15][1] + " 快速查询道具编码#l#k\r\n\r\n";
            txt += "#b#L2#" + Icon[15][1] + " 开始寄售我的道具#l　　#L3##d" + Icon[15][1] + " 我的记录[ 7 ] 日内#l#k\r\n\r\n";
            txt += "\t\t 　#d#e#L4#" + Icon[16][1] + " 个人寄售管理中心 " + Icon[16][1] + "#l#n#k\r\n\r\n\r\n";
            txt += "#r提醒 - #b所有下架的寄售道具寄存在个人管理 - 我的仓库\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1];
            txt += "\r\n";
            if (cm.getPlayer().isGM()) txt += "\t\t  #r#e#L5#" + Icon[8][1] + " 管理员后台操作中心 " + Icon[8][1] + "#l#n#k\r\n";
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    Care_U = 0;/*指针 防止目录排序乱*/
                    status = 7;
                    txt = "\t\t　#b " + Icon[73][1] + " #r#e  道具阅览中心  #n#b " + Icon[Care[Math.floor(Math.random() * Care.length)]][1] + " #k\r\n#b";
                    txt += Icon[65][1];
                    for (var i = 0; i <= 22; i++) {
                        txt += Icon[66][1];
                    };
                    txt += Icon[67][1] + "\r\n";
                    var U = 0;
                    var AllRecord = cm.getConnection().prepareStatement("SELECT id,itemid,itemPrice,tradeType FROM cashtradesystem").executeQuery();
                    while (AllRecord.next()) {//得到记录数据
                        if (AllRecord.getString("tradeType") == 1) {//点卷
                            txt += "\r\n";
                            txt += "#b#L" + AllRecord.getString("id") + "# 编号 [ #r" + format(" ", 3, AllRecord.getString("id").toString()) + "#b ]  #r" + format(" ", 7, AllRecord.getString("itemPrice").toString()) + " #b点卷 #r#z" + AllRecord.getString("itemid") + "##l\r\n";
                        } else if (AllRecord.getString("tradeType") == 2) {//元宝
                            txt += "\r\n";
                            txt += "#b#L" + AllRecord.getString("id") + "# 编号 [ #r" + format(" ", 3, AllRecord.getString("id").toString()) + "#b ]  #r" + format(" ", 7, AllRecord.getString("itemPrice").toString()) + " #b元宝 #r#z" + AllRecord.getString("itemid") + "##l\r\n";
                        } else {
                            txt += "\r\n";
                            txt += "#b#L" + AllRecord.getString("id") + "# 编号 [ #r" + format(" ", 3, AllRecord.getString("id").toString()) + "#b ]  #r" + format(" ", 7, AllRecord.getString("itemPrice").toString()) + " #b金币 #r#z" + AllRecord.getString("itemid") + "##l\r\n";
                        }
                        U++;
                    }
                    if (U <= 0) {
                        cm.playerMessage(1, "对不起\r\n\r\n现在没有任何交易");
                        cm.dispose();
                    } else {
                        cm.sendSimple(txt);
                    }
                    break;

                case 1:                                                                                                                                                         // 查询道具编号
                    status = 7;
                    indexSearch = true;
                    txt = "\t\t　#b " + Icon[73][1] + " #r#e  查询中心  #n#b " + Icon[Care[Math.floor(Math.random() * Care.length)]][1] + " #k\r\n";
                    txt += Icon[65][1];
                    for (var i = 0; i <= 22; i++) {
                        txt += Icon[66][1];
                    };
                    txt += Icon[67][1] + "\r\n";

                    txt += "　　　　" + Icon[5][1] + "　请输入你要检索的寄售编号　" + Icon[5][1];
                    cm.sendGetNumber(txt, 0, 1, 9999999);
                    break;

                case 2:
                    if (cm.getBossLogAcc("寄售系统") >= 10) {
                        cm.playerMessage(1, "对不起\r\n\r\n当天只能寄售 10 回");
                        cm.dispose();
                    } else {
                        txt = "\t\t　#b " + Icon[73][1] + " #r#e  寄售类型  #n#b " + Icon[Care[Math.floor(Math.random() * Care.length)]][1] + " #k\r\n#b";
                        txt += Icon[65][1];
                        for (var i = 0; i <= 22; i++) {
                            txt += Icon[66][1];
                        };
                        txt += Icon[67][1] + "\r\n";
                        txt += "　#r#L0#" + " " + Icon[4][1] + " 装备 " + Icon[4][1] + "#l#k\r\n";
                        txt += "\r\n\r\n";
                        txt += Icon[65][1];
                        for (var i = 0; i <= 22; i++) {
                            txt += Icon[66][1];
                        };
                        txt += Icon[67][1];
                        cm.sendSimpleS(txt, 2);
                    }
                    break;

                case 3:
                    cm.playerMessage(1, "现在无法查询7天内寄售记录");
                    cm.dispose();
                    return;
                    break;

                case 4:
                    Care_U = 0;
                    status = 10;

                    txt = "\t\t　#b " + Icon[73][1] + " #r#e  个人中心  #n#b " + Icon[Care[Math.floor(Math.random() * Care.length)]][1] + " #k\r\n";
                    txt += Icon[65][1];
                    for (var i = 0; i <= 22; i++) {
                        txt += Icon[66][1];
                    };
                    txt += Icon[67][1] + "\r\n\r\n";
                    txt += "\t\t\t#r" + Icon[4][1] + "　欢迎来到个人管理中心　" + Icon[4][1] + "\r\n";
                    txt += "　　　　#L1#" + Icon[15][1] + " #r查询#b 或 #r撤回#b 寄售的商品 " + Icon[15][1] + "#l#k\r\n\r\n";
                    txt += "　　　　#L2#" + Icon[15][1] + " #r点卷#b 或 #r元宝#b 销售　查询 " + Icon[15][1] + "#l#k\r\n\r\n";
                    txt += "#L3#" + Icon[15][1] + " #r我的仓库 [ 月末未出售的道具将存于仓库 ] " + Icon[15][1] + "#l#k\r\n\r\n";
                    cm.sendSimpleS(txt, 2);
                    break;

                case 5:
                    cm.dispose();
                    cm.openNpc(9900004, 27);
                    break;
            }
        } else if (status == 2) {
            switch (selection) {
                case 0://装备
                    var U = 0;
                    var list = cm.getInventory(1).list();
                    var itemList = list.iterator();

                    txt = Icon[73][1] + "\t　　" + Icon[83][1] + "\t　　  " + Icon[75][1] + "\r\n\r\n";
                    txt += "\t　　　" + Icon[4][1] + "　#r请选择你想寄售的道具　" + Icon[4][1] + "\r\n#b";
                    position = -1;
                    newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        newItemList[item.getPosition()] = item.getItemId();
                        U++;
                    }
                    if (U == 0) {
                        cm.playerMessage(1, "对不起\r\n\r\n你现在没有任何道具");
                        cm.dispose();
                    } else {
                        for (var key in newItemList) {
                            txt += "#L" + key + "# #v" + newItemList[key] + "# #t" + newItemList[key] + "#\r\n";
                        }
                        Care_U = 1;
                        cm.sendSimpleS(txt, 2);
                    }
                    break;
            }
        } else if (status == 3) {
            if (Care_U == 1) {//贩卖装备
                if (position == -1)
                    position = selection;
                if (position != -1) {
                    if (cm.getEquipBySlot(position).getFlag() == 1) {
                        cm.playerMessage(1, "对不起\r\n\r\n有锁的道具不能寄售");
                        cm.dispose();
                        return;
                    }
                    if (cm.getMeso() < 5000000) {
                        cm.playerMessage(1, "对不起\r\n\r\n金币不能低于 5000000");
                        cm.dispose();
                        return;
                    }
                    if (cm.getEquipBySlot(position).getExpiration() > 0) {
                        cm.playerMessage(1, "对不起\r\n\r\n有时间限制的道具不能寄售");
                        cm.dispose();
                        return;
                    }
                    Care_U = 1;
                    status = 4;

                    txt = Icon[73][1] + "\t　　" + Icon[83][1] + "\t　　  " + Icon[75][1] + "\r\n\r\n";
                    txt += "\t　　　" + Icon[4][1] + "　#r请选择你想寄售的道具　" + Icon[4][1] + "\r\n#b\r\n";
                    txt += "　" + Icon[15][1] + " 你想寄售的道具图纸 - #v" + cm.getEquipBySlot(position).getItemId() + "#\r\n";
                    txt += "　" + Icon[15][1] + " 你想寄售的道具信息 - #z" + cm.getEquipBySlot(position).getItemId() + "#\r\n\r\n\r\n";
                    txt += "　" + Icon[15][1] + " 寄售道具将收取 #r 5000000 #b中介费用#k\r\n\r\n\r\n";
                    cm.sendNextS(txt, 2);
                }
            } else {
                itemid = parseInt(selection);
                if (parseInt(itemid / 1000000) == 1) {
                    cm.playerMessage(1, "对不起\r\n\r\n不能寄售");
                } else {
                    status = 9;
                    Care_U = 1;
                    txt = Icon[73][1] + "\t　　" + Icon[83][1] + "\t　　  " + Icon[75][1] + "\r\n\r\n";
                    txt += "\t　　　" + Icon[4][1] + "　#r请选择你想寄售的类型　" + Icon[4][1] + "\r\n#b\r\n";
                    txt += "　#r#L1#" + Icon[15][1] + " 点卷 [#b 将收取卖家 #r5%#b 手续 #b]\r\n\r\n";
                    txt += "　#r#L2#" + Icon[15][1] + " 元宝 [#b 将收取卖家 #r2%#b 手续 #b]\r\n\r\n\r\n ";
                    cm.sendSimpleS(txt, 2);
                }
            }
        } else if (status == 4) {
            if (cm.haveItem(itemid)) {
                ItemPrice = selection;
                var insertItemData = cm.getConnection().prepareStatement("INSERT INTO cashtradesystem(id,cid,itemid,itemtype,tradeType,itemprice) values (?,?,?,?,?,?)");
                insertItemData.setString(1, null); //载入记录ID
                insertItemData.setString(2, cm.getPlayer().getId()); //cid
                insertItemData.setString(3, itemid); //itemid
                insertItemData.setString(4, 1); //itemtype  1是普通道具
                insertItemData.setString(5, tradetype); //tradeType    0金币 1点券 2抵用
                insertItemData.setString(6, ItemPrice); //price
                insertItemData.executeUpdate(); //更新
                insertItemData.close();
                cm.gainItem(itemid, -1);
                cm.playerMessage(1, "已载入你的交易信息\r\n\r\n商品已转入你的仓库中");
                cm.dispose();
            } else {
                cm.dispose();
            }
        } else if (status == 5) {
            if (Care_U == 1) {
                Care_U = 1;
                txt = Icon[73][1] + "\t　　" + Icon[83][1] + "\t　　  " + Icon[75][1] + "\r\n\r\n";
                txt += "\t　　　" + Icon[4][1] + "　#r请选择你想寄售的类型　" + Icon[4][1] + "\r\n#b\r\n";
                txt += "　#r#L1#" + Icon[15][1] + " 点卷 [#b 将收取卖家 #r5%#b 手续 #b]#l\r\n\r\n";
                txt += "　#r#L2#" + Icon[15][1] + " 元宝 [#b 将收取卖家 #r2%#b 手续 #b]#l\r\n\r\n\r\n ";
                cm.sendSimpleS(txt, 2);
            } else {
                cm.dispose();
            }
        } else if (status == 6) {
            tradetype = selection;
            if (Care_U == 1) {
                txt = Icon[73][1] + "\t　　" + Icon[83][1] + "\t　　  " + Icon[75][1] + "\r\n\r\n";
                txt += "\t　　　" + Icon[4][1] + "　#r请输入你想寄售的价格　" + Icon[4][1] + "\r\n#b\r\n ";
                if (selection == 1) {
                    cm.sendGetNumber(txt, 0, 1000, 2100000000);
                } else {
                    cm.sendGetNumber(txt, 0, 10, 2100000000);
                }
            } else {
                cm.dispose();
            }
        } else if (status == 7) {
            ItemPrice = selection;
            var insertEquipData = cm.getConnection().prepareStatement("INSERT INTO cashtradesystem(id,cid,itemid,itemtype,str,dex,ints,luk,hp,mp,watk,matk,wdef,mdef,acc,avoid,speed,jump,upgradeSlots,limitBreak,potential1,potential2,potential3,potential4,potential5,potential6,enhance,reqLevel,yggdrasilWisdom,bossDamage,ignorePDR,totalDamage,allStat,karmaCount,tradeType,itemPrice,hands,ViciousHammer,ItemEXP,sealedlevel,sealedExp,Owner,level,expiredate) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"); // 载入数据
            getEquipStatToArray(); //得到装备的数据
            insertEquipData.setString(1, null); //载入记录ID
            insertEquipData.setString(2, cm.getPlayer().getId()); //cid
            insertEquipData.setString(3, cm.getEquipBySlot(position).getItemId()); //itemid
            insertEquipData.setString(4, 0); //itemtype
            for (var i = 5; i < 35; i++) {
                insertEquipData.setString(i, EquipStat[i - 5]); //status
            }
            insertEquipData.setString(35, tradetype); //tradetype
            insertEquipData.setString(36, ItemPrice);

            //后期增加的属性
            insertEquipData.setString(37, EquipStat[30]);
            insertEquipData.setString(38, EquipStat[31]);
            insertEquipData.setString(39, EquipStat[32]);

            insertEquipData.setString(40, EquipStat[33]);
            insertEquipData.setString(41, EquipStat[34]);
            insertEquipData.setString(42, EquipStat[35]);
            insertEquipData.setString(43, EquipStat[36]);
            insertEquipData.setString(44, EquipStat[37]);
            insertEquipData.executeUpdate(); //更新
            cm.removeSlot(1, position, 1); //删除掉原始道具
            txt = Icon[73][1] + "\t　　" + Icon[83][1] + "\t　　  " + Icon[75][1] + "\r\n\r\n";
            txt += "\t　　　　　　" + Icon[4][1] + "　#r寄售信息　" + Icon[4][1] + "\r\n#b\r\n";
            txt += "　　　　" + Icon[4][1] + "　　#b已载入了你的寄售信息　　" + Icon[4][1] + "\r\n";
            txt += "　　　　" + Icon[4][1] + "　　#b寄售道具已存入寄售库　　" + Icon[4][1] + "\r\n";
            txt += "　　　　" + Icon[4][1] + "　　#b收取了你 #r5000000#b 手续　 " + Icon[4][1] + "#k\r\n";
            cm.sendNextS(txt, 2);
            cm.gainMeso(-5000000);
            status = -1;
        } else if (status == 8) {
            txt = "";
            var U = 0;
            TradeId = selection;//得到交易号
            TradeData = cm.getConnection().prepareStatement("SELECT * FROM cashtradesystem").executeQuery();
            if (indexSearch) {
                txt = "\t\t　#b " + Icon[73][1] + " #r#e  查询中心  #n#b " + Icon[Care[Math.floor(Math.random() * Care.length)]][1] + " #k\r\n";
                txt += Icon[65][1];
                for (var i = 0; i <= 22; i++) {
                    txt += Icon[66][1];
                };
                txt += Icon[67][1] + "\r\n";
                txt += "　　　　" + Icon[5][1] + "　请阅览你的检索到的信息　" + Icon[5][1] + "\r\n";
            }
            while (TradeData.next()) {//得到记录数据
                if (TradeData.getString("id") == TradeId) {
                    U++;
                    TradeItem = TradeData.getString("itemid");
                    TradeMode = TradeData.getString("itemtype");
                    TradePrice = TradeData.getString("itemprice");
                    TradeCid = TradeData.getString("cid");
                    getEquipStatFormData();//从数据库中得到数据
                }
            }
            if (U == 0) {
                cm.playerMessage(1, "对不起\r\n\r\n没有检索到编号对应的数据");
                cm.dispose();
                return;
            }//未检索到
            if (TradeMode == 0) {
                var ii = cm.getItemInfo();
                toDrop = ii.randomizeStats(ii.getEquipById(TradeItem)).copy();
                if (EquipStatFromData[31] == 0) {
                    txt += " " + Icon[4][1] + "#e#d 它的价格是：#r" + EquipStatFromData[30] + "#d 金币,点击下一步进行购买.#n#k\r\n";
                } else if (EquipStatFromData[31] == 1) {
                    txt += " " + Icon[4][1] + "#e#d 它的价格是：#r" + EquipStatFromData[30] + "#d 点券,点击下一步进行购买.#n#k\r\n";
                } else if (EquipStatFromData[31] == 2) {
                    txt += " " + Icon[4][1] + "#e#d 它的价格是：#r" + EquipStatFromData[30] + "#d 元宝,点击下一步进行购买.#n#k\r\n";
                }
                txt += " " + Icon[4][1] + "#d#e 道具#n： #r#e#z" + TradeItem + "##d 图 [#v" + TradeItem + "#]\r\n";
                txt += " " + Icon[4][1] + " 装备属性如下：【购买时注意装备包袱留空格】\r\n#n#k\r\n#b";

                txt += " " + Icon[4][1] + " 已升级 " + format(" ", 4, EquipStatFromData[38].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 可升级 " + format(" ", 4, EquipStatFromData[14].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 已强化 " + format(" ", 4, EquipStatFromData[22].toString()) + "\r\n";
                txt += " " + Icon[4][1] + " 力　量 " + format(" ", 4, EquipStatFromData[0].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 敏　捷 " + format(" ", 4, EquipStatFromData[1].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 智　力 " + format(" ", 4, EquipStatFromData[2].toString()) + "\r\n";
                txt += " " + Icon[4][1] + " 运　气 " + format(" ", 4, EquipStatFromData[3].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 物　攻 " + format(" ", 4, EquipStatFromData[6].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 魔　攻 " + format(" ", 4, EquipStatFromData[7].toString()) + "\r\n";
                txt += " " + Icon[4][1] + " 物　防 " + format(" ", 4, EquipStatFromData[8].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 魔　防 " + format(" ", 4, EquipStatFromData[9].toString()) + "　 ";
                txt += " " + Icon[4][1] + " Ｈ　Ｐ " + format(" ", 4, EquipStatFromData[4].toString()) + "\r\n";
                txt += " " + Icon[4][1] + " Ｍ　Ｐ " + format(" ", 4, EquipStatFromData[5].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 命中率 " + format(" ", 4, EquipStatFromData[10].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 回避率 " + format(" ", 4, EquipStatFromData[11].toString()) + "\r\n";
                txt += " " + Icon[4][1] + " 移　速 " + format(" ", 4, EquipStatFromData[12].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 跳　跃 " + format(" ", 4, EquipStatFromData[13].toString()) + "\r\n";
                txt += " #d" + Icon[4][1] + " 破攻上限伤害值 " + format(" ", 4, EquipStatFromData[15].toString()) + "#b\r\n";
                txt += " " + Icon[4][1] + " 潜能 A " + format(" ", 4, EquipStatFromData[16].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 潜能 B " + format(" ", 4, EquipStatFromData[17].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 潜能 C " + format(" ", 4, EquipStatFromData[18].toString()) + "\r\n";
                txt += " " + Icon[4][1] + " 附加 A " + format(" ", 4, EquipStatFromData[19].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 附加 B " + format(" ", 4, EquipStatFromData[20].toString()) + "　 ";
                txt += " " + Icon[4][1] + " 附加 C " + format(" ", 4, EquipStatFromData[21].toString()) + "\r\n";
                txt += " #b" + Icon[4][1] + " BOSS额外攻击值 " + format(" ", 4, EquipStatFromData[25].toString()) + " %#k\r\n";
                txt += " #b" + Icon[4][1] + " 回避比例加成值 " + format(" ", 4, EquipStatFromData[26].toString()) + " %#k\r\n";
                txt += " #b" + Icon[4][1] + " 总伤害　加成值 " + format(" ", 4, EquipStatFromData[27].toString()) + " %#k\r\n";
                txt += " #b" + Icon[4][1] + " 全属性　加成值 " + format(" ", 4, EquipStatFromData[28].toString()) + " %#k\r\n";
                txt += " #b" + Icon[4][1] + " 封印解除阶段值 " + format(" ", 4, EquipStatFromData[35].toString()) + "#k\r\n";
                txt += " #b" + Icon[4][1] + " 封印解除经验值 " + format(" ", 4, EquipStatFromData[36].toString()) + "　/　113723136#k\r\n";

            } else {
                txt += "\r\n[#v" + TradeItem + "#] #t" + TradeItem + "#\r\n\r\n#b";
            }

            s = 1;
            cm.sendNext(txt);
            status = 14;
        } else if (status == 9) {//交易讯息
            if (s == 1) {
                if (BuyCheckDataAgain()) {
                    // if (cm.getEquipBySlot(1) == null) {
                    if (cm.getSpace(1) < 1) {
                        cm.playerMessage(1, "对不起\r\n\r\n请给予你的装备栏空出一个位置");
                        cm.dispose();
                        return;
                    }
                    if (TradeCid == cm.getPlayer().getId() && !cm.getPlayer().isGM()) {
                        cm.playerMessage(1, "对不起\r\n\r\n不能购买自己寄售的道具");
                        cm.dispose();
                        return;
                    }
                    if (getAccountIdByCid(!cm.getPlayer().isGM() && cm.getPlayer().getId()) != null && getAccountIdByCid(TradeCid) == getAccountIdByCid(cm.getPlayer().getId())) {
                        cm.playerMessage(1, "对不起\r\n\r\n不能购买自己寄售的道具");
                        cm.dispose();
                        return;
                    }
                    if (parseInt(EquipStatFromData[31]) == 0) {
                        if (cm.getMeso() >= TradePrice) {
                            cm.gainMeso(-TradePrice);
                            if (TradeMode == 0) {
                                if (cm.getSpace(1) >= 1) {
                                    UpdateData(TradeCid, TradePrice, 0, 0);
                                    MakeEquip();
                                    setLog(TradeId);//载入Log
                                    cm.playerMessage(1, "恭喜你\r\n\r\n购买成功");
                                    DeleteDataById(TradeId);
                                    cm.dispose();
                                }
                            } else {
                                UpdateData(TradeCid, TradePrice, 0, 0);
                                cm.gainItem(TradeItem, 1);
                                setLog(TradeId);//载入Log
                                cm.playerMessage(1, "恭喜你\r\n\r\n购买成功");
                                DeleteDataById(TradeId);
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("对不起，你没有足够的金币。");
                            cm.dispose();
                        }
                    } else if (parseInt(EquipStatFromData[31]) == 1) {
                        if (cm.getNX(1) >= TradePrice) {
                            cm.gainNX(1, -TradePrice);
                            if (TradeMode == 0) {
                                if (cm.getSpace(1) >= 1) {
                                    UpdateData(TradeCid, 0, TradePrice, 0);
                                    MakeEquip();
                                    setLog(TradeId);//载入Log
                                    cm.playerMessage(1, "恭喜你\r\n\r\n购买成功");
                                    DeleteDataById(TradeId);
                                    cm.dispose();
                                }
                            } else {
                                UpdateData(TradeCid, 0, TradePrice, 0);
                                cm.gainItem(TradeItem, 1);
                                setLog(TradeId);//载入Log
                                cm.playerMessage(1, "恭喜你\r\n\r\n购买成功");

                                DeleteDataById(TradeId);
                                cm.dispose();
                            }
                        } else {
                            cm.playerMessage(1, "对不起\r\n\r\n你没有足够的点卷\r\n\r\n目前拥有 " + cm.getPlayer().getCSPoints(1) + " 点卷");
                            cm.dispose();
                        }
                    } else if (parseInt(EquipStatFromData[31]) == 2) {
                        if (cm.getHyPay(1) >= TradePrice) {
                            cm.addHyPay(TradePrice);
                            if (TradeMode == 0) {
                                if (cm.getSpace(1) >= 1) {
                                    UpdateData(TradeCid, 0, 0, TradePrice);
                                    MakeEquip();
                                    setLog(TradeId);//载入Log
                                    cm.playerMessage(1, "恭喜你\r\n\r\n购买成功");

                                    DeleteDataById(TradeId);
                                    cm.dispose();
                                }
                            } else {
                                UpdateData(TradeCid, 0, 0, TradePrice);
                                cm.gainItem(TradeItem, 1);
                                setLog(TradeId);//载入Log
                                cm.playerMessage(1, "恭喜你\r\n\r\n购买成功");
                                DeleteDataById(TradeId);
                                cm.dispose();
                            }
                        } else {
                            cm.playerMessage(1, "对不起\r\n\r\n你没有足够的元宝\r\n\r\n目前拥有 " + cm.getHyPay(1) + " 元宝");
                            cm.dispose();
                        }
                    } else {
                        cm.dispose();
                    }
                } else {
                    cm.playerMessage(1, "对不起\r\n\r\n你想购买的道具已被其余玩家抢走了");
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
        } else if (status == 10) {
            if (s == 1) {
                status = 3;
                tradetype = selection;
                cm.sendGetNumber("请输入您想要贩卖的价格：", 0, 0, 2100000000);
            } else {
                cm.dispose();
            }
        } else if (status == 11) {
            Care_U = 0;
            if (selection == 0) {
                var u = 0;
                status = -1;
            } else if (selection == 1) {
                txt = "\t\t　#b " + Icon[73][1] + " #r#e  个人商品信息  #n#b " + Icon[Care[Math.floor(Math.random() * Care.length)]][1] + " #k\r\n#b";
                txt += Icon[65][1];
                for (var i = 0; i <= 22; i++) {
                    txt += Icon[66][1];
                };
                txt += Icon[67][1] + "\r\n";
                var AllRecord = cm.getConnection().prepareStatement("SELECT id,itemid FROM cashtradesystem where cid = " + cm.getPlayer().getId() + "").executeQuery();

                while (AllRecord.next()) {//得到记录数据
                    txt += "\r\n#b#L" + AllRecord.getString("id") + "# 编号 [ #r" + format(" ", 3, AllRecord.getString("id").toString()) + "#b ]   #r" + format(" ", 22, (cm.getItemName(AllRecord.getString("itemid"))).toString()) + " #v" + AllRecord.getString("itemid") + "##l\r\n";
                    u++;
                }
                if (u == 0) {
                    cm.playerMessage(1, "对不起\r\n\r\n你没有寄售任何道具");
                    cm.dispose();//结束
                } else {
                    Care_U = 1;
                    cm.sendSimple(txt);
                }

            } else if (selection == 2) {
                txt = "\t\t　#b " + Icon[73][1] + " #r#e  个人寄售信息  #n#b " + Icon[Care[Math.floor(Math.random() * Care.length)]][1] + " #k\r\n#b";
                txt += Icon[65][1];
                for (var i = 0; i <= 22; i++) {
                    txt += Icon[66][1];
                };
                txt += Icon[67][1] + "\r\n\r\n";

                var u = 0;
                var CharRecord = cm.getConnection().prepareStatement("SELECT * FROM TradeSystemGiveBack where cid = " + cm.getPlayer().getId() + "").executeQuery();
                while (CharRecord.next()) {//得到记录数据
                    giveback[0] = CharRecord.getString("meso");
                    giveback[1] = CharRecord.getString("dianquan");
                    giveback[2] = CharRecord.getString("diyong");
                    u++;
                }
                if (u == 0) {
                    cm.playerMessage(1, "对不起\r\n\r\n暂时没有你的记录");
                    cm.dispose();
                } else {
                    status = 13;
                    if (giveback[0] == 0 && giveback[1] == 0 && giveback[2] == 0) {
                        cm.playerMessage(1, "对不起\r\n\r\n没有收益可以领");
                        cm.dispose();
                    } else {
                        txt += "　　　　　" + Icon[15][1] + " 请选择你想领回收益的类型 " + Icon[15][1] + "\r\n\r\n";
                        txt += "#d#L0#" + Icon[4][1] + " 点卷 #r" + giveback[1] + "　#d元宝 #r" + giveback[2] + "#d　　[ #b全部领回#d ]#l#k\r\n\r\n\r\n\r\n";
                        txt += "#r#e提示#b - 本功能仅记录角色 \r\n#r提示#b - 若同账号寄售结束请变更角色查询#k#n\r\n";
                        cm.sendSimpleS(txt, 2);
                    }
                }
            } else if (selection == 3) {//领取在仓库的道具
                var u = 0;//记录在仓库里面的数据个数
                txt = "\t\t　#b " + Icon[73][1] + " #r#e  个人仓库信息  #n#b " + Icon[Care[Math.floor(Math.random() * Care.length)]][1] + " #k\r\n#b";
                txt += Icon[65][1];
                for (var i = 0; i <= 22; i++) {
                    txt += Icon[66][1];
                };
                txt += Icon[67][1] + "\r\n";
                var TradeDataForOwner = cm.getConnection().prepareStatement("SELECT id,itemid FROM cashtradesystemStore where cid = " + cm.getPlayer().getId() + "").executeQuery();
                while (TradeDataForOwner.next()) {//得到记录数据
                    u++;
                    txt += "\r\n#b#L" + TradeDataForOwner.getString("id") + "# 编号 [ #r" + format(" ", 3, TradeDataForOwner.getString("id").toString()) + "#b ]   #r" + format(" ", 22, (cm.getItemName(TradeDataForOwner.getString("itemid"))).toString()) + " #v" + TradeDataForOwner.getString("itemid") + "##l\r\n";
                }
                txt += "\r\n\r\n" + Icon[4][1] + "　一共找到了 " + u + " 条信息";
                if (u != 0) {
                    cm.sendSimpleS(txt,2);//TODO;
                    Care_U = 1;
                    backupmode = 1;
                } else {
                    cm.playerMessage(1, "对不起\r\n\r\n仓库内没有你的商品");
                    cm.dispose();
                }
            }
        } else if (status == 12) {
            if (Care_U == 1) {
                TradeId = selection;//得到交易号
                txt = Icon[73][1] + "\t　　" + Icon[83][1] + "\t　　  " + Icon[75][1] + "\r\n\r\n";
                txt += "\t　　　　　　" + Icon[4][1] + "　#r撤回中心　" + Icon[4][1] + "\r\n#b\r\n";
                txt += "　" + Icon[4][1] + "　　#b你确认撤回此商品 并 删除信息吗　　#v" + TradeItem + "#\r\n\r\n";
                cm.sendYesNoS(txt, 2);
            } else {
                cm.dispose();
            }
        } else if (status == 13) {
            if (backupmode == 1) {
                TradeData = cm.getConnection().prepareStatement("SELECT * FROM cashtradesystemStore").executeQuery();

            } else {
                TradeData = cm.getConnection().prepareStatement("SELECT * FROM cashtradesystem").executeQuery();
            }
            while (TradeData.next()) {//得到记录数据
                if (TradeData.getString("id") == TradeId) {
                    TradeItem = TradeData.getString("itemid");
                    TradeMode = TradeData.getString("itemtype");
                    getEquipStatFormData();//从数据库中得到数据
                }
            }
            if (cm.canHold(TradeItem) /*&& cm.getEquipBySlot(1) == null*/) {
                if (TradeMode == 0) {
                    MakeEquip();
                    cm.playerMessage(1, "撤回成功");
                    cm.dispose();
                } else {
                    cm.gainItem(TradeItem, 1);
                    cm.playerMessage(1, "撤回成功");
                    cm.dispose();
                }
                if (backupmode == 1) {
                    DeleteDataByIdForOwn(TradeId);
                } else {
                    DeleteDataById(TradeId);
                }
            } else {
                cm.playerMessage(1, "对不起\r\n\r\n请确认你的背包内是否都有空位\r\n\r\n抢装备栏第一位置留空");
                cm.dispose();
            }
        } else if (status == 14) {
            if (cm.getMeso() + (giveback[0] - giveback[0] * 0.05) > 9999999999 || cm.getNX(1) + (giveback[1] - giveback[1] * 0.05) > 9999999999 || cm.getHyPay(1) + (giveback[2] - giveback[2] * 0.05) > 9999999999) {
                cm.playerMessage(1, "领取的金币超过最大值\r\n\r\n不能取回抱歉");
                cm.dispose();
            } else {
                cm.gainMeso(parseInt(giveback[0] - giveback[0] * 0.05));
                cm.gainNX(1, parseInt(giveback[1] - giveback[1] * 0.05));
                cm.addHyPay(-parseInt(giveback[2] - giveback[2] * 0.02));
                var delectData = cm.getConnection().prepareStatement("delete from TradeSystemGiveBack where cid = " + cm.getPlayer().getId() + "");
                delectData.executeUpdate(); //删除数据
                cm.playerMessage(1, "取回成功");
                cm.dispose();
            }
        } else if (status == 15) {
            status = 8;
            txt = Icon[73][1] + "\t　　" + Icon[83][1] + "\t　　  " + Icon[75][1] + "\r\n\r\n";
            txt += "\t　　　　　　" + Icon[4][1] + "　#r购买信息　" + Icon[4][1] + "\r\n#b\r\n";
            txt += "　　" + Icon[4][1] + "　　#b你确认需购买　　#v" + TradeItem + "#\r\n\r\n";
            txt += "　　" + Icon[4][1] + "　　#b你确认需购买　　 #t" + TradeItem + "#\r\n\r\n ";
            cm.sendYesNoS(txt, 2);
        } else if (status == 16) {
            TradeId = selection;//得到交易ID
            cm.dispose();
        }
    }
}
var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}
function getGiveBackData() {
    var i = 0;
    var data = cm.getConnection().prepareStatement("SELECT * FROM TradeSystemGiveBack where cid = " + TradeCid + "").executeQuery();
    while (data.next()) {//得到记录数据
        giveback[0] = data.getString("meso");
        giveback[1] = data.getString("dianquan");
        giveback[2] = data.getString("diyong");
        i++;
    }
    if (i == 0) {
        var insert = cm.getConnection().prepareStatement("INSERT INTO TradeSystemGiveBack values (?,?,?,?,?)");
        insert.setString(1, null);
        insert.setString(2, cm.getPlayer().getId());
        insert.setString(3, 0);
        insert.setString(4, 0);
        insert.setString(5, 0);
        insert.executeUpdate();
        insert.close();
    }
}


function BuyCheckDataAgain() {//购买的时候再次测试是否选择的道具已经是购买成功状态了。
    var i = 0;
    var data = cm.getConnection().prepareStatement("SELECT * FROM cashtradesystem where id = " + TradeId + "").executeQuery();
    while (data.next()) {//得到记录数据
        i++;
    }
    if (i == 0) {
        return false;
    } else {
        return true;
    }
}

function CheckData() {
    var i = 0;
    var data = cm.getConnection().prepareStatement("SELECT * FROM TradeSystemGiveBack where cid = " + cm.getPlayer().getId() + "").executeQuery();
    while (data.next()) {//得到记录数据
        i++;
    }
    if (i == 0) {
        var insert = cm.getConnection().prepareStatement("INSERT INTO TradeSystemGiveBack values (?,?,?,?,?)");
        insert.setString(1, null);
        insert.setString(2, cm.getPlayer().getId());
        insert.setString(3, 0);
        insert.setString(4, 0);
        insert.setString(5, 0);
        insert.executeUpdate();
    }
}

function UpdateData(cid, meso, dianquan, diyong) {
    getGiveBackData();
    var UpDateStatus = cm.getConnection().prepareStatement("update TradeSystemGiveBack set meso=?,dianquan=?,diyong=? where cid =  " + cid + "")
    UpDateStatus.setString(1, parseInt(meso) + parseInt(giveback[0]));
    UpDateStatus.setString(2, parseInt(dianquan) + parseInt(giveback[1]));
    UpDateStatus.setString(3, parseInt(diyong) + parseInt(giveback[2]));
    UpDateStatus.executeUpdate();
}

function DeleteDataById(id) {//删除数据
    var delectData = cm.getConnection().prepareStatement("delete from cashtradesystem where id = " + id + "");
    delectData.executeUpdate(); //删除数据
}

function DeleteDataByIdForOwn(id) {//删除数据
    var delectData = cm.getConnection().prepareStatement("delete from cashtradesystemStore where id = " + id + "");
    delectData.executeUpdate(); //删除数据
}

function MakeEquip() {//制作装备
    var ii = cm.getItemInfo();
    toDrop = ii.randomizeStats(ii.getEquipById(TradeItem)).copy(); // 生成一个Equip类(生成这个装备)
    for (var i = 0; i < 30; i++) {
        setEquipStatRandom(i, EquipStatFromData[i]);
    }
    //新增属性部分
    setEquipStatRandom(30, EquipStatFromData[32]);
    setEquipStatRandom(31, EquipStatFromData[33]);
    setEquipStatRandom(32, EquipStatFromData[34]);
    setEquipStatRandom(33, EquipStatFromData[35]);//封印等级
    setEquipStatRandom(34, EquipStatFromData[36]);
    if (EquipStatFromData[37] != null) {
        setEquipStatRandom(35, EquipStatFromData[37]);//owner
    }
    setEquipStatRandom(36, EquipStatFromData[38]);//已升级次数
    setEquipStatRandom(37, EquipStatFromData[39]);//剩余时间
    // cm.removeSlot(1, 1, 1); //删除掉原始道具
    //inventoryType, deleteSlot, deleteQuantity
    //toDrop.setEquipOnlyId(cm.getItemInfo().getNextEquipOnlyId());
    cm.addFromDrop(cm.getC(), toDrop, false);
}

function getEquipStatFormDataOfOwner() {//从数据库得到装备数据 自己的
    EquipStatFromData[0] = TradeDataForOwner.getString("str"); //力量
    EquipStatFromData[1] = TradeDataForOwner.getString("dex"); //敏捷
    EquipStatFromData[2] = TradeDataForOwner.getString("ints"); //智力
    EquipStatFromData[3] = TradeDataForOwner.getString("luk"); //运气
    EquipStatFromData[4] = TradeDataForOwner.getString("hp");
    EquipStatFromData[5] = TradeDataForOwner.getString("mp");
    EquipStatFromData[6] = TradeDataForOwner.getString("watk");
    EquipStatFromData[7] = TradeDataForOwner.getString("matk");
    EquipStatFromData[8] = TradeDataForOwner.getString("wdef");
    EquipStatFromData[9] = TradeDataForOwner.getString("mdef");
    EquipStatFromData[10] = TradeDataForOwner.getString("acc");
    EquipStatFromData[11] = TradeDataForOwner.getString("avoid");
    EquipStatFromData[12] = TradeDataForOwner.getString("speed");
    EquipStatFromData[13] = TradeDataForOwner.getString("jump");
    EquipStatFromData[14] = TradeDataForOwner.getString("upgradeSlots");
    EquipStatFromData[15] = TradeDataForOwner.getString("limitBreak");
    EquipStatFromData[16] = TradeDataForOwner.getString("potential1");
    EquipStatFromData[17] = TradeDataForOwner.getString("potential2");
    EquipStatFromData[18] = TradeDataForOwner.getString("potential3");
    EquipStatFromData[19] = TradeDataForOwner.getString("potential4");
    EquipStatFromData[20] = TradeDataForOwner.getString("potential5");
    EquipStatFromData[21] = TradeDataForOwner.getString("potential6");
    EquipStatFromData[22] = TradeDataForOwner.getString("enhance");
    EquipStatFromData[23] = TradeDataForOwner.getString("reqLevel");
    EquipStatFromData[24] = TradeDataForOwner.getString("yggdrasilWisdom");
    EquipStatFromData[25] = TradeDataForOwner.getString("bossDamage");
    EquipStatFromData[26] = TradeDataForOwner.getString("ignorepDR");
    EquipStatFromData[27] = TradeDataForOwner.getString("totalDamage");
    EquipStatFromData[28] = TradeDataForOwner.getString("allStat");
    EquipStatFromData[29] = TradeDataForOwner.getString("karmaCount");
    EquipStatFromData[30] = TradeDataForOwner.getString("itemprice");
    EquipStatFromData[31] = TradeDataForOwner.getString("tradeType");
    //新增属性部分
    EquipStatFromData[32] = TradeDataForOwner.getString("hands");
    EquipStatFromData[33] = TradeDataForOwner.getString("ViciousHammer");
    EquipStatFromData[34] = TradeDataForOwner.getString("itemEXP");

    EquipStatFromData[35] = TradeDataForOwner.getString("sealedlevel");
    EquipStatFromData[36] = TradeDataForOwner.getString("sealedExp");
    EquipStatFromData[37] = TradeDataForOwner.getString("Owner");
    EquipStatFromData[38] = TradeDataForOwner.getString("level");
    EquipStatFromData[39] = TradeDataForOwner.getString("expiredate");
}


function getEquipStatFormData() {//从数据库得到装备数据
    EquipStatFromData[0] = TradeData.getString("str"); //力量
    EquipStatFromData[1] = TradeData.getString("dex"); //敏捷
    EquipStatFromData[2] = TradeData.getString("ints"); //智力
    EquipStatFromData[3] = TradeData.getString("luk"); //运气
    EquipStatFromData[4] = TradeData.getString("hp");
    EquipStatFromData[5] = TradeData.getString("mp");
    EquipStatFromData[6] = TradeData.getString("watk");
    EquipStatFromData[7] = TradeData.getString("matk");
    EquipStatFromData[8] = TradeData.getString("wdef");
    EquipStatFromData[9] = TradeData.getString("mdef");
    EquipStatFromData[10] = TradeData.getString("acc");
    EquipStatFromData[11] = TradeData.getString("avoid");
    EquipStatFromData[12] = TradeData.getString("speed");
    EquipStatFromData[13] = TradeData.getString("jump");
    EquipStatFromData[14] = TradeData.getString("upgradeSlots");
    EquipStatFromData[15] = TradeData.getString("limitBreak");
    EquipStatFromData[16] = TradeData.getString("potential1");
    EquipStatFromData[17] = TradeData.getString("potential2");
    EquipStatFromData[18] = TradeData.getString("potential3");
    EquipStatFromData[19] = TradeData.getString("potential4");
    EquipStatFromData[20] = TradeData.getString("potential5");
    EquipStatFromData[21] = TradeData.getString("potential6");
    EquipStatFromData[22] = TradeData.getString("enhance");
    EquipStatFromData[23] = TradeData.getString("reqLevel");
    EquipStatFromData[24] = TradeData.getString("yggdrasilWisdom");
    EquipStatFromData[25] = TradeData.getString("bossDamage");
    EquipStatFromData[26] = TradeData.getString("ignorepDR");
    EquipStatFromData[27] = TradeData.getString("totalDamage");
    EquipStatFromData[28] = TradeData.getString("allStat");
    EquipStatFromData[29] = TradeData.getString("karmaCount");
    EquipStatFromData[30] = TradeData.getString("itemprice");
    EquipStatFromData[31] = TradeData.getString("tradeType");
    //新增属性部分
    EquipStatFromData[32] = TradeData.getString("hands");
    EquipStatFromData[33] = TradeData.getString("ViciousHammer");
    EquipStatFromData[34] = TradeData.getString("itemEXP");

    EquipStatFromData[35] = TradeData.getString("sealedlevel");
    EquipStatFromData[36] = TradeData.getString("sealedExp");
    EquipStatFromData[37] = TradeData.getString("Owner");
    EquipStatFromData[38] = TradeData.getString("level");
    EquipStatFromData[39] = TradeData.getString("expiredate");

}

function getEquipStatToArray() {//得到装备数据
    EquipStat[0] = cm.getEquipBySlot(position).getStr(); //力量
    EquipStat[1] = cm.getEquipBySlot(position).getDex(); //敏捷
    EquipStat[2] = cm.getEquipBySlot(position).getInt(); //智力
    EquipStat[3] = cm.getEquipBySlot(position).getLuk(); //运气
    EquipStat[4] = cm.getEquipBySlot(position).getHp();
    EquipStat[5] = cm.getEquipBySlot(position).getMp();
    EquipStat[6] = cm.getEquipBySlot(position).getWatk();
    EquipStat[7] = cm.getEquipBySlot(position).getMatk();
    EquipStat[8] = cm.getEquipBySlot(position).getWdef();
    EquipStat[9] = cm.getEquipBySlot(position).getMdef();
    EquipStat[10] = cm.getEquipBySlot(position).getAcc();
    EquipStat[11] = cm.getEquipBySlot(position).getAvoid();
    EquipStat[12] = cm.getEquipBySlot(position).getSpeed();
    EquipStat[13] = cm.getEquipBySlot(position).getJump();
    EquipStat[14] = cm.getEquipBySlot(position).getUpgradeSlots();
    EquipStat[15] = cm.getEquipBySlot(position).getLimitBreak();
    EquipStat[16] = cm.getEquipBySlot(position).getPotential1();
    EquipStat[17] = cm.getEquipBySlot(position).getPotential2();
    EquipStat[18] = cm.getEquipBySlot(position).getPotential3();
    EquipStat[19] = cm.getEquipBySlot(position).getPotential4();
    EquipStat[20] = cm.getEquipBySlot(position).getPotential5();
    EquipStat[21] = cm.getEquipBySlot(position).getPotential6();
    EquipStat[22] = cm.getEquipBySlot(position).getEnhance();
    EquipStat[23] = cm.getEquipBySlot(position).getReqLevel();
    EquipStat[24] = cm.getEquipBySlot(position).getYggdrasilWisdom();
    EquipStat[25] = cm.getEquipBySlot(position).getBossDamage();
    EquipStat[26] = cm.getEquipBySlot(position).getIgnorePDR();
    EquipStat[27] = cm.getEquipBySlot(position).getTotalDamage();
    EquipStat[28] = cm.getEquipBySlot(position).getAllStat();
    // EquipStat[29] = cm.getEquipBySlot(1).getFinalStrike();
    EquipStat[29] = cm.getEquipBySlot(position).getKarmaCount();
    //新增属性部分
    EquipStat[30] = cm.getEquipBySlot(position).getHands();
    EquipStat[31] = cm.getEquipBySlot(position).getViciousHammer();
    EquipStat[32] = cm.getEquipBySlot(position).getItemEXP();
    EquipStat[33] = cm.getEquipBySlot(position).getSealedLevel();
    EquipStat[34] = cm.getEquipBySlot(position).getSealedExp();
    EquipStat[35] = cm.getEquipBySlot(position).getOwner();
    EquipStat[36] = cm.getEquipBySlot(position).getLevel();
    EquipStat[37] = cm.getEquipBySlot(position).getExpiration();
}


function setEquipStatRandom(i, v) {//设置装备属性
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
            toDrop.setLimitBreak(v);
            break;
        case 16:
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
        case 22:
            toDrop.setEnhance(v);
            break;
        case 23:
            toDrop.setReqLevel(v);
            break;
        case 24:
            toDrop.setYggdrasilWisdom(v);
            break;
        case 25:
            toDrop.setBossDamage(v);
            break;
        case 26:
            toDrop.setIgnorePDR(v);
            break;
        case 27:
            toDrop.setTotalDamage(v);
            break;
        case 28:
            toDrop.setAllStat(v);
            break;
        case 29:
            toDrop.setKarmaCount(v);
            break;
        case 30:
            toDrop.setHands(v);
            break;
        case 31:
            toDrop.setViciousHammer(v);
            break;
        case 32:
            toDrop.setItemEXP(v);
            break;
        case 33:
            toDrop.setSealedLevel(v);
            break;
        case 34:
            toDrop.setSealedExp(v);
            break;
        case 35:
            toDrop.setOwner(v);
            break;
        case 36:
            toDrop.setLevel(v);
            break;
        case 37:
            toDrop.setExpiration(v);
            break;
    }
}

function getAccountIdByCid(cid) {
    var CharData = cm.getConnection().prepareStatement("SELECT id,accountid FROM characters where id = " + cid + "").executeQuery();
    while (CharData.next()) {//得到记录数据
        return parseInt(CharData.getString("accountid"));
    }
    CharData.close();
}
/*
 `tid` int(11) NOT NULL,
 `cid` int(11) DEFAULT '0',
 `boughtByCid` int(11) NOT NULL DEFAULT '0',
 `boughtByCName` varchar(15) NOT NULL DEFAULT '0',
 `boughtTradeType` int(2) NOT NULL DEFAULT '0',
 `boughtPrice` int(11) NOT NULL DEFAULT '0',
 `boughtItemid` int(11) NOT NULL DEFAULT '0',
 `boughtDate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
 */
function setLog(tid) {
    var insertLog = cm.getConnection().prepareStatement("INSERT INTO cashtradesystemLog values (?,?,?,?,?,?,?,?)");
    insertLog.setString(1, tid);//交易id
    insertLog.setString(2, TradeCid);//卖出者角色id
    insertLog.setString(3, cm.getPlayer().getId());//购买者角色id
    insertLog.setString(4, cm.getPlayer().getName());//购买者角色名字
    insertLog.setString(5, EquipStatFromData[31]);//买卖tid的贩卖类型 0金币 1点券 2元宝
    insertLog.setString(6, TradePrice);//贩卖的价格
    insertLog.setString(7, TradeItem);//贩卖的道具
    insertLog.setString(8, null);//贩卖的日期，由数据库自动生成
    insertLog.executeUpdate();
    insertLog.close();
}