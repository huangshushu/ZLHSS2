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
    [4003000, 50],
    [4007004, 10]
];
var 金币 = 100000;
var 点券 = 100;
/************************************/
//打孔成功率设置
var 一孔成功率 = 60;//%
var 二孔成功率 = 30;//%
var 三孔成功率 = 10;//%
/************************************/
//客户端素材引用
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
    if (selection == 0) {
        var txt1 = "   #d#e请选择你要打孔的装备，每个装备最多可以打#r3#d个孔，孔数越多，成功率越小。#n#k\r\n\r\n";
        var txt2 = '';
        var inv = cm.getInventory(-1);
        txt2 += "#d打孔所需材料；————————————————————#k\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            txt2 += "    #i" + req[ii][0] + "#  #b#t" + req[ii][0] + "##k [" + req[ii][1] + " / #r#c " + req[ii][0] + "##k]\r\n";
            if (ii % 3 == 0) {
                txt2 += "";
            }
        }
        if (金币 > 0 || 点券 > 0) {
            txt2 += "#d打孔所需费用；————————————————————#k\r\n";
            if (金币 > 0) {
                txt2 += "    #v5200000##b  金币 #k[" + 金币 + " / #r" + cm.判断金币() + "#k]\r\n";
            }
            if (点券 > 0) {
                txt2 += "    #v5440000##b  点券 #k[" + 点券 + " / #r" + cm.判断点券() + "#k]\r\n";
            }
        }
        txt2 += "\r\n#d选择打孔装备；————————————————————#k";
        var 帽子 = inv.getItem(-1);
        var 帽子ID;
        if (帽子 != null)
            帽子ID = 帽子.getItemId();
        if (帽子ID > 0) {
            txt2 += "\r\n    #L10001##i" + 帽子ID + "# #b#t" + 帽子ID + "##k  已孔数: #r" + cm.查询身上装备已打孔数(-1) + "#k#l";
        }
        var 上衣 = inv.getItem(-5);
        var 上衣ID;
        if (上衣 != null)
            上衣ID = 上衣.getItemId();
        if (上衣ID > 0) {
            txt2 += "\r\n    #L10005##i" + 上衣ID + "# #b#t" + 上衣ID + "##k  已孔数: #r" + cm.查询身上装备已打孔数(-5) + "#k#l";
        }
        var 裤子 = inv.getItem(-6);
        var 裤子ID;
        if (裤子 != null)
            裤子ID = 裤子.getItemId();
        if (裤子ID > 0) {
            txt2 += "\r\n    #L10006##i" + 裤子ID + "# #b#t" + 裤子ID + "##k  已孔数: #r" + cm.查询身上装备已打孔数(-6) + "#k#l";
        }
        var 鞋子 = inv.getItem(-7);
        var 鞋子ID;
        if (鞋子 != null)
            鞋子ID = 鞋子.getItemId();
        if (鞋子ID > 0) {
            txt2 += "\r\n    #L10007##i" + 鞋子ID + "# #b#t" + 鞋子ID + "##k  已孔数: #r" + cm.查询身上装备已打孔数(-7) + "#k#l";
        }
        var 手套 = inv.getItem(-8);
        var 手套ID;
        if (手套 != null)
            手套ID = 手套.getItemId();
        if (手套ID > 0) {
            txt2 += "\r\n    #L10008##i" + 手套ID + "# #b#t" + 手套ID + "##k  已孔数: #r" + cm.查询身上装备已打孔数(-8) + "#k#l";
        }
        var 披风 = inv.getItem(-9);
        var 披风ID;
        if (披风 != null)
            披风ID = 披风.getItemId();
        if (披风ID > 0) {
            txt2 += "\r\n    #L10009##i" + 披风ID + "# #b#t" + 披风ID + "##k  已孔数: #r" + cm.查询身上装备已打孔数(-9) + "#k#l";
        }
        var 武器 = inv.getItem(-11);
        var 武器ID;
        if (武器 != null)
            武器ID = 武器.getItemId();
        if (武器ID > 0) {
            txt2 += "\r\n    #L10011##i" + 武器ID + "# #b#t" + 武器ID + "##k  已孔数: #r" + cm.查询身上装备已打孔数(-11) + "#k#l";
        }
        cm.sendNext(txt1 + txt2);
    } else if (selection == 10001) {
        var x = -1;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 3) {
            cm.sendNext("#v" + ID + "# 的孔已经打满了！");
            cm.dispose();
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
        if (cm.查询身上装备已打孔数(x) == 0) {
            if (r <= 一孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r1#k 孔成功~");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 1) {
            if (r <= 二孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r2#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 2) {
            if (r <= 三孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r3#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        }
    } else if (selection == 10005) {
        var x = -5;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 3) {
            cm.sendNext("#v" + ID + "# 的孔已经打满了！");
            cm.dispose();
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
        if (cm.查询身上装备已打孔数(x) == 0) {
            if (r <= 一孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r1#k 孔成功~");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 1) {
            if (r <= 二孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r2#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 2) {
            if (r <= 三孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r3#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        }
    } else if (selection == 10006) {
        var x = -6;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 3) {
            cm.sendNext("#v" + ID + "# 的孔已经打满了！");
            cm.dispose();
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
        if (cm.查询身上装备已打孔数(x) == 0) {
            if (r <= 一孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r1#k 孔成功~");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 1) {
            if (r <= 二孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r2#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 2) {
            if (r <= 三孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r3#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        }
    } else if (selection == 10007) {
        var x = -7;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 3) {
            cm.sendNext("#v" + ID + "# 的孔已经打满了！");
            cm.dispose();
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
        if (cm.查询身上装备已打孔数(x) == 0) {
            if (r <= 一孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r1#k 孔成功~");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 1) {
            if (r <= 二孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r2#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 2) {
            if (r <= 三孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r3#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        }
    } else if (selection == 10008) {
        var x = -8;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 3) {
            cm.sendNext("#v" + ID + "# 的孔已经打满了！");
            cm.dispose();
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
        if (cm.查询身上装备已打孔数(x) == 0) {
            if (r <= 一孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r1#k 孔成功~");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 1) {
            if (r <= 二孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r2#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 2) {
            if (r <= 三孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r3#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        }
    } else if (selection == 10009) {
        var x = -9;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 3) {
            cm.sendNext("#v" + ID + "# 的孔已经打满了！");
            cm.dispose();
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
        if (cm.查询身上装备已打孔数(x) == 0) {
            if (r <= 一孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r1#k 孔成功~");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 1) {
            if (r <= 二孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r2#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 2) {
            if (r <= 三孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r3#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        }
    } else if (selection == 10011) {
        var x = -11;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.查询身上装备已打孔数(x) == 3) {
            cm.sendNext("#v" + ID + "# 的孔已经打满了！");
            cm.dispose();
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
        if (cm.查询身上装备已打孔数(x) == 0) {
            if (r <= 一孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r1#k 孔成功~");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 1) {
            if (r <= 二孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r2#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 2 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        } else if (cm.查询身上装备已打孔数(x) == 2) {
            if (r <= 三孔成功率) {
                var res = cm.打孔(x);
                cm.sendNext("恭喜你，#v" + ID + "# " + cm.getItemName(ID) + " #r3#k 孔成功~");
                cm.全服公告("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
                cm.群输出信息("恭喜 " + cm.getChar().getName() + " 成功将道具 " + cm.getItemName(ID) + " 打 3 孔成功!");
            } else {
                cm.sendNext("打孔失败。");
            }
        }
    } else if (selection == 101) {
    } else if (selection == 101) {
    } else if (selection == 101) {
    }
}