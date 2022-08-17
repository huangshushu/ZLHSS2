//装饰变量区
var 活跃度 = "#fUI/UIWindow.img/AriantMatch/characterIcon/0#";
var 活跃度空 = "#fUI/GuildMark.img/BackGround/00001010/1#";
var 活跃度2 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/AriantMatch/characterIcon/0#";
var 花 = "#fUI/UIWindow.img/AriantMatch/characterIcon/0#";
var meso = "#fUI/UIWindow.img/Item/BtCoin/normal/0#";
var pvp = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var s = "#fUI/StatusBar/BtClaim/normal/0#";
var name = "梦幻";
var h = "#fUI/CashShop/CSEffect/effect/1#";
var t = 0;
//常用变量区 这里是需要的物品
var ItemId = Array(
        //物品ID,数量,备注
		Array(1432008, 1, "海神叉 - 野外掉落"),
        Array(1382004, 1, "古树长杖 - 野外掉落"),
		Array(4001126, 100, "枫叶 - 野外掉落"),
		Array(1302017, 1, "蓝色雨伞 - 野外掉落"),
		Array(1322023, 1, "蓝花纹游泳圈 - 野外掉落"),
		Array(1442012, 1, "天空雪板 - 野外掉落"),
		Array(1442013, 1, "沧海雪板 - 野外掉落"),
		Array(1302016, 1, "黄色雨伞 - 野外掉落"),
		Array(4000383, 100, "红色精华 - 野外掉落"),
		Array(1302013, 1, "红色鞭子 - 野外掉落"),
		Array(1302030, 1, "枫叶剑 - 野外掉落"),
		Array(2070004, 1, "黑色刺 - 野外掉落"),
		Array(2070007, 1, "月牙镖 - 野外掉落"),
		Array(1092030, 1, "枫叶盾 - 野外掉落"),
		Array(1092029, 1, "电磁光盾 - 野外掉落"),
		Array(1092008, 1, "锅盖 - 野外掉落"),
		Array(1402005, 1, "斩魔刀 - 野外掉落"),
		Array(1432011, 1, "寒冰破魔枪 - 野外掉落"),
		Array(1382010, 1, "死灵法杖 - 野外掉落"),
        Array(4000233, 100, "半人马的净水 - 野外掉落")

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

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {

            text = "<每日跑环任务>\r\n";
            text += "想参与每日跑环吗！只需要搜集足够的物品给我就行啦！完成次数越多奖励越丰厚！\r\n"
            text += "#r#bPS：每日可以完成20次,每日可以跳过3次任务!\r\n#k";
            text += "当前已完成" + cm.getBossLog("跑环") + "环\r\n";
            text += "#r任务信息:#e\r\n";
            if ((2) != 999) {
                text += "#b#n需要搜集物品\r\n#z" +ItemId[cm.getPlayer().getPH(2)][0]+"##v" +ItemId[cm.getPlayer().getPH(2)][0]+"# 数量:"+ItemId[cm.getPlayer().getPH(2)][1]+"  #r备注:"+ItemId[cm.getPlayer().getPH(2)][2]+"#d\r\n";
                text += "#L2#完成任务#l\r\n";
            } else {
                text += "暂无任务请先接受任务!\r\n";
                text += "#L1#接受任务#l\r\n";
            }
            cs = 3 - cm.getBossLog("跑环cs");
            text += "\r\n#L3#放弃当前.直接进入下一环(剩余次数:" + cs + ")#l\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {//接受任务
            //随机功能
            var item = Math.floor(Math.random() * ItemId.length + 0);
            cm.getPlayer().每日跑环更新(1,item);
            cm.sendOk("#b----------------任务需求----------------\r\n\r\n\r\n搜集物品：#v" + ItemId[item][0] + "##r#e#z" + ItemId[item][0] + "##b#n 数量:#r#e" + ItemId[item][1] + "#n#b个");
            cm.dispose();
        } else if (selection == 2) {//完成任务
            //随机功能
            if (cm.haveItem(ItemId[cm.getPlayer().getPH(2)][0],ItemId[cm.getPlayer().getPH(2)][1])) {
                cm.sendOk("恭喜你完成任务！");
                cm.setBossLog("跑环");
				cm.gainItem(ItemId[cm.getPlayer().getPH(2)][0],-ItemId[cm.getPlayer().getPH(2)][1]);
                 cm.getPlayer().每日跑环更新(1,999);
                cm.喇叭(4, "恭喜完成了跑环第" + cm.getBossLog("跑环") + "环！赢得了丰厚的奖励！");
                switch (cm.getBossLog("跑环")) {
                    case 1://第一环奖励
                        cm.gainItem(4000463, +1);
                        break;
                    case 2://第2环奖励
                        cm.gainItem(4000463, +2);
                        break;
                    case 3://第3环奖励
                        cm.gainItem(4000463, +2);
                        break;
                    case 4://第4环奖励
                        cm.gainItem(4000463, +4);
                        break;
                    case 5://第5环奖励
                        cm.gainItem(4000463, +4);
                        break;
                    case 6://第6环奖励
                        cm.gainItem(4000463, +6);
                        break;
                    case 7://第7环奖励
                        cm.gainItem(4000463, +6);
                        break;
                    case 8://第8环奖励
                        cm.gainItem(4000463, +8);
                        break;
                    case 9://第9环奖励
                        cm.gainItem(4000463, +8);
                        break;
                    case 10://第10环奖励
                        cm.gainItem(1472230, +1);
                        break;
					case 11://第11环奖励
                        cm.gainItem(4000463, +10);
                        break;
					case 12://第12环奖励
                        cm.gainItem(4000463, +10);
                        break;
					case 13://第13环奖励
                        cm.gainItem(4000463, +20);
                        break;
					case 14://第14环奖励
                        cm.gainItem(4000463, +20);
                        break;
					case 15://第15环奖励
                        cm.gainItem(1442251, +1);
                        break;
					case 16://第16环奖励
                        cm.gainItem(4000463, +30);
                        break;
					case 17://第17环奖励
                        cm.gainItem(4000463, +40);
                        break;
					case 18://第18环奖励
                        cm.gainItem(4000463, +40);
                        break;
					case 19://第19环奖励
                        cm.gainItem(4000463, +50);
                        break;
					case 20://第20环奖励
                        cm.gainItem(1382057, +1);
                        break;
                }
                cm.setBossLog("跑环");
                cm.dispose();
            } else {
                cm.sendOk("你没有完成任务！请仔细查看任务需求！");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getBossLog("跑环cs") == 3) {
                cm.sendOk("每天只可以放弃3次！");
                cm.dispose();
            } else {
                cm.喇叭(2, "放弃了当前跑环奖励。直接进入了下一个环节！");
                cm.setBossLog("跑环");
                cm.sendOk("OK。再次与我对话开始下一环把！");
                cm.setBossLog("跑环cs");
                cm.getPlayer().每日跑环更新(1,999);
                cm.dispose();
            }
        }
    }
}