var q = 1000;
function start() {
	if (cm.getLevel() < 180) {
		cm.sendOk("你真棒，跳上来了呀，等你达到180级就可以领取奖励了。");
		cm.dispose();
		return;
	}
	if (cm.getEventCount("跳跳"+cm.getPlayer().getMapId())<1)
	{
		cm.setEventCount("跳跳"+cm.getPlayer().getMapId());
		cm.dispose();
		cm.warp(101050000);
		cm.gainNX(2,q);
		cm.sendOk("恭喜你获得了"+q+"抵用券");
		
		
	} else {
		cm.sendOk("你今天已经领取过奖励了哦~每天只有一次领奖机会，可不要太贪心呢！");
		cm.dispose();
	}
}

