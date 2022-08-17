var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 礼包物品 = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#";//红桃心
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//红色右箭头
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//蓝色右箭头
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//选择道具
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 红色箭头 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
function start() {
    /*cm.getPlayer().setBossLog("消费点",1,cm.getmoneyb());
    cm.getPlayer().setBossLog("累计赞助积分",1,cm.getmoneyb());
    cm.getPlayer().setBossLog("当日累计赞助",0,cm.getmoneyb());
    cm.setmoneyb(-cm.getmoneyb());*/
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
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
             text += "             #e#r欢迎来到咕咕冒险岛每日跳跳！#k\r\n"
            text += "                跳跳任务完成情况:\r\n";//	
            text += "           沉睡森林（获得5000W）：#r" + cm.getPlayer().getAccountLog("沉睡森林") + "#k/1\r\n";
            text += "           忍苦跳跳（获得5000W）：#r" + cm.getPlayer().getAccountLog("忍苦跳跳") + "#k/1\r\n";
            text += "           火山跳跳（获得5000W）：#r" + cm.getPlayer().getAccountLog("火山跳跳") + "#k/1\r\n";
            text += "           射手跳跳（获得1000W）：#r" + cm.getPlayer().getAccountLog("射手跳跳") + "#k/2\r\n";
            text += "           玩具跳跳（获得1000W）：#r" + cm.getPlayer().getAccountLog("玩具跳跳") + "#k/2\r\n";
            text += " #e#r领取奖励请确保背包有足够空间,并且等级超过200级";//	
            text += "                               \r\n     #L0##d跳跳全部完成即可领取#v2614000#x2、#v4310174#x10";//
			//text += "     \r\n#e#r#L1##d#v4032226#兑换跳跳次数";//
			//text += "     \r\n#e#r#L2##d跳跳次数兑换#v4032226#";//
            cm.sendSimple(text);
			} else if (status == 1) {
           if (selection == 0) {
            if (cm.getPlayer().getAccountLog("每日跳跳奖励",0) > 0) {
                cm.sendOk("每个账号每天只能领取1次奖励");
                cm.dispose();
			} else	if (cm.getPlayer() .getLevel() <=200) {
	      cm.sendOk("很抱歉，你等级低于200级无法领取跳跳奖励");
	      cm.dispose();
            } else if (cm.getPlayer().getAccountLog("沉睡森林") > 0 && cm.getPlayer().getAccountLog("忍苦跳跳") > 0 && cm.getPlayer().getAccountLog("火山跳跳") > 0 && cm.getPlayer().getAccountLog("射手跳跳") > 1 && cm.getPlayer().getAccountLog("玩具跳跳") > 1) {
				cm.gainItem(4310174, 10);
				cm.gainItem(2614000, 2);
                cm.getPlayer().setAccountLog("每日跳跳奖励")
                cm.sendOk("成功领取奖励！");
                cm.dispose();				
                cm.喇叭(2, "玩家：[" + cm.getPlayer().getName() + "]完成了每日跳跳，领取了奖励！");
            } else {
                cm.sendOk("要求未达成，无法领取奖励。\r\n");
                cm.dispose();
				}
				 } else if (selection == 1) {
					if (cm.getPlayer().getAccountLog("跳跳兑换",0) > 0) {
                cm.sendOk("一天只能兑换一次跳跳次数或跳跳币哦！");
                cm.dispose();
				} else if (cm.haveItem(4032226, 1) == false) {
							cm.sendOk("#v4310058#数量不足");
							cm.dispose();
							return;

                } else {
					cm.getPlayer().setAccountLog("沉睡森林");
					cm.getPlayer().setAccountLog("忍苦跳跳");
					cm.getPlayer().setAccountLog("火山跳跳");
					cm.getPlayer().setAccountLog("射手跳跳");
					cm.getPlayer().setAccountLog("射手跳跳");
					cm.getPlayer().setAccountLog("玩具跳跳");
					cm.getPlayer().setAccountLog("玩具跳跳");
					cm.getPlayer().setAccountLog("跳跳兑换");
					cm.getPlayer().setAccountLog("兑换跳跳");
					cm.gainItem(4032226, -1);
					cm.喇叭(1,"恭喜玩家["+cm.getName()+"]使用跳跳币兑换了每日跳跳次数！");
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }
				} else if (selection == 2) {
					if (cm.getPlayer().getAccountLog("兑换跳跳",0) > 0) {
                    cm.sendOk("一天只能兑换一次跳跳次数或跳跳币哦！");
				 } else if (cm.getPlayer().getAccountLog("沉睡森林") > 0 && cm.getPlayer().getAccountLog("忍苦跳跳") > 0 && cm.getPlayer().getAccountLog("火山跳跳") > 0 && cm.getPlayer().getAccountLog("射手跳跳") > 1 && cm.getPlayer().getAccountLog("玩具跳跳") > 1) {
                cm.dispose();
					cm.getPlayer().setAccountLog("兑换跳跳");
					cm.gainItem(4032226, 1);
					cm.喇叭(1,"恭喜玩家["+cm.getName()+"]使用跳跳次数兑换了一个跳跳币！");
                    cm.sendOk("兑换成功。");
                    cm.dispose();
					 } else {
                cm.sendOk("跳跳次数不足，无法兑换。\r\n");
                cm.dispose();
                }
				
            }
        }
    }
}


