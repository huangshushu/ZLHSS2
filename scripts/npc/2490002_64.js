/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414
*/


var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var z7 = "#fEffect/ItemEff/1112811/0/0#";//黄金音符
var z2 = "#fEffect/SetEff/9/effect/7#";
var z3 = "#fUI/GuildMark/Mark/Animal/00002006/16#";
var z4 = "#fUI/UIWindow2/MemoInGame/Get/BtClame/pressed/0#";
var z5 = "#fEffect/CharacterEff/1112904/2/1#";//五角花
var z6 = "#fUI/GuildMark/Mark/Etc/00009004/3#";//皇冠
var z7 = "#fUI/GuildMark/Mark/Etc/00009023/10#";//皇冠
var z8 = "#fUI/NameTag/medal/468/c#";

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
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#")
    );


var cztp = 0;

//-------------//
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var txt;
var Care_Game;
var Care = [1000, 3000, 5000, 7000, 10000];                                                    //人民币
var Care_Item = [1190801, 1182192, 1152156, 1032217, 1162018];                                //道具ID
var Care_Push = [20, 50, 100, 200, 300, 400, 500];                                           //显示属性
if (hour > 12) {
    hour -= 12;
    var apm = "下午好";
} else {
    var apm = "上午好";
}
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
            txt = "\t\t　#b " + Icon[73][1] + " #r#e  累计奖品区  #n#b " + Icon[75][1] + " #k\r\n";
            txt += z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + "\r\n\r\n";
            txt += "        #b淘居充值#d： - 尊敬的 [ #r#h ##d ] 玩家\t" + apm + "#k#n\r\n";
            txt += "\t\t\t\t#b当前累计充值 #r" + cm.getHyPay(3) + "#b 元#k#n\r\n\r\n";
            txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + "\r\n";
            for (var i = 0; i < Care.length; i++) {
                txt += "#b#L" + i + "#" + Icon[68][1] + " 领取累计充值 #r" + format(" ", 5, Care[i].toString()) + "#b 元奖品#k#l\r\n\r\n";
            }
            txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + "\r\n";
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            Care_Game = selection;
            txt = " ";
            for (var i = 0; i < 15; i++) {
                txt += Icon[68][1] + " ";
            }
            txt += "\r\n\r\n";
            txt += " #r [ #h # ] 您好 欢迎光临 #b土豪商品中心\r\n";
            txt += "#b   土豪道具全属性 [ " + Care_Push[selection] + " ]  - 神品道具 #r#z" + Care_Item[selection] + "# #k\r\n";
            txt += "#d 　　　　　　　　当前累计充值：#r" + cm.getHyPay(3) + "#k\r\n\r\n";
            txt += "　　　　　　　　　　　　 #i" + Care_Item[selection] + "# 　　　　　　　　　　\r\n\r\n";
            txt += "　　　　#b确认累计达标单击 [ #r是#b ]  否则 [ #r否#b ]#k\r\n\r\n\r\n ";
            for (var i = 0; i < 15; i++) {
                txt += Icon[68][1] + " ";
            }
            txt += "\r\n\r\n";
            cm.sendYesNoS(txt, 2);
        } else if (status == 2) {
            if (cm.getHyPay(3) < Care[Care_Game]) {
                cm.playerMessage(1, "抱歉 累计充值没有达标\r\n\r\n当前累计充值 [ " + cm.getHyPay(3) + " ]\r\n\r\n ");
                cm.dispose();
                return;
            }
            if (cm.getEventCount("土豪道具-" + Care_Item[Care_Game], 1) >= 1) {
                cm.playerMessage(1, "抱歉 道具一个账号只能领一回\r\n\r\n ");
                cm.dispose();
                return;
            }
            if (Care[Care_Game] == 1000) {
                GainItemCare(Care_Item[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], 20, 20, 5, 5, "累计充值", 5, 0, 5, 5, 5, 0);
            } else if (Care[Care_Game] == 3000) {
                GainItemCare(Care_Item[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], 50, 50, 10, 10, "累计充值", 6, 0, 6, 6, 6, 0);
            } else if (Care[Care_Game] == 5000) {
                GainItemCare(Care_Item[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], 100, 100, 15, 15, "累计充值", 8, 0, 8, 8, 8, 3);
            } else if (Care[Care_Game] == 8000) {
                GainItemCare(Care_Item[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], 200, 200, 20, 20, "累计充值", 10, 0, 10, 10, 10, 7);
            } else if (Care[Care_Game] == 10000) {
                GainItemCare(Care_Item[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], 300, 300, 25, 25, "累计充值", 12, 0, 12, 12, 12, 0);
            } else if (Care[Care_Game] == 15000) {
                GainItemCare(Care_Item[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], 400, 400, 30, 30, "累计充值", 15, 0, 15, 15, 15, 10);
            } else if (Care[Care_Game] == 20000) {
                GainItemCare(Care_Item[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], Care_Push[Care_Game], 500, 500, 50, 50, "累计充值", 20, 0, 20, 20, 20, 20);
            }
            cm.worldSpouseMessage(0x16, "※　土豪　※：恭喜玩家 " + cm.getChar().getName() + " 领到了土豪 遗失的神品道具 累计 [ " + Care[Care_Game] + " ]");
            cm.worldSpouseMessage(0x16, "※　土豪　※：恭喜玩家 " + cm.getChar().getName() + " 领到了土豪 遗失的神品道具 累计 [ " + Care[Care_Game] + " ]");
            cm.worldSpouseMessage(0x16, "※　土豪　※：恭喜玩家 " + cm.getChar().getName() + " 领到了土豪 遗失的神品道具 累计 [ " + Care[Care_Game] + " ]");
            cm.setEventCount("土豪道具-" + Care_Item[Care_Game], 1);
            cm.playerMessage(1, "恭喜你\r\n\r\n土豪道具已领到了!加油吧");
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

function GainItemCare(id, Hp, Mp, Str, Dex, Int, Luk, Watk, Matk, Owner, allStat, Enhance, ignorePDR, bossDamage, totalDamage, UpgradeSlots) {
    var toDrop = cm.getNewEquip(id);
    toDrop.setHp(Hp);                                   //血量
    toDrop.setMp(Mp);                                   //蓝量
    toDrop.setStr(Str);                                 //力量
    toDrop.setDex(Dex);                                 //敏捷
    toDrop.setInt(Int);                                 //智力
    toDrop.setLuk(Luk);                                 //运气
    toDrop.setWatk(Watk);                               //物攻
    toDrop.setMatk(Matk);                               //魔攻
    toDrop.setOwner(Owner);                             //名称
    toDrop.setAllStat(allStat);                         //所有属性
    toDrop.setEnhance(Enhance);                         //星级
    toDrop.setIgnorePDR(ignorePDR);                     //百分比例 - 无视怪物防御 - 最大255%
    toDrop.setBossDamage(bossDamage);                   //Boss伤害值百分比 - 最大255%
    toDrop.setTotalDamage(totalDamage);                 //百分比伤害值  - 最大255%
    toDrop.setUpgradeSlots(UpgradeSlots);               //升级次数
    cm.addFromDrop(toDrop);
}