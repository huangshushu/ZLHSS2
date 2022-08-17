var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var IconB = "#fUI/UIMiniGame/starPlanetRPS/heart#";//红心桃心
var IconC = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
var IconD = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#";//大笑
var IconE = "#fUI/UIWindow2/ToolTip/Equip/Star/Star2#";//星星

var status = -1;
var mySpoints = -1;
var typed = 0;
var I = null;

function start() {
    I = new Invitation();
    if (mySpoints < 0) mySpoints = I.getPoints();
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var text = "\t\t\t\t\t " + IconC + "\r\n\r\n";
        text += IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n\r\n";
        text += " " + IconD + " #b欢迎光临 #r月光冒险岛冒险岛#b day day Up! #k" + IconD + "\r\n\r\n";
       // text += "#r#L0#" + IconE + "　　朋友介绍我过来的，觉的月光冒险岛不错　　" + IconE + "#l#k\r\n\r\n";
        text += "#b#L1#" + IconE + "　　欢迎来到 - 月光冒险岛　　" + IconE + "#l#k\r\n\r\n\r\n";
        text += IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n ";
        cm.sendSimpleS(text, 2);
    } else if (status == 1) {
        if (cm.getBossLog("新手自选类型", 1) < 1) {
            cm.dispose();
            cm.openNpc(9001043, 1);
            return;
        }
        typed = selection;
        if (selection == 0) {
            cm.sendGetText("请输入你朋友的帐号：", 9105005);
        } else if (selection == 1) {
            cm.dispose();
            //cm.gainNX(2, 5000);
            // cm.gainItem(1142073, 1);
            //cm.setBossLogAcc("推广设置", -2);
            cm.openNpc(9001043, 1);
            //cm.openNpc(2008);
        }
    } else if (status == 2) {
        var Name = I.getInvitation(cm.getC().getAccountName());
        if (Name != null) {
            cm.sendSimpleS("您已经设置过邀请者的账号，无法重复设置啊啊", 3);
            cm.dispose();
            return;
        }
        if (typed == 0) {
            var invitation = cm.getText();
            var myAccount = cm.getC().getAccountName();
            //推广账号不能为自己
            if (invitation == myAccount) {
                status = -1;
                cm.sendSimpleS("无法使用自己的账号。", 3);
                return;
            }
            var isExists = I.checkAccountVaild(invitation);
            if (isExists) {
                var isSuccess = I.setInvitation(invitation);
                if (isSuccess) {
                    cm.dispose();
                    cm.setBossLogAcc("推广设置", -2);
                    cm.gainNX(2, 10000);
                    // cm.gainItem(1142073, 1);
                    cm.openNpc(2470018, 1);
                    return;
                    //	status = -1;
                } else {
                    //cm.setBossLogAcc("推广设置", -2);
                    cm.sendSimpleS("您已经设置过邀请者的账号，无法重复设置", 3);
                    status = -1;

                }
            } else {
                cm.sendSimpleS("#r该账号不存在，无法设置。#k", 3);
                status = -1;
            }
        }
    }
}

var Invitation = function () {

    this.invitation = null;
    this.setInvitation = function (name) {
        var pstmt = cm.sql_Update("UPDATE accounts SET invitation = ? WHERE id = ? and (invitation is NULL or invitation = '')", name, cm.getPlayer().getAccountID());
        var isSuccess = (pstmt.length > 0) ? false : true;
        return isSuccess;
    }

    //读取我的邀请者
    this.getInvitation = function () {
        if (this.invitation != null) return this.invitation;
        var rs = cm.sql_Select("SELECT invitation FROM accounts WHERE name = ?", cm.getC().getAccountName());
        if (rs.length > 0) this.invitation = rs[0].get("invitation");
        return this.invitation;
    }

    //检测账号合法性
    this.checkAccountVaild = function (name) {
        var count = 0;
        var rs = cm.sql_Select("SELECT count(id) as num FROM accounts WHERE name = ?", name);
        if (rs.length > 0) count = rs[0].get("num");
        return (count > 0) ? true : false;
    }

    //读取积分
    this.getPoints = function () {
        var count = 0;
        var rs = cm.sql_Select("SELECT spoints FROM accounts WHERE name = ?", cm.getC().getAccountName());
        if (rs.length > 0) count = rs[0].get("spoints");
        return count;
    }

    //积分给予
    this.gainPoints = function (quantity) {
        var pstmt = cm.sql_Update("UPDATE accounts SET spoints = spoints + ? WHERE id = ?", quantity, cm.getPlayer().getAccountID());
        return (pstmt.length > 0) ? true : false;
    }
}
