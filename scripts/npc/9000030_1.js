/* 泡点兑换 */

var status = -1;
var itemList = Array(
// 在线点为 1 - 60 的奖励
        Array(2001512, 1, 10, 0), //西瓜
        Array(2001513, 1, 10, 0), //棒棒冰
        Array(2001514, 1, 10, 0), //红豆刨冰
        Array(2000012, 5, 10, 0), //特殊药水
        Array(2000019, 5, 10, 0), //超级药水
        Array(2040000, 20, 1, 0), //头盔防御卷轴100%
        Array(2040003, 20, 1, 0), //头盔体力卷轴100%
        Array(2040500, 20, 1, 0), //全身铠甲敏捷卷轴100%
        Array(2040600, 20, 1, 0), //裤/裙防御卷轴100%
        Array(2040700, 30, 1, 0), //鞋子敏捷度卷轴100%
        Array(2040703, 30, 1, 0), //鞋子跳跃卷轴100%
        Array(2043000, 40, 1, 0), //单手剑攻击卷轴100%
        Array(2043100, 40, 1, 0), //单手斧攻击卷轴100%
        Array(2043200, 40, 1, 0), //单手钝器攻击卷轴100%
        Array(2044000, 40, 1, 0), //双手剑攻击卷轴100%
        Array(2044100, 40, 1, 0), //双手斧攻击卷轴100%
        Array(2044200, 40, 1, 0), //双手钝器攻击卷轴100%
        Array(2044300, 40, 1, 0), //枪攻击卷轴100%
        Array(2044400, 40, 1, 0), //矛攻击卷轴100%
        Array(2043300, 40, 1, 0), //短剑攻击卷轴100%
        Array(2044700, 40, 1, 0), //拳套攻击卷轴100%
        Array(2044900, 40, 1, 0), //短枪攻击卷轴100%
        Array(2045200, 40, 1, 0), //双弩枪攻击力卷轴100%
        Array(2045300, 40, 1, 0), //手炮攻击力卷轴100%
        Array(2043600, 40, 1, 0), //手杖攻击力卷轴100%
// 在线点为 61 - 180 的奖励
        Array(2004004, 61, 1, 0), //5级力量药水
        Array(2004024, 61, 1, 0), //5级敏捷药水
        Array(2004044, 61, 1, 0), //5级智力药水
        Array(2004064, 61, 1, 0), //5级运气药水
        Array(2004084, 61, 1, 0), //5级防御药水
        Array(2004104, 61, 1, 0), //5级攻击力药水
        Array(2004114, 61, 1, 0), //5级魔力药水
        Array(2049301, 70, 1, 0), //装备强化卷轴
        Array(2049401, 70, 1, 0), //潜能附加卷轴
        Array(2040001, 70, 1, 0), //头盔防御卷轴60%
        Array(2040401, 70, 1, 0), //上衣防御卷轴60%
        Array(2040601, 70, 1, 0), //裤裙防御卷轴60%
        Array(2040621, 70, 1, 0), //裤裙体力卷轴60%
        Array(2040901, 70, 1, 0), //盾牌防御卷轴60%
        Array(2041001, 70, 1, 0), //披风魔防卷轴60%
        Array(2041004, 70, 1, 0), //披风防御卷轴60%
        Array(2040004, 70, 1, 0), //头盔体力卷轴60%
        Array(2040421, 70, 1, 0), //上衣体力卷轴60%
        Array(2040824, 70, 1, 0), //手套体力卷轴60%
        Array(2040618, 70, 1, 0), //裤裙跳跃卷轴60%
        Array(2041007, 70, 1, 0), //披风体力卷轴60%
        Array(2041010, 70, 1, 0), //披风魔力卷轴60%
        Array(2040326, 70, 1, 0), //耳环装饰体力卷轴60%
        Array(2040504, 70, 1, 0), //全身铠甲防御卷轴60%
        Array(2040029, 80, 1, 0), //头盔敏捷卷轴60%
        Array(2040418, 80, 1, 0), //上衣力量卷轴60%
        Array(2040425, 80, 1, 0), //上衣运气卷轴60%
        Array(2040501, 80, 1, 0), //全身铠甲敏捷卷轴60%
        Array(2040513, 80, 1, 0), //全身铠甲智力卷轴60%
        Array(2040516, 80, 1, 0), //全身铠甲运气卷轴60%
        Array(2040532, 80, 1, 0), //全身盔甲力量卷轴60%
        Array(2040701, 80, 1, 0), //鞋子敏捷度卷轴60%
        Array(2040704, 80, 1, 0), //鞋子跳跃卷轴60%
        Array(2040707, 80, 1, 0), //鞋子速度卷轴60%
        Array(2040924, 90, 1, 0), //盾牌运气卷轴60%
        Array(2040927, 90, 1, 0), //盾牌体力卷轴60%
        Array(2040931, 90, 1, 0), //盾牌力量卷轴60%
        Array(2041013, 90, 1, 0), //披风力量卷轴60%
        Array(2041016, 90, 1, 0), //披风智力卷轴60%
        Array(2041019, 90, 1, 0), //披风敏捷卷轴60%
        Array(2041022, 90, 1, 0), //披风运气卷轴60%
        Array(2043001, 100, 1, 0), //单手剑攻击卷轴60%
        Array(2043101, 100, 1, 0), //单手斧攻击卷轴60%
        Array(2043201, 100, 1, 0), //单手钝器攻击卷轴60%
        Array(2043301, 100, 1, 0), //短剑攻击卷轴60%
        Array(2043401, 100, 1, 0), //刀攻击力卷轴60%
        Array(2043601, 100, 1, 0), //手杖攻击力卷轴60%
        Array(2043701, 100, 1, 0), //短杖魔力卷轴60%
        Array(2043801, 100, 1, 0), //长杖魔力卷轴60%
        Array(2044001, 100, 1, 0), //双手剑攻击卷轴60%
        Array(2044101, 100, 1, 0), //双手斧攻击卷轴60%
        Array(2044201, 100, 1, 0), //双手钝器攻击卷轴60%
        Array(2044301, 100, 1, 0), //枪攻击卷轴60%
        Array(2044401, 100, 1, 0), //矛攻击卷轴60%
        Array(2044501, 100, 1, 0), //弓攻击卷轴60%
        Array(2044601, 100, 1, 0), //弩攻击卷轴60%
        Array(2044701, 100, 1, 0), //拳套攻击卷轴60%
        Array(2044801, 100, 1, 0), //拳甲攻击卷轴60%
        Array(2044901, 100, 1, 0), //短枪攻击卷轴60%
        Array(2045201, 100, 1, 0), //双弩枪攻击力卷轴
        Array(2045301, 100, 1, 0), //手炮攻击力卷轴
        Array(2040301, 100, 1, 0), //耳环智力卷轴60%
        Array(2040317, 120, 1, 0), //耳环敏捷卷轴60%
        Array(2040321, 120, 1, 0), //耳环装饰运气卷轴60%
        Array(2040801, 120, 1, 0), //手套敏捷卷轴60%
        Array(2040804, 130, 1, 0), //手套攻击卷轴60%
        Array(2022529, 140, 1, 1), //金达莱花语 - 金达莱的花语是爱。30分钟内金币掉落率提高2倍。
        Array(2022530, 150, 1, 1), //迎春花花语 - 迎春花的花语是希望。30分钟内物品掉落率提高2倍。
        Array(2022531, 160, 1, 1), //四叶草花语 - 四叶草的花语是幸运。1小时内物品掉落率提高2倍。
        Array(2049300, 160, 1, 1), //高级装备强化卷轴
        Array(2049400, 160, 1, 1), //高级潜能附加卷轴
        Array(2430578, 160, 1, 2), //直升机3天交换券
        Array(2430582, 160, 1, 2), //透明蝙蝠怪3天交换券
        Array(2430584, 160, 1, 2), //热气球3天交换券
        Array(2430586, 160, 1, 2), //骑士团战车3天交换券
        Array(2430587, 160, 1, 2), //妮娜的魔法阵3天交换券
        Array(2430589, 160, 1, 2), //魔法扫帚3天交换券
        Array(2430591, 160, 1, 2), //猫头鹰3天交换券
        Array(2430593, 160, 1, 2), //警车3天交换券
        Array(2430594, 160, 1, 2), //筋斗云3天交换券
        Array(2430595, 160, 1, 2), //玩具坦克3天交换券
        Array(2430596, 160, 1, 2), //钢铁变形侠3天交换券
        Array(2430597, 160, 1, 2), //飞船3天交换券
        Array(2430598, 160, 1, 2), //超能套装3天交换券
        Array(2430599, 160, 1, 2), //蝙蝠怪3天交换券
        Array(2430602, 160, 1, 2), //暴风摩托3天交换券
        Array(2430603, 160, 1, 2), //冒险骑士团高速电车3天交换券
// 在线点为 181 - 300 的奖励
        Array(2049300, 181, 1, 1), //高级装备强化卷轴
        Array(2049400, 181, 1, 1), //高级潜能附加卷轴
        Array(2290285, 181, 1, 2), //[能手册]神秘能手册
        Array(2028061, 181, 1, 2), //不可思议的卷轴卷
        Array(4021011, 181, 1, 2), //纯洁灵魂的火花
        Array(4021012, 181, 1, 2), //强烈灵魂的净水
        Array(4020013, 181, 1, 2), //梦碎片
        Array(4021019, 181, 1, 2), //梦之石
        Array(4021020, 181, 1, 2), //混沌碎片
        Array(4021021, 181, 1, 2), //贤者之石
        Array(4021022, 181, 1, 2), //太初精髓
        Array(4310015, 181, 1, 2), //斗神证物
        Array(2028062, 181, 1, 2), //不可思议的配方卷
        Array(2430585, 181, 1, 2), //企鹅3天交换券
        Array(2430588, 181, 1, 2), //拿破仑的白马3天交换券
        Array(2430590, 181, 1, 2), //梦魇3天交换券
        Array(2430579, 190, 1, 3), //GO兔冒险3天交换券
        Array(2430580, 190, 1, 3), //熊猫3天交换券
        Array(2430583, 190, 1, 3), //天马3天交换券
        Array(2430600, 190, 1, 3), //暗光龙3天交换券
        Array(2430601, 190, 1, 3), //圣兽提拉奥斯3天交换券
        Array(2511040, 230, 1, 3), //新月腰带制作配方	70级
        Array(2511079, 230, 1, 3), //新月戒指制作配方	70级
        Array(2511097, 230, 1, 3), //新月耳环制作配方	70级
        Array(2511115, 240, 1, 3), //半月戒指制作配方	70级
        Array(2511116, 240, 1, 3), //半月耳环制作配方	70级
        Array(2511117, 240, 1, 3)  //半月腰带制作配方	70级
        );

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var zyms = "";
        zyms = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n";
        zyms += "当前在线信息: #r" + cm.getGamePoints() + "#k 点。\r\n\r\n";
        zyms += "                 #L0##b查看规则#l \r\n\r\n";
        zyms += "       #L1##b领取奖励#l    #fMob/0130101.img/move/0##L2##r兑换物品#k#l\r\n";
        //zyms += "                 #L3##r领取礼包#l \r\n";
        //cm.sendSimple("亲爱的#b#h0##k您好，您有什么需要我帮忙的吗？\r\n\r\n#L0##b查看本NPC详细规则#k#l\r\n#L1##b领取奖励#k#l\r\n#L2##r兑换特别奖励#k#l");
        cm.sendSimple(zyms);
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendOk("#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n规则如下：\r\n#b1#k、每日0时到24时，只要您在线，就可以获得在线时间点数，每1分钟可获得1点在线点数。\r\n#b2#k、可以用在线时间点数兑换道具，各种极品道具等您来拿！\r\n#b3#k、若您当日24时内不兑换在线时间点数，则第二天0点在线时间点数会自动清零，请您注意。\r\n#b4#k、若不小心掉线，您可以重新登陆，时间会累计。\r\n#b5#k、各种奖励是随机的，也可能随时增加或者取消某些道具，在线时间点数越大，兑换的道具会越好！\r\n#b6#k、在线6小时以上，都有超极品道具送。而且如果您在线时间超过了12小时，那么将获得一份丰富的大礼。如果在线能到23小时，那么最好的道具将会给您。#k\r\n#b7#k、在线点数为#b 301#k到#b 700#k点可以兑换获得#r1#k个#v4031504##k\r\n#b8#k、在线点数为#b1381#k到#b1440#k点可以兑换获得#r1#k个#v4031506#\r\n#b9#k、在线点数为#b1381#k到#b1440#k点可以兑换获得#r1#k个#v4031506#");
            cm.dispose();
        } else if (selection == 1) {
            cm.sendYesNo("您目前的在线时间点数为#b " + cm.getGamePoints() + " #k点，请问您是否要兑换奖励？");
        } else if (selection == 2) {
            status = 2;
            cm.sendSimple("#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n#k礼盒数量:#v4031504#:#r" + cm.itemQuantity(4031504) + " #k个  #v4031505#: #r" + cm.itemQuantity(4031505) + " #k个 #v4031506#: #r" + cm.itemQuantity(4031506) + " #k个\r\n#L0##b使用#v4031504#兑换物品#k#l \r\n#L1##b使用#v4031505#兑换物品#k#l \r\n#L2##b使用#v4031506#兑换物品#l");
        }
    } else if (status == 2) {
        if (cm.getSpace(1) < 1 || cm.getSpace(2) < 1 || cm.getSpace(3) < 1 || cm.getSpace(4) < 1) {
            cm.sendOk("兑换奖励失败，请您确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
        } else {
            var chance = cm.getGamePoints();
            if (chance > 0 && chance <= 60) { //在线1小时
                var finalitem = Array();
                for (var i = 0; i < itemList.length; i++) {
                    if (itemList[i][1] <= 60) {
                        finalitem.push(itemList[i]);
                    }
                }
                if (finalitem.length != 0) {
                    var item;
                    var random = new java.util.Random();
                    var finalchance = random.nextInt(finalitem.length);
                    var itemId = finalitem[finalchance][0];
                    var quantity = finalitem[finalchance][2];
                    var notice = finalitem[finalchance][3];
                    item = cm.gainGachaponItem(itemId, quantity, "在线奖励", notice);
                    if (item != -1) {
                        cm.resetGamePoints();
                        cm.sendOk("恭喜您成功兑换奖励，获得了 #b#t" + item + "##k " + quantity + "个。");
                    } else {
                        cm.sendOk("兑换奖励失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
                    }
                }
            } else if (chance > 60 && chance <= 180) {
                var finalitem = Array();
                for (var i = 0; i < itemList.length; i++) {
                    if (itemList[i][1] > 60 && itemList[i][1] <= 180) {
                        finalitem.push(itemList[i]);
                    }
                }
                if (finalitem.length != 0) {
                    var item;
                    var random = new java.util.Random();
                    var finalchance = random.nextInt(finalitem.length);
                    var itemId = finalitem[finalchance][0];
                    var quantity = finalitem[finalchance][2];
                    var notice = finalitem[finalchance][3];
                    item = cm.gainGachaponItem(itemId, quantity, "在线奖励", notice);
                    if (item != -1) {
                        cm.resetGamePoints();
                        cm.sendOk("恭喜您成功兑换奖励，获得了 #b#t" + item + "##k " + quantity + "个。");
                    } else {
                        cm.sendOk("兑换奖励失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
                    }
                }
            } else if (chance > 180 && chance <= 300) {
                var finalitem = Array();
                for (var i = 0; i < itemList.length; i++) {
                    if (itemList[i][1] > 180 && itemList[i][1] <= 300) {
                        finalitem.push(itemList[i]);
                    }
                }
                if (finalitem.length != 0) {
                    var item;
                    var random = new java.util.Random();
                    var finalchance = random.nextInt(finalitem.length);
                    var itemId = finalitem[finalchance][0];
                    var quantity = finalitem[finalchance][2];
                    var notice = finalitem[finalchance][3];
                    item = cm.gainGachaponItem(itemId, quantity, "在线奖励", notice);
                    if (item != -1) {
                        cm.resetGamePoints();
                        cm.sendOk("恭喜您成功兑换奖励，获得了 #b#t" + item + "##k " + quantity + "个。");
                    } else {
                        cm.sendOk("兑换奖励失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
                    }
                }
            } else if (chance > 300 && chance <= 700) {
                var item = cm.gainGachaponItem(4031504, 1, "在线奖励", 3);
                if (item != -1) {
                    cm.resetGamePoints();
                    cm.sendOk("恭喜您成功兑换奖励，获得了 #b#t" + item + "##k " + 1 + "个。");
                } else {
                    cm.sendOk("兑换奖励失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
                }
            } else if (chance > 700 && chance <= 1380) {
                var item = cm.gainGachaponItem(4031505, 1, "在线奖励", 3);
                if (item != -1) {
                    cm.resetGamePoints();
                    cm.sendOk("恭喜您成功兑换奖励，获得了 #b#t" + item + "##k " + 1 + "个。");
                } else {
                    cm.sendOk("兑换奖励失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
                }
            } else if (chance > 1380) {
                var item = cm.gainGachaponItem(4031506, 1, "在线奖励", 3);
                if (item != -1) {
                    cm.resetGamePoints();
                    cm.sendOk("恭喜您成功兑换奖励，获得了 #b#t" + item + "##k " + 1 + "个。");
                } else {
                    cm.sendOk("兑换奖励失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
                }
            } else {
                cm.sendOk("兑换奖励失败，您当前的在线点数还不能兑换奖励。");
            }
        }
        cm.dispose();
    } else if (status == 3) {
        if (selection == 0) {
            cm.dispose();
            cm.openNpc(9000030, 2);
        } else if (selection == 1) {
            cm.dispose();
            cm.openNpc(9000030, 3);
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(9000030, 4);
        }
    }
}
