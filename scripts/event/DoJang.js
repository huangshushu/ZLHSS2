/*
 内容：新版武陵副本
 备注：
 
 */
        var layersTotal = 25;
var mobs = new Array(// 层数、怪物ID、数量、加强倍数
        // 第一层		极速梦想
        new Array(1, 1, 100100, 1, 30000), //Lv1 - 梦想 15
        new Array(1, 1, 100101, 1, 30000), //Lv2 - 梦想 20
        new Array(1, 1, 130101, 1, 24000), //Lv5 - 红梦想 50
        new Array(1, 1, 4250000, 1, 30), //Lv98 - 苔藓梦想 61000
        new Array(1, 1, 9400908, 1, 30), //Lv105 - 邪恶苔藓梦想 75000
        new Array(1, 1, 9400827, 1, 30), //Lv71 - 黑暗苔藓梦想 10000

        // 第二层		圆一次马里奥的梦
        new Array(2, 1, 2600200, 10, 3), //Lv122 - 绿蘑菇 447770
        new Array(2, 1, 2600201, 20, 3), //Lv122 - 受挫的绿蘑菇 447770
        new Array(2, 1, 2600202, 20, 3), //Lv122 - 花蘑菇 447770
        new Array(2, 1, 2600203, 10, 3), //Lv122 - 刺蘑菇 447770
        new Array(2, 1, 5250000, 10, 15), //Lv102 - 苔藓蘑菇 69000
        new Array(2, 2, 2600208, 5, 3), //Lv122 - 蘑菇王 2725000

        // 第三层		能当柴用
        new Array(3, 1, 100005, 10, 1500), //Lv4 - 木妖 35
        new Array(3, 1, 1110101, 10, 1500), //Lv10 - 黑木妖 125
        new Array(3, 1, 1130100, 10, 1500), //Lv12 - 斧木妖 175
        new Array(3, 1, 1140100, 10, 1500), //Lv16 - 古木妖 275
        new Array(3, 1, 1140130, 10, 1500), //Lv17 - 开心的古木妖 300
        new Array(3, 1, 2130100, 10, 1500), //Lv14 - 黑斧木妖 225
        new Array(3, 1, 9300246, 10, 150), //Lv62 - 苔藓木妖 6300
        new Array(3, 1, 9800052, 10, 3), //Lv117 - 苔藓木妖 1485000

        // 第四层		奇怪的蘑菇你不要踩
        new Array(4, 1, 2600204, 20, 3), //Lv122 - 蓝蘑菇 447770
        new Array(4, 1, 2600205, 10, 3), //Lv122 - 哭泣的蓝蘑菇 447770
        new Array(4, 1, 5250000, 10, 15), //Lv102 - 苔藓蘑菇 69000
        new Array(4, 1, 9391001, 10, 15), //Lv135 - 都市蘑菇仔 160000
        new Array(4, 2, 9400205, 10, 30), //Lv90 - 蓝蘑菇王 200000
        new Array(4, 1, 9800053, 10, 3), //Lv119 - 苔藓蘑菇 1545000

        // 第五层		放开那女蘑菇~
        new Array(5, 1, 2600206, 20, 6), //Lv122 - 僵尸蘑菇 447770
        new Array(5, 1, 2600207, 20, 6), //Lv122 - 生气的僵尸蘑菇 447770
        new Array(5, 2, 2600208, 5, 6), //Lv122 - 蘑菇王 2725000
        new Array(5, 2, 9400205, 5, 75), //Lv90 - 蓝蘑菇王 200000
        new Array(5, 1, 9500441, 10, 3), //Lv120 - 情侣蘑菇 1605000
        new Array(5, 2, 9300436, 5, 750), //Lv66 - 僵尸蘑菇王 20000
        new Array(5, 1, 9400829, 10, 300), //Lv73 - 黑暗苔藓蘑菇 13000
        new Array(5, 1, 9300692, 1, 30), //Lv1 - 新婚100天情侣蘑菇 35
        new Array(5, 2, 9500609, 1, 3000), //Lv10 - 情圣绿水灵王 7100
        new Array(5, 1, 9100008, 2, 3), //超级可乐梦想 可忽略通关 930000
        new Array(5, 1, 9100000, 2, 3), //超级水灵 可忽略通关 930000

        //////////////////////////////////////////////////////////////////

        //第七层		水灵灵的世界
        new Array(7, 1, 100006, 5, 3000), //Lv7 - 绿水灵 80
        new Array(7, 1, 1210103, 5, 3000), //Lv10 - 蓝水灵 125
        new Array(7, 1, 9300027, 5, 1500), //Lv23 - 恶魔水灵 465
        new Array(7, 1, 7120103, 5, 6), //Lv120 - 红水灵 105000
        new Array(7, 1, 7120104, 5, 6), //Lv120 - 银水灵 105000
        new Array(7, 1, 7120105, 5, 6), //Lv120 - 金水灵 105000
        new Array(7, 1, 9391000, 5, 6), //Lv135 - 街道水灵 160000
        new Array(7, 1, 2600215, 5, 3), //Lv126 - 椰子树水灵 517049
        new Array(7, 1, 2600216, 5, 3), //Lv126 - 紫贝壳水灵 517049
        new Array(7, 1, 2600217, 5, 3), //Lv126 - 蓝色游泳圈水灵 517049
        new Array(7, 1, 2600218, 5, 3), //Lv126 - 虾水灵 517049
        new Array(7, 1, 2600219, 5, 3), //Lv126 - 飞鱼水灵 517049
        new Array(7, 1, 2600220, 5, 3), //Lv126 - 海星章鱼水灵 517049
        new Array(7, 1, 2600221, 5, 3), //Lv126 - 海螺章鱼水灵 517049
        new Array(7, 2, 2600222, 1, 6), //Lv126 - 船长黑水灵 2950000

        //第八层		狂鳄之灾
        new Array(8, 1, 8210000, 10, 3), //Lv115 - 看门鳄鱼兵 95000
        new Array(8, 1, 9300297, 10, 1.5), //Lv125 - 红色鳄鱼兵 9500000
        new Array(8, 1, 9300234, 10, 150), //Lv32 - 鳄鱼 1100
        new Array(8, 1, 9300235, 10, 150), //Lv52 - 黑鳄鱼 3400
        new Array(8, 1, 9300114, 10, 150), //Lv63 - 老海盗可怕的鳄鱼宠物 8040
        new Array(8, 1, 9300120, 10, 150), //Lv65 - 老海盗可恶的鳄鱼宠物 9000
        new Array(8, 1, 9300123, 10, 150), //Lv65 - 老海盗的鳄鱼宠物 9000
        new Array(8, 1, 2600322, 10, 3), //Lv139 - 鳄鳄 959867
        new Array(8, 2, 6220000, 1, 3000), //Lv25 - 多尔 5250

        //第九层		海贼王来袭
        new Array(9, 1, 8141000, 10, 15), //Lv119 - 大海贼 103000
        new Array(9, 1, 8141100, 10, 15), //Lv122 - 大海贼王 109000
        new Array(9, 1, 8145008, 20, 15), //Lv134 - 大海贼熊 155000
        new Array(9, 2, 8220003, 1, 15), //Lv145 - 大海兽 2100000
        new Array(9, 2, 2600326, 1, 6), //Lv139 - 老海盗 4500000

        //第十层		暗杀团的阴谋
        new Array(10, 1, 9390813, 10, 9), //Lv157 - 雪狼 300000
        new Array(10, 1, 9390814, 10, 9), //Lv158 - 黑暗者 310000
        new Array(10, 1, 9390818, 10, 9), //Lv160 - 暗杀团刺客 660000
        new Array(10, 1, 9390819, 10, 9), //Lv162 - 暗杀团战斗者 700000
        new Array(10, 1, 9390820, 10, 9), //Lv163 - 暗杀团恶魔训练师 720000
        new Array(10, 1, 9390821, 10, 9), //Lv162 - 爆眼小恶魔 700000
        new Array(10, 1, 9390822, 1, 9), //Lv165 - 暗杀团头头卡纳斯 1175000
        new Array(10, 1, 9390833, 10, 9), //Lv160 - 可疑的蒙面人 660000

        //第十一层	大航海时代I
        new Array(11, 2, 9700037, 2, 3), //Lv62 - 幽灵船船长 4000000
        new Array(11, 2, 9420513, 5, 3), //Lv100 - 幽灵船长 2000000
        new Array(11, 2, 9400589, 1, 1.5), //Lv120 - 地狱船长 240000000
        new Array(11, 2, 2600222, 1, 3), //Lv126 - 船长黑水灵 2950000
        new Array(11, 3, 9500487, 1, 3), //Lv150 - 海盗王巴尔博萨 11750000
        new Array(11, 3, 9800156, 1, 3), //Lv134 - 老海盗 6200000

        //////////////////////////////////////////////////////////

        //第十三层	喜羊羊与灰太狼
        new Array(13, 1, 9600003, 10, 900), //Lv45 - 绵羊 2400
        new Array(13, 1, 9600004, 10, 900), //Lv50 - 山羊 3000
        new Array(13, 1, 9600005, 10, 900), //Lv55 - 黑山羊 4000
        new Array(13, 1, 9600008, 10, 900), //Lv57 - 黑绵羊 4600
        new Array(13, 1, 2600014, 10, 15), //Lv104 - 恶魔绵羊 217920
        new Array(13, 1, 9810001, 10, 30), //Lv114 - 邪恶绵羊 93000
        new Array(13, 2, 9300481, 1, 3), //Lv117 - 绵羊酋长 4950000
        new Array(13, 2, 9300624, 1, 15), //Lv115 - 血牙副队长 525000

        //第十四层	“是死是活，就在今天”――《人狼大战》

        new Array(14, 2, 2500821, 1, 3), //Lv90 - 恶魔血牙 16666667
        new Array(14, 2, 2500241, 1, 3), //Lv90 - 恶魔血牙 16666667
        new Array(14, 2, 2500701, 1, 3), //Lv90 - 恶魔铁心 16666667
        new Array(14, 2, 2500850, 10, 3), //Lv50 - 恶魔血牙 5000000
        new Array(14, 2, 8870003, 10, 3), //Lv115 - 血牙 525000

        //第十五层	石头记
        new Array(15, 1, 2600209, 20, 15), //Lv124 - 石头人 479546
        new Array(15, 1, 2600210, 20, 15), //Lv124 - 黑石头人 479546
        new Array(15, 1, 2600211, 20, 15), //Lv124 - 混种石头人 479546
        new Array(15, 1, 2600212, 20, 15), //Lv124 - 冰混种石头人 479546
        new Array(15, 1, 2600213, 20, 15), //Lv124 - 火混种石头人 479546
        new Array(15, 1, 2600214, 10, 15), //Lv124 - 钢铁石头人 2825000

        //第十六层	十八金人阵
        new Array(16, 1, 9600021, 18, 150), //Lv130 - 巨化金人 135000
        new Array(16, 1, 9600022, 18, 150), //Lv125 - 巨化银人 115000
        new Array(16, 1, 9600019, 18, 150), //Lv130 - 小金人 135000
        new Array(16, 1, 9600020, 18, 150), //Lv120 - 小铜人 105000

        //第十七层	叱咤武林
        new Array(17, 3, 9600025, 1, 5), //Lv150 - 武林妖僧 80000000
        new Array(17, 2, 9600024, 18, 125), //Lv125 - 银人 115000

        ////////////////////////////////////////////////////////

        //第十九层	早起的鸟儿有虫吃
        new Array(19, 1, 2600609, 10, 15), //Lv164 - 闹钟啾啾 2746619
        new Array(19, 1, 8200000, 10, 150), //Lv136 - 时间之眼 165000
        new Array(19, 2, 9800071, 10, 90), //Lv153 - 时间门神 3900000
        new Array(19, 3, 9300513, 1, 30), //Lv125 - 帕普拉图斯的座钟 8000000

        //第二十层	冰冻的一切不及一颗冰冻的心
        new Array(20, 1, 2600907, 10, 6), //Lv140 - 冰冻的不安 7400000
        new Array(20, 1, 2600906, 10, 6), //Lv140 - 冰冻的愤怒 7400000
        new Array(20, 1, 2600908, 10, 6), //Lv140 - 冰冻的空虚 7400000
        new Array(20, 1, 2600909, 10, 6), //Lv140 - 冰冻的孤独 7400000
        new Array(20, 1, 2600905, 10, 6), //Lv140 - 冰冻的恐怖 7400000

        //第二十一层 “瑞典男子强奸马蜂窝后全身被蛰146处身亡”――《国际新闻》
        new Array(21, 1, 8147012, 20, 15), //Lv157 - 黄蜂 15000000
        new Array(21, 1, 8147013, 10, 15), //Lv158 - 毒黄蜂 15500000
        new Array(21, 2, 8147014, 5, 15), //Lv159 - 黄蜂将军 16000000
        new Array(21, 3, 8220012, 1, 30), //Lv137 - 生化魔女欧碧拉 14453128

        //第二十二层 蜘蛛侠外传，就选你做主角了
        new Array(22, 1, 9100005, 2, 3), //Lv200 - 超级绿蜘蛛
        new Array(22, 1, 9100006, 2, 3), //Lv200 - 超级红蜘蛛
        new Array(22, 2, 2600414, 10, 300), //Lv146 - 大蜘蛛 1264891
        new Array(22, 1, 2230103, 10, 3000), //Lv55 - 绿蜘蛛 4000
        new Array(22, 1, 2230104, 10, 3000), //Lv56 - 红蜘蛛 4300
        new Array(22, 3, 8800400, 1, 9), //Lv165 - 蜘蛛女王 57000000

        //第二十三层 大战植物和僵尸……
        new Array(23, 1, 9390642, 10, 30), //Lv150 - 黑色佩蒂特 1410000
        new Array(23, 1, 9390644, 10, 30), //Lv150 - 红色佩蒂特 1410000
        new Array(23, 1, 9390646, 10, 30), //Lv150 - 诅咒佩蒂特 1410000
        new Array(23, 2, 8147003, 10, 75), //Lv155 - 佛罗拉 560000
        new Array(23, 2, 8147004, 10, 75), //Lv156 - 黑暗佛罗拉 580000
        new Array(23, 2, 9800088, 10, 3), //Lv176 - 矿山僵尸 7350000

        /////////////////////////////////////////////////////////////////

        //第二十五层 南蛮入侵
        new Array(25, 2, 9390845, 5, 15), //Lv152 - 阿库旁多术士 12500000
        new Array(25, 2, 9390844, 5, 15), //Lv151 - 阿库旁多弓箭手 12000000
        new Array(25, 2, 9390846, 5, 15), //Lv148 - 阿库旁多狂战士 10500000
        new Array(25, 2, 9390843, 5, 15), //Lv147 - 阿库旁多战士 10000000

        //第二十六层 满城尽带黄金甲
        new Array(26, 2, 9400424, 20, 45), //Lv160 - 绯红卫士 330000
        new Array(26, 2, 9400425, 10, 60), //Lv160 - 黄金盔甲侍卫 330000
        new Array(26, 3, 9400439, 1, 3), //Lv170 - 血焰将军 500000000

        //第二十七层 追忆之路
        new Array(27, 1, 2600706, 10, 75), //Lv176 - 后悔的祭司 4189194
        new Array(27, 1, 2600709, 10, 75), //Lv176 - 后悔的守护队长 4189194
        new Array(27, 1, 2600702, 10, 75), //Lv173 - 追忆的神官 3799785
        new Array(27, 1, 2600708, 10, 75), //Lv176 - 后悔的守护兵 4189194
        new Array(27, 1, 2600707, 10, 75), //Lv176 - 后悔的神官 4189194
        new Array(27, 1, 2600703, 10, 75), //Lv173 - 追忆的守护兵 3799785

        //第二十八层 正式骑士的试炼
        new Array(28, 1, 8610005, 3, 300), //Lv168 - 正式骑士A 410000
        new Array(28, 1, 8610006, 3, 300), //Lv170 - 正式骑士B 430000
        new Array(28, 1, 8610007, 3, 300), //Lv172 - 正式骑士C 450000
        new Array(28, 1, 8610008, 3, 300), //Lv174 - 正式骑士D 470000
        new Array(28, 1, 8610009, 3, 300), //Lv176 - 正式骑士E 490000

        //第二十九层 高级骑士的试炼
        new Array(29, 1, 8610010, 3, 850), //Lv177 - 高级骑士A 500000
        new Array(29, 1, 8610011, 3, 850), //Lv179 - 高级骑士B 520000
        new Array(29, 1, 8610012, 3, 850), //Lv180 - 高级骑士C 530000
        new Array(29, 1, 8610013, 3, 850), //Lv182 - 高级骑士D 570000
        new Array(29, 1, 8610014, 3, 850)			//Lv184 - 高级骑士E 610000
        );

