/*
	制作：dgms
	功能：寄售系统
	时间：2017年01月05日
*/
var status = 0;
var accountId;
var backupmode = 0;
var EquipStat = new Array();
var EquipStatFromData = new Array();
var itemid;
var TradeId;
var TradePrice;
var TradeItem;
var TradeMod;
var TradeCid;
var tradetype;
var itemposition;
var canbuy = false;
var s; //防止目录错乱
var ItemPrice;
var TradeData;
var blockItem = Array(4000001);
var giveback = new Array();
var newItemList;
var indexSearch = false;
var iconStar = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var CanItem = Array(3994417, //红色蜡笔
	3994418, //橙色蜡笔
	3994419, //黄色蜡笔
	3994420, //绿色蜡笔
	3994421, //青色蜡笔
	3994422 //蓝色蜡笔
); //可以上架的其它物品
var aaa = "#fUI/UIWindow4/PQRank/rank/gold#";
var xxx = "#fUI/UIWindow.img/Shop/meso#";
var eff4 = "#fUI/Basic/BtHide3/mouseOver/0#";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {

		if ((status < 0) || (status >= 0 && status != 14)) {
			cm.dispose();
			return;
		} else {
			status = 2;
		}
		status--;

	}

	if (status == 0) {
		if (cm.getSpace(1) < 5) {
			cm.sendOk("你的背包装备栏没有5个以上的空间!\r\n");
			cm.dispose();
			return;
		}
		/*
	if (!cm.getPlayer().isGM()) {
		cm.sendOk("目前仅供管理员使用。");
		cm.dispose();
		return;
	}*/
		CheckData(); //检查数据完整
		var text = head + "\t欢迎来到寄售市场，很高兴为您服务！您可以点券或元宝的方式出售装备或购买装备。\r\n";
		//text += "你目前拥有 【#r" + cm.getPlayer().getCSPoints(1) + "#k】 点卷\r\r你目前拥有 【#r " + cm.getHyPay(1) + "#k】元宝\r\n";
		text += "#L0#" + xxx + " #e#r我是买家#n#k#l\r\n#L1#" + xxx + " #e#b我是卖家#n#k#l\r\n";
		text += "#L4#" + icon + " #e#d我想根据寄售编号查找#n\r\n\r\n";
		text += "#L5#" + icon + " #e我的寄售历史记录#l\r\n"; //OK
		text += "#L2#" + aaa + " #e个人寄售管理#n#k#l\r\n\r\n";
		//text += "";
		if (cm.getPlayer().isGM()) {
			text += "#r#e#L3# " + eff4 + " #e管理员操作后台#n#k#l\r\n";
		}

		cm.sendSimple(text);
	} else if (status == 1) {

		switch (selection) {
			case - 1: case 0:
				//查看目前所有交易
				s = 0; //防止目录错乱
				status = 7;
				var text = "以下是目前的交易信息：\r\n#b "
				var i = 0;
				var AllRecord = cm.sql_Select("SELECT submittime,id,itemid,itemPrice,tradeType FROM cashtradesystem ORDER BY id DESC");
				for (var i in AllRecord) {
					var submittime = AllRecord[i].get("submittime");
					var currentTimestamp = java.lang.System.currentTimeMillis();
					var submitTimestamp = java.sql.Timestamp.valueOf(submittime).getTime();
					var canBuy = false;
					var sec = (currentTimestamp - submitTimestamp) / 1000;
					if (sec <= 86400) {
						continue;
					}
					canBuy = true;
					//if (cm.getPlayer().getName() == "大神来了")
					//	cm.getPlayer().dropMessage(-11, submitTimestamp + " " + currentTimestamp);
					if (AllRecord[i].get("tradeType") == 1) { //点卷
						text += "\r\n#L" + AllRecord[i].get("id") + "#[编号#r" + AllRecord[i].get("id") + "#b]  #v" + AllRecord[i].get("itemid") + "#  #t" + AllRecord[i].get("itemid") + "##l  #r(" + AllRecord[i].get("itemPrice") + ")#b点卷"
					} else if (AllRecord[i].get("tradeType") == 2) { //元宝
						text += "\r\n#L" + AllRecord[i].get("id") + "#[编号#r" + AllRecord[i].get("id") + "#b]  #v" + AllRecord[i].get("itemid") + "#  #t" + AllRecord[i].get("itemid") + "##l  #d(" + AllRecord[i].get("itemPrice") + ")#b元宝"
					} else {
						text += "\r\n#L" + AllRecord[i].get("id") + "#[编号#r" + AllRecord[i].get("id") + "#b]  #v" + AllRecord[i].get("itemid") + "#  #t" + AllRecord[i].get("itemid") + "##l  (" + AllRecord[i].get("itemPrice") + ")金币"
					}
					if (!canBuy) {
						var DHM = toDHM(86400 - sec);
						var tips = DHM[0] + "天" + DHM[1] + "小时" + DHM[2] + "分";
						text += "\r\n   #r[商品处于    #e公示期#n    剩余" + tips + "]#b";
					} else {
						text += "\r\n   #r[商品处于    #e上架中#n    月底下架]#b";
					}
					text += "\r\n";
					i++;
				}
				AllRecord = cm.sql_Select("SELECT submittime,id,itemid,itemPrice,tradeType FROM cashtradesystem ORDER BY id DESC");
				for (var i in AllRecord) {
					var submittime = AllRecord[i].get("submittime");
					var currentTimestamp = java.lang.System.currentTimeMillis();
					var submitTimestamp = java.sql.Timestamp.valueOf(submittime).getTime();
					var canBuy = false;
					var sec = (currentTimestamp - submitTimestamp) / 1000;
					if (sec > 86400) {
						canBuy = true;
						continue;
					}
					//if (cm.getPlayer().getName() == "大神来了")
					//	cm.getPlayer().dropMessage(-11, submitTimestamp + " " + currentTimestamp);
					if (AllRecord[i].get("tradeType") == 1) { //点卷
						text += "\r\n#L" + AllRecord[i].get("id") + "#[编号#r" + AllRecord[i].get("id") + "#b]  #v" + AllRecord[i].get("itemid") + "#  #t" + AllRecord[i].get("itemid") + "##l  #r(" + AllRecord[i].get("itemPrice") + ")#b点卷"
					} else if (AllRecord[i].get("tradeType") == 2) { //元宝
						text += "\r\n#L" + AllRecord[i].get("id") + "#[编号#r" + AllRecord[i].get("id") + "#b]  #v" + AllRecord[i].get("itemid") + "#  #t" + AllRecord[i].get("itemid") + "##l  #d(" + AllRecord[i].get("itemPrice") + ")#b元宝"
					} else {
						text += "\r\n#L" + AllRecord[i].get("id") + "#[编号#r" + AllRecord[i].get("id") + "#b]  #v" + AllRecord[i].get("itemid") + "#  #t" + AllRecord[i].get("itemid") + "##l  (" + AllRecord[i].get("itemPrice") + ")金币"
					}
					if (!canBuy) {
						var DHM = toDHM(86400 - sec);
						var tips = DHM[0] + "天" + DHM[1] + "小时" + DHM[2] + "分";
						text += "\r\n   #r[商品处于    #e公示期#n    剩余" + tips + "]#b";
					} else {
						text += "\r\n   #r[商品处于    #e上架中#n    月底下架]#b";
					}
					text += "\r\n";
					i++;
				}
				if (text == "以下是目前的交易信息：\r\n#b ") {
					cm.sendOk("目前暂时没有任何交易发起。");
					cm.dispose();
				} else {
					cm.sendSimple(text);
				}
				break;
			case 1:
				//发起我的交易1
				if (cm.getEventCount("寄售系统") >= 10) {
					cm.sendOk("对不起，一个帐号一天只能寄售10次。");
					cm.dispose();
				} else {
					var text = "请选择您要发起交易的类型：\r\n#b";
					text += "#L0# 装备#l";
					text += "#L1# 蜡笔寄售#l";
					cm.sendSimple(text);
				}
				break;
			case 2:
				s = 0;
				status = 10;
				var text = "你好，欢迎来到个人管理中心。#b\r\n#L1# " + eff4 + " #e#r查看或下架我寄售的商品#n#k#l\r\n\r\n#L2# " + xxx + " #e#b查贩卖点卷或元宝#n#k#l\r\n\r\n#L3# " + xxx + " #e#d我的寄存箱【#r月底未出售道具将转存在此#k】#n#k#l";
				cm.sendSimple(text);
				break;
			case 3:
				//管理员后台
				cm.dispose();
				cm.sendOk("暂未开启");
				break;
			case 4:
				//检索功能
				status = 7;
				indexSearch = true;
				cm.sendGetNumber("请输入你要检索的寄售编号。", 0, 1, 9999999);
				break;
			case 5:
				//LOG
				cm.dispose();
				cm.openNpc(1530636, 1003); //LOG
				break;
			default:
				cm.dispose();
				break;
		}
	} else if (status == 2) { //发起我的交易2
		switch (selection) {
			case 0:
				//装备
				var i = 0;
				var list = cm.getInventory(1).list();
				var itemList = list.iterator();
				var text = "请选择你想要交易的道具：\r\n#b";
				position = -1;
				newItemList = Array();
				while (itemList.hasNext()) {
					var item = itemList.next();
					if (cm.isCash(item.getItemId())) continue;
					newItemList[item.getPosition()] = item.getItemId();
					i++;
				}
				if (i == 0) {
					cm.sendOk("对不起，您的装备现在没有装备，无法操作。");
					cm.dispose();
				} else {
					for (var key in newItemList) {
						//限制勋章无法上架
						if (Math.floor(newItemList[key] / 10000) == 114 || Math.floor(newItemList[key] / 10000) == 120) {
							continue;
						}
						text += "#L" + key + "# #v" + newItemList[key] + "# #t" + newItemList[key] + "#\r\n";
					}
					s = 1;
					cm.sendSimple(text);
					/*
						 if (cm.getEquipBySlot(1) == null) {
						 cm.sendOk("请把需要交易的装备放在第一个格子里面。\r\n并且确保是否是现金道具。");
						 cm.dispose();
						 } else {
						 itemid = parseInt(selection);
						 s = 1;
						 status = 4;
						 cm.sendNext("您要寄售的道具为：#v" + cm.getEquipBySlot(1).getItemId() + "#  #t" + cm.getEquipBySlot(1).getItemId() + "#吗？");
						 }
						 */
				}
				break;
			case 1:
				//道具
				s = 1;
				var i = 0;
				var list = cm.getInventory(3).list();
				var itemList = list.iterator();
				var text = "请选择你想要上架的蜡笔：\r\n#b";
				var pass = false;
				position = -1;
				newItemList = Array();
				while (itemList.hasNext()) {
					var item = itemList.next();
					for (var key in CanItem) {
						if (CanItem[key] == item.getItemId()) {
							pass = true;
							break;
						}
					}
					if (pass) {
						newItemList[item.getPosition()] = item.getItemId();
						pass = false;
						i++;
					}
				}
				if (i == 0) {
					cm.sendOk("对不起，您没有任何蜡笔。\r\n不能进行操作。");
					cm.dispose();
				} else {
					for (var key in newItemList) {
						text += "#L" + newItemList[key] + "# #v" + newItemList[key] + "# #t" + newItemList[key] + "#\r\n";
					}
					s = 0;
					cm.sendSimple(text);
				}
				break;
		}
	} else if (status == 3) {
		if (s == 1) { //贩卖装备
			if (position == -1) position = selection;
			if (position != -1) {
				if (cm.getEquipBySlot(position).getFlag() == 1) {
					cm.sendOk("对不起，上锁的道具不能被贩卖。");
					cm.dispose();
					return;
				}
				if (cm.getMeso() < 8000000) {
					cm.sendOk("对不起，你的金币少于800W不能上架。");
					cm.dispose();
					return;
				}
				if (cm.getEquipBySlot(position).getExpiration() > 0) {
					cm.sendOk("对不起，有时间限制的道具不能上架。");
					cm.dispose();
					return;
				}
				if (cm.itemQuantity(1122076) > 0 || cm.itemQuantity(1122000) > 0) {
					cm.sendOk("检测到您包袱持有以下道具无法进行其他道具上架\r\n请将以下道具穿戴在身上即可上架其他道具\r\n#v1122000#黑龙项环\r\n#v1122076#进阶黑暗龙王项链");
					cm.dispose();
					return;
				}
				s = 1;
				status = 4;
				cm.sendNext("您要寄售的道具为：#v" + cm.getEquipBySlot(position).getItemId() + "#  #t" + cm.getEquipBySlot(position).getItemId() + "#吗？\r\n上架需要800W金币的手续费，您确定吗？");
			}
		} else {
			itemid = parseInt(selection);
			status = 9;
			s = 1;
			cm.sendSimple("请选择交易的类型：\r\n#L1# " + xxx + " #e#d点券#n#k 【收取卖家%5税】#l \r\n\r\n#L2# " + xxx + " #e#r元宝#n#k 【收取卖家%2税】#l");
		}

	} else if (status == 4) {
		if (cm.haveItem(itemid)) {
			ItemPrice = selection;
			cm.sql_Insert("INSERT INTO cashtradesystem(id,cid,itemid,itemtype,tradeType,itemprice) values (?,?,?,?,?,?)", null, cm.getPlayer().getId(), itemid, 1, tradetype, ItemPrice);
			cm.gainItem(itemid, -1);
			cm.sendOk("你已经载入了您的交易信息。\r\n现在交易道具已经转存到交易库中。");
			cm.dispose();
		} else {
			//cm.sendOk("对不起，你没有此道具！不能贩卖。");
			cm.dispose();
		}
	} else if (status == 5) {
		if (s == 1) {
			s = 1;
			cm.sendSimple("请选择交易的类型：\r\n#L1# " + xxx + " #e#d点券#n#k 【收取卖家%5税】#l \r\n\r\n#L2# " + xxx + " #e#r元宝#n#k 【收取卖家%2税】#l");
		} else {
			cm.dispose();
		}
	} else if (status == 6) {
		tradetype = selection;
		if (s == 1) {
			if (selection == 1) {
				cm.sendGetNumber("请输入您想要贩卖的价格：1", 0, 1000, 2100000000);
			} else {
				cm.sendGetNumber("请输入您想要贩卖的价格：1", 0, 10, 2100000000);
			}
		} else {
			cm.dispose();
		}
	} else if (status == 7) {
		ItemPrice = selection;
		getEquipStatToArray(); //得到装备的数据
		var insertEquipData = cm.sql_Insert("INSERT INTO cashtradesystem(id,cid,itemid,itemtype,str,dex,ints,luk,hp,mp,watk,matk,wdef,mdef,acc,avoid,speed,jump,upgradeSlots,limitBreak,potential1,potential2,potential3,potential4,potential5,potential6,enhance,reqLevel,yggdrasilWisdom,bossDamage,ignorePDR,totalDamage,allStat,karmaCount,tradeType,itemPrice,hands,ViciousHammer,ItemEXP,sealedlevel,sealedExp,Owner,level,expiredate,itemslot1,itemslot2,itemslot3,soulname,soulenchanter,soulpotential,soulskill,equipOnlyId,GM_Log,flag) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
			null,
			cm.getPlayer().getId(),
			cm.getEquipBySlot(position).getItemId(),
			0,
			EquipStat[0],
			EquipStat[1],
			EquipStat[2],
			EquipStat[3],
			EquipStat[4],
			EquipStat[5],
			EquipStat[6],
			EquipStat[7],
			EquipStat[8],
			EquipStat[9],
			EquipStat[10],
			EquipStat[11],
			EquipStat[12],
			EquipStat[13],
			EquipStat[14],
			EquipStat[15],
			EquipStat[16],
			EquipStat[17],
			EquipStat[18],
			EquipStat[19],
			EquipStat[20],
			EquipStat[21],
			EquipStat[23],
			EquipStat[24],
			EquipStat[25],
			EquipStat[26],
			EquipStat[27],
			EquipStat[28],
			EquipStat[29],
			tradetype,
			ItemPrice,
			EquipStat[30],
			EquipStat[31],
			EquipStat[32],
			EquipStat[33],
			EquipStat[34],
			EquipStat[35],
			EquipStat[36],
			EquipStat[37],
			EquipStat[38],
			EquipStat[39],
			EquipStat[40],
			EquipStat[41],
			EquipStat[42],
			EquipStat[43],
			EquipStat[44],
			EquipStat[45],
			EquipStat[46],
			EquipStat[47]); // 载入数据
		//做同样一件事情
		cm.sql_Insert("INSERT INTO cashtradesystem_bak(id,cid,itemid,itemtype,str,dex,ints,luk,hp,mp,watk,matk,wdef,mdef,acc,avoid,speed,jump,upgradeSlots,limitBreak,potential1,potential2,potential3,potential4,potential5,potential6,enhance,reqLevel,yggdrasilWisdom,bossDamage,ignorePDR,totalDamage,allStat,karmaCount,tradeType,itemPrice,hands,ViciousHammer,ItemEXP,sealedlevel,sealedExp,Owner,level,expiredate,itemslot1,itemslot2,itemslot3,soulname,soulenchanter,soulpotential,soulskill,equipOnlyId,GM_Log,flag) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
			null,
			cm.getPlayer().getId(),
			cm.getEquipBySlot(position).getItemId(),
			0,
			EquipStat[0],
			EquipStat[1],
			EquipStat[2],
			EquipStat[3],
			EquipStat[4],
			EquipStat[5],
			EquipStat[6],
			EquipStat[7],
			EquipStat[8],
			EquipStat[9],
			EquipStat[10],
			EquipStat[11],
			EquipStat[12],
			EquipStat[13],
			EquipStat[14],
			EquipStat[15],
			EquipStat[16],
			EquipStat[17],
			EquipStat[18],
			EquipStat[19],
			EquipStat[20],
			EquipStat[21],
			EquipStat[23],
			EquipStat[24],
			EquipStat[25],
			EquipStat[26],
			EquipStat[27],
			EquipStat[28],
			EquipStat[29],
			tradetype,
			ItemPrice,
			EquipStat[30],
			EquipStat[31],
			EquipStat[32],
			EquipStat[33],
			EquipStat[34],
			EquipStat[35],
			EquipStat[36],
			EquipStat[37],
			EquipStat[38],
			EquipStat[39],
			EquipStat[40],
			EquipStat[41],
			EquipStat[42],
			EquipStat[43],
			EquipStat[44],
			EquipStat[45],
			EquipStat[46],
			EquipStat[47]); // 载入数据
		//////////////////////////////////////////////////////////////////////
		cm.removeSlot(1, position, 1); //删除掉原始道具
		cm.worldSpouseMessage(0x26, "[小道消息] ： 月妙商人处又有新货到啦！火速前往围观！");
		cm.sendNext("你已经载入了您的交易信息。\r\n现在交易道具已经转存到交易库中。\r\n收取了您800W金币的手续费。");
		cm.gainMeso(- 8000000);
		status = -1;
	} else if (status == 8) {
		var text = "";
		var i = 0;
		TradeId = selection; //得到交易号
		var TradeData = cm.sql_Select("SELECT * FROM cashtradesystem WHERE id = ?", TradeId);
		if (indexSearch) {
			text += " - 以下是您检索到的讯息：\r\n"
		}
		if (TradeData.length > 0) { //得到记录数据
			i++;
			TradeItem = TradeData[0].get("itemid");
			TradeMode = TradeData[0].get("itemtype");
			TradePrice = TradeData[0].get("itemprice");
			TradeCid = TradeData[0].get("cid");
			getEquipStatFormData(); //从数据库中得到数据
		}

		if (i == 0) {
			cm.sendNext("对不起，没有检索到编号对应的数据。");
			status = 0;
		} else {
			if (TradeMode == 0) { //装备
				var ii = cm.getItemInfo();
				toDrop = ii.getEquipById(TradeItem).copy(); // 生成一个Equip类(生成这个装备)
				var submittime = EquipStatFromData['submittime'];
				var currentTimestamp = java.lang.System.currentTimeMillis();
				var submitTimestamp = java.sql.Timestamp.valueOf(submittime).getTime();
				var canBuy = false;
				var sec = (currentTimestamp - submitTimestamp) / 1000;
				if (sec > 86400) {
					canBuy = true;
				}
				/*
				
				if (canBuy) {
					text += "点击下一步进行购买.";
				} else {
					text += "#r该商品处于公示期，暂时无法购买。"
				}
				
				text += "#n\r\n";*/
				text += "#d#e<装备信息>：\r\n#n#b";
				text += "#d#r如发现以下显示的信息中存在未显示的装备属性，则说明该装备不具有该属性。#n#k#b\r\n";
				text += "#e[#n #i" + TradeItem + ":##t" + TradeItem + "# ";
				if (EquipStatFromData[38] * 1 > 0) text += "#r#e(+" + EquipStatFromData[38] + ")#n#b";
				text += " #e]#n\r\n";
				if (EquipStatFromData[37].indexOf("★") != -1 || EquipStatFromData[22] * 1 > 0) text += "——————————强化等级———————————\r\n";
				if (EquipStatFromData[37].indexOf("★") != -1) {
					text += "强化品级：#r#e" + EquipStatFromData[37] + "#n#b\r\n";
				}
				var currentStar = EquipStatFromData[22] * 1;
				if (currentStar > 0) {
					text += "强化星级：";
				}
				for (var i = 0; i < currentStar; i++) {
					text += iconStar;
					if ((i + 1) % 5 == 0) text += " ";
				}
				if (currentStar > 0) text += " [" + currentStar + "星]\r\n";
				/*
				if (EquipStatFromData[44] > 0 && EquipStatFromData[43]>0) {
					text += "灵魂结晶：#d" + cm.getItemName(2591000+parseInt(EquipStatFromData[43])-1).replace("灵魂结晶", "") + "#b\r\n";
				}*/
				text += "——————————基础属性———————————\r\n";
				if (EquipStatFromData[0] * 1 > 0) {
					text += "力量：#r#e+" + EquipStatFromData[0] + "#b#n";
					text += compStat(0);
					text += "\r\n";
				}

				if (EquipStatFromData[1] * 1 > 0) {
					text += "敏捷：#r#e+" + EquipStatFromData[1] + "#b#n";
					text += compStat(1);
					text += "\r\n";
				}

				if (EquipStatFromData[2] * 1 > 0) {
					text += "智力：#r#e+" + EquipStatFromData[2] + "#b#n";
					text += compStat(2);
					text += "\r\n";
				}

				if (EquipStatFromData[3] * 1 > 0) {
					text += "运气：#r#e+" + EquipStatFromData[3] + "#b#n";
					text += compStat(3);
					text += "\r\n";
				}

				if (EquipStatFromData[6] * 1 > 0) {
					text += "物攻：#r#e+" + EquipStatFromData[6] + "#b#n";
					text += compStat(6);
					text += "\r\n";
				}

				if (EquipStatFromData[7] * 1 > 0) {
					text += "魔攻：#r#e+" + EquipStatFromData[7] + "#b#n";
					text += compStat(7);
					text += "\r\n";
				}

				if (EquipStatFromData[8] * 1 > 0) {
					text += "物防：#r#e+" + EquipStatFromData[8] + "#b#n";
					text += compStat(8);
					text += "\r\n";
				}

				if (EquipStatFromData[9] * 1 > 0) {
					text += "魔防：#r#e+" + EquipStatFromData[9] + "#b#n";
					text += compStat(9);
					text += "\r\n";
				}

				if (EquipStatFromData[4] * 1 > 0) {
					text += "HP：#r#e+" + EquipStatFromData[4] + "#b#n";
					text += compStat(4);
					text += "\r\n";
				}

				if (EquipStatFromData[5] * 1 > 0) {
					text += "MP：#r#e+" + EquipStatFromData[5] + "#b#n";
					text += compStat(5);
					text += "\r\n";
				}

				if (EquipStatFromData[10] * 1 > 0) {
					text += "命中率：#r#e+" + EquipStatFromData[10] + "#b#n";
					text += compStat(10);
					text += "\r\n";
				}

				if (EquipStatFromData[11] * 1 > 0) {
					text += "回避率：#r#e+" + EquipStatFromData[11] + "#b#n";
					text += compStat(11);
					text += "\r\n";
				}

				if (EquipStatFromData[12] * 1 > 0) {
					text += "移动速度：#r#e+" + EquipStatFromData[12] + "#b#n";
					text += compStat(12);
					text += "\r\n";
				}

				if (EquipStatFromData[13] * 1 > 0) {
					text += "跳跃力：#r#e+" + EquipStatFromData[13] + "#b#n";
					text += compStat(13);
					text += "\r\n";
				}
				if (EquipStatFromData[15] * 1 > 0) {
					text += "破攻上限突破：#r#e+" + EquipStatFromData[15] + "#b#n";
					text += compStat(15);
					text += "\r\n";
				}
				if (EquipStatFromData[25] * 1 > 0) {
					text += "BOSS额外攻击力加成：#r#e+" + EquipStatFromData[25] + "#b#n";
					text += compStat(25);
					text += "\r\n";
				}
				if (EquipStatFromData[26] * 1 > 0) {
					text += "无视怪物防御力：#r#e+" + EquipStatFromData[26] + "#b#n";
					text += compStat(26);
					text += "\r\n";
				}
				if (EquipStatFromData[27] * 1 > 0) {
					text += "总伤害加成：#r#e+" + EquipStatFromData[27] + "#b#n";
					text += compStat(27);
					text += "\r\n";
				}
				if (EquipStatFromData[28] * 1 > 0) {
					text += "全属性加成：#r#e+" + EquipStatFromData[28] + "#b#n";
					text += compStat(28);
					text += "\r\n";
				}
				text += "可升级次数： #r#e" + EquipStatFromData[14] + "#n#b 回\r\n";
				text += "已使用金锤子： #r#e" + EquipStatFromData[33] + "#n#b 次\r\n";
				if (getPotentialInfo(TradeItem, EquipStatFromData[16]) != '无' || getPotentialInfo(TradeItem, EquipStatFromData[19]) != '无' || cm.getItemName(TradeItem).indexOf("漩涡") != -1 && cm.getReqLevel(TradeItem) >= 160 || cm.getItemName(EquipStatFromData[40]) != null || cm.getItemName(EquipStatFromData[41]) != null || cm.getItemName(EquipStatFromData[42]) != null) text += "——————————附加属性———————————\r\n";
				if (getPotentialInfo(TradeItem, EquipStatFromData[16]) != '无') text += "特殊潜能1：#d" + getPotentialInfo(TradeItem, EquipStatFromData[16]) + "#b\r\n";
				if (getPotentialInfo(TradeItem, EquipStatFromData[17]) != '无') text += "特殊潜能2：#d" + getPotentialInfo(TradeItem, EquipStatFromData[17]) + "#b\r\n";
				if (getPotentialInfo(TradeItem, EquipStatFromData[18]) != '无') text += "特殊潜能3：#d" + getPotentialInfo(TradeItem, EquipStatFromData[18]) + "#b\r\n";
				if (getPotentialInfo(TradeItem, EquipStatFromData[19]) != '无') text += "附加潜能1：#d" + getPotentialInfo(TradeItem, EquipStatFromData[19]) + "#b\r\n";
				if (getPotentialInfo(TradeItem, EquipStatFromData[20]) != '无') text += "附加潜能2：#d" + getPotentialInfo(TradeItem, EquipStatFromData[20]) + "#b\r\n";
				if (getPotentialInfo(TradeItem, EquipStatFromData[21]) != '无') text += "附加潜能3：#d" + getPotentialInfo(TradeItem, EquipStatFromData[21]) + "#b\r\n";

				if (cm.getItemName(TradeItem).indexOf("漩涡") != -1 && cm.getReqLevel(TradeItem) >= 160) {
					text += "封印解除阶段：#d" + EquipStatFromData[35] + "#b\r\n";
					text += "封印解除经验值：#d" + EquipStatFromData[36] + "/113723136#b\r\n";
				}

				var itemSlot1 = (cm.getItemName(EquipStatFromData[40]) != null) ? "#i" + EquipStatFromData[40] + ":#" + "#t" + EquipStatFromData[40] + "#" : null;
				var itemSlot2 = (cm.getItemName(EquipStatFromData[41]) != null) ? "#i" + EquipStatFromData[41] + ":#" + "#t" + EquipStatFromData[41] + "#" : null;
				var itemSlot3 = (cm.getItemName(EquipStatFromData[42]) != null) ? "#i" + EquipStatFromData[42] + ":#" + "#t" + EquipStatFromData[42] + "#" : null;

				if (itemSlot1 != null) text += "星岩插槽1：#d" + itemSlot1 + "#b\r\n";
				if (itemSlot2 != null) text += "星岩插槽2：#d" + itemSlot2 + "#b\r\n";
				if (itemSlot3 != null) text += "星岩插槽3：#d" + itemSlot3 + "#b\r\n";

				text += "———————————售价————————————\r\n";
				if (EquipStatFromData[31] == 0) {
					text += "#e#d售价：#r" + EquipStatFromData[30] + "#d 金币";
				} else if (EquipStatFromData[31] == 1) {
					text += "#e#d售价：#r" + EquipStatFromData[30] + "#d 点券";
				} else if (EquipStatFromData[31] == 2) {
					text += "#e#d售价：#r" + EquipStatFromData[30] + "#d 元宝";
				}
				text += "#n";
				if (canBuy) {
					//cm.sendNextPrev(text);
					text += "\r\n#k点击 #b#e上一步#n#k 返回，点击 #b#e下一步#n#k 进行购买。";
					s = 1;
					status = 14;
					cm.sendNextPrev(text);
				} else {
					text += "\r\n#k该装备#r处于公示期#k，无法购买；点击 #b#e下一步#n#k 返回。";
					s = 1;
					status = 0;
					cm.sendSimple(text);
				}

			} else {
				var submittime = EquipStatFromData['submittime'];
				var currentTimestamp = java.lang.System.currentTimeMillis();
				var submitTimestamp = java.sql.Timestamp.valueOf(submittime).getTime();
				var canBuy = false;
				var sec = (currentTimestamp - submitTimestamp) / 1000;
				if (sec > 86400) {
					canBuy = true;
				}

				text += "\r\n您选择的[#v" + TradeItem + "#] #t" + TradeItem + "#\r\n\r\n#b";
				if (EquipStatFromData[31] == 0) {
					text += "#e#d它的价格是：#r" + EquipStatFromData[30] + "#d 金币#n\r\n";
				} else if (EquipStatFromData[31] == 1) {
					text += "#e#d它的价格是：#r" + EquipStatFromData[30] + "#d 点券#n\r\n";
				} else if (EquipStatFromData[31] == 2) {
					text += "#e#d它的价格是：#r" + EquipStatFromData[30] + "#d 元宝#n\r\n";
				}
				if (canBuy) {
					text += "#k点击 #b#e上一步#n#k 返回，点击 #b#e下一步#n#k 进行购买。";
					s = 1;
					status = 14;
					cm.sendNextPrev(text);
				} else {
					text += "#k该装备#r处于公示期#k，无法购买；点击 #b#e下一步#n#k 返回。";
					s = 1;
					status = 0;
					cm.sendSimple(text);
				}
			}

		}
	} else if (status == 9) { //交易讯息
		if (s == 1) {
			if (BuyCheckDataAgain()) {
				// if (cm.getEquipBySlot(1) == null) {
				if (cm.getSpace(1) < 1) {
					cm.sendOk("对不起，请让你的装备栏至少腾出一格！");
					cm.dispose();
					return;
				}
				if (TradeCid == cm.getPlayer().getId() && !cm.getPlayer().isGM()) {
					cm.sendOk("对不起，不能购买自己上架的道具！");
					cm.dispose();
					return;
				}
				if (getAccountIdByCid(!cm.getPlayer().isGM() && cm.getPlayer().getId()) != null && getAccountIdByCid(TradeCid) == getAccountIdByCid(cm.getPlayer().getId())) {
					cm.sendOk("对不起，不能购买自己帐号上架的道具！");
					cm.dispose();
					return;
				}
				if (parseInt(EquipStatFromData[31]) == 0) {
					if (cm.getMeso() >= TradePrice) {

						if (TradeMode == 0) {
							if (cm.getSpace(1) >= 1) {
								if (UpdateData(TradeCid, TradePrice, 0, 0)) {
									cm.gainMeso(- TradePrice);
									MakeEquip();
									setLog(TradeId); //载入Log
									cm.sendOk("恭喜你购买成功！");
									DeleteDataById(TradeId);
									cm.dispose();
								} else {
									cm.sendOk("未知原因，购买失败！");
									cm.dispose();
									return;
								}
							}
						} else {
							if (UpdateData(TradeCid, TradePrice, 0, 0)) {
								cm.gainMeso(- TradePrice);
								cm.gainItem(TradeItem, 1);
								setLog(TradeId); //载入Log
								cm.sendOk("恭喜你购买成功！");
								DeleteDataById(TradeId);
								cm.dispose();
							} else {
								cm.sendOk("未知原因，购买失败！");
								cm.dispose();
							}
						}
					} else {
						cm.sendOk("对不起，你没有足够的金币。");
						cm.dispose();
					}
				} else if (parseInt(EquipStatFromData[31]) == 1) {
					if (cm.getNX(1) >= TradePrice) {

						if (TradeMode == 0) {
							if (cm.getSpace(1) >= 1) {
								if (UpdateData(TradeCid, 0, TradePrice, 0)) {
									cm.gainNX(1, -TradePrice);
									MakeEquip();
									setLog(TradeId); //载入Log
									cm.sendOk("恭喜你购买成功！");
									DeleteDataById(TradeId);
									cm.dispose();
								} else {
									cm.sendOk("未知原因，购买失败！");
									cm.dispose();
								}
							}
						} else {
							if (UpdateData(TradeCid, 0, TradePrice, 0)) {
								cm.gainNX(1, -TradePrice);
								cm.gainItem(TradeItem, 1);
								setLog(TradeId); //载入Log
								cm.sendOk("恭喜你购买成功！");

								DeleteDataById(TradeId);
								cm.dispose();
							} else {
								cm.sendOk("未知原因，购买失败！");
								cm.dispose();
							}
						}
					} else {
						cm.sendOk("对不起，你没有足够的点券。\r\n你目前拥有 【#r" + cm.getPlayer().getCSPoints(1) + "#k】 点卷");
						cm.dispose();
					}
				} else if (parseInt(EquipStatFromData[31]) == 2) {
					if (cm.getRMB() >= TradePrice) {

						if (TradeMode == 0) {
							if (cm.getSpace(1) >= 1) {
								if (UpdateData(TradeCid, 0, 0, TradePrice)) {
									cm.gainRMB(- TradePrice);
									MakeEquip();
									setLog(TradeId); //载入Log
									cm.sendOk("恭喜你购买成功！");

									DeleteDataById(TradeId);
									cm.dispose();
								} else {
									cm.sendOk("未知原因，购买失败！");
									cm.dispose();
								}
							}
						} else {
							if (UpdateData(TradeCid, 0, 0, TradePrice)) {
								cm.gainRMB(- TradePrice);
								cm.gainItem(TradeItem, 1);
								setLog(TradeId); //载入Log
								cm.sendOk("恭喜你购买成功！");
								DeleteDataById(TradeId);
								cm.dispose();
							} else {
								cm.sendOk("未知原因，购买失败！");
								cm.dispose();
							}
						}
					} else {
						cm.sendOk("对不起，你没有足够的元宝。\r\n你目前拥有 【#r " + cm.getRMB() + "#k】 元宝");
						cm.dispose();
					}
				} else {
					// cm.sendOk(EquipStatFromData[31]);
					cm.dispose();
				}
			} else {
				cm.sendOk("选择的道具已经被其他玩家先手一步买走了哦！");
				cm.dispose();
			}
		} else {
			cm.dispose();
		}
	} else if (status == 10) {
		if (s == 1) {
			status = 3;
			tradetype = selection;
			cm.sendGetNumber("请输入您想要贩卖的价格：", 0, 0, 2100000000);
		} else {
			cm.dispose();
		}
	} else if (status == 11) {
		s = 0;
		if (selection == 0) {
			var text = "以下是你的交易信息。\r\n";
			var AllRecord = cm.sql_Select("SELECT id,itemid FROM cashtradesystem where cid = ?", cm.getPlayer().getId())
			for (var i in AllRecord) { //得到记录数据
				text += "\r\n #b[编号#r" + AllRecord[i].get("id") + "#b]  #v" + AllRecord[i].get("itemid") + "#\t#t" + AllRecord[i].get("itemid") + "##l\r\n";
			}
			if (text == "以下是你的交易信息。\r\n") {
				cm.sendOk("目前暂时没有任何交易发起。目前您没有任何寄售道具。\r\n#r\r\n本系统#e#b针对角色#r#n进行记录。\r\n如果您同一个帐号有角色卖出成功的话，请#e#b切换角色#r#n查看。");
			} else {
				cm.sendNext(text);
			}

			status = -1;
		} else if (selection == 1) {
			var text = "以下是你的交易信息。\r\n";
			var AllRecord = cm.sql_Select("SELECT id,itemid FROM cashtradesystem where cid = ?", cm.getPlayer().getId())
			for (var i in AllRecord) { //得到记录数据
				text += "\r\n#L" + AllRecord[i].get("id") + "##b[编号#r" + AllRecord[i].get("id") + "#b]  #v" + AllRecord[i].get("itemid") + "#\t#t" + AllRecord[i].get("itemid") + "##l\r\n";
			}
			if (text == "以下是你的交易信息。\r\n") {
				cm.sendOk("目前您没有任何寄售道具。\r\n#r\r\n本系统#e#b针对角色#r#n进行记录。\r\n如果您同一个帐号有角色卖出成功的话，请#e#b切换角色#r#n查看。");
				cm.dispose(); //结束
			} else {
				s = 1;
				cm.sendSimple(text);
			}

		} else if (selection == 2) {
			var text = "以下是你的数据：\r\n";
			var CharRecord = cm.sql_Select("SELECT * FROM TradeSystemGiveBack where cid = ?", cm.getPlayer().getId())
			for (var i in CharRecord) { //得到记录数据
				giveback[0] = CharRecord[i].get("meso");
				giveback[1] = CharRecord[i].get("dianquan");
				giveback[2] = CharRecord[i].get("diyong");
			}
			if (CharRecord.length == 0) {
				cm.sendOk("暂时还没有你的数据。");
				cm.dispose();
			} else {
				status = 13;
				if (giveback[0] == 0 && giveback[1] == 0 && giveback[2] == 0) {
					cm.sendOk("目前没有金额可以领取。");
					cm.dispose();
				} else {
					cm.sendSimple("现在您可以领取您寄售后的点卷与元宝：\r\n\r\n#e#g#L0#点击领取 #d点券#k【 #e#r" + giveback[1] + "#n#k 】  #d元宝#k【 #e#r" + giveback[2] + "#n#k 】#k#n#l\r\n\r\n#r#b\r\n\r\n本系统#e#b针对角色#r#n进行记录。\r\n如果您同一个帐号有角色卖出成功的话，请#e#b切换角色#r#n查看。")
				}
			}
		} else if (selection == 3) { //领取在仓库的道具
			var i = 0; //记录在仓库里面的数据个数
			var text = "目前你在仓库里面的道具：\r\n#d"
			var TradeDataForOwner = cm.sql_Select("SELECT id,itemid FROM cashtradesystemStore where cid = ?", cm.getPlayer().getId())
			for (var key in TradeDataForOwner) { //得到记录数据
				i++;
				text += "#L" + TradeDataForOwner[key].get("id") + "##b[编号#r" + TradeDataForOwner[key].get("id") + "#b]  #v" + TradeDataForOwner[key].get("itemid") + "#\t#t" + TradeDataForOwner[key].get("itemid") + "# #l\r\n"
			}
			text += "\r\n一共找到了" + i + "条数据。";
			if (i != 0) {
				cm.sendSimple(text); //TODO
				s = 1;
				backupmode = 1;
			} else {
				cm.sendOk("仓库中没有你的数据。\r\n#r#b\r\n本系统#e#b针对角色#r#n进行记录。\r\n如果您同一个帐号有角色卖出成功的话，请#e#b切换角色#r#n查看。");
				cm.dispose();
			}
		}
	} else if (status == 12) {
		if (s == 1) {
			TradeId = selection; //得到交易号
			cm.sendNext("你确定要回收道具并且删除交易信息吗？");
		} else {
			cm.dispose();
		}
	} else if (status == 13) {
		if (backupmode == 1) {
			TradeData = cm.sql_Select("SELECT * FROM cashtradesystemStore");

		} else {
			TradeData = cm.sql_Select("SELECT * FROM cashtradesystem");
		}
		for (var key in TradeData) { //得到记录数据
			if (TradeData[key].get("id") == TradeId) {
				TradeItem = TradeData[key].get("itemid");
				TradeMode = TradeData[key].get("itemtype");
				getEquipStatFormData(); //从数据库中得到数据
			}
		}
		if (cm.canHold(TradeItem)
			/*&& cm.getEquipBySlot(1) == null*/
		) {
			if (TradeMode == 0) {
				MakeEquip();
				cm.sendOk("撤回成功！");
				cm.dispose();
			} else {
				cm.gainItem(TradeItem, 1);
				cm.sendOk("撤回成功！");
				cm.dispose();
			}
			if (backupmode == 1) {
				DeleteDataByIdForOwn(TradeId);
			} else {
				DeleteDataById(TradeId);
			}
		} else {
			cm.sendOk("请确保你的背包有空间，并且装备栏的第一个空格为空后再试。");
			cm.dispose();
		}
	} else if (status == 14) {
		if (cm.getMeso() + (giveback[0] * 1 - giveback[0] * 1 * 0.05) > 9999999999 || cm.getNX(1) + (giveback[1] * 1 - giveback[1] * 0.05) > 9999999999 || cm.getRMB() + (giveback[2] * 1 - giveback[2] * 0.05) > 9999999999) {
			cm.sendOk("领取的金额将会超过最大值，不能领取。");
			cm.dispose();
		} else {
			//cm.gainMeso(parseInt(giveback[0] - giveback[0] * 0.05));//暂时屏蔽
			cm.gainNX(1, parseInt(giveback[1] * 1 - giveback[1] * 0.05));
			cm.gainRMB(parseInt(giveback[2] * 1 - giveback[2] * 0.02));
			cm.sql_Update("delete from TradeSystemGiveBack where cid = ?", cm.getPlayer().getId());
			cm.sendOk("成功领回【 #e#r" + parseInt(giveback[1] * 1 - giveback[1] * 0.05) + "#n#k 点券】 【 #e#r" + parseInt(giveback[2] * 1 - giveback[2] * 0.02) + "#n#k 元宝】\r\n\r\n");
			cm.dispose();
		}
	} else if (status == 15) {
		status = 8;
		cm.sendYesNo("你确定要购买#v" + TradeItem + "# #t" + TradeItem + "# 吗？");
	} else if (status == 16) {
		TradeId = selection; //得到交易ID
		cm.dispose();
	}

}
function getGiveBackData() {
	cm.getPlayer().dropMessage(- 11, TradeCid);
	data = cm.sql_Select("SELECT * FROM TradeSystemGiveBack where cid = ?", TradeCid);
	if (data.length > 0) { //得到记录数据
		giveback[0] = data[0].get("meso");
		giveback[1] = data[0].get("dianquan");
		giveback[2] = data[0].get("diyong");
	} else {
		cm.sql_Insert("INSERT INTO TradeSystemGiveBack values (?,?,?,?,?)", null, TradeCid, 0, 0, 0);
		giveback[0] = 0;
		giveback[1] = 0;
		giveback[2] = 0;
	}
}

