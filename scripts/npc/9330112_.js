status = -1;
var meso = 1000000;
var itemList = Array(
        Array(2022216, 600, 1, 0), //菇菇宝贝的御守
        Array(4031922, 600, 1, 0), //宠物便便
        Array(4000377, 600, 1, 0), //小陀粪便
        Array(4000378, 600, 1, 0), //大陀粪便
        Array(4031302, 600, 1, 0), //海底垃圾
        Array(4000199, 600, 1, 0), //帅气狗仔的墨镜
        Array(2022232, 600, 1, 0), //菇菇宝贝口味的番茄汁
        Array(2022233, 600, 1, 0), //叶子口味的番茄汁
        Array(2022234, 600, 1, 0), //绿水灵口味的番茄汁
        Array(2022235, 600, 1, 0), //蓝水灵口味的番茄汁
        Array(2022236, 600, 1, 0), //超级番茄汁
        Array(2022217, 600, 1, 0), //残暴炎魔的御守
        Array(2022218, 600, 1, 0), //巴洛古的御守
        Array(2022219, 600, 1, 0), //海怒斯的御守
        Array(2022220, 600, 1, 0), //拉图斯的御守
        Array(2022223, 600, 1, 0), //企鹅王的御守
        Array(2022565, 600, 1, 0), //一片巧克力蛋糕
        Array(2022566, 600, 1, 0), //一片草莓蛋糕
        Array(2022567, 600, 1, 0), //一片鲜奶油蛋糕
        Array(2070005, 300, 1, 0), //雷之镖
        Array(2070006, 200, 1, 0), //日之镖
        Array(2070007, 200, 1, 0), //月牙镖
        Array(1002600, 600, 1, 0), //红色枫叶头带
        Array(1002601, 600, 1, 0), //黄色枫叶头带
        Array(1002603, 600, 1, 0), //白色枫叶头带
        Array(1032040, 600, 1, 0), //枫叶赤光耳环
        Array(1032041, 600, 1, 0), //枫叶赤光耳环
        Array(1032042, 600, 1, 0), //枫叶赤光耳环
        Array(1102071, 400, 1, 0), //真‧枫叶披风
        Array(4001197, 80, 1, 0), //水蓝色矿石
        Array(1102000, 600, 1, 0), //绿色冒险家披风
        Array(1102001, 600, 1, 0), //蓝色冒险家披风
        Array(1102002, 600, 1, 0), //红色冒险家披风
        Array(1102003, 600, 1, 0), //白色冒险家披风
        Array(1102004, 600, 1, 0), //黑色冒险家披风
        Array(1032055, 600, 1, 0), //干员C的老旧耳机
        Array(1032056, 600, 1, 0), //干员C的老旧耳机
        Array(1032057, 600, 1, 0), //干员C的老旧耳机
        Array(1102015, 600, 1, 0), //蓝色魔法披风
        Array(1102016, 600, 1, 0), //红色魔法披风
        Array(1102017, 600, 1, 0), //白色魔法披风
        Array(1102018, 600, 1, 0), //黑色魔法披风
        Array(1002602, 400, 1, 0), //蓝色枫叶头带
        Array(1372035, 50, 1, 0), //旋火短杖
        Array(1372036, 100, 1, 0), //五毒短杖
        Array(1372037, 100, 1, 0), //极冻短杖
        Array(1372038, 100, 1, 0), //雷鸣短杖
        Array(1382045, 50, 1, 0), //火云长杖
        Array(1382046, 80, 1, 0), //毒龙长杖
        Array(1382047, 80, 1, 0), //冰魄长杖
        Array(1382048, 80, 1, 0), //狂雷长杖
        Array(1492073, 240, 1, 0), //黄金枫叶火枪
        Array(1302321, 240, 1, 0), //圈圈谷纪念单手剑
        Array(1332266, 240, 1, 0), //圈圈谷纪念短剑
        Array(1372213, 240, 1, 0), //圈圈谷纪念短杖
        Array(1302251, 240, 1, 0), //圈圈谷纪念长杖
        Array(1402242, 240, 1, 0), //圈圈谷纪念双手剑
        Array(1432206, 240, 1, 0), //圈圈谷纪念枪
        Array(1442260, 240, 1, 0), //圈圈谷纪念矛
        Array(1452244, 240, 1, 0), //圈圈谷纪念弓
        Array(1472253, 240, 1, 0), //圈圈谷纪念拳套
        Array(1462231, 240, 1, 0), //圈圈谷纪念弩
        Array(1482208, 240, 1, 0) //圈圈谷纪念指虎
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
        if (cm.getPlayer().getLevel() < 25) {
            cm.sendOk("必须达到25级才能使用。");
            cm.dispose();
        } else if (cm.getMeso() > meso) {
            cm.sendYesNo("如果你有#b100W枫币#k你要试试手气吗?");
        } else {
            cm.sendOk("你没有足够的枫币，请准备好再来转蛋哦.");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 1000);
        if (chance > 600) {
            chance = 600;
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
            if ((cm.getMeso() > meso) && cm.canHold()) {
                if (notice == 1) {
                    cm.gainGachaponItem(itemId, quantity, "枫币潮流转蛋机");
                } else {
                    cm.gainItem(itemId, quantity);
                }
                cm.gainMeso(-meso);
                cm.sendOk("你得到了 #b#t" + itemId + "##k " + quantity + "个。");
            } else {
                cm.sendOk("请确认背包是否已经满了以及是否有足够的枫币唷。");
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
