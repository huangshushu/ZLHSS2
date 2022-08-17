var status;
var choice;
var guildName;
var partymembers;

function start() {
    partymembers = cm.getPartyMembers();
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.对话结束();
        return;
    }
    if (status == 0) {
        cm.sendSimple("   我是雷娜里欧！ 很高兴为您服务～#k\r\n\r\n#b#L0#我想要知道公会联盟是什么#l\r\n#L1#我要怎么建立公会联盟呢#l\r\n#L2#我想要建立公会联盟#l\r\n#L3#我想要新增更多的公会到联盟#l\r\n#L4#我想要解散公会联盟#l");
    } else if (status == 1) {
        choice = selection;
        if (selection == 0) {
            cm.说明文字("公会联盟就是让两方的公会成员可以聊天做一些有趣的事情。");
            cm.对话结束();
        } else if (selection == 1) {
            cm.说明文字("为了成立公会联盟，两个公会的会长需要组队，然后这个组队里的队长就会选为公会联盟的会长。");
            cm.对话结束();
        } else if (selection == 2) {
            if (cm.getPlayer().getParty() == null || partymembers == null || partymembers.size() != 2 || !cm.isLeader()) {
                cm.说明文字("你不能创建一个公会联盟，直到你找到另一个公会。");
                cm.对话结束();
            } else if (partymembers.get(0).getGuildId() <= 0 || partymembers.get(0).getGuildRank() > 1) {
                cm.说明文字("你不能创建一个公会联盟，直到你有自己的公会。");
                cm.对话结束();
            } else if (partymembers.get(1).getGuildId() <= 0 || partymembers.get(1).getGuildRank() > 1) {
                cm.说明文字("你的成员似乎没有自己的工会。");
                cm.对话结束();
            } else {
                var gs = cm.getGuild(cm.getPlayer().getGuildId());
                var gs2 = cm.getGuild(partymembers.get(1).getGuildId());
                if (gs.getAllianceId() > 5) {
                    cm.说明文字("你不能再创建因为你已经和其他结为同盟了。");
                    cm.对话结束();
                } else if (gs2.getAllianceId() > 1) {
                    cm.说明文字("你的成员已经和其他公会结为同盟了。");
                    cm.对话结束();
                } else if (cm.partyMembersInMap() < 1) {
                    cm.说明文字("请确保其他成员在同张地图上。");
                    cm.对话结束();
                } else
                    cm.sendYesNo("哦，你有兴趣创建一个公会联盟？");
            }
        } else if (selection == 3) {
            if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
                cm.sendYesNo("为了增加矿大，需要支付 #b10000000#k 金币. 你确定要继续吗？");
            } else {
                cm.说明文字("只有公会联盟长可以扩大联盟。");
                cm.对话结束();
            }
        } else if (selection == 4) {
            if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
                cm.sendYesNo("你真的想要解散公会联盟？？");
            } else {
                cm.说明文字("只有公会联盟长才可以解散。");
                cm.对话结束();
            }
        }
    } else if (status == 2) {
        if (choice == 2) {
            cm.sendGetText("现在请输入你想要的公会联盟名称。");
        } else if (choice == 3) {
            if (cm.getPlayer().getGuildId() <= 0) {
                cm.说明文字("你不能增加不存公会联盟。");
                cm.对话结束();
            } else {
                if (cm.addCapacityToAlliance()) {
                    cm.说明文字("你成功增加了公会联盟容量。");
                } else {
                    cm.说明文字("很抱歉，由于你的公会联盟容量已经满了，所以不能再扩充。");
                }
                cm.对话结束();
            }
        } else if (choice == 4) {
            if (cm.getPlayer().getGuildId() <= 0) {
                cm.说明文字("你不能解散不存在的公会联盟。");
                cm.对话结束();
            } else {
                if (cm.disbandAlliance()) {
                    cm.说明文字("成功解散公会联盟。");
                } else {
                    cm.说明文字("解散公会联盟时候发生错误。");
                }
                cm.对话结束();
            }
        }
    } else if (status == 3) {
        guildName = cm.getText();
        cm.sendYesNo("这个 #b" + guildName + "#k 是你想要的公会联盟名字吗？？");
    } else if (status == 4) {
        if (!cm.createAlliance(guildName)) {
            cm.sendNext("这个名字不能使用，请尝试其他的。");
            status = 1;
            choice = 2;
        } else
            cm.说明文字("成功的创建了公会联盟！！");
        cm.对话结束();
    }
}