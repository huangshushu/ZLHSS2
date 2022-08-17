var status;
var newhandMap = 101050000;        //  进入地图
var SteppedSnailMap = 260010601;  //   羊羊地图
var changeJobMap = 101050000;    //    出去地图
var text;
var freetimes = 1;		     // 免费次数
var basemeso = 200000000;	// 起步收费
var needmeso = 0;
var icon = "#fEffect/CharacterEff.img/1082565/2/0#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else {
            cm.dispose();
            return;
        }

        if (status == 0) {
            var times = cm.getPQLog("星星副本");
            text = "#e#r\t\t\t狂虐 羊羊 星星 进行曲#k#n\r\n";
            text += "#d　　　当日已进入副本：[ #r" + times + "#d ] - 玩家「 #r#h # 」#d#k#n\r\n\r\n";
            text += "#d#e-副本介绍\r\n#k#n";
            text += "#d\t\t\t\t副本时间限制 #r5#d 分钟\r\n";
            text += "\t经验按照时间递增 [但若积累过多羊羊会崩溃游戏]\r\n";
            text += "\t尽量多消灭羊羊-星星与魔方的数量在于消灭小绵羊\r\n";
            text += "\t经验值的信息:▲采用递增方式星星经验互不耽误▲\r\n";
            text += "\t星星魔方信息:▲每只都必出星星　魔方属于概率▲\r\n";
            text += "#r\t\t\t　福利丰富玩家不容错过\r\n#k#n";
            text += "　#i1142813# #i5062009# #i5062002# #i3015034# #i2340000# #i2614017# #i2531000# #i1402014#\r\n";
            cm.sendOkS(text, 1);
        } else if (status == 1) {
            text = "#d\r\n\r\nAre you ready? \r\n\r\n一起狂虐羊羊吧！经验 星星 魔方 让你爽到不要不要的#k#n\r\n\r\n";
            text += "#r羊羊土豪门票：30\r\n羊羊金币门票：200000000\r\n#b下回金币门票：" + 10000 + "#k\r\n\r\n";
            text += "#L0#" + icon + " 金币参与 " + icon + "#l　\t\t　#L1#" + icon + " 土豪参与 " + icon + "#l\r\n";
            cm.sendYesNo(text);
        } else if (status == 2) {
            if (selection == 0) {
                var canenter = true;
                if (cm.getPlayer().getLevel() < 100) {
                    cm.sendOk("死亡可不会怜悯你的，100级后再来吧！");
                    canenter = false;
                } else if (cm.getParty() != null) {
                    cm.sendOk("请退出当前队伍");
                    canenter = false;
                } else if (cm.getMeso() < needmeso) {
                    cm.sendOk("您的金币不足#r" + needmeso + "#k，无法再次挑战");
                    canenter = false;
                }

                if (canenter) {
                    var em = cm.getEventManager("xxevent");
                    if (em == null) {
                        cm.sendOk("副本出错，请联系GM");
                        cm.dispose();
                        return;
                    }
                    var eim = em.newInstance(cm.getPlayer().getName());
                    var map = eim.createInstanceMapS(SteppedSnailMap);
                    var player = cm.getPlayer();
                    var tomap = em.getMapFactoryMap(changeJobMap);
                    eim.registerPlayer(player);
                    player.changeMap(map, map.getPortal(0));
                    eim.startEventTimer(60000 * 5);
                    cm.setPQLog("星星副本");
                    cm.gainMeso(-needmeso);
                    cm.worldSpouseMessage(20,"[羊羊提示] : 玩家[" + cm.getPlayer().getName() + "] 参与了 羊羊进行曲 ※ 星星 魔方 享不停 ※ - 加油吧");
                    cm.dispose();
                } else {
                    cm.dispose();
                    return;
                }
            } else if (selection == 1) {
                var canenter = true;
                if (cm.getPlayer().getLevel() < 100) {
                    cm.sendOk("死亡可不会怜悯你的，100级后再来吧！");
                    canenter = false;
                } else if (cm.getParty() != null) {
                    cm.sendOk("请退出当前队伍");
                    canenter = false;
                } else if (cm.getHyPay(1) < 30) {
                    cm.sendOk("您的元宝小于 #r30#k 无法再次挑战");
                    canenter = false;
                }

                if (canenter) {
                    var em = cm.getEventManager("sheepn");
                    if (em == null) {
                        cm.sendOk("副本出错，请联系GM");
                        cm.dispose();
                        return;
                    }
                    var eim = em.newInstance(cm.getPlayer().getName());
                    var map = eim.createInstanceMapS(SteppedSnailMap);
                    var player = cm.getPlayer();
                    var tomap = em.getMapFactory().getMap(changeJobMap);
                    eim.registerPlayer(player);
                    player.changeMap(map, map.getPortal(0));
                    eim.startEventTimer(60000 * 5);
                    cm.setPQLog("星星副本");
                    cm.addHyPay(50);
                    cm.worldMessageYellow("[羊羊副本] : 玩家[" + cm.getPlayer().getName() + "] 参与了 羊羊进行曲 ※ 星星 魔方 享不停 ※ - 加油吧");
                    cm.dispose();
                } else {
                    cm.dispose();
                    return;
                }
            }
        }
    }
}
function getNeedMeso(times) {

    if (times < freetimes) {
        return 0;
    } else {
        times -= freetimes - 1;
    }
    var meso = 0;
    var lastmeso = new Array();
    for (var i = 0; i < times; i++) {
        if (lastmeso.length < 2) {
            meso += basemeso;
        } else {
            meso = lastmeso[i - 2] + lastmeso[i - 1];
        }
        lastmeso.push(meso);
    }
    return meso;
}