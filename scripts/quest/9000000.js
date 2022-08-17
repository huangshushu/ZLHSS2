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
            cm.sendNext("嘿，我是#p" + cm.getNpc() + "#，如果你不忙那么我可以和你一起出去玩吗？我听说有人聚集在这里看开始举办 #r活动#k 但我不想自己去那里，嗯？你想去帮我看看那里有什么好玩的吗？");
        } else if (status == 1) {	
            cm.sendSimple("嗯？什么样的活动？嗯，那是...冒险岛运营员不定时举办的神秘活动你想参加吗？\r\n#L2##e1#n#b 进入活动地图#k#l\r\n");
        } else if (status == 2) {
            if (selection == 0) {
                cm.sendNext("这个月，全球正在庆祝其第三周年冒险岛！通用GM举行的活动事件!");
                cm.dispose();
            } else if (selection == 1) {
                cm.sendSimple("这个活动有很多游戏。它将帮助你很多，知道如何玩游戏之前，你玩它。选择一个你想知道更多的! #b\r\n#L0# 上楼~上楼~#l\r\n#L1# 向高地活动#l\r\n#L2# 滚雪球大赛#l\r\n#L3# 打椰子比赛#l\r\n#L4# OX答题#l\r\n#L5# 寻宝活动#l#k");
            } else if (selection == 2) {
                var marr = cm.getQuestRecord(160200);
                if (marr.getCustomData() == null) {
                    marr.setCustomData("0");
                }
                var dat = parseInt(marr.getCustomData());
                if (dat + 0 * 0 * 1 >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                    cm.sendNext("你已经进入过该活动.");
                } else if (!cm.canHold()) {
                    cm.sendNext("在你的背包腾出一些空间.");
                } else if (cm.getChannelServer().getEvent() > -1) {
                    cm.saveReturnLocation("EVENT");
                    cm.getPlayer().setChalkboard(null);
                    marr.setCustomData("" + cm.getCurrentTime());
                    cm.warp(cm.getChannelServer().getEvent(), cm.getChannelServer().getEvent() == 109080000 || cm.getChannelServer().getEvent() == 109080010 ? 0 : "join00");
                } else {
                    cm.sendNext("要么活动尚未开启，要么你已经开始过一次。");
                }
                cm.dispose();
            } else if (selection == 3) {
                var selStr = "你想交换哪一个直接赢的证书?";
                for (var i = 0; i < quantities.length; i++) {
                    selStr += "\r\n#b#L" + i + "##t" + (4031332 + i) + "# 交换(" + quantities[i] + ")#l";
                }
                cm.sendSimple(selStr);
                status = 9;
            }
        } else if (status == 3) {
            if (selection == 0) {
                cm.sendNext("#b[上楼~上楼]#k 是一个游戏，参加者爬梯子到达顶部。爬上你的道路，并转移到下一个地图，通过选择正确的光柱进入的众多光柱可用. \r\n\r\n游戏由三个关卡组成，时间限制为 #b6分钟#k. 在 [上楼~上楼], 你 #b不能跳，瞬移，加速，或增加你的速度使用药剂或物品#k. 也有陷阱的光柱入口，将带领你到一个陌生的地方，所以请小心.");
                cm.dispose();
            } else if (selection == 1) {
                cm.sendNext("#b[向高地出发] 是一场穿越障碍物的比赛#k 很像耐心的森林。你可以通过克服各种障碍，在时间限制内到达最终目的地赢得它. \r\n\r\n游戏由四个关卡组成，时间限制为 #b15分钟#k. 在 [向高地活动中], 你不可以使用传送或瞬移.");
                cm.dispose();
            } else if (selection == 2) {
                cm.sendNext("#b[滚雪球大赛]#k 由两支组队，彩虹队和神秘队，和两个队的比赛,#b哪一个队在有限的时间内把雪球滚得越远越大#k. 果游戏不能在时间内决定，那么滚雪球越滚越远的球队获胜. \r\n\r\n卷起雪，用攻击它 #bCtrl键#k. 所有远程攻击和技能为基础的攻击将不会在这里使用, #b只有近距离攻击能使用#k. \r\n\r\n如果一个人物接触了雪球，他/她会被送回起点。在前面的雪人攻击的起点，以防止反对团队滚动雪前进。这是一个精心策划的战略活动，因为团队将决定是否攻击雪球或雪人.");
                cm.dispose();
            } else if (selection == 3) {
                cm.sendNext("#b[打椰子比赛]#k 由两支组队，彩虹队和神秘队，和两个队的比赛,#b看团队收集了最多椰子#k. 时间限制是 #b5分钟#k. 如果游戏结束在一个平局，额外的2分钟将被授予确定赢家。如果，因为某些原因，比分保持平局，那么比赛将结束在一场平局. \r\n\r\n所有远程攻击和技能为基础的攻击将不会在这里使用, #b只有近距离攻击能使用#k. 如果你没有一个武器的近距离攻击，你可以通过npc在地图上购买他们的武器。无论是角色的等级、武器或技能，所有的伤害都将是相同的.\r\n\r\n小心地图中的障碍和陷阱。如果角色在游戏中死亡，角色将被从游戏中消除。队员谁罢工最后椰子下降之前获胜。只有椰子砸到地上数，这意味着不要从树上掉下来的，或者偶尔的爆炸椰子就不算。地图的底部有一个隐藏的门，所以明智地使用这个门!");
                cm.dispose();
            } else if (selection == 4) {
                cm.sendNext("#b[OX答题]#k 游戏是一种冒险岛智慧通过对与错的活动。一旦你加入游戏，打开小地图按 #bM#k 看到 X 或O 这个活动很简单,就是说屏幕中间出现问题之后依照你的判断属于正确与不正确而站在地图相对于的X或者O里面！.");
                cm.dispose();
            } else if (selection == 5) {
                cm.sendNext("#b[寻宝]#k 是一个游戏，你的目标是找到 #b藏宝卷轴#k 这是隐藏在地图上 #r在10分钟内#k. 将有一批神秘宝箱隐藏起来，一旦你将他们找到，就使用攻击键进行打开获取里面的物品!.");
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
                cm.sendOk("你需要 #b" + quan + " #t" + ite + "##k 进行交换.");
            } else if (cm.getInventory(1).getNextFreeSlot() <= -1 || cm.getInventory(2).getNextFreeSlot() <= -1 || cm.getInventory(3).getNextFreeSlot() <= -1 || cm.getInventory(4).getNextFreeSlot() <= -1) {
                cm.sendOk("您腾出一些空间.");
            } else {
                cm.gainItem(pri[rand], 1);
                cm.gainItem(ite, -quan);
                cm.gainMeso(100000 * selection); //temporary prize lolol
            }
            cm.dispose();
        }
    }
}