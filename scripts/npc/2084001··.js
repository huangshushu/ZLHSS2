/*      
 *  
 *  
 *  功能：每日寻宝
 *  备注：任务初始ID 200100，子任务依次加1，新任务分类的初始ID需间隔100，如100200
 *  
 */

/*var status = 0;
var text = "";
var questid = 200100;
var maxtimes = 5;
var playerid = 0;
var accepttimes = 0;
var questitemid = 0;
var questitemcs = 0;
var mapid = 0;
var qinfo = "";
var lastMapList = Array();
var maplist = Array(
        Array(106021800, "蘑菇城 - 宴会场"),
        Array(101020000, "大木林 - 接近风的地方"),
        Array(101050100, "妖精森林 - 发光洞穴路"),
        Array(101073300, "曼德拉草田 - 野外演出舞台"),
        Array(102030100, "北部岩山 - 旋风地带"),
        Array(701010200, "火焰之地 - 野生猪猪的领土"),
        Array(102030200, "火焰之地 - 铁甲猪猪的领土"),
        Array(102030300, "火焰之地 - 燃烧的热气"),
        Array(102030400, "火焰之地 - 灰烬之地"),
        Array(105000010, "林中之城 - 林中之城旅馆大厅"),
        Array(105000011, "林中之城 - 桑拿房"),
        Array(105100100, "蝙蝠怪神殿 - 寺院地下"),
        Array(105300000, "堕落世界树 - 废弃营地"),
        Array(105300100, "堕落世界树 - 前往下部树枝的路"),
        Array(105300101, "堕落世界树 - 下部左侧树枝"),
        Array(105300102, "堕落世界树 - 下部树枝岔路"),
        Array(100000200, "射手村 - 射手村公园"),
        Array(100000201, "射手村 - 弓箭手培训中心"),
        Array(100000202, "射手村 - 宠物公园"),
        Array(100010000, "射手村 - 射手村北部小山"),
        Array(100010001, "射手村 - 奇怪的山丘"),
        Array(100010100, "射手村 - 梦境小道"),
        Array(100000001, "射手村 - 玛亚的家"),
        Array(100000002, "射手村 - 长老斯坦的家"),
        Array(100000003, "射手村 - 丽娜的家"),
        Array(130000000, "女皇之路 - 圣地"),
        Array(130000100, "女皇之路 - 骑士殿堂"),
        Array(130000101, "圣地  -  骑士殿堂"),
        Array(130010000, "女皇之路 - 修炼森林1"),
        Array(130010100, "女皇之路 - 修炼森林2"),
        Array(130010220, "女皇之路 - 孵化场"),
        Array(130030000, "女皇之路 - 新的启程1"),
        Array(130030001, "女皇之路 - 新的启程2"),
        Array(130030002, "女皇之路 - 新的启程3"),
        Array(701010200, "上海北部小山"),
        Array(701010100, "上海北部平原"),
        Array(867000014, "春日山谷 - 高山草原"),
        Array(867000015, "春日山谷 - 春日山谷山顶"),
        Array(867000900, "春日山谷 - 百花平原"),
        Array(867001000, "春日山谷 - 神秘森林1"),
        Array(867001400, "春日山谷 - 神秘高原"),
        Array(103000000, "废弃都市 - 废弃都市"),
        Array(103000001, "废弃都市 - 废都武器店"),
        Array(103000002, "废弃都市 - 废都药店"),
        Array(103000003, "废弃都市 - 废都爵士酒吧"),
        Array(103000004, "废弃都市 - 废都医院"),
        Array(103000005, "废弃都市 - 废都美发店"),
        Array(103000006, "废弃都市 - 废都修理店"),
        Array(104010000, "金银岛 - 明珠港郊外"),
        Array(100000204, "射手村 - 弓箭手的殿堂"),
        Array(101000004, "魔法密林 - 魔法师的殿堂"),
        Array(102000004, "勇士部落 - 战士的殿堂"),
        //Array(701000000, "废弃都市 - 废都夜市"),
        Array(103000008, "废弃都市 - 飞侠的殿堂"),
        Array(101050000, "樱之岛 - 古代神社"),
        Array(800010000, "樱之岛 - 樱花山林"),
        Array(800010100, "樱之岛 - 天皇殿堂"),
        Array(800010001, "樱之岛 - 云狐山坡"),
        Array(800020000, "樱之岛 - 乌鸦树林"),
        Array(800020101, "樱之岛 - 乌鸦树林2"),
        Array(800020110, "樱之岛 - 林野的松林"),
        Array(800020120, "樱之岛 - 从地图中失踪的村庄"),
        Array(800020130, "樱之岛 - 大佛的邂逅"),
        Array(800020100, "樱之岛 - 前往墓地之路"),
        Array(800020200, "樱之岛 - 死静的墓地"),
        Array(800020300, "樱之岛 - 漂浮幽灵墓地"),
        Array(800020400, "樱之岛 - 弯曲地狱路"),
        Array(800030000, "樱之岛 - 妖兽之林"),
        Array(220000001, "玩具城 - 杂货店"),
        Array(220000002, "玩具城 - 药店"),
        Array(220000003, "玩具城 - 玩具城整形医院"),
        Array(220000004, "玩具城 - 玩具城美发店"),
        Array(220000005, "玩具城 - 玩具城护肤中心"),
        Array(220000006, "玩具城 - 玩具城宠物训练场"),
        Array(220000100, "玩具城 - 玩具城售票处"),
        Array(220000110, "玩具城 - 码头<开往天空之城>"),
        Array(220000111, "玩具城 - 候船室<开往天空之城>"),
       // Array(240000001, "神木村 - 村长之家"),
        Array(240000002, "神木村 - 药水商店"),
        Array(240000003, "神木村 - 亚可之家"),
        Array(240000004, "神木村 - 依托之家"),
        Array(240000005, "神木村 - 库摩之家"),
        Array(240000006, "神木村 - 潘姆之家")
        );
function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            playerid = cm.getPlayer().getId();
            accepttimes = maxtimes - cm.getEventCount("寻宝任务");
            text = "\t\t\t#e每日寻宝 - 金利奇的黄金袋子#n\r\n\r\n";
            text += "我的财富，遍布世界各地……\r\n";
			text += "寻宝有机会获得：\r\n";
			text += "#i2432069# #i3015564# #i3015811# #i3014020# #i3014011# #i3015111# #i3015449# #i3015304# #i3010723# #i3015837# #i3015795#\r\n"
            text += "今日剩余寻宝次数：#r" + accepttimes + "#k 次\r\n";
            text += "#r#L999#寻宝任务简介#l#k\r\n\r\n";
            if (cm.isQuestActive(questid)) {  // 判断是否接取了任务
                if (cm.isQuestFinished(questid)) { // 判断是否完成任务
                    if (accepttimes <= 0) { // 判断是否超过完成次数
                        text += "您已经完成了今天的寻宝任务，请明天0点后再来吧~\r\n";
                    } else {
                        text += "#b#L0#接受任务#l#k\r\n";
                    }
                } else {
                    text += "#r#L2#放弃任务 (无法获得任何奖励，且会消耗一次任务次数)#l\r\n";
                }
            } else if (accepttimes > 0) {
                text += "#b#L3#接受任务#l\r\n";
            } else {
                text += "  您已经完成了今天的寻宝任务，请明天0点后再来吧~\r\n";
            }
            text += "#b#L222#购买黄金罗盘#l#k";
            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 999) {
                status = -1;
                text = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n\r\n#e#d什么是寻宝任务？#n#k\r\n";
                text += "\t接受寻宝任务之后，你将会获得一个#b寻宝便签#k，我会告诉你可能藏有宝藏的5个地图，并且会保存在寻宝便签中，其中只有一个地图里面会有一个宝箱，你需要在#r10分钟之内#k找到这个#b正确的地图#k并打开宝箱就能获得一个#b金利奇的黄金袋子#k，打开袋子能获得丰厚的奖励，如果超出了时间，就只能#r放弃任务#k咯。\r\n";
                text += "#e#d什么是黄金罗盘？#n#k\r\n";
                text += "\t使用黄金罗盘，可以帮助你直接寻找到正确的宝藏地图。您可以通过购买获得黄金罗盘，同时寻宝过程中有几率获得黄金罗盘。\r\n";
                cm.sendSimple(text);
            } else if (selection == 222) {
                cm.sendYesNo("是否要花费#r3000#k点购买一个黄金罗盘？");
            } else if (selection == 0) {			// 重新接受任务 初始化
                if (cm.getLevel() < 150) {
                    cm.sendOk("等级不足150级，无法领取任务。");
                    cm.dispose();
                    return;
                }
                if (cm.getSpace(2) < 1) {
                    cm.sendOk("你的消耗栏格子不足，请先整理一下吧。");
                    cm.dispose();
                    return;
                }
                getRandomArray();
                var questrandid = Math.floor(Math.random() * lastMapList.length);
                mapid = lastMapList[questrandid][0];// 任务地图ID
                cm.gainItem(2430251, 1, 1000 * 60 * 10);
                text = "宝箱有可能藏匿在一下几个地图，你有#b10分钟#k的时间寻找到正确的地图并打开宝箱！\r\n";
                for (var key in lastMapList) {
                    qinfo += "#b" + lastMapList[key][1] + "\r\n";
                    text += "#b" + lastMapList[key][1] + "\r\n";
                }
                spawnNpc(mapid);
                text += "#r#e提示记录在寻宝便签里，找到宝箱并打开有一定机率发现黄金袋子！！#n#k";
                // 重新接受任务
                cm.forceStartQuest(questid, mapid + "");
                cm.forceStartQuest(questid + 2, qinfo);
                cm.setEventCount("寻宝任务");
                cm.sendOk(text);
                cm.dispose();
            } else if (selection == 2) {	// 放弃任务
                cm.removeNpcforQ(cm.getCustomData(200100), 1052008);
                cm.forceCompleteQuest(200100);
                if (cm.haveItem(2430251)) {
                    cm.gainItem(2430251, -cm.getItemQuantity(2430251));
                }
                text = "任务已放弃……";
                cm.sendOk(text);
                cm.dispose();
            } else if (selection == 3) {	// 接受任务
                if (cm.getLevel() < 160) {
                    cm.sendOk("等级不足160级，无法领取任务。");
                    cm.dispose();
                    return;
                }
                if (cm.getSpace(2) < 1) {
                    cm.sendOk("你的消耗栏格子不足，请先整理一下吧。");
                    cm.dispose();
                    return;
                }
                getRandomArray();
                var questrandid = Math.floor(Math.random() * lastMapList.length);
                mapid = lastMapList[questrandid][0] // 任务地图ID
                cm.gainItem(2430251, 1, 1000 * 60 * 10);
                text = "宝箱有可能藏匿在一下几个地图，你有#b10分钟#k的时间寻找到正确的地图并打开宝箱！\r\n";
                for (var key in lastMapList) {
                    qinfo += "#b" + lastMapList[key][1] + "\r\n";
                    text += "#b" + lastMapList[key][1] + "\r\n";
                }
                spawnNpc(mapid);
                text += "#r#e提示记录在寻宝便签里，找到宝箱并打开有一定机率发现黄金袋子！！#n#k";
                cm.forceStartQuest(questid, mapid + "");
                cm.forceStartQuest(questid + 2, qinfo);
                cm.setEventCount("寻宝任务");
                cm.sendOk(text);
                cm.dispose();
            } else {
                cm.sendOk('此功能尚未开放，敬请期待！');
                cm.dispose();
            }
        } else if (status == 2) {
            if (cm.getPlayer().getCSPoints(1) >= 1000)
            {
                if (cm.getSpace(2) < 1) {
                    cm.sendOk("消耗栏不足");
                    cm.dispose();
                    return;
                }
                cm.gainNX(-3000);
                cm.gainItem(2430030, 1);
                cm.sendOk("购买成功");
            } else {
                cm.sendOk("点卷不足！");
            }
            cm.dispose();
        }
    }
}

function spawnNpc(mapid) {
    var point;
    do {
        point = cm.getSpawnPoint(mapid);
        if (cm.canSpawn(mapid, point)) {
            break;
        }
    } while (1);
    cm.spawnNpcForPlayer(mapid, 1052008, point);
}


function getRandomArray() {
    if (lastMapList.length >= 5)
        return true;
    var newMapId = maplist[Math.floor(Math.random() * maplist.length)];
    for (var key in lastMapList) {
        if (lastMapList[key] == newMapId) {
            getRandomArray();
            return false;
        }
    }
    lastMapList.push(newMapId);
    getRandomArray();
}