function BuyCheckDataAgain() { //购买的时候再次测试是否选择的道具已经是购买成功状态了。
	var data = cm.sql_Select("SELECT * FROM cashtradesystem where id = ?", TradeId);
	if (data.length == 0) {
		return false;
	} else {
		return true;
	}
}

function CheckData() {
	var data = cm.sql_Select("SELECT * FROM TradeSystemGiveBack where cid = ?", cm.getPlayer().getId())
	if (data.length == 0) { //得到记录数据
		cm.sql_Insert("INSERT INTO TradeSystemGiveBack values (?,?,?,?,?)", null, c.getPlayer().getId(), 0, 0, 0);
	}
}

function UpdateData(cid, meso, dianquan, diyong) {
	getGiveBackData(); //SELECT MESO, DIANQUAN, DIYONG
	//临时存储当前的GiveBack增加后的数据
	var oldGiveBack = [];
	oldGiveBack[0] = giveback[0] * 1 + meso * 1;
	oldGiveBack[1] = giveback[1] * 1 + dianquan * 1;
	oldGiveBack[2] = giveback[2] * 1 + diyong * 1;
	cm.sql_Update("update TradeSystemGiveBack set meso=meso+?,dianquan=dianquan+?,diyong=diyong+? where cid = ?", parseInt(meso), parseInt(dianquan), parseInt(diyong), cid)
	getGiveBackData(); //SELECT MESO, DIANQUAN, DIYONG
	var newGiveBack = [];
	newGiveBack[0] = giveback[0];
	newGiveBack[1] = giveback[1];
	newGiveBack[2] = giveback[2];
	//对比更新后的数据和更新前的计算数据
	//cm.getPlayer().dropMessage(-11, "更新前："+oldGiveBack[0]+" "+oldGiveBack[1]+" "+oldGiveBack[2]);
	//cm.getPlayer().dropMessage(-11, "更新后："+newGiveBack[0]+" "+newGiveBack[1]+" "+newGiveBack[2]);
	if (newGiveBack[0] == oldGiveBack[0] && newGiveBack[1] == oldGiveBack[1] && newGiveBack[2] == oldGiveBack[2]) {
		return true;
	} else {
		return false;
	}
}

