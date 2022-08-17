/*
 ZEVMS冒险岛(079)游戏服务端脚本
 类型：装备附魔类类型
 时间：2019-01-03
 作者：ZEV，坐和放宽
 提示；只能更新材料和成功率区域，其他请勿修改
 */
//填写材料。代码，数量
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var req = [
    [4006000, 10]
];
var 金币 = 500*10000;
var 点券 = 0;
var 限制等级 = 30;
//打孔成功率设置
var 成功率1孔 = 100;
var 成功率2孔 = 100;
var 成功率3孔 = 100;
var 成功率4孔 = 30;
var 成功率5孔 = 30;
var 成功率6孔 = 30;
var 成功率7孔 = 15;
var 成功率8孔 = 15;
var 成功率9孔 = 15;
var 成功率10孔 = 5;
var 成功率11孔 = 5;
var 成功率12孔 = 5;
var 成功率13孔 = 3;
var 成功率14孔 = 3;
var 成功率15孔 = 3;
var 成功率16孔 = 2;
var 成功率17孔 = 2;
var 成功率18孔 = 2;
var 成功率19孔 = 1;
var 成功率20孔 = 1;
var 超过20孔成功率 = 1;
var status;
var 月庆 = 14;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	var 角色 = cm.getPlayer().id;
	if (cm.Getcharacter7("" + 角色 + "", 100) > 0) {
		if(cm.getBossRank9("防爆卡",2)>0){
			cm.个人公告("你已启用打孔防暴，道具低于 70 级，生效概率为 30 %");
		}
	}
	if (cm.Getcharacter7("" + 角色 + "", 200) > 0) {
		if(cm.getBossRank9("必成卡",2)>0){
			cm.个人公告("你已启用打孔必成，道具低于 70 级，生效概率为 30 %");
		}
	}
    if (cm.getInventory(1).getItem(1) != null || cm.getInventory(1).getItem(2) != null || cm.getInventory(1).getItem(3) != null || cm.getInventory(1).getItem(4) != null) {
        cm.说明文字("请空出背包装备栏第一行的 4 个位置。");
        cm.dispose();
        return
    }
    if (selection == 0) {
        var txt1 = "   请选择你要打孔的装备，孔数越多，成功率越小。打1，2孔，失败不会损坏装备，3孔之后一定概率损坏装备。装备等级低于 #b" + 限制等级 + "#k 级，将降低打孔成功率，材料消耗数量。#n#k\r\n\r\n";
        var txt2 = '';
        var inv = cm.getInventory(-1);
        txt2 += "#d打孔所需材料；#k\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            txt2 += "    #i" + req[ii][0] + "#  #b#t" + req[ii][0] + "##k [" + req[ii][1] + " / #r#c " + req[ii][0] + "##k]\r\n";
            if (ii % 3 == 0) {
                txt2 += "";
            }
        }
        if (金币 > 0 || 点券 > 0) {
            txt2 += "#d打孔所需费用；#k\r\n";
            if (金币 > 0) {
                txt2 += "    #v5200000##b  金币 #k[" + 金币 + " / #r" + cm.判断金币() + "#k]\r\n";
            }
            if (点券 > 0) {
                txt2 += "    #v5440000##b  点券 #k[" + 点券 + " / #r" + cm.判断点券() + "#k]\r\n";
            }
        }
        txt2 += "\r\n#d选择打孔装备；#k";
        txt2 += "\r\n   #b #L10000#查看打孔成功率#l#k\r\n";
        var 帽子 = inv.getItem(-1);
        var 帽子ID;
        if (帽子 != null)
            帽子ID = 帽子.getItemId();
        if (帽子ID > 0) {
            txt2 += "\r\n    #L10001#" + cm.显示物品(帽子ID) + "#k  已孔数: #r" + cm.查询身上装备已打孔数(-1) + "#k#l";
        }
        var 脸饰 = inv.getItem(-2);
        var 脸饰ID;
        if (脸饰 != null)
            脸饰ID = 脸饰.getItemId();
        if (脸饰ID > 0) {
            txt2 += "\r\n    #L10002#" + cm.显示物品(脸饰ID) + "#k  已孔数: #r" + cm.查询身上装备已打孔数(-2) + "#k#l";
        }
        var 眼饰 = inv.getItem(-3);
        var 眼饰ID;
        if (眼饰 != null)
            眼饰ID = 眼饰.getItemId();
        if (眼饰ID > 0) {
            txt2 += "\r\n    #L10003#" + cm.显示物品(眼饰ID) + "#k  已孔数: #r" + cm.查询身上装备已打孔数(-3) + "#k#l";
        }
        var 耳环 = inv.getItem(-4);
        var 耳环ID;
        if (耳环 != null)
            耳环ID = 耳环.getItemId();
        if (耳环ID > 0) {
            txt2 += "\r\n    #L10004#" + cm.显示物品(耳环ID) + "#k  已孔数: #r" + cm.查询身上装备已打孔数(-4) + "#k#l";
        }

        var 上衣 = inv.getItem(-5);
        var 上衣ID;
        if (上衣 != null)
            上衣ID = 上衣.getItemId();
        if (上衣ID > 0) {
            txt2 += "\r\n    #L10005#" + cm.显示物品(上衣ID) + "#k  已孔数: #r" + cm.查询身上装备已打孔数(-5) + "#k#l";
        }
        var 裤子 = inv.getItem(-6);
        var 裤子ID;
        if (裤子 != null)
            裤子ID = 裤子.getItemId();
        if (裤子ID > 0) {
            txt2 += "\r\n    #L10006#" + cm.显示物品(裤子ID) + "#k  已孔数: #r" + cm.查询身上装备已打孔数(-6) + "#k#l";
        }
        var 鞋子 = inv.getItem(-7);
        var 鞋子ID;
        if (鞋子 != null)
            鞋子ID = 鞋子.getItemId();
        if (鞋子ID > 0) {
            txt2 += "\r\n    #L10007#" + cm.显示物品(鞋子ID) + "#k  已孔数: #r" + cm.查询身上装备已打孔数(-7) + "#k#l";
        }
        var 手套 = inv.getItem(-8);
        var 手套ID;
        if (手套 != null)
            手套ID = 手套.getItemId();
        if (手套ID > 0) {
            txt2 += "\r\n    #L10008#" + cm.显示物品(手套ID) + "#k  已孔数: #r" + cm.查询身上装备已打孔数(-8) + "#k#l";
        }
        var 披风 = inv.getItem(-9);
        var 披风ID;
        if (披风 != null)
            披风ID = 披风.getItemId();
        if (披风ID > 0) {
            txt2 += "\r\n    #L10009#" + cm.显示物品(披风ID) + "#k  已孔数: #r" + cm.查询身上装备已打孔数(-9) + "#k#l";
        }
        var 武器 = inv.getItem(-11);
        var 武器ID;
        if (武器 != null)
            武器ID = 武器.getItemId();
        if (武器ID > 0) {
            txt2 += "\r\n    #L10011#" + cm.显示物品(武器ID) + "#k  已孔数: #r" + cm.查询身上装备已打孔数(-11) + "#k#l";
        }
        var 项链 = inv.getItem(-17);
        var 项链ID;
        if (项链 != null)
            项链ID = 项链.getItemId();
        if (项链ID > 0) {
            txt2 += "\r\n    #L10017#" + cm.显示物品(项链ID) + "#k  已孔数: #r" + cm.查询身上装备已打孔数(-17) + "#k#l";
        }
        var 腰带 = inv.getItem(-29);
        var 腰带ID;
        if (腰带 != null)
            腰带ID = 腰带.getItemId();
        if (腰带ID > 0) {
            txt2 += "\r\n    #L10029#" + cm.显示物品(腰带ID) + "#k  已孔数: #r" + cm.查询身上装备已打孔数(-29) + "#k#l";
        }
        cm.sendNext(txt1 + txt2);
    } else if (selection == 10000) {
        var ZEV = "装备等级低于#b" + 限制等级 + "级#k，将降低打孔#r50%#k成功率。\r\n\r\n";
        ZEV += "  1孔，#b" + 成功率1孔 + "%#k\r\n";
        ZEV += "  2孔，#b" + 成功率2孔 + "%#k\r\n";
        ZEV += "  3孔，#b" + 成功率3孔 + "%#k\r\n";
        ZEV += "  4孔，#b" + 成功率4孔 + "%#k\r\n";
        ZEV += "  5孔，#b" + 成功率5孔 + "%#k\r\n";
        ZEV += "  6孔，#b" + 成功率6孔 + "%#k\r\n";
        ZEV += "  7孔，#b" + 成功率7孔 + "%#k\r\n";
        ZEV += "  8孔，#b" + 成功率8孔 + "%#k\r\n";
        ZEV += "  9孔，#b" + 成功率9孔 + "%#k\r\n";
        ZEV += " 10孔，#b" + 成功率10孔 + "%#k\r\n";
        ZEV += " 11孔，#b" + 成功率11孔 + "%#k\r\n";
        ZEV += " 12孔，#b" + 成功率12孔 + "%#k\r\n";
        ZEV += " 13孔，#b" + 成功率13孔 + "%#k\r\n";
        ZEV += " 14孔，#b" + 成功率14孔 + "%#k\r\n";
        ZEV += " 15孔，#b" + 成功率15孔 + "%#k\r\n";
        ZEV += " 16孔，#b" + 成功率16孔 + "%#k\r\n";
        ZEV += " 17孔，#b" + 成功率17孔 + "%#k\r\n";
        ZEV += " 18孔，#b" + 成功率18孔 + "%#k\r\n";
        ZEV += " 19孔，#b" + 成功率19孔 + "%#k\r\n";
        ZEV += " 20孔，#b" + 成功率20孔 + "%#k\r\n";
        ZEV += "  +孔，#b" + 超过20孔成功率 + "%#k\r\n";
        cm.说明文字(ZEV);
    } else if (selection == 10001) {
        打孔(-1);
    } else if (selection == 10002) {
        打孔(-2);
    } else if (selection == 10003) {
        打孔(-3);
    } else if (selection == 10004) {
        打孔(-4);
    } else if (selection == 10005) {
        打孔(-5);
    } else if (selection == 10006) {
        打孔(-6);
    } else if (selection == 10007) {
        打孔(-7);
    } else if (selection == 10008) {
        打孔(-8);
    } else if (selection == 10009) {
        打孔(-9);
    } else if (selection == 10011) {
        打孔(-11);
    } else if (selection == 10017) {
        打孔(-17);
    } else if (selection == 10029) {
        打孔(-29);
    }
}

