/* Careless 七天登陆 */

var status = 0;
var typed = 0;
var tz3 = "#fEffect/CharacterEff/1082588/0/0#";  //红点
var tz4 = "#fEffect/CharacterEff/1082588/3/0#";  //蓝点
var t2 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var t3 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var t4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z = "#fUI/UIPVP.img/MiniMapIcon/star#";  //黄星星
var db = "";
var idl = "";
var ts1 = "";
var ts2 = "";
var ts3 = "";
var dlpd = 0;
var myDate = new Date();
myDate.getYear();        //获取当前年份(2位)
myDate.getFullYear();    //获取完整的年份(4位,1970-????)
myDate.getMonth();       //获取当前月份(0-12,0代表1月)
myDate.getDate();        //获取当前日(1-31)
function start() {
	    if (myDate.getDate() == 1 && cm.getBossLog("月初清理签到") == 0) {
            cm.setBossLog("月初清理签到");
			cm.setEventCount("累计签到", 1, - cm.getEventCount("累计签到", 1));
			cm.setEventCount("7日签到奖励", 1, - cm.getEventCount("7日签到奖励", 1));
			cm.setEventCount("14日签到奖励", 1, - cm.getEventCount("14日签到奖励", 1));
			cm.setEventCount("24日签到奖励", 1, - cm.getEventCount("24日签到奖励", 1));
			cm.sendOk("月初签到重置完毕。");
			cm.dispose();
		} else {
    status = -1;
    action(1, 0, 0);
}
}