function DeleteDataById(id) { //删除数据
	cm.sql_Update("delete from cashtradesystem where id = ?", id)
}

function DeleteDataByIdForOwn(id) { //删除数据
	cm.sql_Update("delete from cashtradesystemStore where id = ?", id)
}

function MakeEquip() { //制作装备
	var ii = cm.getItemInfo();
	toDrop = ii.randomizeStats(ii.getEquipById(TradeItem)).copy(); // 生成一个Equip类(生成这个装备)
	for (var i = 0; i < 30; i++) {
		setEquipStatRandom(i, EquipStatFromData[i]);
	}
	//新增属性部分
	setEquipStatRandom(30, EquipStatFromData[32]);
	setEquipStatRandom(31, EquipStatFromData[33]);
	setEquipStatRandom(32, EquipStatFromData[34]);
	setEquipStatRandom(33, EquipStatFromData[35]); //封印等级
	setEquipStatRandom(34, EquipStatFromData[36]);
	if (EquipStatFromData[37] != null) {
		setEquipStatRandom(35, EquipStatFromData[37]); //owner
	}
	setEquipStatRandom(36, EquipStatFromData[38]); //已升级次数
	setEquipStatRandom(37, EquipStatFromData[39]); //剩余时间
	setEquipStatRandom(38, EquipStatFromData[40]); //itemslo1
	setEquipStatRandom(39, EquipStatFromData[41]); //itemslot2
	setEquipStatRandom(40, EquipStatFromData[42]); //itemslot3
	setEquipStatRandom(41, EquipStatFromData[43]); //soulname
	setEquipStatRandom(42, EquipStatFromData[44]); //soulenchanter
	setEquipStatRandom(43, EquipStatFromData[45]); //soulppotential
	setEquipStatRandom(44, EquipStatFromData[46]); //soulskill
	setEquipStatRandom(45, EquipStatFromData[47]); //equipOnlyId
	setEquipStatRandom(46, EquipStatFromData[48]); //GM_LOG
	setEquipStatRandom(47, EquipStatFromData[49]); //Flag
	// cm.removeSlot(1, 1, 1); //删除掉原始道具
	//inventoryType, deleteSlot, deleteQuantity
	//toDrop.setEquipOnlyId(cm.getItemInfo().getNextEquipOnlyId());
	Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, false);
}

