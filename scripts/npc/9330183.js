var status = 0;
var selStr;
var sel;
var selitem;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        selStr = "Hey, what's up? You're not in the art club..#b\r\n";
		selStr+="#L1#So, uh, do you have a crush on anybody?#l\r\n";
		selStr+="#L2#I have a crush on you.#l\r\n";
		selStr+="#L3#Let's go out!#l\r\n";
		selStr+="#L4#You make my heart race like crazy..#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
		sel=selection;
        if(sel==1){
			cm.sendOk("Are you for real?..");
		}
		if(sel==2){
			cm.sendOk("oh...dam..");
		}
		if(sel==3){
			cm.sendOk("I....also...um....let's hook up!");
		}
		if(sel==4){
			cm.removeNpc(9330183);
			cm.spawnNpc(9330192,198,157);
			cm.getPlayer().getMap().startSimpleMapEffect("Okay.You win.talk to your teacher to raise their Friendship level!", 5120067);
		}
		cm.dispose();
	}
}