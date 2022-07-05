var status = 0;
//每5层的奖励
/*var itemList = [
    [[4002000,2],    [4001006,50  ],  [2614064,1]],// 5
    [[4002000,2],    [4001006,100 ],  [2614064,2]],// 10
    [[4002000,2],    [4001006,150 ],  [2614064,1]],// 15
    [[4002000,2],    [4001006,200 ],  [2614064,1]],
    [[4002000,2],    [4001006,350 ],  [2614064,1]],
    [[4002000,2],    [4001006,400 ],  [2614064,1]],
    [[4002000,2],    [4001006,450 ],  [2614064,1]],
    [[4002000,2],    [4001006,500 ],  [2614064,1]],
    [[4002000,2],    [4001006,550 ],  [2614064,1]],
    [[4002000,2],    [4001006,600 ],  [2614064,1],   [4031250,1 ]],
    [[4002000,2],    [4001006,650 ],  [2614064,1],   [4031250,2 ]],
    [[4002000,2],    [4001006,700 ],  [2614064,1],   [4031250,4 ]],
    [[4002000,2],    [4001006,750 ],  [2614064,1],   [4031250,6 ]],
    [[4002000,2],    [4001006,800 ],  [2614064,1],   [4031250,8 ]],
    [[4002000,2],    [4001006,850 ],  [2614064,1],   [4031250,10]],
    [[4002000,2],    [4001006,900 ],  [2614064,1],   [4031250,12]],
    [[4002000,2],    [4001006,950 ],  [2614064,1],   [4031250,14]],
    [[4002000,2],    [4001006,100 ],  [2614064,1],   [4031250,16]],
    [[4002000,2],    [4001006,1100],  [2614064,1],   [4031250,18]],// 95
    [[4002000,2],    [4001006,1200],  [2614064,1],   [4031250,20]] // 100
];*/

var itemList = [
    [[4002000,2],    [4002001,50  ],  [4002002,1]],// 5
    [[4002000,2],    [4002001,100 ],  [4002002,2]],// 10
    [[4002000,2],    [4002001,150 ],  [4002002,1]],// 15
    [[4002000,2],    [4002001,200 ],  [4002002,1]],
    [[4002000,2],    [4002001,350 ],  [4002002,1]],
    [[4002000,2],    [4002001,400 ],  [4002002,1]],
    [[4002000,2],    [4002001,450 ],  [4002002,1]],
    [[4002000,2],    [4002001,500 ],  [4002002,1]],
    [[4002000,2],    [4002001,550 ],  [4002002,1]],
    [[4002000,2],    [4002001,600 ],  [4002002,1],   [4002003,1 ]],
    [[4002000,2],    [4002001,650 ],  [4002002,1],   [4002003,2 ]],
    [[4002000,2],    [4002001,700 ],  [4002002,1],   [4002003,4 ]],
    [[4002000,2],    [4002001,750 ],  [4002002,1],   [4002003,6 ]],
    [[4002000,2],    [4002001,800 ],  [4002002,1],   [4002003,8 ]],
    [[4002000,2],    [4002001,850 ],  [4002002,1],   [4002003,10]],
    [[4002000,2],    [4002001,900 ],  [4002002,1],   [4002003,12]],
    [[4002000,2],    [4002001,950 ],  [4002002,1],   [4002003,14]],
    [[4002000,2],    [4002001,100 ],  [4002002,1],   [4002003,16]],
    [[4002000,2],    [4002001,1100],  [4002002,1],   [4002003,18]],// 95
    [[4002000,2],    [4002001,1200],  [4002002,1],   [4002003,20]] // 100
];
//每一层的奖励
/*var gifts = [
    //id， 破功，属性，类型（1力量2敏捷3智力4运气5物攻6魔攻）
    [4033450, 100000, 2, 6],//	黑色魔晶石       +2魔法力10W破功
    [4033449, 100000, 2, 5],//	白色魔晶石       +2攻击力10W破功
    [4033448, 100000, 5, 3],//	粉红魔晶石       +5智力   10W破功
    [4033447, 100000, 5, 4],//	紫色魔晶石       +5运气   10W破功
    [4033446, 100000, 5, 1],//	蓝色魔晶石       +5力量   10W破功
    [4033445, 100000, 5, 2],//	绿色魔晶石       +5敏捷   10W破功
    [4033444, 150000, 5, 5],//	黄色魔晶石       +5攻击力15W破功
    [4033443, 150000, 5, 6],//	橙色魔晶石       +5魔法力15W破功
    [4033442, 200000, 5, 5] //	红色魔晶石       +5攻击力20W破功
];*/

