var status = -1;
function start() {
    if((cm.getPlayer().getLevel() < 19 || cm.getPlayer().getLevel() > 30) && !cm.getPlayer().isGM()){
        cm.sendNext("你如果要参加竞技场，你的等级必须在20级~29级。");
        cm.dispose();
        return;
    }
	cm.openNpc(9310119);
	cm.safeDispose();
	return;
    action(1,0,0);
}

function action(mode, type, selection){
    status++;
    if (status == 4){
        cm.saveLocation("ARIANT");
        cm.dispose();
    }
    if(mode != 1){
        if(mode == 0 && type == 0)
            status -= 2;
        else{
            cm.dispose();
            return;
        }
    }
    if (status == 0)//
        cm.sendNext("My language is really accurate, 2022 is really aliens attacking us.");
    else if (status == 1)
        cm.sendNextPrev("But we have to find a way to defeat them, or the world will be over.");
    else if (status == 2)
        cm.sendSimple("Young people, you have to help us knock them down. It's nothing. The main problem is that an alien drill is trying to drill into the center of the earth. They need some material in the heart of the earth. It's important for them.");
    else if (status == 3)
        cm.sendNext("But we have to organize them, don't we? If the real earth is drilled through, it will be a bad thing.");
}