var IconA = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var IconB = "#fUI/UIMiniGame/starPlanetRPS/heart#";//红心桃心
var IconC = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
var IconD = "#fEffect/SetItemInfoEff/1/11#";//战斗标识

var Rm;
var NumericalA;
var NumericalB;
var NumericalC;
var Care;
var Care_Po = [0, 0, java.lang.Math.floor(Math.random() * 555555 + 500000), java.lang.Math.floor(Math.random() * 666666 + 1200000), java.lang.Math.floor(Math.random() * 777777 + 2200000), java.lang.Math.floor(Math.random() * 888888 + 3200000), java.lang.Math.floor(Math.random() * 88888 + 200000), java.lang.Math.floor(Math.random() * 100000 + 500000)];
var Care_Rmb = [0, 0, 50, 100, 150, 200, 5, 10];
var a = 0;
var txt;




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
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#")
    );
function start() {
    a = -1;
    action(1, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else {
            cm.dispose();
            return;
        }
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            txt = "\t\t　　#b " + Icon[73][1] + " #r#e 破攻中心 #n#b " + Icon[74][1] + " #k\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n\r\n";
            txt += " #b" + Icon[4][1] + " 我可以帮你的武器进行破攻 但需付出一些道具 " + Icon[4][1] + "#l\r\n#k";
            txt += "#b#L0#" + Icon[15][1] + " [ #r#z4310085##b ] 破攻区 #l #L1##r" + Icon[15][1] + " 破攻排行#l\r\n\r\n#k";
            txt += "#L2##b [ 武器 ] 模式 - A - [  #r50#b ] 元宝  50万#r 至 #b120万#l#k\r\n";
            txt += "#L3##b [ 武器 ] 模式 - B - [ #r100#b ] 元宝 120万#r 至 #b200万#l#k\r\n";
            txt += "#L4##b [ 武器 ] 模式 - C - [ #r150#b ] 元宝 220万#r 至 #b300万#l#k\r\n";
            txt += "#L5##b [ 武器 ] 模式 - D - [ #r200#b ] 元宝 320万#r 至 #b400万#l#k\r\n";
            txt += "#L6##b [ 武器 ] 模式 - E - [ #r5 E#b ] 金币  20万#r 至 #b80 万#l#k\r\n";
            txt += "#L7##b [ 武器 ] 模式 - F - [ #r10E#b ] 金币  50万#r 至 #b120万#l#k\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n\r\n";
            txt += "   #b" + Icon[4][1] + "#r #z4310085# #b  获得途径 - 钓鱼 副本 充值 活动 " + Icon[4][1] + "#l\r\n#k";
            cm.sendSimpleS(txt, 2);
        } else if (a == 1) { 
            Care = selection;
            switch (selection) {
                case 0://中介币
                    cm.dispose();
                    cm.openNpc(2470018, "LimitBreak");
                    break;
                case 1://火种
                    var rs = cm.sql_Select("SELECT ii.limitbreak,i.itemid, c.name FROM inventoryitems i, inventoryequipment ii, characters c WHERE c.id = i.characterid AND ii.inventoryitemid = i.inventoryitemid AND limitbreak > 0 ORDER BY limitbreak DESC LIMIT 0, 100")
                    rankingData = new Array();
                    for (var key in rs) {
                        var data = {};
                        data.name = rs[key].get("name");
                        data.itemid = rs[key].get("itemid");
                        data.limitbreak = rs[key].get("limitbreak");
                        rankingData.push(data);
                    }
                    txt = "\t\t　#b " + Icon[73][1] + " #r#e 玩家破攻排行 #n#b " + Icon[74][1] + " #k\r\n\r\n";
                    txt += Icon[62][1];
                    for (var i = 0; i <= 97; i++) {
                        txt += Icon[63][1];
                    };
                    txt += Icon[64][1] + "\r\n\r\n";
                    txt += "#d#n   排序　　  玩家昵称　　  武器	　 　 破攻\r\n#k";
                    for (var i = 0; i < rankingData.length; i++) {
                        if (i + 1 == 1) {
                            txt += "#r";
                        } else if (i + 1 == 2) {
                            txt += "#g";
                        } else if (i + 1 == 3) {
                            txt += "#b";
                        }
                        txt += "　　" + format("   ", 4, i.toString());
                        /*名称*/
                        txt += format(" ", 14, rankingData[i].name.toString());
                        /*武器*/
                        txt += format(" ", 16, ("#v" + rankingData[i].itemid + "#").toString());
                        /*破攻*/
                        txt += rankingData[i].limitbreak;
                        txt += "\r\n";
                    }

                    cm.sendOkS(txt, 3);
                    a = -1;
                    break;
                case 2://人民币
                    txt = "\r\n" + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
                    txt += "\t\t\t\t\t　" + IconC + "\r\n\r\n";
                    txt += " #r - 模式 [ Ｃ ] 说明 -#k\r\n\r\n";
                    txt += " #d使用 #r元宝 #d [ #r" + Care_Rmb[selection] + "#d ] 个即可为您的武器提升伤害值\r\n\r\n";
                    txt += " 　#d一旦单击 [ 是 ] 则进行提升 若考虑单击 [ 否 ]\r\n\r\n";
                    txt += "　　\t#r提升伤害随机数值 [ 500000-1200000 ]#k\r\n\r\n"
                    txt += IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
                    cm.sendYesNoS(txt, 2);
                    break;
                case 3://人民币
                    txt = "\r\n" + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
                    txt += "\t\t\t\t\t　" + IconC + "\r\n\r\n";
                    txt += " #r - 模式 [ C ] 说明 -#k\r\n\r\n";
                    txt += " #d使用 #r元宝 #d [ #r" + Care_Rmb[selection] + "#d ] 个即可为您的武器提升伤害值\r\n\r\n";
                    txt += " 　#d一旦单击 [ 是 ] 则进行提升 若考虑单击 [ 否 ]\r\n\r\n";
                    txt += "　　\t#r提升伤害随机数值 [ 1200000-2000000 ]#k\r\n\r\n"
                    txt += IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
                    cm.sendYesNoS(txt, 2);
                    break;
                case 4://人民币
                    txt = "\r\n" + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
                    txt += "\t\t\t\t\t　" + IconC + "\r\n\r\n";
                    txt += " #r - 模式 [ C ] 说明 -#k\r\n\r\n";
                    txt += " #d使用 #r元宝 #d [ #r" + Care_Rmb[selection] + "#d ] 个即可为您的武器提升伤害值\r\n\r\n";
                    txt += " 　#d一旦单击 [ 是 ] 则进行提升 若考虑单击 [ 否 ]\r\n\r\n";
                    txt += "　　\t#r提升伤害随机数值 [ 2200000-3000000 ]#k\r\n\r\n"
                    txt += IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
                    cm.sendYesNoS(txt, 2);
                    break;
                case 5://人民币
                    txt = "\r\n" + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
                    txt += "\t\t\t\t\t　" + IconC + "\r\n\r\n";
                    txt += " #r - 模式 [ C ] 说明 -#k\r\n\r\n";
                    txt += " #d使用 #r元宝 #d [ #r" + Care_Rmb[selection] + "#d ] 个即可为您的武器提升伤害值\r\n\r\n";
                    txt += " 　#d一旦单击 [ 是 ] 则进行提升 若考虑单击 [ 否 ]\r\n\r\n";
                    txt += "　　\t#r提升伤害随机数值 [ 3200000-4000000 ]#k\r\n\r\n"
                    txt += IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
                    cm.sendYesNoS(txt, 2);
                    break;

                case 6:

                    txt = "\r\n" + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
                    txt += "\t\t\t\t\t　" + IconC + "\r\n\r\n";
                    txt += " #r - 模式 [ Ｄ ] 说明 -#k\r\n\r\n";
                    txt += " #d使用 #r金币 #d [ #r" + Care_Rmb[selection] * 100000000 + "#d ] 金币即可为您的武器提升伤害值\r\n\r\n";
                    txt += " 　#d一旦单击 [ 是 ] 则进行提升 若考虑单击 [ 否 ]\r\n\r\n";
                    txt += "　　\t#r提升伤害随机数值 [ 200000-800000 ]#k\r\n\r\n"
                    txt += IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
                    cm.sendYesNoS(txt, 2);
                    break;
            }
        } else if (a == 2) {
            NumericalA = cm.getLimitBreak();
            NumericalB = Care_Po[Care];
            NumericalC = 9900000000 - cm.getLimitBreak();

            if (cm.getLimitBreak() <= 9900000000) { //设置破攻上限
                if (Care == 6 || Care == 7) {
                    if (cm.getBossLog("金币破攻", 1) < 1000) { //次数
                        if (cm.getMeso() >= (Care_Rmb[Care] * 100000000)) { //判断元宝
                            if (cm.changeLimitBreak(parseInt(Care_Po[Care]), true)) { //破攻数值
                                cm.setBossLog("金币破攻", 1);
                                cm.gainMeso(- (Care_Rmb[Care] * 100000000));
                                txt = "\t\t\t\t" + IconD + "\r\n";
                                txt += "#b ┏　　　　　　　　　　#r武器信息#b　　　　　　　　　　┓#k\r\n\r\n";
                                txt += "\t\t#b武器默认破攻信息　#r□■ #d" + NumericalA.formatMoney(0, "") + "#d #k\r\n";
                                txt += "\t\t#b武器增值破攻信息　#r□■ #d" + NumericalB.formatMoney(0, "") + "#r #k\r\n";
                                txt += "\t\t#b武器还能增值信息　#r□■ #r" + NumericalC.formatMoney(0, "") + "#b #k\r\n\r\n";
                                txt += "#b ┗　　　　　　#r恭喜　武器破攻完毕请验货#b　　　　　　┛#k\r\n";
                                cm.sendOkS(txt, 2);
                                cm.worldSpouseMessage(0x18, "[ 武器圣殿 ] 尊敬的 " + cm.getChar().getName() + " 采用 元宝 让武器伤害追加 " + Care_Po[Care] + " 伤害值 - 提高武器伤害性");
                            } else {
                                cm.sendOk("\r\n\r\n\t#d#e抱歉 [ #r#h ##d ] 玩家\r\n没有检测到你身上带有武器！！");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("\r\n\r\n\t#d#e抱歉 [ #r#h ##d ] 玩家\r\n您的 -元宝- 不充足 ！！");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("\r\n\r\n\t#d#e抱歉 [ #r#h ##d ] 玩家\r\n你可突破的次数已达到上限 请提升贵宾等级");
                        cm.dispose();
                    }
                } else {
                    if (cm.getBossLog("元宝破攻", 1) < 1000) { //次数
                        if (cm.getHyPay(1) >= Care_Rmb[Care]) { //判断元宝
                            if (cm.changeLimitBreak(parseInt(Care_Po[Care]), true)) { //破攻数值
                                cm.setBossLog("元宝破攻", 1);
                                cm.addHyPay(Care_Rmb[Care]);
                                txt = "\t\t\t\t" + IconD + "\r\n";
                                txt += "#b ┏　　　　　　　　　　#r武器信息#b　　　　　　　　　　┓#k\r\n\r\n";
                                txt += "\t\t#b武器默认破攻信息　#r□■ #d" + NumericalA.formatMoney(0, "") + "#d #k\r\n";
                                txt += "\t\t#b武器增值破攻信息　#r□■ #d" + NumericalB.formatMoney(0, "") + "#r #k\r\n";
                                txt += "\t\t#b武器还能增值信息　#r□■ #r" + NumericalC.formatMoney(0, "") + "#b #k\r\n\r\n";
                                txt += "#b ┗　　　　　　#r恭喜　武器破攻完毕请验货#b　　　　　　┛#k\r\n";
                                cm.sendOkS(txt, 2);
                                cm.worldSpouseMessage(0x18, "[ 武器圣殿 ] 尊敬的 " + cm.getChar().getName() + " 采用 元宝 让武器伤害追加 " + Care_Po[Care] + " 伤害值 - 提高武器伤害性");
                            } else {
                                cm.sendOk("\r\n\r\n\t#d#e抱歉 [ #r#h ##d ] 玩家\r\n没有检测到你身上带有武器！！");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("\r\n\r\n\t#d#e抱歉 [ #r#h ##d ] 玩家\r\n您的 -元宝- 不充足 ！！");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("\r\n\r\n\t#d#e抱歉 [ #r#h ##d ] 玩家\r\n你可突破的次数已达到上限 请提升贵宾等级");
                        cm.dispose();
                    }
                }
            } else {
                cm.sendOk("\r\n\r\n#d#e抱歉 [ #r#h ##d ] 玩家\r\n您的武器伤害数值已达到最大值\r\n当前伤害值：" + cm.getLimitBreak());
                cm.dispose();
            }
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