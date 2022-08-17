
var status = 0;
var selStr;
var sel;
var selitem;
var a=Math.floor(Math.random()*10+5);
var b=Math.floor(Math.random()*20+10);
var c=Math.floor(Math.random()*20+5);
var d=Math.floor(Math.random()*10+3);
var ass=d+b*c+a;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	var haogan=cm.getChar().getMapId()-744000003;
	if(cm.getChar().getMapId()==744000001){
		haogan=20;
	}
	if(cm.getbosslog("haogan"+cm.getChar().getMapId())>0){
		haogan=0;
	}
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
		if(cm.getbosslog("haogandt")==0){
			selStr = "Let me give you a test:#b\r\n";
			selStr+=d+" + "+b+" x "+c+" + "+a+" = ?";
			cm.sendGetNumber(selStr,1,1,9999);
		}else{
			selStr = "okay.Please raise his/her FriendShip level!\r\n#e#k(FriendShip points available #r"+haogan+"#k )please choose:#n#b\r\n";
			selStr+="#L0##eJoe(DEX)#n (Got #r"+cm.getChar().getgetschool(0)+"#b Friendship Points.)#l\r\n";
			selStr+="#L1##eHermoninny(INT)#n (Got #r"+cm.getChar().getgetschool(1)+"#b Friendship Points.)#l\r\n";
			selStr+="#L2##eLittle Dragon(STR)#n (Got #r"+cm.getChar().getgetschool(2)+"#b Friendship Points.)#l\r\n";
			selStr+="#L3##eIka(LUK)#n (Got #r"+cm.getChar().getgetschool(3)+"#b Friendship Points.)#l\r\n";
			cm.sendSimple(selStr);
		}
    } else if (status == 1) {
		if(cm.getbosslog("haogandt")==0){
			if(selection==ass){
				status=-1;
				cm.setbosslog("haogandt");
				cm.getPlayer().getMap().startSimpleMapEffect("Good.I think your IQ is not low..lmao!", 5120067);
				cm.sendNext("Correct! You get a point, so you pass!");
			}else{
				cm.sendOk("oh.The answer is wrong!");
				cm.dispose();
			}
		}else{
			if(cm.getbosslog("haogan"+cm.getChar().getMapId())==0){
				cm.setbosslog("haogan"+cm.getChar().getMapId());
				cm.getChar().setgetschool(selection,haogan+cm.getChar().getgetschool(selection));
				cm.sendOk("FriendShip points has been allocated!please move to next map!");
			}else{
				if(cm.getChar().getMapId()==744000001){
					cm.warp(744000000,0);
				}else{
					cm.sendOk("FriendShip points has been allocated!please move to next map!");
				}
			}
			cm.dispose();
		}
	}
}