/* CC通用副本入口 脚本定制 技术支持 50009219*/


/* 副本基本值 */
var Sel, txt, em, 信息
var status = -1


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
    Array("黄星", "#fEffect/CharacterEff/1112924/0/0#"),
    Array("蓝星", "#fEffect/CharacterEff/1112925/0/0#"),
    Array("New", "#fUI/UIWindow/Quest/icon5/1#"),
    Array("星星", "#fUI/NameTag/179/w#"),
    Array("星星", "#fUI/NameTag/179/c#"),
    Array("星星", "#fUI/NameTag/179/e#"),
    Array("火箭", "#fEffect/BasicEff/MainNotice/PL_RocketEgg/Notify/2#"),
    Array("漫步", "#fEffect/BasicEff/MainNotice/Runnning/Appear/8#"),
    Array("喜庆红", "#fEffect/CharacterEff/forceAtom/9/atom/1/parentAtom/4#"),
    Array("小红心", "#fEffect/ItemEff/1112001/0/1#"),
    Array("星星", "#fMap/MapHelper/weather/WorldRecord2/0#"),
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("星星", "#fUI/SoulUI.img/DungeonMinimap/BtMaxi/pressed/0#"),
    Array("星星", "#fUI/UIWindow6.img/闪电mitOverEvent/sub/NOtton/try/NOrmal/0#"),
    Array("星星", "#fUI/UIWindowPL.img/PieceReward_Clover/Tab/闪电ne#")
);
/* 配置文件 */
var EvName = ["duorenfuben"]
/* 事件储存 */
var LogName = ["多人副本"]
/* 副本状态 */
var State = [true]
/* 开始地图 */
var starMap = 865000001
/* 等级限制 */
var MinLv = [200]
var MaxLv = [275]
/* 挑战限制 */
var MaxNumber = [10]
/* 冷却限制 */
var CooLing = [1]
/* 人员限制 */
var MinPlayer = [1]
var MaxPlayer = [6]
/* 道具限制 */
var ItemLimit = [[4310019, 1]]
/* 副本等级 */
var Mob = 275
/* 破攻限制 */
var LimitBreak = 0
/* 变量值调用说明 0 = 副本Name 1 = Quest 2 = 检测开始地图 3 = 道具限制 4 = 破攻限制 */
var Basis = ["多人副本", 70001, false, true, true]

