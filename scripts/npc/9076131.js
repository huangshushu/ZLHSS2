function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 920011200) { //exit
        for (var i = 4001044; i < 4001064; i++) {
            cm.removeAll(i); //holy
        }
        cm.warp(933030000);
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("OrbisPQ");
    var eim = cm.getEventInstance();
    if (em == null || eim == null) {
        cm.sendOk("请稍后再试.");
        cm.dispose();
        return;
    }

    if (!cm.isLeader()) {
        cm.sendOk("请让队长跟我对话!");
        cm.dispose();
        return;
    }
    if (eim.getProperty("pre").equals("0")) {
        cm.sendNext("为了解救雅典娜女神,需要收集到被破环的女神的碎片.还有生命草.那么开始对女神塔进行搜索吧.");
        eim.setProperty("pre", "1");
        cm.dispose();
        return;
    }
    switch (cm.getPlayer().getMapId()) {
        case 933031000://女神之塔 - &lt;中央塔>
            cm.sendNext("为了解救雅典娜女神,需要收集到被破环的女神的碎片.还有生命草.那么开始对女神塔进行搜索吧.");
            cm.dispose();
            break;
        case 933032000://女神之塔 - &lt;休息室>
            if (eim.getProperty("stage").equals("0")) {
                cm.sendOk("请找到今天所属的LP唱片,并放到女神留声机那边播放\r\n#v4001056#星期天\r\n#v4001057#星期一\r\n#v4001058#星期二\r\n#v4001059#星期三\r\n#v4001060#星期四\r\n#v4001061#星期五\r\n#v4001062#星期六\r\n");
            } else if (eim.getProperty("stage").equals("1")) {
                if (cm.canHold(4001046, 1)) {
                    cm.gainItem(4001046, 1); //third piece
                    cm.givePartyExp(3500);
                    clear();
                    eim.setProperty("stage", "2");
                } else {
                    cm.sendOk("请确认你有足够的空间!");
                }
            } else {
                cm.sendOk("非常感谢你!");
            }
            break;
        case 933033000:// 女神之塔 - &lt;仓库>
            if (!cm.haveItem(4001051, 15)) {
                cm.sendOk("消灭怪物收集碎片并交给我,我将把它们修复好");
            } else {
                cm.removeAll(4001051);
                cm.gainItem(4001045, 1); //second piece
                cm.givePartyExp(3500);
                clear();
            }
            //消灭了所有的独角狮.请队长和帮佣易克对话,执行下一阶段>.
            break;
        case 933034000:// 女神之塔 - &lt;散步路>
            if (!cm.haveItem(4001050, 30)) {
                cm.sendOk("在这个阶段需要从怪物身上收集到30快小碎片,然后带回来给我,我将把它们修复好!");
            } else {
                cm.removeAll(4001050);
                cm.gainItem(4001048, 1); //first piece
                cm.givePartyExp(3500);
                clear();
            }
            break;
        case 933035000:// 女神之塔 - &lt;向上通道>
            if (em.getProperty("stage6").equals("0")) {
                var react = Array();
                var total = 0;
                for (var i = 0; i < 3; i++) {
                    if (cm.getMap().getReactorByName("" + (i + 1)).getState() > 0) {
                        react.push("1");
                        total += 1;
                    } else {
                        react.push("0");
                    }
                }
                if (total != 2) {
                    cm.sendOk("地图顶部有开关,请开启正确的2个开关.");
                } else {
                    var num_correct = 0;
                    for (var i = 0; i < 3; i++) {
                        if (em.getProperty("stage62_" + i).equals("" + react[i])) {
                            num_correct++;
                        }
                    }
                    if (num_correct == 3) {
                        if (cm.canHold(4001049, 1)) {
                            clear();
                            cm.gainItem(4001049, 1); //sixth
                            cm.givePartyExp(3500);
                            em.setProperty("stage6", "1");
                        } else {
                            cm.sendOk("请确认你有足够的背包空间!");
                        }
                    } else {
                        cm.showEffect(true, "quest/party/wrong_kor");
                        cm.playSound(true, "Party1/Failed");
                        if (num_correct >= 1) { //this should always be true
                            cm.sendOk("其中一个错了.");
                        } else {
                            cm.sendOk("全部都错了....");
                        }
                    }
                }
            } else {
                cm.sendOk("非常感谢你!!");
            }
            break;
        case 933036000://女神之塔 - &lt;中央塔>
            if (em.getProperty("stage").equals("4")) {
                if (em.getProperty("finished").equals("0")) {
                    cm.warpParty(920010800); //GARDEN.	
                } else {
                    cm.sendOk("谢谢你救了雅典娜女神! 请和她对话!");
                }
            } else {
                cm.sendOk("请救救雅典娜女神!收集4块碎片,并带回来复原女神像.!");
            }
            break;
        case 933037000:// 女神之塔 - &lt;庭园>
            cm.sendNext("请找到消灭精灵爸爸的方法! 消灭食人花找到种子,并种下去,一旦你发现黑色的邪恶食人花,打败他,就会召唤出精灵爸爸,打败精灵爸爸来获得拯救雅典娜女神的生命草!!!");
            //消灭了远古精灵.请队长去帮佣易克那里领取生命草,移动到中央房间.
            break;
        case 933038000:// 女神之塔 - &lt;女神之祝福>
            break;
    }
    cm.dispose();
}

function clear() {
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
}
