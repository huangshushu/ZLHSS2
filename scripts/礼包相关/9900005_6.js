
function action() {
    cm.setBossRankCount9("赞助",100);
    //cm.说明文字("恭喜你获得 #r赞助#k x 100 。");
	cm.setmoneyb(+3000);
    cm.dispose();
	cm.gainItem(2022428, -1);
	//cm.sendOk("领取成功！");
			cm.全服黄色喇叭( "  恭喜玩家" +cm.getPlayer().getName()+ "充值100元赞助");
			cm.getPlayer().setOneTimeLog('chongzhi21');
            cm.dispose();
}