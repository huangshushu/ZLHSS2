/*
 完成时间：2013年8月11日 13:05:43
 脚本功能：大陆移动卷轴
 */
var isopenvip = false;
var icon = "#fEffect/CharacterEff/1082565/0/0#";
var b = "#fUI/Basic/LevelNo/0#"; //[1]+1
var c = "#fUI/Basic/LevelNo/1#"; //[1]+1
var d = "#fUI/Basic/LevelNo/2#"; //[1]+1
var e = "#fUI/Basic/LevelNo/3#"; //[1]+1
var f = "#fUI/Basic/LevelNo/4#"; //[1]+1
var g = "#fUI/Basic/LevelNo/5#"; //[1]+1
var Icon ="#fUI/UIWindowBT.img/WorldMap/BtNext/normal/0#"
var IconA = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var IconB = "#fUI/UIMiniGame/starPlanetRPS/heart#";//红心桃心
var Icon1 ="#fUI/StarCityUI.img/GradeInfo/icon_ss/2#"
var Icon2 ="#fUI/UIPVP.img/MiniMapIcon/yellow#"
var q6 ="#fUI/RunnerGame.img/RunnerGameUI/UI/Point/2#"
var e ="#fUI/UIPVP.img/MiniMapIcon/red#"
var e1 ="#fUI/UIPVP.img/MiniMapIcon/blue#"
var e2 ="#fUI/UIPVP.img/MiniMapIcon/yellow#"
var e3 ="#fUI/UIPVP.img/UserRanking/NumRank/iceKnight#"
var s = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
var s1 = "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#";//女神
var s2 = "#fUI/UIWindow2/ToolTip/Equip/Star/Star2#";//星星
var s3 = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#";//A图标
var s4 = "#fUI/UIWindow2/AdditionalOptionTooltip/unique#";//S图标

