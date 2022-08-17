/*
 ZEVMS冒险岛(079)游戏服务端
 */
var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendPlayerToNpc("Afrien？佛洛伊德！你没事吧？");
	} else if (status == 1) {
		cm.sendNextNoESC("梅赛德斯。。。你幸存下来了。");
	} else if (status == 2) {
		cm.sendPlayerToNpc("当然。我设法把他封住了。我不能让自己为此而死。你呢？其他的呢？他们在哪里？");
	} else if (status == 3) {
		cm.sendNextNoESC("我们可能打败了黑魔法师，但他让每个人在最后一个咒语中飞向不同的方向。我们很幸运，我们在同一个地方结束了。");
	} else if (status == 4) {
		cm.sendPlayerToNpc("我不知道我们走了多远。至少我们是安全的。我感觉很虚弱…寒冷…这里总是下雪吗？天气很热，但是下雪了。奇怪…");
	} else if (status == 5) {
		cm.sendNextNoESC("你感觉不到吗？梅赛德斯，伟大的诅咒…已经在你身上，佛洛伊德和其他人。冰冷的诅咒，紧贴着你。它看起来像黑色法师不让我们这么容易。");
	} else if (status == 6) {
		cm.sendPlayerToNpc("诅咒…你应该能够生存下来，但是佛洛伊德呢？他看起来很虚弱…");
	} else if (status == 7) {
		cm.sendNextNoESC("我来照顾他。现在，我更担心你。你是精灵的傀儡。如果诅咒在你身上，它将被放在精灵的地狱里！如果你在所有精灵精灵身上都有诅咒，那么你必须回到你的子民身上。");
	} else if (status == 8) {
		cm.sendPlayerToNpc("...! 好吧！Afrien，我们会再见面的！");
	} else if (status == 9) {
		cm.sendPlayerToNpc("(其他的“英雄”将使它到不知怎的。现在，我会返回到镇，用我的技能.)");
	} else if (status == 10) {
		cm.warp(910150001,0);
		cm.dispose();
	}
}