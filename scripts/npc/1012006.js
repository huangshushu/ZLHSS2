var status = 0;
var pet = null;
var theitems = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("好吧，下次见.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("我是宠物训练师，你找我有什么事情吗？ #b\r\n#L0#请告诉我关于这里.#l\r\n#L1#我想要开始试炼.#l\r\n#L2#我想找你学习群宠技能.#l#k");
        } else if (status == 1) {
            if (selection == 0) {
                cm.sendOk("这条路是你和宠物一起锻炼的地方。你可以在这里只散散步，但也可以利用这里的障碍物训练宠物。如果你和宠物还不够亲密的话，它可能会不听你的话。你想在这里训练你的宠物吗？");
				cm.dispose();
            } else if (selection == 1) {
				if (cm.haveItem(4031035)) {
					cm.sendOk("你已经有我的信件了，拿上他，去上面找到我的弟弟，他会给你相应的奖励。");
					cm.dispose();	
				} else {
                	cm.gainItem(4031035, 1);
					cm.sendOk("稍等一下，我给你写一封信，保管好它，并且把它交给我的弟弟，你将会得到你该得到的东西！");
					cm.dispose();
					}
            } else if (selection == 2) { //revive	
                cm.sendOk("勇气可嘉，等你准备好，就找我开始试炼吧，当你第一次完成试炼，将会教会你群宠技能！");
				cm.dispose();
            }
        } 
    }
}