function getEquipStatFormDataOfOwner() { //从数据库得到装备数据 自己的
	EquipStatFromData[0] = TradeDataForOwner.getString("str"); //力量
	EquipStatFromData[1] = TradeDataForOwner.getString("dex"); //敏捷
	EquipStatFromData[2] = TradeDataForOwner.getString("ints"); //智力
	EquipStatFromData[3] = TradeDataForOwner.getString("luk"); //运气
	EquipStatFromData[4] = TradeDataForOwner.getString("hp");
	EquipStatFromData[5] = TradeDataForOwner.getString("mp");
	EquipStatFromData[6] = TradeDataForOwner.getString("watk");
	EquipStatFromData[7] = TradeDataForOwner.getString("matk");
	EquipStatFromData[8] = TradeDataForOwner.getString("wdef");
	EquipStatFromData[9] = TradeDataForOwner.getString("mdef");
	EquipStatFromData[10] = TradeDataForOwner.getString("acc");
	EquipStatFromData[11] = TradeDataForOwner.getString("avoid");
	EquipStatFromData[12] = TradeDataForOwner.getString("speed");
	EquipStatFromData[13] = TradeDataForOwner.getString("jump");
	EquipStatFromData[14] = TradeDataForOwner.getString("upgradeSlots");
	EquipStatFromData[15] = TradeDataForOwner.getString("limitBreak");
	EquipStatFromData[16] = TradeDataForOwner.getString("potential1");
	EquipStatFromData[17] = TradeDataForOwner.getString("potential2");
	EquipStatFromData[18] = TradeDataForOwner.getString("potential3");
	EquipStatFromData[19] = TradeDataForOwner.getString("potential4");
	EquipStatFromData[20] = TradeDataForOwner.getString("potential5");
	EquipStatFromData[21] = TradeDataForOwner.getString("potential6");
	EquipStatFromData[22] = TradeDataForOwner.getString("enhance");
	EquipStatFromData[23] = TradeDataForOwner.getString("reqLevel");
	EquipStatFromData[24] = TradeDataForOwner.getString("yggdrasilWisdom");
	EquipStatFromData[25] = TradeDataForOwner.getString("bossDamage");
	EquipStatFromData[26] = TradeDataForOwner.getString("ignorepDR");
	EquipStatFromData[27] = TradeDataForOwner.getString("totalDamage");
	EquipStatFromData[28] = TradeDataForOwner.getString("allStat");
	EquipStatFromData[29] = TradeDataForOwner.getString("karmaCount");
	EquipStatFromData[30] = TradeDataForOwner.getString("itemprice");
	EquipStatFromData[31] = TradeDataForOwner.getString("tradeType");
	//新增属性部分
	EquipStatFromData[32] = TradeDataForOwner.getString("hands");
	EquipStatFromData[33] = TradeDataForOwner.getString("ViciousHammer");
	EquipStatFromData[34] = TradeDataForOwner.getString("itemEXP");

	EquipStatFromData[35] = TradeDataForOwner.getString("sealedlevel");
	EquipStatFromData[36] = TradeDataForOwner.getString("sealedExp");
	EquipStatFromData[37] = TradeDataForOwner.getString("Owner");
	EquipStatFromData[38] = TradeDataForOwner.getString("level");
	EquipStatFromData[39] = TradeDataForOwner.getString("expiredate");
	//星岩
	EquipStatFromData[40] = TradeDataForOwner.getString("itemslot1");
	EquipStatFromData[41] = TradeDataForOwner.getString("itemslot2");
	EquipStatFromData[42] = TradeDataForOwner.getString("itemslot3");
	//灵魂武器
	EquipStatFromData[43] = TradeDataForOwner.getString("soulname");
	EquipStatFromData[44] = TradeDataForOwner.getString("soulenchanter");
	EquipStatFromData[45] = TradeDataForOwner.getString("soulpotential");
	EquipStatFromData[46] = TradeDataForOwner.getString("soulskill");
	EquipStatFromData[47] = TradeDataForOwner.getString("equipOnlyId");
	EquipStatFromData[48] = TradeDataForOwner.getString("GM_Log");
	EquipStatFromData[49] = TradeDataForOwner.getString("flag");
	EquipStatFromData['submittime'] = TradeDataForOwner.getString("submittime");
}

