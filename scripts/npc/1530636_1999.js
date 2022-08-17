var jsts = "#fEffect/ItemEff/1102376/effect/proneStab/7#";//橘色翅膀
var a11 = "#fUI/UIPVP.img/MiniMapIcon/star#";  //黄星星
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边


var status = 0;
var text = "";
var questid = 100100;
var maxtimes = 20;
var playerid = 0;
var accepttimes = 0;
var questitemid = 0;
var questitemcs = 0;
var hitemid = 0;
var hitemcs = 0;
var questitems = Array(
        Array(4000014, 25, "龙的头骨"), // 是龙的头骨 - 是龙的头骨
        Array(4000034, 25, "蛇皮"), // 青蛇的外皮. - 青蛇的外皮.
        Array(4000048, 25, "小白雪人皮"), // 小白雪人皮 - 小白雪人的外皮，由白色软毛构成.
        Array(4000331, 25, "听说有人在#r仙人掌爸爸#k身上见到过这种东西"), // 仙人掌的花
        Array(4000330, 25, "听说有人在#r仙人掌妈妈#k身上见到过这种东西"), // 仙人掌的刺
        Array(4000000, 25, "蓝色蜗牛的壳"), // 蓝色蜗牛壳
        Array(4000001, 25, "花蘑菇的盖"), // 花蘑菇的盖
        Array(4000002, 25, "漂漂猪的蝴蝶结"), // 漂漂猪的蝴蝶结
        Array(4000011, 25, "是蘑菇的芽孢"), // 蘑菇芽孢
        Array(4000017, 25, "是猪的头."), // 猪头
        Array(4000028, 25, "月牙牛魔王的角.非常硬而且重."), //  月牙牛魔王的角.非常硬而且重.
        Array(4000021, 25, "也许你可以想想#r火野猪#k什么的"), // 动物皮 - 是动物的外皮.
        Array(4000052, 25, "在#r冰封雪域#k有人看见过这种东西"), // 白狼之尾 - 白狼的尾，由白色软毛构成.
		Array(4000595, 25, "在#r埃德尔斯坦#k有人看见过这种东西"), // 嫩芽
		Array(4000596, 25, "在#r埃德尔斯坦#k有人看见过这种东西"), // 喇叭花.
		Array(4000597, 25, "在#r埃德尔斯坦#k有人看见过这种东西"), // 软木塞
		Array(4000598, 25, "在#r埃德尔斯坦#k有人看见过这种东西"), // 巡逻机器人的记忆芯片
		Array(4000601, 25, "在#r埃德尔斯坦#k有人看见过这种东西"), // 偷水贼的水瓶
		Array(4000602, 25, "在#r埃德尔斯坦#k有人看见过这种东西"), // 尘粒
		Array(4000156, 25, "在#r水下世界#k有人看见过这种东西"), // 海象尖牙
		Array(4000157, 25, "在#r水下世界#k有人看见过这种东西"), // 海豹的肉
		Array(4000182, 25, "在#r水下世界#k有人看见过这种东西"), // 石灰粉瓶
		Array(4031209, 25, "在#r水下世界#k有人看见过这种东西"), // 求救信
		Array(4000167, 25, "在#r水下世界#k有人看见过这种东西"), // 坚硬的鳞片
		Array(4000106, 25, "在#r玩具塔#k有人看见过这种东西"), // 玩具熊猫的棉花团
		Array(4000073, 25, "在#r天空之城#k有人看见过这种东西"), // 独角狮的硬角
		Array(4000460, 1, "在#r时间神殿#k有人看见过这种东西"), // 古代头盔
		Array(4000461, 1, "在#r时间神殿#k有人看见过这种东西"), // 骑士面具
		Array(4000462, 1, "在#r时间神殿#k有人看见过这种东西"), // 守护兽之角
        Array(4000232, 25, "听说这是#r火焰半人马#k之力量的来源"), // 半人马的火花 - 火焰半人马之力量的来源。
        Array(4000233, 25, "听说这是#r寒冰半人马#k之力量的来源"), // 半人马的净水 - 寒冰半人马之力量的来源。
        Array(4000234, 25, "听说这是#r暗黑半人马#k之力量的来源"), // 半人马的骨头 - 暗黑半人马之力量的来源。
        Array(4160000, 1, "宠物商店可能会有哦"), // 宠物指令：小狗系列
		Array(4160001, 1, "宠物商店可能会有哦"), // 宠物指令：小猫系列
		Array(4160002, 1, "宠物商店可能会有哦"), // 宠物指令：兔子系列
		Array(4160004, 1, "宠物商店可能会有哦"), // 宠物指令：雪犬
		Array(4160014, 1, "宠物商店可能会有哦"), // 宠物指令：小企企
        Array(2000003, 1, "各大药房均有销售。"), // 蓝色药水
        Array(2000006, 1, "各大药房均有销售。") // 活力神水
        //Array(2000007, -1, "各大药房均有销售。"), // 红色药丸 - 用红色药水做的药丸。 HP恢复50。因为体积小，能带更多药
        //Array(2000008, -1, "各大药房均有销售。") // 橙色药丸 - 用橙色药水做的药丸。 HP恢复150。因为体积小，能带更多药
//	Array(-1,-1, "我想我需要买一些东西慰劳自己。"), //游戏币
//	Array(-2,-1,"我想我需要买一些东西慰劳自己。") //抵用卷
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
            var info = cm.getPlayer().getOneInfo(questid, "COUNT");
            accepttimes = cm.getEventCount("RINGQUSTION");
            if (info == null || accepttimes <= 0) {
                info = cm.getPlayer().updateInfoQuest(questid, "COUNT=1;DONE=0;AC=0;ITEM=0;REQ=0;ID=0");
            }
            text = "\t\t\t\t#e#d"+xxx+"<20环任务>"+xxx+""+jsts+"#n\r\n";
            text += "#d"+a11+"您今日可领取次数：#r" + (maxtimes - accepttimes) + "#k#d次"+a11+"完成每环任务会获得奖励：\r\n";
            text += "#e#r"+a11+"1000点卷、1000点抵用券、10W破攻石.大量游戏经验、100个星星、5个征服者币#k\r\n";
            text += ""+a11+"#d每#g5#k#d环有100%获得1个#z2430069#\r\n#k";
            text += "#e#d"+a11+"注意:每天晚上12点会重置任务!不管有没有完成!#n#k\r\n\r\n";

            if (cm.getPlayer().getLevel() < 210) {
                cm.sendOk("连续跑环任务需要角色等级大于#r210#k级");
                cm.dispose();
                return;
            } else if (cm.getEventCount("连续跑环") > 1) {
                cm.sendOk("该帐号跑环任务已经做完请明天再来!");
                cm.dispose();
                return;
            } else if (cm.getPlayer().getOneInfo(questid, "AC").equals("1")) {  // 判断是否接取了任务
                if (accepttimes <= maxtimes) { // 判断是否超过完成次数
                    hitemid = parseInt(cm.getPlayer().getOneInfo(questid, "ITEM"));
                    hitemcs = parseInt(cm.getPlayer().getOneInfo(questid, "REQ"));
                    text += "\t\t#e当前第#r" + Math.max(1, accepttimes) + "#k环  收集 #r#z" + hitemid + "# " + hitemcs + "#k个#n\r\n\r\n\r\n";
                    if (cm.haveItem(hitemid, hitemcs)) {	// 判断是否满足任务条件
                        text += "#b#L1#完成任务#l\r\n";
                    } else {
                        text += "#e怎么了？还没找到我要的东西吗？#n\r\n";
                    }
                    text += "#r#L2#放弃任务 (无法获得任何奖励，且会消耗一次任务次数)#l\r\n";
                } else {
                    text += "#e该帐号跑环任务已经做完请明天再来!#n\r\n";
                }
            } else {
                text += "#e#b#L3#"+a11+"接受任务"+a11+"#l\r\n";
            }
            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {			// 重新接受任务 初始化
                var questrandid = Math.floor(Math.random() * questitems.length);
                questitemid = questitems[questrandid][0];	// 任务道具ID
                if (questitems[questrandid][1] < 0) {
                    questitemcs = Math.floor(Math.random() * 20) + 5 + Math.floor(Math.random() * cm.getReborns());	// 任务道具数量
                } else {
                    questitemcs = questitems[questrandid][1];
                }
                text = "#e第#r" + (accepttimes + 1) + "#k环：#n\r\n\r\n请帮我找到#b" + questitemcs + "#k个#r#z" + questitemid + "##k\r\n" + questitems[questrandid][2] + "\r\n#k感激不尽，快去快回~";
                // 重新接受任务
                cm.getPlayer().updateOneInfo(questid, "AC", "1");
                cm.getPlayer().updateOneInfo(questid, "DONE", "0");
                // 写入任务道具ID
                cm.getPlayer().updateOneInfo(questid, "ITEM", questitemid + "");
                // 写入任务道具数量
                cm.getPlayer().updateOneInfo(questid, "REQ", questitemcs + "");
                cm.sendOk(text);
                cm.dispose();
            } else if (selection == 1) {	// 完成任务
                var doneCount = accepttimes + 1;
                //完成任务
                cm.getPlayer().updateOneInfo(questid, "DONE", "1");
                cm.getPlayer().updateOneInfo(questid, "AC", "0");
                cm.getPlayer().updateOneInfo(questid, "COUNT", doneCount + "");
                //经验值奖励
                var baseExp = 0.03;
                if (cm.getPlayer().getLevel() > 220) {
                    baseExp = 0.03;
                } else if (cm.getPlayer().getLevel() > 240) {
                    baseExp = 0.005;
                }
                var calcExp = cm.getPlayer().getExpNeededForLevel() * baseExp;
                if (!(accepttimes % 5)) {
                    cm.gainItem(4001839, 100);
					cm.gainItem(2430069,1);
					cm.gainItem(2614004,1);
					cm.gainItem(4310036,5);
					cm.gainPlayerEnergy(2);
                    //cm.gainItem(4310019, 1, 1);
                    if (cm.getEventCount("RINGQUSTION") <= maxtimes) {
                        cm.gainNX(2, 1000);
                        cm.gainNX(1, 1000);
                    }
                } else {
                    cm.gainItem(4001839, 100);
					cm.gainItem(2614004,1);
					cm.gainItem(4310036,5);
					cm.gainPlayerEnergy(1);
                    if (cm.getEventCount("RINGQUSTION") <= maxtimes) {
                        cm.gainNX(2, 1000);
                        cm.gainNX(1, 1000);
                    }
                }
                cm.gainItem(hitemid, -hitemcs);
                text = "恭喜您完成了任务~~";
                cm.sendOk(text);
                cm.worldSpouseMessage(0x18, "[每日任务]" + " : " + "恭喜玩家【" + cm.getChar().getName() + "】,完成了【第" + accepttimes + "环】任务获得了丰厚的奖励。");
                cm.playerMessage(-1, "获得星星20个");
                //cm.playerMessage(-1, "获得高级魔法1个");
                //cm.playerMessage(-1, "获得50点卷");
                if (doneCount >= maxtimes) {
                    cm.setEventCount("连续跑环");
                    text = "您已经完成了今天的任务，请明天0点后再来吧~";
                }
                cm.dispose();
            } else if (selection == 2) {	// 放弃任务
                var doneCount = accepttimes + 1;
                //完成任务
                cm.getPlayer().updateOneInfo(questid, "DONE", "0");
                cm.getPlayer().updateOneInfo(questid, "AC", "0");
                cm.getPlayer().updateOneInfo(questid, "COUNT", doneCount + "");
                text = "任务已放弃……";
                if (doneCount >= maxtimes) {
                    cm.setEventCount("连续跑环");
                }
                cm.sendOk(text);
                cm.dispose();
            } else if (selection == 3) {	// 接受任务
                var questrandid = Math.floor(Math.random() * questitems.length);
                questitemid = questitems[questrandid][0];	// 任务道具ID
                if (questitems[questrandid][1] < 0) {
                    questitemcs = Math.floor(Math.random() * 20 * cm.getPlayer().getLevel() / 10) + 30 + Math.floor(Math.random());	// 任务道具数量
                } else {
                    questitemcs = questitems[questrandid][1];
                }
                text = "#e第#r" + (accepttimes + 1) + "#k环：#n\r\n\r\n请帮我找到#b" + questitemcs + "#k个#r#z" + questitemid + "##k\r\n" + questitems[questrandid][2] + "\r\n#k快去快回~";
                cm.getPlayer().updateOneInfo(questid, "AC", "1");
                cm.getPlayer().updateOneInfo(questid, "DONE", "0");
                // 写入任务道具ID
                cm.getPlayer().updateOneInfo(questid, "ITEM", questitemid + "");
                // 写入任务道具数量
                cm.getPlayer().updateOneInfo(questid, "REQ", questitemcs + "");
                cm.setEventCount("RINGQUSTION");
                cm.sendOk(text);
                cm.dispose();
            }
        }
    }
}