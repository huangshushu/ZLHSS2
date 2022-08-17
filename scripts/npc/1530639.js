/*
Care - 脚本调整 - 
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
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/2#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/3#"),
    Array("彩虹", "#fEffect/ItemEff/1102877/effect/default/0#"),
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
    Array("警报器", "#fUI/Basic/BtClaim/normal/0#"),
    Array("能购买", "#fUI/CashShop/CSBargainSale/BtPurchase/pressed/0#"),
    Array("不购买", "#fUI/CashShop/CSBargainSale/BtPurchase/disabled/0#")
);
var txt, Sel;

starttime = '2018-02-20 23:59:59';
starttime = starttime.replace(new RegExp("-", "gm"), "/");
var starttimeHaoMiao = (new Date(starttime)).getTime();
var 集福池 = Array(
    /* 0 = 道具 1 = 点卷 2 = 抵用卷 3 = 金币 4 = 元宝 */
    Array(0, 0, 2432206, 1),
    Array(0, 1, 66666, -1),
    Array(0, 0, 2049600, 5),
    Array(0, 0, 2435048, 1),
    Array(0, 0, 4001839, 200),
    Array(0, 0, 2430207, 10),
    Array(0, 0, 4001715, 2),
    Array(1, 0, 2048721, 2),
    Array(1, 0, 4310199, 5),
    Array(1, 0, 4002002, 2),
    Array(1, 1, 5000, -1),
    Array(2, 0, 2430207, 1),
    Array(2, 0, 4002000, 2),
    Array(2, 1, 2000, -1)
);
var log = [["新年快乐", 1], ["新年", 10], ["快乐", 20]];
var 字符 = [[4034247, 4034248, 4034249, 4034250], [4034247, 4034248], [4034249, 4034250]];
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
        }
        switch (status) {
            case 0:
                txt = "\t#r#e" + Icon[90][1] + "#b 杀怪夺宝两不误 轻松集#fs30##r福#b#fs15#来送礼 " + Icon[90][1] + "#k#n\t\r\n#fs18#";
                if (活动时间(java.lang.System.currentTimeMillis(), starttimeHaoMiao) != false) {
                    txt += Icon[93][1] + " #b距离结束时间还有 - #r" + 活动时间(java.lang.System.currentTimeMillis(), starttimeHaoMiao) + "\r\n#k";
                    txt += "#fs13##g活动期间您的每次杀怪,都有可能掉各种#r'字'#g集齐相对应公式即可兑换奖品\r\n";
                    txt += "每日可兑换的数量有限 请珍惜每次兑奖机会\r\n#k";
                    txt += "#L0##i4034247# + #i4034248# + #i4034249# + #i4034250#\t#r#fs20#每日兑换" + cm.getEventCount("新年快乐") + " / 1#fs13##l\r\n";
                    txt += "#L1##i4034247# + #i4034248#\t#r#fs20#每日兑换" + cm.getEventCount("新年") + " / 10#fs13##l\r\n";
                    txt += "#L2##i4034249# + #i4034250#\t#r#fs20#每日兑换" + cm.getEventCount("快乐") + " / 20#fs13##l\r\n";
                } else {
                    txt += Icon[93][1] + " #b距离结束时间还有 - #r" + 活动时间(java.lang.System.currentTimeMillis(), starttimeHaoMiao) + "\r\n#k";
                    txt += "#fs13##g活动期间您的每次杀怪,都有可能掉各种#r'字'#g集齐相对应公式即可兑换奖品\r\n";
                    txt += "每日可兑换的数量有限 请珍惜每次兑奖机会\r\n#k";
                    txt += "\r\n\r\n\t\t\t#fs50##L999#已结束#l\r\n";
                }
                if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 716, 2400009);
                if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 716, 2400010);
                break;
            case 1:
                if (selection == 999) {
                    cm.sendOk("呵 已经结束了");
                    cm.dispose();
                    return;
                }
                Sel = selection;
                if (cm.getEventCount(log[selection][0]) >= log[selection][1]) {
                    cm.sendOk("呵 你已经达到兑换上限了 抱歉");
                    cm.dispose();
                    return;
                }
                txt = "#r奖品清单\r\n\r\n";
                for (var i in 集福池) {
                    if (集福池[i][0] != selection) continue;
                    if (集福池[i][1] == 0) txt += "#k#i" + 集福池[i][2] + "#　数量 #r" + 集福池[i][3] + "#k\r\n";
                    if (集福池[i][1] == 1) txt += "#k游戏点　卷 : #r" + 集福池[i][2] + "#k\r\n";
                    if (集福池[i][1] == 2) txt += "#k游戏抵用卷 : #r" + 集福池[i][2] + "#k\r\n";
                    if (集福池[i][1] == 3) txt += "#k游戏金　币 : #r" + 集福池[i][2] + "#k\r\n";
                    if (集福池[i][1] == 4) txt += "#k游戏元　宝 : #r" + 集福池[i][2] + "#k\r\n";

                }
                cm.sendSimple(txt);
                break;
            case 2:
                var 检测 = true;
                for (var i in 字符[Sel]) {
                    if (!cm.haveItem(字符[Sel][i])) 检测 = false;
                }
                if (!检测) {
                    cm.sendOk("呵呵 你确定你字符集齐了吗");
                    cm.dispose();
                    return;
                }
                for (var i in 集福池) {
                    if (集福池[i][0] != Sel) continue;
                    if (集福池[i][1] == 0) cm.gainItem(集福池[i][2], 集福池[i][3]);
                    if (集福池[i][1] == 1) cm.gainNX(1, 集福池[i][2]);
                    if (集福池[i][1] == 2) cm.gainNX(2, 集福池[i][2]);
                    if (集福池[i][1] == 3) cm.gainMeso(集福池[i][2]);
                    if (集福池[i][1] == 4) cm.gainHyPay(集福池[i][2]);
                }
                for (var i in 字符[Sel]) {
                    cm.gainItem(字符[Sel][i], -1);
                }
                cm.setEventCount(log[Sel][0]);
                cm.sendOk("恭喜你 兑换成功");
                cm.dispose();
                break;
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

