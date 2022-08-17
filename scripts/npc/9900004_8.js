/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：推广系统
 */
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
    status = -1;

    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--
    }
    var MC = cm.getServerName();
    var 推广开关 = cm.GetPiot("推广开关", "1");
    if (status <= 0) {
        var
        selStr = "\t\t " + 心 + "  " + 心 + "  " + 心 + " #r游戏推广员#k " + 心 + "  " + 心 + "  " + 心 + "\r\n\r\n";
        selStr += "\t\t#d 提示:可以找管理员定制自己的推广奖励。#k\r\n\r\n";
        selStr += "\t\t\t\t你的推广码为:#r" + cm.getPlayer().id + "#k#n\r\n";
        if (cm.getBossRank("推广员", 2) > 0) {
            selStr += "\t\t\t\t你的推广员是:#r" + cm.角色ID取名字(cm.getBossRank("推广员", 2)) + "#k#n\r\n";
        }
        selStr += "\t\t\t#L0#" + 箭头 + "#b返回页面#l#k\r\n";
            selStr += "\t\t\t#L1#" + 箭头 + "#b输入推广码#l#k\r\n";
            selStr += "\t\t\t#L2#" + 箭头 + "#b我推广的玩家群#l#k\r\n";
            if (cm.getBossRank("推广员", 2) > 0) {
                if (cm.getQuestStatus(9941303) == 0) {
                    selStr += "\t\t\t#L3#" + 箭头 + "#b3人四转找管理领取100赞助奖励#l#k\r\n";
                }
            }
 
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9900004, 0);
                break;
            case 1:
                cm.dispose();
                cm.openNpc(9900004,81);
                break;
		
            case 2:
                var text = "\t#r" + cm.getChar().getName() + "#k 推广的玩家：#n\r\n\r\n";

                var rankinfo_list = cm.getBossRankCountTop("" + cm.getPlayer().id + "");
                if (rankinfo_list != null) {
                    for (var i = 0; i < rankinfo_list.size(); i++) {
                        if (i == 20) {
                            break;
						}
                        var info = rankinfo_list.get(i);

                        text += i == 0 ? "#b" : i == 1 ? "#b" : i == 2 ? "#b" : "";
                        text += "\t #r" + (i + 1) + "#k#n.[ ";
                        // 填充名字空格
                        text += info.getCname() + " ]";
                        for (var j = 16 - info.getCname().getBytes().length; j > 0; j--) {
                            text += " ";
                        }
                        text += "\t#bLv." + cm.角色名字取等级(info.getCname()) + "";
                        text += "#k";

                        text += "\r\n";
                    }
                }
                cm.sendOkS(text, 3);
                cm.dispose();
                break;
        }
    }
}