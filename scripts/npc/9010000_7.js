/*
作用：副本一条
作者：鹰眼
QQ:79675420
 */

var 小天使 = "#fItem/Cash/0501/05010006/effect/default/2#";
var 熊1 = "#fUI/GuildMark/Mark/Animal/00002011/1#";
var 熊2 = "#fUI/GuildMark/Mark/Animal/00002011/2#";
var 熊3 = "#fUI/GuildMark/Mark/Animal/00002011/3#";
var 熊4 = "#fUI/GuildMark/Mark/Animal/00002011/4#";
var 熊5 = "#fUI/GuildMark/Mark/Animal/00002011/5#";
var 熊6 = "#fUI/GuildMark/Mark/Animal/00002011/6#";
var 抵用 = "#fItem/Etc/0403/04031039/info/iconRaw#";
var 点券 = "#fItem/Etc/0403/04031040/info/iconRaw#";
var 金币 = "#fItem/Etc/0403/04031041/info/iconRaw#";
var ca = java.util.Calendar.getInstance();
var 年 = ca.get(java.util.Calendar.YEAR);
var 月 = ca.get(java.util.Calendar.MONTH) + 1;
var 日 = ca.get(java.util.Calendar.DATE);
var 时 = ca.get(java.util.Calendar.HOUR_OF_DAY);
var 分 = ca.get(java.util.Calendar.MINUTE);
var 秒 = ca.get(java.util.Calendar.SECOND);
var 周 = ca.get(java.util.Calendar.DAY_OF_WEEK) - 1;
var 皮肤卡 = 4000001;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
	var c = cm.getPlayer();
    // cm.getPlayer().setBossLog("feiqi");
    // cm.getPlayer().setBossLog("wanju");
    // cm.getPlayer().setBossLog("Ellin");
    // cm.getPlayer().setBossLog("nvsheng");
    
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
            var text = "";
            text += "#w";
            text += "\t\t\t  #r#e"+小天使+"欢迎来到" + "#k副本挑战"+小天使+"\r\n"
            text += "#n----------  以下是每日副本一条龙奖励说明  ---------\r\n";
            text += "\t#n--#b注意：#r系统会在0点左右刷新每日任务数据--\r\n";
            text += "\t#n--#r切勿卡时间点完成任务或领取奖励，请提前完成--\r\n";
            text += "\t#b奖励：#v2022468#2个 #v2049100# 1个 "+"#v2340000# 1个 #d里程:#b5点#k\r\n";
            //text += "\t\t#v"+2022811+"##z"+2022811+"# * 3\t#v"+2049100+"#混沌卷轴 * 1\r\n";
            //text += "\t\t#v"+3994701+"##z"+3994701+"# * 5\t"+金币+"金币 * 300000\r\n";
            text += "\t\t#r废弃：#k[#b" + cm.getBossLog("废弃都市") + "#k/#r2#k]次#l";
			text += "\t\t#r  玩具：#k[#b" + cm.getBossLog("玩具塔") + "#k/#r2#k]次#l\r\n";
			text += "\t\t#r毒物：#k[#b" + cm.getBossLog("毒雾森林") + "#k/#r2#k]次#l";
			text += "\t\t#r  海盗：#k[#b" + cm.getBossLog("海盗船") + "#k/#r2#k]次#l\r\n";
			text += "\t\t#r天空：#k[#b" + cm.getBossLog("女神塔") + "#k/#r2#k]次#l";
			text += "\t\t#r罗密欧：#k[#b"+cm.getBossLog("罗密欧与朱丽叶") + "#k/#r2#k]次#l\r\n";
			text += "\t\t我已达成以上任务次数，我要领奖\r\n";
			
            cm.sendYesNo(text);
        } else if (status == 1) {
            if (c.getBossLog("废弃都市") < 2) {
                cm.sendOk("废弃次数未达成，当前完成了：" + cm.getBossLog("废弃都市") + "次。");
                cm.dispose();
				return;
			}
			if (c.getBossLog("玩具塔") < 2) {
                cm.sendOk("玩具次数未达成，当前完成了：" + cm.getBossLog("玩具塔") + "次。");
                cm.dispose();
				return;
			}
			if (c.getBossLog("毒雾森林") < 2) {
                cm.sendOk("毒物次数未达成，当前完成了：" + cm.getBossLog("毒雾森林") + "次。");
                cm.dispose();
				return;
			}
			if (c.getBossLog("海盗船") < 2) {
                cm.sendOk("毒物次数未达成，当前完成了：" + cm.getBossLog("海盗船") + "次。");
                cm.dispose();
				return;
			}
		    if (c.getBossLog("罗密欧与朱丽叶") < 2) {
                cm.sendOk("武陵次数未达成，当前完成了：" + cm.getBossLog("罗密欧与朱丽叶") + "次。");
                cm.dispose();
				return;
			}
			 if (c.getBossLog("女神塔") < 2) {
                cm.sendOk("女神塔次数未达成，当前完成了：" + cm.getBossLog("女神塔") + "次。");
                cm.dispose();
				return;
			}
            if (cm.getPlayer().getBossLog("一条奖励") >= 1) {
                cm.sendOk("你今天已经领取过了本奖励。");
                cm.dispose();
				return;
			}
            if (cm.getInventory(2).isFull(1)) {
                cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法进行操作.");
                cm.dispose();
                return;
            }
            if (cm.getInventory(4).isFull(0)) {
                cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法进行操作.");
                cm.dispose();
                return;
            }
            if (cm.getInventory(3).isFull(0)) {
                cm.sendOk("#b请保证设置栏位至少有1个空格,否则无法进行操作.");
                cm.dispose();
                return;
            }
            else {
                //cm.gainItem(2022811, 3);
				cm.gainItem(2022468, 2);
                cm.gainItem(2340000, 1);
				cm.gainItem(2049100, 1);
				//cm.增加里程(5);
                //cm.gainMeso(300000);
                //cm.gainNX(2000);

				cm.getPlayer().modifyCSPoints(1,10000,true);
				//cm.getPlayer().modifyCSPoints(2,4000,true);
                c.setBossLog("一条奖励");
                cm.sendOk("奖励以发放至背包内，请确认。");
				cm.全服黄色喇叭("[副本奖励] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了副本一条龙丰厚的奖励。")
                cm.dispose();
			}
            
				
		}
	}
}