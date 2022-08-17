var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
	
    if (status == 0) {
        cm.sendOk("I can make just about anything! Uncle Pio taught me his trade all troughout my childhood.");
        cm.dispose();
    }
}