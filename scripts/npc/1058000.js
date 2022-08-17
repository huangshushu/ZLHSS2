
var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

	if (mode == 1 && cm.isQuestActive(2607) && cm.itemQuantity(4033178) <1){
		cm.gainItem(4033178,1);
	}
	cm.dispose();
}	
