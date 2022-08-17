/* global cm */
//var 爱心 = "#fEffect/CharacterEff/1003276/0/0#";
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.getJob() >= 0 && cm.getJob() <= 522 && cm.hasSkill(1017) == false) {
                cm.teachSkill(1017, 1, 1);
            } else if (cm.getJob() >= 1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false) {
                cm.teachSkill(20001019, 1, 1);
            }
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "" + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + "\r\n"
            text += " \t\t\t  #e#r #v4000005#  林中小屋  #v4000005##k#n              \r\n"
            text += "" + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + 音符 + "\r\n"
            text += "#d角色名称：#b" + cm.getName() + "#k#n\t\t  #d剩余金币：#b" + cm.getMeso() + "#k#n\r\n"

            var tex2 = "" + cm.getHyPay(1) + "";
            // text += "#L72##r" + 蓝色角点 + "材料合成#r New     #v4251202##z4251202##l#l\r\n\r\n"//3
			text += "#L71##r" + 蓝色角点 + "#v1102944#	神秘之影海盗披风	#r #l\r\n" //3
			text += "#L72##r" + 蓝色角点 + "#v1102943#	神秘之影飞侠披风#r #l\r\n" //3
			text += "#L73##r" + 蓝色角点 + "#v1102942#	神秘之影弓箭手披风	#r #l\r\n" //3
			text += "#L74##r" + 蓝色角点 + "#v1102941#  神秘之影法师披风	#r #l\r\n" //3
			text += "#L75##r" + 蓝色角点 + "#v1102940#	神秘之影战士披风	#r #l\r\n" //3
			text += "#L76##r" + 蓝色角点 + "#v1082699#  神秘之影海盗手套	#r #l\r\n" //3
			text += "#L77##r" + 蓝色角点 + "#v1082698#  神秘之影飞侠手套	#r #l\r\n" //3
			text += "#L78##r" + 蓝色角点 + "#v1082697#  神秘之影弓箭手手套#r #l\r\n" //3
			text += "#L79##r" + 蓝色角点 + "#v1082696#  神秘之影法师手套#r #l\r\n" //3
			text += "#L80##r" + 蓝色角点 + "#v1082695#  神秘之影战士手套	#r #l\r\n" //3
			text += "#L81##r" + 蓝色角点 + "#v1073162#  神秘之影海盗鞋	#r #l\r\n" //3
			text += "#L82##r" + 蓝色角点 + "#v1073161#  神秘之影飞侠鞋	#r #l\r\n" //3
			text += "#L83##r" + 蓝色角点 + "#v1073160#  神秘之影弓箭手鞋	#r #l\r\n" //3
			text += "#L84##r" + 蓝色角点 + "#v1073159#	神秘之影法师鞋	#r #l\r\n" //3
			text += "#L85##r" + 蓝色角点 + "#v1073158#	神秘之影战士鞋	#r #l\r\n" //3
			text += "#L86##r" + 蓝色角点 + "#v1053067#  神秘之影海盗套装	#r #l\r\n" //3
			text += "#L87##r" + 蓝色角点 + "#v1053066#  神秘之影飞侠套装	#r #l\r\n" //3
			text += "#L88##r" + 蓝色角点 + "#v1053065#  神秘之影弓箭手套装	#r #l\r\n" //3
			text += "#L89##r" + 蓝色角点 + "#v1053064#  神秘之影法师套装	#r #l\r\n" //3
			text += "#L90##r" + 蓝色角点 + "#v1053063#  神秘之影战士套装	#r #l\r\n" //3
			text += "#L91##r" + 蓝色角点 + "#v1004812#  神秘之影海盗帽	#r #l\r\n" //3
			text += "#L92##r" + 蓝色角点 + "#v1004811#  神秘之影飞侠帽	#r #l\r\n" //3
			text += "#L93##r" + 蓝色角点 + "#v1004810#  神秘之影弓箭手帽#r #l\r\n" //3
			text += "#L94##r" + 蓝色角点 + "#v1004809#	神秘之影法师帽	#r #l\r\n" //3
			text += "#L95##r" + 蓝色角点 + "#v1004808#	神秘之影战士帽	#r #l\r\n" //3
           
                //text += "#L6##r" + 蓝色角点 + "#r 埃苏莱 ~~ 套#r New    #v1452252##z1452252#      #v1052882##z1052882##l#l\r\n\r\n"//3
                //  text += "#L7##r" + 蓝色角点 + "   ~神器~  #r  New     #v01452302##z01452302##l#l\r\n\r\n"//3

            text += "\r\n" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n\r\n"
            if (cm.getPlayer().isGM()) {
                text += " \t\t#r以下功能，仅管理员可见，普通玩家看不见\r\n"
                text += "#L1000#快捷传送#l\t#L1001#快速转职#l\t#L1002#刷物品#l\t#L1003#满技能#l\r\n#L1004#刷点卷金币#l\r\n"


            }
            cm.sendSimple(text);
        } else if (selection == 71) { //贝勒制作
            cm.openNpc(9900004, 3017);
        } else if (selection == 72) { //贝勒制作
            cm.openNpc(9900004, 3018);
        } else if (selection == 73) { //材料制作
            cm.openNpc(9900004, 3019);
        } else if (selection == 74) { //戒指制作
            cm.openNpc(9900004, 3020);
        } else if (selection == 75) { //永恒制作
            cm.openNpc(9900004, 3021);
        } else if (selection == 9) { //枫叶合成
            cm.openNpc(9900004, 1822);
        } else if (selection == 2) { //金花戒指
            cm.openNpc(9900004, 9893);
        } else if (selection == 8) { //皇家班
            cm.openNpc(9900004, 3026);
        } else if (selection == 3) { //十字团戒指
            cm.openNpc(9900004, 9894);
        } else if (selection == 4) { //法服呐
            cm.openNpc(9900004, 2003);
        } else if (selection == 5) { //法服呐
            cm.openNpc(9900004, 2004);
        } else if (selection == 6) { //暴君
            cm.openNpc(9900004, 3031);
            // } else if (selection == 6) {//埃苏
            //   cm.openNpc(9900004, 2005);
        } else if (selection == 7) { //神器
            cm.openNpc(9310032, 0);
        } else if (selection == 9) { //发型脸型
            cm.openNpc(9900004, 77);
        } else if (selection == 10) { //快速升级
            cm.openNpc(9900004, 78);
        } else if (selection == 9) { //跑商送货
            cm.openNpc(9010009, 0);
        } else if (selection == 10) { //免费点装
            cm.openNpc(9310071, 0);
        } else if (selection == 11) { //坐骑补给
            cm.openNpc(9900004, 68);
        } else if (selection == 12) { //豆豆兑换
            cm.openNpc(2000, 22);
        } else if (selection == 13) { //勋章领取
            cm.openNpc(9900004, 7);
        } else if (selection == 14) { //本服介绍
            cm.openNpc(9310033, 0);
        } else if (selection == 15) { //充值介绍
            cm.openNpc(9900004, 81);
        } else if (selection == 2999) { //每日任务
            cm.openNpc(9900004, 2);
        } else if (selection == 3999) { //每日签到
            cm.openNpc(9010010, 0);
        } else if (selection == 4999) { //流浪商人
            cm.openNpc(9310057, 0);
        } else if (selection == 5999) { //血衣制作
            cm.openNpc(2100007, 0);
        } else if (selection == 6999) { //抽奖
            cm.openNpc(9050007, 0);
        } else if (selection == 7999) { //觉醒
            cm.openNpc(9000021, 0);
        } else if (selection == 999) { //21点
            cm.openNpc(9900004, 932);
        } else if (selection == 9999) { //开锁
            cm.openNpc(9000008, 0);
        } else if (selection == 10999) { //
            cm.openNpc(2000, 0);
        } else if (selection == 1000) { //
            cm.openNpc(9330078, 100);
        } else if (selection == 6666) { //
            cm.openNpc(9900004, 16);
        } else if (selection == 7777) { //
            cm.openNpc(9900004, 7);
        } else if (selection == 8888) { //
            cm.openNpc(9900004, 6);
        } else if (selection == 1002) { //
            cm.openNpc(9900004, 1002);
            cm.dispose();
        } else if (selection == 1003) { //
            cm.dispose();
            cm.openNpc(9100200, 0);
        } else if (selection == 111999) { //
            cm.dispose();
            cm.openNpc(9270050, 0);
        } else if (selection == 1111999) { //
            cm.dispose();
            cm.openNpc(9310071, 0);
        } else if (selection == 1004) { //
            cm.gainNX(999999);;
            cm.gainMeso(210000000);
            cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了99999点卷!\r\n\r\n\t\t\t#e#r恭喜你获得了2E金币!");
            cm.dispose();
        } else if (selection == 9999) { //
            if (cm.getBossLog("2016活动") <= 0 && cm.canHold(4001215, 3) && cm.getLevel() >= 8) {
                cm.setBossLog("2016活动");
                cm.gainItem(4001215, 3);
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]领取了2016-04-10晚上活动集体奖励坐骑卷x3！");
                cm.sendOk("领取成功！");
                cm.dispose();
            } else {
                cm.sendOk("你已经领取过了！\r\n或者请留出背包空间");
                cm.dispose();
            }
        }
    }
}