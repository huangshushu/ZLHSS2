var quantities = Array(10, 8, 6, 5, 4, 3, 2, 1, 1, 1);
var prize1 = Array(1442047, 2000000, 2000001, 2000002, 2000003, 2000004, 2000005, 2430036, 2430037, 2430038, 2430039, 2430040); //1 day
var prize2 = Array(1442047, 4080100, 4080001, 4080002, 4080003, 4080004, 4080005, 4080006, 4080007, 4080008, 4080009, 4080010, 4080011);
var prize3 = Array(1442047, 1442048, 2022070);
var prize4 = Array(1442048, 2430082, 2430072); //7 day
var prize5 = Array(1442048, 2430091, 2430092, 2430093, 2430101, 2430102); //10 day
var prize6 = Array(1442048, 1442050, 2430073, 2430074, 2430075, 2430076, 2430077); //15 day
var prize7 = Array(1442050, 3010183, 3010182, 3010053, 2430080); //20 day
var prize8 = Array(1442050, 3010178, 3010177, 3010075, 1442049, 2430053, 2430054, 2430055, 2430056, 2430103, 2430136); //30 day
var prize9 = Array(1442049, 3010123, 3010175, 3010170, 3010172, 3010173, 2430201, 2430228, 2430229); //60 day
var prize10 = Array(1442049, 3010172, 3010171, 3010169, 3010168, 3010161, 2430117, 2430118, 2430119, 2430120, 2430137); //1 year
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}	
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {	
			cm.sendNext("嘿，我是 #p" + cm.getNpc() + "#, 如果你不忙的话…那我可以和你一起出去吗？我听说这里有人聚集在这里 #活动#k 但我不想亲自去那里…好吧，你想和我一起去看看吗?");
		} else if (status == 1) {	
			cm.sendSimple("哈？什么样的事件？嗯，那是..\r\n#L0##e1.#n#b 它是什么样的事件?#k#l\r\n#L1##e2.#n#b 向我解释事件游戏.#k#l\r\n#L2##e3.#n#b 好吧，我们走吧!#k#l\r\n#L3##e4.#n#b请更换奖励项连胜证书.#k#l");
		} else if (status == 2) {
			if (selection == 0) {
				cm.sendNext("这个月，全球正在庆祝其第三周年回顾冒险岛! 用GM将在整个事件中举办一个惊喜的活动事件，所以GM举行，确保参加至少一项活动，为伟大的奖品!");
				cm.dispose();
			} else if (selection == 1) {
				cm.sendSimple("这个事件有很多游戏。在你玩游戏之前，它会帮助你知道如何玩游戏。选择一个你想知道更多的! #b\r\n#L0# Ola Ola#l\r\n#L1# 回顾冒险岛枫体能测试#l\r\n#L2# 滚雪球比赛#l\r\n#L3# 打椰子比赛#l\r\n#L4# 0X智力测试#l\r\n#L5# 寻宝#l#k");
			} else if (selection == 2) {
				if (!cm.canHold()) {
					cm.sendNext("尽量腾出你的背包空间.");
				} else if (cm.getChannelServer().getEvent() > -1) {
					cm.saveReturnLocation("EVENT");
					cm.getPlayer().setChalkboard(null);
					cm.warp(cm.getChannelServer().getEvent(), cm.getChannelServer().getEvent() == 109080000 || cm.getChannelServer().getEvent() == 109080010 ? 0 : "join00");
				} else {
					cm.sendNext("无论是活动没有开始，你都已经有了 #b秘密卷轴#k, 或者你已经参加了这一活动在过去24小时内。请稍后再试!");
				}
				cm.dispose();
			} else if (selection == 3) {
				var selStr = "你想交换哪一个直接赢的证书?";
				for (var i = 0; i < quantities.length; i++) {
					selStr += "\r\n#b#L" + i + "##t" + (4031332 + i) + "# Exchange(" + quantities[i] + ")#l";
				}
				cm.sendSimple(selStr);
				status = 9;
			}
		} else if (status == 3) {
			if (selection == 0) {
				cm.sendNext("#b[上楼 上楼]#k 是一个游戏，参与者爬梯子到达顶部。通过选择正确的光柱，从众多的光柱门中选择正确的光柱门，爬上你的方法. \r\n\r\n游戏由三个层次组成，时间限制是 #b6 分钟#k. 在[Ola Ola], 你 #b不能跳，瞬移，加速，或增加你的速度使用药剂或物品#k. 还有一些恶作剧的光柱门，将导致你到一个陌生的地方，所以请注意那些.");
				cm.dispose();
			} else if (selection == 1) {
				cm.sendNext("#b[回顾冒险岛的体能测试] 是一个种通过障碍物的#k 很像森林的耐心。你可以通过克服各种障碍，并在时限内到达最终目的地。 \r\n\r\n游戏由四个层次组成，时间限制是 #b15分钟#k.[回顾冒险岛体能测试]时，你不可以使用传送或速度加成.");
				cm.dispose();
			} else if (selection == 2) {
				cm.sendNext("#b[滚雪球]#k 由两队、枫叶队和故事队组成，两队的勋章也看不见 #b在有限的时间里，哪个队把雪球滚得越远，越大#k. 如果游戏不能在时间段内决定，那么就把雪球滚到更远的地方 \r\n\r\n卷起的雪，在未攻击它g #bCtrl#k. 所有远程攻击和技能为基础的攻击将不在这里能使用, #b只有关闭的攻击将工作#k. \r\n\r\n如果一个角色接触到雪球，他/她会被送回起点。在出发点前面的雪人攻击，以防止对方从滚动的雪前进。这是一个计划好的策略，因为团队将决定是否攻击滚雪球或雪人.");
				cm.dispose();
			} else if (selection == 3) {
				cm.sendNext("#b[椰子比赛]#k 由两队，枫叶队和故事的团队，和两支出来勋章看不到#哪个团队收集了最多椰子#k. 时间限制 #b5 分钟#k. 如果游戏结束于一条领带，一个额外的2分钟将被授予确定获胜者。如果，为了某种原因，比分保持平局，那么游戏将以平局结束。\r\n \ r所有远程攻击技能的攻击将不会在这里工作，#市邦立的近距离攻击将#如果你不有一个近距离攻击的武器，你可以购买他们通过活动地图内的NPC。无论是性格、水平的武器或技能，所有赔偿的适用将是相同的。\r\n \ r \ nbeware的重重障碍和陷阱在地图。如果角色在游戏中死亡，玩家将被淘汰出局。在椰子下降的最后一个球员的球员。只有椰子砸到地上数，这意味着不要从树上掉下来的，或者偶尔的爆炸椰子就不算。还有一个隐藏的门在地图底部的一个壳，所以使用的是明智的!");
				cm.dispose();
			} else if (selection == 4) {
				cm.sendNext("#b[0X智力测试]#k 游戏是一种回顾冒险岛智慧通过X和O的。一旦你加入游戏，打开小地图按 #bM#k去看那里的“×”和“0”。总共有 #r10 问题#k 将给予，和他们的角色，所有正确地赢得比赛. \r\n\r\n一旦提出问题，使用梯子进入正确答案的区域，如果不选择一个答案或是挂在梯子上过去的时间限制，字符将被淘汰。请保持你的位置直到[对的] 在移动之前，关闭屏幕。为了防止任何类型的欺骗，所有类型的聊天将被关闭在0x测验.");
				cm.dispose();
			} else if (selection == 5) {
				cm.sendNext("#b[寻宝]#k 是一个游戏，你的目标是找到 #b宝卷轴#k这是隐藏在地图上 #r在 10分钟#k. 将有一批神秘宝箱隐藏起来，一旦你将他们分开，许多项目将表面从胸部。你的工作是从这些物品中挑选出这些宝藏. \r\n宝箱可以被使用 #b规则攻击#k,一旦你拥有了财富，你可以通过一个全国人大代表的交易项目来交易秘密的卷轴。买卖全国人大可以找到关于“宝”的狩猎地图，但是你可以通过交易你的卷轴 #bVikin#k of Lith Harbor.\r\n\r\n这个游戏有隐藏的门户网站共享和隐藏的传送点。要使用它们，按 #b上箭头#k 在一定的位置，你会被传送到一个不同的地方。试着跳一跳，因为你还可以跑到藏起来的楼梯或绳索。也有一个宝藏，会把你带到一个隐藏的地方，和一个隐藏的胸部，只能通过隐藏的门，所以试着四处寻找.\r\n\r\n在游戏中的宝藏，所有攻击技能将 #r禁用#k, 所以请用常规的攻击将宝的胸部.");
				cm.dispose();
			}
		} else if (status == 10) {
			if (selection < 0 || selection > quantities.length) {
				return;
			}
			var ite = 4031332 + selection;
			var quan = quantities[selection];
			var pri;
			switch(selection) {
				case 0:
					pri = prize1;
					break;
				case 1:
					pri = prize2;
					break;
				case 2:
					pri = prize3;
					break;
				case 3:
					pri = prize4;
					break;
				case 4:
					pri = prize5;
					break;
				case 5:
					pri = prize6;
					break;
				case 6:
					pri = prize7;
					break;
				case 7:
					pri = prize8;
					break;
				case 8:
					pri = prize9;
					break;
				case 9:
					pri = prize10;
					break;
				default:
					cm.dispose();
					return;
			}
			var rand = java.lang.Math.floor(java.lang.Math.random() * pri.length);
			if (!cm.haveItem(ite, quan)) {
				cm.sendOk("你需要 #b" + quan + " #t" + ite + "##k 与物品交换.");
			} else if (cm.getInventory(1).getNextFreeSlot() <= -1 || cm.getInventory(2).getNextFreeSlot() <= -1 || cm.getInventory(3).getNextFreeSlot() <= -1 || cm.getInventory(4).getNextFreeSlot() <= -1) {
				cm.sendOk("你需要腾出背包.");
			} else {
				cm.gainItem(pri[rand], 1);
				cm.gainItem(ite, -quan);
				cm.gainMeso(100000 * selection); //temporary prize lolol
			}
			cm.dispose();
		}
	}
}
