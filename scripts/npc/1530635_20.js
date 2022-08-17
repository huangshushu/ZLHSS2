/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414

*/
var txt;
var status = 0;
/*------------------------------------------------------------*/
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
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#")
);
/*------------------------------------------------------------*/
var npcid = Array(1530635, 1530636, 1530637, 1530638);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            if (cm.getMapId() == 993010000  ||  cm.getMapId() ==  910540620) {
                cm.playerMessage(1, "抱歉 当前地图不能用拍卖");
                cm.dispose();
                return;
            }
            txt = Icon[12][1] + " " + Icon[13][1] + " " + Icon[12][1] + "\r\n";
            txt += "#d#L0#" + Icon[11][1] + " 回城镇#l #L1#" + Icon[11][1] + " 我的账户#l #L2#" + Icon[11][1] + " 新手中心#l #L3#" + Icon[11][1] + " 官方商城#l#k";
            txt += "#d#L7#" + Icon[11][1] + " 万能送#l #L4#" + Icon[11][1] + " 物品收集#l #L6#" + Icon[11][1] + " 日常任务#l #L5#" + Icon[11][1] + " 万能商店#l#k\r\n\r\n　 ";
            for (var i = 0; i < 11; i++) {
                txt += Icon[15][1] + "  ";
            }
            txt += "#r#L10#" + Icon[4][1] + " BOSS挑战 " + Icon[4][1] + "#l#L17#" + Icon[4][1] + " 在线奖励 " + Icon[4][1] + "#l#L12#" + Icon[4][1] + " 武器破功 " + Icon[4][1] + "#l";
            txt += "#r#L13#" + Icon[4][1] + " 点卷商城 " + Icon[4][1] + "#l#L14#" + Icon[4][1] + " 转职中心 " + Icon[4][1] + "#l#L15#" + Icon[4][1] + " 组队副本 " + Icon[4][1] + "#l#k\r\n\r\n　 ";
            for (var i = 0; i < 11; i++) {
                txt += Icon[15][1] + "  ";
            }
            txt += "#d#L16#" + Icon[11][1] + " 看爆率#l #L11#" + Icon[11][1] + " 精美点装#l #L18#" + Icon[11][1] + " 元宝商城#l #L19#" + Icon[11][1] + " 删除物品#l#k";
            txt += "#d#L20#" + Icon[11][1] + " 搜暴率#l #L21#" + Icon[11][1] + " 福袋副本#l #L22#" + Icon[11][1] + " 爵位系统#l #L23#" + Icon[11][1] + " 更多功能#l#k\r\n";
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    if (cm.getPlayer().getMapId() >= 50000 && cm.getPlayer().getMapId() <= 50000) {
                        cm.sendOk("#fs28##fn汉仪铸字美心##b你难道不在自由市场吗？", npcid[Math.floor(Math.random() * npcid.length)]);
                        cm.dispose();
                    } else {
                        cm.playerMessage(1, "欢迎您来到\r\n\r\n【怪兽】自由市场\r\n\r\n拍卖功能介绍\r\n\r\n我的信息（可以查看当前各类信息）\r\n\r\n新手中心（可以领取各种新手福利）\r\n\r\n官方商城（官方指定商城）\r\n\r\n万能传送（各种地图传送包括货币兑换中心和婚礼区）\r\n\r\n转职核心（全职业转职和核心UI）\r\n\r\n怪卡界面（打开怪怪卡UI）\r\n\r\n福利区（每日签到，在线领取点卷抵用，BOSS门票领取）\r\n\r\n任务区（大量每日任务可以获取各种材料和货币）\r\n\r\n组队副本（包含官方所有组队副本）\r\n\r\n超级副本（各类BOSS的传送）\r\n\r\n皮皮商城（出售各种时装，道具，喇叭等）\r\n\r\n充值区（包含充值礼包，抽奖，充值点卷等）\r\n\r\n功能中心（包含各类日常功能道具删除等）\r\n\r\n商店中心（出售日常道具和装备）\r\n\r\n爵位系统（每周捐献金币名次可以获得全属性勋章和突破奖励）\r\n\r\n家族驻地（NEW全新家族模式，家族成员可以享受驻地福利）\r\n\r\n寄售中心（装备可以通过寄售实现元宝点卷交易）\r\n\r\n积分活力（里面可以通过积分和活力兑换大量道具）");
                        cm.warp(50000);
                        cm.dispose();
                    }
                    break;
                case 1:
                    txt = "#d尊敬的 #r#h # #d玩家\r\n　 欢迎光临月光冒险岛#k\r\n";
                    txt += "#b当前账　号 - #r" + format(" ", 10, cm.getClient().getAccountName()) + "#k\r\n";
                    txt += "#b当前角　色 - #r" + format(" ", 10, cm.getName()) + "#k\r\n";
                    txt += "#b当前时间段 - #r" + format(" ", 10, cm.getOnlineTime().toString()) + "#b 分钟#k\r\n";
                    txt += "#b当前余　额 - #r" + format(" ", 10, cm.getRMB().toString()) + "#b 元#k\r\n";
                    txt += "#b当前累  计 - #r" + format(" ", 10, cm.getTotalRMB().toString()) + "#b 元#k\r\n";
                    txt += "#b当前点　卷 - #r" + format(" ", 10, cm.getPlayer().getCSPoints(1).toString()) + "#b 点#k\r\n";
                    txt += "#b当前抵用卷 - #r" + format(" ", 10, cm.getPlayer().getCSPoints(2).toString()) + "#b 点#k\r\n\r\n";
                    txt += "#b皮皮大家庭 - #rQ群:250566589 #b\r\n　　　期待你们的加入#k\r\n\r\n ";
                    if (cm.getPlayerStat("GENDER") == 0) {
                        cm.getNpcNotice(2400009, txt, 10);
                    } else {
                        cm.getNpcNotice(2400010, txt, 10);
                    }
                    cm.dispose();
                    break;
                case 2:
                    cm.dispose();
                    cm.openNpc(1530635, 13);
                    break;
                case 3:
                    cm.dispose();
                    cm.enterCS();
                    break;
                case 4:
                    cm.dispose();
                    cm.openNpc(1530635, 2001);
                    break;
                case 5:
                    cm.dispose();
                    cm.openNpc(1530635, 4);
                    break;
                case 6:
                    cm.dispose();
                    cm.openNpc(1530635, 3);
                    break;
                case 7:
                    cm.dispose();
                    cm.openNpc(1530635, 1);
                    break;
                case 10:
                    cm.dispose();
                    cm.openNpc(2159359);
                    break;
                case 11:
                    cm.dispose();
                    cm.openNpc(1530638);
                    break;
                case 12:
                    cm.dispose();
                    cm.openNpc(1530635, "wqpg");
                    break;
                case 13:
                    cm.dispose();
                    cm.openNpc(1530635, 5);
                    break;
                case 14:
                    cm.dispose();
                    cm.openNpc(1530635, "changeJob");
                    break;
                case 15:
                    cm.dispose();
                    cm.warp(910002000);
                    break;
                case 16:
                    cm.dispose();
                    cm.openNpc(1530635, 6);
                    break;
                case 17:
                    cm.dispose();
                    cm.openNpc(1530635, 1000);
                    break;
                case 18:
                    cm.dispose();
                    cm.openNpc(1530637, 1);
                    break;
                case 19:
                    cm.dispose();
                    cm.openNpc(1530635, 7);
                    break;
                case 20:
                    cm.dispose();
                    cm.openNpc(1530635, 33);
                    break;
                case 21:
                    cm.dispose();
                    cm.openNpc(2470018, "fdfb");
                    break;
                case 22:
                    cm.dispose();
                    cm.openNpc(1530635, 24);
                    break;
                case 23:
                    cm.dispose();
                    cm.openNpc(1530635, 999);
                    break;


            }
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