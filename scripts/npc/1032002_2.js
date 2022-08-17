/*
 ZEVMS冒险岛(079)游戏服务端脚本
 类型：装备附魔类类型
 时间：2018-08-09
 作者：ZEV，坐和放宽
 
 提示；只能更新材料和成功率区域，其他请勿修改
 
 */
//附魔类型查看服务端函数面板
//类型，下限值，上限值，出现概
var fuMoData = [
    [3, 10, 15, 20],
    [3, 15, 20, 5],
    [4, 1, 10, 75],
    [4, 10, 15, 20],
    [4, 15, 20, 5],
];
/************************************/
//填写材料。代码，数量
var req = [
	[4007000, 50],
	[4007001, 50],
	[4007002, 50],
	[4007003, 50],
	[4007004, 50],
	[4007005, 50],
    [4007006, 50],
    [4007007, 50],
	[4006000, 10],
    [4001005, 5]
];
var 金币 = 1000000;
var 点券 = 1000;
/************************************/
//附魔成功率设置
var 一孔附魔成功率 = 70;//%
var 二孔附魔成功率 = 60;//%
var 三孔附魔成功率 = 10;//%
/************************************/
function rd(n, m) {
    var c = m - n + 1;
    return Math.floor(Math.random() * c + n);
}
/************************************/
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
/************************************/
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
/************************************/
var jt = "#fUI/Basic/BtHide3/mouseOver/0#";
var status;
/************************************/
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
    var MC = cm.getServerName();
    var 玩家 = cm.getChar().getName();
    if (selection == 0) {
        var txt1 = '   #e#d请选择你要附魔的装备，附魔出现的效果随机。#n#k\r\n';
        var txt2 = '';
        var inv = cm.getInventory(-1);
        txt2 += "#d附魔所需材料；————————————————————#k\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            txt2 += "    #i" + req[ii][0] + "#  #b#t" + req[ii][0] + "##k [" + req[ii][1] + " / #r#c " + req[ii][0] + "##k]\r\n";
            if (ii % 3 == 0) {
                txt2 += "";
            }
        }
        if (金币 > 0 || 点券 > 0) {
            txt2 += "#d附魔所需费用；————————————————————#k\r\n";
            if (金币 > 0) {
                txt2 += "    #v5200000##b  金币 #k[" + 金币 + " / #r" + cm.判断金币() + "#k]\r\n";
            }
            if (点券 > 0) {
                txt2 += "    #v5440000##b  点券 #k[" + 点券 + " / #r" + cm.判断点券() + "#k]\r\n";
            }
        }
        txt2 += "\r\n#d选择附魔装备；————————————————————#k";
        var 帽子 = inv.getItem(-1);
        var 帽子ID;
        if (帽子 != null)
            帽子ID = 帽子.getItemId();
        if (帽子ID > 0) {
            txt2 += "\r\n#L10101##i" + 帽子ID + "# #b#t" + 帽子ID + "##k  可附魔: #r" + cm.查询身上装备可附魔数(-1) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-1) + "#k#l";
        }
        var 上衣 = inv.getItem(-5);
        var 上衣ID;
        if (上衣 != null)
            上衣ID = 上衣.getItemId();
        if (上衣ID > 0) {
            txt2 += "\r\n#L10105##i" + 上衣ID + "# #b#t" + 上衣ID + "##k  可附魔: #r" + cm.查询身上装备可附魔数(-5) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-5) + "#k#l";
        }
        var 裤子 = inv.getItem(-6);
        var 裤子ID;
        if (裤子 != null)
            裤子ID = 裤子.getItemId();
        if (裤子ID > 0) {
            txt2 += "\r\n#L10106##i" + 裤子ID + "# #b#t" + 裤子ID + "##k  可附魔: #r" + cm.查询身上装备可附魔数(-6) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-6) + "#k#l";
        }
        var 鞋子 = inv.getItem(-7);
        var 鞋子ID;
        if (鞋子 != null)
            鞋子ID = 鞋子.getItemId();
        if (鞋子ID > 0) {
            txt2 += "\r\n#L10107##i" + 鞋子ID + "# #b#t" + 鞋子ID + "##k  可附魔: #r" + cm.查询身上装备可附魔数(-7) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-7) + "#k#l";
        }
        var 手套 = inv.getItem(-8);
        var 手套ID;
        if (手套 != null)
            手套ID = 手套.getItemId();
        if (手套ID > 0) {
            txt2 += "\r\n#L10108##i" + 手套ID + "# #b#t" + 手套ID + "##k  可附魔: #r" + cm.查询身上装备可附魔数(-8) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-8) + "#k#l";
        }
        var 披风 = inv.getItem(-9);
        var 披风ID;
        if (披风 != null)
            披风ID = 披风.getItemId();
        if (披风ID > 0) {
            txt2 += "\r\n#L10109##i" + 披风ID + "# #b#t" + 披风ID + "##k  可附魔: #r" + cm.查询身上装备可附魔数(-9) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-9) + "#k#l";
        }
        var 武器 = inv.getItem(-11);
        var 武器ID;
        if (武器 != null)
            武器ID = 武器.getItemId();
        if (武器ID > 0) {
            txt2 += "\r\n#L10111##i" + 武器ID + "# #b#t" + 武器ID + "##k  可附魔: #r" + cm.查询身上装备可附魔数(-11) + "#k / 已打孔: #r" + cm.查询身上装备已打孔数(-11) + "#k#l";
        }

        cm.sendNext(txt1 + txt2);
    } else if (selection == 10101) {
        var x = -1;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 0) {
            cm.sendNext(" 请先将 #v" + ID + "# #t" + ID + "# 打孔！");
            return;
        }
        if (cm.查询身上装备可附魔数(x) == 0) {
            cm.sendNext(" #v" + ID + "# #t" + ID + "# 不能附魔了！");
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
        cm.收金币(金币);
        cm.收点券(点券);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 3) {
            if (r <= 一孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
			if (r <= 二孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
			if (r <= 三孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        }
    } else if (selection == 10105) {
        var x = -5;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 0) {
            cm.sendNext(" 请先将 #v" + ID + "# #t" + ID + "# 打孔！");
            return;
        }
        if (cm.查询身上装备可附魔数(x) == 0) {
            cm.sendNext(" #v" + ID + "# #t" + ID + "# 不能附魔了！");
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
        cm.收金币(金币);
        cm.收点券(点券);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 3) {
            if (r <= 一孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
			if (r <= 二孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
			if (r <= 三孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        }
    } else if (selection == 10106) {
        var x = -6;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 0) {
            cm.sendNext(" 请先将 #v" + ID + "# #t" + ID + "# 打孔！");
            return;
        }
        if (cm.查询身上装备可附魔数(x) == 0) {
            cm.sendNext(" #v" + ID + "# #t" + ID + "# 不能附魔了！");
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
        cm.收金币(金币);
        cm.收点券(点券);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 3) {
            if (r <= 一孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
			if (r <= 二孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
			if (r <= 三孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        }
    } else if (selection == 10107) {
        var x = -7;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 0) {
            cm.sendNext(" 请先将 #v" + ID + "# #t" + ID + "# 打孔！");
            return;
        }
        if (cm.查询身上装备可附魔数(x) == 0) {
            cm.sendNext(" #v" + ID + "# #t" + ID + "# 不能附魔了！");
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
        cm.收金币(金币);
        cm.收点券(点券);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 3) {
            if (r <= 一孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
			if (r <= 二孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
			if (r <= 三孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        }
    } else if (selection == 10108) {
        var x = -8;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 0) {
            cm.sendNext(" 请先将 #v" + ID + "# #t" + ID + "# 打孔！");
            return;
        }
        if (cm.查询身上装备可附魔数(x) == 0) {
            cm.sendNext(" #v" + ID + "# #t" + ID + "# 不能附魔了！");
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
        cm.收金币(金币);
        cm.收点券(点券);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 3) {
            if (r <= 一孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
			if (r <= 二孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
			if (r <= 三孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        }
    } else if (selection == 10109) {
        var x = -9;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 0) {
            cm.sendNext(" 请先将 #v" + ID + "# #t" + ID + "# 打孔！");
            return;
        }
        if (cm.查询身上装备可附魔数(x) == 0) {
            cm.sendNext(" #v" + ID + "# #t" + ID + "# 不能附魔了！");
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
        cm.收金币(金币);
        cm.收点券(点券);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 3) {
            if (r <= 一孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
			if (r <= 二孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
			if (r <= 三孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        }
    } else if (selection == 10111) {
        var x = -11;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 0) {
            cm.sendNext(" 请先将 #v" + ID + "# #t" + ID + "# 打孔！");
            return;
        }
        if (cm.查询身上装备可附魔数(x) == 0) {
            cm.sendNext(" #v" + ID + "# #t" + ID + "# 不能附魔了！");
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
        cm.收金币(金币);
        cm.收点券(点券);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 3) {
            if (r <= 一孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
			if (r <= 二孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
			if (r <= 三孔附魔成功率) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.附魔(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# 附魔成功，恭喜你了！");
                } else {
                    cm.sendNext("附魔失效。");
                }
            } else {
                cm.sendNext(" #v" + ID + "# 附魔失败。");
            }
        }
    } else if (selection == 101) {
    } else if (selection == 101) {
    } else if (selection == 101) {
    }
}