//每一层的奖励
var gifts = [
    //id， 破功，属性，类型（1力量2敏捷3智力4运气5物攻6魔攻）
    [4002000, 100000, 2, 6],//	黑色魔晶石       +2魔法力10W破功
    [4002000, 100000, 2, 5],//	白色魔晶石       +2攻击力10W破功
    [4002000, 100000, 5, 3],//	粉红魔晶石       +5智力   10W破功
    [4002000, 100000, 5, 4],//	紫色魔晶石       +5运气   10W破功
    [4002000, 100000, 5, 1],//	蓝色魔晶石       +5力量   10W破功
    [4002000, 100000, 5, 2],//	绿色魔晶石       +5敏捷   10W破功
    [4002000, 150000, 5, 5],//	黄色魔晶石       +5攻击力15W破功
    [4002000, 150000, 5, 6],//	橙色魔晶石       +5魔法力15W破功
    [4002000, 200000, 5, 5] //	红色魔晶石       +5攻击力20W破功
];
//扫荡额外奖励
/*var gifts2 = [
    [4031250,1],
    [4031250,2],
    [4031250,3],
    [4031250,4],
    [4031250,5],
    [4031250,6],
    [4031250,7],
    [4031250,8],
    [4031250,9],
    [4031250,10]
];*/
var gifts2 = [
    [4002003,1],
    [4002003,2],
    [4002003,3],
    [4002003,4],
    [4002003,5],
    [4002003,6],
    [4002003,7],
    [4002003,8],
    [4002003,9],
    [4002003,10]
];
//通关层数
var num = 0;
var sel = 0;
var sel_2 = 0