function action(mode, type, selection) {
    if (cm.getEventCount("每日签到") > 0) {//每日签到
		db = "#g本日已签到#k";
    } else if (cm.getOnlineTime() >= 180) {
        db = "#r签到条件已达成，可进行签到#k";
    } else {
        db = "#d在线时间不足#k";
    }
	
	if (cm.getEventCount("7日签到奖励", 1) > 0) {//累计 7 日签到。
		ts1 = "#g奖励已领取，次月重置。#k";
    } else if (cm.getEventCount("累计签到", 1) > 6) {
        ts1 = "#r签到次数已达成，可领取奖励#k";
    } else {
        ts1 = "#b签到次数未达成#k";
    }

	if (cm.getEventCount("14日签到奖励", 1) > 0) {//累计 14 日签到。
		ts2 = "#g奖励已领取，次月重置。#k";
    } else if (cm.getEventCount("累计签到", 1) > 13) {
        ts2 = "#r签到次数已达成，可领取奖励#k";
    } else {
        ts2 = "#b签到次数未达成#k";
    }

	if (cm.getEventCount("24日签到奖励", 1) > 0) {//累计 24 日签到。
		ts3 = "#g奖励已领取，次月重置。#k";
    } else if (cm.getEventCount("累计签到", 1) > 23) {
        ts3 = "#r签到次数已达成，可领取奖励#k";
    } else {
        ts3 = "#b签到次数未达成#k";
    }
	
    if (cm.getEventCount("累计签到", 1) < 1) {
        idl = "#d0#k";
    } else {
        idl = "#r" + cm.getEventCount("累计签到", 1) + "#k";
    }
	
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var text = "\t " + z + "\t\t#d尊敬的 [#r #h # #d]\t\t" + z + "\r\n";
            text += "已进行游戏：#r" + cm.getOnlineTime() + "#d 分钟　  " + z + "　  已连续签到：" + idl + " 天\r\n";
			text += "			 #d当前时间："+myDate.getFullYear()+" - "+myDate.getMonth()+" - "+myDate.getDate()+"\r\n";
            text += t2 + t3 + t4 + t2 + t3 + t4 + t2 + t3 + t4 + t2 + t3 + t4 + t2 + t3 + t4 + t2 + t3 + t4 + t2 +"\r\n";
            text += "　#L0#进行每日签到 ["+db+"]#l\r\n";
            text += "　#L1##d领取累计 7 天奖励 ["+ts1+"]#l\r\n";
            text += "　#L2##d领取累计 14 天奖励 ["+ts2+"]#l\r\n";
            text += "　#L3##d领取累计 24 天奖励 ["+ts3+"]#l\r\n";
            cm.sendSimple(text,0);
        } else if (status == 1) {
            if (selection == 0) {
                dlpd = 1;
                var text = "#e#r\t\t\t每日签到奖励预览\r\n\r\n#k#n";
                text += "#g=====================================================#k#n\r\n";
				text += "#d　#z4310244#    　　　    		 数量：#r10个\r\n";//神奇魔方
                text += "#d　#z4310019#    　　　     数量：#r20个\r\n";//神奇魔方
				text += "#d　#z4001785#    　 　　 数量：#r10个\r\n";//意志盒
				text += "#d　#z4310195#    　 　　 		 数量：#r5个\r\n";//意志盒
                text += "\r\n#r#e月光客服提示：\r\n　　　必须进行游戏#d60#r分钟才能领取当天奖品\r\n";
                cm.sendYesNo(text,0);
            } else if (selection == 1) {
                dlpd = 2;
                var text = "#e#r\t\t\t每月签到达到7次获得\r\n\r\n#k#n";
                text += "#g=====================================================#k#n\r\n";
                text += "#d　#z4031997#    　　　     	   数量：#r50个\r\n";//神奇魔方
				text += "#g=====================================================#k#n\r\n";
                cm.sendYesNo(text,0);
            } else if (selection == 2) {
                dlpd = 3;
                var text = "#e#r\t\t\t每月签到达到14次获得\r\n\r\n#k#n";
                text += "#g=====================================================#k#n\r\n";
                text += "#d　#z4031997#    　　　     	   数量：#r100个\r\n";//神奇魔方
				text += "#d　#z4310217#    　 　　 		数量：#r1个\r\n";//意志盒
				text += "#g=====================================================#k#n\r\n";
                cm.sendYesNo(text,0);
            } else if (selection == 3) {
                dlpd = 4;
                var text = "#e#r\t\t\t每月签到达到24次获得\r\n\r\n#k#n";
                text += "#g=====================================================#k#n\r\n";
                text += "#d　#z4031997#    　　　     	   数量：#r200个\r\n";//神奇魔方
				text += "#d　#z3700503#    　 　　 		数量：#r10个\r\n";//意志盒
				text += "#d　#z4310217#    　 　　 		数量：#r2个\r\n";//意志盒
				text += "#g=====================================================#k#n\r\n";
                cm.sendYesNo(text,0);
            }
        } else if (status == 2) {
            if (dlpd == 1) {
                if (cm.getOnlineTime() >= 60) {
                        if (cm.getEventCount("每日签到") < 1) {
							cm.gainItem(4310244, 10);//鬼魂币
			                cm.gainItem(4310019, 20);//旅行者纪念币
							cm.gainItem(4001785, 10);//定居金500万金币
							cm.gainItem(4310195, 5);//英雄币
                            cm.sendOk("奖励领取完毕");
                            cm.setEventCount("累计签到", 1);
                            cm.setEventCount("每日签到");
                            cm.worldSpouseMessage(0x18, "[新手福利] 玩家 " + cm.getChar().getName() + " 进行了“每日签到”，领取丰厚点奖励，大家恭喜Ta吧！！");
                            cm.dispose();
                        } else {
                            cm.sendOk("每个账号每日只能签到一次。");
                            cm.dispose();
                        }
                } else {
                    cm.sendOk("\r\n\r\n抱歉玩家！在线时间不足!请在线满60分钟再申请奖品");
                    cm.dispose();
                }
				
            } else if (dlpd == 2) {
                if (cm.getEventCount("累计签到",1) < 7) {
					cm.sendOk("签到天数不足，无法领取。");
					cm.dispose();
				} else if (cm.getEventCount("7日签到奖励",1) > 0) {
					cm.sendOk("每个账号只能领取一次奖励，无法重复领取。");
					cm.dispose();
				} else {
                            cm.gainItem(4031997, 50);//蘑菇金币
							cm.gainItem(4310195, 10);//英雄币
                            cm.sendOk("领取完毕。");
                            cm.setEventCount("7日签到奖励", 1);
                            cm.worldSpouseMessage(0x18, "[签到系统] 玩家 " + cm.getChar().getName() + " 领取了“累计7天的签到”奖励，大家恭喜Ta吧！！");
                            cm.dispose();
                        } 
						
            } else if (dlpd == 3) {
                if (cm.getEventCount("累计签到",1) < 14) {
					cm.sendOk("签到天数不足，无法领取。");
					cm.dispose();
				} else if (cm.getEventCount("14日签到奖励",1) > 0) {
					cm.sendOk("每个账号只能领取一次奖励，无法重复领取。");
					cm.dispose();
				} else {
                            cm.gainItem(4031997, 100);//蘑菇金币
							cm.gainItem(4310195, 15);//英雄币							
							cm.gainItem(4310217, 1);//神秘之影精华
                            cm.sendOk("领取完毕。");
                            cm.setEventCount("14日签到奖励", 1);
                            cm.worldSpouseMessage(0x18, "[签到系统] 玩家 " + cm.getChar().getName() + " 领取了“累计14天的签到”奖励，大家恭喜Ta吧！！");
                            cm.dispose();
                        } 
						
            } else if (dlpd == 4) {
                if (cm.getEventCount("累计签到",1) < 24) {
					cm.sendOk("签到天数不足，无法领取。");
					cm.dispose();
				} else if (cm.getEventCount("24日签到奖励",1) > 0) {
					cm.sendOk("每个账号只能领取一次奖励，无法重复领取。");
					cm.dispose();
				} else {
                            cm.gainItem(4031997, 200);//蘑菇金币
							cm.gainItem(3700503, 10, 14, true);//永恒火焰
							cm.gainItem(4310195, 20);//英雄币
							cm.gainItem(4310217, 2);//神秘之影精华
                            cm.sendOk("领取完毕。");
                            cm.setEventCount("24日签到奖励", 1);
                            cm.worldSpouseMessage(0x18, "[签到系统] 玩家 " + cm.getChar().getName() + " 领取了“累计24天的签到”奖励，大家恭喜Ta吧！！");
                            cm.dispose();
                        } 
						
            }
        }
    }
}