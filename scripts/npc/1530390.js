/* This is mada by Care

 * 鱼干

 * global em

 * 脚本定制 技术支持 游戏顾问 381991414

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
    Array("十字", "#fUI/GuildMark/Mark/Pattern/00004002/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/2#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/3#"),
    Array("彩虹", "#fEffect/ItemEff/1102877/effect/default/0#"),
    Array("开始", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("猫咪", "#fUI/NameTag/190/w#"),
    Array("猫咪", "#fUI/NameTag/190/c#"),
    Array("猫咪", "#fUI/NameTag/190/e#"),
    Array("蝗虫", "#fUI/NameTag/188/w#"),
    Array("蝗虫", "#fUI/NameTag/188/c#"),
    Array("蝗虫", "#fUI/NameTag/188/e#"),
    Array("数值", "#fUI/Basic/LevelNo/1#"),
    Array("数值", "#fUI/Basic/LevelNo/2#"),
    Array("数值", "#fUI/Basic/LevelNo/3#"),
    Array("数值", "#fUI/Basic/LevelNo/4#"),
    Array("女孩", "#fEffect/CharacterEff.img/MeisterEff/Alchemy/11#"),
    Array("测试", "#fEffect/CharacterEff.img/1050334/0/1#")
);
var txt, GDP, Equip, UDP, 结果组, 变量集 = false;


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
    switch (status) {
        case 0:
            txt = "#d\t\t已为您筛选出可提升交易的道具信息\r\n\r\n";
            var list = cm.getInventory(1).list();
            var itemList = list.iterator();
            结果组 = []
            while (itemList.hasNext()) {
                var item = itemList.next();
                //if (item.getFlag() != 0x08) continue;
                if (cm.isCash(item.getItemId())) continue;
                结果组[item.getPosition()] = item.getItemId();
            }
            var Tun = false;
            for (var i in 结果组) {
                txt += "#L" + i + "# #d位 置 : [ #r" + format(" ", 3, i.toString()) + "#d ]\t#b#z" + 结果组[i] + "#\r\n";
                Tun = true
            }
            if (!Tun) {
                txt += "\r\n#e#r\t\t抱歉 你目前没有不可交易的道具\r\n#k#n"
            }
            cm.sendSimpleS(txt, 2);
            break;

        case 1:
            Equip = cm.getInventory(1).getItem(selection);
            if (parseInt(Equip.getGiftFrom()) >= 0) {
                变量集 = true;
            } else {
                变量集 = false;
            }
            //cm.worldMessage(parseInt(Equip.getGiftFrom()));
            txt = "以下是你道具实时信息\r\n\r\n";
            txt += "图　鉴 : #i" + Equip.getItemId() + "#\r\n";
            txt += "状　态 : " + Flag(Equip) + "\r\n";
            txt += "已交易 : " + (变量集 ? parseInt(Equip.getGiftFrom()) : "0") + "\r\n";
            txt += "费　用 : 200000000\r\n";
            txt += "\r\n\r\n#r是否进行道具重置???#k\r\n";
            cm.sendYesNoS(txt, 2);
            break;

        case 2:
            if (cm.getMeso() < 400000000) {
                cm.dropMessage(1, "抱歉 你没有 2 E 金币");
                cm.dispose();
                return;
            }
            if (parseInt(Equip.getGiftFrom()) >= 8) {
                cm.dropMessage(1, "抱歉,该道具只允许交易 8 回");
                cm.dispose();
                return;
            }
            Equip.setFlag(0x10);
            if (变量集) {
                Equip.setGiftFrom(parseInt(Equip.getGiftFrom()) + 1);
            } else {
                Equip.setGiftFrom(1);
            }
            cm.getPlayer().forceUpdateItem(Equip);
            cm.gainMeso(-200000000)
            cm.dropMessage(1, "重置成功");
            cm.dispose();
            break;

        default:
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

function UpString(x) {
    if (/^[0-9]+$/.test(x)) {
        return true
    } else {
        return false
    }
}

function Flag(Equip) {
    var F = Equip.getFlag()
    switch (F) {
        case 0x10:
            return "可进行交易一回";
        case 0x08:
            return "不可交易";
        default:
            return "未记录";

    }
}