var group = [4310019, 4000001, 4000001, 4000001, 4000001, 4000001, 4000001];//掉宝信息填写到这里
function start() {
    var C_State = false
    if (Basis[2]) {
        if (cm.getMapId() != starMap) {
            status = 9
            txt = "#e#r\t\t　" + Icon[110][1] + " " + Basis[0] + " " + Icon[110][1] + "#k#n\r\n\r\n\r\n";
            txt += "\t　#b你现在确认放弃当前副本 并从这里出去吗 ?\r\n"
        } else {
            C_State = true
        }
    } else {
        C_State = true
    }
    if (C_State) {
        txt = "#e#r\t\t　" + Icon[111][1] + " " + Basis[0] + " " + Icon[111][1] + "#k#n\r\n\r\n";
        txt += "#e#d\t\t\t 请选择你想挑战的副本类型#k#n\r\n\r\n";
        for (var i in EvName) {
            txt += "#b#L" + i + "#" + Icon[113][1] + " " + format(" ", 20, LogName[i].toString()) + "　▲　#r当前状态 : " + (State[i] ? "#g开启" : "#r关闭") + "#l#k\r\n";
        }
    }
    txt += " "
    cm.sendSimpleS(txt, 2);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == -2 && selection == -1) { cm.dispose(); return; }
    switch (status) {
        case 0:
            Sel = selection
            em = cm.getEventManager(EvName[Sel])
            if (em == null) {
                cm.dropMessage(1, "抱歉\r\n\r\n当前副本出错 请询问管理员")
                cm.dispose()
                return
            }
            信息 = em.getProperty("leader").equals("true")
            txt = "#e#r\t\t　" + Icon[111][1] + " " + Basis[0] + " " + Icon[111][1] + "#k#n\r\n\r\n";
            txt += "#d\t" + Icon[113][1] + " 当前副本状态 : #b" + (State[Sel] ? "#g开启" : "#r已关闭") + "#k#n\r\n";
            txt += "#d\t" + Icon[113][1] + " 当前副本信息 : #b" + (信息 ? "#g空闲" : "#r满载") + "#k#n\r\n";
            txt += "#d\t" + Icon[113][1] + " 副本道具限制 : #b" + (Basis[3] ? "#r限制 △ #b#z" + ItemLimit[0] + "#" : "#g不限制") + "#k#n\r\n";
            txt += "#d\t" + Icon[113][1] + " 副本破攻限制 : #b" + (Basis[4] ? "#r限制 △ #b" + LimitBreak : "#g不限制") + "#k#n\r\n";
            txt += "#d\t" + Icon[113][1] + " 副本人员推荐 : #b[ " + format(" ", 3, MinPlayer[Sel].toString()) + " ] - [ " + format(" ", 3, MaxPlayer[Sel].toString()) + " ]#k#n\r\n"
            txt += "#d\t" + Icon[113][1] + " 副本挑战信息 : #b[ " + format(" ", 3, MaxNumber[Sel].toString()) + " ] - [ #r" + format(" ", 3, cm.getPQLog(LogName[Sel]).toString()) + "#b ]#k#n\r\n"
            txt += "#d\t" + Icon[113][1] + " 当前副本掉宝如下列所示#k#n\r\n\r\n";
            for (i in group) {
                txt += "#i" + group[i] + "#　";
            }
            txt += "\r\n";
            txt += "\r\n#e#r\t\t\t　你想立即开始挑战吗#k#n"
            cm.sendYesNoS(txt, 2);
            break;
        case 1:
            if (!State[Sel]) {
                cm.dropMessage(1, "抱歉\r\n\r\n当前副本没有开启")
                cm.dispose()
                return
            }
            if (!信息) {
                cm.dropMessage(1, "抱歉\r\n\r\n当前副本已有玩家请变更频道进行")
                cm.dispose()
                return
            }


            /* 组队信息 */
            if (cm.getParty() == null) {
                cm.dropMessage(1, "抱歉\r\n\r\n你需自己创建个队伍\r\n\r\n或玩家加入一个队伍")
                cm.dispose()
                return
            }
			if (!cm.isLeader()) {
                cm.dropMessage(1, "抱歉\r\n\r\n你让你的队长来进行通话")
                cm.dispose()
                return
            } 
            if (Basis[4]) {
                var Equip = cm.getInventory(-1).getItem(-11)
                if (Equip == null) {
                    cm.dropMessage(1, "抱歉\r\n\r\n你并没有携带武器")
                    cm.dispose()
                    return
                }
                if (!isAllPartyMembersLimitBreak(LimitBreak)) {
                    cm.dispose()
                    return
                }
            }

            if (!cm.isLeader()) {
                cm.dropMessage(1, "抱歉\r\n\r\n你让你的队长来进行通话")
                cm.dispose()
                return
            } else if (!cm.allMembersHere()) {
                cm.dropMessage(1, "抱歉\r\n\r\n请将队伍内的玩家召集到当前位置后尝试")
                cm.dispose()
                return
            } else if (!cm.isAllPartyMembersAllowedLevel(MinLv[Sel], MaxLv[Sel])) {
                cm.dropMessage(1, "抱歉\r\n\r\n参与必须 " + MinLv[Sel] + " - " + MaxLv[Sel] + " 级别内")
                cm.dispose()
                return
            } else if (!cm.isAllPartyMembersAllowedPQ(LogName[Sel], MaxNumber[Sel], CooLing[Sel])) {
                cm.dropMessage(1, "抱歉\r\n\r\n你的队员 : " + cm.getNotAllowedPQMemberName(LogName[Sel], MaxNumber[Sel], CooLing[Sel]) + "\r\n\r\n已达到副本上限")
                if (cm.getNotAllowedPQMemberName(LogName[Sel], MaxNumber[Sel], CooLing[Sel]) != cm.getPlayer().getName()) {
                    var Char = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getNotAllowedPQMemberName(LogName[Sel], MaxNumber[Sel], CooLing[Sel]))
                    Char.dropMessage(1, "抱歉\r\n\r\n你当前副本挑战已达到上限")
                }
                cm.dispose()
                return
            }
            if (Basis[3]) {
                if (!cm.isAllPartyMembersHaveItem(ItemLimit[Sel][0], ItemLimit[Sel][1])) {
                    cm.dropMessage(1, "抱歉\r\n\r\n你的队员 : " + cm.getNotHaveItemMemberName(ItemLimit[Sel][0], ItemLimit[Sel][1]) + "\r\n\r\n缺少入门道具\r\n\r\n" + cm.getItemName(ItemLimit[Sel][0]) + "　▲　数量 " + ItemLimit[Sel][1])
                    cm.dispose()
                    return
                }
            }
            var Party = cm.getParty().getMembers()
            if (Party.size() < MinPlayer[Sel] || Party.size() > MaxPlayer[Sel]) {
                cm.dropMessage(1, "抱歉\r\n\r\n参与人员 " + MinPlayer[Sel] + " - " + MaxPlayer[Sel] + " 内")
                cm.dispose()
                return
            }
            em.startInstance(cm.getParty(), cm.getMap(), Mob, Basis[1]);
            cm.gainMembersPQ(LogName[Sel], 1);
            if (Basis[3]) cm.givePartyItems(ItemLimit[Sel][0], -ItemLimit[Sel][1]);
            cm.worldSpouseMessage(0x16, "[ 副本公告 ]: 玩家 [ " + cm.getPlayer().getName() + " ] 带着自己的队伍去挑战 " + LogName[Sel] + " 了 ");
            C_worldMessageEffect("[ 副本公告 ] 玩家 " + cm.getPlayer().getName() + " 等级 " + cm.getPlayer().getLevel() + " 带领自己的队伍去挑战 " + LogName[Sel] + " 副本 !!! ", 8, 5000)
            cm.dispose();
            break;

        case 10:
            cm.warp(starMap, 0)
            cm.dispose();
            break;
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


