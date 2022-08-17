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
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/0#"),
    Array("音符", "#fEffect/ItemEff/1112811/0/0#"),
    Array("十字", "#fUI/GuildMark/Mark/Pattern/00004002/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/2#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/3#"),
    Array("淘居", "#fEffect/ItemEff/1102877/effect/default/0#"),
    Array("开始", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("猫咪", "#fUI/NameTag/190/w#"),
    Array("猫咪", "#fUI/NameTag/190/c#"),
    Array("猫咪", "#fUI/NameTag/190/e#"),
    Array("蝗虫", "#fUI/NameTag/188/w#"),
    Array("蝗虫", "#fUI/NameTag/188/c#"),
    Array("蝗虫", "#fUI/NameTag/188/e#")
    );
var txt;
var 记录;
var 批量组 = ["漩涡", "战国", "法弗", "真红", "暴君", "超越", "埃苏装备", "高级贝勒", "最高贝勒"];
var 道具Key = [];
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
        道具类型(1462161)
        //cm.worldMessage(Math.floor(1122259 / 10000));
        txt = "\t\t　　　　#b #v4021007# #r#e分解中心#n#b #v4021007# #k\r\n";
        txt += Icon[65][1];
        for (var i = 0; i <= 39; i++) {
            txt += Icon[66][1];
        };
        txt += Icon[67][1] + "\r\n";

        txt += "　#L0#" + Icon[68][1] + " #g分解中心说明 - #r必看#k#l\r\n\r\n";
        txt += "　#L1#" + Icon[68][1] + " #r个体 - 选择你想分解的道具类型#l\r\n\r\n";
        txt += "　#L2#" + Icon[68][1] + " #b批量 - 选择你想分解的道具类型#l\r\n\r\n\r\n";
        txt += " #b" + Icon[8][1] + "　尊敬的 #r" + cm.getName() + "#b 欢迎光临 - #d分解中心#b -  " + Icon[8][1] + "\r\n";
        txt += "\t#B100##B100##B100#\r\n";

        txt += Icon[65][1];
        for (var i = 0; i <= 39; i++) {
            txt += Icon[66][1];
        };
        txt += Icon[67][1] + "\r\n";
        if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 716, 2400009);
        if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 716, 2400010);
    } else if (status == 1) {
        var 背包组 = cm.getInventory(1).list();                                             // 背包内位置  1 装备 2 消耗 以此类推 - 装备类型 [ 1 ]
        道具组 = 背包组.iterator();                                                                   //遍历背包内所有道具信息
        var 变量组 = Array();                                                                        //加入遍历出来可执行回购的道具
        var 位置 = 1;
        switch (selection) {
            case 0:
                txt = "\t\t　　　　#b #v4021007# #r#e分解中心#n#b #v4021007# #k\r\n";
                txt += Icon[65][1];
                for (var i = 0; i <= 22; i++) {
                    txt += Icon[66][1];
                };
                txt += Icon[67][1] + "\r\n";
                txt += "　" + Icon[4][1] + " #r战国装备分解得#v2028048#每件装备1-3个#k\r\n";
                txt += "　" + Icon[4][1] + " #b旋涡装备（不含武器）分解得#v4310057#每件装备1-2个\r\n";
                txt += "　" + Icon[4][1] + " #r埃苏装备（不含武器）分解得#v4310156#每件装备1个#k\r\n";
                txt += "　" + Icon[4][1] + " #b分解FFN装备（不含武器）得#v4310027#每件装备1-3个#k\r\n";
                txt += "　" + Icon[4][1] + " #r分解真红首饰得#v4310027#每件装备3-5个#k\r\n";
                txt += "　" + Icon[4][1] + " #b分解高级贝勒首饰得#v4310027#每件装备3-5个#k\r\n";
                txt += "　" + Icon[4][1] + " #b分解最高级贝勒首饰得#v4310027#每件装备5-8个#k\r\n\r\n";
                txt += "　" + Icon[4][1] + " #r分解暴君装备得#v4310027#每件装备25-35个#k\r\n";
                txt += "　" + Icon[4][1] + " #b分解埃苏武器得#v4310027#每件装备20-40个#k\r\n";
				txt += "　" + Icon[4][1] + " #b分解超越证明首饰得#v4310027#每件装备30-40个#k\r\n";
                if (cm.getPlayerStat("GENDER") == 0) cm.sendOkS(txt, 716, 2400009);
                if (cm.getPlayerStat("GENDER") == 1) cm.sendOkS(txt, 716, 2400010);
                status = -1;
                break;

            case 1:
                记录 = 1;
                txt = "　　　　　 " + Icon[68][1] + " - #r个体 #d分解道具中心 - " + Icon[68][1] + "#k\r\n\r\n";
                while (道具组.hasNext()) {
                    var 道具 = 道具组.next();
                    if (cm.isCash(道具.getItemId())) continue;
                    if (cm.getReqLevel(道具.getItemId()) < 140) continue;
                    变量组[道具.getPosition()] = 道具.getItemId();
                }
                for (var key in 变量组) {
                    var Owner = cm.getInventory(1).getItem(key).getOwner();
                    txt += "#L" + key + "##r" + format(" ", 12, Owner.toString()) + "#b" + format(" ", 26, cm.getItemName(变量组[key]).toString()) + " #v" + 变量组[key] + "##l#k\r\n";
                }
                if (key == null) {
                    cm.playerMessage(1, "抱歉 你没有这个类型的道具");
                    cm.dispose();
                    return;
                }
                cm.sendSimpleS(txt, 2);
                break;

            case 2:
                txt = "\t\t　　　　#b #v4021007# #r#e批量分解#n#b #v4021007# #k\r\n";
                txt += Icon[65][1];
                for (var i = 0; i <= 39; i++) {
                    txt += Icon[66][1];
                };
                txt += Icon[67][1] + "\r\n";

                for (var i = 0; i < 批量组.length; i++) {
                    if (批量组[i] != "埃苏装备" && 批量组[i] != "高级贝勒" && 批量组[i] != "最高贝勒") txt += "#L" + i + "##b分解 #r" + 批量组[i] + " #b类型道具#l";
                    if (批量组[i] == "埃苏装备" || 批量组[i] == "高级贝勒" || 批量组[i] == "最高贝勒") txt += "#L" + i + "##b分解 #r" + 批量组[i] + " #b类型#l";
                    if (位置 > 1 && 位置 % 3 == 0) {
                        txt += "\r\n";
                    }
                    位置++;
                }
                txt += "\r\n";


                txt += Icon[65][1];
                for (var i = 0; i <= 39; i++) {
                    txt += Icon[66][1];
                };
                txt += Icon[67][1] + "\r\n";
                if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 716, 2400009);
                if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 716, 2400010);
                break;
        }
    } else if (status == 2) {
        txt = "";
        if (记录 == 1) {
            道具Id = (cm.getInventory(1).getItem(selection).getItemId());
            getReyLevel(道具Id);
            道具类型(道具Id);
            cm.removeSlot(1, selection, 1);
            txt += "分解结果\r\n\r\n";
            //txt += "□ 道具 " + format(" ", 16, cm.getItemName(奖品[0]).toString()) +"数量 "+ format(" ", 3, 奖品[1].toString())+"\r\n\r\n";
            txt += "分解结束 - 给予的道具请到背包内查询\r\n";
            cm.playerMessage(1, txt);
            cm.dispose();
        } else {
            var 背包组 = cm.getInventory(1).list();                                             // 背包内位置  1 装备 2 消耗 以此类推 - 装备类型 [ 1 ]
            道具组 = 背包组.iterator();                                                                   //遍历背包内所有道具信息
            var 变量组 = Array();                                                                        //加入遍历出来可执行回购的道具

            var 赋值;
            switch (selection) {
                case 0:
                    赋值 = "漩涡";
                    break;
                case 1:
                    赋值 = "战国";
                    break;
                case 2:
                    赋值 = "法弗";
                    break;
                case 3:
                    赋值 = "真红";
                    break;
                case 4:
                    赋值 = "暴君";
                    break;
                case 5:
                    赋值 = "超越";
                    break;
                case 6:
                    赋值 = "埃苏";
                    break;
                case 7:
                    赋值 = "高级贝勒德";
                    break;
                case 8:
                    赋值 = "最高级贝勒德";
                    break;
            }
            txt = "　　　　　 " + Icon[68][1] + " - #r批量 #d分解道具中心 - " + Icon[68][1] + "#k\r\n\r\n";
            while (道具组.hasNext()) {
                var 道具 = 道具组.next();
                if (cm.isCash(道具.getItemId())) continue;
                if (cm.getReqLevel(道具.getItemId()) < 140) continue;
                if (cm.getItemName(道具.getItemId()).indexOf(赋值) == -1) continue;
                变量组[道具.getPosition()] = 道具.getItemId();
                cm.worldMessage(道具.getItemId())
            }
            for (var key in 变量组) {
                道具Key.push(key);
                txt += "#v" + 变量组[key] + "#　";
                if (位置 > 1 && 位置 % 5 == 0) {
                    txt += "\r\n";
                }

            }
            cm.worldMessage(cm.getItemName(道具.getItemId()).indexOf(赋值))
            txt += "\r\n\r\n\t\t\t\t#L999#" + Icon[72][1] + "#l\r\n";
            if (key == null) {
                cm.playerMessage(1, "抱歉 你没有这个类型的道具");
                cm.dispose();
                return;
            }
            cm.sendSimpleS(txt, 2);
        }
    } else if (status == 3) {
        txt = "";
        for (var i = 0; i < 道具Key.length; i++) {
            道具Id = (cm.getInventory(1).getItem(道具Key[i]).getItemId());
            getReyLevel(道具Id);
            道具类型(道具Id);
            cm.removeSlot(1, 道具Key[i], 1);
        }
        txt += "分解结果\r\n\r\n";
        txt += "分解结束 - 给予的道具请到背包内查询\r\n";
        cm.playerMessage(1, txt);
        cm.dispose();
    }
}
function 值(Min, Max) {//Min 最小值 Max最大值
    var Range = Max, Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range);
    return num;
}

