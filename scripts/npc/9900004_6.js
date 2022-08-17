/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：游戏论坛
 */
var status = -1;
var Forum_Section;
var select;
var selectId;
var selectName;
var threadId;
var threadName;
var newThreadName;
var isError;
var thread;
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var 蘑菇 = "#fUI/UIWindow.img/Minigame/Common/mark#";
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    var MC = cm.getServerName();
    if (status == 0) {
        var sectionName = "\t\t\t" + 心 + "  " + 心 + " #r#e < 游戏论坛 > #k#n " + 心 + "  " + 心 + "\r\n\r\n";
        if (cm.GetPiot("论坛开关", "1") <= 0) {
            Forum_Section = cm.getForum();

            for (var i = 0; i < Forum_Section.size(); i++) {
                sectionName += "\t\t\t\t#b#L" + Forum_Section.get(i).getId() + "#" + 蘑菇 + "" + Forum_Section.get(i).getName() + "#l \r\n";
            }
        } else {
            sectionName += "\r\n\r\n维护中···";
        }
        sectionName += "\r\n\r\n\t\t\t\t#b#L0#返回界面#l#k";
        if (cm.getPlayer().isGM()) {
            sectionName += "\r\n\t\t\t\t#b#L9998#新增模块#r[GM]#l#k";
        }
        cm.sendNext(sectionName);
    } else if (status == 1) {
        if (selection == 100) {
            cm.GainPiot("论坛开关", "1", -论坛开关);
            cm.GainPiot("论坛开关", "1", 1);
            cm.dispose();
            cm.openNpc(9900004, 6);
            return;
        }
        if (selection == 101) {
            cm.GainPiot("论坛开关", "1", -论坛开关);
            cm.dispose();
            cm.openNpc(9900004, 6);
            return;
        }
        if (selection == 0) {
            cm.dispose();
            cm.openNpc(9900004, 0);
            return;
        }
        if (selection == 9998) {
            cm.sendGetText("请输入新的版块名称：");
            select = 9998;
            return;
        }
        selectId = selection;
        selectName = cm.getSectionById(selection).getName();
        var Forum_Thread = cm.getCurrentAllThread(selection);

        var sectionName = "" + 蘑菇 + "#b" + selectName + "\r\n";
        sectionName += "#k主题：#r" + Forum_Thread.size() + "#k#n\r\n"

        if (Forum_Thread.size() != 0) {
            for (var i = 0; i < Forum_Thread.size(); i++) {
                sectionName += "#L" + Forum_Thread.get(i).getThreadId() + "#" + 蘑菇 + "#b " + Forum_Thread.get(i).getThreadName() + "#l\r\n";
            }
        } else {
            sectionName += "\r\n当前版块内没有任何内容！快来抢沙发！";
        }

        sectionName += "\r\n\r\n#L8888##b#e[发帖]#k#l"

        if (cm.getPlayer().getGMLevel() == 6) {
            sectionName += "\r\n#r#L9999##e[删除版块]#l#k";
        }
        cm.sendNext(sectionName);
    } else if (status == 2) {
        if (selection == 9999) {
            if (cm.deleteSection(selectId)) {
                cm.sendOk("删除 #r" + selectName + "#k 版块成功！");
                cm.worldMessage2(2, "[论坛] :  " + MC + "论坛 < " + selectName + " > 版块被删除了");
            } else {
                cm.sendOk("删除板块失败，出现了未知的异常！");
            }
            cm.dispose();
            return;
        } else if (selection == 8888 || select == 8888) {
            cm.sendGetText("请输入新的主题名称：");
            select = 8888;
            isError = 0;
            return;
        }
        if (select == 9998) {
            if (cm.addSection(cm.getText())) {
                cm.sendOk("新增 #r" + cm.getText() + "#k 版块成功！");
                cm.worldMessage2(2, "[论坛] :  " + MC + "论坛 < " + cm.getText() + " > 版块开通了");
            } else {
                cm.sendOk("新增板块失败，已有当前名称相同的版块！");
            }
            cm.dispose();
            return;
        }
        thread = cm.getThreadById(selectId, selection);
        var cid = thread.getCharacterId();
        threadId = selection;
        threadName = thread.getThreadName();
        var sectionName = "" + 蘑菇 + "#e#b " + threadName + " #k#n\r\n";
        sectionName += "" + 蘑菇 + "#d[楼主]：#r" + thread.getCharacterName() + "#k\r\n";

        var Forum_Reply = cm.getCurrentAllReply(threadId);
        if (Forum_Reply.size() != 0) {
            for (var i = 0; i < Forum_Reply.size(); i++) {
                if (i == 0) {
                    sectionName += "[内容]：\r\n#d  " + Forum_Reply.get(i).getNews() + "#k\r\n";
                    sectionName += "[时间]：" + thread.getReleaseTime() + "\r\n";
                    sectionName += "#L8886##b[回帖]#k#k#l#L8884##b[赞:" + thread.getUp() + "]#k#l#L8885##r[踩:" + thread.getDown() + "]#k#l\r\n\r\n";
                    sectionName += "_____________________________________________________\r\n";
                } else {
                    sectionName += "" + 蘑菇 + "#r[" + (i + 1) + "楼 " + Forum_Reply.get(i).getCharacterName() + "]#k：#d";
                    sectionName += Forum_Reply.get(i).getNews() + "\r\n";
                }
            }
        } else {
            sectionName += "\r\n当前主题内没有任何内容！";
        }
        if (cm.getPlayer().isGM()) {
            sectionName += "\r\n\r\n\r\n\r\n\r\n\r\n\r\n#r#L8889#[删帖]#l#k";
        } else if (cm.getPlayer().getId() == cid) {
            sectionName += "\r\n#r#L8889##e==============【删除当前主题】==============#n#l#k";
        }
        cm.sendNext(sectionName);
    } else if (status == 3) {
        if (selection == 8884) {
            thread.setUp(thread.getUp() + 1);
            cm.setBossLog("每日顶贴");
            cm.sendOk("已顶！");
            cm.dispose();

            return;
        } else if (selection == 8885) {
            thread.setDown(thread.getDown() + 1);
            cm.sendOk("已踩！");
            cm.dispose();
            return;
        } else if (selection == 8886 || select == 8886) {
            cm.sendGetText("请输入回复内容：");
            select = 8886;
            return;
        } else if (selection == 8887) {
            cm.sendOk("加精当前主题");
            cm.dispose();
            return;
        } else if (selection == 8888) {
            cm.sendOk("置顶当前主题");
            cm.dispose();
            return;
        } else if (selection == 8889) {
            if (cm.deleteThread(selectId, threadId)) {
                cm.sendOk("删除 #r" + threadName + "#k 主题成功！");
            } else {
                cm.sendOk("删除主题失败，出现了未知的异常！");
            }
            cm.dispose();
            return;
        }
        if (select == 8888) {
            if (isError == 1) {
                cm.sendOk("请充新输入标题！");
                status -= 2;
            }
            if (cm.getText().indexOf("#v") != -1) {
                cm.sendOk("输入的主题标题有误，请重新输入！");
                status -= 2;
                return;
            }
            newThreadName = cm.getText();
            cm.sendGetText("请输入新主题内容：");
            select = 8888;
        }
    } else if (status == 4) {
        if (select == 8888) {
            cm.sendYesNo("请核对主题标题：" + newThreadName + "\r\n\r\n请核对主题内容：" + cm.getText() + "\r\n\r\n 是否发布？");
            isError = 1;
        } else if (select == 8886) {
            cm.sendYesNo("请核对回复内容：" + cm.getText() + "\r\n\r\n 是否发布？");
        }
    } else if (status == 5) {
        if (select == 8888) {
            if (cm.addThread(selectId, newThreadName, cm.getPlayer().getId(), cm.getPlayer().getName())) {
                threadId = cm.getThreadByName(selectId, newThreadName).getThreadId();
                if (cm.addReply(threadId, cm.getPlayer().getId(), cm.getPlayer().getName(), cm.getText())) {
                    cm.sendOk("发布 #r" + newThreadName + "#k 主题成功！");
                    cm.setBossLog("每日发帖");
                } else {
                    cm.sendOk("回帖失败，异常！");
                }
            } else {
                cm.sendOk("发布主题失败，可能已有当前名称相同的主题！");
            }
            cm.dispose();
            return;
        } else if (select == 8886) {
            if (cm.addReply(threadId, cm.getPlayer().getId(), cm.getPlayer().getName(), cm.getText())) {
                cm.setBossLog("每日回帖");
                cm.sendOk("回帖成功！");
            } else {
                cm.sendOk("回帖失败，异常！");
            }
            cm.dispose();
        }
    }
}