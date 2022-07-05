var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.givePartyItems(4001161, 0, true);
        cm.givePartyItems(4001162, 0, true);
        cm.givePartyItems(4001163, 0, true);
        cm.givePartyItems(4001169, 0, true);
        cm.givePartyItems(2270004, 0, true);
        cm.sendSimple("#e<组队副本：拯救艾琳森林>#n\r\n冒险岛世界,这里看上去好像是过去的金银岛.但是这是怎么回事?有怪人出现,正在污染艾琳森林?这可不行.一定要帮帮他们啊!不过干涉过去的历史好像不太好的样子.....借助艾琳的魔法,可以介入历史的同事,拯救艾琳森林吗?拯救森林,收集#b阿尔泰碎片#k,然后去兑换#b阿尔泰耳环#k吧!\r\n您当前累计通关：#r"+cm.getBossRankCount('毒物副本总次数')+"#k次\r\n您当前带新通关：#r"+cm.getBossRankCount('越级毒物副本总次数')+"#k次" +
            "\r\n您当前累计通关点数：#r" + cm.getBossRankPoints("毒雾副本总点数") + "#k点\r\n" +
            "\r\n#L0#兑换阿尔泰耳环#l\r\n#L1#兑换发光阿尔泰耳环#l\r\n#L4#兑换闪耀阿尔泰耳环#l\r\n#L2#我要拯救艾琳森林#l#k\r\n"
            // + "#L3#升级阿尔泰耳环"
        );
    } else if (status == 1) {
        if (selection == 0) {
            if (!cm.haveItem(1032060) && cm.haveItem(4001198, 20)) {
                cm.gainItem(1032060, 1, true);
                cm.gainItem(4001198, -20);
            } else {
                cm.sendOk("你需要20个阿尔泰碎片,或者是你已经有阿尔泰耳环了");
            }
            cm.dispose();
        } else if (selection == 1) {
            if (cm.haveItem(1032060) && !cm.haveItem(1032061) && cm.haveItem(4001198, 30)) {
                cm.gainItem(1032060, -1);
                cm.gainItem(1032061, 1, true);
                cm.gainItem(4001198, -30);
            } else {
                cm.sendOk("你需要30个阿尔泰碎片跟阿尔泰耳环,或者是你已经有发光阿尔泰耳环了");
            }
            cm.dispose();
        } else if (selection == 2) {
            if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
                cm.sendOk("找您的队长来和我谈话。");
            } else {
                var party = cm.getPlayer().getParty().getMembers();
                var mapId = cm.getPlayer().getMapId();
                var next = true;
                var size = 0;
                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                    if (ccPlayer == null || ccPlayer.getLevel() < 45 || ccPlayer.getJob() > 900 || ccPlayer.getLevel() > 200) {
                        next = false;
                        break;
                    }
                    size += (ccPlayer.isGM() ? 4 : 1);
                }
                if (next && size >= 3) {
                    var em = cm.getEventManager("Ellin");
                    if (em == null) {
                        cm.sendOk("当前副本有问题,请联络管理员.");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop.equals("0") || prop == null) {
                            em.startInstance(cm.getParty(), cm.getMap());
                            cm.dispose();
                            return;
                        } else {
                            cm.sendOk("里面已经有人了,请你稍后在进入看看,或者更换频道");
                        }

                    }
                } else {
                    cm.sendOk("你的队伍#b成员#k需要#b3个#k以上等级45~200的队员才能进入!");
                }
            }
            cm.dispose();
        } else if (selection == 3) {
            //升级阿尔泰耳环
            cm.dispose();
            cm.openNpc(2133000,1);
        } else if (selection == 4) {
            if (cm.haveItem(1032061) && !cm.haveItem(1032101) && cm.haveItem(4001198, 30)) {
                cm.gainItem(1032061, -1);
                cm.gainItem(1032101, 1, true);
                cm.gainItem(4001198, -30);
            } else {
                cm.sendOk("你需要30个阿尔泰碎片跟发光阿尔泰耳环,或者是你已经有闪耀阿尔泰耳环了");
            }
            cm.dispose();
        }
    }
}