var superMob = new Array(9300216, 9100000, 9100008, 9300692, 9100005, 9100006);

var layersTip = new Array(
        "开天辟地",
        "蘑菇林",
        "枝繁叶茂",
        "奇怪的蘑菇你不要踩",
        "放开那女蘑菇~",
        "水灵灵的世界",
        "狂鳄之灾",
        "海贼王来袭",
        "暗杀团的阴谋",
        "海盗集结",
        "喜羊羊与灰太狼",
        "是死是活，就在今天”――《人狼大战》",
        "石头记",
        "十八金人阵",
        "叱咤武林",
        "早起的鸟儿有虫吃",
        "冰冻的一切不及一颗冰冻的心",
        "“瑞典男子强奸马蜂窝后全身被蛰146处身亡”――《国际新闻》",
        "蜘蛛侠外传，就选你做主角啦",
        "大战植物和僵尸",
        "南蛮入侵",
        "满城尽带黄金甲",
        "追忆之路",
        "正式骑士的试炼",
        "高级骑士的试炼"
        );

var dropItems = new Array(
        new Array(1, 2022431, 100000), // - 武陵道场特殊药水 - HP和MP恢复50%。但最大HP、MP超过99,999时，HP、MP恢复49,999。
        new Array(1, 2022432, 5000), // - 武陵道场超级药水 - HP和MP全部恢复。但最大HP、MP超过99,999时，HP、MP恢复99,999。
        new Array(1, 2022433, 25000), // - 武陵道场万能疗伤药 - 可以恢复所有异常状态。
        new Array(1, 4001620, 10000)
        );