//获得等级
function getReyLevel(itemid) {
    var type = cm.getReqLevel(itemid);
    switch (type) {
        case 140:                                //等级  return 返回属性值;
            return cm.gainItem(4001839, 值(5, 10))
        case 150:
            return cm.gainItem(2028048, 值(1, 3))
        default:
            return -1;
    }
}
//获取装备类型
function getItemType(itemid) {
    var type = Math.floor(itemid / 10000);
    switch (type) {
        case 100:
            return 0; //帽子
        case 103:
            return 12;//饰品
        case 104:
            return 1; //上衣
        case 105:
            return 2; //套装
        case 106:
            return 3; //裤裙
        case 107:
            return 4; //鞋子
        case 108:
            return 5; //手套
        case 110:
            return 6; //披风
        case 115:
            return 8; //护肩
        case 111:
            return 9; //ring
        case 112:
            return 11;//吊坠
        case 113:
            return 10; //腰带
        default:
            if (type == 120) return -1; //图腾
            if (type == 135) return -1; //副手
            var type = Math.floor(type / 10);
            if (type == 12 || type == 13 || type == 14 || type == 15 || type == 17) {
                return 7; //武器
            }
            return -1;
    }
}

function 道具类型(item) {
    switch (getItemType(item)) {
        case 7:
            if (cm.getItemName(item).indexOf("埃苏") == 0) return cm.gainItem(4310027, 值(20, 40));
            if (cm.getItemName(item).indexOf("法弗") == 0) return cm.gainItem(4310027, 值(1, 3));
        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 8: case 10:
            if (cm.getItemName(item).indexOf("漩涡") == 0) return cm.gainItem(4310057, 值(1, 2));
            if (cm.getItemName(item).indexOf("埃苏") == 0) return cm.gainItem(4310156, 1);
            if (cm.getItemName(item).indexOf("暴君") == 0) return cm.gainItem(4310156, 值(15, 35));
        case 11: case 12:
            if (cm.getItemName(item).indexOf("漩涡") == 0) return cm.gainItem(4310057, 值(1, 2));
            if (cm.getItemName(item).indexOf("超越") == 0) return cm.gainItem(4310027, 值(20, 40));
            if (cm.getItemName(item).indexOf("真红") == 0) return cm.gainItem(4310027, 值(3, 5));
            if (cm.getItemName(item).indexOf("高级贝勒德") == 0) return cm.gainItem(4310027, 值(2, 5));
            if (cm.getItemName(item).indexOf("最高级贝勒德") == 0) return cm.gainItem(4310027, 值(5, 8));
        default:
            return -1;
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
