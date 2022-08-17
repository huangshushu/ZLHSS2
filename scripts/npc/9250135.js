


var status = -1;

function start() {
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == 1) {
status++;
} else {
if (status == 1) {
cm.sendNext("Talk to me again later.");
cm.dispose();
return;
}
status--;
}
if (status == 0) {
cm.sendPlayerToNpc("I'm not walking outta here until I clear this mess up!");
} else if (status == 1) {
cm.sendNextPrev("This whole thing stinks of jealousy! We're the only commoners with a direct line to the king. I guarantee that put a thorn under somebody's seat. Some blasted fool out there wants to put a smudge on the name of every boundy hunter in the galaxy!"); 
} else if (status == 2) {
cm.sendPlayerToNpc("You think is was an inside job? Someone at the palace?");
} else if (status == 3) {
cm.sendPlayerToNpc("I guess they didn't think too hard about who they picked to run a scheme on... Somebody's gonna pay for running my day.");
} else if (status == 4) {
cm.sendNextPrev("We can figure out who to work on later. Somebody had access to the king and somebody took him down. How many people do you think could get through those defenses besides us?");
} else if (status == 5) {
cm.sendNextPrev("I guarantee that's what everybody's gonna think. No matter how hard we try to convince these jackboots that we were trying to help, they're just gonna see an outsider with a little too much blood on their hands. You have to escape and you have to do it right now.");
} else if (status == 6) {
cm.setFree();
cm.dispose();
}
}