var dropItemsAdvanced = 2431987;	// 秘密箱子-Lv140套装箱

var status = 0;
var text = "";
var baseMapId = 925060000;
var party = new Array();
var mobCount = 0;

function init() {
    for (var i = 0; i < mobs.length; i++) {
        mobCount += mobs[i][3];
    }
}

function setup() {
    // 配置副本
    // 初始化副本地图

}

function playerEntry(eim, player) {
    var exp = Math.floor(512500523 / mobCount);
    eim.setProperty("exp", exp.toString());
}

function changedMap(eim, player, mapid) {
    if (mapid < 925060100 || mapid > 925064700) {	// 不在武陵副本地图内
        eim.dispose();
        return;
    }

    var maps = eim.getObjectProperty("maps");
    if (maps == null) {
        java.lang.System.out.println("maps获取失败");
        eim.dispose();
        return;
    }

    for (var i = 0; i < 48; i++) {
        var map = maps[i];
        if (map[0] == mapid) {
            spawnMonster(eim, player, map[1]);
            showMapEffect(map[1]);
            break;
        }
    }
}

function spawnMonster(eim, player, map) {
    var newMobs = new Array();
    var layers = (map.getId() - baseMapId) / 100;
    var exp = parseInt(eim.getProperty("exp")) * (layers / layersTotal) * 0.1;
    for (var i = 0; i < mobs.length; i++) {
        if (layers == mobs[i][0]) {
            newMobs.push(mobs[i]);
        }
    }
    for (var i = 0; i < newMobs.length; i++) {
        for (var j = 0; j < newMobs[i][3]; j++) {
            var monster = em.getMonster(newMobs[i][2]);
            var monsterStats = em.getOverrideMonsterStats(Math.floor(monster.getMobMaxHp() * newMobs[i][4]), monster.getMobMaxMp(), exp * newMobs[i][1]);
            var pointX = Math.floor(Math.random() * 900) - 450;
            //monster.disableSpawnRevives();
            monster.disableDrops();
            monster.setOverrideStats(monsterStats);
            //em.spawnDoJangMonster(map, monster, pointX);
            map.spawnMonsterOnGroundBelow(monster, new java.awt.Point(pointX, 7));
            var isSuperMob = false;
            for (var z = 0; z < superMob.length; z++) {
                if (monster.getId() == superMob[z]) {
                    isSuperMob = true;
                }
            }
            if (!isSuperMob) {
                eim.registerMonster(monster);
            }
        }
    }
}

