	var status; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == 1) { 
        status++; 
    }else{ 
        status--; 
    } 
     
    if (status == 0) { 
      cm.sendSimple("#eHello I'm Vanessa Hudgens I love ChickenMS<3 I can trade 1337 #i4000252# for 10k NX as you can see I'm so Sexy and you can be like me!!\r\n #L0# Yes I have 1337 Chix #l \r\n #L1# No I'm to poor to buy nx."); 
   } else if (status == 1) { 
        if (selection == 0) { 
            if (cm.haveItem(4000252, -1337)) { 
                cm.sendOk("#eLol Niiice you have it! Well, Here you go!");   
			   cm.gainItem(4000252,-1337);
			   cm.getPlayer().getCashShop().gainCash(1, 10000);
                cm.dispose(); 
            }else{ 
                cm.sendOk("#ePlease come back when you get the item."); 
                cm.dispose(); 
            } 
        } else if (selection == 1) { 
            cm.sendOk("#eOh well thats to bad! Come next time!."); 
            cm.dispose(); 
        } 
    }
	}
