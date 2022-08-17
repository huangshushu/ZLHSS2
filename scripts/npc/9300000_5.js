

/*
 * 
 * @type黄金枫叶装备兑换
 * @npcID9310101
 * @换购为：帽子
 */
/* 
 case 1002695://幽灵帽
 case 1002609://兔耳魔法帽
 case 1002665://西红柿帽
 case 1002985://豆箱帽子
 case 1002986://蝙蝠怪面具
 case 1002761://枫叶面具
 case 1002760://地球帽
 case 1002583://蝙蝠客头套
 case 1002543://板栗帽
 case 1002448://紫色头巾
 */
var 时间之石 = 4021010;
var status = 0;
var zones = 0;
var ItemId = Array(

		Array(1102042, 20, "浪人披风(紫)"),
		Array(1102041, 20, "浪人披风(粉)"),
		Array(1082149, 30, "工地手套(褐)"),
		Array(2049100, 30, "混沌卷轴60%"),
		Array(2340000, 40, "祝福卷轴"),
		Array(2070005, 120, "金钱镖"),
		Array(2070006, 250, "齿轮镖")
		//Array(4310059, 100, "必成兑换币")
		/*Array(2040709, 80, "鞋子敏捷必成卷"),
		Array(2040710, 80, "鞋子跳跃必成卷"),
		Array(2040711, 80, "鞋子速度必成卷"),
		Array(2040806, 80, "手套敏捷必成卷"),
		Array(2040903, 80, "盾牌防御必成卷"),
		Array(2041024, 80, "披风魔法防御必成卷"),
		Array(2041025, 80, "披风物理防御必成卷"),
		Array(2043003, 80, "单手剑攻击必成卷"),
		Array(2043103, 80, "单手斧攻击必成卷"),
		Array(2043203, 80, "单手钝器攻击必成卷"),
		Array(2043303, 80, "短剑攻击必成卷"),
		Array(2043703, 80, "短杖攻击必成卷"),
		Array(2043803, 80, "长杖攻击必成卷"),
		Array(2044003, 80, "双手剑攻击必成卷"),
		Array(2044019, 80, "双手剑魔力必成卷"),
		Array(2044103, 80, "双手斧攻击必成卷"),
		Array(2044203, 80, "双手钝器攻击必成卷"),
		Array(2044303, 80, "枪攻击必成卷"),
		Array(2044403, 80, "矛攻击必成卷"),
		Array(2044503, 80, "弓攻击必成卷"),
		Array(2044603, 80, "弩攻击必成卷"),
		Array(2044703, 80, "拳套攻击必成卷"),
		Array(2044815, 80, "指节攻击必成卷"),
		Array(2044908, 80, "短枪攻击必成卷"),
        Array(2040807, 80, "手套攻击必成卷")*/
        //如需其它道具兑换，请按照此格式自行添置。
        );

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
            if (cm.getLevel < 10) {
                cm.sendOK("你的等级不足10级。。打开干嘛？", 2);
                cm.dispose();
            } else {3
                selStr = "\t\t#e#r你想要用雪花币购买什么物品呢？？？\r\n目前拥有#b【#c4310014#个#v4310014##z4310014#】！#n#k\r\n";
                for (var i = 0; i < ItemId.length; i++) {
                    selStr += "\r\n#L" + i + "##b#z" + ItemId[i][0] + "##k (需要#r " + ItemId[i][1] + " #k个 雪花币！)";
                }
                cm.sendSimple(selStr);
                zones == 0;
            }
        } else if (status == 1) {
            if (zones == 1) {
                cm.sendNext("你让我帮你做什么呢？", 2);
                zones = 2;
            } else if (zones == 0) {
if (cm.itemQuantity(4310014) >= ItemId[selection][1]) {
cm.gainItem(4310014,-(ItemId[selection][1]));
                        cm.gainItem(ItemId[selection][0], 1);
                       Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"【副本币商店】" + " : [" + cm.getPlayer().getName() +"]玩家在雪花币商店中淘了一件宝贝~",true).getBytes());
                        cm.sendOk("兑换成功，请检背包!");
                        cm.dispose();
                    } else {
                        cm.sendOk("雪花币不足！");
                        cm.dispose();
                    }
                }
            } else if (status == 2) {
                if (zones == 2) {
                    cm.sendNext("我用于提升我魔法的时间之石被一群蘑菇妖偷走了,你能帮去抢回来吗？");
                    zones = 3;
                }
            } else if (status == 3) {
                if (zones == 3) {
                    cm.sendNext("行,这个没问题？你告诉我那些偷了你时间之石的蘑菇妖现在在什么地方呢?", 2);
                    zones = 4;
                }
            } else if (status == 4) {
                if (zones == 4) {
                    cm.sendNext("这个物品是#b全世界掉落#k的。你可以在世界上的#b任何一个怪物#k上获取！");
                    zones = 5;
                }
            } else if (status == 5) {
                if (zones == 5) {
                    cm.sendYesNo("如果你能帮我这个大忙的话,我会给你一些丰厚的奖励的，您是否愿意帮我？");
                }
            } else if (status == 6) {
                cm.setBossLog('MogoQuest');
                cm.gainItem(5220001, 1);
                cm.sendOk("非常感谢！获得后和我说话，就能换购物品了！");
                cm.dispose();
            }
        }
}	
