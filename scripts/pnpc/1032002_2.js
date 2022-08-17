/*
 ZEVMS冒险岛(079)游戏服务端脚本
 类型：装备附魔类类型
 时间：2019-01-03
 作者：ZEV，坐和放宽
 提示；只能更新材料和成功率区域，其他请勿修改
 */
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
//类型，下限值，上限值，出现概
var fuMoData = [
    [1, 1, 7, 3],
    [2, 1, 7, 3],
    [3, 1, 7, 3],
    [4, 1, 7, 1],
    [5, 1, 7, 1],
    [6, 1, 7, 1],
    [7, 1, 7, 2],
    [8, 1, 7, 2],
    [9, 1, 7, 2],
    [10, 10, 550, 2],
	[11, 1, 12, 2],
	[12, 1, 12, 2],
	[13, 1, 5, 1],
    [21, 1, 7, 4],
    [22, 10, 70, 4],
    [23, 1, 7, 4],
    [24, 1, 7, 3],
    [31, 1, 7, 3],
    [32, 1, 7, 3],
    [33, 1, 7, 3],
    [34, 1, 7, 3],
    [100, 1, 7, 1],
    [200, 1, 7, 2],
    [300, 1, 7, 1],
    [301, 1, 7, 3],
    [302, 1, 7, 3],
    [400, 1, 7, 3],
    [401, 1, 7, 3],
    [500, 10, 25, 3],
    [501, 10, 25, 3],
    [502, 100, 700, 3],
    [503, 1, 12, 1],
];

//填写材料。代码，数量
var req = [
    [4006000, 10]
];
var 金币 = 15000*10000;
var 点券 = 0;
var 月庆 = 14;
//附魔成功率设置
var 附魔成功率 = 70;
var 群活跃加成 = 5;

function rd(n, m) {
    var c = m - n + 1;
    return Math.floor(Math.random() * c + n);
}

function getFuMoType() {
    var tarr = [];

    for (var i = 0; i < fuMoData.length; i++) {
        var count = fuMoData[i][3];
        for (var j = 1; j <= count; j++) {
            tarr.push(fuMoData[i]);
        }
    }

    var i = rd(1, tarr.length) - 1;
    return tarr[i][0];
}

function getFuMoValue(fuMoType) {
    for (var i = 0; i < fuMoData.length; i++) {
        var arr = fuMoData[i];
        var fmType = arr[0];
        var lowVal = arr[1];
        var highVal = arr[2];
        if (fmType == fuMoType) {
            if (lowVal == highVal) {
                return lowVal;
            } else {
                return rd(lowVal, highVal);
            }
        }
    }
    return 0;
}

