
﻿/* global cm */

        var status = -1;
var select = -1;
var eff1 = "";//"#fUI/LogoMs/1#";
var eff2 = "";//"#fUI/LogoMs/2#";
var eff3 = "";//"#fUI/LogoMs/3#";
var eff4 = "";//"#fUI/LogoMs/4#";
var eff5 = "";//"#fUI/LogoMs/7#";
var eff6 = "";//"#fUI/LogoMs/10#";

function start() {
    if (cm.getPlayer().getLevel() < 10) {
        cm.sendOk("小于10等无法使用聚合功能。");
        cm.dispose();
        return;
    }
    cm.sendSimple(
            "            " + eff1 + "\r\n" +
            "         " + eff6 + " " + eff6 + " " + eff6 + " " + " #b目前线上人数#k " + eff4 + " #r" + (cm.getTotalOnline() * 2 + cm.getRandom([0, 1])) + "#k人\r\n" +
            "         " + eff6 + " " + eff6 + " " + eff6 + " " + " #b当前在线时间#k " + eff4 + " #r" + java.lang.Long.valueOf((cm.getCurrentTime() - cm.getPlayer().getMrqdTime()) / 60000) + "#k分钟\r\n" +
            //"         " + eff6 + " " + eff6 + " " + eff6 + " " + " #b赞助累积金额#k " + eff4 + " #r" + cm.getPlayer().getMoneyAll() + "#k台币\r\n" +
            "         " + eff6 + " " + eff6 + " " + eff6 + " " + " #b游戏角色暱称#k " + eff4 + " #r" + cm.getPlayer().getName() + "#k\r\n" +
            "     " + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + "\r\n" +
            "    " + "#L0#" + eff5 + "每日签到" + eff5 + "#l#L1# " + eff5 + "前往组队" + eff5 + "#l #L2#" + eff5 + "赞助领取" + eff5 + "#l\r\n" +
            "    " + "#L3#" + eff5 + "等级奖励" + eff5 + "#l#L4# " + eff5 + "分享奖励" + eff5 + "#l #L5#" + eff5 + "邀请奖励" + eff5 + "#l\r\n" +
            "    " + "#L6#" + eff5 + "硬币兑换" + eff5 + "#l#L7# " + eff5 + "枫叶兑换" + eff5 + "#l #L8#" + eff5 + "市场查询" + eff5 + "#l\r\n" +
            "    " + "#L9#" + eff5 + "怪物掉落" + eff5 + "#l#L10# " + eff5 + "更换造型" + eff5 + "#l #L11#" + eff5 + "活动奖励" + eff5 + "#l\r\n" +
            "    " + "#L12#" + eff5 + "主城传送" + eff5 + "#l#L13# " + eff5 + "骑宠任务" + eff5 + "#l #L14#" + eff5 + "在线点数" + eff5 + "#l\r\n" +
            "    " + "#L15#" + eff5 + "打王次数" + eff5 + "#l#L16# " + eff5 + "整容相簿" + eff5 + "#l #L17#" + eff5 + "美发相簿" + eff5 + "#l\r\n" +
            "    " + "#L18#" + eff5 + "学习三宠" + eff5 + "#l#L19# " + eff5 + "打王回传" + eff5 + "#l #L20#" + eff5 + "端午活动" + eff5 + "#l\r\n" +
            "    " + "#L21#" + eff5 + "属性转移" + eff5 + "#l\r\n" +
            "\r\n" +
            "     " + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + "\r\n" +
            "\r\n" +
            "\r\n" +
            "\r\n" +
            ""
            );
    /*cm.sendSimple(
     "\t\t #v3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
     "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063##i3994071##i3994077#\r\n" +
     "    #r此为泡泡谷功能整合区，有什么需要我替您服务吗?#k\r\n" +
     "#b#L1#【   查看线上人数   】#l#L2#【   领取在线点数   】#l#k\r\n" +
     "#b#L3#【   传讯给管理员   】#l#L4#【   参予整点活动   】#l#k\r\n" +
     "#b#L5#【   新手宠物领取   】#l#L6#【   每日签到证明   】#l#k\r\n" +
     "#b#L7#【   推荐奖励领取   】#l#L8#【   开启蓝色箱子   】#l#k\r\n" +
     "#b#L9#【   蟾蜍钱包领取   】#l#L10#【   银色猪猪制作   】#l#k\r\n" +
     "#b#L11#【   忍影顺杀任务   】#l#L32#【    皇家120坐骑   】#l#k\r\n" +
     //"#L12#删除银或金宝箱空白道具(并且补偿一次道具)#l\r\n" +
     //"#L13#完成灯泡不能接的任务#l\r\n" +
     //"#L14#领取精灵商人#l\r\n" +
     "#b#L15#【   挑战鬼娃恰吉   】#l#k" +
     //"#L16#补学暴风神射 已有勿点#l\r\n" +
     //"#L17#补学闇灵治愈 已有勿点#l\r\n" +
     //"#L18#补学骑宠技能+马鞍+龙族香水#l\r\n" +
     "#b#L19#【 狼生命水 花费1亿 】#l#k\r\n" +
     "#b#L20#【   枫叶武器兑换   】#l#k" +
     "#b#L21#【   玩家指令查询   】#l#k\r\n" +
     "#b#L22#【 黄金枫叶武器兑换 】#l#k" +
     "#b#L25#【     D片领取     】#l#k\r\n" +
     //"#b#L29#【    万圣节活动    】#l#k\r\n" +
     "#b#L30#【     新手福利     】#l#k" +
     "#b#L31#【     120等奖励    】#l#k\r\n" +
     "#b#L33#【  领取武陵任务道具 】#l#k" +
     "#b#L34#【      选择阵营    】#l#k\r\n" +
     "#b#L37#【      装备坐骑    】#l#k"
     //"#b#L36#【      领取苹果    】#l#k"
     //"#b#L35#【      圣诞活动    】#l#k"
     
     //"#b#L27#【七夕活动9/8维修后关】#l#k\r\n"+
     //"#b#L28#【  9/13补偿 20号晚上维修后关 】#l#" 
     //"#b#L26#【 8/9补偿12号晚上维修后关 】#l#k\r\n" 
     //"#b#L23#【 集字活动(到7/30) 】#l"
     //"#b#L24#【蓝宝补偿(8/10号晚上维修后关闭)】#l"
     );*/
}

