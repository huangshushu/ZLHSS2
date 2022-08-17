var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ca = java.util.Calendar.getInstance();
var JD = "#fUI/Basic/BtHide3/mouseOver/0#";//"+箭头+"
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    var MC = cm.getServerName();
    var 角色 = cm.getPlayer().id;
    var 角色信息 = cm.Getcharacterz("" + 角色 + "", 1);
    var 上线提醒 = cm.Getcharacterz("" + 角色 + "", 2);
    //var 显示群聊 = cm.Getcharacterz("" + 角色 + "", 3);
    var 显示游戏聊 = cm.Getcharacterz("" + 角色 + "", 4);
    var 物品自动清理 = cm.Getcharacterz("" + 角色 + "", 5);
    if (status == 0) {


        var selStr = "   #e#d<玩家个性设置>#k\r\n   #n在这里你可以自己设置按键的对应功能。\r\n";


        selStr += "#b#L0#" + JD + " 返回#k#n\r\n";


        selStr += "\r\n#L10##r" + JD + " 角色信息: #k#n#b";
        if (cm.Getcharacterz("" + 角色 + "", 1) <= 0) {
            selStr += "允许查看#l";
        } else {
            selStr += "禁止查看#l";
        }
        selStr += "\r\n#L11##r" + JD + " 账号上线: #k#n#b";
        if (cm.Getcharacterz("" + 角色 + "", 2) == 0) {
            selStr += "打开提醒#l";
        } else {
            selStr += "关闭提醒#l";
        }

        /*selStr += "\r\n#L12##r" + JD + " 游戏显示群信息: #k#n#b";
        if (cm.显示群聊天开关() <= 0) {
            selStr += "显示#l";
        } else {
            selStr += "不显示#l";
        }
        selStr += "\r\n#L13##r" + JD + " 群显示游戏信息: #k#n#b";
        if (cm.显示群聊天开关2() <= 0) {
            selStr += "显示#l";
        } else {
            selStr += "不显示#l";
        }*/
        if (cm.getPlayer().getGuildId() > 0) {
            if (cm.getPlayer().getGuildRank() == 1) {
                selStr += "\r\n#L20##r" + JD + " 家族申请进入: #k#n#b";
                if (cm.Getguildsl("" + cm.getPlayer().getGuildId() + "", 1) <= 0) {
                    selStr += "允许#l";
                } else {
                    selStr += "禁止#l";
                }
            }
        }
        /*selStr += "\r\n#L21##r" + JD + " 角色伤害详细: #k#n#b";
         if (cm.显示伤害详细() == 0) {
         selStr += "不显示#l";
         } else {
         selStr += "显示#l";
         }*/



        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 21:
                if (cm.显示伤害详细() == 0) {
                    cm.打开伤害详细();
                } else {
                    cm.关闭伤害详细();
                }
                cm.openNpc(2007, 2007);
                break;
            case 20:
                if (cm.Getguildsl("" + cm.getPlayer().getGuildId() + "", 1) > 0) {
                    cm.Gainguildsl("" + cm.getPlayer().getGuildId() + "", 1, -1);
                } else {
                    cm.Gainguildsl("" + cm.getPlayer().getGuildId() + "", 1, 1);
                }
                cm.openNpc(2007, 2007);
                break;
            case 0:
                cm.dispose();
                cm.openNpc(9900004, 0);
                break;

            case 10:
                if (cm.Getcharacterz("" + 角色 + "", 1) > 0) {
                    cm.Gaincharacterz("" + 角色 + "", 1, -角色信息);
                } else {
                    cm.Gaincharacterz("" + 角色 + "", 1, -角色信息);
                    cm.Gaincharacterz("" + 角色 + "", 1, 1);
                }
                cm.openNpc(2007, 2007);
                break;
            case 11:
                if (cm.Getcharacterz("" + 角色 + "", 2) > 0) {
                    cm.Gaincharacterz("" + 角色 + "", 2, -上线提醒);
                } else {
                    cm.Gaincharacterz("" + 角色 + "", 2, -上线提醒);
                    cm.Gaincharacterz("" + 角色 + "", 2, 1);
                }
                cm.openNpc(2007, 2007);
                break;
            case 12:
                if (cm.显示群聊天开关() > 0) {
                    cm.关闭群聊显示();
                } else {
                    cm.打开群聊显示();
                }
                cm.openNpc(2007, 2007);
                break;
            case 13:
                if (cm.显示群聊天开关2() > 0) {
                    cm.关闭群聊显示2();
                } else {
                    cm.打开群聊显示2();
                }
                cm.openNpc(2007, 2007);
                break;
            case 14:
                if (cm.Getcharacterz("" + 角色 + "", 5) > 0) {
                    cm.Gaincharacterz("" + 角色 + "", 5, -物品自动清理);
                } else {
                    cm.Gaincharacterz("" + 角色 + "", 5, -物品自动清理);
                    cm.Gaincharacterz("" + 角色 + "", 5, 1);
                }
                cm.openNpc(2007, 2007);
                break;

        }
    }
}