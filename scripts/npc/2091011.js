var status = -1;
var sel;
var mapid;
var typed = 0;

function start() {
    mapid = cm.getMapId();
    if (mapid == 925020001) {
        cm.sendSimple("My master is the strongest being in Mu Lung, and YOU wish to challenge HIM? Just don't regret it later. #b\r #L0# I'll challenge myself to Mu Lung Dojo.#l \n\r #L2# I want to receive Mu Gong's Belt.#l \n\r #L4# I want to see what rewards I can get from Mu Lung Dojo.#l \n\r #L6# What's Mu Lung Dojo?#l \n\r #L8# I want to check how many more times I can do the challenge today.#l \n\r #L7##b I want to know my Hard Mode points and grade.#l");
    } else {
        cm.sendYesNo("waaat?do you want to quit?");
    }
}

function action(mode, type, selection) {
    if (mapid == 925020001) {
        if (mode == 1) {
            status++;
        } else {
            cm.dispose();
            return;
        }
        if (status == 0) {
            sel = selection;
            if (sel == 0) {
                //if first time - Hey there! You! This is your first time here, huh? Well, my master doesn't just meet with anyone. He's a busy man. And judging by your looks, I don't think he'd bother. Ha! But, today's your lucky day... I tell you what, if you can defeat me, I'll allow you to see my Master. So, what do you say?
                //map 925020010
                //spawn dis mobs 9300269 and 9999999
                //time 180
                //mapeffect item id 5120024 - text - Ha! Let's see what you got! I won't let you leave unless you defeat me first!
                typed = 1;
                cm.sendSimple("You can take on the dojo on three different difficulties: #bNormal, Hard, and Ranked#k. That way, even shrimps like you can participate. You've gotta be #rLV. 90#k for Normal Mode, #rLV. 120#k for Hard Mode, and #rLV. 130#k for the Ranking Mode. How tough are you feeling?#b \r\n #L0# I'm pretty Normal, let's try that!#l \r\n #L1# I haven't gotten beaten up lately. Hard mode!#l \r\n #L2##r I want to get Ranked!#l");
            }
            if (sel == 2) {//was3
                typed = 2;
                cm.sendYesNo("I'll give you a #bbelt#k if you have some #b#i4001620# #t4001620##k. This belt will disappear after a week though, so collect those Mu Gong's Emblems again if you want another.");
            }
            if (sel == 4) {
                typed = 4;
                cm.sendSimple("You can collect #t4001620#s on any difficulty level, though you'll get more in #bHard Mode#k and #bRanked Mode#k. Once you have enough #t4001620#s, you can exchange them for one of #bMu Gong's Belts#k.#b \n\r #L0#What types of Mu Gong's Belts are there?#l \n\r #L1#What rewards can be earned in Hard Mode and how do I earn them?#l \n\r #L2#What rewards can be earned in Ranked Mode and how do I earn them?#l");
                //cm.sendSimple("You'll be rewarded points based on how well you did in Hard Mode. \r\n#eyou have #r"+cm.getDojoPoints()+" Points#b\n\r #L0# #v2022957# #b#z2022957##r (50 points required)#l \n\r #L1# #v1142386# #b#z1142386##r (50 points required)#l \n\r #L2##b#e Grade SS: #i1022135:# #t1022135# (Duration: 7Days)#r(100 points required)#b#l \n\r #L3# Grade S: #i1022136:# #t1022136# (Duration: 7Days)#r(50 points required)#l");
            }
            if (sel == 5) {
                typed = 5;
                cm.sendSimple("To earn a reward in Ranked Mode, you have to be ranked one of the top 50 players! You'll be competing for the best time against other players for these rewards. Think YOU've got what it takes? Puh-lease! But you should still try.\r\n#e < Ranked Mode Rewards: 7 Day Duration>#n#b\n\r #L0# #i1082392:# #t1082392# #r(Rank 1)#b#l \n\r #L1# #i1082393:# #t1082393# #r(Ranks 2-10)#b#l \n\r #L2# #i1082394:# #t1082394# #r(Ranks 11-50)#l");
            }
            if (sel == 6) {
                cm.sendNext("Our master is the strongest person in Mu Lung. The place he built is called the Mu Lung Dojo, a building that is 47 stories tall! You can train yourself as you go up each level. Of course, it'll be hard for someone at your level to reach the top.");
                cm.dispose();
            }
            if (sel == 7) {//todo finish
                cm.sendSimple("Yikes, you currently only have #b"+cm.getDojoPoints()+"#k points. That's not even enough to reach Grade B. To get to Grade B, you need 100000 points. Work HARDER. Pretend you're ME!");
                cm.dispose();
            }
            if (sel == 8) {//todo add check
                var check1 = cm.getPQLog("dojonorm");
                switch (check1) {
                    case 0:
                        check1 = 3;
                        break;
                    case 1:
                        check1 = 2;
                        break;
                    case 2:
                        check1 = 1;
                        break;
                    case 3:
                        check1 = 0;
                        break;
                }
                var check2 = cm.getPQLog("dojohard");
                switch (check2) {
                    case 0:
                        check2 = 3;
                        break;
                    case 1:
                        check2 = 2;
                        break;
                    case 2:
                        check2 = 1;
                        break;
                    case 3:
                        check2 = 0;
                        break;
                }
                var check3 = cm.getPQLog("dojorank");
                switch (check3) {
                    case 0:
                        check3 = 3;
                        break;
                    case 1:
                        check3 = 2;
                        break;
                    case 2:
                        check3 = 1;
                        break;
                    case 3:
                        check3 = 0;
                        break;
                }
                cm.sendOk("You can do the challenge " + check1 + " more time(s) today for Normal, " + check2 + " more time(s) for Hard and " + check3 + " more time(s) today for Ranked");
                cm.dispose();
            }
        } else if (status == 1) {
            if (typed == 2) {
                typed = 22;
                cm.sendSimple("Which belt do you want? \n\r #b#L0##i1132112:# #t1132112# #r(25 Mu Gong's Emblems required)#b#l#L1##i1132113:# #t1132113# #r(50 Mu Gong's Emblems required)#b#l \n\r #L2##i1132114:# #t1132114# #r(100 Mu Gong's Emblems required)#b#l \n\r #L3##i1132115:# #t1132115# #r(125 Mu Gong's Emblems required)#b#l");
                //cm.dispose();	
            }
            if (typed == 4) {
                if (selection == 0) {
                    cm.sendSimple("Collect #i4001620# #t4001620#s in the dojo to exchange for #bMu Gong's Belts#k. Use the #bBelt Exclusive Scrolls#k that drop once in a while in the dojo to upgrade the belts. \r\n #e <Mu Gong's Emblem Rewards: 15 Day Duration>#n#b \r\n #i1132112:# #t1132112# #r(#t4001620# x 25 required)#b \r\n #i1132113:# #t1132113# #r(#t4001620# x 50 required)#b \r\n #i1132114:# #t1132114# #r(#t4001620# x 100 required)#b \r\n #i1132115:# #t1132115# #r(#t4001620# x125 required)#k");
                    cm.dispose();
                    //if(cm.getDojoPoints()>=50){
                    //		cm.setDojoRecord(false, true, -50);
                    //		cm.gainItem(2022957,1);
                    //		cm.sendOk("congratulation! exchange successed!");
                    //	}else{
                    //		cm.sendOk("You don't have enough Points.");
                    //		}
                }
                if (selection == 1) {
                    cm.sendSimple("You'll be rewarded points based on how well you did in Hard Mode. Points add up each week to put you in a certain Grade. You can then get rewards based on what Grade you achieved. You'll have to work REALLY hard if you want to achieve anything with muscles like that... \r\n #e <Hard Mode Rewards> \r\n #b#e Grade SS: #i1022135:# #t1022135# #r(Duration: 7 Days)#b \r\n Grade S: #i1022136:# #t1022136# #r(Duration: 7 Days)#b \r\n Grade A: #i2022957:# #t2022957# x3 #r(Duration: 7 Days)#b \r\n Grade B: #i2001505:# #t12001505# x10 #r(Duration: 7 Days)#b");
                    cm.dispose();
                    //	if(cm.getDojoPoints()>=50){
                    //		cm.setDojoRecord(false, true, -50);
                    //		cm.gainItem(1142386,1);
                    //		cm.sendOk("congratulation! exchange successed!");
                    //	}else{
                    //		cm.sendOk("You don't have enough Points.");
                    //	}
                }
                if (selection == 2) {
                    cm.sendSimple("To earn a reward in Ranked Mode, you have to be ranked one of the top 50 players! You'll be competing for the best time against other players for these rewards. Think YOU've got what it takes? Puh-lease! But you should still try. \r\n #e < Ranked Mode Rewards: 7 Day Duration>#n#b \r\n #i1082392:# #t1082392# #r(Rank 1)#b \r\n #i1082393:# #t1082393# #r(Ranks 2-10)#b \r\n #i1082394:# #t1082394# #r(Ranks 11-50)");
                    cm.dispose();
                    //	if(cm.getDojoPoints()>=100){
                    //		cm.setDojoRecord(false, true, -100);
                    //		cm.gainItem(1022135,1,false,168,true,1,"");
                    //		cm.sendOk("congratulation! exchange successed!");
                    //	}else{
                    //		cm.sendOk("You don't have enough Points.");
                    //	}
                }
                //if (selection == 3) {
                //	if(cm.getDojoPoints()>=50){
                //		cm.setDojoRecord(false, true, -50);
                //		cm.gainItem(1022136,1,false,168,true,1,"");
                //		cm.sendOk("congratulation! exchange successed!");
                //	}else{
                //		cm.sendOk("You don't have enough Points.");
                //	}
                //}
                cm.dispose();
                return;
            }
            if (typed == 5) {
                cm.sendOk("This will be added when ranked mode is done.");
                cm.dispose();
//				var dojopm=cm.getChar().getdojopm();
//				if (selection == 0) {
//					if(dojopm==1){
//						if(cm.getbosslog("dojopm",3)==0){
//							cm.delbosslog("dojopm");
//							cm.setbosslog("dojopm");
//							cm.makeitem(1082392,0,0,0,0,0,0,1,3,19,"");
//							cm.sendOk("congratulation! rewards sucessed!");
//						}else{
//							cm.sendOk("sorry. 3 days per one times.");
//						}
//					}else{
//						cm.sendOk("Sorry.Your Rank:"+cm.getChar().getdojopm()+"#r(Notice:if Rank=0 then not Rank.)");
//					}
//				}
//				if (selection == 1) {
//					if(dojopm>=2 && dojopm<=5){
//						if(cm.getbosslog("dojopm",3)==0){
//							cm.delbosslog("dojopm");
//							cm.setbosslog("dojopm");
//							cm.makeitem(1082393,0,0,0,0,0,0,1,3,19,"");
//							cm.sendOk("congratulation! rewards sucessed!");
//						}else{
//							cm.sendOk("sorry. 3 days per one times.");
//						}
//					}else{
//						cm.sendOk("Sorry.Your Rank:"+cm.getChar().getdojopm()+"#r(Notice:if Rank=0 then not Rank.)");
//					}
//				}
//				if (selection == 2) {
//					if(dojopm>=6 && dojopm<=10){
//						if(cm.getPQLog("dojopm",3)==0){//getbosslog
//							//cm.delbosslog("dojopm");
//							cm.setPQLog("dojopm");//setbosslog
//							cm.makeitem(1082394,0,0,0,0,0,0,1,3,19,"");
//							cm.sendOk("congratulation! rewards sucessed!");
//						}else{
//							cm.sendOk("sorry. 3 days per one times.");
//						}
//					}else{
//						cm.sendOk("Sorry.Your Rank:"+cm.getChar().getdojopm()+"#r(Notice:if Rank=0 then not Rank.)");
//					}
//				}
//				cm.dispose();
//				return
            }
            if (typed == 1) {
                if (selection == 0) {
                    if (cm.getChar().getLevel() >= 90) {
                        if (cm.getPQLog("dojonorm") >= 3) {
                            cm.sendOk("sorry.Only 3 times per day.");
                        } else {
                            cm.setPQLog("dojonorm");
                            cm.start_DojoAgent(true, false, 925020100);
                        }
                    } else {
                        cm.sendOk("You want to attempt Normal Mode at that level? Please. You need to be at least #rLv. 90#k. Drink some protein shakes and work out some more before you come back, okay?");
                    }
                    cm.dispose();
                }
                if (selection == 1) {
                    if (cm.getChar().getLevel() >= 120) {
                        if (cm.getPQLog("dojohard") >= 3) {
                            cm.sendOk("sorry.Only 3 times per day.");
                        } else {
                            cm.setPQLog("dojohard");
                            cm.start_DojoAgent(true, false, 925030100);
                        }
                    } else {
                        cm.sendOk("You want to attempt Hard Mode at that level? Please. You need to be at least #rLv. 120#k. Drink some protein shakes and work out some more before you come back, okay?");
                    }
                    cm.dispose();
                }
                if (selection == 2) {
                    if (cm.getChar().getLevel() >= 130) {
                        if (cm.getPQLog("dojorank") >= 3) {
                            cm.sendOk("sorry.Only 3 times per day.");
                        } else {
                            cm.sendOk("Sorry, but this mode is still being worked on.");
                            cm.dispose();
                            //cm.setPQLog("dojorank");
                            //cm.start_DojoAgent(true, false, 925040100);
                        }
                    } else {
                        cm.sendOk("You want to attempt Rank Mode at that level? Please. You need to be at least #rLv. 130#k. Drink some protein shakes and work out some more before you come back, okay?");
                    }
                    cm.dispose();
                }
                return;
            }
        }
     else if (status == 2) {
        if (typed == 22) {
            var price = [selection + (selection < 2 ? 1 : 2)] * 25;
            var item = 1132112 + selection;
            if (!cm.haveItem(4001620, price)) {
                cm.sendOk("You don't have enough #t4001620# for a #t" + item  + ". ");
                cm.dispose();
                return;
            }
            cm.gainItem(4001620, -price);
            cm.gainItem(item, 1, false, 168, true, 1, "");
            cm.sendOk("Enjoy.");
            cm.dispose();
            return;
        }
     }
     //cm.warp(925020002);
       // cm.dispose();
    }
}