function action(mode, type, selection) {
    if (select === -1) {
        select = selection;
    }
    var level = cm.getPlayer().getLevel();
    switch (select) {
        case 0:
        {
            openNpc(9010000, "每日签到");

            break;
        }
        case 1:
        {
            openNpc(9010000, "前往组队");
            break;
        }
        case 2:
        {
            openNpc(9010000, "赞助奖励");
            break;
        }
        case 3:
        {
            openNpc(9010000, "等级奖励");
            break;
        }
        case 4:
        {
            openNpc(9010000, "分享奖励");
            break;
        }
        case 5:
        {
            openNpc(9010000, "邀请奖励");
            break;
        }
        case 6:
        {
            openNpc(9010000, "硬币兑换");
            break;
        }

        case 7:
        {
            openNpc(9330012);
            break;
        }
        case 8:
        {
            openNpc(9010000, "市场调查");
            break;
        }
        case 9:
        {
            openNpc(9010000, "怪物爆率");
            break;
        }
        case 10:
        {
            openNpc(1012117, "更换造型");
            break;
        }
        case 11:
        {
            openNpc(9010000, "异常补偿");
            break;
        }
        case 12:
        {
            openNpc(9010000, "主城转送");
            break;
        }
        case 13:
        {
            openNpc(9010000, "骑宠任务");
            break;
        }
        case 14:
        {
            select3(mode, type, selection);
            break;
        }
        case 15:
        {
            cm.sendOk(
                    "每日0:00重置所有次数除了拉图斯。\r\n" +
                    "#b皮卡啾剩余次数：#k#r" + (3 - cm.getPlayer().getBossLogD("皮卡啾次数")) + "#k\r\n" +
                    "#b闇黑龙王剩余次数：#k#r" + (3 - cm.getPlayer().getBossLogD("龙王次数")) + "#k\r\n" +
                    "#b残暴炎魔次数剩余次数：#k#r" + (3 - cm.getPlayer().getBossLogD("残暴炎魔次数")) + "#k\r\n" +
                    "#b拉图斯剩余次数：#k#r" + (2 - cm.getPlayer().getBossLogD("pop")) + "#k\r\n" +
                    "#b熊狮王剩余次数：#k#r" + (3 - cm.getPlayer().getBossLogD("熊狮王次数")) + "#k\r\n" +
                    "");
            cm.dispose();
            return;
        }
        case 16:
        {
            openNpc(9010000, "整容相簿");
            break;
        }
        case 17:
        {
            openNpc(9010000, "美发相簿");
            break;
        }
        case 18:
        {
            if (cm.haveItem(5460000)) {
                cm.gainItem(5460000, -1);
                cm.teachSkill(8, 1, 0);
                cm.teachSkill(10000018, 1, 0); // Maker
                cm.teachSkill(20000024, 1, 0); // Maker
                cm.sendOk("学习成功。");
                cm.dispose();
                return;
            } else {
                cm.sendOk("你没有#t5460000##i5460000#。");
                cm.dispose();
                return;
            }
            break;
        }
        case 19:
        {
            openNpc(9010000, "打王回传");
            break;
        }
        case 20:
        {
            openNpc(9010000, "端午活动");
            break;
        }
        case 21:
        {
            openNpc(9010000, "现金装备属性转移");
            break;
        }
        default :
        {
            cm.sendOk("此功能未完成");
            cm.dispose();
        }
    }
}