function getlist() {
    var sql = "SELECT DISTINCT account FROM paylog WHERE `rmb` >= '10';";
    var rs = cm.sql_Select(sql);
    return rs.length;
}

function getdayrmb() {
    var sql = "SELECT sum(rmb) FROM paylog WHERE `rmb` > '0' AND `paytime` >= '2018-02-06' AND `account` = 'admin1';";
    var rs = cm.sql_Select(sql);
    if (rs.length > 0) {
        if (rs.get(0).get("sum(rmb)") == null) return 0;
        return rs.get(0).get("sum(rmb)");
    }
    return 0;
}
function CurentTime() {
    var now = new Date();

    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();

    var hh = now.getHours();
    var mm = now.getMinutes();

    var clock = year + "-";

    if (month < 10)
        clock += "0";

    clock += month + "-";

    if (day < 10)
        clock += "0";

    clock += day + " ";

    if (hh < 10)
        clock += "0";

    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm;
    return (clock);
    //return (day);
}

function 活动时间(A, B) {
    var 时间差 = B - A;
    var 天 = Math.floor(时间差 / (24 * 3600 * 1000));

    var AA = 时间差 % (24 * 3600 * 1000);
    var 小时 = Math.floor(AA / (3600 * 1000));

    var AB = AA % (3600 * 1000);
    var 分钟 = Math.floor(AB / (60 * 1000));

    var AC = AB % (60 * 1000);
    var 秒钟 = Math.round(AC / 1000);
    if (秒钟 < 0) {
        return false;
    } else {
        return 天 + " 天 " + 小时 + " 小时 " + 分钟 + " 分钟 " + 秒钟 + " 秒";
    }
}