var townmaps = Array(
        Array(910001000, "#b匠人街  "),
        Array(710000400, "光荣大厅"),
        Array(680000000, "婚礼村  "),
        Array(749050400, "转蛋屋  "),
        Array(100000000, "射手村  "),
        Array(104000000, "明珠港  "),
        Array(400000000, "万神殿  "),
        Array(220000000, "玩具城  "),
        Array(706041003, "#r段数测试"),
        Array(101000000, "#b魔法密林"),
        Array(102000000, "勇士部落"),
        Array(106030100, "蘑菇城  "),
        Array(103000000, "废弃都市"),
        Array(120000000, "诺特码头"),
        Array(105000000, "林中之城"),
        Array(251000000, "百草堂  "),
        Array(200000000, "天空之城"),
        Array(401000000, "赫里希安"),
        Array(211000000, "冰封雪域"),
        Array(600000000, "新叶城"),
        Array(410000000, "狐狸村  "),
        Array(230000000, "水下世界"),
        Array(130000000, "圣地  "),
        Array(260000000, "阿里安特"),
        Array(310070000, "机械坟墓"),
        Array(101050000, "古代神社"),
        Array(240000000, "神木村"),
        Array(261000000, "玛加提亚"),
        Array(310000000, "德尔斯坦"),
        Array(221000000, "地球防御本部")
);
var monstermaps = Array(
        Array(104010200, "[梦幻]　　新手小道「 推荐Lv：1  ≈ 10   」"),
        Array(100010000, "[梦幻]　　花蘑菇　「 推荐Lv：1  ≈ 10   」"),
        Array(101070300, "[梦幻]　　仙水灵　「 推荐Lv：10 ≈ 30   」"),
        Array(120010100, "[梦幻]　　小野猪　「 推荐Lv：20 ≈ 40   」"),
        Array(102030400, "[梦幻]　　火焰猪　「 推荐Lv：20 ≈ 40   」"),
        Array(105010301, "[梦幻]　　蚂蚁洞　「 推荐Lv：50 ≈ 60   」"),
        Array(105010300, "[梦幻]　　独角狮　「 推荐Lv：60 ≈ 70   」"),
        Array(600020300, "[梦幻]　 机械蜘蛛 「 推荐Lv：70 ≈ 80   」"),
        Array(310060300, "[梦幻]　 深坑道　 「 推荐Lv：70 ≈ 80   」"),
        Array(220060000, "[中等]　　红小丑　「 推荐Lv：80 ≈ 90   」"),
        Array(261010102, "[中等]　　研究所　「 推荐Lv：80 ≈ 90   」"),
        Array(300010400, "[中等]　 杀猪森林 「 推荐Lv：100 ≈ 130 」"),
        Array(223010000, "[中等]　 滑稽车站 「 推荐Lv：100 ≈ 110 」"),
        Array(220060200, "[中等]　 蓝帽海贼 「 推荐Lv：100 ≈ 110 」"),
        Array(220060201, "[中等]　 绿帽海贼 「 推荐Lv：110 ≈ 120 」"),
        Array(251010403, "[中等]　 红鼻海盗 「 推荐Lv：110 ≈ 120 」"),
        Array(240040510, "[高级]　　骷髅龙　「 推荐Lv：120 ≈ 125 」"),
        Array(270030100, "[高级] 忘却的祭祀 「 推荐Lv：120 ≈ 125 」"),
        Array(252020700, "[高级] 苦难者之屋 「 推荐Lv：120 ≈ 125 」"),
        Array(250010304, "[高级] 流浪熊底盘 「 推荐Lv：125 ≈ 128 」"),
        Array(240040520, "[高级]　　小蜥蜴　「 推荐Lv：130 ≈ 135 」"),
        Array(270030500, "[高级]　 忘却之路 「 推荐Lv：135 ≈ 140 」"),
        Array(271000100, "[高级] 变异提大诺 「 推荐Lv：140 ≈ 150 」"),
        Array(271030100, "[超级] 骑士团１区 「 推荐Lv：145 ≈ 150 」"),
	Array(271030400, "[超级] 骑士团４区 「 推荐Lv：150 ≈ 155 」"),
	Array(271030540, "[超级] 骑士团５区 「 推荐Lv：155 ≈ 160 」"),
	Array(273030100, "[超级]　 火焰山丘 「 推荐Lv：160 ≈ 165 」"),
	Array(273040300, "[超级] 荒废地４区 「 推荐Lv：160 ≈ 170 」"),
	Array(273060300, "[超级] 战士决战处 「 推荐Lv：170 ≈ 175 」"),
        Array(703001200, "[超级] 外星人领地 「 推荐Lv：170 ≈ 180 」"),
        Array(310070400, "[超级] 黑色天堂１ 「 推荐Lv：200 ≈ 210 」"),
        Array(310070330, "[超级] 黑色天堂２ 「 推荐Lv：220 ≈ 230 」"),
        Array(310070440, "[超级] 黑色天堂３ 「 推荐Lv：230 ≈ 250 」"),
        Array(450001010, "[超级] 神秘河     「 推荐Lv：230 ≈ 250 」")
        );

var lmaps = Array(
    Array(867000006, "清新森林"),
    Array(867000007, "花开森林"),
    Array(260000301, "紫色宫殿"),
    Array(260000302, "紫色宫殿"),
    Array(260000303, "安特王室"),
    Array(260000300, "安特宫殿"),
    Array(250010600, "蟠桃果二"),
    Array(250010500, "蟠桃果一"),
    Array(140010110, "达人殿堂"),
    Array(600000000, "市区中心"),
    Array(749050500, "魔幻空间"),
    Array(749050501, "璀璨王国"),
    Array(914021000, "精灵王国"),
    Array(914021000, "樱花村庄"),
    Array(220010001, "白云露台"),
    Array(920030001, "封印庭院"),
    Array(925000000, "白云之地"),
    Array(925020003, "百层高塔"),
    Array(980010010, "王的房间"),
    Array(980000801, "专属年华"),
    Array(931000013, "奇怪实验"),
    Array(800021115, "月下竹林"),
    Array(706042000, "祝福山丘"),
    Array(229000100, "苏菲莉亚"),
    Array(931050400, "维修中的列车")
        );//旅游地图部分

var tiaotiaomaps = Array(
        Array(100000202, "射手跳跳"),
        Array(220000006, "玩具城跳跳"),
        //Array(280020000, "火山的心脏"),
        //Array(109040001, "共4阶段"),
        //Array(910130000, "忍苦树林"),
        //Array(109030001, "上楼找出口"),
        Array(109040001, "高地第1阶段"),
        Array(910360000, "地铁B1"),
        Array(910360100, "地铁B2"),
        Array(910360200, "地铁B3")
        );