function select3(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else if (mode === 0) {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        var gain = cm.getMP();
        if (gain <= 0) {
            cm.sendOk("目前没有任何在线点数唷。");
            cm.dispose();
            return;
        } else {
            cm.sendYesNo("目前枫叶点数: " + cm.getMaplePoint() + "\r\n" + "目前在线点数已经累积: " + gain + " 点，是否领取?");
        }
    } else if (status === i++) {
        var gain = cm.getMP();
        cm.setMP(0);
        cm.gainMaplePoint(gain);
        cm.save();
        cm.sendOk("领取了 " + gain + " 点在线点数, 目前枫叶点数: " + cm.getMaplePoint());
        cm.dispose();
    } else {
        cm.dispose();
    }
}

function CGM(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else if (mode === 0) {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendGetText("请输入你要对GM传送的讯息");
    } else if (status === i++) {
        var text = cm.getText();
        if (text === null || text === "") {
            cm.sendOk("并未输入任何内容.");
            cm.dispose();
            return;
        }
        cm.dispose();
        cm.processCommand("@CGM " + text);
    } else {
        cm.dispose();
    }
}

function openNpc(npcid) {
    openNpc(npcid, null);
}

function openNpc(npcid, script) {
    var mapid = cm.getMapId();
    cm.dispose();
    if (cm.getPlayerStat("LVL") < 10) {
        cm.sendOk("你的等级不能小于10等.");
    } else if (
            cm.hasSquadByMap() ||
            cm.hasEventInstance() ||
            cm.hasEMByMap() ||
            mapid >= 990000000 ||
            (mapid >= 680000210 && mapid <= 680000502) ||
            (mapid / 1000 === 980000 && mapid !== 980000000) ||
            mapid / 100 === 1030008 ||
            mapid / 100 === 922010 ||
            mapid / 10 === 13003000
            ) {
        cm.sendOk("你不能在这里使用这个功能.");
    } else {
        if (script == null) {
            cm.openNpc(npcid);
        } else {
            cm.openNpc(npcid, script);
        }
    }
}
