/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414
*/
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
    Array("红心", "#fMap/MapHelper/weather/LoveEffect0/1/2#"),
    Array("气球", "#fMap/MapHelper/weather/9thBalloon/0#"),
    Array("气球", "#fMap/MapHelper/weather/9thBalloon/2#"),
    Array("气球", "#fMap/MapHelper/weather/9thBalloon/3#"),
    Array("气球", "#fMap/MapHelper/weather/9thBalloon/6#"),
    Array("气球", "#fMap/MapHelper/weather/9thBalloon/7#"),
    Array("气球", "#fMap/MapHelper/weather/9thBalloon/10#"),
    Array("紫剑", "#fMap/MapHelper/weather/guildBless/7#"),
    Array("BBQ", "#fMap/MapHelper/weather/snowCrystal2/2#"),
    Array("虎头", "#fMap/MapHelper/weather/chiwoo/7#"),
    Array("气球", "#fMap/MapHelper/weather/balloon/2#"),
    Array("皇冠", "#fMap/MapHelper/weather/WorldRecord2/3#")
);

var txt;
var 体验回合 = 0;                                                       /* 体验时不缴费                         */
var 起步值 = 500;                                                /* 起步时的初始价位                  */
var 倍增值 = 1;                                                     /* 按照已游戏 * 起步值的倍率 */
var 效验 = true;
var 记录值;
var 限制 = [100];

var 地图组 = [["副本图", 910800100], ["进入图", 910000001], ["退出图", 910000001]];

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
            记录值 = cm.getPQLog("西班牙斗牛");
            txt = "　　" + Icon[101][1] + "  " + Icon[102][1] + "  " + Icon[103][1] + "  " + Icon[104][1] + "  " + Icon[105][1] + "  " + Icon[106][1] + "  " + Icon[101][1] + "  " + Icon[102][1] + "  " + Icon[103][1] + "  " + Icon[104][1];
            txt += "\r\n";
            txt += "\t\t\t\t#L0#" + Icon[107][1] + "#e#r 西班牙斗牛 " + Icon[107][1] + "#l#k#n\r\n\r\n";
            txt += "#L1#" + Icon[108][1] + " #b 西班牙斗牛阅 - 游戏介绍 - 等信息　#g门票 [ #r" + 门票倍率(记录值) + "#g ]#l\r\n";
            txt += "#L2#" + Icon[108][1] + " #b 进入斗牛大厅 - 游戏 [#g 0#b ] 累计 [#g 0#b ] 排名 [#r 0 #b]#l\r\n\r\n";
            for (var i = 0; i < 11; i++) {
                txt += " " + Icon[111][1];
            }
            if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 712, 2400009);
            if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 712, 2400010);
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    cm.dispose();
                    cm.openNpc(2470018);
                    break;
                case 1:
                    txt = "";
                    for (var i = 0; i < 11; i++) {
                        txt += " " + Icon[111][1];
                    }
                    txt += "\r\n";
                    txt += "\t\t\t\t#L0#" + Icon[107][1] + "#e#r 西班牙斗牛 " + Icon[107][1] + "#l#k#n\r\n\r\n";
                    txt += "　" + Icon[108][1] + "  #b 进入斗牛大厅 并执行开始娱乐 限时 [ #r3分钟#b ]　　　　 " + Icon[108][1] + "\r\n";
                    txt += "　" + Icon[108][1] + "  #b 如果你是#r 平民 #b玩家 需躲避牛且保持不死即可通关　　　" + Icon[108][1] + "\r\n";
                    txt += "　" + Icon[108][1] + "  #b 如果你是#r 土豪 #b玩家 无需躲避牛只需将牛打死即可　　　" + Icon[108][1] + "\r\n";
                    txt += "　" + Icon[108][1] + "  #g 胜利固定的回合有着不同的奖品还有排名每周奖品　　　 " + Icon[108][1] + "\r\n";
                    if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 713, 2400009);
                    if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 713, 2400010);
                    status = -1;

                    break;

                case 2:
                    倍增值 = 门票倍率(记录值);
                    if (cm.getPlayer().getLevel() < 限制[0]) {
                        cm.playerMessage(1, "抱歉 - 低于 " + 限制[0] + " 级别不能参与");
                        效验 = false;
                        cm.dispose();
                        return;
                    } else if (cm.getParty() != null) {
                        cm.playerMessage(1, "抱歉 - 请退出当前组队");
                        效验 = false;
                        cm.dispose();
                        return;
                    } else if (cm.getNX(1) < 倍增值) {
                        cm.playerMessage(1, "抱歉 - 当前没有 " + 倍增值 + " 点卷\r\n\r\n 不能参与");
                        效验 = false;
                        cm.dispose();
                        return;
                    }
                    if (效验) {
                        var em = cm.getEventManager("西班牙斗牛事件");
                        if (em == null) {
                            cm.playerMessage(1, "抱歉 - 副本出错 请联系技术人员");
                            cm.dispose();
                            return;
                        }
                        var eim = em.newInstance(cm.getPlayer().getName());
                        var map = eim.createInstanceMapS(地图组[0][1]);
                        var player = cm.getPlayer();
                        var tomap = em.getMapFactory().getMap(地图组[2][1]);
                        eim.registerPlayer(player);
                        player.changeMap(map, map.getPortal(0));
                        eim.startEventTimer(60000);
                        cm.setPQLog("西班牙斗牛");
                        cm.gainNX(1, -倍增值);
                        cm.dispose();
                    } else {
                        cm.playerMessage(1, "抱歉 - 效验值 = false\r\n\r\n请联系技术人员");
                        cm.dispose();
                        return;
                    }
                    break;
            }
        }
    }
}
function 门票倍率(count) {
    if (count < 体验回合) {
        return 0;
    } else { count -= 体验回合 - 1; }
    var 值 = 0;
    var 记录值 = new Array();
    for (var i = 0; i < count; i++) {
        if (记录值.length < 2) {
            值 += 起步值;
        } else {
            值 += 起步值;
            //值 = 记录值[i - 2] + 记录值[i - 1];
            //cm.worldMessage(记录值[i - 2]);
            //cm.worldMessage(记录值[i - 1]);
        }
        记录值.push(值);
    }
    return 值;
}
var format = function FormatString(c, length, content) {//符号 位置 代码 - 文本类型 .toString()
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