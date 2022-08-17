function start() {
    if(cm.getLevel() >= 30) {
    cm.sendSimple("Looking to get a gander at the fruits of your labor? All help for Part-Time Jobs will be handled by me, #bMs. Appropriation#k.\r\n#b#e#L0# Accept Part-Time Job Reward. #l");
       }
    else {
    cm.sendOk ("Hello. I am Miss Appropriation, and I'm in charge of the Part-Time Jobs. I'm afraid you have to reach #eLv. 30#n before I can give you any work, but come see me when you hit that mark.");
    }

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getPartTime(cm.getPlayer().getId()).getJob() > 0) {
        cm.sendNext("The fruits of labors are always sweet. I hope to see you again.");
        //cm.partTimeReward();
    } else {
        cm.sendOk("Hmm... Are you sure you completed the Part-Time Job? There are no rewards available right now.");
    }
    cm.dispose();
  }
 }