function getEquipStatFormData() { //从数据库得到装备数据
	EquipStatFromData[0] = TradeData.getString("str"); //力量
	EquipStatFromData[1] = TradeData.getString("dex"); //敏捷
	EquipStatFromData[2] = TradeData.getString("ints"); //智力
	EquipStatFromData[3] = TradeData.getString("luk"); //运气
	EquipStatFromData[4] = TradeData.getString("hp");
	EquipStatFromData[5] = TradeData.getString("mp");
	EquipStatFromData[6] = TradeData.getString("watk");
	EquipStatFromData[7] = TradeData.getString("matk");
	EquipStatFromData[8] = TradeData.getString("wdef");
	EquipStatFromData[9] = TradeData.getString("mdef");
	EquipStatFromData[10] = TradeData.getString("acc");
	EquipStatFromData[11] = TradeData.getString("avoid");
	EquipStatFromData[12] = TradeData.getString("speed");
	EquipStatFromData[13] = TradeData.getString("jump");
	EquipStatFromData[14] = TradeData.getString("upgradeSlots");
	EquipStatFromData[15] = TradeData.getString("limitBreak");
	EquipStatFromData[16] = TradeData.getString("potential1");
	EquipStatFromData[17] = TradeData.getString("potential2");
	EquipStatFromData[18] = TradeData.getString("potential3");
	EquipStatFromData[19] = TradeData.getString("potential4");
	EquipStatFromData[20] = TradeData.getString("potential5");
	EquipStatFromData[21] = TradeData.getString("potential6");
	EquipStatFromData[22] = TradeData.getString("enhance");
	EquipStatFromData[23] = TradeData.getString("reqLevel");
	EquipStatFromData[24] = TradeData.getString("yggdrasilWisdom");
	EquipStatFromData[25] = TradeData.getString("bossDamage");
	EquipStatFromData[26] = TradeData.getString("ignorepDR");
	EquipStatFromData[27] = TradeData.getString("totalDamage");
	EquipStatFromData[28] = TradeData.getString("allStat");
	EquipStatFromData[29] = TradeData.getString("karmaCount");
	EquipStatFromData[30] = TradeData.getString("itemprice");
	EquipStatFromData[31] = TradeData.getString("tradeType");
	//新增属性部分
	EquipStatFromData[32] = TradeData.getString("hands");
	EquipStatFromData[33] = TradeData.getString("ViciousHammer");
	EquipStatFromData[34] = TradeData.getString("itemEXP");
	EquipStatFromData[35] = TradeData.getString("sealedlevel");
	EquipStatFromData[36] = TradeData.getString("sealedExp");
	EquipStatFromData[37] = TradeData.getString("Owner");
	EquipStatFromData[38] = TradeData.getString("level");
	EquipStatFromData[39] = TradeData.getString("expiredate");

	EquipStatFromData[40] = TradeData.getString("itemslot1");
	EquipStatFromData[41] = TradeData.getString("itemslot2");
	EquipStatFromData[42] = TradeData.getString("itemslot3");
	//灵魂武器
	EquipStatFromData[43] = TradeData.getString("soulname");
	EquipStatFromData[44] = TradeData.getString("soulenchanter");
	EquipStatFromData[45] = TradeData.getString("soulpotential");
	EquipStatFromData[46] = TradeData.getString("soulskill");
	EquipStatFromData[47] = TradeData.getString("equipOnlyId");
	EquipStatFromData[48] = TradeData.getString("GM_Log");
	EquipStatFromData[49] = TradeData.getString("flag");
	EquipStatFromData['submittime'] = TradeData.getString("submittime");
}

