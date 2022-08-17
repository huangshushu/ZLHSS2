/*
 ZEVMS冒险岛(079)游戏服务端脚本
 类型：装备附魔类类型
 时间：2018-08-09
 作者：ZEV，坐和放宽
 
 提示；只能更新材料和成功率区域，其他请勿修改
 
 */
/************************************/
//填写材料。代码，数量
var req = [
    [4001009, 1],
    [4001010, 1],
    [4001011, 1],
	[4001012, 1],
	[4001013, 1],
	[4001014, 1],
	[4001021, 1]
];
var 金币 = 10000;
var 点券 = 0;
/************************************/
//清洗成功率设置
var 一附魔清洗成功率 = 70;//%
var 二附魔清洗成功率 = 50;//%
var 三附魔清洗成功率 = 10;//%
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
        var txt1 = '   #e#d请选择你要清洗的装备，装备附魔效果越多，清洗难度越大。#n#k\r\n';
        var txt2 = '';
        var inv = cm.getInventory(-1);
        txt2 += "#d清洗所需材料；————————————————————#k\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            txt2 += "    #i" + req[ii][0] + "#  #b#t" + req[ii][0] + "##k [" + req[ii][1] + " / #r#c " + req[ii][0] + "##k]\r\n";
            if (ii % 3 == 0) {
                txt2 += "";
            }
        }
        if (金币 > 0 || 点券 > 0) {
            txt2 += "#d清洗所需费用；————————————————————#k\r\n";
            if (金币 > 0) {
                txt2 += "    #v5200000##b  金币 #k[" + 金币 + " / #r" + cm.判断金币() + "#k]\r\n";
            }
            if (点券 > 0) {
                txt2 += "    #v5440000##b  点券 #k[" + 点券 + " / #r" + cm.判断点券() + "#k]\r\n";
            }
        }
        txt2 += "\r\n#d选择清洗装备；————————————————————#k";
        var 帽子 = inv.getItem(-1);
        var 帽子ID;
        if (帽子 != null)
            帽子ID = 帽子.getItemId();
        if (帽子ID > 0) {
            txt2 += "\r\n#L10201##i" + 帽子ID + "# #b#t" + 帽子ID + "##k  清洗难度: #r" + (3-cm.查询身上装备可附魔数(-1)) + "#k#l";
        }
        var 上衣 = inv.getItem(-5);
        var 上衣ID;
        if (上衣 != null)
            上衣ID = 上衣.getItemId();
        if (上衣ID > 0) {
            txt2 += "\r\n#L10205##i" + 上衣ID + "# #b#t" + 上衣ID + "##k  清洗难度: #r" + (3-cm.查询身上装备可附魔数(-5)) + "#k#l";
        }
        var 裤子 = inv.getItem(-6);
        var 裤子ID;
        if (裤子 != null)
            裤子ID = 裤子.getItemId();
        if (裤子ID > 0) {
            txt2 += "\r\n#L10206##i" + 裤子ID + "# #b#t" + 裤子ID + "##k  清洗难度: #r" + (3-cm.查询身上装备可附魔数(-6)) + "#k#l";
        }
        var 鞋子 = inv.getItem(-7);
        var 鞋子ID;
        if (鞋子 != null)
            鞋子ID = 鞋子.getItemId();
        if (鞋子ID > 0) {
            txt2 += "\r\n#L10207##i" + 鞋子ID + "# #b#t" + 鞋子ID + "##k  清洗难度: #r" + (3-cm.查询身上装备可附魔数(-7)) + "#k#l";
        }
        var 手套 = inv.getItem(-8);
        var 手套ID;
        if (手套 != null)
            手套ID = 手套.getItemId();
        if (手套ID > 0) {
            txt2 += "\r\n#L10208##i" + 手套ID + "# #b#t" + 手套ID + "##k  清洗难度: #r" + (3-cm.查询身上装备可附魔数(-8))+ "#k#l";
        }
        var 披风 = inv.getItem(-9);
        var 披风ID;
        if (披风 != null)
            披风ID = 披风.getItemId();
        if (披风ID > 0) {
            txt2 += "\r\n#L10209##i" + 披风ID + "# #b#t" + 披风ID + "##k  清洗难度: #r" + (3-cm.查询身上装备可附魔数(-9)) + "#k#l";
        }
        var 武器 = inv.getItem(-11);
        var 武器ID;
        if (武器 != null)
            武器ID = 武器.getItemId();
        if (武器ID > 0) {
            txt2 += "\r\n#L10211##i" + 武器ID + "# #b#t" + 武器ID + "##k  清洗难度: #r" + (3-cm.查询身上装备可附魔数(-11)) + "#k#l";
        }
        cm.sendNext(txt1 + txt2);

    } else if (selection == 10201) {
        var x = -1;
        if (cm.判断金币() < 金币 || cm.判断点券() < 点券) {
            cm.sendNext("需要的费用不够!");
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
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 0) {
            if (r <= 三附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
            if (r <= 二附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
            if (r <= 一附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        }
    } else if (selection == 10205) {
        var x = -5;
        if (cm.判断金币() < 金币 || cm.判断点券() < 点券) {
            cm.sendNext("需要的费用不够!");
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
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 0) {
            if (r <= 三附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
            if (r <= 二附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
            if (r <= 一附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        }
    } else if (selection == 10206) {
        var x = -6;
        if (cm.判断金币() < 金币 || cm.判断点券() < 点券) {
            cm.sendNext("需要的费用不够!");
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
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 0) {
            if (r <= 三附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
            if (r <= 二附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
            if (r <= 一附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        }
    } else if (selection == 10207) {
        var x = -7;
        if (cm.判断金币() < 金币 || cm.判断点券() < 点券) {
            cm.sendNext("需要的费用不够!");
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
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 0) {
            if (r <= 三附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
            if (r <= 二附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
            if (r <= 一附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        }
    } else if (selection == 10208) {
        var x = -8;
        if (cm.判断金币() < 金币 || cm.判断点券() < 点券) {
            cm.sendNext("需要的费用不够!");
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
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 0) {
            if (r <= 三附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
            if (r <= 二附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
            if (r <= 一附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        }
    } else if (selection == 10208) {
        var x = -9;
        if (cm.判断金币() < 金币 || cm.判断点券() < 点券) {
            cm.sendNext("需要的费用不够!");
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
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 0) {
            if (r <= 三附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
            if (r <= 二附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
            if (r <= 一附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        }
    } else if (selection == 10211) {
        var x = -11;
        if (cm.判断金币() < 金币 || cm.判断点券() < 点券) {
            cm.sendNext("需要的费用不够!");
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
        var r = Math.ceil(Math.random() * 100);
        if (cm.查询身上装备可附魔数(x) == 0) {
            if (r <= 三附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 1) {
            if (r <= 二附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        } else if (cm.查询身上装备可附魔数(x) == 2) {
            if (r <= 一附魔清洗成功率) {
                for (var i = 0; i < req.length; i++) {
                    cm.gainItem(req[i][0], -req[i][1]);
                }
                cm.收金币(金币);
                cm.收点券(点券);
                cm.清洗(x);
                cm.sendNext("清洗成功!");
            } else {
                cm.sendNext("清洗失败!");
            }
        }
    } else if (selection == 101) {
    } else if (selection == 101) {
    } else if (selection == 101) {
    }
}