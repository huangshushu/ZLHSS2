/*
	制作：dgms
	功能：花园系统
	时间：2017年01月05日
*/
var status = 0;
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var Icon = Array(
	Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
	Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
	Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
	Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
	Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
	Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
	Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
	Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
	Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
	Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
	Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
	Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
	Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
	Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
	Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
	Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
	Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
	Array("条件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
	Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
	Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
	Array("钻石", "#fUI/NameTag/medal/556/w#"),
	Array("钻石", "#fUI/NameTag/medal/556/c#"),
	Array("钻石", "#fUI/NameTag/medal/556/e#"),
	Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
	Array("蓝点", "#fUI/piggyBarMinigame/crunch/1#"),
	Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
	Array("拇指", "#fUI/NameTag/medal/10/w#"),
	Array("拇指", "#fUI/NameTag/medal/10/c#"),
	Array("拇指", "#fUI/NameTag/medal/10/e#"),
	Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
	Array("失败", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
	Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
	Array("蓝星", "#fEffect/CharacterEff/1003393/1/0#"),
	Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
	Array("蓝星", "#fEffect/CharacterEff/1003393/0/0#"),
	Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
	Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
	Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
	Array("金菇", "#fUI/NameTag/medal/74/w#"),
	Array("金菇", "#fUI/NameTag/medal/74/c#"),
	Array("金菇", "#fUI/NameTag/medal/74/e#"),
	Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
	Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
	Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
	Array("胡子", "#fUI/NameTag/124/w#"),
	Array("胡子", "#fUI/NameTag/124/c#"),
	Array("胡子", "#fUI/NameTag/124/e#"),
	Array("帽子", "#fUI/NameTag/nick/312/w#"),
	Array("帽子", "#fUI/NameTag/nick/312/c#"),
	Array("帽子", "#fUI/NameTag/nick/312/e#"),
	Array("圣诞", "#fUI/NameTag/medal/728/w#"),
	Array("圣诞", "#fUI/NameTag/medal/728/c#"),
	Array("圣诞", "#fUI/NameTag/medal/728/e#"),
	Array("红钻", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
	Array("王冠", "#fUI/NameTag/medal/468/w#"),
	Array("王冠", "#fUI/NameTag/medal/468/c#"),
	Array("王冠", "#fUI/NameTag/medal/468/e#"),
	Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
	Array("幽灵", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
	Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#"),
	Array("幽灵", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
	Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#")
);
var gardenData = null;
var gardenFlowerPot = null;
var typed = -1;
var operationId = 0;
var buyFlower = null;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	if (typed == 5 && mode == 0) {
		status = 2;
		typed = 0;
	}
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		/* 花园信息 */
		gardenData = getGardenInfo();
		text = "\t\t　　#b " + Icon[73][1] + " #r#e 花园中心 #n#b " + Icon[75][1] + " #k\r\n\r\n";
		text += Icon[62][1];
		for (var i = 0; i <= 97; i++) {
			text += Icon[63][1];
		};
		text += Icon[64][1] + "\r\n\r\n";

		text += "　　" + Icon[15][1] + " #b我的花园等级 [ #r" + format(" ", 5, gardenData['level'].toString()) + "#b ]　　　　　　#r 冒 欢\r\n";
		text += "　　" + Icon[15][1] + " #b我的活力信息 [ #r" + format(" ", 5, cm.getPlayerEnergy().toString()) + "#b ] 　　　　　　　#r险 迎\r\n";
		text += "　　" + Icon[15][1] + " #b我的花园经验 [ #r" + format(" ", 5, (gardenData['exp'] + "/" + calcLevelUp(gardenData['level'])).toString()) + "#b ]　　　　　　#r 岛 你\r\n\r\n";


		text += Icon[62][1];
		for (var i = 0; i <= 97; i++) {
			text += Icon[63][1];
		};
		text += Icon[64][1] + "\r\n";
		text += "#r#L0#" + Icon[4][1] + " 照顾花朵 " + Icon[4][1] + "#l #L1#" + Icon[4][1] + " 扩建 " + Icon[4][1] + "#l #L2#" + Icon[4][1] + " 购买种子 " + Icon[4][1] + "#l\r\n ";

		cm.sendSimpleS(text, 2);
	} else if (status == 1) {
		if (selection == -1 && mode == 0)
			selection = typed;
		if (selection == -1 && mode != 0)
			selection = 0;
		switch (selection) {
			case 0:
				typed = 0;
				gardenFlowerPot = getFlowerPot();
				var currentTimestamp = java.lang.System.currentTimeMillis();
				var text = "\t\t\t\t\t#d#e★ 我的花园 ★#n#k\r\n";
				for (var key in gardenFlowerPot) {
					var seedid = gardenFlowerPot[key]['seedid'];
					var flowerpotid = gardenFlowerPot[key]['id'];
					var expiration = gardenFlowerPot[key]['expiration'];
					if (seedid != 0) {
						var tips = "";
						var seconds = (expiration - currentTimestamp) / 1000;
						if (seconds <= 0)
							tips = "#g作物已经成熟#k";
						else {
							var DHM = toDHM(seconds);
							tips = "#b剩余 " + DHM[0] + "天" + DHM[1] + "小时" + DHM[2] + "分";
						}
						text += "#L" + flowerpotid + "#" + icon1 + " #r[#t" + seedid + "#]#k " + tips + "#l\r\n";
					} else {
						text += "#L" + flowerpotid + "#" + icon1 + " #b[这是一个空的花盆，点击栽种]\r\n";
					}
				}
				cm.sendOkS(text, 2);
				break;
			case 1:
				typed = 1;
				cm.sendYesNo("扩建花园需要#r2000W#k，扩建之后将会多出一个花盆，是否扩建？");
				break;
			case 2:
				typed = 2;
				var text = "#d#e以下是您的等级可以购买的种子：#n#k\r\n";
				var flowers = getFlowers();
				for (var key in flowers) {
					var tips = flowers[key][1] + "#n#b级";
					if (flowers[key][1] > gardenData['level'])
						tips = "(需要" + flowers[key][1] + "级)#n#b";
					text += "#b#L" + key + "##v" + flowers[key][0] + "# #t" + flowers[key][0] + "#种子 #r#e" + tips + " (产量：" + flowers[key][4] + "~" + flowers[key][5] + ")#l\r\n";
				}
				cm.sendOkS(text, 2);
				break;
		}
	} else if (status == 2) {
		if (typed == 0) {
			var currentTimestamp = java.lang.System.currentTimeMillis();
			var flowerpotid = selection;
			operationId = flowerpotid;
			var seedid = gardenFlowerPot[flowerpotid]['seedid'];
			var expiration = gardenFlowerPot[flowerpotid]['expiration'];
			var text = "\t\t\t\t\t#d#e★ 我的花园 ★#n#k\r\n";
			if (seedid != 0 && seedid != -1) {
				var seconds = (expiration - currentTimestamp) / 1000;
				var flag = false;
				var tips = '';
				if (seconds <= 0) {
					flag = true;
					var tips = "#g作物已经成熟，可以采摘#k";
				} else {
					var DHM = toDHM(seconds);
					tips = "#b剩余 " + DHM[0] + "天" + DHM[1] + "小时" + DHM[2] + "分#k";
				}
				text += "#r#t" + seedid + "##k\r\n";
				text += tips + "\r\n";
				if (!flag)
					text += "#b#L0#" + icon2 + "浇水#l\t#L1#" + icon2 + "施肥#l\t#L2#" + icon2 + "挖除#l";
				else
					text += "#b#L4#" + icon2 + "采摘果实#l\t#L2#" + icon2 + "挖除#l";
				cm.sendOkS(text, 2);
			} else {
				text += "#r这是一个空的花盆，您可以进行栽种。\r\n";
				text += "#b#L5#" + icon2 + "栽种#l";
				cm.sendOkS(text, 2);
			}
		} else if (typed == 1) {
			status -= 2;
			if (cm.getMeso() >= 20000000) {
				if (addFlowerPot()) {
					cm.gainMeso(-20000000);
					cm.sendOkS("扩建成功！\r\n#L0##b" + icon2 + "点我返回#l", 2);
				} else {
					cm.sendOkS("扩建失败！您的等级不足或花盆数量已达到最大值，无法继续扩建，请先提升花园等级。\r\n#L0##b" + icon2 + "点我返回#l", 2);
				}
			} else {
				cm.sendOkS("您没有那么多游戏币！\r\n#L0##b" + icon2 + "点我返回#l", 2);
			}
		} else if (typed == 2) {
			var flower = getFlowers();
			flower = flower[selection];
			buyFlower = flower;
			var ripeningTime = flower[3] * 3600;
			var DHM = toDHM(ripeningTime);
			var text = "\t\t\t\t\t#d#e★ 种子信息 ★#n#k\r\n";
			text += icon3 + "#r品种：#b#v" + flower[0] + "##t" + flower[0] + "#种子\r\n";
			text += icon3 + "#r产量：#b" + flower[4] + "~" + flower[5] + "\r\n";
			text += icon3 + "#r单价：#b" + flower[2] + " 游戏币\r\n";
			text += icon3 + "#r成熟时间：#b" + DHM[0] + "天" + DHM[1] + "小时" + DHM[2] + "分#k\r\n\r\n";
			text += icon3 + "#d#e请输入你要购买的数量：#n#k\r\n";
			cm.sendGetNumber(text, 0, 1, 100);
			//cm.sendYesNo("您是否要花费#r"+flower[2]+"#b游戏币#k购买#b#t"+flower[0]+"#种子#k");
		}
	} else if (status == 3) {
		if (typed == 2) {
			status -= 3;
			var quantity = selection;
			var cost = buyFlower[2] * quantity;
			if (gardenData['level'] < buyFlower[1]) {
				cm.sendOkS("您的花园等级不足，无法购买该种子。\r\n#L0##b" + icon2 + "点我返回#l", 2);
			} else
				if (cm.getMeso() >= cost) {
					cm.gainMeso(-cost);
					gainSeed(buyFlower[0], quantity);
					cm.sendOkS("购买成功！\r\n#L0##b" + icon2 + "点我返回#l", 2);
				} else {
					cm.sendOkS("游戏币不足，购买失败！\r\n#L0##b" + icon2 + "点我返回#l", 2);
				}
		} else {
			switch (selection) {
				//浇水操作
				case 0:
					status -= 3;
					if (cm.getBossLog("花园浇水" + operationId) > 0) {
						cm.sendOkS("啊，好像浇过水了，不能拔苗助长！\r\n#L0##b" + icon2 + "点我返回#l", 2);
					} else {
						if (cm.getPlayerEnergy() > 10) {
							cm.setBossLog("花园浇水" + operationId);
							cm.gainPlayerEnergy(-10);
							Operations(operationId, 0);
							cm.getPlayer().dropMessage(6, "消耗了10点活力，缩短了1小时成长时间。");
							cm.sendOkS("好开心，花儿又长大了一点！\r\n#L0##b" + icon2 + "点我返回#l", 2);
						} else {
							cm.sendOkS("糟糕了，没有活力了！\r\n#L0##b" + icon2 + "点我返回#l", 2);
						}
					}
					break;
				//施肥操作
				case 1:
					status -= 3;
					if (cm.getBossLog("花园施肥" + operationId) > 0) {
						cm.sendOkS("啊，好像施过肥了，不能拔苗助长！\r\n#L0##b" + icon2 + "点我返回#l", 2);
					} else {
						if (cm.getPlayerEnergy() > 20) {
							cm.setBossLog("花园施肥" + operationId);
							cm.gainPlayerEnergy(-20);
							Operations(operationId, 1);
							cm.getPlayer().dropMessage(6, "消耗了20点活力，缩短了2小时成长时间。");
							cm.sendOkS("好开心，花儿又长大了一点！\r\n#L0##b" + icon2 + "点我返回#l", 2);
						} else {
							cm.sendOkS("糟糕了，没有活力了！\r\n#L0##b" + icon2 + "点我返回#l", 2);
						}
					}
					break;
				//挖除操作
				case 2:
					status -= 3;
					clearFlowerPot(operationId);
					cm.sendOkS("噢，挖好了，让我来种上新的种子吧！\r\n#L0##b" + icon2 + "点我返回#l", 2);
					break;
				//采摘果实
				case 4:
					status -= 3;
					var currentTimestamp = java.lang.System.currentTimeMillis();
					var seedid = gardenFlowerPot[operationId]['seedid'];
					if (cm.getSpace(Math.floor(seedid / 1000000)) < 2) {
						cm.sendOk("你的包裹空间好像不够呢，整理一下再来采摘吧！");
						cm.dispose();
						return;
					}
					var expiration = gardenFlowerPot[operationId]['expiration'];
					var seconds = (expiration - currentTimestamp) / 1000;
					var flower = getFlower(seedid);
					var catchNum = Math.floor(Math.random() * (flower[5] - flower[4] + 1) + flower[4]);
					var flowerLevel = flower[1];
					var cash = flowerLevel * 20;
					if (seconds <= 0) {
						cm.gainItem(seedid, catchNum);
						//清空花盆
						clearFlowerPot(operationId);
						//得到经验
						var getExp = gainPlantExp(seedid);
						var levelStr = "";
						if (getExp == -1) {
							levelStr = "花园等级提升了#r1#k级！";
						} else {
							levelStr = "得到了#r" + getExp + "#k点花园经验值";
						}
						cm.gainNX(cash);
						cm.sendOkS("好开心，终于到了收获果实的季节！\r\n得到了#b" + catchNum + "#k个#v" + seedid + "##b#t" + seedid + "##k\r\n得到了#r" + cash + "#k点卷\r\n" + levelStr + "\r\n#L0##b" + icon2 + "点我返回#l", 2);
					} else {
						cm.sendOk("骚年，你真的要强行采摘吗？");
						cm.dispose();
					}
					break;
				case 5:
					var seeds = getSeeds();
					var text = "#d#e选择想要种下的种子：#n#k\r\n"
					if (seeds != '' && seeds != null && seeds != Array()) {
						for (var key in seeds) {
							text += "#b#L" + seeds[key][0] + "#[#v" + seeds[key][0] + "##t" + seeds[key][0] + "#种子] 数量：[" + seeds[key][1] + "]个#l\r\n";
						}
						typed = 5;
						cm.sendOkS(text, 2);
					} else {
						status -= 3;
						text = "啊哦，好像没有种子了。得去买一些！\r\n#L0##b" + icon2 + "点我返回#l";
						cm.sendOkS(text, 2);
					}
					break;
			}
		}
	} else if (status == 4) {
		status -= 4;
		plantFlower(selection, operationId);
		text = "种好咯！快快长大吧！\r\n#L0##b" + icon2 + "点我返回#l";
		cm.sendOkS(text, 2);
	}
}
/*
*	自定义函数群
*/
/*
	得到种子
*/
function gainSeed(seedid, quantity) {
	if (quantity == null)
		quantity = 1;
	var charid = cm.getPlayer().getId();
	var data = cm.sql_Select("SELECT * FROM chms_seedpackage WHERE charid = ? and seedid = ?", charid, seedid);
	if (data.length > 0) {
		cm.sql_Updata("UPDATE chms_seedpackage SET quantity=quantity+? WHERE charid=? AND seedid=?", quantity, charid, seedid);
	} else {
		cm.sql_Insert("INSERT INTO chms_seedpackage(charid, seedid, quantity) VALUES(?,?,?)", charid, seedid, quantity);
	}
	return true;
}
/*
	获取背包种子
*/

function getSeeds() {
	var charid = cm.getPlayer().getId();
	var data = cm.sql_Select("SELECT * FROM chms_seedpackage WHERE charid = ? and quantity>0 order by seedid desc", charid);
	var seeds = Array();
	for (var i in data) {
		seeds.push(Array(data[i].get('seedid'), data[i].get('quantity')));
	}
	return seeds;
}
/*
	是否允许扩建
*/
function isAllowUpgrade() {
	var charid = cm.getPlayer().getId();
	var rs = cm.sql_Select("SELECT COUNT(id) as pn FROM chms_flowerpot WHERE charid = ?", charid);
	var flag = true;
	if (rs.length > 0) {
		var pn = rs[0].get('pn');
		if (pn < gardenData['level'] && pn < 10) {
			flag = true;
		} else {
			flag = false;
		}
	}
	return flag;
}
/* 新增加花盆 */
function addFlowerPot() {
	var charid = cm.getPlayer().getId();
	var pstmt = null
	if (isAllowUpgrade()) {
		pstmt = cm.sql_Insert("INSERT INTO chms_flowerpot(charid, seedid, expiration) VALUES(?,NULL,-1)", charid);
		return true;
	} else {
		return false;
	}
}
/*
	种花
*/
function plantFlower(flowerid, flowerpotid) {
	var charid = cm.getPlayer().getId();
	var flower = getFlower(flowerid);
	var currentTimestamp = java.lang.System.currentTimeMillis();
	var expiration = flower[3] * 3600 * 1000 + currentTimestamp;
	cm.sql_Updata("UPDATE chms_flowerpot p, chms_seedpackage s SET p.expiration=?, p.seedid=?, s.quantity=s.quantity-1 WHERE s.seedid=? and p.charid=s.charid and p.id=? and p.charid=?", expiration, flowerid, flowerid, flowerpotid, charid);
}

/*
	获取花信息
*/
function getFlowers() {
	return Array(
		//物品ID，等级，价格，成熟时间(小时),产量最小值，产量最大值
		//恢复类
		Array(4001832, 1, 1200000, 10, 10, 30), // 咒语痕迹
		Array(2340000, 1, 8000000, 10, 2, 5), // 祝福卷轴
		Array(4310036, 1, 1500000, 8, 40, 60),//征服者币
		Array(4310030, 1, 2000000, 8, 30, 50),//运动会币
		Array(5050000, 2, 5000000, 18, 5, 8), //洗点
		//Array(4310030, 2, 2000000, 18, 10, 15), // - 运动会币 - 可以在村庄中的NPC彪鲁那里交换运动会装备、专用卷轴等的运动会币。
		//喇叭类
		Array(5121003, 3, 3000000, 22, 1, 2), // 参鸡汤 - 15分钟内地图上所有角色的物理攻击力+30，魔法攻击力+30。请输入想要发送的信息。
		Array(5121004, 3, 3000000, 22, 1, 2), // 松糕 - 15分钟内地图上所有角色的物理攻击力+30，魔法攻击力+30。请输入想要发送的信息。
		Array(5121005, 3, 3000000, 22, 1, 2), // 韩果 - 15分钟内地图上所有角色的物理攻击力+30，魔法攻击力+30。请输入想要发送的信息。
		//Array(2432353, 4, 4000000, 24, 6, 10), //开心！转盘箱子
		Array(5110000, 4, 3000000, 26, 1, 1), // 红心巧克力
		Array(2430112, 5, 1000000, 52, 5, 10),
		Array(2430481, 6, 1500000, 52, 5, 10),
		Array(2430915, 7, 1800000, 52, 5, 10),
		Array(2431893, 8, 3000000, 52, 5, 10),
		Array(4310143, 9, 2000000, 15, 5, 8), // -BOSS币
		Array(4310234, 10, 6000000, 15, 3, 6), // 闪耀币
		Array(4310233, 11, 5000000, 15, 3, 6), //万花筒硬币
		Array(2614000, 12, 2000000, 33, 2, 4), //突破一万之石头
		Array(2614004, 13, 8000000, 33, 2, 4), //突破十万之石头
		Array(2614005, 15, 100000000, 33, 2, 3), //突破百万之石头
		Array(2430069, 20, 20000000, 33, 2, 4),//祖母绿箱子
		Array(2433005, 20, 60000000, 33, 2, 4), //戒指箱子
		Array(5390000, 20, 10000000, 33, 5, 8), //喇叭
		Array(5390001, 20, 10000000, 33, 5, 8), //喇叭
		Array(5390002, 20, 10000000, 33, 5, 8), //喇叭
		Array(5390004, 20, 20000000, 33, 5, 8), //喇叭
		Array(5390006, 20, 40000000, 33, 5, 8), //喇叭
		Array(5390020, 20, 50000000, 33, 5, 8), //喇叭
		Array(5390031, 20, 60000000, 33, 5, 8), //喇叭
		Array(5390008, 20, 60000000, 33, 5, 8), //喇叭
		Array(5390013, 20, 70000000, 33, 5, 8),//喇叭
		Array(5390012, 20, 80000000, 33, 5, 8), //喇叭
		Array(5390011, 20, 90000000, 33, 5, 8) //喇叭





	);
}

function getFlowerLevel(flowerid) {
	var flowers = getFlowers();
	for (var key in flowers) {
		if (flowers[key][0] == flowerid)
			return flowers[key][1];
	}
}

function getFlower(flowerid) {
	var flowers = getFlowers();
	for (var key in flowers) {
		if (flowers[key][0] == flowerid)
			return flowers[key];
	}
}

/*
	升级经验计算
*/
function calcLevelUp(level) {
	var base = 10 + level * level;
	return base;
}
/*
	得到经验
*/
function gainPlantExp(flowerid) {
	var expNum = getFlowerLevel(flowerid) * 10;
	var charid = cm.getPlayer().getId();
	if ((gardenData['exp'] * 1 + expNum) >= calcLevelUp(gardenData['level'])) {
		var lastExp = (gardenData['exp'] * 1 + expNum) - calcLevelUp(gardenData['level']);
		cm.sql_Updata("UPDATE chms_garden SET exp=?, level=level+1 WHERE charid=?", lastExp, charid);
		return -1;
	} else {
		cm.sql_Updata("UPDATE chms_garden SET exp=exp+? WHERE charid=?", expNum, charid);
		return expNum;
	}
	return 0;
}

/*
	挖除操作
*/
function clearFlowerPot(flowerpotid) {
	var charid = cm.getPlayer().getId();
	cm.resetBossLog("花园施肥" + flowerpotid);
	cm.resetBossLog("花园浇水" + flowerpotid);
	cm.sql_Updata("UPDATE chms_flowerpot SET expiration=-1, seedid=NULL WHERE id=? and charid=?", flowerpotid, charid);
}
/*
	浇水施肥操作
*/
function Operations(flowerpotid, type) {
	var growUp = (type + 1) * 60 * 60 * 1000;
	var charid = cm.getPlayer().getId();
	cm.sql_Updata("UPDATE chms_flowerpot SET expiration=expiration-? WHERE id=? and charid=?", growUp, flowerpotid, charid);
}

/*
	得到花园数据
*/
function getGardenInfo() {
	var charid = cm.getPlayer().getId();
	var data = cm.sql_Select("SELECT * FROM chms_garden WHERE charid = ? limit 1", charid);
	if (data.length > 0) {
		var info = Array();
		info['level'] = data[0].get('level');
		info['exp'] = data[0].get('exp');
		return info;
	} else {
		cm.sql_Insert("INSERT INTO chms_garden(charid, level, exp) VALUES(?,1,0)", charid);
		return getGardenInfo();
	}
}

/*
	得到花盆数据
*/
function getFlowerPot() {
	var charid = cm.getPlayer().getId();
	var data = cm.sql_Select("SELECT * FROM chms_flowerpot WHERE charid = ?", charid);
	var result = Array();
	if (data.length > 0) {
		var info = Array();
		info['id'] = data[0].get('id');
		info['seedid'] = data[0].get('seedid');
		info['expiration'] = data[0].get('expiration');
		result[info['id']] = info;
	} else {
		cm.sql_Insert("INSERT INTO chms_flowerpot(charid, seedid, expiration) VALUES(?,NULL,-1)", charid);
		return getFlowerPot();
	}
	return result;
}

/*
	时间转换
*/
function toDHM(seconds) {
	var days = Math.floor(seconds / 86400);
	var hour = Math.floor(seconds % 86400 / 3600);
	var minute = Math.floor(seconds % 86400 % 3600 / 60);
	return Array(days, hour, minute);
}

var format = function FormatString(c, length, content) {
	var str = "";
	var cs = "";
	if (content.length > length) {
		str = content;
	} else {
		for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
			cs = cs + c;
		}
	}
	str = content + cs;
	return str;
}