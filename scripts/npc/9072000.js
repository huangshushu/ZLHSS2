/* RED 1st impact
	Instructor Irvin
    Made by Daenerys
*/
var status;
var selected;

function start() {
    status = 0;
    cm.sendSimple("Get on an airplane to fly far and wide. It's quite refreshing. I'm retired now, but I can still give you some flying tips. #b\r\n\r\n#L0# I want to rent an Airplane.#l\r\n#L1# Explain more about the Airplane.#l\r\n#L2# What kinds of Airplanes are available?#l\r\n#L3# I want to buy an Auto-Pilot Continental Permit!#l");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    switch (status) {
        case 1:
            selected = selection;
            if (selected == 0) {
                cm.sendSimple("Which airplane would you like to rent?\r\n#b\r\n#L0# #fSkill/8000.img/skill/80001027/iconMouseOver# Wooden Airplane (1 day) #r10,000 mesos#b#l\r\n#L1# #fSkill/8000.img/skill/80001027/iconMouseOver# Wooden Airplane (7 days) #r50,000 mesos#b#l\r\n#L2# #fSkill/8000.img/skill/80001028/iconMouseOver# Red Airplane (1 day) #r30,000 mesos#b#l\r\n#L3# #fSkill/8000.img/skill/80001028/iconMouseOver# Red Airplane (7 days) #r150,000 mesos#b#l");//todo handle this
            } else if (selected == 1) {
                cm.sendNext("You... You don't know what an airplane is? Well, I guess it is a little new. It's, er, a bit like the mounts that you have, but can take you long distances, like to other continents.");
            } else if (selected == 2) {
                cm.sendOk("There are two airplanes that can be rented. The first is the #bWooden Airplane#k. It's inexpensive and reliable. The other is the #bRed Airplane#k. This one is more pricey, but flies faster, and will get you to your destination 2 minutes quicker.");
                cm.dispose();            
			} else if (selected == 3) {
                cm.sendSimple("Which permit you want to purchase?\r\n#b\r\n#L0# El Nath Flight Permit (Permanent) #r10000 mesos#b#l\r\n#L2# Ludus Lake Flight Permit (Permanent) #r100000 mesos#b#l\r\n#L3# Aqua Road Flight Permit (Permanent) #r500000 mesos#b#l\r\n#L1# Minar Forest Flight Permit (Permanent) #r2000000 mesos#b#l");
            }
            break;
        case 2:
            if (selected == 0) {//handle
                cm.dispose();
            } else if (selected == 1) {
                cm.sendNextPrev("'Course you can't fly to any continent. You can fly to #bVictoria Island, Ereve, Edelstein, Ludibrium, Ariant, Mu Lung, or Leafre#k from #bOrbis#k, using the airplane. You can also fly the opposite route, of course. Lastly, you can fly to #bVictoria Island#k from #bEdelstein#k, and vice-versa. These are the only locations you can take an airplane to... The others are a bit too dangerous yet...");
            } else if (selected == 3) {//handle
                cm.dispose();
            }
            break;
        case 3:
            if (selected == 0) {//handle
                cm.dispose();
            } else if (selected == 1) {
                cm.sendNextPrev("If you want to go somewhere using an airplane, talk to the various people running the Intercontinental flights like #bIsa the Station Guide#k at Orbis Station or #bCherry Cabin Crew#k at Station to Orbis.");
			}
            break;
        case 4:
            if (selected == 0) {
                cm.dispose();
			} else if (selected == 1) {
                cm.sendOk("That's it. Any more questions?");
				cm.dispose();
			}	
            break;
    }
}