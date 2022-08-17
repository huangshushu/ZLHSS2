/****
 * @author Diffusion a.k.a Ace
 * @purpose: ChickenMS Exchanger.
****/
var status = 0;
var choices = ["Trade:#v4000252#(#e#r666#n#k)#e for 1 billion mesos!"," Exchange: 1 billion mesos for #v4000252# (#e#r300#k#n)"];
var ServerName = "ChickenMS";
function start() {
    var msg = "#eHey there #h #, What can i do for you?";
    for (var i = 0; i < choices.length; i++) 
        msg += "\r\n\t#L"+i+"#"+choices[i]+"#l";
    cm.sendSimple(msg);
}

function action(m,t,s) {
	if (m < 1) {
		cm.dispose();
		return;
	} else {
		status++;
	}
	if (status == 1) {
		sel = s;
		if (s == 0) {
            if(cm.haveItem(4000252, 666) && cm.getMeso() <= 1000000000) {             
                cm.gainMeso(1000000000);
                cm.gainItem(4000252,-666);
                cm.sendOk("Thank you for your mesos!\r\nEnjoy your stay in #b"+ServerName+"!#k");
				cm.dispose();
			} else {
                cm.sendOk("Sorry, You dont have any #v4000252# or you have over 1 billion mesos already.!");
                cm.dispose(); 
			}	
        } else if (s == 1) {
            if(cm.getMeso() >= 1000000000) {
                cm.gainMeso(-1000000000);
                cm.gainItem(4000252,300);
                cm.sendOk("Thank you for your item!\r\nEnjoy your stay in #b"+ServerName+"!#k");
				cm.dispose();
            } else {
                cm.sendOk("Sorry, you don't have enough mesos!");
                cm.dispose();
			}
        } else if (s == 2) {
            if(cm.haveItem(4000187, 1)) {
                cm.gainMeso(100000000);
                cm.gainItem(4000187,-1);
                cm.sendOk("Thank you for your item!\r\nEnjoy your stay in #b"+ServerName+"!#k");
                cm.dispose();
            } else {
                cm.sendOk("Sorry, you don't have a #v4000187#!");
                cm.dispose();
            }
        } else if (s == 3) {
            if(cm.getMeso() >= 100000000) {
                cm.gainMeso(-100000000);
                cm.gainItem(4000187,1);
                cm.sendOk("Thank you for your mesos!\r\nEnjoy your stay in #b"+ServerName+"!#k");
				cm.dispose();
            } else {
                cm.sendOk("Sorry, you don't have enough mesos!\r\nEnjoy your stay in #b"+ServerName+"!#k");
                cm.dispose();
			}
        } else if (s == 4) {
            cm.sendGetText("How many Lupin Erasers do you want?");
            status = 999;
			}
        } else if (status == 1000) {
            if (cm.getPlayer().getMeso() >= 200000000 * cm.getText()) {
            cm.gainMeso(-200000000 * cm.getText());
            cm.gainItem(4001040, cm.getText());
            cm.sendOk("Done! Enjoy your stay in #b"+ServerName+"!#k");
            cm.dispose();
            } else {
            var formula = 200000000 * cm.getText();
            cm.sendOk("You don't have " + formula + " mesos. You only have " + cm.getPlayer().getMeso() + " meso(s).");
            cm.dispose();
		}
	}
}