function showMapEffect(map) {	// 显示地图特效
    var layers = (map.getId() - baseMapId) / 100;
    var showTip;
    if (layers % 6 == 0) {
        showTip = "看来我小看你了，居然能到这里？越往上越是困难，现在后悔来来得及！";
    } else {
        layers -= Math.floor(layers / 6);
        showTip = layersTip[layers - 1];
    }
    map.startMapEffect(showTip, 5120024);
}

function monsterValue(eim, mobid) {
    return 1;
}

function monsterDrop(eim, player, mob) {
    var monsterLv = 1;
    var mobid = mob.getId();
    var map = player.getMap();
    for (var i = 0; i < mobs.length; i++) {
        if (mobid == mobs[i][2]) {
            monsterLv = mobs[i][1] > monsterLv ? mobs[i][1] : monsterLv;
        }
    }

    var toDrop = new Array();
    // 掉落消耗品和任务道具
    for (var i = 0; i < dropItems.length; i++) {
        var chance = Math.floor(Math.random() * 999999);
        if (chance < dropItems[i][2] * monsterLv && monsterLv >= dropItems[i][0]) {
            toDrop.push(new Array(dropItems[i][1], Math.floor(Math.random() * monsterLv) + 1));
        }
    }

    if (eim.getMobs().size() == 1) {
        switch ((map.getId() % 10000) / 100) {
            case 17:	// 17层奖励一个装备箱子
                toDrop.push(new Array(dropItemsAdvanced, 1));
                break;
            case 29:	// 29层奖励两个装备箱子
                toDrop.push(new Array(dropItemsAdvanced, 2));
                break;
        }
    }

    for (var i = 0; i < toDrop.length; i++) {
        map.spawnMobDrop(em.newItem(toDrop[i][0], 0, toDrop[i][1]), mob.getPosition(), mob, player, 0, 0);
    }
}

function allMonstersDead(eim) {
    // 杀掉超级怪物
    eim.getPlayers().get(0).getMap().killAllMonsters(true);
    eim.fieldEffect_PlayFieldSound("Dojang/clear");
    eim.fieldEffect_Clear("dojang/end/clear");
}

function playerExit(eim, player) {
    eim.dispose();
}
function playerDisconnected(eim, player) {
    playerExit(eim, player);
    return 0;
}
function playerRevive(eim, player) {
    playerExit(eim, player);
    return false;
}
function playerDead(eim, player) {
    playerExit(eim, player);
}
function scheduledTimeout(eim) {}
function monsterKilled(eim, player, cp) {}
function monsterDamaged(eim, player, mobid, damage) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function onMapLoad(eim, player) {}
function cancelSchedule() {}