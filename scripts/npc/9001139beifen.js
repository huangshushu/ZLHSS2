/*
脚本定制 技术支持 游戏顾问
唯一作者 - Care - 381991414
2017-5-28 18:33:40
*/



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
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/16#"),
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
    Array("华山", "#fEtc/FamiliarSet/1/iconProgress#"),
    Array("武当", "#fEtc/FamiliarSet/20/iconProgress#"),
    Array("笑脸", "#fEtc/ItemPotLifeInfo/1000/state/good/0#"),
    Array("哭脸", "#fEtc/ItemPotLifeInfo/1000/state/bad/0#"),
    Array("睡脸", "#fEtc/ItemPotLifeInfo/1000/state/sleep/0#"),
    Array("愁脸", "#fEtc/ItemPotLifeInfo/1000/state/sick/0#"),
    Array("梦幻", "#fEtc/streamBait/streamBait/0/appear/0#"),
    Array("星星", "#fUI/piggyBarMinigame/crunch/11#"),
    Array("小草", "#fReactor/9108000/0/hit/4#"),
    Array("花草", "#fReactor/3348005/0/hit/1#")
);
var status = 0;
var txt, ver, item;
item = 4032521;
var Care_name = ["每日 6 小时 三倍经验卡", "每日武器上限破攻", "每日双倍爆率卡 1 天权", "每日赠送都 魔方", "每日赠送道具卷轴", "每日赠送积分值", "每日赠送活力值", "每日免费激情抽奖", "副本重置"];
var Care_item = Array(
    Array(0, 5211060, 1, 2 * 60 * 1000, 0),//对口 name 位置 * 道具 * 数量 * 时间 * 类型 0 - 正常道具 1 - 点卷 2 - 抵用卷 3 - 元宝 4 - 积分 5 - 活力值
    Array(1, 2614023, 5, 0, 0),
    Array(2, 5360015, 1, 1, 0),
    Array(3, 5062002, 50, 0, 0),
    Array(3, 5062009, 50, 0, 0),
    Array(3, 5062500, 50, 0, 0),
    Array(3, 5062010, 30, 0, 0),
    Array(3, 5062024, 8, 0, 0),
    Array(4, 2049750, 2, 0, 0),
    Array(5, 50, 0, 0, 4),
    Array(6, 20, 0, 0, 5),
    Array(7, 2430069, 1, 0, 0),
    Array(8, "副本重置", 0, 0, 6)
);
var bosslist = Array(
    "普通扎昆",
    "进阶扎昆",
    "暗黑龙王",
    "进阶暗黑龙王",
    "钻机",
    "强化钻机",
    "品克缤",
    "混沌品克缤",
    "希拉",
    "希拉[困难]",
    "斯乌",
    "半半",
    "进阶半半",
    "贝伦",
    "进阶贝伦",
    "浓姬",
    "皮埃尔",
    "进阶皮埃尔",
    "森兰丸",
    "森兰丸",
    "贝勒德",
    "班·雷昂",
    "狮子王:班·雷昂[普通]",
    "女皇：希纳斯",
    "艾菲尼娅",
    "巨大蝙蝠",
    "巨大蝙蝠[困难]",
    "阿卡伊勒",
    "麦格纳斯",
    "麦格纳斯[困难]",
    "腥血女王",
    "进阶腥血女王"
)
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        txt = " " + Icon[83][1];
        for (var i = 0; i <= 13; i++) {
            txt += Icon[83][1];
        };
        txt += "\r\n\r\n";
        txt += "\t\t\t　#r#e" + Icon[82][1] + " 理财福利区 " + Icon[82][1] + "#k#n\r\n\r\n";
        for (var u = 0; u < Care_name.length; u++) {
            txt += "#b#L" + u + "#" + Icon[80][1] + " " + format(" ", 26, Care_name[u].toString()) + " #d▲ #r所需 #i" + item + "##l#k\r\n";
        }
        txt += "\r\n";
        for (var i = 0; i <= 6; i++) {
            txt += " " + Icon[84][1];
        };
        cm.sendSimpleS(txt, 2);
    } else if (status == 1) {
        ver = selection;
        txt = " " + Icon[83][1];
        for (var i = 0; i <= 13; i++) {
            txt += Icon[83][1];
        };
        txt += "\r\n\r\n";
        txt += "\t\t\t　#r#e" + Icon[82][1] + " 道具查询区域 " + Icon[82][1] + "#k#n\r\n\r\n";
        for (var u = 0; u < Care_item.length; u++) {
            if (Care_item[u][0] != ver) continue;
            if (Care_item[u][4] == 0) {
                if (Care_item[u][3] == 0) {
                    txt += "#b" + Icon[80][1] + " " + format(" ", 20, cm.getItemName(Care_item[u][1]).toString()) + " #d▲ #r数量 #b" + Care_item[u][2] + "#k\r\n";
                } else {
                    txt += "#b" + Icon[80][1] + " " + format(" ", 20, cm.getItemName(Care_item[u][1]).toString()) + " #d▲ #r数量 #b" + Care_item[u][2] + " #d▲ #r时间 #b" + Care_item[u][3] + "#k\r\n";
                }
            } else if (Care_item[u][4] == 1) {
                //txt += "#b" + Icon[80][1] + " " + format(" ", 20, "点　卷".toString()) + " #d▲ #r数量 #b" + Care_item[u][2] + "#k\r\n";
            } else if (Care_item[u][4] == 2) {
                //txt += "#b" + Icon[80][1] + " " + format(" ", 20, "抵用卷".toString()) + " #d▲ #r数量 #b" + Care_item[u][2] + "#k\r\n";
            } else if (Care_item[u][4] == 3) {
                //txt += "#b" + Icon[80][1] + " " + format(" ", 20, "余　额".toString()) + " #d▲ #r数量 #b" + Care_item[u][2] + "#k\r\n";
            } else if (Care_item[u][4] == 4) {
                //txt += "#b" + Icon[80][1] + " " + format(" ", 20, "积　分".toString()) + " #d▲ #r数量 #b" + Care_item[u][2] + "#k\r\n";
            } else if (Care_item[u][4] == 5) {
                //txt += "#b" + Icon[80][1] + " " + format(" ", 20, "活力值".toString()) + " #d▲ #r数量 #b" + Care_item[u][2] + "#k\r\n";
            } else if (Care_item[u][4] == 6) {
                txt += "#b" + Icon[80][1] + " 副本重置 确认吗 每天只能重置一回#k\r\n";
            } else {
                continue;
            }
        }
        txt += "\r\n";
        for (var i = 0; i <= 6; i++) {
            txt += " " + Icon[84][1];
        };
        cm.sendSimpleS(txt, 2);
    } else if (status == 2) {
        if (cm.haveItem(item) == false) {
            cm.playerMessage(1, "抱歉 - 你缺少 " + cm.getItemName(item) + " 这个道具");
            cm.dispose();
            return;
        }
        if (cm.getPQLog(Care_name[ver]) >= 1) {
            cm.playerMessage(1, "抱歉 - 每日只能领一回");
            cm.dispose();
            return;
        }
        if (ver == 8) {
            for (var i = 0; i < bosslist.length; i++) {
                cm.resetPQLog(bosslist[i])
            }
            cm.setPQLog(Care_name[8]);
            cm.playerMessage(1, "恭喜你 重置完毕");
            cm.dispose();
            return;
        }
        for (var u = 0; u < Care_item.length; u++) {
            if (Care_item[u][0] != ver) continue;
            if (Care_item[u][4] == 0) {
                if (Care_item[u][3] == 0) {
                    cm.gainItem(Care_item[u][1], Care_item[u][2])
                    cm.worldSpouseMessage(0x17, "【理财中心】: 恭喜玩家 " + cm.getName() + " 领到了今天的理财福利 " + "["+cm.getItemName(Care_item[u][1])+"]" );
                } else {
                    cm.gainItemPeriod(Care_item[u][1], Care_item[u][2], Care_item[u][1], Care_item[u][3])
                    cm.worldSpouseMessage(0x17, "【理财中心】: 恭喜玩家 " + cm.getName() + " 领到了今天的理财福利 " + "["+cm.getItemName(Care_item[u][1])+"]" );
                }
            } else if (Care_item[u][4] == 1) {
                txt += "#b" + Icon[80][1] + " " + format(" ", 20, "点　卷".toString()) + " #d▲ #r数量 #b" + Care_item[u][2] + "#k\r\n";
            } else if (Care_item[u][4] == 2) {
                txt += "#b" + Icon[80][1] + " " + format(" ", 20, "抵用卷".toString()) + " #d▲ #r数量 #b" + Care_item[u][2] + "#k\r\n";
            } else if (Care_item[u][4] == 3) {
                txt += "#b" + Icon[80][1] + " " + format(" ", 20, "余　额".toString()) + " #d▲ #r数量 #b" + Care_item[u][2] + "#k\r\n";
            } else if (Care_item[u][4] == 4) {
                txt += "#b" + Icon[80][1] + " " + format(" ", 20, "积　分".toString()) + " #d▲ #r数量 #b" + Care_item[u][2] + "#k\r\n";
            } else if (Care_item[u][4] == 5) {
                txt += "#b" + Icon[80][1] + " " + format(" ", 20, "活力值".toString()) + " #d▲ #r数量 #b" + Care_item[u][2] + "#k\r\n";
            } else {
                continue;
            }
            cm.setPQLog(Care_name[ver]);
            cm.playerMessage(1, "恭喜你\r\n\r\n" + Care_name[ver] + " 奖品领取成功");
            cm.dispose();
        }
    }
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