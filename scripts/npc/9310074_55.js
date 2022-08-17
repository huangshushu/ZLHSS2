/*
 * 脚本类型: cm
 * 脚本用途: 点卷中介
 * 脚本作者: 故事丶
 * 制作时间: 2014/12/18
 */


//【配置区】-------------------------------------------
//支持兌換的物品列表
var exchangeItems = [2290011,2290021,2290023,2290031,2290042,2290049,2290061,2290074,2290084,2290083,2290107,2290118,2290133];
var exchangeRatio = 2;//物品兑换比例
var exchangeToItemId= 2028009;//物品兑换目标道具ID
//-----------------------------------------------------

var chr = null;



var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
var dds;

function start() {
	chr = cm.getPlayer();
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendOk("如果需要点卷中介服务在来找我吧。");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            // cm.getChar().gainCashDD(+1000);
            var gsjb = "";
            gsjb = " #r 所有的技能书2个兑换1个随机#v2028009#\r\n";
            gsjb += "                                                             #L17##r技能书列表\r\n#k#v2290011##v2290021##v2290023##v2290031##v2290042##v2290061##v2290074##v2290084##v2290083##v2290107##v2290118##v2290133##l\r\n";

            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.getPlayer().getCSPoints(0) / 500 == 0) {
                    cm.sendOk("您的帐户点卷不足无法兑换国庆纪念币。");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.sendGetNumber("请输入#r点卷#k兑换#b#z4000463##k的数量:\r\n#b比例 - (#r500 = 1#b)\r\n你的账户信息 - \r\n    点卷数量: #r" +
					cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) / 500);

                }

            } else if (selection == 25) {
                if (cm.haveItem(4002002) == 0) {
                    cm.sendOk("你的物品不足兑换.");
                    status = -1;
                } else {
                    beauty = 25
                        cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 5#b)\r\n  当前数量: #v4002002# × #c4002002# 个#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 17) {
				var _totalCount = 0;
				for(var i =0;i<exchangeItems.length;i++){
					_totalCount+= chr.getItemQuantity(exchangeItems[i], false);
				}
				if (_totalCount < exchangeRatio) {
					cm.sendOk("你的物品不足兑换.");
					status = -1;
				} else {
					beauty = 17;
					var say = "";
					say += "请输入数量:\r\n#b比例 - (#r2材料 = 1物品#b)材料如下：\r\n";
					for(var i =0;i<exchangeItems.length;i++){
						say+= "#v"+exchangeItems[i]+"#";
					}
					say += "\r\n";
					say += "共"+_totalCount+"个材料\r\n";
					var maxCount = Math.floor(_totalCount/exchangeRatio);//计算最大兑换数量
					cm.sendGetNumber(say, 1, 1, maxCount);
				}

            } else if (selection == 20) {
                if (cm.haveItem(4000000) == 0) {
                    cm.sendOk("你的物品不足兑换.");
                    status = -1;
                } else {
                    beauty = 20
                        cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1000#b)\r\n  当前数量: #c4000000# 个#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 21) {
                if (cm.haveItem(4000016) == 0) {
                    cm.sendOk("你的物品不足兑换.");
                    status = -1;
                } else {
                    beauty = 21
                        cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1000#b)\r\n  当前数量: #c4000016# 个#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 22) {
                if (cm.haveItem(4000010) == 0) {
                    cm.sendOk("你的物品不足兑换.");
                    status = -1;
                } else {
                    beauty = 22
                        cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1000#b)\r\n  当前数量: #c4000010# 个#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 23) {
                if (cm.haveItem(4000004) == 0) {
                    cm.sendOk("你的物品不足兑换.");
                    status = -1;
                } else {
                    beauty = 23
                        cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1000#b)\r\n  当前数量: #c4000004# 个#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 24) {
                if (cm.haveItem(4000011) == 0) {
                    cm.sendOk("你的物品不足兑换.");
                    status = -1;
                } else {
                    beauty = 24
                        cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1000#b)\r\n  当前数量: #c4000011# 个#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 25) {
                if (cm.haveItem(4002002) == 0) {
                    cm.sendOk("你的物品不足兑换.");
                    status = -1;
                } else {
                    beauty = 25
                        cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1000#b)\r\n  当前数量: #c4002002# 个#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 26) {
                if (cm.haveItem(4000003) == 0) {
                    cm.sendOk("你的物品不足兑换.");
                    status = -1;
                } else {
                    beauty = 26
                        cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1000#b)\r\n  当前数量: #c4000003# 个#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 27) {
                if (cm.haveItem(4000012) == 0) {
                    cm.sendOk("你的物品不足兑换.");
                    status = -1;
                } else {
                    beauty = 27
                        cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1000#b)\r\n  当前数量: #c4000012# 个#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 30) {
                if (cm.haveItem(4031196) == 0) {
                    cm.sendOk("你的物品不足兑换.");
                    status = -1;
                } else {
                    beauty = 30
                        cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前数量: #c4031196# 个#r \r\n", 1, 1, 100000);
                }

            }

        } else if (status == 2) {
            if (beauty == 1) {
                if (cm.haveItem(4000040, selection)) {
                    cm.gainItem(4000040, -selection);
                    cm.sendOk("兑换成功。 [#r" + selection + "#k] 兑换了:[#r" + (selection * 300000) + "#k] 金币。");
                    cm.gainMeso(+300000 * selection);
                    cm.worldMessage(6, "玩家：[" + cm.getName() + "]努力搬砖，在柯南那里兑换了：" + (selection * 300000) + " 金币。");
                    cm.dispose();
                } else {
                    cm.sendOk("您的输入的数量错误，无法兑换。");
                    cm.dispose()

                }
            }
            if (beauty == 17) {
                var _totalCount = 0;
				for(var i =0;i<exchangeItems.length;i++){
					_totalCount+= chr.getItemQuantity(exchangeItems[i], false);
				}
				
				var maxCount = Math.floor(_totalCount/exchangeRatio);//计算最大兑换数量
				
				if(selection<=0){
					cm.sendOk("#r抱歉，请输入正确的兑换数量!");
					cm.dispose();
					return;
				}
				
				if(selection>maxCount){
					cm.sendOk("#r抱歉，你的材料不足，您最多只能兑换：#b"+maxCount+"#r个物品。");
					cm.dispose();
					return;
				}
				if (_totalCount >= exchangeRatio) {
					
					//扣减物品
					var needCount = selection * exchangeRatio;
					for(var i =0;i<exchangeItems.length;i++){
						var _thisItemCount = chr.getItemQuantity(exchangeItems[i], false);
						if(_thisItemCount>0){
							if(_thisItemCount>= needCount){
								cm.gainItem(exchangeItems[i],-needCount);
								needCount =0;
								break;
							}else{
								cm.gainItem(exchangeItems[i],-_thisItemCount);
								needCount-=_thisItemCount;
							}
						}
					}
					
					cm.gainItem(exchangeToItemId, selection);
					cm.sendOk("兑换成功。共兑换了:"+selection+" #v"+exchangeToItemId+"#随机进阶技能书。");
					cm.worldMessage(6, "玩家：[" + cm.getName() + "]一键回收了进阶技能书每2个换 1个随机进阶技能书。");
					cm.dispose();
					
				} else {
					cm.sendOk("您的物品不足，无法兑换。");
					cm.dispose()
				}
            }
            if (beauty == 20) {
                if (cm.haveItem(4000000, selection)) {
                    cm.gainItem(4000000, -selection);
                    cm.gainMeso(+1000 * selection);
                    cm.sendOk("兑换成功。 [#r" + selection + "#k] 共兑换了:[#r" + (selection * 1000) + "#k] 金币。");
                    cm.worldMessage(6, "玩家：[" + cm.getName() + "]努力搬砖，在柯南那里兑换了：" + (selection * 1000) + " 金币。");
                    cm.dispose();
                } else {
                    cm.sendOk("您的输入的数量错误，无法兑换。");
                    cm.dispose()
                }
            }
            if (beauty == 21) {
                if (cm.haveItem(4000016, selection)) {
                    cm.gainItem(4000016, -selection);
                    cm.gainMeso(+1000 * selection);
                    cm.sendOk("兑换成功。 [#r" + selection + "#k] 共兑换了:[#r" + (selection * 1000) + "#k] 金币。");
                    cm.worldMessage(6, "玩家：[" + cm.getName() + "]努力搬砖，在柯南那里兑换了：" + (selection * 1000) + " 金币。");
                    cm.dispose();
                } else {
                    cm.sendOk("您的输入的数量错误，无法兑换。");
                    cm.dispose()
                }
            }
            if (beauty == 22) {
                if (cm.haveItem(4000010, selection)) {
                    cm.gainItem(4000010, -selection);
                    cm.gainMeso(+1000 * selection);
                    cm.sendOk("兑换成功。 [#r" + selection + "#k] 共兑换了:[#r" + (selection * 1000) + "#k] 金币。");
                    cm.worldMessage(6, "玩家：[" + cm.getName() + "]努力搬砖，在柯南那里兑换了：" + (selection * 1000) + " 金币。");
                    cm.dispose();
                } else {
                    cm.sendOk("您的输入的数量错误，无法兑换。");
                    cm.dispose()
                }
            }
            if (beauty == 23) {
                if (cm.haveItem(4000004, selection)) {
                    cm.gainItem(4000004, -selection);
                    cm.gainMeso(+1000 * selection);
                    cm.sendOk("兑换成功。 [#r" + selection + "#k] 共兑换了:[#r" + (selection * 1000) + "#k] 金币。");
                    cm.worldMessage(6, "玩家：[" + cm.getName() + "]努力搬砖，在柯南那里兑换了：" + (selection * 1000) + " 金币。");
                    cm.dispose();
                } else {
                    cm.sendOk("您的输入的数量错误，无法兑换。");
                    cm.dispose()
                }
            }
            if (beauty == 24) {
                if (cm.haveItem(4002003, selection)) {
                    cm.gainItem(4002003, -selection);
                    cm.gainNX(+100 * selection);
                    cm.sendOk("兑换成功。 [#r" + selection + "#k] 共兑换了:[#r" + (selection * 100) + "#k] 点卷。");
                    cm.worldMessage(6, "玩家：[" + cm.getName() + "]努力搬砖，在柯南那里兑换了：" + (selection * 100) + " 点卷。");
                    cm.dispose();
                } else {
                    cm.sendOk("您的输入的数量错误，无法兑换。");
                    cm.dispose()
                }
            }
            if (beauty == 25) {
                if (cm.haveItem(4002002, selection)) {
                    cm.gainItem(4002002, -selection);
                    cm.gainNX(+100 * selection);
                    cm.sendOk("兑换成功。 [#r" + selection + "#k] 共兑换了:[#r" + (selection * 100) + "#k] 点卷。");
                    cm.worldMessage(6, "玩家：[" + cm.getName() + "]努力搬砖，在柯南那里兑换了：" + (selection * 100) + " 点卷。");
                    cm.dispose();
                } else {
                    cm.sendOk("您的输入的数量错误，无法兑换。");
                    cm.dispose()
                }
            }
            if (beauty == 26) {
                if (cm.haveItem(4000003, selection)) {
                    cm.gainItem(4000003, -selection);
                    cm.gainMeso(+100 * selection);
                    cm.sendOk("兑换成功。 [#r" + selection + "#k] 共兑换了:[#r" + (selection * 400) + "#k] 金币。");
                    cm.worldMessage(6, "玩家：[" + cm.getName() + "]努力搬砖，在柯南那里兑换了：" + (selection * 400) + " 金币。");
                    cm.dispose();
                } else {
                    cm.sendOk("您的输入的数量错误，无法兑换。");
                    cm.dispose()
                }
            }
            if (beauty == 27) {
                if (cm.haveItem(4000012, selection)) {
                    cm.gainItem(4000012, -selection);
                    cm.gainMeso(+400 * selection);
                    cm.sendOk("兑换成功。 [#r" + selection + "#k] 共兑换了:[#r" + (selection * 400) + "#k] 金币。");
                    cm.worldMessage(6, "玩家：[" + cm.getName() + "]努力搬砖，在柯南那里兑换了：" + (selection * 400) + " 金币。");
                    cm.dispose();
                } else {
                    cm.sendOk("您的输入的数量错误，无法兑换。");
                    cm.dispose()
                }
            }
            if (beauty == 30) {
                if (cm.haveItem(4031196, selection)) {
                    cm.gainItem(4031196, -selection);
                    cm.gainItem(4001322, selection);
                    cm.sendOk("兑换成功。 [#r" + selection + "#k] 共兑换了:[#r" + (selection) + "#k]个 蓝宝石");
                    cm.dispose();
                } else {
                    cm.sendOk("您的输入的数量错误，无法兑换。");
                    cm.dispose()
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}