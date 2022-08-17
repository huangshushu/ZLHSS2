
/*
 * 
 * 物品对换物品  作者:bay 廖
 */
/* 
 */
//---------变量区-------


importPackage(net.sf.MS079.client);
var status = 0;
var zones = 0;
//4000425
var ItemId = Array(
    Array(4001254,4031456,500, "1"),//闪耀的回顾冒险岛纪念币
    Array(2340000,4031456,500, "2"),//兑换 祝福卷轴
    Array(1082149,4031456,300, "3"),//兑换 工地手套(褐）
    Array(1102041,4031456,300, "4"),//兑换 浪人披风(粉 )
    Array(1102042,4031456,300, "5"),//兑换 浪人披风(紫)
    Array(2040025,4031456,200, "6"),//头盔智力卷轴60%
    Array(2040024,4031456,200, "7"),//头盔智力卷轴10%
    Array(2040804,4031456,200, "8"),//手套攻击卷轴60%
    Array(2040805,4031456,200, "9"),//手套攻击卷轴10%
    Array(2040817,4031456,200, "10"),//手套魔力卷轴60%
    Array(2040816,4031456,200, "11"),//手套魔力卷轴10%
    Array(2040914,4031456,200, "12"),//盾牌攻击卷轴60%
    Array(2040915,4031456,200, "13"),//盾牌攻击卷轴10%
    Array(2040919,4031456,200, "14"),//盾牌魔力卷轴60%
    Array(2040920,4031456,200, "15"),//盾牌魔力卷轴10%
    Array(2041307,4031456,200, "16"),//腰带敏捷卷轴60%
    Array(2041308,4031456,200, "17"),//腰带敏捷卷轴10%
    Array(2041301,4031456,200, "18"),//腰带力量卷轴60%
    Array(2041302,4031456,200, "19"),//腰带力量卷轴10%
    Array(2041310,4031456,200, "20"),//腰带运气卷轴60%
    Array(2041311,4031456,200, "21"),//腰带运气卷轴10%
    Array(2041304,4031456,200, "22"),//腰带智力卷轴60%
    Array(2041305,4031456,200, "23"),//腰带智力卷轴10%
    Array(2040301,4031456,200, "24"),//耳环智力卷轴60%
    Array(2040302,4031456,200, "25"),//耳环智力卷轴10%
    Array(2040317,4031456,200, "26"),//耳环敏捷卷轴60%
    Array(2040318,4031456,200, "27")//耳环敏捷卷轴10%   最后一个结尾去掉,
        //如需其它道具兑换，请按照此格式自行添置。
        //代码,价格,介绍
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
            StringS = "您好，请选择您需要兑换的武器。";
            for (var i = 0; i < ItemId.length; i++) {
                StringS += "\r\n#L" + i + "##b#z" + ItemId[i][0] + "##k (需要#r#z " + ItemId[i][1] + " ##kX" + ItemId[i][2] + "个.)";
            }
            cm.sendSimple(StringS);
            zones == 0;

        } else if (status == 1) {
            if (zones == 1) {
                cm.sendNext("你让我帮你做什么呢？", 2);
                zones = 2;
            } else if (zones == 0) {
                if (cm.getPlayer().getInventory(net.sf.MS079.client.MapleInventoryType.getByType(1)).isFull())
                {
                    cm.sendOk("您至少应该让装备栏空出一格");
                    cm.dispose();
                    return;
                } else if (cm.haveItem(ItemId[selection][1],ItemId[selection][2])) {
                    cm.gainItem(ItemId[selection][0], +1);
                    cm.gainItem((ItemId[selection][1]),-(ItemId[selection][2]));
                    cm.sendOk("兑换成功，请检背包!");
                    cm.dispose();
                } else {
                    cm.sendOk("不足！！");
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