function get_restinFieldID(id) {
    var idd = 925020002;
    switch (id) {
        case 1:
            idd = 925020600;
            break;
        case 2:
            idd = 925021200;
            break;
        case 3:
            idd = 925021800;
            break;
        case 4:
            idd = 925022400;
            break;
        case 5:
            idd = 925023000;
            break;
        case 6:
            idd = 925023600;
            break;
    }
    for (var i = 0; i < 10; i++) {
        var canenterr = true;
        for (var x = 1; x < 39; x++) {
            var map = cm.getMap(925020000 + 100 * x + i);
            if (map.getCharactersSize() > 0) {
                canenterr = false;
                break;
            }
        }
        if (canenterr) {
            idd += i;
            break;
        }
    }
    return idd;
}

function get_stageId(mapid) {
    if (mapid >= 925020600 && mapid <= 925020614) {
        return 1;
    } else if (mapid >= 925021200 && mapid <= 925021214) {
        return 2;
    } else if (mapid >= 925021800 && mapid <= 925021814) {
        return 3;
    } else if (mapid >= 925022400 && mapid <= 925022414) {
        return 4;
    } else if (mapid >= 925023000 && mapid <= 9250213014) {
        return 5;
    } else if (mapid >= 925023600 && mapid <= 925023614) {
        return 6;
    }
    return 0;
}

function isRestingSpot(id) {
    return (get_stageId(id) > 0);
}