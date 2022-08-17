/*
 冒险岛(079)游戏服务端
 脚本：罗密欧
 */

var 最少人数 = 1;
var 最多人数 = 6;
var 最低等级 = 69;
var 最高等级 = 256;
//奖励预览
/*
 物品，概率
 */
var 奖励预览 = [
	//[2022468, 34,"1~2"],
    [4030002, 70,"1~2"],
	[4030003, 70,"1~2"],
	[4030004, 70,"1~2"],
	[4030005, 70,"1~2"],
	[4030006, 70,"1~2"],
	[4030007, 70,"1~2"],
	[4030008, 70,"1~2"]
];

var status = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var em = cm.getEventManager("Romeo");
    if (em == null) {
        cm.sendOk("找不到脚本，请联系GM！");
        cm.对话结束();
        return;
    }
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 1) {
		var 文本信息 = "";
		文本信息 += "    #d#r冒险币 10W + #r100点券#k\r\n"
		文本信息 += "    #d#r随机10%卷轴#k\r\n"
        for (var i = 0; i < 奖励预览.length; i++) {
            文本信息 += "   " + cm.显示物品(奖励预览[i][0]) + "  " + 奖励预览[i][1] + "% 奖励" + 奖励预览[i][2] + "个#k\r\n";
        }
        cm.sendYesNo("\r\n     罗密欧与朱丽叶。副本的要求的人数是#b" + 最少人数 + " - " + 最多人数 + "#k，等级要求#b" + 最低等级 + " - " + 最高等级 + "#k，你要参加副本#b罗密欧与朱丽叶#k吗？在这里盛产各种#r俄罗斯方块#k哦。\r\n\r\n   总计完成: #r" + cm.getBossRank("罗密欧与朱丽叶", 2) + "\r\n#k   今日完成: #r" + cm.getBossLog("罗密欧与朱丽叶") + "\r\n\r\n#k#e副本奖励预览:#n\r\n\r\n" + 文本信息 + "");
    } else if (status == 2) {
        cm.removeAll(4001130);
        cm.removeAll(4001131);
        cm.removeAll(4001132);
        cm.removeAll(4001133);
        cm.removeAll(4001134);
        cm.removeAll(4001135);
        if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
            cm.sendOk("请找队长来和我谈。");
        } else {
            var party = cm.getPlayer().getParty().getMembers();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var size = 0;
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if (ccPlayer == null || ccPlayer.getLevel() < 最低等级 || ccPlayer.getLevel() > 最高等级) {
                    next = false;
                    break;
                }
                size += (ccPlayer.isGM() ? 4 : 1);
            }
            if (party.size() > 最多人数 || party.size() < 最少人数) {
                next = false;
            }
            if (next) {
                em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
            } else {
                cm.sendOk("副本: #b罗密欧与朱丽叶#k\r\n人数: #b" + 最少人数 + " - " + 最多人数 + "#k\r\n等级: #b" + 最低等级 + " - " + 最高等级 + "#k");
            }
        }
    }
}