/* 活动转蛋机 */
status = -1;
var itemList = Array(
        Array(2290006, 200, 1, 0), //[技能书]格挡
        Array(2290007, 200, 1, 0), //[技能书]格挡
        Array(2290008, 200, 1, 0), //[技能书]进阶斗气
        Array(2290009, 200, 1, 0), //[技能书]进阶斗气
        Array(2290010, 200, 1, 0), //[技能书]无双剑舞
        Array(2290022, 200, 1, 0), //[技能书]黑暗力量
        Array(2290050, 200, 1, 0), //[技能书]天使之箭
        Array(2290051, 200, 1, 0), //[技能书]天使之箭
        Array(2290049, 200, 1, 0), //[技能书]天怒
        Array(2290040, 200, 1, 0), //[技能书]火流星
        Array(2290046, 200, 1, 0), //[技能书]暴风雪
        Array(2290052, 200, 1, 0), //[技能书]会心之眼
        Array(2290053, 200, 1, 0), //[技能书]会心之眼
        Array(2290060, 200, 1, 0), //[技能书]暴风神射
        Array(2290061, 200, 1, 0), //[技能书]暴风神射
        Array(2290076, 200, 1, 0), //[技能书]瞬身回避
        Array(2290077, 200, 1, 0), //[技能书]瞬身回避
        Array(2290088, 200, 1, 0), //[技能书]无形镖
        Array(2290089, 200, 1, 0), //[技能书]无形镖
        Array(2290084, 200, 1, 0), //[技能书]三飞闪
        Array(2290126, 200, 1, 0), //[技能书]终极攻击 20
        Array(2290127, 200, 1, 0), //[技能书]终极攻击 30
        Array(2290132, 200, 1, 0), //[技能书]终极之矛 20
        Array(2290133, 200, 1, 0), //[技能书]终极之矛 30
        Array(2290130, 200, 1, 0), //[技能书]灵魂战斗 20
        Array(2290131, 200, 1, 0), //[技能书]灵魂战斗 30
        Array(2290136, 200, 1, 0), //[技能书]极冰暴风 20
        Array(2370002, 200, 1, 0), //兵法书(尉缭子)
        Array(2370003, 200, 1, 0), //兵法书(六韬)
        Array(2370004, 200, 1, 0), //兵法书(三略)
        Array(2290041, 30, 1, 1), //[技能书]火流星
        Array(2290048, 30, 1, 1), //[技能书]天怒
        Array(2290023, 30, 1, 1), //[技能书]黑暗力量
        Array(2290085, 30, 1, 1), //[技能书]三飞闪
        Array(2290047, 30, 1, 1), //[技能书]暴风雪
        Array(2290011, 30, 1, 1), //[技能书]无双剑舞
        Array(2290096, 20, 1, 1), //[技能书]枫叶祝福
        Array(2290137, 80, 1, 1), //[技能书]极冰暴风 30
        Array(3012019, 20, 1, 1), //爱情海椅子
        Array(3012012, 40, 1, 1), //樱花椅子
        Array(3012017, 40, 1, 1), //巧克力干酪椅
        Array(3012010, 40, 1, 1), //巧克力蛋糕
        Array(2370000, 160, 1, 1), //兵法书(孙子)
        Array(2370001, 180, 1, 1)//兵法书(吴子)
        );

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("不想使用了吗？");
            cm.dispose();
        }
        status--;
    }

    if (status == 0) {
        if (cm.getPlayer().getLevel() < 30) {
            cm.sendOk("必须达到30级才能使用。");
            cm.dispose();
        } else if (cm.haveItem(4032056, 500)) {
            cm.sendYesNo("你持有#b枫叶水晶x500#k你要试试手气吗?");
        } else {
            cm.sendOk("你没有枫叶水晶x500，请收集完成再来转蛋哦.");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 1000);
        if (chance > 200) {
            chance = 200;
        }
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            if (cm.haveItem(4032056, 500) && cm.canHold()) {
                cm.gainItem(4032056, -500);
                if (notice == 1) {
                    cm.gainGachaponItem(itemId, quantity, "活动转蛋机");
                } else {
                    cm.gainItem(itemId, quantity);
                }
                cm.getItemLog("活动转蛋机", " 抽到 " + itemId + "(" + cm.getItemName(itemId) + ") " + quantity + "个。");
                cm.sendOk("你得到了 #b#t" + itemId + "##k " + quantity + "个。");
            } else {
                cm.sendOk("请确认背包是否已经满了以及是否有转蛋卷唷。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。");
            cm.safeDispose();
        }
    } else {
        cm.dispose();
    }
}
