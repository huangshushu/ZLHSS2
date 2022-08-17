/* global cm */
var 爱心 = "";
var 音符 = "#fUI/UIWindow/Quest/icon2/7#";
var 小雪花 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 正在进行中 = "#fUI/UIWindow/Quest/icon3/6#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 爱心1 = "#fEffect/CharacterEff/1032063/0/0#";
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
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			if (cm.getPlayer().get星期判断() == 1) {
                var 星期 = "星期一";
            } else if (cm.getPlayer().get星期判断() == 2) {
                var 星期 = "星期二";
			} else if (cm.getPlayer().get星期判断() == 3) {
                var 星期 = "星期三";
			} else if (cm.getPlayer().get星期判断() == 4) {
                var 星期 = "星期四";
			} else if (cm.getPlayer().get星期判断() == 5) {
                var 星期 = "星期五";
			} else if (cm.getPlayer().get星期判断() == 6) {
                var 星期 = "星期六";
            } else {
               var 星期 = "星期日";
            }
			//cm.setgrname(14);
            text += " \t\t\t"+爱心1+"#e#d欢迎来到#d回顾冒险岛#k#n \t\t\t"+爱心1+"#e#d              \r\n"
			text += "#d-------------- [个人资料] -------------[" + 星期 + "]-\r\n#k";
            text += "#d" + 爱心 + "角色名称：#b" + cm.getName() + "#k#n\t\t#d" + 爱心 + "当前在线时间：#b" + cm.getPlayer().getzxsj() + "分钟#k#n\r\n"
            text += "#d" + 爱心 + "点卷余额：#b" + cm.getPlayer().getCSPoints(1) + "#k#n\t#d  " + 爱心 + "抵用卷余额：#b" + cm.getPlayer().getCSPoints(2) + "#k#n\r\n"
			if(cm.getPlayer().getBossLog("周礼包") == 1 && cm.getPlayer().get星期判断() == 7){
			text += "#d#L1015#" + 蓝色箭头 + "我想领取" + 星期 + "的礼包~!#l\r\n\r\n"
			}
			text += "#d-------------------- [实用功能] ----------------------\r\n#k";
            text += "#b#L111#" + 爱心 + "自由市场#l#L1#" + 爱心 + "新人礼包#l#L1000#" + 爱心 + "快捷传送#l#L1001#" + 爱心 + "快速转职#l\r\n"
            text += "#L6#" + 爱心 + "中介服务#l#L3#" + 爱心 + "等级奖励#l#L1111#" + 爱心 + "玩家排名#l#L211#" + 爱心 + "在线奖励#l\r\n"
			text += "#b#L20#" + 爱心 + "商店系统#l#L21#" + 爱心 + "装备管理#l#L22#" + 爱心 + "副本活动#l#L5#" + 爱心 + "每日签到#l\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {//
            if (cm.getgrname() <= 0 && cm.getLevel() >= 10) {
                cm.setgrname(1);
                cm.gainItem(5150040, 5);//皇家理发卷
                cm.gainItem(5151001, 5);//射手村染色高级会员卡
                cm.gainItem(5152001, 5);//射手村整形手术高级会员卡
                cm.gainItem(5153000, 5);//射手村护肤中心会员卡
                cm.gainItem(5072000, 5);//高质地喇叭
				cm.gainItem(1112446, 1);//老公老婆戒指
				cm.gainItem(1032024, 100,100,100,100,200,200,20,0,0,0,0,0,15,20);//我是新手戒指
                cm.gainDY(30000);
                //cm.getPlayer().modifyCSPoints(1, 100000);
                cm.gainMeso(10000000);
                cm.喇叭(1, "萌萌的新人"+cm.getPlayer().getName()+"领取了新人礼包");
                cm.sendOk("恭喜你成功领取礼包，列表如下：\r\n#v5150040# x1 #v5151001# x1\r\n#v5152001# x1 #v5153000# x1\r\n#v5072000# x5\r\n#v1142358# x1\r\n抵用卷 x3000 游戏币 x300000");
                cm.dispose();
            } else {
                cm.sendOk("领取失败了！\r\n可能的原因1：等级低于10级无法领取！\r\n可能的原因2：你已经领取过一次了,就无法再次领取了！\r\n如有疑问，请联系客服!");
                cm.dispose();
            }
        } else if (selection == 2) {//
            cm.openNpc(9900004,2);
			 } else if (selection == 1111) {//
            cm.openNpc(9040004,0);
	    } else if (selection == 482) {//
            cm.openNpc(9900004,482);
				    } else if (selection == 999) {//
            cm.openNpc(9900004,999);
		} else if (selection == 455) {//
            cm.openNpc(9900004,455)
					} else if (selection == 258) {//
            cm.openNpc(9310085,0)
		} else if (selection == 483) {//
            cm.openNpc(9900004,483);
					} else if (selection == 20111) {//勋章制作
            cm.openNpc(9900004,2011);
					} else if (selection == 555) {//
            cm.openNpc(9900004,555);
        } else if (selection == 209) {//
            cm.openNpc(9900004,209);
		} else if (selection == 4882) {//
            cm.openNpc(9900004,1231);
		} else if (selection == 484) {//
            cm.openNpc(9900004,484);
					} else if (selection == 1117) {//
            cm.openNpc(9900000,0);
		} else if (selection == 485) {//
            cm.openNpc(9900004,485);	
					} else if (selection == 601) {//腰带
            cm.openNpc(9310060,0);
		} else if (selection == 602) {//腰带
            cm.openNpc(9000021,0);
					} else if (selection == 603) {//五彩强化
            cm.openNpc(9310070,1);
		} else if (selection == 486) {//
            cm.openNpc(9900004,486);				
        } else if (selection == 3) { //
            cm.openNpc(9900004,3);
		} else if (selection == 209) { //
            cm.openNpc(9900004,209);
		} else if (selection == 211) { //
            cm.openNpc(9900004,211);
		} else if (selection == 210) { //
            cm.openNpc(9900004,210);
					} else if (selection == 888) { //
            cm.openNpc(9900004,888);
        } else if (selection == 4) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 5) {//
            cm.openNpc(9900004,5);
        } else if (selection == 6) {//
            cm.openNpc(9900004,6);
        } else if (selection == 7) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 8) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 9) {//
            cm.openNpc(9900004,9);
        } else if (selection == 10) {//
            cm.openNpc(9900004,10);
        } else if (selection == 11) {//
            cm.openShop(97);//NPCID是：2040051
            cm.dispose();
        } else if (selection == 12) {//
            cm.openShop(30);//NPCID:1200002
            cm.dispose();
        } else if (selection == 13) {//
            cm.openShop(39);//NPCID:2070002墨铁
            cm.dispose();
        } else if (selection == 14) {//
            cm.openNpc(9310019,0);
        } else if (selection == 15) {//
            cm.openNpc(9900004,15);
        } else if (selection == 16) {//
	    cm.openNpc(9000017,0);
               /*if (cm.getbossmap() == 0){
                   cm.sendOk("看来你没有加入过挑战boss的行列！");
                   cm.dispose();
                } else{
                   cm.warp(cm.getbossmap());
                   cm.dispose();
                }*/
        } else if (selection == 17) {//
            cm.openNpc(9900004,17);
		} else if (selection == 20) {//
            cm.openNpc(9900004,20);
		} else if (selection == 21) {//
            cm.openNpc(9900004,21);
		} else if (selection == 22) {//
            cm.openNpc(9900004,22);
		} else if (selection == 208) {//
            cm.openNpc(9900004,208);
		} else if (selection == 789) {//
            cm.openNpc(9900004,789);
        } else if (selection == 18) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 19) {//
            cm.openNpc(9900004,19);
} else if (selection == 112) {//
cm.openNpc(9010009,0);
} else if (selection == 115) {//
cm.warp(209000001,0);
			cm.dispose();

		} else if (selection == 111) {//
		
			cm.warp(910000000,0);
			cm.dispose();


        } else if (selection == 1000) {//
            cm.openNpc(9900004, 1000);
        } else if (selection == 1001) {//
            cm.openNpc(9900004, 1001);
        } else if (selection == 1002) {//
            cm.刷新地图();
            cm.dispose();
        } else if (selection == 1003) {//
            cm.刷新状态();
            cm.dispose();
        } else if (selection == 1004) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 1005) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 1006) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 1007) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 1008) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 1009) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 1010) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 1011) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 1012) {//
            cm.openNpc(9900004, 78);
        } else if (selection == 1013) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 1014) {//
            cm.sendOk("暂不开放，请等待功能完成");
            cm.dispose();
        } else if (selection == 1015) {//
			cm.gainItem(4251202,3);
			cm.gainItem(4011008,3);
			cm.gainItem(4000463,3);
			cm.gainMeso(10000000);
            cm.setBossLog("周礼包");
			cm.喇叭(1,"恭喜[" + cm.getName() + "]领取了星期天礼包~!");
			cm.sendOk("恭喜你领取到今天美好的礼包~!\r\n祝你游戏玩的愉快,玩的开心~!");
            cm.dispose();
        }
    }
}



