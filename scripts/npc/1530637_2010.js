/*
	制作：dgms
	功能：提交建议
	时间：2016年12月28日
*/

var status = 0;
var pagesize = 5; // 一页显示5个
var title, text;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return
        }
        status--;
    }
    if (status == 0) {
        var text = "现在这里可以提交你的意见给管理员喔！\r\n#b";
        text += "#L0# 我要提交意见。\r\n"
        if (cm.getPlayer().isAdmin()) {
            text += "#L1# 查看意见列表。\r\n"
        }
        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendGetText("请输入您意见的标题（标题尽量间断，言简意赅)：");
        } else if (selection == 1) {
            var text = "当前意见如下：\r\n#b"
            var count = 0; // 数据量大小
            var resultSet = cm.sql_Select("select * from suggest")
            for (var key in resultSet) {
                text += "#L" + resultSet[key].get("id") + "# " + resultSet[key].get("title") + "\r\n";
                count++;
            }
            if (count == 0) {
                cm.sendOk("目前还没有人提意见。");
                cm.dispose();
            } else {
                status = 3;
                cm.sendSimple(text);
            }
        }
    } else if (status == 2) {
        java.lang.System.out.println("11111");
        title = cm.getText();
        if (title.isEmpty()) {
            status = -1;
            cm.sendNext("输入的标题不可以为空哦！请重新输入！");
            java.lang.System.out.println("2222");
        } else {
            cm.sendGetText("请输入您的意见，可以详细输入您的意见喔~\r\n（管理员都会认真看的喔！！)：");
            java.lang.System.out.println("3333");
        }
    } else if (status == 3) {
        java.lang.System.out.println("4444");
        text = cm.getText();
        if (text.isEmpty()) {
            status = -1;
            cm.sendNext("输入的内容不可以为空哦！请重新输入！")
        } else {
            java.lang.System.out.println("5555");
            addSuggestion(title, text);
            cm.sendOk("您已经给管理员提交了您的意见，谢谢您对" + cm.getServerName() + "的支持");
            cm.dispose();
        }
    } else if (status == 4) {
        var text = "";
        var count = 0; // 数据量大小
        var resultSet = cm.sql_Select("select * from suggest where id = ?", selection)
        for (var key in resultSet) {
            text += "标题：" + resultSet[key].get("title") + "\r\n"
            text += "玩家：" + resultSet[key].get("charid") + "\r\n"
            text += "时间：" + resultSet[key].get("date") + "\r\n======================================\r\n内容：\r\n" + resultSet[key].get("text");
            count++;
        }
        status = -1;
        cm.sendNext(text);
    }
}

function addSuggestion(title, text) {
    cm.sql_Insert("INSERT INTO suggest(id, charid ,title,text, date) value(?,?,?,?,?)", null, c.getPlayer().getName(), title, text, null);
}