function getEquipStatToArray() { //得到装备数据
	EquipStat[0] = cm.getEquipBySlot(position).getStr(); //力量
	EquipStat[1] = cm.getEquipBySlot(position).getDex(); //敏捷
	EquipStat[2] = cm.getEquipBySlot(position).getInt(); //智力
	EquipStat[3] = cm.getEquipBySlot(position).getLuk(); //运气
	EquipStat[4] = cm.getEquipBySlot(position).getHp();
	EquipStat[5] = cm.getEquipBySlot(position).getMp();
	EquipStat[6] = cm.getEquipBySlot(position).getWatk();
	EquipStat[7] = cm.getEquipBySlot(position).getMatk();
	EquipStat[8] = cm.getEquipBySlot(position).getWdef();
	EquipStat[9] = cm.getEquipBySlot(position).getMdef();
	EquipStat[10] = cm.getEquipBySlot(position).getAcc();
	EquipStat[11] = cm.getEquipBySlot(position).getAvoid();
	EquipStat[12] = cm.getEquipBySlot(position).getSpeed();
	EquipStat[13] = cm.getEquipBySlot(position).getJump();
	EquipStat[14] = cm.getEquipBySlot(position).getUpgradeSlots();
	EquipStat[15] = cm.getEquipBySlot(position).getLimitBreak();
	EquipStat[16] = cm.getEquipBySlot(position).getPotential1();
	EquipStat[17] = cm.getEquipBySlot(position).getPotential2();
	EquipStat[18] = cm.getEquipBySlot(position).getPotential3();
	EquipStat[19] = cm.getEquipBySlot(position).getPotential4();
	EquipStat[20] = cm.getEquipBySlot(position).getPotential5();
	EquipStat[21] = cm.getEquipBySlot(position).getPotential6();
	EquipStat[22] = cm.getEquipBySlot(position).getEnhance();
	EquipStat[23] = cm.getEquipBySlot(position).getReqLevel();
	EquipStat[24] = cm.getEquipBySlot(position).getYggdrasilWisdom();
	EquipStat[25] = cm.getEquipBySlot(position).getBossDamage();
	EquipStat[26] = cm.getEquipBySlot(position).getIgnorePDR();
	EquipStat[27] = cm.getEquipBySlot(position).getTotalDamage();
	EquipStat[28] = cm.getEquipBySlot(position).getAllStat();
	// EquipStat[29] = cm.getEquipBySlot(1).getFinalStrike();
	EquipStat[29] = cm.getEquipBySlot(position).getKarmaCount();
	//新增属性部分
	EquipStat[30] = cm.getEquipBySlot(position).getHands();
	EquipStat[31] = cm.getEquipBySlot(position).getViciousHammer();
	EquipStat[32] = cm.getEquipBySlot(position).getItemEXP();
	EquipStat[33] = cm.getEquipBySlot(position).getSealedLevel();
	EquipStat[34] = cm.getEquipBySlot(position).getSealedExp();
	EquipStat[35] = cm.getEquipBySlot(position).getOwner();
	EquipStat[36] = cm.getEquipBySlot(position).getLevel();
	EquipStat[37] = cm.getEquipBySlot(position).getExpiration();
	//128修复新增(星岩、灵魂武器)
	EquipStat[38] = cm.getEquipBySlot(position).getSocket1();
	EquipStat[39] = cm.getEquipBySlot(position).getSocket2();
	EquipStat[40] = cm.getEquipBySlot(position).getSocket3();
	//灵魂武器
	EquipStat[41] = cm.getEquipBySlot(position).getSoulName();
	EquipStat[42] = cm.getEquipBySlot(position).getSoulEnchanter();
	EquipStat[43] = cm.getEquipBySlot(position).getSoulPotential();
	EquipStat[44] = cm.getEquipBySlot(position).getSoulSkill();
	EquipStat[45] = cm.getEquipBySlot(position).getEquipOnlyId();
	EquipStat[46] = cm.getEquipBySlot(position).getGMLog();
	EquipStat[47] = cm.getEquipBySlot(position).getFlag();
}

