//cherry_MS
importPackage(net.sf.cherry.client);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
		if(cm.getLevel() < 30 || cm.getBossLog("wugong") == 10){
        cm.sendOk("挑战蜈蚣大王需要条件：\r\n最低等级 ：30级\t\t你的等级：#r"+cm.getLevel()+"级#k\r\n每天进入次数：12次\t你已经进入：#r"+cm.getBossLog("wugong")+"#k次 !");
		cm.dispose();
		return;
		}else{
		cm.warp(701010321, 0);
		cm.setBossLog('wugong');
		cm.sendNext("每天进入次数：12次！\t你已经进入：#r"+cm.getBossLog("wugong")+"次#k,看来你在执行秘密任务，祝你好运气。。。");
		cm.dispose();
			}
	}
}}	
