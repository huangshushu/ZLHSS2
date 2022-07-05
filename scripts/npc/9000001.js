var status = 0;
var banMap = Array(109080000, 109080010, 109040000, 109030001, 109060000, 109010000);

function start() {
    cm.sendNext("嗨 我是 #b江#k. 我在等待我的兄弟 #b保罗#k. 他应该现在在这里...");
}


function action(mode, type, selection) {
    for (var i = 0; i < banMap.length; i++) {
        if (cm.getPlayer().getMapId() == banMap[i]) {
            cm.sendOk("干！想要偷跑吃屎去吧！");
            cm.dispose();
        }
    }
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 2 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            cm.sendNextPrev("嗯......我该怎么办？本次活动将开始，很快......很多人去参与这项活动，所以我们最好快点来......");
        } else if (status == 2) {
            cm.sendSimple("嗨... 你为什么不跟我走？我想我的兄弟会与其他人...\r\n#L0##e1.#n#b 什么样的活动内容??#k#l\r\n#L1##e2.#n#b 介绍活动内容让我认识..#k#l\r\n#L2##e3.#n#b 好了，我们走吧！#k#l");
        } else if (status == 3) {
            if (selection == 0) {
                cm.sendNext("所有本月初，枫之谷环球庆祝其三周年！全球机制将举行惊喜GM活动在整个活动期间，所以留在你的脚趾，并确保参与活动的至少一个为伟大的奖品！");
                cm.dispose();
            } else if (selection == 1) {
                cm.sendSimple("有许多活动官则。这将帮助在你开始活动之前。好了...选择你想了解的活动.. #b\r\n#L0# 爬绳子#l\r\n#L1# 终极忍耐#l\r\n#L2# 滚雪球#l\r\n#L3# 打果子#l\r\n#L6# 打瓶盖#l\r\n#L4# 是非题大考验#l\r\n#L5# 寻宝#l#k");
            } else if (selection == 2) {
                if (!cm.canHold()) {
                    cm.sendNext("请确认是否身上有空位。");
                } else if (cm.getChannelServer().getEvent() > -1) {
                    if (cm.haveItem(4031017)) {
                        cm.removeAll(4031017);
                    }
                    if (cm.getPlayer().getLevel() >= 10) {
                        cm.saveReturnLocation("EVENT");
                        cm.getPlayer().setChalkboard(null);
                        cm.warp(cm.getChannelServer().getEvent(), cm.getChannelServer().getEvent() == 109080000 || cm.getChannelServer().getEvent() == 109080010 ? 0 : "join00");
                    } else {
                        cm.sendOk("必须达到10级才能使用。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendNext("活动尚未开放，请确认是否你有在24小时内参加过一个活动。请稍后在试！");
                }
                cm.dispose();
            }
        } else if (status == 4) {
            if (selection == 0) {
                cm.sendNext("#b[爬绳子]#k 自己#e#rGoogle#k!");
                cm.dispose();
            } else if (selection == 1) {
                cm.sendNext("#b[终极忍耐] 自己#e#rGoogle#k!");
                cm.dispose();
            } else if (selection == 2) {
                cm.sendNext("#b[滚雪球]#k 自己#e#rGoogle#k!");
                cm.dispose();
            } else if (selection == 3) {
                cm.sendNext("#b[打果子]#k 自己#e#rGoogle#k!");
                cm.dispose();
            } else if (selection == 6) {
                cm.sendNext("#b[打瓶盖]#k 自己#e#rGoogle#k!");
                cm.dispose();
            } else if (selection == 4) {
                cm.sendNext("#b[是非题大考验]#k 自己#e#rGoogle#k!");
                cm.dispose();
            } else if (selection == 5) {
                cm.sendNext("#b[寻宝]#k 自己#e#rGoogle#k!");
                cm.dispose();
            }
        }
    }
}
