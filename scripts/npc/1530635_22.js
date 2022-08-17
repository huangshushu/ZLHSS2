/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414
*/
/
var txt;
var status = 0;
/*------------------------------------------------------------*/
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
    Array("方框", "#fUI/UIWindow.img/Item/New/inventory/0#"),
    Array("方框", "#fUI/UIWindow.img/Item/activeExpChairIcon#"),
    Array("箭头", "#fUI/Basic.img/icon/arrow#"),
    Array("笑脸", "#fEtc/ItemPotLifeInfo/1000/state/good/0#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#"),
    Array("睡脸", "#fEtc/ItemPotLifeInfo/1000/state/sleep/0#"),
    Array("铃铛", "#fMap/MapHelper/weather/tree/9#"),
    Array("雪花", "#fMap/MapHelper/weather/snowmanSnow/0#"),
    Array("咖啡", "#fMap/MapHelper/weather/sweetHeart/0#"),
    Array("天使", "#fMap/MapHelper/weather/starPlanet2/3#"),
    Array("蘑菇", "#fMap/MapHelper/weather/dia/0#"),
    Array("蘑菇", "#fMap/MapHelper/weather/5000days/3#"),
    Array("红心", "#fMap/MapHelper/weather/LoveEffect0/2/1#"),
    Array("红心", "#fMap/MapHelper/weather/LoveEffect0/3/0#"),
    Array("黄星", "#fMap/MapHelper/weather/WorldRecord2/0#"),
    Array("黄菇", "#fMap/MapHelper/weather/mush2/2#"),
    Array("黄菇", "#fMap/MapHelper/weather/mush1/6#"),
    Array("射心", "#fMap/MapHelper/weather/LoveEffect2/0/0#"),
    Array("射心", "#fMap/MapHelper/weather/LoveEffect1/2/0#"),
    Array("射心", "#fMap/MapHelper/weather/LoveEffect1/1/0#"),
    Array("红心", "#fMap/MapHelper/weather/LoveEffect1/1/1#"),
    Array("袜子", "#fMap/MapHelper/weather/christmas/11#"),
    Array("小心", "#fMap/MapHelper/weather/apple/4#"),
    Array("树木", "#fMap/MapHelper/weather/2011Xmas/5#"),
    Array("小心", "#fMap/MapHelper/weather/2011Xmas/6#"),
    Array("可爱", "#fMap/MapHelper/weather/2011Xmas/3#"),
    Array("天使", "#fMap/MapHelper/weather/starPlanet2/2#"),
    Array("红心", "#fMap/MapHelper/weather/LoveEffect0/1/2#")
);

var txt;
var 徽章 = 1712000;
var 材料 = Array(
    Array(4000223, 1000),
    Array(4002003, 4)
);
var 检测 = true;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            txt = "　　 " + Icon[83][1] + " " + Icon[99][1] + " " + Icon[100][1] + " " + Icon[99][1] + " " + Icon[83][1];
            txt += "\r\n\r\n";
            txt += "\t\t #L0#" + Icon[97][1] + " #r#eARC#n#b 说明中心 " + Icon[97][1] + "#l#k\r\n\r\n";
            txt += "\t\t #L1#" + Icon[97][1] + " #r#eARC#n#b 提升通道 " + Icon[97][1] + "#l#k\r\n\r\n";
            txt += "\r\n\r\n";
            txt += "　　 " + Icon[83][1] + " " + Icon[99][1] + " " + Icon[100][1] + " " + Icon[99][1] + " " + Icon[83][1];
            if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleS(txt, 2, 2400009);
            if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleS(txt, 2, 2400010);
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    txt = "\t\t\t\t" + Icon[85][1] + "#r#e 说明中心 #k#n" + Icon[85][1] + "\r\n";
                    txt += "\t" + Icon[86][1] + " #g功能说明\r\n\r\n";
                    txt += "\t" + Icon[86][1] + " #bARC 提升需 5000 枫叶来进行提升道具\r\n";
                    txt += "\t" + Icon[86][1] + " #b概率提升的范围值 100% 不存在失败请玩家注意#k\r\n";
                    txt += "\t" + Icon[86][1] + " #b道具最高限制只能强到 888 请各位玩家留意\r\n\r\n";
                    txt += "\t\t\t\t\t　#L999#" + Icon[76][1] + "\r\n";
                    if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 713, 2400009);
                    if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 713, 2400010);
                    status = -1;
                    break;
                case 1:
                    if (cm.getEquipBySlot(1) == null || cm.getEquipBySlot(1).getItemId() != 徽章) {
                        cm.playerMessage(1, "抱歉 - 第一个栏目位置必须是你提升的徽章");
                        cm.dispose();
                        return;
                    }
                    var 道具 = cm.getInventory(1).getItem(1);
                    var 属性 = 道具.copy();
                    if (属性.getArc() > 888) {
                        cm.playerMessage(1, "抱歉 - 最大 ARC 不能超过 888");
                        cm.dispose();
                        return;
                    }
                    for (var i = 0; i < 材料.length; i++) {
                        if (!cm.haveItem(材料[i][0], 材料[i][1])) 检测 = false;
                    }
                    if (检测) {
                        for (var i = 0; i < 材料.length; i++) {
                            if (cm.haveItem(材料[i][0], 材料[i][1])) cm.gainItem(材料[i][0], -材料[i][1]);
                        }
                        属性.setArc(属性.getArc() + 100);
                        cm.removeSlot(1, 1, 1);
                        cm.addFromDrop(cm.getC(), 属性, true);
                        cm.playerMessage(1, "恭喜你 提升结束" + 检测);
                        cm.dispose();
                        return;
                    } else {
                        txt = "　　 " + Icon[83][1] + " " + Icon[99][1] + " " + Icon[100][1] + " " + Icon[99][1] + " " + Icon[83][1] + "\r\n";
                        txt += "\t　#g总需　　　　已有　　　　还需　　　　名称\r\n";
                        for (var i = 0; i < 材料.length; i++) {
                            txt += "#r\t　" + format(" ", 12, 材料[i][1].toString())
                            txt += "#b" + format(" ", 12, cm.getItemQuantity(材料[i][0]).toString())
                            if (cm.getItemQuantity(材料[i][0]) - 材料[i][1] > 0) {
                                txt += "#b" + format(" ", 6, (0).toString())
                            } else {
                                txt += "#b" + format(" ", 6, (cm.getItemQuantity(材料[i][0]) - 材料[i][1]).toString())
                            }
                            txt += "#r\t　#z" + 材料[i][0] + "#\r\n";
                        }
                        txt += "\t\t\t\t\t　#L999#" + Icon[76][1] + "\r\n";
                        if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 713, 2400009);
                        if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 713, 2400010);
                        cm.dispose();
                    }
                    break;
                case 2:
                    if (cm.getPQLog("神秘徽章") < 1) {
                        cm.gainItem(1712000, 1);
                        cm.setPQLog("神秘徽章")
                        cm.playerMessage(1, "恭喜你 领到了徽章 请珍惜");
                        cm.dispose();
                    } else {
                        cm.playerMessage(1, "抱歉 每日只能领一回");
                        cm.dispose();
                    }
                    break;
            }
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

