var status, select, select2, select3;
var maps = [
/*Towns*/[130000000, 300000000, 1010000, 680000000, 230000000, 101000000, 211000000, 100000000, 251000000, 103000000, 222000000, 104000000, 240000000, 220000000, 250000000, 800000000, 600000000, 221000000, 200000000, 102000000, 801000000, 105040300, 610010004, 260000000, 540010000, 120000000],
/*MonsterMaps*/[800020110, 270030000, 106020700, 200101000, 211060000, 240040500, 551030100, 211041100, 270020000, 610030010, 682010200, 541000300, 220050300, 102040200, 541020000],
/*BossMaps*/[211042300, 211042301, 240050400, 240060201, 230040420, 240020401, 240020101, 220080000, 270050000, 271040000]
];

function start() {
    //cm.sendOk("Are you enjoying the event?");
    //cm.dispose();
    status = -1;
    if (cm.getPlayer().getLevel() < 10 && cm.getPlayer().getJob() != 200) {
        cm.sendOk("Please talk to me at level 10.");
        cm.dispose();
        return;
    }
    checkGift();
    cm.sendSimple("Hello #r#h0##k! How can I help you today?\r\n#b#L0#I want to go somewhere#l\r\n#L1#I want to buy something#l\r\n#L2#Trade Mesos#l"/* + "\r\n#L3#View achievements#l"*/ + "\r\n#L4#Game Options#l" + "\r\n#L5#Vote in-game#l" + /* "\r\n#L6#View rankings and speed runs#l"*/ + "\r\n#L7#View Player Ranking#l" /*\r\n#L8#Check the drops of a monster#l*/ + "\r\n#L10#Job Advance#l\r\n#k");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    switch (status) {
        case 0:
            select = selection;
            switch (selection) {
                case 0:
                    cm.sendSimple("\r\n#b#L0#Town maps#l\r\n#L1#Monster maps#l\r\n#L2#Boss maps#l"/* + "\r\n#L2#Internet Cafe#l"*/ + "#k");
                    break;
                case 1:
                    cm.sendSimple("\r\n#b#L0#Universal Shop (mesos)#l\r\n#L1#Talk to Lilin (Cash)#l\r\n#L2#Talk to Cygnus (Vote Points)#l\r\n#L3#Talk to T-1337 for item buffs (mesos)#l");
                    break;
                case 2:
                    cm.sendSimple("\r\n#b#L0#Trade a Platform Puppet for mesos#l\r\n#L1#Trade mesos for a Platform Puppet#l");
                    break;
                case 4:
                    cm.sendSimple("\r\n#L0#Toggle Super Megaphones Viewability#l\r\n#L1#Toggle Background Viewability#l");
                    break;
                case 5:
                    if (cm.getPlayer().canVote()) {
                        for (var i = 0; i < 10; i++)
                        cm.sendGMBoard("http://www.gtop100.com/in.php?site=72995");
                        //Send it a few times incase they didn't get it
                        cm.getPlayer().setVote();
                        cm.getPlayer().gainVPoints(1);
                        cm.sendOk("Please click on the envelope on your right side of the screen.");
                    } else {
                        cm.sendOk("You have already voted in the past 6 hours.");
                    }
                    cm.dispose();
                    break;
                case 7:
                    cm.displayCustomRanks();
                    cm.dispose();
                    break;
				case 10:
					cm.dispose();
					cm.openNpc(9900002);
				break;
                case 8:
                    if (cm.getMap().getAllMonstersThreadsafe().size() <= 0) {
                        cm.sendOk("There are no monsters in this map.");
                        cm.dispose();
                        return;
                    }
                    var selStr = "Select which monster you wish to check.\r\n\r\n#b";
                    var monsterIterator = cm.getMap().getAllUniqueMonsters().iterator();
                    while (monsterIterator.hasNext()) {
                        var nextMonster = monsterIterator.next();
                        selStr += "#L" + nextMonster + "##o" + nextMonster + "##l\r\n";
                    } 
                    cm.sendSimple(selStr);
                    break;
                default:
                    cm.dispose();
                    return;
            }
            break;
        case 1:
            select2 = selection;
            switch (select) {
                case 0:
                    var mapselection;
                    mapselection = getMapSelection(selection);
                    cm.sendSimple(mapselection);
                    break;
                case 1:
                    cm.dispose();
                    if (select2 == 0)
                        cm.openShop(3001019);//was 61
                    else
                        cm.openNpc(select2 == 1 ? 9010036 : select2 == 2 ? 9010034 : 9201101);
                    break;
                case 2:
                    switch (selection) {
                        case 0:
                            if (cm.getMeso() >= 1147483647) {
                                cm.sendOk("You must have room for mesos before doing the trade.");
                            } else if (!cm.haveItem(4001454, 1)){
                                cm.sendOk("You do not have a Platform Puppet.");
                            } else {
                                if (cm.removeItem(4001454)) {
                                    cm.gainMeso(1000000000);
                                    cm.sendOk("Thank you for the trade, I have given you 1 billion for the Platform Puppet.");
                                } else {
                                    cm.sendOk("Please unlock your item.");
                                }
                            }
                            cm.dispose();
                            break;
                        case 1:
                            if (cm.getMeso() < 1030000000) {
                                cm.sendOk("You must have 1,030,000,000 mesos before doing the trade.");
                            } else if (!cm.canHold(4001454,1)) {
                                cm.sendOk("Please make room.");
                            } else {
                                cm.gainItem(4001454, 1);
                                cm.gainMeso(-1030000000);
                                cm.sendOk("Thank you for the trade, I have given you Platform Puppet for 1,030,000,000 meso (1 billion + 0.03% tax).");
                            }
                            cm.dispose();
                            break;
                        default:
                            cm.dispose();
                            return;
                    }
                    break;
                case 4:
                    if (selection == 0) {
                        cm.getPlayer().setSmega();
                    } else if (selection == 1) {
                        cm.getPlayer().toggleCustomBGState();
                    }
                    cm.dispose();
                    break;
                case 8:
                    cm.sendOk(cm.checkDrop(selection));
                    cm.dispose();
                    break;
                default:
                    cm.dispose();
                    return;
            }
            break;
        case 2:
            select3 = selection;
            switch (select) {
                case 0:
                    cm.sendNextPrev("So you have nothing left to do here? Do you want to go to #m" + maps[select2][selection] + "#?");
                    break;
                default:
                    cm.dispose();
                    return;
            }
            break;
        case 3:
            switch (select) {
                case 0:
                    cm.warp(maps[select2][select3]);
                    cm.dispose();
                    break;
                default:
                    cm.dispose();
                    return;
            }
        default:
            cm.dispose();
            return;
    }
}

function getMapSelection(index) {
    var selStr = "Select your destination.#b";
    for (var i = 0; i < maps[index].length; i++)
        selStr += "\r\n#L" + i + "##m" + maps[index][i] + "# #l";
    return selStr;
}


function checkGift() {
    if (!cm.isQuestFinished(29003)/* && !cm.haveItem(1142184, 1, true, true)*/) {
        //if (!cm.haveItem(1002419, 1, true, true) && cm.canHold(1002419,1)) {
        //    cm.gainItem(1002419, 1);
        //}
        //if (cm.canHold(1142184,1)) {
        cm.addReward(1, 1002419, 0, 0, 0, "A reward for those who are playing the CBT.");
        cm.addReward(1, 1142184, 0, 0, 0, "A reward for those who are playing the CBT.");
        cm.getPlayer().updateReward();
        //cm.gainItem(1142184, 1);
        cm.gainMeso(250000);
        cm.forceCompleteQuest(29003);
        cm.sendOk("Welcome! As a complementary gift, I present to you these for your journey! If you wish to buy Cash related items, please visit the Cash Shop or visit the NPC in FM!");
        //} else {
        //    cm.sendOk("Please get an inventory space.");
        //}
        cm.dispose();
        return;
    }
}