function compStat(i) {
	var val = parseInt(EquipStatFromData[i]);
	var current = getStat(i);
	if (val > current) {
		return " #k(" + current + "+" + (val - current) + ")#b";
	} else {
		return "";
	}
}

function getStat(i) { //设置装备属性
	var current = 0;
	switch (i) {
		case 0:
			current = toDrop.getStr();
			break;
		case 1:
			current = toDrop.getDex();
			break;
		case 2:
			current = toDrop.getInt();
			break;
		case 3:
			current = toDrop.getLuk();
			break;
		case 4:
			current = toDrop.getHp();
			break;
		case 5:
			current = toDrop.getMp();
			break;
		case 6:
			current = toDrop.getWatk();
			break;
		case 7:
			current = toDrop.getMatk();
			break;
		case 8:
			current = toDrop.getWdef();
			break;
		case 9:
			current = toDrop.getMdef();
			break;
		case 10:
			current = toDrop.getAcc();
			break;
		case 11:
			current = toDrop.getAvoid();
			break;
		case 12:
			current = toDrop.getSpeed();
			break;
		case 13:
			current = toDrop.getJump();
			break;
		case 14:
			current = toDrop.getUpgradeSlots();
			break;
		case 15:
			current = toDrop.getLimitBreak();
			break;
		case 16:
			current = toDrop.getPotential1();
			break;
		case 17:
			current = toDrop.getPotential2();
			break;
		case 18:
			current = toDrop.getPotential3();
			break;
		case 19:
			current = toDrop.getPotential4();
			break;
		case 20:
			current = toDrop.getPotential5();
			break;
		case 21:
			current = toDrop.getPotential6();
			break;
		case 22:
			current = toDrop.getEnhance();
			break;
		case 23:
			current = toDrop.getReqLeel();
			break;
		case 24:
			current = toDrop.getYggdrasilWisdom();
			break;
		case 25:
			current = toDrop.getBossDamage();
			break;
		case 26:
			current = toDrop.getIgnorePDR();
			break;
		case 27:
			current = toDrop.getTotalDamage();
			break;
		case 28:
			current = toDrop.getAllStat();
			break;
		case 29:
			current = toDrop.getKarmaCount();
			break;
		case 30:
			current = toDrop.getHands();
			break;
		case 31:
			current = toDrop.geticiousHammer();
			break;
		case 32:
			current = toDrop.getItemExp();
			break;
		case 33:
			current = toDrop.getSealedLevel();
			break;
		case 34:
			current = toDrop.getSealedExp();
			break;
		case 35:
			current = toDrop.getOwner();
			break;
		case 36:
			current = toDrop.getLevel();
			break;
		case 37:
			current = toDrop.getExpiration();
			break;
		case 38:
			current = toDrop.getSocket1();
			break;
		case 39:
			current = toDrop.getSocket2();
			break;
		case 40:
			current = toDrop.getSocket3();
			break;
		case 41:
			current = toDrop.getSoulName();
			break;
		case 42:
			current = toDrop.getSoulEnchanter();
			break;
		case 43:
			current = toDrop.getSoulPotential();
			break;
		case 44:
			current = toDrop.getSoulSkill();
			break;
		case 45:
			current = toDrop.getEquipOnlyId();
			break;
		case 46:
			current = toDrop.getGMLog();
			break;
		case 47:
			current = toDrop.getFlag();
			break;
	}
	return current;
}