function 打孔(x) {
    var inv = cm.getInventory(-1);
    var AB = inv.getItem(x);
    if (AB != null) {
        ID = AB.getItemId();
    }
	var 角色 = cm.getPlayer().id;
	var 装备损坏 = 0;
    var 孔 = cm.查询身上装备已打孔数(x);
    switch (孔) {
        case 0:
            var 成功率 = 成功率1孔;
            break;
        case 1:
            var 成功率 = 成功率2孔;
            break;
        case 2:
            var 成功率 = 成功率3孔;
            break;
        case 3:
            var 成功率 = 成功率4孔;
            break;
        case 4:
            var 成功率 = 成功率5孔;
            break;
        case 5:
            var 成功率 = 成功率6孔;
            break;
        case 6:
            var 成功率 = 成功率7孔;
            break;
        case 7:
            var 成功率 = 成功率8孔;
            break;
        case 8:
            var 成功率 = 成功率9孔;
            break;
        case 9:
            var 成功率 = 成功率10孔;
            break;
        case 10:
            var 成功率 = 成功率11孔;
            break;
        case 11:
            var 成功率 = 成功率12孔;
            break;
        case 12:
            var 成功率 = 成功率13孔;
            break;
        case 13:
            var 成功率 = 成功率14孔;
            break;
        case 14:
            var 成功率 = 成功率15孔;
            break;
        case 15:
            var 成功率 = 成功率16孔;
            break;
        case 16:
            var 成功率 = 成功率17孔;
            break;
        case 17:
            var 成功率 = 成功率18孔;
            break;
        case 18:
            var 成功率 = 成功率19孔;
            break;
        case 19:
            var 成功率 = 成功率20孔;
            break;
        default:
            var 成功率 = 超过20孔成功率;
            break;
    }
	var 群等级 = cm.getPlayer().群等级;
	if(群等级=="lv.6"){
		成功率+=5;
	}
	if (cm.getPlayer().VIP > 0) {
		成功率+=5;
	}
    if (cm.getItemLevel(ID) < 限制等级) {
        成功率 -= 成功率 / 2;
        if (cm.判断金币() < 金币 * 2 || cm.判断点券() < 点券 * 2) {
            cm.sendNext("需要制作费用不够!");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1] * 2)) {
                cm.sendNext("#i" + req[i][0] + "#  #b#t" + req[i][0] + "##k 需要 #r" + req[i][1] * 2 + "#k 个");
                cm.dispose();
                return;
            }
        }
        cm.收金币(金币 * 2);
        cm.收点券(点券 * 2);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1] * 2);
        }
    } else {
        if (cm.判断金币() < 金币 || cm.判断点券() < 点券) {
            cm.sendNext("需要制作费用不够!");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#i" + req[i][0] + "#  #b#t" + req[i][0] + "##k 需要 #r" + req[i][1] + "#k 个");
                cm.dispose();
                return;
            }
        }
		if(day==月庆){
			cm.收金币(金币/2);
			cm.收点券(点券/2);
		}else{
			cm.收金币(金币);
			cm.收点券(点券);
		}
        for (var i = 0; i < req.length; i++) {
			if(day==月庆){
				cm.gainItem(req[i][0], -(req[i][1]/2));
			}else{
				cm.gainItem(req[i][0], -req[i][1]);
			}
        }
    }
	if (cm.Getcharacter7("" + 角色 + "", 200) > 0) {
		if(cm.getBossRank9("必成卡",2)>0){
			if (cm.getItemLevel(ID) >= 70) {
				cm.个人公告("必成卡生效");
				var 成功率 = 100;
			}else if(cm.百分率(30)){
				cm.个人公告("必成卡生效");
				var 成功率 = 100;
			}
			cm.setBossRankCount9("必成卡",-1);
			cm.getPlayer().dropMessage(5,"必成卡 - 1");
		}
	}
    if (cm.百分率(成功率)) {
        var res = cm.打孔(x);
        cm.sendNext("恭喜你，" + cm.显示物品(ID) + " 打 #r" + (孔 + 1) + "#k 孔成功~");
		if(孔>=3){
			cm.全服公告("[附魔系统] : 恭喜 " + cm.getChar().getName() + " 将道具 " + cm.getItemName(ID) + " 打 " + (孔 + 1) + " 孔成功!");
		}
		cm.dispose();
    } else if (孔 >= 2) {
		if (cm.Getcharacter7("" + 角色 + "", 100) > 0) {
			if(cm.getBossRank9("防爆卡",2)>0){
				if (cm.getItemLevel(ID) >= 70) {
					cm.个人公告("防暴卡生效");
					var 装备损坏 = 1;
				}else if(cm.百分率(30)){
					cm.个人公告("防暴卡生效");
					var 装备损坏 = 1;
				}
				cm.setBossRankCount9("防爆卡",-1);
				cm.getPlayer().dropMessage(5,"防爆卡 - 1");
			}
		}
		if(装备损坏==0){
			cm.脱掉并且销毁装备(x);
			cm.sendNext("打 #r" + (孔 + 1) + "#k 孔失败，你的 " + cm.显示物品(ID) + " 被损坏。");
			cm.全服公告("[附魔系统] : 遗憾 " + cm.getChar().getName() + " 将道具 " + cm.getItemName(ID) + " 打 " + (孔 + 1) + " 孔失败，道具被损坏!");
		}else{
			cm.sendNext("打 #r" + (孔 + 1) + "#k 孔失败。");
			cm.全服公告("[附魔系统] : 遗憾 " + cm.getChar().getName() + " 将道具 " + cm.getItemName(ID) + " 打 " + (孔 + 1) + " 孔失败!");
		}
		cm.dispose();
    } else {
        cm.sendNext(" " + cm.getItemName(ID) + " 打 #r" + (孔 + 1) + "#k 孔失败。");
		cm.dispose();
    }
	cm.setBossLog("每日打孔");
}