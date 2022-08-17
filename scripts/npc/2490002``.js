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
    Array("梦幻", "#fEtc/streamBait/streamBait/1/appear/0#"),
    Array("梦幻", "#fEtc/streamBait/streamBait/2/appear/0#"),
    Array("梦幻", "#fEtc/streamBait/streamBait/3/appear/0#"),
    Array("梦幻", "#fEtc/streamBait/streamBait/4/appear/0#")
);
var IconD = "#fEffect/SetItemInfoEff/1/11#";//战斗标识
var status = 0;
var txt;
var 模式 = [[200000000, 1000000, "金币"], [150000, 3500000, "点卷"],  [300, 1000000, "黑色羽毛"],  [100, 10000000, "元宝"],  [1, 10000000, "免费"]]//价位 属性 , [100, 5000000, "元宝"], [100, 3000000, "元宝"]
var NumericalA;
var NumericalB;
var NumericalC;
var Care;
var status = -1

var open = true;

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
        txt = "\t\t\t\t#b#e" + Icon[82][1] + " 破攻中心 " + Icon[82][1] + "#k#n\r\n\r\n";
        txt += "" + Icon[15][1] + " #b当前玩家破攻值 : #r" + cm.getLimitBreak() + "#k  #b累计赞助:#r"+cm.getHyPay(3)+"\r\n\r\n";
        txt += "#r#L4#" + Icon[8][1] + "   免费领2千万破功,每把武器限1次(武器放在第一格) #l\r\n\r\n";
        txt += "#r#L5#" + Icon[8][1] + "   赞助每日免费破功入口(请先看说明)#l";
        txt += "#r#L6#" + Icon[8][1] + " 说明#l\r\n\r\n";
       // txt += "#r#L2#" + Icon[8][1] + "   提升破攻#b[ 300黑色羽毛 ]#r每次100万#d破功无限制#l\r\n\r\n";
		txt += "#r#L0#" + Icon[8][1] + "   提升破攻#b[ 2亿金币 ]#r每次100万#d破功无限制#l\r\n\r\n";
        txt += "#r#L1#" + Icon[8][1] + "   提升破攻#b[ 15万点卷 ]#r每次350万#d破功无限制#l\r\n\r\n";
        txt += "#r#L3#" + Icon[8][1] + "   提升破攻#b[ 100元宝 ]#r每次1000万#d破功无限制#l\r\n\r\n ";
        cm.sendSimpleS(txt, 2);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                if (cm.getLimitBreak() > 9900000000) {
                    cm.playerMessage(1, "抱歉 - 你当前破攻值大于金币破功限制 请选择别的模式提升");
                    cm.dispose();
                    return;
                }
                if (cm.getMeso() < 500000000) {
                    cm.playerMessage(1, "抱歉 - 你没有 1亿金币 ");
                    cm.dispose();
                    return;
                } else {
                    Care = 0;
                }
                break;
            case 1:
                if (cm.getLimitBreak() > 9900000000) {
                    cm.playerMessage(1, "抱歉 - 你当前破攻值大于点券破功限制 请选择别的模式提升");
                    cm.dispose();
                    return;
                }
                if (cm.getNX(1) < 150000) {
                    cm.playerMessage(1, "抱歉 - 你没有 150000 点卷 ");
                    cm.dispose();
                    return;
                } else {
                    Care = 0;
                }
                break;
            case 2:
                if (cm.getLimitBreak() > 9900000000) {
                    cm.playerMessage(1, "抱歉 - 你当前破攻值大于羽毛破功限制 请选择别的模式提升");
                    cm.dispose();
                    return;
                }
                if (!cm.haveItem(4034999,300)) {
                    cm.playerMessage( "抱歉 - 你没有 300 黑色羽毛 ");
                    cm.dispose();
                    return;
                } else {
                    Care = 0;
                }
                break;
            case 3:
                if (cm.getLimitBreak() < 9900000000) {
                    var 属性 = 模式[3][1];
                    var 类型 = 模式[3][2];
                } /*else if (cm.getLimitBreak() > 700000000 && cm.getLimitBreak() < 1000000000) {
                    var 属性 = 模式[3][1];
                    var 类型 = 模式[3][2];
                } else if (cm.getLimitBreak() > 100000000) {
                    var 属性 = 模式[4][1];
                    var 类型 = 模式[4][2];
                }*/
                if (cm.getHyPay(1) < 100) {
                    cm.playerMessage(1, "抱歉 - 你没有 100 元宝 ");
                    cm.dispose();
                    return;
                } else {
                    Care = 1;
                }
                break;
            case 4:
                cm.dispose();
				cm.openNpc(9900000,"免费破功");
                return;
                break;
            case 5:
                cm.dispose();
				cm.openNpc(9900000,"累计赞助破功");
                return;
                break;
            case 6:
                cm.dispose();
				cm.openNpc(9900000,"累计赞助破功说明");
                return;
                break;
        }
        if (Care == 5) {//免费领取 2000W破功
            NumericalA = cm.getLimitBreak();
            NumericalB = 模式[selection][1];
            NumericalC = 9900000000 - cm.getLimitBreak();
            if (cm.WeaponLimitBreak(模式[selection][1])) { //破攻数值
                txt = "\t\t\t\t" + IconD + "\r\n";
                txt += "#b ┏　　　　　　　　　　#r武器信息#b　　　　　　　　　　┓#k\r\n\r\n";
                txt += "\t\t#b武器默认破攻信息　#r□■ #d" + NumericalA + "#d #k\r\n";
                txt += "\t\t#b武器增值破攻信息　#r□■ #d" + NumericalB + "#r #k\r\n";
                txt += "\t\t#b武器还能增值信息　#r□■ #r" + NumericalC + "#b #k\r\n\r\n";
                txt += "#b ┗　　　　　　#r恭喜　武器破攻完毕请验货#b　　　　　　┛#k\r\n";
                cm.sendOkS(txt, 2);
                cm.worldSpouseMessage(0x15, "[ 武器圣殿 ] 尊敬的 " + cm.getChar().getName() + " 采用 " + 模式[selection][2] + " 让武器破功追加 " + 模式[selection][1] + " 上限 -天啦噜`` ");
                if (模式[selection][2] == "金币") cm.gainMeso(-500000000);
                if (模式[selection][2] == "点卷") cm.gainNX(1, -150000);
				if (模式[selection][2] == "黑色羽毛") cm.gainItem(4034999, -300);
				if (模式[selection][2] == "免费") cm.gainMeso(-1);
                cm.dispose();
            } else {
                cm.sendOk("\r\n\r\n\t#d#e抱歉 [ #r#h ##d ] 玩家\r\n没有检测到你身上带有武器！！");
                cm.dispose();
            }
        }else if (Care == 0) {
            NumericalA = cm.getLimitBreak();
            NumericalB = 模式[selection][1];
            NumericalC = 9900000000 - cm.getLimitBreak();
            if (cm.WeaponLimitBreak(模式[selection][1])) { //破攻数值
                txt = "\t\t\t\t" + IconD + "\r\n";
                txt += "#b ┏　　　　　　　　　　#r武器信息#b　　　　　　　　　　┓#k\r\n\r\n";
                txt += "\t\t#b武器默认破攻信息　#r□■ #d" + NumericalA + "#d #k\r\n";
                txt += "\t\t#b武器增值破攻信息　#r□■ #d" + NumericalB + "#r #k\r\n";
                txt += "\t\t#b武器还能增值信息　#r□■ #r" + NumericalC + "#b #k\r\n\r\n";
                txt += "#b ┗　　　　　　#r恭喜　武器破攻完毕请验货#b　　　　　　┛#k\r\n";
                cm.sendOkS(txt, 2);
                cm.worldSpouseMessage(0x15, "[ 武器圣殿 ] 尊敬的 " + cm.getChar().getName() + " 采用 " + 模式[selection][2] + " 让武器破功追加 " + 模式[selection][1] + " 上限 -天啦噜`` ");
                if (模式[selection][2] == "金币") cm.gainMeso(-500000000);
                if (模式[selection][2] == "点卷") cm.gainNX(1, -150000);
				if (模式[selection][2] == "黑色羽毛") cm.gainItem(4034999, -300);
				if (模式[selection][2] == "免费") cm.gainMeso(-1);
                cm.dispose();
            } else {
                cm.sendOk("\r\n\r\n\t#d#e抱歉 [ #r#h ##d ] 玩家\r\n没有检测到你身上带有武器！！");
                cm.dispose();
            }
        } else {
            NumericalA = cm.getLimitBreak();
            NumericalB = 属性;
            NumericalC = 9900000000 - cm.getLimitBreak();
            if (cm.WeaponLimitBreak(属性)) { //破攻数值
                txt = "\t\t\t\t" + IconD + "\r\n";
                txt += "#b ┏　　　　　　　　　　#r武器信息#b　　　　　　　　　　┓#k\r\n\r\n";
                txt += "\t\t#b武器默认破攻信息　#r□■ #d" + NumericalA + "#d #k\r\n";
                txt += "\t\t#b武器增值破攻信息　#r□■ #d" + NumericalB + "#r #k\r\n";
                txt += "\t\t#b武器还能增值信息　#r□■ #r" + NumericalC + "#b #k\r\n\r\n";
                txt += "#b ┗　　　　　　#r恭喜　武器破攻完毕请验货#b　　　　　　┛#k\r\n";
                cm.sendOkS(txt, 2);
                cm.addHyPay(100);
                cm.worldSpouseMessage(0x15, "[ 武器圣殿 ] 尊敬的 " + cm.getChar().getName() + " 采用 " + 类型 + " 让武器破功追加 " + 属性 + " 上限 - 天啦噜");
                cm.dispose();
            } else {
                cm.sendOk("\r\n\r\n\t#d#e抱歉 [ #r#h ##d ] 玩家\r\n没有检测到你身上带有武器！！");
                cm.dispose();
            }
            cm.worldMessage(属性);
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


Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "　";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};