function setEquipStatRandom(i, v) { //设置装备属性
	switch (i) {
		case 0:
			toDrop.setStr(v);
			break;
		case 1:
			toDrop.setDex(v);
			break;
		case 2:
			toDrop.setInt(v);
			break;
		case 3:
			toDrop.setLuk(v);
			break;
		case 4:
			toDrop.setHp(v);
			break;
		case 5:
			toDrop.setMp(v);
			break;
		case 6:
			toDrop.setWatk(v);
			break;
		case 7:
			toDrop.setMatk(v);
			break;
		case 8:
			toDrop.setWdef(v);
			break;
		case 9:
			toDrop.setMdef(v);
			break;
		case 10:
			toDrop.setAcc(v);
			break;
		case 11:
			toDrop.setAvoid(v);
			break;
		case 12:
			toDrop.setSpeed(v);
			break;
		case 13:
			toDrop.setJump(v);
			break;
		case 14:
			toDrop.setUpgradeSlots(v);
			break;
		case 15:
			toDrop.setLimitBreak(v);
			break;
		case 16:
			toDrop.setPotential1(v);
			break;
		case 17:
			toDrop.setPotential2(v);
			break;
		case 18:
			toDrop.setPotential3(v);
			break;
		case 19:
			toDrop.setPotential4(v);
			break;
		case 20:
			toDrop.setPotential5(v);
			break;
		case 21:
			toDrop.setPotential6(v);
			break;
		case 22:
			toDrop.setEnhance(v);
			break;
		case 23:
			toDrop.setReqLevel(v);
			break;
		case 24:
			toDrop.setYggdrasilWisdom(v);
			break;
		case 25:
			toDrop.setBossDamage(v);
			break;
		case 26:
			toDrop.setIgnorePDR(v);
			break;
		case 27:
			toDrop.setTotalDamage(v);
			break;
		case 28:
			toDrop.setAllStat(v);
			break;
		case 29:
			toDrop.setKarmaCount(v);
			break;
		case 30:
			toDrop.setHands(v);
			break;
		case 31:
			toDrop.setViciousHammer(v);
			break;
		case 32:
			toDrop.setItemEXP(v);
			break;
		case 33:
			toDrop.setSealedLevel(v);
			break;
		case 34:
			toDrop.setSealedExp(v);
			break;
		case 35:
			toDrop.setOwner(v);
			break;
		case 36:
			toDrop.setLevel(v);
			break;
		case 37:
			toDrop.setExpiration(v);
			break;
		case 38:
			toDrop.setSocket1(v);
			break;
		case 39:
			toDrop.setSocket2(v);
			break;
		case 40:
			toDrop.setSocket3(v);
			break;
		case 41:
			toDrop.setSoulName(v);
			break;
		case 42:
			toDrop.setSoulEnchanter(v);
			break;
		case 43:
			toDrop.setSoulPotential(v);
			break;
		case 44:
			toDrop.setSoulSkill(v);
			break;
		case 45:
			toDrop.setEquipOnlyId(v);
			break;
		case 46:
			toDrop.setGMLog(v);
			break;
		case 47:
			toDrop.setFlag(v);
			break;
	}
}

function getAccountIdByCid(cid) {
	var CharData = cm.sql_Select("SELECT id,accountid FROM characters where id = ?", cid)
	if (CharData.length > 0) { //得到记录数据
		return parseInt(CharData[0].get("accountid"));
	}
}
/*
 `tid` int(11) NOT NULL,
 `cid` int(11) DEFAULT '0',
 `boughtByCid` int(11) NOT NULL DEFAULT '0',
 `boughtByCName` varchar(15) NOT NULL DEFAULT '0',
 `boughtTradeType` int(2) NOT NULL DEFAULT '0',
 `boughtPrice` int(11) NOT NULL DEFAULT '0',
 `boughtItemid` int(11) NOT NULL DEFAULT '0',
 `boughtDate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
 */
function setLog(tid) {
	cm.sql_Insert("INSERT INTO cashtradesystemLog(tid,cid,boughtByCid,BoughtByCName,boughtTradeType,boughtPrice,boughtItemid) values (?,?,?,?,?,?,?)", tid, TradeCid, cm.getPlayer().getId(), c.getPlayer().getName(), EquipStatFromData[31], TradePrice, TradeItem);
}

function getPotentialInfo(itemid, potId) {
	var ii = cm.getItemInfo();
	var potName = ii.resolvePotentialId(itemid, potId);
	if (potName == '没有潜能属性') potName = '无';
	return potName;
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