function isAllPartyMembersLimitBreak(IAJ1) { var z2 = cm["\x67\x65\x74\x50\x61\x72\x74\x79"]()["\x67\x65\x74\x4d\x65\x6d\x62\x65\x72\x73"](); for (var XaNUAWeK3 in z2) { var jupzM5 = cm["\x67\x65\x74\x43\x68\x61\x6e\x6e\x65\x6c\x53\x65\x72\x76\x65\x72"]()["\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x53\x74\x6f\x72\x61\x67\x65"]()["\x67\x65\x74\x43\x68\x61\x72\x61\x63\x74\x65\x72\x42\x79\x49\x64"](z2[XaNUAWeK3]["\x67\x65\x74\x49\x64"]()); var hX6 = jupzM5["\x67\x65\x74\x49\x6e\x76\x65\x6e\x74\x6f\x72\x79"](Packages["\x63\x6c\x69\x65\x6e\x74"]["\x69\x6e\x76\x65\x6e\x74\x6f\x72\x79"]["\x4d\x61\x70\x6c\x65\x49\x6e\x76\x65\x6e\x74\x6f\x72\x79\x54\x79\x70\x65"]["\x45\x51\x55\x49\x50\x50\x45\x44"])["\x67\x65\x74\x49\x74\x65\x6d"](-11); if (jupzM5 != null && hX6 != null && parseInt(hX6["\x67\x65\x74\x4c\x69\x6d\x69\x74\x42\x72\x65\x61\x6b"]()) + parseInt(hX6["\x67\x65\x74\x4c\x69\x6d\x69\x74\x42\x72\x65\x61\x6b\x45\x78"]()) >= IAJ1) continue; cm["\x64\x72\x6f\x70\x4d\x65\x73\x73\x61\x67\x65"](1, "\u7834\u653b\u9650\u5236\r\n\r\n" + jupzM5["\x67\x65\x74\x4e\x61\x6d\x65"]() + "\r\n\r\n\u73a9\u5bb6 \u7834\u653b\u6ca1\u6709\u8fbe\u6807\u6216\u6ca1\u6709\u643a\u5e26\u6b66\u5668"); jupzM5["\x64\x72\x6f\x70\x4d\x65\x73\x73\x61\x67\x65"](1, "\u7834\u653b\u9650\u5236\r\n\r\n\u9650\u5236 \r\n\r\n" + IAJ1 + "\r\n\r\n\u62b1\u6b49 \u4f60\u7684\u7834\u653b\u6ca1\u6709\u8fbe\u6807\r\n\r\n\u6216\u4f60\u6ca1\u6709\u643a\u5e26\u6b66\u5668"); return false; } return true; }

function C_worldMessageEffect(jqX$HcgMU1, KP2, _JzQsQMg3) {    /* 全服公告 */     return Packages["\x68\x61\x6e\x64\x6c\x69\x6e\x67"]["\x77\x6f\x72\x6c\x64"]["\x57\x6f\x72\x6c\x64\x42\x72\x6f\x61\x64\x63\x61\x73\x74\x53\x65\x72\x76\x69\x63\x65"]["\x67\x65\x74\x49\x6e\x73\x74\x61\x6e\x63\x65"]()["\x62\x72\x6f\x61\x64\x63\x61\x73\x74\x4d\x65\x73\x73\x61\x67\x65"](Packages["\x74\x6f\x6f\x6c\x73"]["\x70\x61\x63\x6b\x65\x74"]["\x55\x49\x50\x61\x63\x6b\x65\x74"]["\x67\x65\x74\x4d\x61\x70\x45\x66\x66\x65\x63\x74\x4d\x73\x67"](jqX$HcgMU1, KP2, _JzQsQMg3)); }

function C_mapMessageEffect(lGJUBrT1, AQPXsbgjN2, D3) {    /* 玩家地图公告 */     return cm["\x67\x65\x74\x4d\x61\x70"]()["\x62\x72\x6f\x61\x64\x63\x61\x73\x74\x4d\x65\x73\x73\x61\x67\x65"](Packages["\x74\x6f\x6f\x6c\x73"]["\x70\x61\x63\x6b\x65\x74"]["\x55\x49\x50\x61\x63\x6b\x65\x74"]["\x67\x65\x74\x4d\x61\x70\x45\x66\x66\x65\x63\x74\x4d\x73\x67"](lGJUBrT1, AQPXsbgjN2, D3)); }