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
		if(cm.getChar().getMapId()==744000000){
			selStr = "What's the hold up!?Let's go to School start challenge.#k.#b\r\n";
			selStr+="#L1##eEnter School#n(Successful challenge reward NX)#l\r\n";
			selStr+="#L3##eReceive#n #z5252017# (Free)#l\r\n";
			selStr+="#L2#I just wanted to see.lol.#l";
			cm.sendSimple(selStr);
		}else{
			cm.dispose();
			cm.openNpc(9330192,1);
		}
    } else if (status == 1) {
		sel=selection;
        if(sel==1){
			if(cm.haveItem(5252017)){
				var em = cm.getEventManager("study");
				if (em == null) {
					cm.sendOk("please Report to GM.");
				} else {
					var prop = em.getProperty("started");
					if (prop == null || prop.equals("false")) {//prop.equals("false") || 
						em.startInstance_CharID(cm.getPlayer());
						cm.delbosslog("haogan"+744000001);
						cm.delbosslog("haogandt");
						for(var i=4;i<=15;i++){
							cm.delbosslog("haogan"+(744000000+i));
						}
						cm.gainItem(5252017,-1);
						cm.laba(-3,cm.getChar().getName()+" began to challenge HighSchool in "+cm.getC().getChannel()+" channel.");
					} else {
						cm.sendOk("This channel has begun to challenge,please try again later.");
					}
				}
			}else{
				cm.sendOk("You maynot enter.because you donnt have key!");
			}
			cm.dispose();
		}
		if(sel==2){
			cm.dispose();
		}
		if(sel==3){
			if(cm.getbosslog("study")<=2){
				cm.setbosslog("study");
				cm.gainItem(5252017,1);
				cm.sendOk("Congratulations, to receive success.");
			}else{
				cm.sendOk("Today you cannt receive keys!please Come tomorrow or Enter CashShop to buy.");
			}
			cm.dispose();
		}
		cm.dispose();
	 }
}
