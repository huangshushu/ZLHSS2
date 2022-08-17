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
var status = 0;
var txt;
var Hair = [];
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
        txt = "\t\t\t\t　　 #b#e" + Icon[82][1] + " V 核心中心 " + Icon[82][1] + "#k#n\r\n\r\n"
        txt += "　　　" + Icon[79][1] + "#g 　 你好 - 欢迎光临 #bV 核心中心#k\r\n";
        txt += "　　　" + Icon[79][1] + "#r 我拥有的元宝 - [ #b" + format(" ", 10, cm.getHyPay(1).toString()) + "#r ]\r\n";
        txt += "　　　" + Icon[79][1] + "#r 我拥有的碎片 - [ #b" + format(" ", 10, cm.getVCraftCore().toString()) + "#r ]\r\n\r\n";
        txt += (cm.isQuestFinished(1465) ? "" : " #r#L0#" + Icon[78][1] + " 五转 " + Icon[78][1] + "#l");
        txt += " #b#L1#" + Icon[80][1] + " 碎片 " + Icon[80][1] + "#l";
        txt += " #b#L2#" + Icon[80][1] + " 技能 " + Icon[80][1] + "#l";
        txt += " #g#L3#" + Icon[80][1] + " 敬请期待 " + Icon[80][1] + "#l#k\r\n";
        txt += Icon[81][1] + " " + Icon[83][1] + " " + Icon[84][1] + " " + Icon[85][1] + " " + Icon[86][1] + " " + Icon[81][1];
        cm.sendSimpleN(txt, 712, 9000368);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                if (cm.getHyPay(1) > 100) {
                    Care_SetYb(-100);
                    cm.forceCompleteQuest(1465)
                    cm.gainVCraftCore(1000);
                    cm.sendOk("转职完成，免费获取1000个V核心，消耗100元宝");
                    cm.playerMessage(5, "[元宝消费提示] 消耗100元宝，剩余元宝：" + cm.getHyPay(1))
                } else {
                    cm.sendOk("元宝不足！");
                }
                break;
            case 1:
                if (cm.getHyPay(1) > 49) {
                    Care_SetYb(-50);
                    cm.gainVCraftCore(1000);
                    cm.sendOk("领取完成,获得1000个V核心，消耗50元宝");
                    cm.playerMessage(5, "[消费提示] 消耗50元宝，剩余元宝：" + cm.getHyPay(1))
                } else {
                    cm.sendOk("元宝不足！");
                }
                break;
            case 2:
                if (cm.isQuestFinished(1465)) {
                    cm.openUI(1131);
                } else {
                    cm.sendOk("我还无法为你提供服务。！");
                }
                break;
            case 3:
                cm.dispose();
                //cm.openNpc(2470018, "changeJob")
                break;
        }
        cm.dispose();
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

/*UPDATE `hypay` SET `pay`='8888', `payReward`='100' WHERE (`id`='1')*/

function Care_SetYb(count) {
    cm.sql_Update("update hypay set pay = ? where accname = ?", cm.getHyPay(1) + count, cm.getAccountName());
}