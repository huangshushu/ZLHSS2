/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：拍卖行
 */
var status = -1;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 拍卖行 = "#fEffect/SkillName1.img/1001005/拍卖行#";
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var 蘑菇 = "#fUI/UIWindow.img/Minigame/Common/mark#";
var 装备2 = "装备";
var 消耗2 = "消耗";
var 设置2 = "设置";
var 其他2 = "其他";
var 特殊2 = "特殊";
var jt = "#fUI/CashShop.img/CashItem/0#";
var jt = "#fUI/Basic/BtHide3/mouseOver/0#";
var sl0items = null;
var character_auctionItems = null;
var select_type_sell_auctionItems = null;
var auctionPoint = null;
var sel_0 = 0;
var sel_1 = 0;
var sel_2 = 0;
var sel_3 = 0;
var sel_4 = 0;
var sel_5 = 0;
var ratio_point = 1;
function start() {
    action(1, 0, 0);
}

function action(k, e, s) {
    if (k == 0) {
        cm.dispose();
        return;

    }
    cm.GainPiot("拍卖行使用", 1, 1);
    var pmkg = cm.GetPiot("点券拍卖行开关", "1");
    var MC = cm.getServerName();
    var 点券 = cm.getPlayer().getCSPoints(1);
    //var jt =  cm.auctionPoint.getPoint();
    var 点券拍卖行开关 = cm.GetPiot("点券拍卖行开关", "1");
    if (cm.判断当前地图是否已禁用此脚本(9900004)) {
        cm.playerMessage(1, "" + MC + "提示\r\n\r\n☆ 当前地图无法使用 ☆");
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        character_auctionItems = cm.auction_findByCharacterId();
        auctionPoint = cm.auction_getAuctionPoint();
        var c = 0;
        var b = 0;
        var h = 0;
        if (character_auctionItems != null && !character_auctionItems.isEmpty()) {
            for (var n = 0; n < character_auctionItems.size(); n++) {
                var p = character_auctionItems.get(n);
                if (p.getAuctionState().getState() == 0) {
                    c++;
                } else {
                    if (p.getAuctionState().getState() == 1) {
                        b++;
                    } else {
                        if (p.getAuctionState().getState() == 2) {
                            h++;
                        }
                    }
                }
            }
        }
        var MC = cm.getServerName();
        var pmsl = cm.getBossRank("拍卖数量", 2) + 26;
               var
        //j = "  " + 拍卖行 + "\r\n";
		j = "" + 蘑菇 + "#e#r<"+MC+"拍卖行>#k#n#d [*点券*]#k#n\r\n";
        j += "#n" + 蘑菇 + "[ 上架: #r" + b + "#k 下架: #r" + c + "#k 已售:#r " + h + "#k  容纳:#r" + (character_auctionItems == null ? 0 : character_auctionItems.size()) + " #k/#d " + pmsl + "#k ]\r\n";

        j += "#n" + 蘑菇 + " jt:#r#e " + (auctionPoint == null ? 0 : auctionPoint.getPoint()) + "#n#k\r\n";
        j += "" + 蘑菇 + " 拍卖行货物数量: #d#e" + cm.GetPiot("拍卖物品数量", 1);
		//j += "\r\n" + 蘑菇 + " #e#r警告:附魔，打孔物品放到拍卖会失效。#k#n";
        //+"#n#k\r\n";

        if (cm.GetPiot("点券拍卖行开关", "1") <= 0) {

            j += " \r\n#n#r  ┏━━━━━━━━━━━━━━━━━━━━━━━┓#k\r\n";
            j += "  #r┃ #b#L22#" + jt + "浏览拍卖市场" + jt + "#l  #b#L23#" + jt + "管理我的拍卖" + jt + "#l#r    ┃\r\n";
            j += "  #r┃ #b#L21#" + jt + "交易点券兑换" + jt + "#l  #b#L998#" + jt + "购买容纳数量" + jt + "#l#r    ┃\r\n";
            j += "  #r┗━━━━━━━━━━━━━━━━━━━━━━━┛#k";
        } else {
            j += "\r\n#n维护中···";
        }
		 j += "\r\n\t\t\t  #L200#" + jt + " #b返回#k#l";
        if (cm.getPlayer().getGMLevel() == 6) {

            if (cm.GetPiot("点券拍卖行开关", "1") <= 0) {
                j += "\r\n\t\t\t  #L100#" + jt + " #b点券拍卖行#g[开启中]#k#l";
            }
            if (cm.GetPiot("点券拍卖行开关", "1") >= 1) {
                j += "\r\n\t\t\t  #L101#" + jt + " #b点券拍卖行#r[关闭中]#k#l";
            }
            j += "\r\n\t\t\t  #L999#" + jt + " #r扩充容纳价格#l";
        }

        cm.sendSimple(j);
    } else {
        if (status == 1) {
            sel_0 = s;
            if (sel_0 == 100) {
                cm.GainPiot("点券拍卖行开关", "1", -点券拍卖行开关);
                cm.GainPiot("点券拍卖行开关", "1", 1);
                cm.dispose();
                cm.openNpc(9900004, 32);
            } else if (sel_0 == 101) {
                cm.GainPiot("点券拍卖行开关", "1", -点券拍卖行开关);
                cm.dispose();
                cm.openNpc(9900004, 32);
            } else if (sel_0 == 998) {
                cm.dispose();
                cm.openNpc(9900004, 320);
			} else if (sel_0 == 999) {
                cm.dispose();
                cm.openNpc(9900004, 33);
			} else if (sel_0 == 200) {
                cm.dispose();
                cm.openNpc(9900004, 3);
            } else if (sel_0 == 21) {
                var j = "          " + 心 + "  " + 心 + "  #e#d★ jt券兑换 ★#k#n  " + 心 + "  " + 心 + "\r\n\r\n";
                j += "            #r比例:  1 点jt == " + ratio_point + "点券#k\r\n\r\n";
                j += "\t\t\t\t#b#L1#" + 箭头 + "点券兑换jt#l#k \r\n#b\t\t\t\t#L2#" + 箭头 + "jt兑换点券#l#k\r\n";

                cm.sendSimple(j);
            } else {
                if (sel_0 == 22) {
                    var j = "  " + 心 + "  " + 心 + "  " + 心 + "  #e#d请选择你要浏览的类型#k  " + 心 + "  " + 心 + "  " + 心 + "\r\n\r\n";
                    j += "  #b#L1#" + 装备2 + "#l#k#b  #L2#" + 消耗2 + "#l#k#b  #L3#" + 设置2 + "#l#k  #L4#" + 其他2 + "#l#k  #L5#" + 特殊2 + "#l#k\r\n\r\n";
                    cm.sendSimple(j);
                } else {
                    if (sel_0 == 23) {
                        var j = "      " + 心 + "  " + 心 + "  " + 心 + "  #e#d我的拍卖行管理#k  " + 心 + "  " + 心 + "  " + 心 + "  \r\n#r提示；\r\n先从背包添加道具到拍卖行，再从管理道具中设置价格上架，即可上架出售-#k\r\n\r\n";
                        j += "    #b#L1#" + 箭头 + "添加拍卖道具#l#k  #b#L2#" + 箭头 + "管理拍卖道具#l#k\r\n";

                        cm.sendSimple(j);
                    }
                }
            }
        } else {
            if (status == 2) {
                sel_1 = s;
                if (s == 0) {
                    status = -1;
                    action(k, e, s);
                    return;
                }
                if (sel_0 == 21) {
                    cm.sendGetNumber("#b提示：你当前可以兑换 #r" + 点券 + "#k #bjt\r\n提示：你当前可以兑换 #r" + (auctionPoint == null ? 0 : auctionPoint.getPoint()) + "#k #b点券#d\r\n\r\n#k请输入你要兑换的jt数量:#k", 1, 1, 50000);
                } else {
                    if (sel_0 == 22) {
                        var g = cm.auction_findByItemType(sel_1);
                        if (g == null || g.size() < 1) {
                            cm.playerMessage(5, "[拍卖行]:该分类下还暂时还没有商品哦。");
                            cm.dispose();
                            cm.openNpc(9900004, 32);
                            return;
                        }
                        var j = "   #v2000005# #v2000005#  #b★#r拍卖市场商品浏览#b★ #v2000005# #v2000005##k#n\r\n#r#e#r[点券]#k#n_______________________________________________#k\r\n";
                        for (var n = 0; n < g.size(); n++) {
                            var r = g.get(n);
                            j += "#b#L" + r.getId() + "#" + 箭头 + "  #v" + r.getItem().getItemId() + "# #b数量：#r" + r.getQuantity() + " #k/ #b售价：#r" + r.getPrice() + " #k#l\r\n";//出售者:#r[" + r.getCharacterName() + "]
                        }
                        cm.sendSimple(j);
                    } else {
                        if (sel_0 == 23) {
                            if (sel_1 == 1) {
                                if (character_auctionItems != null) {
                                    var pmsl = cm.getBossRank("拍卖数量", 2) + 26;
                                    if (character_auctionItems.size() >= pmsl) {
                                        cm.sendOkS("添加拍卖道具已达上限 #r" + character_auctionItems.size() + " #k / " + pmsl + "，不可存储。", 3);
                                        cm.dispose();
                                        return;
                                    }
                                }
                                var j = "   " + 心 + "  " + 心 + "  #e#d选择你要添加的拍卖道具类型#k  " + 心 + "  " + 心 + " \r\n\r\n";
                                j += "  #b#L1#" + 装备2 + "#l#k#b  #L2#" + 消耗2 + "#l#k#b  #L3#" + 设置2 + "#l#k  #L4#" + 其他2 + "#l#k  #L5#" + 特殊2 + "#l#k\r\n\r\n";
                  
                                cm.sendSimple(j);
                            } else {
                                if (sel_1 == 2) {
                                    var j = "   " + 心 + "  " + 心 + "  " + 心 + "  #e#d★ 管理拍卖道具 ★#k  " + 心 + "  " + 心 + "  " + 心 + "\r\n\r\n";
                                    j += "#b#L10001#移除所有已售道具#l#k\r\n\r\n";
                                    for (var n = 0; n < character_auctionItems.size(); n++) {
                                        var r = character_auctionItems.get(n);
                                        j += "#r" + (r.getAuctionState().getState() == 2 ? "\r\n" : "#L" + r.getId() + "#") + "#v" + r.getItem().getItemId() + "##b 数量:#r" + r.getQuantity() + "#b价格:#r" + r.getPrice() + " #b状态:" + (r.getAuctionState().getState() == 0 ? "#k" : r.getAuctionState().getState() == 1 ? "#r" : "#d") + r.getAuctionState() + (r.getAuctionState().getState() == 2 ? "[" + r.getBuyerName() + "]" : "#l") + "\r\n";
                                    }
                                    cm.sendSimple(j);
                                }
                            }
                        }
                    }
                }
            } else {
                if (status == 3) {
                    sel_2 = s;
                    if (sel_0 == 21) {
                        if (sel_1 == 1) {
                            if (sel_2 * ratio_point > cm.getNX(1)) {
                                cm.sendOkS("点券不足:兑换" + sel_2 + "点jt需要" + sel_2 * ratio_point + "点券", 3);
                                cm.dispose();
                                return;
                            }
                            var o = cm.auction_addPoint(sel_2);
                            if (o > -1) {
                                cm.gainNX(-sel_2 * ratio_point);
                                cm.playerMessage(5, "[拍卖行]:恭喜你兑换jt成功。");
                                cm.dispose();
                                cm.openNpc(9900004, 32);
                            } else {
                                cm.sendOkS("兑换失败(" + o + ")", 3);
                            }
                        } else {
                            if (sel_1 == 2) {
                                var l = cm.auction_getAuctionPoint();
                                if (l == null || l.getPoint() < 1 || l.getPoint() < sel_2) {
                                    cm.sendOkS("没有可以用来兑换的jt", 3);
                                    cm.dispose();
                                    return;
                                }
                                var o = cm.auction_addPoint(-sel_2);
                                if (o > -1) {
                                    cm.gainNX(sel_2 * ratio_point);
                                    cm.playerMessage(5, "[拍卖行]:恭喜你兑换点券成功。");
                                    cm.dispose();
                                    cm.openNpc(9900004, 32);
                                } else {
                                    cm.sendOkS("兑换失败(" + o + ")", 3);
                                }
                            }
                        }
                        cm.dispose();
                    } else {
                        if (sel_0 == 22) {
                            var r = cm.auction_findById(sel_2);
                            if (r == null) {
                                cm.sendOkS("不可操作的道具,可能并不存在", 3);
                                cm.dispose();
                                return;
                            }
                            var j = "";
                            j += "#b道具#v" + r.getItem().getItemId() + "# #r" + r.getPrice() + "#b点/#r" + r.getQuantity() + "#b个 卖家#d[" + r.getCharacterName() + "] #b拍卖状态:" + (r.getAuctionState().getState() == 0 ? "#k" : r.getAuctionState().getState() == 1 ? "#r" : "#d") + r.getAuctionState() + (r.getAuctionState().getState() == 2 ? "[" + r.getBuyerName() + "]" : "") + "\r\n\r\n";
                            var m = parseInt(r.getItem().getItemId() / 1e6);
                            if (m == 1) {
                                j += showEquipState(r.getItem());
                            }
                            j += "\r\n\r\n";

                            j += "#b#L1#" + 箭头 + "购买#l#k\r\n";

                            cm.sendSimple(j);
                        } else {
                            if (sel_0 == 23) {
                                if (sel_1 == 1) {
                                    sl0items = cm.getItemsByType(sel_2);
                                    if (sl0items == null || sl0items.size() < 1) {
                                        cm.playerMessage(5, "[拍卖行]:选择的背包里没有道具。");
                                        cm.dispose();
                                        cm.openNpc(9900004, 32);
                                        return;
                                    }
                                    var j = "#b请选择你要添加的道具#k\r\n\r\n";
                                    for (var n = 0; n < sl0items.size(); n++) {
                                        j += "#r#L" + n + "##v" + sl0items.get(n).getItemId() + "# 数量 #r" + sl0items.get(n).getQuantity() + "#l#k\r\n";
                                    }
                                    cm.sendSimple(j);
                                } else {
                                    if (sel_1 == 2) {
                                        if (sel_2 == 10001) {
                                            var d = cm.auction_deletePlayerSold();
                                            if (d > -1) {
                                                cm.playerMessage(5, "[拍卖行]:清理完毕。");
                                                cm.dispose();
                                                cm.openNpc(9900004, 32);
                                            } else {
                                                cm.sendOkS("清理出错(" + d + ")", 3);
                                                cm.dispose();
                                            }

                                            return;
                                        }
                                        var r = cm.auction_findById(sel_2);
                                        if (r == null) {
                                            cm.sendOkS("不可操作的道具,可能并不存在", 3);
                                            cm.dispose();
                                            return;
                                        }
                                        var j = "";
                                        j += "#b道具#v" + r.getItem().getItemId() + "# 拍卖状态:" + (r.getAuctionState().getState() == 0 ? "#k" : r.getAuctionState().getState() == 1 ? "#r" : "#d") + r.getAuctionState() + "\r\n\r\n";
                                        var m = parseInt(r.getItem().getItemId() / 1e6);
                                        if (m == 1) {
                                            j += showEquipState(r.getItem());
                                        }
                                        j += "\r\n\r\n";
                                        if (r.getAuctionState().getState() == 0) {
                                            j += "#b#L2#" + 箭头 + "上架#l	 	#L3#" + 箭头 + "取回#l#k\r\n";


                                        } else {
                                            if (r.getAuctionState().getState() == 1) {
                                                j += "#b#L1#" + 箭头 + "下架#l#k\r\n";
                                            } else {
                                                if (r.getAuctionState().getState() == 2) {
                                                    j += "#b#L4#" + 箭头 + "移除#l#k\r\n";
                                                }
                                            }
                                        }
                                        cm.sendSimple(j);
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (status == 4) {
                        sel_3 = s;
                        if (sel_0 == 21) {
                        } else {
                            if (sel_0 == 22) {
                                var r = cm.auction_findById(sel_2);
                                if (r == null) {
                                    cm.sendOkS("不可操作的道具,可能已不存在", 3);
                                    cm.dispose();
                                    return;
                                }
                                if (sel_3 == 1) {
                                    var q = cm.auction_buy(sel_2);
                                    if (q == -5) {
                                        cm.sendOkS("操作失败(" + q + ")不存在的道具", 3);
                                        cm.dispose();
                                    } else {
                                        if (q == -6) {
                                            cm.sendOkS("操作失败(" + q + ")不可购买的状态", 3);
                                            cm.dispose();
                                        } else {
                                            if (q == -7) {
                                                cm.sendOkS("操作失败(" + q + ")没有购买点", 3);
                                                cm.dispose();
                                            } else {
                                                if (q == -8) {
                                                    cm.sendOkS("操作失败(" + q + ")购买点不足", 3);
                                                    cm.dispose();
                                                } else {
                                                    if (q == -9) {
                                                        cm.sendOkS("操作失败(" + q + ")背包空间不足", 3);
                                                        cm.dispose();
                                                    } else {
                                                        if (q == -2) {
                                                            cm.sendOkS("操作失败(" + q + ")数据库操作失败", 3);
                                                            cm.dispose();
                                                        } else {
                                                            if (q < 1) {
                                                                cm.sendOkS("操作失败(" + q + ")", 3);
                                                            } else {
                                                                cm.worldMessage(2, "[拍卖行信息] : 玩家[ " + cm.getChar().getName() + " ]成功以[ " + r.getPrice() + " ]jt的价格购买了物品[ " + cm.getItemName(r.getItem().getItemId()) + " ] ");//[ #t" + cm.getItemName() + "# ]  
                                                                //cm.小纸条("" + cm.getChar().getName() + "", "购买:" + cm.getItemName(r.getItem().getItemId()) + "||jt:" + r.getPrice() + "||卖家:" + r.getCharacterName() + "");
                                                                //cm.小纸条("" + r.getCharacterName() + "", "购买:" + cm.getItemName(r.getItem().getItemId()) + "||jt:" + r.getPrice() + "||买家:" + cm.getChar().getName() + "");
                                                               cm.私聊输出信息("[拍卖行出售信息]\r\n拍卖类型：点券拍卖行\r\n售出物品：" + cm.getItemName(r.getItem().getItemId()) + "\r\n物品卖家：" + r.getCharacterName() + "\r\n物品买家：" + cm.getChar().getName() + "\r\n成交价格：" + r.getPrice() + "",""+cm.账号ID取绑定QQ(cm.角色名字取账号ID(r.getCharacterName()))+"");
																cm.playerMessage(5, "[拍卖行]:操作成功，为您跳回拍卖界面");
                                                                cm.GainPiot("拍卖物品数量", "1", -1);
                                                                cm.dispose();
                                                                cm.openNpc(9900004, 32);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                // cm.dispose();
                            } else {
                                if (sel_0 == 23) {
                                    if (sel_1 == 1) {
                                        var f = sl0items.get(sel_3);
                                        if (f == null || f.getQuantity() < 1) {
                                            cm.sendOkS("选择的道具不存在", 3);
                                            cm.dispose();
                                            return;
                                        }
                                        var m = parseInt(f.getItemId() / 1e6);
                                        if (m == 1) {
                                            var j = "";
                                            j += "#r#L1##v" + f.getItemId() + " # " + 箭头 + "添加#z" + f.getItemId() + " #到拍卖#l#k\r\n\r\n";
                                            j += showEquipState(f);
                                            cm.sendSimple(j);
                                        } else {
                                            cm.sendGetNumber("请输入要存的数量", f.getQuantity(), 1, f.getQuantity());
                                        }
                                    } else {
                                        if (sel_1 == 2) {
                                            var r = cm.auction_findById(sel_2);
                                            if (r == null) {
                                                cm.sendOkS("不可操作的道具,可能并不存在", 3);
                                                cm.dispose();
                                                return;
                                            }
                                            if (sel_3 == 1) {
                                                if (r.getAuctionState().getState() != 1) {
                                                    cm.sendOkS("不可操作的道具,道具状态为" + r.getAuctionState() + " ,只有上架的才能下架", 3);
                                                    cm.dispose();
                                                    return;
                                                }
                                                var q = cm.auction_soldOut(sel_2);
                                                if (q == -5) {
                                                    cm.sendOkS("操作失败(" + q + ")不存在的道具", 3);
                                                    cm.dispose();
                                                } else {
                                                    if (q == -6) {
                                                        cm.sendOkS("操作失败(" + q + ")不可上架的状态", 3);
                                                        cm.dispose();
                                                    } else {
                                                        if (q == -7) {
                                                            cm.sendOkS("操作失败(" + q + ")价格小于1", 3);
                                                            cm.dispose();
                                                        } else {
                                                            if (q == -2) {
                                                                cm.sendOkS("操作失败(" + q + ")数据库操作失败", 3);
                                                                cm.dispose();
                                                            } else {
                                                                if (q < 1) {
                                                                    cm.sendOkS("操作失败(" + q + ")", 3);
                                                                    cm.dispose();
                                                                } else {
                                                                    cm.playerMessage(5, "[拍卖行]:操作成功，为您跳回拍卖界面。");
                                                                    cm.dispose();
                                                                    cm.openNpc(9900004, 32);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                //  cm.dispose();
                                            } else {
                                                if (sel_3 == 2) {
                                                    if (r.getAuctionState().getState() != 0) {
                                                        cm.sendOkS("不可操作的道具,道具状态为" + r.getAuctionState() + " ,只有下架的道具才能上架", 3);
                                                        cm.dispose();
                                                        return;
                                                    }
                                                    cm.sendGetNumber("请输入要拍卖的价格", 1, 1, 100000000);

                                                } else {
                                                    if (sel_3 == 3) {
                                                        if (r.getAuctionState().getState() != 0) {
                                                            cm.sendOkS("不可操作的道具,道具状态为" + r.getAuctionState() + " ,只有下架的道具才能取回", 3);
                                                            cm.dispose();

                                                            return;
                                                        }
                                                        var q = cm.auction_takeOutAuctionItem(sel_2);
                                                        if (q == -5) {
                                                            cm.sendOkS("操作失败(" + q + ")不存在的道具", 3);
                                                            cm.dispose();
                                                        } else {
                                                            if (q == -6) {
                                                                cm.sendOkS("操作失败(" + q + ")取的不是自己的", 3);
                                                                cm.dispose();
                                                            } else {
                                                                if (q == -7) {
                                                                    cm.sendOkS("操作失败(" + q + ")不可取出的状态", 3);
                                                                    cm.dispose();
                                                                } else {
                                                                    if (q == -8) {
                                                                        cm.sendOkS("操作失败(" + q + ")数量不正确", 3);
                                                                        cm.dispose();
                                                                    } else {
                                                                        if (q == -9) {
                                                                            cm.sendOkS("操作失败(" + q + ")背包空间不足", 3);
                                                                            cm.dispose();
                                                                        } else {
                                                                            if (q == -2) {
                                                                                cm.sendOkS("操作失败(" + q + ")数据库操作失败", 3);
                                                                                cm.dispose();
                                                                            } else {
                                                                                if (q < 1) {
                                                                                    cm.sendOkS("操作失败(" + q + ")", 3);
                                                                                } else {

                                                                                    cm.playerMessage(5, "[拍卖行]:操作成功，为您跳回拍卖界面。");
                                                                                    cm.dispose();
                                                                                    cm.openNpc(9900004, 32);
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        // cm.dispose();
                                                    } else {
                                                        if (sel_3 == 4) {
                                                            if (r.getAuctionState().getState() != 2) {
                                                                cm.sendOkS("不可操作的道具,道具状态为" + r.getAuctionState() + " ,只有已售的道具才能移除", 3);
                                                                cm.dispose();
                                                                return;
                                                            }
                                                            var d = cm.auction_deletePlayerSold();
                                                            if (d > -1) {
                                                                cm.playerMessage(5, "[拍卖行]:一键清理完毕。");
                                                                cm.dispose();
                                                                cm.openNpc(9900004, 32);
                                                            } else {
                                                                cm.sendOkS("清理出错(" + d + ")", 3);
                                                                cm.dispose();
                                                            }

                                                            // cm.dispose();
                                                            return;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (status == 5) {
                            sel_4 = s;
                            if (sel_0 == 21) {
                            } else {
                                if (sel_0 == 22) {
                                } else {
                                    if (sel_0 == 23) {
                                        if (sel_1 == 1) {
                                            var f = sl0items.get(sel_3);
                                            if (f == null || f.getQuantity() < 1) {
                                                cm.sendOkS("选择的道具不存在", 3);
                                                cm.dispose();
                                                return;
                                            }
                                            if (sel_4 < 1 || sel_4 > f.getQuantity()) {
                                                cm.sendOkS("存的道具数量有误", 3);
                                                cm.dispose();
                                                return;
                                            }
                                            var a = cm.auction_putIn(f, sel_4);
                                            if (a == -4) {
                                                cm.sendOkS("添加拍卖道具不存在", 3);
                                                cm.dispose();
                                            } else {
                                                if (a == -5) {
                                                    cm.sendOkS("限时道具不能添加", 3);
                                                    cm.dispose();
                                                } else {
                                                    if (a == -6) {
                                                        cm.sendOkS("添加拍卖道具的数量大于存在数量", 3);
                                                        cm.dispose();
                                                    } else {
                                                        if (a == -7) {
                                                            cm.sendOkS("锁定道具,不可交易的道具或一栏多个装备", 3);
                                                            cm.dispose();
                                                        } else {
                                                            if (a == -8) {
                                                                cm.sendOkS("被限制的物品", 3);
                                                                cm.dispose();
                                                            } else {
                                                                if (a > 0) {
                                                                    cm.playerMessage(5, "[拍卖行]:添加拍卖道具完毕，可以通过管理我的拍卖上架。");
                                                                    cm.dispose();
                                                                    cm.openNpc(9900004, 32);
                                                                } else {
                                                                    cm.sendOkS("添加拍卖道具失败，错误代码(" + a + ")", 3);
                                                                    cm.dispose();
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            // cm.dispose();
                                        } else {
                                            if (sel_1 == 2) {
                                                var r = cm.auction_findById(sel_2);
                                                if (r == null) {
                                                    cm.sendOkS("不可操作的道具,可能并不存在", 3);
                                                    cm.dispose();
                                                    return;
                                                }
                                                if (sel_3 == 2) {
                                                    if (r.getAuctionState().getState() != 0) {
                                                        cm.sendOkS("不可操作的道具,道具状态为" + r.getAuctionState() + " ,只有下架的道具才能上架", 3);
                                                        cm.dispose();
                                                        return;
                                                    }
                                                    var q = cm.auction_setPutaway(sel_2, sel_4);
                                                    if (q == -5) {
                                                        cm.sendOkS("操作失败(" + q + ")不存在的道具", 3);
                                                        cm.dispose();
                                                    } else {
                                                        if (q == -6) {
                                                            cm.sendOkS("操作失败(" + q + ")不可上架的状态", 3);
                                                            cm.dispose();
                                                        } else {
                                                            if (q == -2) {
                                                                cm.sendOkS("操作失败(" + q + ")数据库操作失败", 3);
                                                                cm.dispose();
                                                            } else {
                                                                if (q < 1) {
                                                                    cm.sendOkS("操作失败(" + q + ")", 3);
                                                                } else {
                                                                    cm.worldMessage(2, "[拍卖行信息] : 玩家[ " + cm.getChar().getName() + " ]在点券拍卖行上架物品[ " + cm.getItemName(r.getItem().getItemId()) + " ] ");//[ #t" + cm.getItemName() + "# ]  

                                                                    cm.GainPiot("拍卖物品数量", "1", 1);
                                                                    cm.playerMessage(5, "[拍卖行]:操作成功，为您跳回拍卖界面。");
                                                                    cm.dispose();
                                                                    cm.openNpc(9900004, 32);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    // cm.dispose();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if (status == 6) {
                                sel_5 = s;
                                if (sel_0 == 21) {
                                } else {
                                    if (sel_0 == 22) {
                                    } else {
                                        if (sel_0 == 23) {
                                        }
                                    }
                                }
                            } else {
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}

function showEquipState(a) {
    var b = "";
    if (a.getUpgradeSlots() > 0) {
        b += "#b 可升级次数:#r " + a.getUpgradeSlots() + "#k\r\n";
    }
    if (a.getLevel() > 0) {
        b += "#b 等级:#r " + a.getLevel() + "#k\r\n";
    }
    if (a.getStr() > 0) {
        b += "#b 力量:#r " + a.getStr() + "#k\r\n";
    }
    if (a.getDex() > 0) {
        b += "#b 敏捷:#r " + a.getDex() + "#k\r\n";
    }
    if (a.getInt() > 0) {
        b += "#b 智力:#r " + a.getInt() + "#k\r\n";
    }
    if (a.getLuk() > 0) {
        b += "#b 运气:#r " + a.getLuk() + "#k\r\n";
    }
    if (a.getHp() > 0) {
        b += "#b HP:#r " + a.getHp() + "#k\r\n";
    }
    if (a.getMp() > 0) {
        b += "#b MP:#r " + a.getMp() + "#k\r\n";
    }
    if (a.getWatk() > 0) {
        b += "#b 攻击力:#r " + a.getWatk() + "#k\r\n";
    }
    if (a.getMatk() > 0) {
        b += "#b 魔法力:#r " + a.getMatk() + "#k\r\n";
    }
    if (a.getWdef() > 0) {
        b += "#b 防御:#r " + a.getWdef() + "#k\r\n";
    }
    if (a.getMdef() > 0) {
        b += "#b 魔抗:#r " + a.getMdef() + "#k\r\n";
    }
    if (a.getAcc() > 0) {
        b += "#b 命中:#r " + a.getAcc() + "#k\r\n";
    }
    if (a.getAvoid() > 0) {
        b += "#b 回避:#r " + a.getAvoid() + "#k\r\n";
    }
    if (a.getHands() > 0) {
        b += "#b 手技:#r " + a.getHands() + "#k\r\n";
    }
    if (a.getSpeed() > 0) {
        b += "#b 移速:#r " + a.getSpeed() + "#k\r\n";
    }
    if (a.getJump() > 0) {
        b += "#b 跳跃:#r " + a.getJump() + "#k\r\n";
    }
    if (a.getViciousHammer() > 0) {
        b += "#b 金锤子强化次数:#r " + a.getViciousHammer() + "#k\r\n";
    }
    if (a.getItemEXP() > 0) {
        b += "#b 道具经验:#r " + a.getItemEXP() + "#k\r\n";
    }
    if (a.getDurability() > 0) {
        b += "#b 耐久:#r " + a.getDurability() + "#k\r\n";
    }
    if (a.getEnhance() > 0) {
        b += "#b 强化:#r " + a.getEnhance() + "#k\r\n";
    }
    if (a.getPotential1() > 0) {
        b += "#b 潜能1:#r " + a.getPotential1() + "#k\r\n";
    }
    if (a.getPotential2() > 0) {
        b += "#b 潜能2:#r " + a.getPotential2() + "#k\r\n";
    }
    if (a.getPotential3() > 0) {
        b += "#b 潜能3:#r " + a.getPotential3() + "#k\r\n";
    }
    if (a.getHpR() > 0) {
        b += "#b HP回复:#r " + a.getHpR() + "#k\r\n";
    }
    if (a.getMpR() > 0) {
        b += "#b MP回复:#r " + a.getMpR() + "#k\r\n";
    }
    if (a.getEquipLevel() > 0) {
        b += "#b 装备等级:#r " + a.getEquipLevel() + "#k\r\n";
    }
    return b;
}

