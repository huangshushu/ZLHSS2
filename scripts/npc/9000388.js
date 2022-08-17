function start() {
	  if (cm.getEventCount("家族任务奖励") > 1) {
		  cm.dispose();
		  
		  cm.sendOk("该账号今天已经领取过2次家族任务奖励了，请明天再来！");
		  
		  return;
	  }
	  
    if (cm.getSpace(2) >= 1) {
        cm.gainItem(2438084, 5);//每日红包
		cm.gainItem(2048723, 20);//永远的涅槃火焰
		cm.gainItem(4001715, 5);//定居金1亿金钱
		cm.gainItem(2614074, 5);//1亿极限突破石100%
		cm.gainItem(4310218, 1);//幻影币
		cm.gainItem(4310217, 1);//神秘精华
		cm.gainItem(4031997, 30);//蘑菇金币
		cm.gainItem(4001126, 3000);//枫叶
		cm.gainItem(4000463, 10000);//国庆币
		cm.setEventCount("家族任务奖励");
		cm.worldSpouseMessage(0x0A, "『家族任务』 ：玩家 " + cm.getChar().getName() + " 完成了家族任务，获得了大量奖励！");
		cm.warp(101050000, 0);
		cm.dispose();
    } else {
        cm.sendOk("您的包裹空间不足，请整理一下包裹吧~");
		cm.dispose();
    }
}