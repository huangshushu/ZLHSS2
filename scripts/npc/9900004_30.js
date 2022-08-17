/*
 ZEVMS冒险岛(079)游戏服务端
 作  者：小z
 联  系：71447500
 版本号：1
 点券拍卖行默认
 默认的信息，自行修改
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
var 金币兑换率 = 0;
function start() {
    action(1, 0, 0);
}

function action(k, e, s) {
    if (k == 0) {
        cm.dispose();
        return;

    }
    var Message = new Array(
            "拍卖市场可以上架和购买道具，便利了冒险家们之间的交易。",
			"购买拍卖行的道具需要先将点券换成交易点。",
            "交易点可以用点券按比列兑换。"
            );
    if (cm.getInventory(1).isFull()) {
        cm.说明文字("请保证 #b装备栏#k 至少有2个位置。");
        cm.dispose();
        return;
    } else if (cm.getInventory(2).isFull()) {
        cm.说明文字("请保证 #b消耗栏#k 至少有2个位置。");
        cm.dispose();
        return;
    } else if (cm.getInventory(3).isFull()) {
        cm.说明文字("请保证 #b设置栏#k 至少有2个位置。");
        cm.dispose();
        return;
    } else if (cm.getInventory(4).isFull()) {
        cm.说明文字("请保证 #b其他栏#k 至少有2个位置。");
        cm.dispose();
        return;
    } else if (cm.getInventory(5).isFull()) {
        cm.说明文字("请保证 #b特殊栏#k 至少有2个位置。");
        cm.dispose();
        return;
    }
    var MC = cm.getServerName();
    var 金币 = cm.判断金币();
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
        var pmsl = 1000;
        var
		j = "\r\n   " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 拍卖市场 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";

        j += "#n" + 蘑菇 + " 市场公告:#r" + Message[Math.floor(Math.random() * Message.length)] + "#k\r\n\r\n";

        j += "#n" + 蘑菇 + " [ 上架: #r" + b + "#k 下架: #r" + c + "#k 已售:#r " + h + "#k  容纳:#r" + (character_auctionItems == null ? 0 : character_auctionItems.size()) + " #k/#d " + pmsl + "#k ]\r\n";

        j += "#n" + 蘑菇 + " 交易点:#r " + (auctionPoint == null ? 0 : auctionPoint.getPoint()) + "#n#k\r\n";

        +"#n#k\r\n";

        j += "\t\t\t\t#b#L200#返回主界面#k#l\r\n";
        j += "\t\t\t\t#b#L22#浏览拍卖市场#l\r\n";
        j += "\t\t\t\t#b#L23#我的拍卖管理#l\r\n";
        j += "\t\t\t\t#b#L21#交易点券兑换#l\r\n";
        cm.sendSimple(j);
    } else {
        if (status == 1) {
            sel_0 = s;
            if (sel_0 == 200) {
                cm.dispose();
                cm.openNpc(9900004, 0);
            } else if (sel_0 == 21) {
                var j = "\r\n#n" + 蘑菇 + " 市场公告:#r" + Message[Math.floor(Math.random() * Message.length)] + "#k\r\n\r\n";
                j += "  请选择你接下来的操作；\r\n";
                j += "   #r比例:  1 点交易点 : " + 金币兑换率 + " 金币#k\r\n";
				j += "#b#L0#返回上一步#l\r\n";
                j += "#b#L1#金币兑换交易点#l\r\n";
                j += "#b#L2#交易点兑换金币#l\r\n";
                cm.sendSimple(j);
            } else {
                if (sel_0 == 22) {
                    /*
                     查看的类型
                     */
                    var j = "\r\n#n" + 蘑菇 + " 市场公告:#r" + Message[Math.floor(Math.random() * Message.length)] + "#k\r\n\r\n";
                    j += "  请选择你要浏览的道具类型；\r\n";
                    j += "#b#L0#返回上一步#l\r\n";
                    j += "#r#L1#装备#b道具类型#l\r\n";
                    j += "#r#L2#消耗#b道具类型#l\r\n";
                    j += "#r#L3#设置#b道具类型#l\r\n";
                    j += "#r#L4#其他#b道具类型#l\r\n";
                    j += "#r#L5#特殊#b道具类型#l\r\n";
                    cm.sendSimple(j);
                } else {
                    if (sel_0 == 23) {
                        /*
                         我的拍卖行
                         */
                        var j = "\r\n#n" + 蘑菇 + " 市场公告:#r" + Message[Math.floor(Math.random() * Message.length)] + "#k\r\n\r\n";

                        j += "  请选择你接下来的操作；\r\n";
                        j += "#b#L0#返回上一步#l\r\n";
                        j += "#b#L1#添加道具到拍卖行#l\r\n";
                        j += "#b#L2#管理我的拍卖市场#l\r\n";
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
                    /*
                     点券兑换交易点
                     */
                    cm.sendGetNumber("\r\n#n" + 蘑菇 + " 市场公告:#r" + Message[Math.floor(Math.random() * Message.length)] + "#k\r\n\r\n#b提示：你当前可以兑换 #r" + 点券 + "#k #b交易点\r\n提示：你当前可以兑换 #r" + (auctionPoint == null ? 0 : auctionPoint.getPoint()) + "#k #b点券#d\r\n\r\n#k请输入你要兑换的交易点数量:#k", 1, 1, 2100000000);
                } else {
                    if (sel_0 == 22) {
                        var g = cm.auction_findByItemType(sel_1);
                        if (g == null || g.size() < 1) {
                            cm.playerMessage(5, "该分类下还暂时还没有商品哦。");
                            cm.dispose();
                            cm.openNpc(9900004, 30);
                            return;
                        }
						/*
						显示拍卖物品
                        */
                        var j = "\r\n   " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 拍卖市场 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
						j += "#b#L0# 返回上一步#l\r\n";
                        for (var n = 0; n < g.size(); n++) {
                            var r = g.get(n);
                            var zhuangbei = cm.getItemName(r.getItem().getItemId());
							var shuliang = ""+r.getQuantity()+"";
							if(zhuangbei!=null){
								j += "#b#L" + r.getId() + "# " + zhuangbei + " ";
								for (var zev = 21 - zhuangbei.getBytes().length; zev > 0; zev--) {
									j += " ";
								}
								j += "数量:#r" + shuliang + " #k ";
								for (var zev1 = 4 - shuliang.length; zev1 > 0; zev1--) {
									j += " ";
								}
								j += "#b价格:#r" + r.getPrice() + " #k#l\r\n";
							}
                        }
                        cm.sendSimple(j);
                    } else {
                        if (sel_0 == 23) {
                            if (sel_1 == 1) {
                                if (character_auctionItems != null) {
                                    if (character_auctionItems.size() >= pmsl) {
                                        cm.sendOkS("添加拍卖道具已达上限 #r" + character_auctionItems.size() + " #k / " + pmsl + "，不可存储。", 3);
                                        cm.dispose();
                                        return;
                                    }
                                }
                                /*
                                 查看的类型
                                 */
                                var j = "\r\n#n" + 蘑菇 + " 市场公告:#r" + Message[Math.floor(Math.random() * Message.length)] + "#k\r\n\r\n";
                                j += "  请选择你要添加的道具类型；\r\n";
                                j += "#b#L0#返回上一步#l\r\n";
                                j += "#r#L1#装备#b道具类型#l\r\n";
                                j += "#r#L2#消耗#b道具类型#l\r\n";
                                j += "#r#L3#设置#b道具类型#l\r\n";
                                j += "#r#L4#其他#b道具类型#l\r\n";
                                j += "#r#L5#特殊#b道具类型#l\r\n";
                                cm.sendSimple(j);
                            } else {
                                if (sel_1 == 2) {
                                    var j = "\r\n#n" + 蘑菇 + " 市场公告:#r" + Message[Math.floor(Math.random() * Message.length)] + "#k\r\n\r\n";
                                    j += "#b#L0#返回上一步#l#k\r\n";
                                    j += "#b#L10001#移除所有已售道具#l#k\r\n";
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
                            if (sel_2 * 金币兑换率 > cm.判断金币()) {
                                cm.sendOkS("点券不足:兑换" + sel_2 + "交易点需要" + sel_2 * 金币兑换率 + "点券", 3);
                                cm.dispose();
                                return;
                            }
                            var o = cm.auction_addPoint(sel_2);
                            if (o > -1) {
                                cm.收金币(sel_2 * 金币兑换率);
                                cm.个人存档();
                                cm.playerMessage(5, "[拍卖行]:恭喜你兑换交易点成功。");
                                cm.dispose();
                                cm.openNpc(9900004, 30);
                            } else {
                                cm.sendOkS("兑换失败(" + o + ")", 3);
                            }
                        } else {
                            if (sel_1 == 2) {
                                var l = cm.auction_getAuctionPoint();
                                if (l == null || l.getPoint() < 1 || l.getPoint() < sel_2) {
                                    cm.sendOkS("不够兑换。", 3);
                                    cm.dispose();
                                    return;
                                }
                                var o = cm.auction_addPoint(-sel_2);
                                if (o > -1) {
                                    cm.给点券(sel_2 * 金币兑换率);
                                    cm.playerMessage(5, "[拍卖行]:恭喜你兑换金币成功。");
                                    cm.个人存档();
                                    cm.dispose();
                                    cm.openNpc(9900004, 30);
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
                                //cm.sendOkS("不可操作的道具,可能并不存在。1", 3);
                                cm.dispose();
								cm.openNpc(9900004, 30);
                                return;
                            }
                            var j = "\r\n   " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 拍卖市场 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
                            j += " \t道具 #i" + r.getItem().getItemId() + "# \r\n";
						    j += " \t道具 #b#z" + r.getItem().getItemId() + "##k\r\n";
							j += " \t价格 #b" + r.getPrice() + "#k\r\n";
                            j += " \t数量 #b" + r.getQuantity() + "#k\r\n";
                            j += " \t卖家 #b" + r.getCharacterName() + "#k\r\n";
                            j += " \t状态 #b" + (r.getAuctionState().getState() == 0 ? "#k" : r.getAuctionState().getState() == 1 ? "#r" : "#d") + r.getAuctionState() + (r.getAuctionState().getState() == 2 ? "[" + r.getBuyerName() + "]" : "") + "#k\r\n\r\n";
                            




                            var m = parseInt(r.getItem().getItemId() / 1e6);
                            if (m == 1) {
                                j += showEquipState(r.getItem());
                            }
                            j += "\r\n\r\n";

                            j += "    #b#L1#" + 箭头 + "购买#l#k    #b#L0#" + 箭头 + "返回#l#k\r\n";

                            cm.sendSimple(j);
                        } else {
                            if (sel_0 == 23) {
                                if (sel_1 == 1) {
                                    sl0items = cm.getItemsByType(sel_2);
                                    if (sl0items == null || sl0items.size() < 1) {
                                        cm.playerMessage(5, "[拍卖行]:选择的背包里没有道具。");
                                        cm.dispose();
                                        cm.openNpc(9900004, 30);
                                        return;
                                    }
                                    var j = "#b请选择你要添加的道具；#k\r\n\r\n";
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
                                                cm.openNpc(9900004, 30);
                                            } else {
                                                cm.sendOkS("清理出错(" + d + ")", 3);
                                                cm.dispose();
                                            }

                                            return;
                                        }
                                        var r = cm.auction_findById(sel_2);
                                        if (sel_2 == 0) {
                                            cm.dispose();
                                            cm.openNpc(9900004, 30);
											return;
                                        } else if (r == null) {
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
                                    cm.sendOkS("不可操作的道具,可能已不存在.2", 3);
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
                                                cm.sendOkS("操作失败(" + q + ")没有交易点", 3);
                                                cm.dispose();
                                            } else {
                                                if (q == -8) {
                                                    cm.sendOkS("操作失败(" + q + ")交易点不足", 3);
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
                                                                cm.个人存档();
                                                                //cm.worldMessage(2, "[拍卖行信息] : 玩家[ " + cm.getChar().getName() + " ]成功以[ " + r.getPrice() + " ]的价格购买了物品[ " + cm.getItemName(r.getItem().getItemId()) + " ] ");
                                                                //cm.私聊输出信息("[拍卖行出售信息]\r\n拍卖类型：点券拍卖行\r\n售出物品：" + cm.getItemName(r.getItem().getItemId()) + "\r\n物品卖家：" + r.getCharacterName() + "\r\n物品买家：" + cm.getChar().getName() + "\r\n成交价格：" + r.getPrice() + "", "" + cm.账号ID取绑定QQ(cm.角色名字取账号ID(r.getCharacterName())) + "");
                                                                cm.playerMessage(5, "[拍卖行]:操作成功，为您跳回拍卖界面");
                                                                cm.dispose();
                                                                cm.openNpc(9900004, 30);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }else{
									cm.dispose();
									cm.openNpc(9900004, 30);
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
                                                cm.sendOkS("不可操作的道具,可能并不存在.3", 3);
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
                                                                    cm.个人存档();
                                                                    cm.playerMessage(5, "[拍卖行]:操作成功，为您跳回拍卖界面。");
                                                                    cm.dispose();
                                                                    cm.openNpc(9900004, 30);
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
                                                                                    cm.个人存档();
                                                                                    cm.playerMessage(5, "[拍卖行]:操作成功，为您跳回拍卖界面。");
                                                                                    cm.dispose();
                                                                                    cm.openNpc(9900004, 30);
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
                                                                cm.个人存档();
                                                                cm.playerMessage(5, "[拍卖行]:一键清理完毕。");
                                                                cm.dispose();
                                                                cm.openNpc(9900004, 3);
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
                                                                    cm.个人存档();
                                                                    cm.playerMessage(5, "[拍卖行]:添加拍卖道具完毕，可以通过管理我的拍卖上架。");
                                                                    cm.dispose();
                                                                    cm.openNpc(9900004, 30);
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
                                                                    //cm.worldMessage(2, "[拍卖行信息] : 玩家[ " + cm.getChar().getName() + " ]在点券拍卖行上架物品[ " + cm.getItemName(r.getItem().getItemId()) + " ] ");//[ #t" + cm.getItemName() + "# ]  
                                                                    cm.个人存档();
                                                                    cm.playerMessage(5, "[拍卖行]:操作成功，为您跳回拍卖界面。");
                                                                    cm.dispose();
                                                                    cm.openNpc(9900004, 30);
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
        b += "#b \t可升级次数:#r " + a.getUpgradeSlots() + "#k\r\n";
    }
    if (a.getLevel() > 0) {
        b += "#b \t等级:#r " + a.getLevel() + "#k\r\n";
    }
    if (a.getStr() > 0) {
        b += "#b \t力量:#r " + a.getStr() + "#k\r\n";
    }
    if (a.getDex() > 0) {
        b += "#b \t敏捷:#r " + a.getDex() + "#k\r\n";
    }
    if (a.getInt() > 0) {
        b += "#b \t智力:#r " + a.getInt() + "#k\r\n";
    }
    if (a.getLuk() > 0) {
        b += "#b \t运气:#r " + a.getLuk() + "#k\r\n";
    }
    if (a.getHp() > 0) {
        b += "#b \tHP:#r " + a.getHp() + "#k\r\n";
    }
    if (a.getMp() > 0) {
        b += "#b \tMP:#r " + a.getMp() + "#k\r\n";
    }
    if (a.getWatk() > 0) {
        b += "#b \t攻击力:#r " + a.getWatk() + "#k\r\n";
    }
    if (a.getMatk() > 0) {
        b += "#b \t魔法力:#r " + a.getMatk() + "#k\r\n";
    }
    if (a.getWdef() > 0) {
        b += "#b \t防御:#r " + a.getWdef() + "#k\r\n";
    }
    if (a.getMdef() > 0) {
        b += "#b \t魔抗:#r " + a.getMdef() + "#k\r\n";
    }
    if (a.getAcc() > 0) {
        b += "#b \t命中:#r " + a.getAcc() + "#k\r\n";
    }
    if (a.getAvoid() > 0) {
        b += "#b \t回避:#r " + a.getAvoid() + "#k\r\n";
    }
    if (a.getHands() > 0) {
        b += "#b \t手技:#r " + a.getHands() + "#k\r\n";
    }
    if (a.getSpeed() > 0) {
        b += "#b \t移速:#r " + a.getSpeed() + "#k\r\n";
    }
    if (a.getJump() > 0) {
        b += "#b \t跳跃:#r " + a.getJump() + "#k\r\n";
    }
    if (a.getViciousHammer() > 0) {
        b += "#b \t金锤子强化次数:#r " + a.getViciousHammer() + "#k\r\n";
    }
    if (a.getItemEXP() > 0) {
        b += "#b \t道具经验:#r " + a.getItemEXP() + "#k\r\n";
    }
   /* if (a.getDurability() > 0) {
        b += "#b \t耐久:#r " + a.getDurability() + "#k\r\n";
    }
    if (a.getEnhance() > 0) {
        b += "#b \t强化:#r " + a.getEnhance() + "#k\r\n";
    }
    if (a.getPotential1() > 0) {
        b += "#b \t潜能1:#r " + a.getPotential1() + "#k\r\n";
    }
    if (a.getPotential2() > 0) {
        b += "#b \t潜能2:#r " + a.getPotential2() + "#k\r\n";
    }
    if (a.getPotential3() > 0) {
        b += "#b \t潜能3:#r " + a.getPotential3() + "#k\r\n";
    }*/
    if (a.getMpR() > 0) {
        b += "#b \tMP回复:#r " + a.getMpR() + "#k\r\n";
    }
    if (a.getEquipLevel() > 0) {
        b += "#b \t装备等级:#r " + a.getEquipLevel() + "#k\r\n";
    }
	if (a.getMpR() >= 0) {
        b += "#b \t宝石镶嵌:#r " + a.getMpR() + "#k\r\n";
    }
	if (a.getDaKongFuMo() != "") {
		 b += "#b \t附魔效果:#r " + cm.显示附魔效果(a.getDaKongFuMo()) + "#k\r\n";
	}
    return b;
}

