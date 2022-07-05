status = -1;
var meso = 2500000;
var itemList = Array(
        Array(2022216, 600, 1, 0), //菇菇宝贝的御守
        Array(4031922, 600, 1, 0), //宠物便便
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
        Array(1142473, 80, 1, 0), //飞太远 太危险
        Array(1142670, 150, 1, 0), //马子狗
        Array(1142407, 80, 1, 0), //不要不要的
        Array(1142151, 150, 1, 0), //8+9就是狂
        Array(1142250, 150, 1, 0), //边缘人
        Array(1142732, 150, 1, 0), //狼若回头
        Array(1142733, 150, 1, 0), //不是报恩
        Array(1142734, 150, 1, 0), //就是报仇
        Array(1142334, 150, 1, 0), //有钱就是任性
        Array(1142622, 150, 1, 0) //满满的大平台
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
        } else if (cm.haveItem(5220000) || cm.getMeso() > meso) {
            //cm.sendYesNo("你持有#b转蛋券#k或#b" + meso + "#k枫币你要试试手气吗?");
            cm.sendSimple("你持有#b转蛋券#k或#b" + meso + "#k枫币你要试试手气吗?\r\n#L0##d转蛋卷x1转蛋#l\r\n#L1##d枫币250万转蛋#l");
        } else {
            cm.sendOk("你没有转蛋券或" + meso + "枫币，请收集完成再来转蛋哦.");
            cm.safeDispose();
        }
    } else if (status == 1) {

        if (selection == 0) {
            var chance = Math.floor(Math.random() * 1000);
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
                if (cm.haveItem(5220000) && cm.canHold()) {
                    if (notice == 1) {
                        cm.gainGachaponItem(itemId, quantity, "勋章转蛋机");
                    } else {
                        cm.gainItem(itemId, quantity);
                    }
                    cm.gainItem(5220000, -1);
                    cm.sendOk("你得到了 #b#t" + itemId + "##k " + quantity + "个。");
                } else {
                    cm.sendOk("请确认背包是否已经满了以及是否有转蛋卷唷。");
                }
                cm.safeDispose();
            } else {
                cm.sendOk("今天的运气可真差，什么都没有拿到。");
                cm.safeDispose();
            }
        }
        if (selection == 1) {
            var chance = Math.floor(Math.random() * 1000);
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
                if (cm.getMeso() > meso && cm.canHold()) {
                    if (notice == 1) {
                        cm.gainGachaponItem(itemId, quantity, "勋章转蛋机");
                    } else {
                        cm.gainItem(itemId, quantity);
                    }
                    cm.gainMeso(-meso);
                    cm.sendOk("你得到了 #b#t" + itemId + "##k " + quantity + "个。");
                } else {
                    cm.sendOk("请确认背包是否已经满了以及是否有250万枫币唷。");
                }
                cm.safeDispose();
            } else {
                cm.sendOk("今天的运气可真差，什么都没有拿到。");
                cm.safeDispose();
            }
        }

    } else {
        cm.dispose();
    }
}
