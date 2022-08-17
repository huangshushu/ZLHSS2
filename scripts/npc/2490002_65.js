var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var bb = "#fUI/UIWindow4.img/PQRank/rank/gold#";//皇冠1
var cc = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"//开始条件
var A0 = "#fUI/Basic/LevelNo/0#"; //[1]+1
var A1 = "#fUI/Basic/LevelNo/1#"; //[1]+1
var A2 = "#fUI/Basic/LevelNo/2#"; //[1]+1
var A3 = "#fUI/Basic/LevelNo/3#"; //[1]+1
var A4 = "#fUI/Basic/LevelNo/4#"; //[1]+1
var A5 = "#fUI/Basic/LevelNo/5#"; //[1]+1
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

var status = -1;
var text;
var pl = 0;
var pll = 0;
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
if (hour > 12) {
    hour -= 12;
    var apm = "下午好";
} else {
    var apm = "上午好";
}
function start() {
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
		var RMB = cm.getHyPay(1);
        var DJ = cm.getPlayer().getCSPoints(1);
        text = "\t\t　#b " + Icon[73][1] + " #r#e  充值礼包中心  #n#b " + Icon[75][1] + " #k\r\n\r\n";
		text += z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 + z7 +z7+z7+ "\r\n\r\n";
		text += "       #b淘居充值#d： - 尊敬的 [ #r#h ##d ] 玩家\t" + apm + "#k#n\r\n";
	    text +="\t\t"+ "#b元宝：#r" + RMB.formatMoney(0, "") + " #b元　";
        text += "#b点卷：#r" + DJ.formatMoney(0, "") + " #b点#k\r\n\r\n";
		text += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
        text += "#d#L0#" + bb + " 购买礼包\t\t\t[ 限时充值福利 ]#l\r\n";
        text += "#L1#" + bb + " 超值礼包\t\t\t[ 限时充值福利 ]#l#k#n\r\n\r\n";
        //text += "#L2#" + bb + " 超神礼包\t\t\t[ 限时充值福利 ]#l#k#n\r\n\r\n";
		text += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n\r\n";
        cm.sendSimple(text);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9310475, 18);
                break;
            case 1:
                pl = 2;
                var revenue = (600000)
                cm.sendYesNo("尊敬的 [ #r#h # #k ] 玩家\t\t欢迎光临充值中心\r\n#g限时超值礼包 心动不如行动 行动不如充值\r\n#r#e" + revenue.formatMoney(0, "") + " 点卷全部打包所有道具！#k#n\r\n\r\n#r#e 数量  2 #k#n #z2431990# #i2431990#\r\n#r#e 数量  15 #k#n #z2049124# #i2049124#\r\n#r#e 数量  15 #k#n #z2049116# #i2049116#\r\n#r#e 数量  2 #k#n #z2049310# #i2049310#\r\n#r#e 数量  2 #k#n #z2049750# #i2049750#\r\n#r#e 数量  1 #k#n #z3010590# #i3010590#\r\n#r#e 数量  1 #k#n #z1112941# #i1112941#\r\n#r#e 数量  1 #k#n #z1142347# #i1142347#\r\n#r#e 数量  1 #k#n 随机150级装 #i2436245#\r\n\r\n#e#r#L0#　点击购买超值大礼包 #l\r\n ");
                break;
            case 2:
                pl = 3;
                var text = "\t\t\t\t\t#r#e超神礼包";
                cm.sendYesNo(text);
        }
    } else if (status == 2) {
        if (pl == 2) {
            if (cm.getSpace(1) > 4 && cm.getSpace(2) > 4 && cm.getSpace(3) > 4 && cm.getSpace(4) > 4 && cm.getSpace(5) > 4) { //判定背包是否有空格
                if (cm.getPlayer().getCSPoints(1) >= 600000) {
                    cm.gainNX(-600000);
                    //cm.gainItem(2431988, 1);
                    cm.gainItem(2431994, 2);
                    cm.gainItem(2049124, 15);
                    cm.gainItem(2049116, 15);
                    cm.gainItem(2049310, 2);
                    cm.gainItem(2049750, 2);
                    cm.gainItem(3010590, 1);
                    cm.gainItem(1112941, 1);
                    cm.gainItem(2436245, 1);
                    cm.sendOk("购买成功");
                    cm.worldSpouseMessage(0x15, "[超值礼包] 玩家 " + cm.getChar().getName() + " 成功购买60万点卷超值礼包!!!大家快抱大腿吧土豪一枚！");
                    cm.worldSpouseMessage(0x15, "[超值礼包] 玩家 " + cm.getChar().getName() + " 成功购买60万点卷超值礼包!!!大家快抱大腿吧土豪一枚！");
                    cm.worldSpouseMessage(0x15, "[超值礼包] 玩家 " + cm.getChar().getName() + " 成功购买60万点卷超值礼包!!!大家快抱大腿吧土豪一枚！");
                    cm.dispose();
                } else {
                    cm.sendOk("抱歉你没有600000点卷，请充值");
                    cm.dispose();
                }
            } else {
                cm.sendOk("你把背包每个拦位空出4个格子");
                cm.dispose();
            }
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