var status;

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
	var 群等级 = cm.getPlayer().群等级;
	if(群等级=="lv.6"){
		附魔成功率+=群活跃加成;
	}
    var MC = cm.getServerName();
    var 玩家 = cm.getChar().getName();
    if (selection == 0) {
        var txt1 = '   Hi~#b#h ##k，请选择你要附魔的装备，给装备附魔的效果是随机的哦，不过你事先得打孔才行哦。#n#k\r\n';
        var txt2 = "   附魔成功率:#b"+附魔成功率+"#k%\r\n";
        var inv = cm.getInventory(-1);
        txt2 += "\r\n#d附魔所需材料；#k\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            txt2 += "    #i" + req[ii][0] + "#  #b#t" + req[ii][0] + "##k [" + req[ii][1] + " / #r#c " + req[ii][0] + "##k]\r\n";
            if (ii % 3 == 0) {
                txt2 += "";
            }
        }
        if (金币 > 0 || 点券 > 0) {
            txt2 += "#d附魔所需费用；#k\r\n";
            if (金币 > 0) {
                txt2 += "    #v5200000##b  金币 #k[" + 金币 + " / #r" + cm.判断金币() + "#k]\r\n";
            }
            if (点券 > 0) {
                txt2 += "    #v5440000##b  点券 #k[" + 点券 + " / #r" + cm.判断点券() + "#k]\r\n";
            }
        }
        txt2 += "\r\n#d选择附魔装备；#k";
        var 帽子 = inv.getItem(-1);
        var 帽子ID;
        if (帽子 != null)
            帽子ID = 帽子.getItemId();
        if (帽子ID > 0) {
            txt2 += "\r\n#L10101#" + cm.显示物品(帽子ID) + "#k  可附魔: #r" + cm.查询身上装备可附魔数(-1) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-1) + "#k#l";
        }
		var 脸饰 = inv.getItem(-2);
        var 脸饰ID;
        if (脸饰 != null)
            脸饰ID = 脸饰.getItemId();
        if (脸饰ID > 0) {
            txt2 += "\r\n#L10102#" + cm.显示物品(脸饰ID) + "#k  可附魔: #r" + cm.查询身上装备可附魔数(-2) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-2) + "#k#l";
        }
		var 眼饰 = inv.getItem(-3);
        var 眼饰ID;
        if (眼饰 != null)
            眼饰ID = 眼饰.getItemId();
        if (眼饰ID > 0) {
            txt2 += "\r\n#L10103#" + cm.显示物品(眼饰ID) + "#k  可附魔: #r" + cm.查询身上装备可附魔数(-3) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-3) + "#k#l";
        }
		var 耳环 = inv.getItem(-4);
        var 耳环ID;
        if (耳环 != null)
            耳环ID = 耳环.getItemId();
        if (耳环ID > 0) {
            txt2 += "\r\n#L10104#" + cm.显示物品(耳环ID) + "#k  可附魔: #r" + cm.查询身上装备可附魔数(-4) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-4) + "#k#l";
        }
        var 上衣 = inv.getItem(-5);
        var 上衣ID;
        if (上衣 != null)
            上衣ID = 上衣.getItemId();
        if (上衣ID > 0) {
            txt2 += "\r\n#L10105#" + cm.显示物品(上衣ID) + "#k  可附魔: #r" + cm.查询身上装备可附魔数(-5) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-5) + "#k#l";
        }
        var 裤子 = inv.getItem(-6);
        var 裤子ID;
        if (裤子 != null)
            裤子ID = 裤子.getItemId();
        if (裤子ID > 0) {
            txt2 += "\r\n#L10106#" + cm.显示物品(裤子ID) + "#k  可附魔: #r" + cm.查询身上装备可附魔数(-6) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-6) + "#k#l";
        }
        var 鞋子 = inv.getItem(-7);
        var 鞋子ID;
        if (鞋子 != null)
            鞋子ID = 鞋子.getItemId();
        if (鞋子ID > 0) {
            txt2 += "\r\n#L10107#" + cm.显示物品(鞋子ID) + "#k  可附魔: #r" + cm.查询身上装备可附魔数(-7) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-7) + "#k#l";
        }
        var 手套 = inv.getItem(-8);
        var 手套ID;
        if (手套 != null)
            手套ID = 手套.getItemId();
        if (手套ID > 0) {
            txt2 += "\r\n#L10108#" + cm.显示物品(手套ID) + "#k  可附魔: #r" + cm.查询身上装备可附魔数(-8) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-8) + "#k#l";
        }
        var 披风 = inv.getItem(-9);
        var 披风ID;
        if (披风 != null)
            披风ID = 披风.getItemId();
        if (披风ID > 0) {
            txt2 += "\r\n#L10109#" + cm.显示物品(披风ID) + "#k  可附魔: #r" + cm.查询身上装备可附魔数(-9) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-9) + "#k#l";
        }
        var 武器 = inv.getItem(-11);
        var 武器ID;
        if (武器 != null)
            武器ID = 武器.getItemId();
        if (武器ID > 0) {
            txt2 += "\r\n#L10111#" + cm.显示物品(武器ID) + "#k  可附魔: #r" + cm.查询身上装备可附魔数(-11) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-11) + "#k#l";
        }
		var 项链 = inv.getItem(-17);
        var 项链ID;
        if (项链 != null)
            项链ID = 项链.getItemId();
        if (项链ID > 0) {
            txt2 += "\r\n#L10117#" + cm.显示物品(项链ID) + "#k  可附魔: #r" + cm.查询身上装备可附魔数(-17) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-17) + "#k#l";
        }
		var 腰带 = inv.getItem(-29);
        var 腰带ID;
        if (腰带 != null)
            腰带ID = 腰带.getItemId();
        if (腰带ID > 0) {
            txt2 += "\r\n#L10129#" + cm.显示物品(腰带ID) + "#k  可附魔: #r" + cm.查询身上装备可附魔数(-29) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-29) + "#k#l";
        }
        cm.sendNext(txt1 + txt2);
    } else if (selection == 10101) {
        附魔(-1);
	} else if (selection == 10102) {
        附魔(-2);
	} else if (selection == 10103) {
        附魔(-3);
	} else if (selection == 10104) {
        附魔(-4);
    } else if (selection == 10105) {
        附魔(-5);
    } else if (selection == 10106) {
        附魔(-6);
    } else if (selection == 10107) {
        附魔(-7);
    } else if (selection == 10108) {
        附魔(-8);
    } else if (selection == 10109) {
        附魔(-9);
    } else if (selection == 10111) {
        附魔(-11);
	} else if (selection == 10117) {
        附魔(-17);
	} else if (selection == 10129) {
        附魔(-29);
    }
}


function 附魔(x) {
    var inv = cm.getInventory(-1);
    var AB = inv.getItem(x);
    if (AB != null)
        ID = AB.getItemId();
    if (cm.查询身上装备已打孔数(x) == 0) {
        cm.sendNext(" 请先将 " + cm.显示物品(ID) + " 打孔！");
        return;
    }
    if (cm.查询身上装备可附魔数(x) == 0) {
        cm.sendNext(" " + cm.显示物品(ID) + " 不能附魔了！");
        return;
    }
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
    if (cm.百分率(附魔成功率)) {
        var fumotype = getFuMoType();
        var fumoval = getFuMoValue(fumotype);
        if (fumoval > 0) {
            var res = cm.附魔(x, fumotype, fumoval);
			cm.GainPiot("fm",fumotype,1);
            cm.sendNext("" + cm.显示物品(ID) + " 附魔成功，恭喜你了！");
        } else {
            cm.sendNext("附魔失效。");
        }
		cm.dispose();
    } else {
        cm.sendNext(" " + cm.显示物品(ID) + "  附魔失败。");
		cm.dispose();
    }
	cm.setBossLog("每日附魔");
}