//强化的装备
var eq = null;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("你想做什么？" +
            "\r\n#L1#领取通关奖励#l" +
            "\t\t#L2#魔神塔扫荡#l" +
            "\r\n#L3#强化武器#l"
        );
    } else if (status == 1) {
        sel = selection;
        num =  getMoshenlog("魔神塔累计通关层数-"+cm.getPlayer().getId(), 1);
        var txt = "魔神塔最高通关层数：" + num + "\r\n";
        if (sel == 1) {
            txt += "以下奖励只能领取一次哦\r\n";
            for (var i in itemList) {
                txt += "#e#b#L"+i+"#领取通关 "+((Math.floor(i)+1)*5)+" 层奖励#k#l\r\n";
            }
            cm.sendSimple(txt);
        } else if (sel == 2) {
            txt += "你确定要使用今日的扫荡次数吗？"
            cm.sendYesNo(txt);
        } else if (sel == 3) {
            var text = "#e使用#b魔晶石#k可以将你佩戴的主武器进行强化，请选择：\r\n";
            for (var i in gifts) {
                text += "#L"+i+"#使用#v" + gifts[i][0] + "#:#b#z"+ gifts[i][0] +"##k强化武器\r\n";
            }
            cm.sendSimple(text);
        }
    } else if (status == 2) {
        sel_2 = parseInt(selection);
        if (sel == 1) {
            var text = "\t\t\t#e#r- 魔神塔通关 " + ((sel_2+1)*5) + " 层奖励 -#k#n\r\n\r\n";
            for (var i = 0; i < itemList[sel_2].length; i++) {
                text += "\t\t\t#i" + itemList[sel_2][i][0] + "#: #t" + itemList[sel_2][i][0] + "# [" + itemList[sel_2][i][1] + "个]\r\n";
            }
            cm.sendYesNo(text);
        } else if (sel == 2) {
            if (num <= 0) {
                cm.sendOk("你的最高通关层数为0，无法扫荡");
                cm.dispose();
                return;
            } else if (getMoshenlog("魔神塔扫荡-"+cm.getPlayer().getId(), 0) > 0) {
                cm.sendOk("你今日已经扫荡过魔神塔了，每日一次哦");
                cm.dispose();
                return;
            }
            //计算扫荡奖励
            var finalGifts = arrayFills(gifts.length + 1);
            /*if (!cm.canHoldSlots(finalGifts.length + 1)) {
                cm.sendOk("包裹空间不足，请确保包裹每个栏位有至少 " + (finalGifts.length + 2) + " 格空间");
                cm.dispose();
                return;
            }*/
            for (var i = 1; i <= num; i++) {
                var b = false;
                if (i%5 == 0) {
                    //每5层必定获得一个石头
                    b = true;
                } else if (Math.floor(Math.random()*100 < 30)) {
                    b = true;
                }
                if (b) {
                    var ran = Math.floor(Math.random() * gifts.length);
                    finalGifts[ran] = finalGifts[ran] + 1;
                }
                if (i%10 == 0) {
                    finalGifts[finalGifts.length - 1] = finalGifts[finalGifts.length - 1] + gifts2[Math.floor(i/10) - 1][1];
                }
            }
            for (var i = 0; i < finalGifts.length; i++) {
                if (i == finalGifts.length - 1) {
                    cm.gainItem(4031250, finalGifts[i]);
                } else {
                    cm.gainItem(gifts[i][0], finalGifts[i]);
                }
            }
            insertMoshenlog("魔神塔扫荡-"+cm.getPlayer().getId(), 1, 0);
            cm.sendOk(finalGifts);
            // cm.playerMessage(1, "领取成功");
            cm.dispose();
        } else if (sel == 3) {
            eq = cm.getInventory(-1).getItem(-11);
            if (eq == null) {
                cm.sendOk("没有装备主武器，无法强化");
                cm.dispose();
                return;
            }
            var text = "\t\t\t#e#b- 使用 #v" + gifts[sel_2][0] + "# 强化 -#k#n\r\n\r\n";
            text += "\t\t#r+" + gifts[sel_2][2];
            switch (gifts[sel_2][3]) {
                // （1力量2敏捷3智力4运气5物攻6魔攻）
                case 1:
                    text += " 力量#k\r\n";
                    break;
                case 2:
                    text += " 敏捷#k\r\n";
                    break;
                case 3:
                    text += " 智力#k\r\n";
                    break;
                case 4:
                    text += " 运气#k\r\n";
                    break;
                case 5:
                    text += " 物理攻击力#k\r\n";
                    break;
                case 6:
                    text += " 魔法攻击力#k\r\n";
                    break;
            }
            text += "\t\t#r+" + gifts[sel_2][1] + " 武器破功\r\n";
            cm.sendYesNo(text);
        }
    } else if (status == 3) {
        if (sel == 1) {
            if (num < (sel_2+1)*5) {
                cm.sendOk("你的最高通关层数为"+num+"，无法领取 " + ((sel_2+1)*5) + " 层奖励");
                cm.dispose();
                return;
            } else if (getMoshenlog("魔神塔" + ((sel_2+1)*5) + "层奖励", 1) > 0) {
                cm.sendOk("你的已经领取过 " + ((sel_2+1)*5) + " 层奖励了");
                cm.dispose();
                return;
            }
            var rewardlist = itemList[sel_2];
            /* if (!cm.canHoldSlots(rewardlist.length)) {
                 cm.sendOk("包裹空间不足，请确保包裹每个栏位有至少 " + (rewardlist.length+1) + " 格空间");
                 cm.dispose();
                 return;
             }*/
            for (var i = 0; i < rewardlist.length; i++) {
                cm.gainItem(rewardlist[i][0], rewardlist[i][1]);
            }
            insertMoshenlog("魔神塔" + ((sel_2+1)*5) + "层奖励", 1, 1);
            cm.playerMessage(1, "领取成功");
            cm.dispose();
        } else if (sel == 3) {
            switch (gifts[sel_2][3]) {
                // （1力量2敏捷3智力4运气5物攻6魔攻）
                case 1:
                    eq.setStr(eq.getStr() + gifts[sel_2][2]);
                    break;
                case 2:
                    eq.setDex(eq.getDex() + gifts[sel_2][2]);
                    break;
                case 3:
                    eq.setInt(eq.getInt() + gifts[sel_2][2]);
                    break;
                case 4:
                    eq.setLuk(eq.getLuk() + gifts[sel_2][2]);
                    break;
                case 5:
                    eq.setWatk(eq.getWatk() + gifts[sel_2][2]);
                    break;
                case 6:
                    eq.setMatk(eq.getMatk() + gifts[sel_2][2]);
                    break;
            }
            cm.addFromDrop(eq.copy());
            cm.gainItem(gifts[sel_2][0], -1);
            cm.playerMessage(1, "强化成功");
            cm.dispose();
        }
    }
}

function arrayFills(le) {
    var l = new Array();
    for (var i = 0; i < le; i++) {
        l.push(0);
    }
    return l;
}

function getMoshenlog(cid, type) {
    var x = cm.sql_Select("select * from moshen_log where cid = ? and type = ?", cid, type);
    if (x.length > 0) {
        return parseInt(x.get(0).get("count"));
    } else {
        return 0;
    }
}

function insertMoshenlog(cid, count, type) {
    cm.sql_Update("insert into moshen_log (cid, count, time, type) values (?,?,NOW(),?)", cid, count, type);
}