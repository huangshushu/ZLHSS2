function start() {
    cm.getPlayer().changeJob(2410);
    cm.sendOkS("Ah, whatever! My 2nd Job Advancement is way more important than a silly old #o9001045#. It's not like I'm running low on money! I'll just buy a new one!", 16);
    cm.forceCompleteQuest(25101);
    cm.forceCompleteQuest(29968);
    cm.dispose();
}

function action(mode, type, selection) {
    cm.warp(200020001, 0);
    cm.dispose();
}