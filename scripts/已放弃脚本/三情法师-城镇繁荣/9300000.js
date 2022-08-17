/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：拍卖主菜单
 */
//时间引用
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
//素材引用
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.对话结束();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var 繁荣度 = cm.Getcharactera("射手村繁荣度", 1);
    var 增益 = cm.Getcharactera("射手村繁荣度", 1) / 10000;
    if (status == 0) {
        var selStr = "	Hi~#b#h ##k，你要一起建设射手村吗？射手村是一座风景优美的城镇哦，四周都是绿化的植被，一起建设射手村可以提高#r泡点经验#k获取量哦，越是繁荣，可以获取越多。不过如果有人破坏城镇，会减少繁荣度。\r\n";

        selStr += "\t\t\t#k" + r + " 时间: #r" + hour + "#k #b: #r" + minute + "#k #b: #r" + second + "#k\r\n";


        selStr += "射手村；增幅[#b经验获取#k]\r\n";
        selStr += "繁荣度；#b" + 繁荣度 + "#k\r\n";
        selStr += "增益率；#b" + 增益.toFixed(2) + "%#k\r\n";

        selStr += "\t\t\t\t\t#L1##b增加繁荣度#k#l\r\n";
        selStr += "\t\t\t\t\t#L2##b贡献排行榜#k#l";

        cm.是否说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.对话结束();
                cm.openNpc(9300000, 1);
                break;
            case 2:
                var text = "   ─────────< #e#r贡献榜#k#n >────────── #n\r\n\r\n";
                text += "    排名        \t玩家         \t\t贡献点\r\n";
                var rankinfo_list = cm.getBossRankCountTop("射手村贡献点");
                if (rankinfo_list != null) {
                    for (var i = 0; i < rankinfo_list.size(); i++) {
                        if (i == 20) {
                            break;
                        }
                        var info = rankinfo_list.get(i);

                        text += i == 0 ? "#r" : i == 1 ? "#b" : i == 2 ? "#b" : "";
                        text += "\t" + (i + 1) + "\t\t\t\t";
                        text += info.getCname();
                        for (var j = 16 - info.getCname().getBytes().length; j > 0; j--) {
                            text += " ";
                        }
                        text += "\t#k#n#r" + info.getCount();
                        text += "#k#n \t\t#k";
                        text += "";
                    }
                }
                text += "\r\n\r\n";
                cm.sendOkS(text, 3);
                cm.dispose();
                break;
            default:
                cm.对话结束();
                break;
        }
    }
}