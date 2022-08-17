var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var z7 = "#fEffect/ItemEff/1112811/0/0#";//黄金音符
var z2 = "#fEffect/SetEff/9/effect/7#";
var z3 = "#fUI/GuildMark/Mark/Animal/00002006/16#";
var z4 = "#fUI/UIWindow2/MemoInGame/Get/BtClame/pressed/0#";
var z5 = "#fEffect/CharacterEff/1112904/2/1#";//五角花
var z6 = "#fUI/GuildMark/Mark/Etc/00009004/3#";//皇冠
var z7 = "#fUI/GuildMark/Mark/Etc/00009023/10#";//皇冠
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
if (hour > 12) {
    hour -= 12;
    var apm = "下午好";
} else {
    var apm = "上午好";
}
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
        //-------------------------------//

        //------------------------------//
        var selStr = "\t\t　　#b " + Icon[73][1] + " #r#e 充值中心 #n#b " + Icon[75][1] + " #k\r\n";
        selStr += z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 +z7+z7+ "\r\n";
        selStr += "        #b淘居充值#d： - 尊敬的 [ #r#h ##d ] 玩家\t" + apm + "#k#n\r\n\r\n";
		selStr += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6;
		selStr += "#L6##r" + Icon[68][1] + " 理财投资中心 #b\t\t[ 　  VIP专享服务 　 ]#k\r\n";
        //selStr += "#L0##r" + Icon[68][1] + " 金额充值点卷 #b\t\t[ 　⒈元‖3000点劵　 ]#k\r\n";
        selStr += "#L2##d" + Icon[68][1] + " 每日充值奖励 #b\t\t[  每天充值都可以领  ]#k\r\n";
        selStr += "#L3##r" + Icon[68][1] + " 累计充值奖励 #b\t\t[   每项仅限领一回   ]#k\r\n";
       // selStr += "#L1##r" + Icon[68][1] + " 累计属性道具 #b\t\t[ 　不能用还原卷轴　 ]#k\r\n";
		selStr += "#L7##r" + Icon[68][1] + " 元宝商店 #b\t\t    [   各种装备道具   ]#k\r\n";
        //selStr += "#L4##d" + Icon[68][1] + " 打开充值网站 #b\t\t[ 充值比例　查阅介绍 ]#k\r\n\r\n";
		selStr += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
        //selStr += "#L5##r#e" + Icon[68][1] + "\t　 充值平台 比例 福利 详细介绍\t　 #k" + Icon[68][1] + "#l#k#n\r\n\r\n";
        //----------------------------//

        //---------------------------//
        cm.sendSimpleS(selStr, 2);
    } else if (status == 1) {
        switch (selection) {
            case 0://充值点劵
                cztp = 1;
                var revenue0 = cm.getHyPay(1);
                var text = z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + "\r\n\r\n";
                text += "#d尊敬的玩家 #h # 在这里可以用金额充值点卷\r\n\r\n";
                text += "- 当前玩家持有金额：#r" + revenue0.formatMoney(0, "") + "#d 元\r\n\r\n\r\n";
                text += "\t\t\t#r#L0#" + Icon[68][1] + " 游戏金额充值点卷 " +Icon[68][1]+"#l\r\n\r\n\r\n";
                text += z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + "\r\n";
                cm.sendYesNoS(text, 2);
                break;
            case 1://充值奖品
                cm.dispose();
                cm.openNpc(2490002, 64);
                break;
            case 2://充值抽奖
                cm.dispose();
                cm.openNpc(2490002, "每日首充B");
                break;
            case 3://充值礼包
                cm.dispose();
                cm.openNpc(9201034, "leijichongzhi");//cm.openNpc(2490002, 65);
                break;
			case 4://充值链接
                cm.dispose();
                cm.openWeb("http://new.shoukabao.com/Payment/Service/650dccfe6118a97217185c2717dc8fa4");
                break;
		   	case 5://充值介绍链接
                cm.dispose();
                cm.openWeb("http://new.shoukabao.com/Payment/Service/650dccfe6118a97217185c2717dc8fa4");
                break;
            case 6://理财中心
                cm.dispose();
                cm.openNpc(2490002, 66);
                break;
            case 7://理财中心
                cm.dispose();
                cm.openNpc(2490002,"jpzb1");
                break;
        }
    } else if (status == 2) {
        if (cztp == 1) {
            switch (selection) {
                case 0://金额充值点卷
                    if (cm.getHyPay(1) < 1) {
                        cm.sendOk("#r#e抱歉 ！您的金额数目 [0] 不能进行充值 ");
                        status = -1;
                    } else {
                        cm.sendGetText("#r#e★★★★★★★★★『充值中心』★★★★★★★★★#d\r\n\r\n请入你需充值点卷的数量 [ 1：3000 ]\r\n\r\n ");
                    }
                    break;
            }
        }
    } else if (status == 3) {
        if (cm.getHyPay(1) - cm.getText() < 0) {
            cm.sendOk("#r#e抱歉 ！充值后金额低于 [ 0 ] ");
            cm.dispose();
        } else {
            cm.addHyPay(+cm.getText());
            cm.gainNX(cm.getText() * 3000);
            cm.sendOk("#d#e恭喜您\r\n\r\n购买点卷数量：#r" + cm.getText() * 3000 + "#k#n\r\n ");
            cm.dispose();

        }
    }
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