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
var mapid = 0;
var questitems = Array(
//随机选中10个随机任务
	Array(4000197, 200, "在#r遗迹发掘地#k有人看见过这种东西",102040100), 
	Array(4000015, 200, "在#r蘑菇之歌森林#k有人看见过这种东西",100020100), 
	Array(4000033, 200, "在#r沼泽地带#k有人看见过这种东西",103030200), 
	Array(4000709, 200, "在#r万神殿北部地区#k有人看见过这种东西",400040100), 
	//Array(4000730, 100, "在#r赫里希安市中心#k有人看见过这种东西"), 
	Array(4000743, 200, "在#r禁忌森林#k有人看见过这种东西",401020000), 
	Array(4000052, 200, "在#r神秘岛#k有人看见过这种东西",211040100), 
	Array(4000112, 200, "在#r玩具城#k有人看见过这种东西",220030200), 
	Array(4000685, 200, "在#r梦幻主题公园#k有人看见过这种东西",222130000), 
	Array(4000284, 200, "在#r武陵#k有人看见过这种东西",250010301), 
	Array(4000651, 200, "在#r骑士团要塞#k有人看见过这种东西",271030200), 
	Array(4000135, 200, "在#r玩具城#k有人看见过这种东西",220060301), 
	Array(4000134, 200, "在#r玩具城#k有人看见过这种东西",220060300), 
	Array(4000704, 200, "在#r万神殿西部地区#k有人看见过这种东西",400020100), 
	Array(4021031, 100, "在#r艾琳森林#k有人看见过这种东西",401053001), 
	Array(4000759, 200, "在#r金海滩#k有人看见过这种东西",120041400), 
        Array(4000014, 200, "龙的头骨",105020100), // 是龙的头骨 - 是龙的头骨
        Array(4000034, 200, "蛇皮",103030000), // 青蛇的外皮. - 青蛇的外皮.
        Array(4000048, 200, "小白雪人皮",211010000), // 小白雪人皮 - 小白雪人的外皮，由白色软毛构成.
        Array(4000331, 200, "听说有人在#r仙人掌爸爸#k身上见到过这种东西",260010200), // 仙人掌的花
        Array(4000330, 200, "听说有人在#r仙人掌妈妈#k身上见到过这种东西",260010200), // 仙人掌的刺
        Array(4000001, 200, "花蘑菇的盖",100010100), // 花蘑菇的盖
        Array(4000011, 200, "是蘑菇的芽孢",104010200), // 蘑菇芽孢
        Array(4000017, 100, "是猪的头.",100030310), // 猪头
        Array(4000028, 200, "月牙牛魔王的角.非常硬而且重.",105030200), //  月牙牛魔王的角.非常硬而且重.
        //Array(4000021, 200, "也许你可以想想#r火野猪#k什么的",200010100), // 动物皮 - 是动物的外皮.
	//Array(4000595, 100, "在#r埃德尔斯坦#k有人看见过这种东西"), // 嫩芽
	Array(4000596, 200, "在#r埃德尔斯坦#k有人看见过这种东西",310020100), // 喇叭花.
	Array(4000597, 200, "在#r埃德尔斯坦#k有人看见过这种东西",310020200), // 软木塞
	Array(4000598, 200, "在#r埃德尔斯坦#k有人看见过这种东西",310030000), // 巡逻机器人的记忆芯片
	Array(4000601, 200, "在#r埃德尔斯坦#k有人看见过这种东西",310030200), // 偷水贼的水瓶
	//Array(4000602, 100, "在#r埃德尔斯坦#k有人看见过这种东西"), // 尘粒
	Array(4000156, 200, "在#r水下世界#k有人看见过这种东西",230010400), // 海象尖牙
	Array(4000157, 200, "在#r水下世界#k有人看见过这种东西",230010400), // 海豹的肉
	Array(4000182, 200, "在#r水下世界#k有人看见过这种东西",230040000), // 石灰粉瓶
	Array(4031209, 100, "在#r水下世界#k有人看见过这种东西",230020000), // 求救信
	Array(4000167, 200, "在#r水下世界#k有人看见过这种东西",230020000), // 坚硬的鳞片
	Array(4000073, 200, "在#r天空之城#k有人看见过这种东西",200010100), // 独角狮的硬角
        Array(4000232, 200, "听说这是#r火焰半人马#k之力量的来源",240020100), // 半人马的火花 - 火焰半人马之力
        Array(4000233, 200, "听说这是#r寒冰半人马#k之力量的来源",240020400), // 半人马的净水 - 寒冰半人马之力
        Array(4000234, 200, "听说这是#r暗黑半人马#k之力量的来源",240020100), // 半人马的骨头 - 暗黑半人马之力
	//Array(4009226, 100, "在#r废都塔#k有人看见过这种东西"), 
	Array(4003002, 200, "在#r龙族洞穴#k有人看见过这种东西",211030000), 
	Array(4000326, 200, "在#r遗迹发掘地#k有人看见过这种东西",260010500)

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
            text = "\t\t\t\t#e#d"+xxx+"   <跑跑乐>   "+xxx+"#n\r\n\r\n";
            text += "#d"+a11+"您今日可领取次数：#r" + (maxtimes - accepttimes) + "#k#d次"+a11+"完成每环任务会获得奖励：\r\n";
            text += "#e#r"+a11+"完成一次获得:50W破攻石、1000个星星#k\r\n";
            text += ""+a11+"#d每#g5#k#d环有100%获得1个#z2430069##r(随机破功石)#k\r\n#k";
            text += "#e#d"+a11+"注意:每天晚上12点会重置任务!不管有没有完成!#n#k\r\n\r\n";

            if (cm.getPlayer().getLevel() < 230) {
                cm.sendOk("连续跑环任务需要角色等级大于#r230#k级");
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
                        text += "                  #b#L1#完成任务#l\r\n";
                    } else {
                        text += "        #r#e怎么了？还没找到我要的东西吗？#n";
                cm.dispose();
                    }
                    //text += "#r#L2#放弃任务 (无法获得任何奖励，且会消耗一次任务次数)#l\r\n";
                } else {
                    text += "#e该帐号跑环任务已经做完请明天再来!#n\r\n";
                }
            } else {
                text += "                #e#b#L3#"+a11+"接受任务"+a11+"#l\r\n";
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
				mapid = questitems[questrandid][3];
                text = "#e第#r" + (accepttimes + 1) + "#k环：#n\r\n\r\n请帮我找到#b" + questitemcs + "#k个#r#z" + questitemid + "##k\r\n" + questitems[questrandid][2] + "\r\n#k感激不尽，快去快回~";
                // 重新接受任务
                cm.getPlayer().updateOneInfo(questid, "AC", "1");
                cm.getPlayer().updateOneInfo(questid, "DONE", "0");
                // 写入任务道具ID
                cm.getPlayer().updateOneInfo(questid, "ITEM", questitemid + "");
                // 写入任务道具数量
                cm.getPlayer().updateOneInfo(questid, "REQ", questitemcs + "");
                //cm.sendOk(text);
                //cm.dispose();
				cm.sendSimple(text);
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
                    cm.gainItem(4001839, 1000);
					cm.gainItem(2430069,1);
					cm.gainItem(2614049,1);
					cm.gainPlayerEnergy(2);
                    //cm.gainItem(4310019, 1, 1);
                    if (cm.getEventCount("RINGQUSTION") <= maxtimes) {
                cm.playerMessage(-1, "获得宝箱1个");
                    }
                } else {
                    cm.gainItem(4001839, 1000);
					cm.gainItem(2614049,1);
					cm.gainPlayerEnergy(1);
                    if (cm.getEventCount("RINGQUSTION") <= maxtimes) {

                    }
                }
                cm.gainItem(hitemid, -hitemcs);
                text = "恭喜您完成了任务~~";
                cm.sendOk(text);
                //cm.worldSpouseMessage(0x18, "[跑跑乐]" + " : " + "恭喜玩家【" + cm.getChar().getName() + "】,完成了【第" + accepttimes + "乐】任务获得了丰厚的奖励。");
                cm.playerMessage(-1, "获得星星1000个");
                cm.playerMessage(-1, "获得50W破功石1个");
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
				mapid = questitems[questrandid][3];
                cm.getPlayer().updateOneInfo(questid, "AC", "1");
                cm.getPlayer().updateOneInfo(questid, "DONE", "0");
                // 写入任务道具ID
                cm.getPlayer().updateOneInfo(questid, "ITEM", questitemid + "");
                // 写入任务道具数量
                cm.getPlayer().updateOneInfo(questid, "REQ", questitemcs + "");
                cm.setEventCount("RINGQUSTION");
               // cm.sendOk(text);
               // cm.dispose();
			   cm.sendSimple(text);
            }
        }else if(status == 2){
			 cm.dispose();
			 cm.warp(mapid);
		}
    }
}