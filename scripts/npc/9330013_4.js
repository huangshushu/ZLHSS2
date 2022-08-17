/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：坐骑1
 *  @Author Kent 
 */
﻿var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var a = "#fEffect/CharacterEff/1114000/1/0#"; //红色六芒星
var b = "#fEffect/CharacterEff/1003271/0/0#";
var c = "#fEffect/CharacterEff/1112905/0/0#"; //篮心
var d = "#fEffect/CharacterEff/1002667/0/0#"; //黄星
var e = "#fEffect/CharacterEff/1003252/1/0#"; //音乐
var g = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var h = "#fUI/Basic/BtHide3/mouseOver/0#";
var f = "#fEffect/CharacterEff/1112904/2/1#";//彩色五角星

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK); //获得星期
var time = new Date();
var sjr = time.getDay();
var pdtp = 0;
switch (sjr) {
    case 0:
        var xq = "星期日";
        break;
    case 1:
        var xq = "星期一";
        break;
    case 2:
        var xq = "星期二";
        break;
    case 3:
        var xq = "星期三";
        break;
    case 4:
        var xq = "星期四";
        break;
    case 5:
        var xq = "星期五";
        break;
    case 6:
        var xq = "星期六";
        break;
    default:
}
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

//22222
function action(mode, type, selection) {
    if (cm.getEventCount("坐骑1") <= 0) {
        var sdsj = "0";
        var sdsj1 = "1";
    } else {
        var sdsj = "1";
        var sdsj1 = "0";
    }

    if (cm.getEventCount("坐骑2", 1) > 0) {
        var sddj = cm.getEventCount("坐骑2", 1);
    } else {
        var sddj = "0";
    }

    if (status == 0 && mode == 0) {
        //cm.sendOk("#e#r　本商铺欢迎您的再次光临!我们竭诚为你服务!!");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    } else if (status == 0) {
        var txt = "\r\n#d┏━━━━━━━━━━━坐骑活动━━━━━━━━━━┓#k\r\n";
        txt += "\t\t\t　#d※　#e活动要求请仔细阅读#k#n　#d※#k#n\r\n";
        txt += "　#b※ 当前已完成 [ #r" + sdsj + "#b ] 　　　　  今天可参与 [ #r" + sdsj1 + "#b ] ※#k  \r\n";
        txt += "　#b※ 收集怪物物品 [ #z4000019# ] -- [ #z4000009# ] ※#k#n\r\n";
        txt += "　#b※ 并且保证两者数量 [ #r1222#b ] 个 #r怪物掉落#b　     ※#k#n\r\n　#b※ #r万能传送 - 各大地图 - 练级地图（#g怪物掉落#b）#b  ※\r\n";
        txt += "　#b※ 当前拥有#z4000019#数量：\t#r" + cm.itemQuantity(4000019) + " / 1222 个#b   ※\r\n";
        txt += "　#b※ 当前拥有#z4000009#数量：\t  #r" + cm.itemQuantity(4000009) + " / 1222 个#b   ※\r\n";
        txt += "#d┗━━━━━━━━━━━━━━━━━━━━━━━━━┛#k";
        //cm.sendYesNoS(txt, 2);
        txt += !cm.isQuestActive(22222) ? " #b#L0#接受任务#l#k  " : " ";
        txt += cm.isQuestActive(22222) ? "#r#L1#提交任务#l  " : " ";
        txt += cm.isQuestActive(22222) ? "                         #b#L2#放弃任务#l  " : " ";
        cm.sendSimple(txt);
    } else if (status == 1) {
        if (selection == 0) {
            var txt = "\r\n#d┏━━━━━━━━━━━坐骑活动━━━━━━━━━━┓#k\r\n\r\n";
            txt += "　#b※            是否要开始执行这个任务呢　  　     ※#k#n\r\n\r\n";
            txt += "　#b※ 如确认请单击 [ #r是#b ]　　　　否则请单击 [ #r否#b ]　※#k#n\r\n\r\n";
            txt += "　#b※ 如玩家提供的数量正确将领到 秘密箱子x1 ※#k#n\r\n\r\n";
            txt += "#d┗━━━━━━━━━━━━━━━━━━━━━━━━━┛#k\r\n\r\n";
            cm.sendYesNoS(txt, 2);
        } else if (selection == 1) {
            if (cm.getEventCount("坐骑1") > 0) {
                cm.playerMessage(1, "　" + cm.getChar().getName() + "\r\n\r\n　尊敬的玩家抱歉\r\n\r\n今天您已参与过此活动请明再来");
                cm.dispose();
                return;
            }
            if (!cm.isQuestActive(22222)) {
                cm.sendOk("你还没有进行这个任务了。");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4000019, 1222) && cm.haveItem(4000009, 1222)) {
                cm.gainItem(4000019, -1222);
                cm.gainItem(4000009, -1222);
                //---------------------------//
				cm.gainItem(2431296, 2);
                cm.setEventCount("坐骑1");
                cm.setEventCount("坐骑2", 1, 1);
                cm.forceCompleteQuest(22222);
                cm.playerMessage(1, "　" + cm.getChar().getName() + "\r\n\r\n　尊敬的玩家恭喜你\r\n\r\n已完成坐骑活动 - 领#i2431296#X1 ●ω●");
                cm.worldSpouseMessage(0x01, "※ 坐骑活动 ※ : 恭喜玩家[ " + cm.getPlayer().getName() + " ]完成 坐骑活动 获得 抽取次数X1 ●ω●");
                cm.dispose();
            } else {
                cm.playerMessage(1, "　" + cm.getChar().getName() + "\r\n\r\n　尊敬的玩家非常抱歉\r\n\r\n你的道具不齐全 请检查道具数量");
                cm.dispose();
            }
        } else if (selection == 2) {
            cm.playerMessage(1, "　" + cm.getChar().getName() + "\r\n\r\n　你已经放弃了这个任务！");
            cm.forceCompleteQuest(22222);
            cm.setEventCount("坐骑1");
            cm.dispose();
        }
    } else if (status == 2) {
        if (!cm.isQuestActive(22222)) {
            cm.forceStartQuest(22222, "1");
            cm.playerMessage(1, "那么现在就开始去收集把！");
        } else {
            cm.sendOk("你已经在进行这个任务了。");
        }
        cm.dispose();
    }
}