var MapHousework = Array(
    Array(200000301, " 创建家族中心 - 快捷通道 "),
    Array(102040200, " 家族副本中心 - 快捷通道 ")
    );

var MapOther = Array(
        Array(100000104, "[ 射手村造型区 ]")
        );

var a = 0;
var selects = 0;
var MapType;

function start() {
    a = -1;
    action(1, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else {
            cm.dispose();
            return;
        }
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
           // var txt = "\r\n" + e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + "\r\n\r\n";
            var txt = "\r\n\r\n";
            txt += "    #d#e「 #r#h ##d 」- 贯穿许多位面请选择地方:#k#n\r\n";
            //txt += "#e#r┄┄┄┅═☆  "+q6+"  万能传送  "+q6+"  ☆═┅┄┄┄#k#n#l\r\n";
            txt += "#r#L0#" + Icon + " 城镇地图 #l#k";
            txt += "#r#L1#" + Icon + " 练级地图 #l#k";
            txt += "#r#L2#" + Icon + " 旅游景点 #l#k\r\n\r\n";

            txt += "#b#L3#" + Icon + " 跳跳地图 #l#k";
            txt += "#d#L4#" + Icon + " 家族地图 #l#k";
            //txt += "#b#L5#" + Icon + " 美容美发 #l#k\r\n\r\n";

        //    txt += "      #e#b#L6#" + Icon + " 出生地图(解决新手副本掉线的玩家) #l#k\r\n\r\n";
            txt += "#d#L7#" + Icon + " 捕捉豹子#l#k\r\n\r\n\r\n";
          //  txt += e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + e + e1 + e2 + "\r\n ";
            cm.sendSimpleS(txt, 2);
        } else if (a == 1) {
            var text = "请选择你要接连的地方：\r\n#d"
            switch (selection) {
                case 0:
                    for (var i = 0; i < townmaps.length; i++) {
                        text += "#L" + i + "# " + icon + townmaps[i][1];
                    }
                    MapType = 0
                    needMoney = true;
                    break;
                case 1:
                    for (var i = 0; i < monstermaps.length; i++) {
                        text += "#L" + i + "#  " + icon + " " + monstermaps[i][1] + "\r\n";
                    }
                    MapType = 1
                    break;
                case 2:
                    for (var i = 0; i < lmaps.length; i++) {
                        text += "#r#L" + i + "# " + " " + lmaps[i][1];
                    }
                    MapType = 2
                    needMoney = true;
                    break;
                case 3:
                    for (var i = 0; i < tiaotiaomaps.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + tiaotiaomaps[i] + "# (" + tiaotiaomaps[i][1] + ")\r\n"
                    }
                    MapType = 3
                    needMoney = true;
                    break;

                case 4://家务中心
                    for (var i = 0; i < MapHousework.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + MapHousework[i] + "# (" + MapHousework[i][1] + ")\r\n"
                    }
                    MapType = 4
                    needMoney = true;
                    break;

                case 5://射手造型
                    for (var i = 0; i < MapOther.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + MapOther[i] + "# (" + MapOther[i][1] + ")\r\n"
                    }
                    MapType = 5
                    needMoney = true;
                    break;
	            case 7:
					cm.warp(931000500);
                    break;
				case 6:
					cm.warp(910150210);
                    break;
            }
            cm.sendSimple(text);
        } else if (a == 2) {
            selects = selection;
            cm.sendYesNo("在这里的事情办完了吗？确定要去你像要去的地方了吗？");
        } else if (a == 3) {
            if (!isopenvip) {
                if (cm.getMeso() < 0) {
                    cm.sendOk(head + "对不起，你的金币不足。\r\n需要1金币才能进行。");
                    cm.dispose();
                    return;
                } else {
                    cm.gainMeso(-0);
                }
}
            

            switch (MapType) {
                case 0:
                    cm.warp(townmaps[selects][0]);
                    break;
                case 1:
                    cm.warp(monstermaps[selects][0]);
                    break;
                case 2:
                    cm.warp(lmaps[selects][0]);
                    break;
                case 3:
                    cm.warp(tiaotiaomaps[selects][0]);
                    break;
                case 4://家务中心
                    cm.warp(MapHousework[selects][0]);
                    break;
                case 5://射手造型
                    cm.warp(MapOther[selects][0]);
                    break;
            }

            cm.dispose();
        }//a
    }//mode
}//f
