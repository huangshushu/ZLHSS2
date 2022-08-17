
function action() {
    cm.setBossRankCount9("赞助",100);
    //cm.说明文字("恭喜你获得 #r赞助#k x 100 。");
	cm.增加赞助余额(100);
    cm.对话结束();
	cm.gainItem(2022428, -1);
	//cm.sendOk("领取成功！");
			cm.全服喇叭(9,"[充值]  玩家 " +  cm.getPlayer().getName() + " 充值100元赞助");
			cm.getPlayer().setOneTimeLoga('100赞助');
            cm.dispose();
}