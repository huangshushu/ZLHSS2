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
//填写材料。代码，数量
var req = [
    [4001009, 2]
];
var 金币 = 500*10000;
var 点券 = 0;
var 月庆 = 14;
//清洗成功率设置
var 清洗成功率 = 30;

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
        var txt1 = '#r#e选择清洗的装备后会清洗掉装备所有附魔。#k#n\r\n';
         var txt2 = "清洗成功率:#b"+清洗成功率+"#k%\r\n";
        var inv = cm.getInventory(-1);
        txt2 += "#d清洗所需材料；#k\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            txt2 += "    #i" + req[ii][0] + "#  #b#t" + req[ii][0] + "##k [" + req[ii][1] + " / #r#c " + req[ii][0] + "##k]\r\n";
            if (ii % 3 == 0) {
                txt2 += "";
            }
        }
        if (金币 > 0 || 点券 > 0) {
            txt2 += "#d清洗所需费用；#k\r\n";
            if (金币 > 0) {
                txt2 += "    #v5200000##b  金币 #k[" + 金币 + " / #r" + cm.判断金币() + "#k]\r\n";
            }
            if (点券 > 0) {
                txt2 += "    #v5440000##b  点券 #k[" + 点券 + " / #r" + cm.判断点券() + "#k]\r\n";
            }
        }
        txt2 += "\r\n#d选择清洗装备；#k";
        var 帽子 = inv.getItem(-1);
        var 帽子ID;
        if (帽子 != null)
            帽子ID = 帽子.getItemId();
        if (帽子ID > 0) {
            txt2 += "\r\n#L10201#" + cm.显示物品(帽子ID) + "#k#l";
        }
		var 脸饰 = inv.getItem(-2);
        var 脸饰ID;
        if (脸饰 != null)
            脸饰ID = 脸饰.getItemId();
        if (脸饰ID > 0) {
            txt2 += "\r\n#L10202#" + cm.显示物品(脸饰ID) + "#k#l";
        }
		var 眼饰 = inv.getItem(-3);
        var 眼饰ID;
        if (眼饰 != null)
            眼饰ID = 眼饰.getItemId();
        if (眼饰ID > 0) {
            txt2 += "\r\n#L10203#" + cm.显示物品(眼饰ID) + "#k#l";
        }
		var 耳环 = inv.getItem(-4);
        var 耳环ID;
        if (耳环 != null)
            耳环ID = 耳环.getItemId();
        if (耳环ID > 0) {
            txt2 += "\r\n#L10204#" + cm.显示物品(耳环ID) + "#k#l";
        }
        var 上衣 = inv.getItem(-5);
        var 上衣ID;
        if (上衣 != null)
            上衣ID = 上衣.getItemId();
        if (上衣ID > 0) {
            txt2 += "\r\n#L10205#" + cm.显示物品(上衣ID) + "#k#l";
        }
        var 裤子 = inv.getItem(-6);
        var 裤子ID;
        if (裤子 != null)
            裤子ID = 裤子.getItemId();
        if (裤子ID > 0) {
            txt2 += "\r\n#L10206#" + cm.显示物品(裤子ID) + "#k#l";
        }
        var 鞋子 = inv.getItem(-7);
        var 鞋子ID;
        if (鞋子 != null)
            鞋子ID = 鞋子.getItemId();
        if (鞋子ID > 0) {
            txt2 += "\r\n#L10207#" + cm.显示物品(鞋子ID) + "#k#l";
        }
        var 手套 = inv.getItem(-8);
        var 手套ID;
        if (手套 != null)
            手套ID = 手套.getItemId();
        if (手套ID > 0) {
            txt2 += "\r\n#L10208#" + cm.显示物品(手套ID) + "#k#l";
        }
        var 披风 = inv.getItem(-9);
        var 披风ID;
        if (披风 != null)
            披风ID = 披风.getItemId();
        if (披风ID > 0) {
            txt2 += "\r\n#L10209#" + cm.显示物品(披风ID) + "#k#l";
        }
        var 武器 = inv.getItem(-11);
        var 武器ID;
        if (武器 != null)
            武器ID = 武器.getItemId();
        if (武器ID > 0) {
            txt2 += "\r\n#L10211#" + cm.显示物品(武器ID) + "#k#l";
        }
		var 项链 = inv.getItem(-17);
        var 项链ID;
        if (项链 != null)
            项链ID = 项链.getItemId();
        if (项链ID > 0) {
            txt2 += "\r\n#L10217#" + cm.显示物品(项链ID) + "#k#l";
        }
		var 腰带 = inv.getItem(-29);
        var 腰带ID;
        if (腰带 != null)
            腰带ID = 腰带.getItemId();
        if (腰带ID > 0) {
            txt2 += "\r\n#L10229#" + cm.显示物品(腰带ID) + "#k#l";
        }
        cm.sendNext(txt1 + txt2);
    } else if (selection == 10201) {
        清洗(-1);
    } else if (selection == 10202) {
        清洗(-2); 
	} else if (selection == 10203) {
        清洗(-3);
	} else if (selection == 10204) {
        清洗(-4);
    } else if (selection == 10205) {
        清洗(-5);
    } else if (selection == 10206) {
        清洗(-6);
    } else if (selection == 10207) {
        清洗(-7);
    } else if (selection == 10208) {
        清洗(-8);
    } else if (selection == 10209) {
        清洗(-9);
    } else if (selection == 10211) {
        清洗(-11);
	} else if (selection == 10217) {
        清洗(-17);
	} else if (selection == 10229) {
        清洗(-29);
    }
}
function 清洗(x) {
	var inv = cm.getInventory(-1);
    var AB = inv.getItem(x);
    if (AB != null) {
        ID = AB.getItemId();
    }
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
    if (cm.百分率(清洗成功率)) {
        cm.清洗(x);
		cm.sendNext("恭喜你，" + cm.显示物品(ID) + " 清洗成功~");
    } else {
        cm.sendNext("很遗憾，" + cm.显示物品(ID) + " 清洗失败~");
    }
	cm.dispose();
}