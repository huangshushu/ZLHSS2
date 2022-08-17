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
        selStr = "Have you been to school today yet?#b\r\n";
		selStr+="#L4##eWhat's Friendship?#n#l\r\n";
		selStr+="#L0##eJoe(DEX)#n (Got #r"+cm.getChar().getgetschool(0)+"#b Friendship Points.)#l\r\n";
		selStr+="#L1##eHermoninny(INT)#n (Got #r"+cm.getChar().getgetschool(1)+"#b Friendship Points.)#l\r\n";
		selStr+="#L2##eLittle Dragon(STR)#n (Got #r"+cm.getChar().getgetschool(2)+"#b Friendship Points.)#l\r\n";
		selStr+="#L3##eIka(LUK)#n (Got #r"+cm.getChar().getgetschool(3)+"#b Friendship Points.)#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
		sel=selection;
		if(sel==4){
			cm.sendOk("Attend Red Leaf High School to gain Friendship with the popular students and build up your reputation as the toughest kid in class! Earning Friendship will also give you access to the Four Pillars of Heaven Cash Shop, where you can purchase Totems with mesos! Remember, you'll need Friendship if you want to unlock the good stuff! ");
			cm.dispose();
		}
        if(sel==0){
			selStr = "You Got Joe Friendship Points : #r"+cm.getChar().getgetschool(sel)+".#b\r\n\r\n";
			selStr+="#L0##e#z1202026##n (#r500#b Friendship Points.)#l\r\n";
			selStr+="#L1##e#z1202025##n (#r1000#b Friendship Points.)#l\r\n";
			selStr+="#L2##e#z1202024##n (#r3000#b Friendship Points.)#l\r\n";
			selStr+="#L3##e#z1202023##n (#r8000#b Friendship Points.)#l\r\n";
			cm.sendSimple(selStr);
		}
		if(sel==1){
			selStr = "You Got Hermoninny Friendship Points : #r"+cm.getChar().getgetschool(sel)+".#b\r\n";
			selStr+="#L0##e#z1202030##n (#r500#b Friendship Points.)#l\r\n";
			selStr+="#L1##e#z1202029##n (#r1000#b Friendship Points.)#l\r\n";
			selStr+="#L2##e#z1202028##n (#r3000#b Friendship Points.)#l\r\n";
			selStr+="#L3##e#z1202027##n (#r8000#b Friendship Points.)#l\r\n";
			cm.sendSimple(selStr);
		}
		if(sel==2){
			selStr = "You Got Little Dragon Friendship Points : #r"+cm.getChar().getgetschool(sel)+".#b\r\n";
			selStr+="#L0##e#z1202034##n (#r500#b Friendship Points.)#l\r\n";
			selStr+="#L1##e#z1202033##n (#r1000#b Friendship Points.)#l\r\n";
			selStr+="#L2##e#z1202032##n (#r3000#b Friendship Points.)#l\r\n";
			selStr+="#L3##e#z1202031##n (#r8000#b Friendship Points.)#l\r\n";
			cm.sendSimple(selStr);
		}
		if(sel==3){
			selStr = "You Got Ika Friendship Points : #r"+cm.getChar().getgetschool(sel)+".#b\r\n";
			selStr+="#L0##e#z1202038##n (#r500#b Friendship Points.)#l\r\n";
			selStr+="#L1##e#z1202037##n (#r1000#b Friendship Points.)#l\r\n";
			selStr+="#L2##e#z1202036##n (#r3000#b Friendship Points.)#l\r\n";
			selStr+="#L3##e#z1202035##n (#r8000#b Friendship Points.)#l\r\n";
			cm.sendSimple(selStr);
		}
	} else if (status == 2) {
		if(sel==0){
			if(selection==0){
				if(cm.getChar().getgetschool(sel)>=500){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-500);
					cm.makeitem(1202026,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
			if(selection==1){
				if(cm.getChar().getgetschool(sel)>=1000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-1000);
					cm.makeitem(1202025,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
			if(selection==2){
				if(cm.getChar().getgetschool(sel)>=3000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-3000);
					cm.makeitem(1202024,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
			if(selection==3){
				if(cm.getChar().getgetschool(sel)>=8000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-8000);
					cm.makeitem(1202023,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
		}
		if(sel==1){
			if(selection==0){
				if(cm.getChar().getgetschool(sel)>=500){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-500);	
					cm.makeitem(1202030,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
			if(selection==1){
				if(cm.getChar().getgetschool(sel)>=1000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-1000);
					cm.makeitem(1202029,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
			if(selection==2){
				if(cm.getChar().getgetschool(sel)>=3000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-3000);
					cm.makeitem(1202028,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
			if(selection==3){
				if(cm.getChar().getgetschool(sel)>=8000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-8000);
					cm.makeitem(1202027,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
		}
		if(sel==2){
			if(selection==0){
				if(cm.getChar().getgetschool(sel)>=500){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-500);
					cm.makeitem(1202034,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
			if(selection==1){
				if(cm.getChar().getgetschool(sel)>=1000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-1000);
					cm.makeitem(1202033,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
			if(selection==2){
				if(cm.getChar().getgetschool(sel)>=3000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-3000);
					cm.makeitem(1202032,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
			if(selection==3){
				if(cm.getChar().getgetschool(sel)>=8000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-8000);
					cm.makeitem(1202031,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
		}
		if(sel==3){
			if(selection==0){
				if(cm.getChar().getgetschool(sel)>=500){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-500);
					cm.makeitem(1202038,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
			if(selection==1){
				if(cm.getChar().getgetschool(sel)>=1000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-1000);			
					cm.makeitem(1202037,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
			if(selection==2){
				if(cm.getChar().getgetschool(sel)>=3000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-3000);
					cm.makeitem(1202036,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
			if(selection==3){
				if(cm.getChar().getgetschool(sel)>=8000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-8000);
					cm.makeitem(1202035,0,0,0,0,0,0,1,0,"");
					cm.sendOk("Congratulations, exchange success!");
					cm.dispose();
				}else{
					cm.sendOk("you don't have enough FriendShip Points.");
					cm.dispose();
				}
			}
		}
		cm.dispose();
	}
}
