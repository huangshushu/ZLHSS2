/*
 ZEVMS冒险岛(079)游戏服务端脚本
 类型：装备附魔类类型
 时间：2019-01-03
 作者：ZEV，坐和放宽
 提示；只能更新材料和成功率区域，其他请勿修改
 */
/* <强攻[1]>:增加对普通怪物的伤害
 * <超强攻[2]>:增加对高级怪物的伤害
 * <战争意志[3]>:增加对所有怪物的伤害
 * <鹰眼[4]>:一定几率秒杀普通怪物
 * <锐眼[5]>:一定几率秒杀高级怪物
 * <谢幕[6]>:一定几率秒杀所有怪物
 * <兵不血刃[7]>:增加秒杀值
 * <致命打击[8]>:一定概率让怪物血量只剩1
 * <蒙蔽[9]>:攻击怪物时，一定机率怪物不会有仇恨
 * <追击[10]>:攻击时附加一定量真实伤害
 * <坚韧[21]>:减少受到的伤害(百分比)
 * <坚不可摧[22]>:减少受到的伤害(固定数值)
 * <顽固[23]>:受到的伤害大于你最大生命值60%时，会减少N%的伤害>
 * <未卜先知[24]>:用超级药水抵消受到的伤害
 * <幸运狩猎[31]>:增加打怪经验
 * <苦中作乐[32]>:被诅咒增加5倍经验值
 * <闲来好运[33]>:增加泡点经验
 * <财源滚滚[34]>:增加泡点金币
 * <异常抗性[100]>:减少异常状态持续时间
 * <异常免疫[101]>:一定机率免疫异常状态
 * <伺机待发[200]>:使用BUFF技能一定几率清空所有冷却
 * <茁壮生命[300]>:升级时，额外提升N点MaxHP
 * <茁壮魔力[301]>:升级时，额外提升N点MaxMP
 * <茁壮生成[302]>:升级时，额外提升N点MaxHP,MaxMP
 * <稳如泰山[400]>:被攻击时，一定机率发动稳如泰山
 * <愤怒之火[401]>:被攻击时，一定机率发动愤怒之火
 * <训练有方[500]>: 增加召唤兽真实伤害
 * <训练有素[501]>: 增加召唤兽百分比伤害
 * <心有灵犀[502]>: 增加召唤兽和玩家百分比伤害
 >
 *
 *
 */
//类型，下限值，上限值，出现概
var fuMoData = [
    [1, 1, 5, 1],
    [2, 1, 5, 1],
    [3, 1, 5, 1],
    [4, 1, 5, 1],
    [5, 1, 5, 1],
    [6, 1, 5, 1],
    [7, 1, 5, 1],
    [8, 1, 5, 1],
    [9, 1, 5, 1],
    [10, 10, 200, 1],
    [21, 1, 5, 1],
    [22, 10, 50, 1],
    [23, 1, 5, 1],
    [24, 1, 5, 1],
    [31, 1, 5, 1],
    [32, 1, 5, 1],
    [33, 1, 5, 1],
    [34, 1, 5, 1],
    [100, 1, 5, 1],
    [200, 1, 5, 1],
    [300, 1, 5, 1],
    [301, 1, 5, 1],
    [302, 1, 5, 1],
	[303, 1, 3, 1],
    [400, 1, 5, 1],
    [401, 1, 5, 1],
    [500, 10, 20, 1],
    [501, 10, 20, 1],
    [502, 100, 500, 1],
    [503, 1, 10, 1],
	[4211002, 10, 50, 1],
	[4111005, 10, 50, 1],
	[1111002, 5, 20, 1],
	[1211002, 10, 50, 1],
	[1311005, 10, 100, 1],
	[2111002, 10, 100, 1],
	[2211003, 10, 30, 1],
	[2311004, 10, 50, 1],
	[3111006, 10, 50, 1],
	[3211006, 10, 50, 1],
	[5111005, 10, 20, 1],
	[5211004, 10, 50, 1],
];

//填写材料。代码，数量
var req = [
    //[4006000, 10]
];
var 金币 = 10*10000;
var 点券 = 0;

//附魔成功率设置
var 附魔成功率 = 30;


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

    var MC = cm.getServerName();
    var 玩家 = cm.getChar().getName();
    if (selection == 0) {
        var txt1 = '   Hi~#b#h ##k，请选择你要附魔的装备，给装备附魔的效果是随机的哦，不过你事先得打孔才行哦。#n#k\r\n';
        var txt2 = '';
        var inv = cm.getInventory(-1);
        txt2 += "#d附魔所需材料；#k\r\n";
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
    cm.收金币(金币);
    cm.收点券(点券);
	cm.GainPiot("月庆祝盈利创收金币", "1", 金币/10000);
    for (var i = 0; i < req.length; i++) {
        cm.gainItem(req[i][0], -req[i][1]);
    }
	var 群等级 = cm.getPlayer().getQqTitle();
	if(群等级=="lv.6"){
		附魔成功率+=5;
	}
    if (cm.百分率(附魔成功率)) {
        var fumotype = getFuMoType();
        var fumoval = getFuMoValue(fumotype);
        if (fumoval > 0) {
            var res = cm.附魔(x, fumotype, fumoval);
            cm.sendNext("" + cm.显示物品(ID) + " 附魔成功，恭喜你了！");
        } else {
            cm.sendNext("附魔失效。");
        }
		cm.dispose();
    } else {
        cm.sendNext(" " + cm.显示物品(ID) + "  附魔失败。");
		cm.dispose();
    }
}