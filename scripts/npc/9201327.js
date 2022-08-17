function start() {
    cm.sendYesNo("(这里是参加本次活动的传送口，你要去参加吗?)");
    
}

function action(mode, type, selection) {
    if (mode == 1) {
		var map = cm.getMapId();
        var tomap = "990000620";
       
	//if (map == 101050000) {
       // item = 1032033;
       
//	} else if (map == 108010201) {
//	    tomap = 101000000;
//	} else if (map == 108010301) {
//	    tomap = 102000000;
//	} else if (map == 108010401) {
//	    tomap = 103000000;
//	} else if (map == 108010501) {
//	    tomap = 120000000;
	//}   
        cm.warp(tomap);
        
    }
    cm.dispose();
}

