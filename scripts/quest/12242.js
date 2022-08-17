/**
 *	神圣拯救者野外信息
 *	询问可以使用神圣拯救者之石的地区
 */

var status = -1;
var selStr01 = "\r\n#e<石人寺院>\r\n●推荐等级#n   Lv.15 ~ Lv.29\r\n#e●位置    #n   金银岛 / 射手村南边\r\n#e●移动路线#n   射手村>孢子山丘>哼唱小道>银莲花树丛>石人寺院入口\r\n#i3800202#\r\n";
var selStr02 = "\r\n#e<摩天楼>\r\n●推荐等级#n   Lv.30 ~ Lv.34\r\n#e●位置    #n   金银岛 / 蘑菇之城 - 摩天楼\r\n#e●移动路线#n   射手村>..>蘑菇森林小道>..>城墙中央>城墙外围>摩天楼\r\n#i3800205#\r\n";
var selStr03 = "\r\n#e<废都广场>\r\n●推荐等级#n   Lv.35 ~ Lv.42\r\n#e●位置    #n   金银岛 / 废都广场 1层~8层\r\n#e●移动路线#n   废都>地铁售票口>..（地铁）..>废都广场站>废都广场大厅>废都广场1层~8层\r\n#i3800203#\r\n";
var selStr04 = "\r\n#e<湿地>\r\n●推荐等级#n   Lv.40 ~ Lv.45\r\n#e●位置    #n   金银岛 / 林中之城东边\r\n#e●移动路线#n   六岔路口>林中之城>湿地\r\n#i3800204#\r\n";
var selStr05 = "\r\n#e<龙族洞穴>\r\n●推荐等级#n   Lv.43 ~ Lv.50\r\n#e●位置    #n   金银岛 / 林中之城 湿地东边\r\n#e●移动路线#n   六岔路口>林中之城>湿地>龙族洞穴\r\n#i3800218#\r\n";
var selStr06 = "\r\n#e<被诅咒的圣殿>\r\n●推荐等级#n   Lv.45 ~ Lv.50\r\n#e●位置    #n    金银岛 / 林中之城洞穴深处\r\n#e●移动路线#n   六岔路口>林中之城>湿地>龙族洞穴>被诅咒的圣殿\r\n#i3800219#\r\n";
var selStr07 = "\r\n#e<克里塞>\r\n●推荐等级#n   Lv.50 ~ Lv.62\r\n#e●位置    #n   神秘岛 / 冰峰雪域 / 天空之城北边\r\n#e●移动路线#n   天空之城>天空之城公园>..（NPC：艾利逊）..>克里塞\r\n#i3800207#\r\n";
var selStr08 = "\r\n#e<天空之城庭院>\r\n●推荐等级#n   Lv.50 ~ Lv.55\r\n#e●位置    #n   神秘岛 / 冰峰雪域 / 天空之城东边\r\n#e●移动路线#n   六岔路口>..（飞艇）..>天空之城>云彩公园1>三色庭院的通道>三色庭院1>三色庭院2\r\n#i3800206#\r\n";
var selStr09 = "\r\n#e<乌山>\r\n●推荐等级#n   Lv.50 ~ Lv.64\r\n#e●位置    #n   神秘岛 / 时间静止之湖 / 童话村东边\r\n#e●移动路线#n   天空之城>..（飞艇）..>玩具城>赫丽奥斯塔>童话村>乌山\r\n#i3800208#";
var selStr10 = "\r\n#e<鲁斯韦尔草原>\r\n●推荐等级#n   Lv.67 ~ Lv.75\r\n#e●位置    #n   神秘岛 / 时间静止之湖 / 地球防御本部西面\r\n#e●移动路线#n   天空之城>..（飞艇）..>玩具城>玩具塔>地球防御本部>控制地区>鲁斯韦尔草原\r\n#i3800209#\r\n";
var selStr11 = "\r\n#e<莱班矿山>\r\n●推荐等级#n   Lv.65 ~ Lv.82\r\n#e●位置    #n   埃德尔斯坦东北部岩山\r\n#e●移动路线#n   天空之城>..（飞艇）..>埃德尔斯坦>埃德尔斯坦散步路>前往矿山的路1>前往矿山的路2>莱班矿山\r\n#i3800210#\r\n";
var selStr12 = "\r\n#e<闪三之路>\r\n●推荐等级#n   Lv.71 ~ Lv.84\r\n#e●位置    #n   神秘岛 / 尼哈尔沙漠 / 阿里安特北边\r\n#e●移动路线#n   天空之城>..（飞艇）..>阿里安特>闪三之路（玛加提亚方向）\r\n#i3800211#\r\n";
var selStr13 = "\r\n#e<武陵修炼场>\r\n●推荐等级#n   Lv.77 ~ Lv.83\r\n#e●位置    #n   神秘岛 / 武陵道院 / 武陵东边\r\n#e●移动路线#n   天空之城>..（飞艇）..>武陵>武陵寺院>武陵修炼场\r\n#i3800213#\r\n";
var selStr14 = "\r\n#e<卡帕莱特研究室>\r\n●推荐等级#n   Lv.79 ~ Lv.95\r\n#e●位置    #n   神秘岛 / 尼哈尔沙漠 / 玛加提亚地下\r\n#e●移动路线#n   天空之城>..（飞艇）..>阿里安特>阿里安特北门外>..（出租车：骆驼）..>沙哈地带1>玛加提亚>卡帕莱特办公室>卡帕莱特研究室\r\n#i3800212#\r\n";
var selStr15 = "\r\n#e<红鼻子海盗团老巢>\r\n●推荐等级#n   Lv.94 ~ Lv.112\r\n#e●位置    #n   神秘岛 / 武陵道院 / 百草堂附近\r\n#e●移动路线#n   天空之城>..（飞艇）..>武陵>武陵寺院>..（出租车：鹤）..>百草堂>药草地>桔梗谷>孤立的湿地>红鼻子海盗团老巢\r\n#i3800214#\r\n";
var selStr16 = "\r\n#e<半人马森林>\r\n●推荐等级#n   Lv.113 ~ Lv.121\r\n#e⒙ 困摹    #n   坷矫府酒 / 固唱福剑 / 府橇饭 巢率\r\n#e●移动路线#n   天空之城>..（飞艇）..>神木村>神木村西边森林>米纳尔森林西边境界>怪脾气森林>半人马森林\r\n#i3800215#\r\n";
var selStr17 = "\r\n#e<修行者森林>\r\n●推荐等级#n   Lv.115 ~ Lv.121\r\n#e●位置    #n   次元之镜 / 黄金寺院\r\n#e●移动路线#n   各个村庄>..（次元之镜）..>黄金寺院>修行者森林\r\n#i3800281#\r\n";
var selStr18 = "\r\n#e<龙林>\r\n●推荐等级#n   Lv.122 ~ Lv.142\r\n#e●位置    #n   神秘岛 / 米纳尔森林 / 森林岔道西边\r\n#e●移动路线#n   天空之城>..（飞艇）..>神木村>..>米纳尔森林>..>森林岔道>龙林\r\n#i3800216#\r\n";
var selStr19 = "\r\n#e<追忆之路>\r\n●推荐等级#n   Lv.140 ~ Lv.150\r\n#e●位置    #n   神秘岛 / 时间神殿 / 米纳尔森林书院\r\n#e●移动路线#n   天空之城>..（飞艇）..>神木村>..（飞龙）..>时间神殿入口>三个门>..>追忆之路\r\n#i3800231#\r\n";
var selStr20 = "\r\n#e<后悔之路>\r\n●推荐等级#n   Lv.150 ~ Lv.160\r\n#e●位置    #n   神秘岛 / 时间神殿 / 米纳尔森林西边\r\n#e●移动路线#n   天空之城>..（飞艇）..>神木村>..（飞龙）..>时间神殿入口>三个门>..>追忆之路>..>后悔之路\r\n#i3800217#\r\n";
var selStr21 = "\r\n#e<忘却之路>\r\n●推荐等级#n   Lv.160 ~ Lv.200\r\n#e●位置    #n   神秘岛 / 时间神殿 / 米纳尔森林西边\r\n#e●移动路线#n   天空之城>..（飞艇）..>神木村>..（飞龙）..>时间神殿入口>三个门>..>追忆之路>..>后悔之路..>忘却之路\r\n#i3800280#";

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        qm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendSimple("我正在向你指引通过打猎，可提升#b#t4001527##k指数的地区。有什么能帮忙的吗？\r\n#b#L0#查看符合我等级的打猎场#l\r\n#L1#查看全部打猎场#l\r\n#L2#结束对话#l");
    } else if (status == 1) {
        switch (selection) {
        case 0:
            var selStr = "按照各个等级所推荐的打猎场就是这里了。\r\n#b按下[W]键后查看世界地图。#k\r\n"; //\r\n#b（在推荐的打猎场狩猎的话，可获得艾里葛斯掉落的#e恶灵箱子#n。）
            if (qm.getLevel() >= 15 && qm.getLevel() <= 29) {
                selStr += selStr01;
            }
            if (qm.getLevel() >= 30 && qm.getLevel() <= 34) {
                selStr += selStr02;
            }
            if (qm.getLevel() >= 35 && qm.getLevel() <= 42) {
                selStr += selStr03;
            }
            if (qm.getLevel() >= 40 && qm.getLevel() <= 45) {
                selStr += selStr04;
            }
            if (qm.getLevel() >= 43 && qm.getLevel() <= 50) {
                selStr += selStr05;
            }
            if (qm.getLevel() >= 45 && qm.getLevel() <= 50) {
                selStr += selStr06;
            }
            if (qm.getLevel() >= 50 && qm.getLevel() <= 62) {
                selStr += selStr07;
            }
            if (qm.getLevel() >= 50 && qm.getLevel() <= 55) {
                selStr += selStr08;
            }
            if (qm.getLevel() >= 50 && qm.getLevel() <= 64) {
                selStr += selStr09;
            }
            if (qm.getLevel() >= 67 && qm.getLevel() <= 75) {
                selStr += selStr10;
            }
            if (qm.getLevel() >= 65 && qm.getLevel() <= 82) {
                selStr += selStr11;
            }
            if (qm.getLevel() >= 71 && qm.getLevel() <= 84) {
                selStr += selStr12;
            }
            if (qm.getLevel() >= 77 && qm.getLevel() <= 83) {
                selStr += selStr13;
            }
            if (qm.getLevel() >= 79 && qm.getLevel() <= 95) {
                selStr += selStr14;
            }
            if (qm.getLevel() >= 94 && qm.getLevel() <= 112) {
                selStr += selStr15;
            }
            if (qm.getLevel() >= 113 && qm.getLevel() <= 121) {
                selStr += selStr16;
            }
            if (qm.getLevel() >= 115 && qm.getLevel() <= 121) {
                selStr += selStr17;
            }
            if (qm.getLevel() >= 122 && qm.getLevel() <= 142) {
                selStr += selStr18;
            }
            if (qm.getLevel() >= 140 && qm.getLevel() <= 150) {
                selStr += selStr19;
            }
            if (qm.getLevel() >= 150 && qm.getLevel() <= 160) {
                selStr += selStr20;
            }
            if (qm.getLevel() >= 160 && qm.getLevel() <= 200) {
                selStr += selStr21;
            }
            status = -1;
            qm.sendNext(selStr);
            break;
        case 1:
            var selStr = "按照各个等级所推荐的打猎场就是这里了。\r\n#b按下[W]键后查看世界地图。#k\r\n"; 
            if (qm.getLevel() >= 0) {
                selStr += selStr01;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr02;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr03;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr04;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr05;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr06;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr07;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr08;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr09;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr10;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr11;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr12;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr13;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr14;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr15;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr16;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr17;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr18;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr19;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr20;
            }
            if (qm.getLevel() >= 0) {
                selStr += selStr21;
            }
            status = -1;
            qm.sendNext(selStr);
            break;
        case 2:
            qm.dispose();
            break;
        }
    }
}
