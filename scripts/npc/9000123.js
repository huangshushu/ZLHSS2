/* RED 1st impact
    Big Headward
    Made by Daenerys
*/
var status = -1;
var sel = 0;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	    cm.sendSimple("Hi. I'm Big Head Kingdom's #b#p1012117##k. If you have a #bSpecial Hair Coupon#k or #b#t05150040##k, #b#t05150087##k why not let me take care of your hair?\r\n#b#L1# Change Hairstyle (Royal Hair Coupon)#l\r\n#b#L2# Change Hairstyle (All Stars Hair coupon)#l\r\n#b#L16# Change Hairstyle (Crazy Hair coupon)#l#k");		
    } else if (status == 1) {
        sel = selection;
	  if (selection == 0) {		
	    cm.sendYesNo("When you use the Royal Hair Coupon, you get a new, random hairdo. Are you sure you want to use #b#t05150040##k and change your hair?");
        cm.dispose();		
     } else if (selection == 1) {
		cm.sendYesNo("When you use the All Stars Hair coupon, you get a new, random hairdo. Are you sure you want to use #b#t05150061##k and change your hair?");
        cm.dispose();	   
     } else if (selection == 2) {
		cm.sendYesNo("When you use the Messed-Up Hair coupon, you get a new, random hairdo. Are you sure you want to use #b#t05150087##k and change your hair?");
        cm.dispose();	  
	   }
	    cm.dispose();
    }
}
